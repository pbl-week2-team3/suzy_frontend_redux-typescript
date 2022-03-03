import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostType, PostListType } from "../types";
import { apis } from "../../apis/apis";
import { RootState } from "../store";
import { AxiosResponse } from "axios";

export interface PostListState {
  data: PostListType;
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: PostListState = {
  data: [],
  status: "idle",
};

export const getPostListAsync = createAsyncThunk(
  "posts/getPostList",
  async () => {
    const response: AxiosResponse<any, any> = await apis.posts();
    return response.data;
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    loadPosts: (state, action: PayloadAction<PostListType>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostListAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPostListAsync.fulfilled, (state, action) => {
        state.status = "success";
        return { ...state, ...action.payload };
      })
      .addCase(getPostListAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { loadPosts } = postSlice.actions;
export const selectPostListState = (state: RootState) => state.posts;
export default postSlice.reducer;
