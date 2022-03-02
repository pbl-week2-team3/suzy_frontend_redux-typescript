import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../modules/posts';

const PostList = () => {
  const dispatch = useDispatch();
  const myPosts = useSelector((state) => state.postReducer);
  console.log(myPosts);

  React.useEffect(() => {
    dispatch(getPosts());
  });

  return (
    <React.Fragment>
      <div>포스트 리스트</div>
    </React.Fragment>
  );
};

export default PostList;
