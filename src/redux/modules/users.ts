import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfoType, UserLoginType } from "../types";
import { apis } from "../../apis/apis";
import { RootState } from "../store";
import { AxiosResponse } from "axios";
import { deleteCookie, setCookie } from "../../shared/Cookie";

export interface LoginUserState {
  data: UserInfoType;
  isLogin: boolean;
}

const initialState: LoginUserState = {
  data: {
    userId: "",
    nickname: "",
    profileImgUrl: "",
  },
  isLogin: false,
};

export const loginAsync = createAsyncThunk(
  "users/login",
  async (userInfo: UserLoginType, thunkAPI) => {
    const { userId, password } = userInfo;
    try {
      const response: AxiosResponse<string, any> = await apis.login(
        userId,
        password
      );
      if (response.status === 200) {
        setCookie("token", response.data[0].token, 1);
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response);
      }
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const loginUserSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    logout: (state, action: PayloadAction<UserInfoType>) => {
      state.isLogin = false;
      deleteCookie("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isLogin = false;
      })
      .addCase(loginAsync.fulfilled, (state, { payload }) => {
        state.isLogin = true;
        return { ...state, payload };
      })
      .addCase(loginAsync.rejected, (state) => {
        state.isLogin = false;
        window.alert("다시 로그인을 시도해주세요.");
      });
  },
});

export const { logout } = loginUserSlice.actions;
export const selectLoginUserState = (state: RootState) => state.users;
export default loginUserSlice.reducer;
