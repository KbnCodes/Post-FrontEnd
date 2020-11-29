import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from ".././config/axios";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { IconButton } from "@material-ui/core";
const PostView = () => {
  const [posts, setPost] = useState();

  useEffect(() => {
    loadPost();
  }, []);
  const loadPost = async () => {
    const res = await axios.get("/posts/show");
    setPost(res.data);
  };

  return (
    <div >
      <h1 >All Posts </h1>
      <button className="btn btn-warning ">
        <Link to="/posts/add">New Post</Link>
      </button>
      <div className="card">
        {posts?.map((post) => {
          return (
            <>
              <div className="card-header">
                <h4 key={post.id} className="card-title">
                  {post.title}
                </h4>
                <small>Posted By - {post.post_name}</small>
              </div>
              <div className="row">
                <div className="col-sm-10">
                  <div className="card-text ">{post.description}</div>
                </div>
                <div className="col-sm-2">
                  <IconButton style={{ alignContent: "right" }}>
                    <ThumbUpIcon />
                  </IconButton>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PostView;
