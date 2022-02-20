import * as React from "react";
import { Helmet } from "react-helmet";

import "../styles/style.scss";

import { fetchPosts } from "../utils/fetchPosts";

import Grid from "../components/grid";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Poppin' Penguins</title>
      </Helmet>
      <div className="title">
        <h1>Poppin' Penguins</h1>
      </div>
      <button onClick={fetchPosts}> test </button>
      <Grid />
    </>
  );
};

export default IndexPage;
