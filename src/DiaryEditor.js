import React, { useEffect, useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  useEffect(() => {
    console.log("DiaryEditor 렌더");
  });

  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공!");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          value={state.author}
          onChange={handleChangeState}
          name="author"
          placeholder="작성자"
          type="text"
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          value={state.content}
          onChange={handleChangeState}
          name="content"
          placeholder="일기"
          type="text"
        />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default React.memo(DiaryEditor);
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatum ipsam at nobis aliquid veritatis esse voluptatibus sint fugiat fuga quisquam est laboriosam quod quo atque porro, libero natus ipsa? Recusandae vel, soluta maiores cum quo perferendis quae fugit, molestias debitis minima facilis quis laboriosam eveniet, commodi error ipsam fuga voluptates voluptate! Consequuntur maiores, sed adipisci corporis nesciunt velit voluptatibus culpa similique obcaecati enim veniam quae magni. Veniam itaque facilis, minus consequuntur nesciunt, praesentium optio delectus atque saepe sequi et aspernatur eos aut nobis odio cum dicta inventore. Magni ut deleniti voluptatum commodi at veritatis praesentium unde harum ea, quaerat porro, adipisci magnam perferendis, doloremque asperiores animi quisquam culpa. Eaque, itaque. Ab ipsam laborum praesentium unde fugit dolore cum nobis eum, rerum doloremque hic explicabo id enim nostrum, autem porro sint saepe. Voluptas reprehenderit possimus earum mollitia exercitationem doloremque officiis nam dolorem ea ipsam quasi velit molestias iusto doloribus perspiciatis delectus error beatae consectetur saepe, corporis vel illo, ipsum quo voluptatem! Porro nihil mollitia consequuntur similique eos! Adipisci temporibus beatae eum mollitia, deserunt fugit enim aspernatur tempore quis dolorum sint, laboriosam veniam non, omnis delectus. Necessitatibus dolorem accusantium quisquam soluta eius, corporis fuga iusto, assumenda impedit veritatis rerum aliquam totam in provident eos, similique iste repudiandae beatae. Labore quod adipisci, blanditiis repudiandae earum distinctio, eaque obcaecati amet aspernatur eos officiis deleniti libero ipsa. Sint, incidunt harum voluptatibus maxime obcaecati cumque tenetur aliquam praesentium ea, deleniti enim necessitatibus autem possimus in magnam nesciunt magni architecto et alias recusandae velit nostrum exercitationem dolores. Non illum totam quisquam ut fugit distinctio velit rerum! Numquam harum hic sed eos ut rem expedita quidem, perferendis quo modi soluta quasi mollitia corporis accusamus rerum consectetur deleniti incidunt voluptate ab. Officiis, ducimus tempora. Soluta esse consectetur laudantium inventore, atque dolorem cum? Adipisci, officiis recusandae asperiores harum ea aperiam ipsam ab cupiditate. Alias consequatur ea fuga corrupti perferendis, voluptas itaque ipsa dignissimos incidunt laboriosam sed omnis soluta odio provident maiores quia placeat! Exercitationem reiciendis aliquam explicabo sit quaerat officia quasi, commodi voluptas ea non sunt voluptatem dicta eius harum aut delectus aspernatur ipsa dolorum ad vero, quis ducimus, minus laborum. Atque rerum dolore animi fugit vel eaque minus voluptate ipsam debitis rem? Ipsam, dolor voluptatem cupiditate deleniti beatae eius? Ea ex ratione, quas, pariatur nemo cum nulla magnam minima dolores officiis rerum vero placeat. Quisquam asperiores officiis facere ea similique modi molestias officia, ipsam beatae eum maiores consequatur aspernatur recusandae fuga voluptas consequuntur esse necessitatibus porro velit ullam cupiditate magni quo? Hic eveniet nam placeat quibusdam! Vitae maiores officiis velit consequuntur pariatur quod architecto iusto harum error eveniet in ipsum optio, itaque perspiciatis vero perferendis labore aspernatur neque minima impedit eius eaque nemo adipisci. Commodi saepe dolorem eveniet nostrum adipisci assumenda, nam expedita asperiores eum non? Magni, non sit! Nisi porro suscipit quibusdam excepturi. Itaque cumque maiores blanditiis, nostrum ad dolorem quos, deleniti, iste exercitationem molestias ipsum possimus sequi animi. Exercitationem, incidunt voluptate vitae, mollitia impedit beatae aspernatur natus sed cumque ipsa laudantium quae harum unde. Consequuntur minus iure doloremque explicabo enim facere unde, amet repellendus fugiat debitis ratione officia maxime. Impedit vel eveniet deserunt ut, quibusdam commodi cum illum porro dolorum nesciunt eaque iste ducimus repellat omnis fugiat maiores adipisci, facilis iusto saepe maxime rerum! Ratione modi doloribus odit adipisci corrupti accusamus, cum rem sed atque maxime veniam nisi natus iure sit temporibus aperiam nobis mollitia omnis rerum. Quaerat sunt distinctio iusto aspernatur voluptatibus dicta dolores illo minima exercitationem vel beatae esse, non illum quo voluptatem quibusdam ratione, necessitatibus sed. Reiciendis doloribus earum nulla possimus magnam soluta eligendi, fugit cupiditate sit atque fuga sed at quos, odio rem voluptatum beatae inventore nesciunt, sapiente cumque? Ex totam eaque dolore ipsa et, autem dolorum mollitia ad eveniet incidunt perferendis ducimus cumque corrupti nesciunt fugiat explicabo laborum beatae sint at animi commodi exercitationem saepe. Consequuntur, iusto doloribus! Autem, similique, molestiae quidem eum nihil et veniam suscipit laborum vitae iste enim aliquam obcaecati, animi quo corporis ea modi? Obcaecati alias tempora ipsa ducimus optio cumque, aperiam rerum repellat ex sunt, delectus eveniet pariatur eum animi culpa praesentium. Esse fugiat voluptas atque repudiandae excepturi officia, similique ullam sit, numquam repellat impedit nisi modi saepe dolores inventore delectus ab, voluptates maxime repellendus doloremque fugit itaque adipisci iusto. Neque in, laudantium necessitatibus provident voluptas expedita consequuntur similique quos blanditiis error vel doloremque odit dignissimos debitis sint id eum magni quae nostrum mollitia ab magnam minus? Architecto mollitia vitae quos rem, veritatis aspernatur sequi omnis. Id est non reprehenderit nisi quis natus debitis veniam praesentium. Quidem labore dolorem dignissimos, doloremque quo, eaque sunt quam animi magni aperiam sequi incidunt voluptas velit voluptate ipsum sit iste amet ullam inventore sed neque deleniti tempore recusandae similique! Repudiandae asperiores delectus necessitatibus, incidunt iusto reiciendis quod earum hic praesentium tempore in nulla. Quam sequi reprehenderit laborum recusandae, ratione molestias facere mollitia eveniet voluptatibus culpa explicabo itaque repellendus praesentium cumque quidem dolorum blanditiis quos aliquam voluptate id quo! Corrupti, sapiente! Ratione, ex reprehenderit a atque veniam minus dolore, deserunt enim facere ipsam incidunt placeat porro soluta velit consequuntur laboriosam consequatur similique distinctio optio blanditiis quo. Dolorum est quibusdam, in quisquam sit ut cum id libero, sint nisi optio culpa saepe assumenda iste eos. Nulla alias temporibus est in quasi accusamus adipisci quam quis officia aperiam magni quas ullam blanditiis repellat, deleniti eius quae accusantium id, non necessitatibus sunt? Harum aut dolorem fugiat ad eius accusamus dolorum consectetur deserunt. Temporibus doloribus quos minus est, tempora, hic similique dolorum accusamus nulla cumque sapiente labore asperiores modi atque reprehenderit error tempore deleniti explicabo quas eligendi. Voluptatum eveniet exercitationem error assumenda delectus ipsam ratione sint blanditiis repudiandae totam laudantium aut, pariatur numquam tenetur dolor incidunt beatae dolore quidem debitis ad voluptate sunt? Quos eveniet nam consequatur minima cum unde sequi tenetur modi distinctio ipsum pariatur inventore alias, obcaecati necessitatibus veritatis. Nam adipisci, quaerat odit ab natus asperiores reprehenderit mollitia vel magni sunt ducimus consequatur odio quibusdam in numquam? Quae fugiat eum totam aliquid nisi, velit voluptate blanditiis tenetur aperiam quis officia cumque? Recusandae, impedit!
