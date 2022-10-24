import React from "react";
import ArticleMain from "./Article/ArticleMain";
import Banner from "./Banner/Banner";
import PostNav from "./post/PostNav";

const Home = () => {
  return (
    <div>
      <Banner />
      <PostNav />
      <ArticleMain />
    </div>
  );
};

export default Home;
