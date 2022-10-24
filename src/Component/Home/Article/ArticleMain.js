import React, { useEffect, useState } from "react";
import ArticleDetails from "./ArticleDetails";
import Location from "./Location";

const ArticleMain = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch("article.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  return (
    <div className="container d-flex">
      <div className="col-md-8">
        {datas.map((data) => (
          <ArticleDetails key={data._id} data={data}></ArticleDetails>
        ))}
      </div>
      <div className="col-md-4">
        <Location />
      </div>
    </div>
  );
};

export default ArticleMain;
