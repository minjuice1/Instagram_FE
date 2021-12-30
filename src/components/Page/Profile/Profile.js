import {React, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import ProfilePosts from "./CommonProfile/ProfilePosts";

// 모달
import ProfileSettingModal from "./CommonProfile/ProfileSettingModal";
// scss, icon, img
import "./Profile.scss";
import {FiPlayCircle} from "react-icons/fi";
import {BiBookmark} from "react-icons/bi";
import {RiAccountBoxLine} from "react-icons/ri";
import {MdGridOn} from "react-icons/md";
import ProfileStory from "./ProfileStory";
import MyProfileInfo from "./MyProfileInfo";
import {useLocation, useParams} from "react-router";
import {getUserPost} from "../../../redux/post/post";
import UserProfileInfo from "./UserProfileInfo";
// import ProfileCollectionModal from './ProfileModal/ProfileCollectionModal';


const Profile = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  //개인 데이터 불러오기
  const {id} = useParams();
  // console.log(id);

  //userpost를 가져오면서 본인이 맞는지 아닌지 확인
  const [myProfile, SetMyProfile] = useState(false);
  const myId = useSelector(state=>state.user.user.userId);

  useEffect(() => {
    if(!myProfile){
      dispatch(getUserPost(id));
    }
    if(myId === id){
      SetMyProfile(true);
    }else{
      SetMyProfile(false);
    }
  }, [dispatch, myProfile, location, id, myId]);

  const post_list = useSelector(state=>state.post.post);

  // 탭 구분

  const savedPath = (location.pathname.split('/')[3] === 'saved');
  console.log(savedPath);

  const [IsSelected, setSelected] = useState(1);
  const [IsSelectedSaved, setSelectedSaved] = useState(3);

  const postClickHandler = () => {
    setSelected(1);
    setSelectedSaved(1);
    navigate(`/profile/${id}`);
  }
  const videoClickHandler = () => {
    setSelected(2);
    setSelectedSaved(2);
    navigate(`/profile/${id}/channel`);
  }
  const savedClickHandler = () => {
    setSelected(3);
    setSelectedSaved(3);
    navigate(`/profile/${id}/saved`);
  }
  const taggedClickHandler = () => {
    setSelected(4);
    setSelectedSaved(4);
    navigate(`/profile/${id}/tagged`);
  }

  // 프로필 편집, 팔로워, 팔로우 모달
  const is_modal = useSelector((state) => state.modal.is_modal);
  const user_info = useSelector(state=> state.post.user);
  const user_data = user_info && user_info[0];
  const my_follow = user_data && user_data.isFollow;

// 저장된 게시물 불러오기
  const savedUser = useSelector((state) => state.post.savedPost);

  // 컬렉션 생성
  const [openModal, setOpenModal] = useState(false);
  const addCollectionHandler = () => {
    setOpenModal(true);
  }

  return (
    <>
      {is_modal && <ProfileSettingModal/>}
      {/*{openModal && <ProfileCollectionModal setOpenModal={setOpenModal}/>}*/}

      <div className="profile_all">
        <div className="profile_content">
          <div className="profile_profileBox">
            {myProfile && user_data &&
            <MyProfileInfo
              userId = {id}
              name = {user_data.name}
              totalFollow = {user_data.totalFollow}
              totalFollower = {user_data.totalFollower}
              totalPost = {user_data.totalPost}
              introdution = {user_data.introdution}
              profileImage={user_data.profileImage}
            />}
            {!myProfile && user_data &&
            <UserProfileInfo
              userId = {id}
              Id = {user_data._id}
              name = {user_data.name}
              totalFollow = {user_data.totalFollow}
              totalFollower = {user_data.totalFollower}
              totalPost = {user_data.totalPost}
              introdution = {user_data.introdution}
              profileImage={user_data.profileImage}
              my_follow={my_follow}
            />}
            {/*<ProfileStory/>*/}

            {savedPath ? (
              <div className="profile_post_dir" role="tablist">

                <a className={IsSelectedSaved === 1 ? "profile_post_clicked" : "profile_post_unclicked"}>
                <span onClick={postClickHandler}>
                    <MdGridOn/> 게시물
                </span>
                </a>

                <a className={IsSelectedSaved === 2 ? "profile_post_clicked" : "profile_post_unclicked"}>
                  <span onClick={videoClickHandler} >
                      <FiPlayCircle/> 동영상
                  </span>
                </a>
          
                {myProfile &&
                <div className={IsSelectedSaved === 3 ? "profile_post_clicked" : "profile_post_unclicked"}>
                  <span onClick={savedClickHandler}>
                    <BiBookmark/> 저장됨
                  </span>
                </div>}         

                <a className={IsSelectedSaved === 4 ? "profile_post_clicked" : "profile_post_unclicked"}>
                  <span onClick={taggedClickHandler}>
                      <RiAccountBoxLine/> 태그됨
                  </span>
                </a>
              </div>
            ) : (
              <div className="profile_post_dir" role="tablist">

                <a className={IsSelected === 1 ? "profile_post_clicked" : "profile_post_unclicked"}>
                <span onClick={postClickHandler}>
                    <MdGridOn/> 게시물
                </span>
                </a>

                <a className={IsSelected === 2 ? "profile_post_clicked" : "profile_post_unclicked"}>
                  <span onClick={videoClickHandler} >
                      <FiPlayCircle/> 동영상
                  </span>
                </a>
          
                {myProfile &&
                <div className={IsSelected === 3 ? "profile_post_clicked" : "profile_post_unclicked"}>
                  <span onClick={savedClickHandler}>
                    <BiBookmark/> 저장됨
                  </span>
                </div>}         

                <a className={IsSelected === 4 ? "profile_post_clicked" : "profile_post_unclicked"}>
                  <span onClick={taggedClickHandler}>
                      <RiAccountBoxLine/> 태그됨
                  </span>
                </a>
              </div>
            )}
            

            {savedPath ? (
              <div className="post_layout">
                <div className={IsSelectedSaved === 3 ? "savedPostBox" : "OtherProfile_postsBox"}>

              {IsSelectedSaved === 1 && (
                <>
                {post_list && post_list.map((img, imgId) => (
                  <Link to={`/postdetail/${img._id}`} >
                    <ProfilePosts
                      key = {imgId}
                      picture = {img.imageUrl}
                      userId = {img._id}/>
                  </Link>
                ))}
                </>
              )}

              {IsSelectedSaved === 2 && (<ProfilePosts/>)}

              {IsSelectedSaved === 3 && (
              <>
                <div className="savedPostBox">
                  <div className="desc_savedPost">저장한 내용은 회원님만 볼 수 있습니다</div>
                  <div className="add_savedPostBox" onClick={addCollectionHandler}>+ 새 컬렉션</div>
                </div>
                <div className="OtherProfile_savedBox">
                  {savedUser && savedUser.map((save, saveId) => (
                    <Link to={`/postdetail/${save._id}`}>
                      <ProfilePosts
                        key = {saveId}
                        picture = {save.imageUrl}
                        userId = {save._id}  />
                    </Link>
                  ))}
                </div>
              </>
              )}

              {IsSelectedSaved === 4 && (<ProfilePosts/>)}

              </div>
            </div>
            ) : (
              <div className="post_layout">
              <div className={IsSelected === 3 ? "savedPostBox" : "OtherProfile_postsBox"}>

              {IsSelected === 1 && (
                <>
                {post_list && post_list.map((img, imgId) => (
                  <Link to={`/postdetail/${img._id}`} >
                    <ProfilePosts
                      key = {imgId}
                      picture = {img.imageUrl}
                      userId = {img._id}/>
                  </Link>
                ))}
                </>
              )}

              {IsSelected === 2 && (<ProfilePosts/>)}

              {IsSelected === 3 && (
              <>
                <div className="savedPostBox">
                  <div className="desc_savedPost">저장한 내용은 회원님만 볼 수 있습니다</div>
                  <div className="add_savedPostBox" onClick={addCollectionHandler}>+ 새 컬렉션</div>
                </div>
                <div className="OtherProfile_savedBox">
                  {savedUser && savedUser.map((save, saveId) => (
                    <Link to={`/postdetail/${save._id}`}>
                      <ProfilePosts
                        key = {saveId}
                        picture = {save.imageUrl}
                        userId = {save._id}  />
                    </Link>
                  ))}
                </div>
              </>
              )}

              {IsSelected === 4 && (<ProfilePosts/>)}

              </div>
            </div>
            )}
              
          </div>
        </div>
      </div>


    </>
  );
};

export default Profile;
