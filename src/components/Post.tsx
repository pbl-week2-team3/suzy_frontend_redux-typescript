import React, { useRef, useState } from "react";
import { PostType } from "../redux/types";
import { Link, useNavigate } from "react-router-dom";

import { LoadingSpinner, Grid, Image, Heart, Text } from "../elements/index";
import { HighlightOff, Adjust } from "@material-ui/icons";

interface PostProps {
  post: PostType;
  key: number;
}

const Post = (props: PostProps) => {
  console.log(props.post);
  const navigate = useNavigate();
  const editUrl = "/edit/" + props.post.id;

  const userId = localStorage.getItem("userId");

  const [heartActive, setHeartActive] = useState(props.post.like_check);
  const [likeCount, setLikeCount] = useState(props.post.like_count);
  const [isLogin, setIsLogin] = useState(false);

  const postRef = useRef(null);
  const observer: React.MutableRefObject<undefined> = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const intersectionObserver = (entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setIsLoading(true);
      }
    });
  };

  function getTime(regDate: string | Date): string {
    const now = parseInt(Date.now()) / 1000;
    const regDt = parseInt(Date.parse(regDate)) / 1000;
    const result = (now - regDt) / 3600;

    if (result > 24) {
      return parseInt(result / 24) + "일 전";
    } else if (0 < result < 1) {
      return parseInt(result * 60) + "분 전";
    } else {
      return parseInt(result) + "시간 전";
    }
  }

  const onHeartClick = (isLike) => {
    const prevLikeCount = likeCount;
    if (!isLike) {
      setHeartActive(!isLike);
      setLikeCount(prevLikeCount + 1);
      // likeActions.increaseLikeCount();
    } else {
      setHeartActive(!isLike);
      setLikeCount(prevLikeCount - 1);
      // likeActions.decreaseLikeCount();
    }
  };

  React.useEffect(() => {
    observer.current = new IntersectionObserver(intersectionObserver, {
      threshold: 0.7,
    });
    postRef.current && observer.current.observe(postRef.current);
  }, []);

  if (isLoading === false) {
    return (
      <div ref={postRef}>
        <LoadingSpinner width="100%" height="300px" />
      </div>
    );
  } else {
    if (isLogin) {
      return (
        <div ref={postRef}>
          <Grid padding="16px">
            <Grid isFlex>
              <Grid isFlex>
                <Image shape="circle" src={props.post.profile_img} />
                <Text bold>{props.post.nickname}</Text>
              </Grid>
              <Grid isFlex>
                <Text>{getTime(props.post.reg_date)}</Text>
                {props.post.me && (
                  <Grid isFlex>
                    <Link to={"/edit/" + props.post.id}>
                      <Adjust
                        onClick={() => {
                          navigate(editUrl);
                        }}
                      />
                    </Link>
                    <HighlightOff
                      onClick={() => {
                        window.alert("아직 포스트 삭제를 구현하지 않았습니다");
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid padding="16px">
            <Text>{props.post.contents}</Text>
          </Grid>

          <Grid>
            <Image shape="retangle" src={props.post.img_url} />
          </Grid>

          <Grid padding="5px 16px">
            <Grid isFlex>
              {/* <Grid>
										<Text bold>댓글 {comments.length}개</Text>
									</Grid> */}

              <Grid isFlex>
                <Heart
                  active={heartActive}
                  _onClick={() => onHeartClick(heartActive)}
                />
                <Grid padding="0px 5px">
                  <Text bold>좋아요 {likeCount}개</Text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid padding='0px 16px'>
								<Grid isFlex>
									<Input width='100%' />
									<Button>작성</Button>
								</Grid>
							</Grid>
		
							<Grid padding='16px'>
								<CommentList comments={comments} />
							</Grid> */}
        </div>
      );
    } else {
      return (
        <div ref={postRef}>
          <Grid padding="16px">
            <Grid isFlex>
              <Grid isFlex>
                <Image shape="circle" src={props.post.profile_img} />
                <Text bold>{props.post.nickname}</Text>
              </Grid>
              <Grid isFlex>
                <Text>{getTime(props.post.reg_date)}</Text>
              </Grid>
            </Grid>
          </Grid>

          <Grid padding="16px">
            <Text>{props.post.contents}</Text>
          </Grid>

          <Grid>
            <Image shape="retangle" src={props.post.img_url} />
          </Grid>

          <Grid padding="5px 16px">
            <Grid isFlex>
              {/* <Grid>
										<Text bold>댓글 {comments.length}개</Text>
									</Grid> */}

              <Grid isFlex>
                <Heart active={false} />
                <Grid padding="0px 5px">
                  <Text bold>좋아요 {likeCount}개</Text>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid padding='0px 16px'>
								<Grid isFlex>
									<Input width='100%' />
									<Button>작성</Button>
								</Grid>
							</Grid>
		
							<Grid padding='16px'>
								<CommentList comments={comments} />
							</Grid> */}
        </div>
      );
    }
  }
};

export default Post;
