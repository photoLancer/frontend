import "./profile.css";

const ProfileFrame=()=>{
    return(
        <>
    <nav className="headchoice">
        <a className="profile" href="#">Profile</a>
        <a className="album" href="#">Album</a>
    </nav>
    <div className="mainbox"></div>
        </>
    );
}
export default ProfileFrame;