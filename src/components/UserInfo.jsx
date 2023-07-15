import "./profile.css";

const UserInfo=()=>{
    return(
        <>
        <div className="user">
            <div className="userinfo1">
                <div className="userinfo1wrap">
                <div className="myTitle">Beginner</div>  
                <div className="myImg"><img /></div>
                <div className="numbering">
                    <div className="box" value="post">
                        <div>?</div>
                        <div>Posts</div>
                    </div>
                    <div className="box" value="follower">
                        <div>?</div>
                        <div>Followers</div>
                    </div>
                    <div className="box" value="following">
                        <div>?</div>
                        <div>Following</div>
                    </div>
                </div>
                </div>
            </div>
            <div className="userinfo2">
                <div className="userinfo2wrap">
                <div className="myName">Tokemoo</div>
                <div className="infotext"></div>
                <div className="tagging">
                    <span className="tag">##</span>
                    <span className="tag">##</span>
                </div>
            </div>
            </div>
        </div>
        </>
    );

}
export default UserInfo;