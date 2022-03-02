import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <React.Fragment>
            <div>잘못된 요청입니다</div>
            <Link to="/">돌아가기</Link>
        </React.Fragment>
    );

};

export default NotFound;