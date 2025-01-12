import { useEffect } from "react";
import "./styles/Home.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Home: React.FC = () => {

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'));
      console.log(data);
      console.log(data.docs);
      console.log(data.docs.map(doc => ({doc})));
      console.log(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    }
    getPosts();
  },[]);

  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
          a;lsjfklasjglkjdal;kdjgl;akjsldkjaflkdjklafjlksdjflkasjlkdgoihqeoigjhlakjfdlksjalfjdfasdfasdfasdfasdfdasfd
        </div>
        <div className="nameAndDeleteButton">
          <h3>@keiazdev</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
