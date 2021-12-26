import React from "react";

export const DiaryItem = ({ author, content, creadet_date, emotion, id }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(creadet_date).toLocaleString()} </span>
      </div>
      <div className="content">{content} </div>
    </div>
  );
};
export default DiaryItem;
