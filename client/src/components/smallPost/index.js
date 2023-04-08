
import React , {useState , useEffect} from "react";
import "./index.css"
import Comment from "../comment";
import { Link } from "react-router-dom";


const Post = ({postData}) => {


  const {userId , id , title , body} = postData;


  return (
    

  <div>
   <Link to={`/post/${id}`}>
    <div className="card" id="smallpost">
      <div id="posttop">
        <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"/>
    <div className="ml-3">
    <p className="has-text-white has-text-weight-bold">Username</p>
    <time className="has-text-white">{id}</time>
    </div>
      </div>
    <div id="postbottom">
    <h1 className="title is-4 has-text-weight-bold has-text-white">{title}</h1>
    <p className="subtitle is-6 has-text-white">{body}</p>
    </div>
    </div>

    </Link>
    </div>

  


  );
};

export default Post;