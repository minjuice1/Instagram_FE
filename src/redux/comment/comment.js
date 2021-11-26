import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../common/api/Api";

export const comment = createAsyncThunk(
	"commment/write",
	async ({ postId, contents, AccessToken }) => {
		try {
			const response = await Api({
				url: `/comment`,
				method: "POST",
				data: {
					postId,
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
