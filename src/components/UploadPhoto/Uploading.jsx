import { useSelector } from 'react-redux';
import styles from './uploading.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Uploading =(props)=>{ 
    const {mainImg,handleValue}=props //mainImg props 사용
    const userState=useSelector((state)=>state.user);
   
    const [inputComment,setInputComment]=useState('');
    const [clickYes,setClickYes]=useState(false);
    const [inputPoint,setInputPoint]=useState('');
    const [tagText, setTagText] = useState('');

    useEffect(() => {
        const inputValue = {
            content: inputComment,
            isSale: clickYes,
            point: inputPoint,
            bookmark: tagText,
        };
        handleValue(inputValue);
    }, [inputComment, clickYes, inputPoint, tagText]);

    
    const handleCommentChange=(event)=>{
        setInputComment(event.target.value);
          //코멘트 값 전달
    };
    const handlePointChange=(event)=>{
        const value = event.target.value.replace(/\D/g, '');
        setInputPoint(event.target.value);
         //포인트 값 전달
    };
    const handleInputChange = (event) => {
        setTagText(event.target.value);
         //북마크 값 전달
    };
    
    
    const checkboxes=document.querySelectorAll('input[name="choice"]');

    function handleCheckboxChange(event){
        const isChecked =event.target.checked;
        checkboxes.forEach(checkbox=>{
            if(checkbox!==event.target){
                checkbox.checked=true;
            }
        });
        event.target.checked=isChecked;
    }
    checkboxes.forEach(checkbox=>{
        checkbox.addEventListener('change',handleCheckboxChange);
    });

    
    const [tags, setTags] = useState([]);
  
  
    const handleAddTag = () => {
      if (tagText.trim() !== '') {
        setTags([...tags, tagText.trim()]);
        setTagText('');
      }
    };
  
    const handleDeleteTag = (tag) => {
      setTags(tags.filter((t) => t !== tag));
    };

    const [clickNo,setClickNo]=useState(false);

    const handleYesClick=()=>{
        
        setClickYes(true);
        setClickNo(false);

    };
    const handleNoClick=()=>{
        
        setClickNo(true);
        setClickYes(false);
        
    }
    const checkOnlyOne=(checkThis)=>{
        const checkboxes=document.getElementsByName('checking');

        for(let i=0;i<checkboxes.length;i++){
            if (checkboxes[i] !== checkThis) {
                checkboxes[i].checked = false
              }
        }
    }
    

        return(
        <>
        <div className={styles.uploadwrap}>
          <p className={styles.head}>사진 올리기</p>
          <div className={styles.uploadbox}>
          {mainImg && <img src={mainImg} alt="미리보기" className={styles.photo} />}
            
            <div className={styles.infowrap}>
                <div className={styles.commentwrap}>
                    <p className={styles.texthead}>코멘트</p>
                    <input type='text' className={styles.commentbox} value={inputComment} onChange={handleCommentChange}/>
                </div>
                
                <div className={styles.bookmarkwrap}>
            <p className={styles.texthead}>북마크 설정</p>
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


            <div className={styles.selectwrap}>
                <div className={styles.wrapping}>
            <div className={styles.selecthead}>
            <p className={styles.texthead}>판매 여부 설정</p>
            <div className={styles.checkboxwrap}>
            <input type='checkbox' name='checking' value='yes' onChange={(e) => checkOnlyOne(e.target)} onClick={handleYesClick} /><p className={styles.answer}>예</p>
            <input type='checkbox' name='checking' value='no'onChange={(e) => checkOnlyOne(e.target)} onClick={handleNoClick}/><p className={styles.answer}>아니요</p>
            </div>
            </div>
            <div className={styles.selectcontent}>
            {clickYes ?(
                <>
                <p className={styles.texthead}>판매 포인트 설정</p><br/>
                <input type='number' placeholder='원하시는 판매 포인트를 입력하세요.' className={styles.inputpoint} value={inputPoint} onChange={handlePointChange} />
                <div className={styles.pointfoot}>
                    <p className={styles.pointcheck}>판매가</p>
                    <p className={styles.pointcheck}>{inputPoint ? `${inputPoint} Point` : ' Point'}</p>
                </div>
                </>
            ):(
                <>
                <h1>* 판매 시 주의사항</h1><br/>
                <h1>판매 설정 시, 해당 사진에 대한 저작권에 대한 책임은 본인에게 있다.</h1>
                </>
            )}
            {/*{clickNo&&(
                <>
                <h1>* 판매 시 주의사항</h1><br/>
                <h1>판매 설정 시, 해당 사진에 대한 저작권에 대한 책임은 본인에게 있다.</h1>
                </>
            )}*/}

            </div>
            </div>
            <div className={styles.selectfoot}>
                <button className={styles.servicebtn}>서비스 약관</button>
                
            </div>
            </div>
            </div>
          </div>
         
          </div>
        </>
    );
}
export default Uploading;