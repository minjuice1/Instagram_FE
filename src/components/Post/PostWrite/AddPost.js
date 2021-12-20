import React, {createRef, useCallback, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addPost} from "../../../redux/post/post";
import {useDropzone} from 'react-dropzone';
import post_write from "../../../image/post_write.png";
import Cropper from 'react-easy-crop'

import "./AddPost.scss";

//포스트 이미지 추가
import "../../../image/post_write.png";
import {add_modal} from "../../../redux/modal/modalSlice";


const AddPost = () => {
  const dispatch = useDispatch();

  //크롭이미지 할 수 있나 처음부터 했어야 했나

  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }, [])

  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };


  //이미지 프리뷰 및 이미지 등록, 이미지 drag&drop 이미지 클릭해서 추가하기.
  //크롭설정
  const [files, setFiles] = useState([]);
  const [noneImage, SetNoneImage] = useState(false);
  const [addNext, SetAddNext] = useState(false);


  //댓글기능 해제
  const [hideComment, SetHideComment] = useState(true);

  const hideCommentClickHandler = () => {
    SetHideComment(!hideComment)
  }


  const ImageClickHandler = () => {
    SetNoneImage(true);
  }
  const addNextClickHandler = () => {
    SetAddNext(true);
  }


  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)

      })))

			SetNoneImage(true);
    },
    noClick: true,
    noKeyboard: true
  });


  //이미지 프리뷰 & 프리뷰 누르고 다음페이지
  const thumbs = files.map(file => (
      <div className="thumb" key={file.name}>
        <div style={thumbInner}>
          <img className="img_preview"
               src={file.preview}
          />
        </div>
      </div>
    ));


  const after_thumbs =
    files.map(file => (
      <div className="thumb" key={file.name}>
        <div style={thumbInner}>
          <img className="img_preview_after"
               src={file.preview}
          />
        </div>
      </div>
    ));

  {/*<Cropper*/}
  {/*  image={yourImage}*/}
  {/*  crop={crop}*/}
  {/*  zoom={zoom}*/}
  {/*  aspect={4 / 3}*/}
  {/*  onCropChange={setCrop}*/}
  {/*  onCropComplete={onCropComplete}*/}
  {/*  onZoomChange={setZoom}*/}
  {/*/>*/}

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);


  //인풋
  const [text, SetText] = useState();
  const [hash, SetHash] = useState();

  const textOnChange = (e) => {
    SetText(e.target.value);
  };


  //해쉬태그 #으로 짤라주기기
  const hashTagCheck = () => {
    let tag = text.match(/#[0-9a-zA-Z가-힣]+/gi);
    SetHash(tag);
  };


	const image_file  = files[0];

  //FormData로 전해주기
  const postWriteClickHandler = () => {
    const AccessToken = localStorage.getItem("user");
    //임시로 지정해줌 댓글기능 해제
    const formData = new FormData();
    const post_data = {
      contents: text,
      hashtags: hash,
      commentIsAllowed: hideComment,
    };
		formData.append("imageFile",(image_file));
    formData.append("data", JSON.stringify(post_data));
    dispatch(
      addPost({
        formData,
        AccessToken,
      }),
    );
  };

  //모달 취소
  const cancleClickHandler = () => {
    dispatch(add_modal());
  }






  //사진 첨부하고 다음 버튼 누르고 난 후
  if (addNext) return (
    <>
      <section className="post_add_container_active">
        {/*이미지 drag&drop 버튼 클릭해서 등록하기 구현*/}
        <div>
          <div className="add_post_title">
            <a>새 게시물 만들기</a> <a className="write_end" onClick={postWriteClickHandler}>등록하기</a>
          </div>

          <div className="add_post_image_after">
            <div>
              <input {...getInputProps()}/>
              {getInputProps && <aside className="thumbsContainer">
                {after_thumbs}
              </aside>}
            </div>
            <div className="add_text_Post">
              <div>아이디</div>
              <textarea className="add_post_input" placeholder="문구 입력..." onChange={textOnChange}
                        onKeyUp={hashTagCheck}/>
              <div className="add_post_menu">위치 추가</div>
              <div className="add_post_menu">접근성</div>
              <div className="add_post_menu">고급 설정
              </div>
              <div>
                <button onClick={hideCommentClickHandler}>댓글 기능 해제</button>
                <a>나중에 게시물 상단의 메뉴(...)에서 이 설정을 변경할 수 있습니다.</a>
              </div>
            </div>
          </div>

        </div>
      </section>
      <div className="add_overlay" onClick={cancleClickHandler}>

      </div>

    </>
  )


  return (
    <>
      <section className="post_add_container">
        {/*이미지 drag&drop 버튼 클릭해서 등록하기 구현*/}
        <div {...getRootProps({className: 'dropzone'})} onChange={ImageClickHandler}>
          <div className="add_post_title">
            {noneImage ?
              <div className="add_image">
                <div>얜화살표</div>
                <div>자르기</div>
                <div onClick={addNextClickHandler}>다음</div>
              </div> :
              <a>새 게시물 만들기</a>
            }</div>
          <div className="add_post_image">
            <input {...getInputProps()}/>
            {getInputProps && <aside className="thumbsContainer">
              {thumbs}

            </aside>}
            {!noneImage &&
            <div className="add_post_image">
              <img src={post_write}/>
              <div>사진과 동영상을 여기에 끌어다 놓으세요</div>
              <button type="button" onClick={open}>컴퓨터에서 선택</button>
            </div>}


          </div>

        </div>
      </section>
      <div className="add_overlay" onClick={cancleClickHandler}>

      </div>

    </>
  );
}

export default AddPost;
