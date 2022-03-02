type Post = {
    id: number;
    imgUrl: string;
    contents: string;
    nickname: string;
    profileImgUrl: string;
    likeCount: number;
    likeCheck: boolean;
    me: boolean;
    regDate: Date;
};

type Posts = Post[];

type User = {
    userId: string;
    nickname: string;
    profileImgUrl: string;
};

export { Post, Posts };
