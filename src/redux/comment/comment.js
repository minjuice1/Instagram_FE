import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../common/api/Api";

export const comment = createAsyncThunk(
	"commment/write",
	async (data, AccessToken, thunkAPI) => {
		try {
			console.log(data);
			const response = await Api({
				url: `/comment`,
				method: "POST",
				data: {
					postId: data.postId,
					contents: data.postComment,
				},
				headers: {
					Authorization: `Bearer ${AccessToken}`,
				},
			}).then((response) => {
				console.log(response);
			});
			return response;
		} catch (e) {
			return thunkAPI.rejectWithValue({
				error: "댓글등록실패",
			});
		}
	},
);
