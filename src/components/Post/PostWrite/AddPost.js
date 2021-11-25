import { useDispatch } from "react-redux";
import { useState } from "react";
import { addPost } from "../../../redux/post/post";

const AddPost = () => {
	const dispatch = useDispatch();

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

	//FormData로 전해주기
	const postWriteClickHandler = () => {
		const AccessToken = localStorage.getItem("user");
		const formData = new FormData();
		const post_data = {
			contents: text,
			hashtags: hash,
		};
		formData.append("data", JSON.stringify(post_data));

		dispatch(
			addPost({
				formData,
				AccessToken,
			}),
			[],
		);
	};

	return (
		<>
			<div>
				<textarea onChange={textOnChange} onKeyUp={hashTagCheck} />
				<button onClick={postWriteClickHandler}>등록하기</button>
			</div>
		</>
	);
};
export default AddPost;
