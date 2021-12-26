import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
const dumyList = [
  {
    id: 1,
    author: "이정환",
    content: "하이1",
    emotion: 5,
    creadet_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "와하2",
    content: "하이2",
    emotion: 1,
    creadet_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "와하",
    content: "하이3",
    emotion: 2,
    creadet_date: new Date().getTime(),
  },
];
const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dumyList} />
    </div>
  );
};
export default App;
