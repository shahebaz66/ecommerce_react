
import withContext from "../../context/withContext";
import SideItem from "../sidelist";
import PostItem from './postItem';
import './post.css'
import React, { useState,useEffect } from 'react';
import Aux from '../../Aux'
function Post(props){
  var posts=props.context.posts.length;
  var data
  if(posts==0){
    data=null
  }else{
    data=<div className="scrollbar">{props.context.posts.map((i)=>{
      return <PostItem data={i}/>
    })}</div>
    
  }
  return (data)
  
  
}

export default withContext(Post)