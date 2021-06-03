import React from "react";
import Layout from "./Layout";
import { Helmet } from "react-helmet";

const Home = () => (
  <Layout>
    <Helmet>
      <title>MERN Stack</title>
      <meta
        name="description"
        content="MERN Stack React CLoudinary Sendgrid SSR App"
      />
    </Helmet>
    <div className="container text-center">
      <h1 className="p-5">Home</h1>
      <hr />
      <p className="lead">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
        excepturi.
      </p>
    </div>
  </Layout>
);

export default Home;
