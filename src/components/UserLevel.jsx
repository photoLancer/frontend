const UserLevel =()=>{
    return(
        <>
        <div className="level">
            <div className="levelcheck">
                <div className="levelcheckwrap">
                <div className="levelhead">Your level</div>
                <div className="levelup">
                    <div className="myLevel">Lv.5</div>
                    <div className="levelpercent">90%</div>
                </div>
                <div className="levelment">다음 레벨까지~</div>
                </div>
            </div>
            <div className="titlecheck">
                <span>Your title</span>
                <div className="title">

                </div>
            </div>
            <div className="achievecheck">
                <span>User's Achievement</span>
                <div className="achievement">
                    <div className="achievecontents">??</div>
                    <div className="nonachievecontents">??</div>
                </div>
            </div>
        </div>
        </>
    );
}
export default UserLevel;