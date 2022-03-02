import { Post, Posts } from './types';
import { apis } from '../apis/apis';

/*
 * action types
 * action.type이 string type으로 인식되지 않게 하기 위해 as const 사용
 */
const LOAD_POSTS = 'posts/LOAD_POSTS' as const;
const ADD_POST = 'posts/ADD_POST' as const;
const EDIT_POST = 'posts/EDIT_POST' as const;
const DELETE_POST = 'posts/DELETE_POST' as const;

// action creators
export function loadPosts(posts) {
  return {
    type: LOAD_POSTS,
    payload: {
      loading: false,
      error: false,
      data: posts,
    },
  };
}

export function addPost(userId: string, text: string, imgUrl: string) {
  return {
    type: ADD_POST,
    payload: { userId, text, imgUrl },
  };
}

export function editPost(postId: number, contents: string, imgUrl: string) {
  return {
    type: EDIT_POST,
    payload: { postId, contents, imgUrl },
  };
}

export function deletePost(postId: number) {
  return {
    type: DELETE_POST,
    payload: postId,
  };
}

// types
type PostsState = Post[];

type PostAction =
  | ReturnType<typeof loadPosts>
  | ReturnType<typeof addPost>
  | ReturnType<typeof editPost>
  | ReturnType<typeof deletePost>;

// inital state
const initialState: PostsState = [];

// middlewares
export async function getPosts() {
  return async function (dispatch) {
    const data = await apis.posts();
    console.log(data);
    dispatch(loadPosts(data));
  };
}

// reducers
function postReducer(state: PostsState = initialState, action: PostAction): PostState {
  switch (action.type) {
    case LOAD_POSTS:
      return action.payload.data;
    case ADD_POST:
      return;
    case EDIT_POST:
      return;
    case DELETE_POST:
      return;
    default:
      return state;
  }
}

export default postReducer;
