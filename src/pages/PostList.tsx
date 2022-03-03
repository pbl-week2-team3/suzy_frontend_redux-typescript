import React, { useEffect } from "react";
import Post from "../components/Post";
import { Container } from "../elements";
import { useAppDispatch, useAppSelector } from "../redux/lib/reduxHooks";
import { getPostListAsync, selectPostListState } from "../redux/modules/posts";

const PostList = () => {
  const { data, status } = useAppSelector(selectPostListState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchPosts() {
      dispatch(getPostListAsync());
    }
    fetchPosts();
  }, []);

  return (
    <Container>
      {data.map((p, idx) => {
        return <Post post={p} key={idx} />;
      })}
    </Container>
  );
};

export default PostList;
