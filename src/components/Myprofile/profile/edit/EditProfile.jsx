import { useEffect, useState } from 'react';
import styles from './editprofile.module.css';
import Profile from '../Profile';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const EditProfile=()=>{
    const userState=useSelector((state)=>state.user);

    const [inputName, setInputName] = useState('');
    const [inputExplane, setInputExplane] = useState('');
    const [inputPurpose,setInputPurpose]=useState('');

    const HandleNameChange=(event)=>{
        setInputName(event.target.value);
    };
    const HandleExplaneChange=(event)=>{
        setInputExplane(event.target.value);
    };
    const HandlePurposeChange=(event)=>{
        setInputPurpose(event.target.value);
    };
    const HandleBookmarkChange=(event)=>{
        setInputBookmark(event.target.value);
    };

    const [applyData,setApplyData]=useState(false);
    const [cancelData,setCancelData]=useState(false);

    const applyHandler=async()=>{
        console.log('apply');
        try {
            const response=await axios.post(
            `http://photolancer.shop/api/v1/users/update`,  
            {
                userUpdateRequest:{
                    nickname:inputName,
                    explane:inputExplane,
                    purpose:inputPurpose,
                },
                bookmarkDto:{
                    content:tags,
                },
            },
            {
                headers:{
                    Authorization:userState.jwt,
                },
            }
            );
            console.log('Profile updated:',response.data);
            /*console.log('name,explane,purpose updated:',response.data.userUpdateRequest);
            console.log('bookmark updated:',response.data.bookmarkDto);*/
            setInputName(response.data.userUpdateRequest.nickname);
            setInputExplane(response.data.userUpdateRequest.explane);
            setInputPurpose(response.data.userUpdateRequest.purpose);
            setTags(response.data.bookmarkDto.content.join(','));
            setApplyData(true);
            setCancelData(false);

        } catch(error){
            console.error('Error:',error);
        }
    };
    const cancelHandler=()=>{
        setInputName('');
        setInputExplane('');
        setInputPurpose('');
        setInputBookmark('');
        setApplyData(false);
        setCancelData(true);
    };

    const [tagText, setTagText] = useState('');
    const [tags, setTags] = useState([]);
  
    const handleInputChange = (event) => {
      setTagText(event.target.value);
    };
  
    const handleAddTag = () => {
      if (tagText.trim() !== '') {
        setTags([...tags, tagText.trim()]);
        setTagText('');
      }
    };
  
    const handleDeleteTag = (tag) => {
      setTags(tags.filter((t) => t !== tag));
    };

    return(
        <>
        {applyData || cancelData ? (
        <Profile />
        ) : (
        <>
        <div className={styles.header}><p>프로필 수정</p></div>
        <div className={styles.contents}>
            <div className={styles.editimg}>
                <img 
                src={userState.userProfileImg}
                alt='#'
                className={styles.image}
                />
                <button className={styles.editbtn}>사진 변경</button>
            </div>
            <div className={styles.editinfo}>
                <div className={styles.editinfowrap}>
                <div className={styles.nicknamewrap}>
                <p className={styles.nicknamehead}>닉네임</p><br/>
                <input type='text' className={styles.nickname} placeholder='제목을 입력해주세요'value={inputName} onChange={HandleNameChange}/>
                </div>
                <div className={styles.infotextwrap}>
                <p className={styles.infohead}>소개</p><br/>
                <input type='text' className={styles.infotext} placeholder='소개를 입력해주세요' value={inputExplane} onChange={HandleExplaneChange} />
                </div>
                </div>
            </div>
            <div className={styles.thirdbox}>
            <div className={styles.bookmarkwrap}>
            <p className={styles.bookmarkhead}>북마크 설정</p>
            <div className={styles.searchwrap}>
                <input
                type='text'
                className={styles.search}
                placeholder='#Trip'
                value={tagText}
                onChange={handleInputChange}
                />
                <button className={styles.add} onClick={handleAddTag}>+</button></div>
            <div className={styles.tagbox}>
                <div className={styles.tagwrap} onChange={HandleBookmarkChange}>
                {tags.map((tag, index) => (<span className={styles.tag} key={index} >
                    {tag}
                    <button
                        className={styles.delete}
                        onClick={() => handleDeleteTag(tag)}
                    >x</button>
                    </span>
                ))}
                </div>
            </div>
            </div>
            <div className={styles.purpose}>
                <p className={styles.texthead}>이용 목적</p>
                <form className={styles.selection}>
                    <select name='purpse' className={styles.selectbox} value={inputPurpose} onChange={HandlePurposeChange}>
                        <option className={styles.optionvalue}>hobby</option>
                        <option className={styles.optionvalue}>business</option>
                    </select>
                </form>
            </div>
            </div>
            
        </div>
        <div className={styles.footer}>
            <button className={styles.apply} onClick={applyHandler}>적용</button>
            <button className={styles.cancel } onClick={cancelHandler}>취소</button>
        </div>
        </>
        )}
        </>
    );
}
export default EditProfile;