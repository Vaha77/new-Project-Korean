import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
// const dumyList = [
//   {
//     id: 1,
//     author: "이정환",
//     content: "하이1",
//     emotion: 5,
//     creadet_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "와하2",
//     content: "하이2",
//     emotion: 1,
//     creadet_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "와하",
//     content: "하이3",
//     emotion: 2,
//     creadet_date: new Date().getTime(),
//   },
// ];
const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };
  useEffect(() => {
    getData();
  }, []);
  const onCreate = useCallback((author, content, emotion) => {
    const creadet_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      creadet_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData((data) => [newItem, ...data]);
  }, []);

  const onRemove = useCallback((targetId) => {
    console.log(`${targetId} 가 삭제 돼었습니다.`);
    setData((data) => data.filter((it) => it.id !== targetId));
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    setData((data)=>
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  },[]);
  const getDairyAnalysis = useMemo(() => {
    console.log("일기 분석 시작");

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDairyAnalysis;

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length} </div>
      <div> 기분 좋은 일기 개수 : {goodCount} </div>
      <div> 기분 나쁜 일기 개수 : {badCount} </div>
      <div> 기분 좋은 일기 비율 : {goodRatio} </div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};
export default App;
