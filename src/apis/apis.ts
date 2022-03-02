import axios from 'axios';
import { Post, Posts } from '../modules/types';
import { getCookie } from '../shared/Cookie';

// 내꺼 로컬 테스트용
// baseURL: "http://localhost:3000",

// 내꺼 배포 테스트용
// baseURL: "http://devmaya.shop",

// 민수님
// baseURL: "http://onlyonep.shop",

// 승민님
// baseURL: "http://52.78.200.34",

// 정용님
// baseURL: "http://xpecter.shop",

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

// .then()으로 넘어가기 전에 token을 header에 추가
api.interceptors.request.use(function (config) {
  const accessToken = getCookie('token');
  config.headers.common['Authorization'] = `Bearer ${accessToken}`;
  return config;
});

export const apis = {
  // post
  posts: () => api.get<Posts>('/api/posts.json'),
  post: (postId: number) => api.get<Post>(`/api/post/${postId}`),
  add: (userId: number, contents: string, img_url: string) =>
    api.post<Post>('/api/post', { userId, contents, img_url }),
  delete: (postId: number) => api.delete<Post>(`/api/post/${postId}`),
  edit: (postId: number, contents: string, imgUrl: string) =>
    api.put<Post>(`/api/post/${postId}`, { contents, imgUrl }),

  // like
  addLike: (postId: number) => api.post<Post>(`/api/post/${postId}/like`),
  cancelLike: (postId: number) => api.delete<Post>(`/api/post/${postId}/like`),

  // user
  // password confirm은 클라이언트단에서 해도 될 건데?
  signup: (id: string, nickname: string, password: string, confirmPassword: string, profileImgUrl) =>
    api.post('/api/register.json', {
      id,
      nickname,
      password,
      confirmPassword,
      profileImgUrl,
    }),
  login: (id: string, password: number) => api.get('/api/login.json'),
  getLoginUserInfo: () => api.get('/api/loginUser.json'),
};
