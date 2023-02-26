import BlogList from "./BlogList";
import useFetch from "./useFetch";
import React from 'react';

const Home = () => {
  //create variable for fetch and variable
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:3000/blogs"
  );
  return (
    <div className="homepage">
      {error && <div>{error}</div>}
      {isPending && <div> Loading .. </div>}
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};
export default Home;
