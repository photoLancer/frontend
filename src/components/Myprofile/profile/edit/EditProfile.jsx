import { useState } from 'react';
import styles from './editprofile.module.css';
import Profile from '../Profile';
import { useDispatch, useSelector } from 'react-redux';

const EditProfile=()=>{
    const userState=useSelector((state)=>state.user);

    const [inputValue, setInputValue] = useState('');

    const HandleChange=(event)=>{
        setInputValue(event.target.value);
    };

    const [applyData,setApplyData]=useState(false);
    const [cancelData,setCancelData]=useState(false);

    const applyHandler=()=>{
        setInputValue(inputValue);
        setApplyData(true);
        setCancelData(false);
    };
    const cancelHandler=()=>{
        setInputValue('');
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
                className={styles.imgage}
                />
                <button className={styles.editbtn}>사진 변경</button>
            </div>
            <div className={styles.editinfo}>
                <div className={styles.editinfowrap}>
                <div className={styles.nicknamewrap}>
                <p className={styles.nicknamehead}>닉네임</p><br/>
                <input type='text' className={styles.nickname} placeholder='제목을 입력해주세요'value={inputValue} onChange={HandleChange}/>
                </div>
                <div className={styles.infotextwrap}>
                <p className={styles.infohead}>소개</p><br/>
                <input type='text' className={styles.infotext} placeholder='소개를 입력해주세요' value={inputValue} onChange={HandleChange} />
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
                <div className={styles.tagwrap}>
                {tags.map((tag, index) => (<span className={styles.tag} key={index}>
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
                    <select name='purpse' className={styles.selectbox}>
                        <option className={styles.optionvalue}>취미</option>
                        <option className={styles.optionvalue}>비즈니스</option>
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