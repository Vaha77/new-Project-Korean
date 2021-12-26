import React, { useRef, useState } from "react";

export const DiaryItem = ({
  onEdit,
  onRemove,
  author,
  content,
  creadet_date,
  emotion,
  id,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(content);
  const hendelRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제 하시겠습니까?`)) {
      onRemove(id);
    }
  };
  const localContentInput = useRef();
  const handelQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };
  const handelEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(creadet_date).toLocaleString()} </span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>

      {isEdit ? (
        <>
          <button onClick={handelQuitEdit}>수정 취소</button>
          <button onClick={handelEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={hendelRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};
export default DiaryItem;
