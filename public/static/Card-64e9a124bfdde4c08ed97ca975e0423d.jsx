import React from "react";

class Card extends React.Component {
  render() {
    return (

      <div id="Card"
        className="card my-2 p-2 shadow-lg bg-secondary">

        <img id="card-image"
          className="card-img shadow-lg img-fluid"
          src="https://picsum.photos/300/200/?random"
          alt="" />

        <div id="card-body"
          className="card-body text-center">

          <h3 id="card-title"
            className="card-title">
            Card Title
            </h3>

          <p id="card-text"
            className="card-text text-truncate">
            Card Text
            </p>

          <a id="card-link"
            href="/"
            className="btn btn-danger btn-block">
            Link
            </a>

        </div>

      </div>
    );
  }
};

const CardGroup = () => {
  return (
    <div id="card-group" className="container-fluid">

      <div className="card-deck">
        {/* <Card /> */}
        <BlogCard />
        <ToDoCard />
      </div>
    </div>

  );
}

const BlogCard = () => {
  return (
    <div id="Card" className="card container-fluid mx-2 my-2 p-2 shadow-lg bg-secondary text-light">
      <img id="card-image"
        className="card-img img-responsive img-thumbnail"
        src="./static/6993928d663e0e6cc67857c0cf1768ba/765ea/StudyGuidesTweet.webp"
        alt="" />

      <div id="card-body"
        className="card-body text-center">

        <h3 id="card-title"
          className="card-title">
          Blog Posts
            </h3>

        <p id="card-text"
          className="card-text">
          Posts about things I find interesting.
            </p>

        <a id="card-link"
          href="./docs"
          className="btn btn-danger btn-block">
          Link
            </a>

      </div>
    </div>
  );
}

const ToDoCard = () => {
  return (
    <div id="Card" className="card container-fluid mx-2 my-2 p-2 shadow-lg bg-secondary text-light">
      <img id="card-image"
        className="card-img img-fluid img-thumbnail"
        src="./static/404-1e6e1c9faff405d21dd6c62700630536.gif"
        alt="" />

      <div id="card-body"
        className="card-body text-center">

        <h3 id="card-title"
          className="card-title">
          To-Do List
            </h3>

        <p id="card-text"
          className="card-text">
          Things that I need to fix or improve
            </p>

        <a id="card-link"
          href="./docs/pages/Checklist"
          className="btn btn-danger btn-block">
          Link
            </a>

      </div>
    </div>
  );
}

export { CardGroup, Card, BlogCard, ToDoCard };
