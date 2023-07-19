import ProfileFrame from "../ProfileFrame";
import NavPost from "./NavPost";
import EditPhoto from "./EditPhoto";
import UserPhoto from "./UserPhoto";
import styles from './album.module.css';


function Album() {
    return (
        <>
            <NavPost />
            <EditPhoto />
            <UserPhoto />
        </>
    );
}