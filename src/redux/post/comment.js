import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../common/api/Api";

export const addComment = createAsyncThunk(
	"commment/addComment",
	async ({ postId, contents, AccessToken }) => {
		try {
			const response = await Api({
				url: `/comment?postId=${postId}`,
				method: "POST",
				data: {
					contents,
				},
				headers: {
					Authorization: `Bearer ${AccessToken}`,
				},

			}).then((response) => {
				console.log(response);
			
			});
			return response;
		} catch (e) {

			return false;
		}
	},
);

export const deleteComment = createAsyncThunk(
	"commment/deleteComment",
	async ({ postId, commentId, AccessToken }) => {
		try {
			const response = await Api({
				url: `/comment/${postId}/${commentId}`,
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${AccessToken}`,
				},

			}).then((response) => {
				console.log(response);
			
			});
			return response;
		} catch (e) {

			return false;
		}
	},
);

export const addReplyComment = createAsyncThunk(
	"commment/addReplyComment",
	async ({ postId, commentId, contents, AccessToken }) => {
		try {
			const response = await Api({
				url: `/comment?postId=${postId}&commentId=${commentId}`,
				method: "POST",
				data: {
					contents,
				},
				headers: {
					Authorization: `Bearer ${AccessToken}`,
				},

			}).then((response) => {
				console.log(response);
			
			});
			return response;
		} catch (e) {

			return false;
		}
	},
);