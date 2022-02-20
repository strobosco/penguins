import * as React from "react";
import { Helmet } from "react-helmet";

import "../styles/style.scss";

import Posts from "../components/posts";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Poppin' Penguins</title>
      </Helmet>
      <div className="title">
        <h1>Poppin' Penguins</h1>
      </div>
      <Posts />
    </>
  );
};

export default IndexPage;
