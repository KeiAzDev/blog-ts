import { useEffect, useState } from "react";
import "./styles/Home.css";
import { collection, deleteDoc, Firestore, getDocs, doc } from "firebase/firestore";
import { auth, db } from "../firebase";

interface Author {
  id: string;
  username: string;
}

interface Post {
  id: string;
  title: string;
  postText: string;
  author: Author;
}

const Home: React.FC = () => {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // console.log(data);
      // console.log(data.docs);
      // console.log(data.docs.map(doc => ({doc})));
      // console.log(data.docs.map(doc => ({...doc.data(), id: doc.id})));
      setPostList(
        data.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            postText: data.postText,
            author: {
              id: data.author.id,
              username: data.author.username,
            },
          };
        })
      );
    };
    getPosts();
  }, []);

  const handleDelete = async(id: string) => {
    await deleteDoc(doc(db, 'posts', id));
    window.location.href = '/';
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
