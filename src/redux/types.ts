type PostType = {
  id: number;
  img_url: string;
  contents: string;
  nickname: string;
  profile_img: string;
  like_count: number;
  like_check: boolean;
  me: boolean;
  reg_date: Date;
};

type PostListType = PostType[];

type UserInfoType = {
  userId: string;
  nickname: string;
  profileImgUrl: string;
};

type UserLoginType = {
  userId: string;
  password: any;
};

export { PostType, PostListType, UserInfoType, UserLoginType };
