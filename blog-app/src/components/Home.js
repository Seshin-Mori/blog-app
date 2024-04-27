import React from "react";

const Home = () => {
  return (
    <div className='homePage'>
      <div className='postContent'>
        <div className='postHeader'>
          <h1>タイトル</h1>
        </div>
        <div className='postTextContainer'>テスト</div>
      </div>
      <div className='nameAndDeleteButton'>
        <h3>@SeshinMori</h3>
        <button>削除</button>
      </div>
    </div>
  );
};

export default Home;
