import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import "./Home.css";
import { db } from "../firebase";

const Home = () => {
  const [postList, setPostList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  // 現在のページに表示する投稿を計算
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postList.slice(indexOfFirstPost, indexOfLastPost);

  // ページ番号を変更する関数
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='homePage'>
      {currentPosts.map((post) => (
        <div className='postContents'>
          <div className='postHeader'>
            <h1>{post.title}</h1>
          </div>
          <div className='postTextContainer'>{post.postText}</div>
          <div className='nameAndDeleteButton'>
            <h3>
              書いた人：{post.author ? post.author.username : "不明なユーザー"}
            </h3>
            <button>削除</button>
          </div>
        </div>
      ))}
      <div className='pagination'>
        {/* ページネーション用のボタンを表示 */}
        {Array.from(
          { length: Math.ceil(postList.length / postsPerPage) },
          (_, i) => (
            <button
              className={currentPage === i + 1 ? "active" : ""}
              key={i + 1}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
