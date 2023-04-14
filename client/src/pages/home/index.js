
import SmallPost from '../../components/smallPost';
import HelpNeeded from '../../components/helpneeded';
import React, { useState, useEffect } from 'react';
import "./index.css"
import { Link } from 'react-router-dom';
function Home() {
    

const [postData, setPostData] = useState([]);

  // const [commentData, setCommentData] = useState([]);
  

  const [helpData , setHelpData] = useState([]);


useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => setPostData(data))
}, [])

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setHelpData(data))
}, [])


useEffect(() => {
  console.log(helpData);
}, [helpData]);

useEffect(() => {
  console.log(postData);
}, [postData]);



return (
  <div className='columns mr-2 ml-2' id='parent'>
  <div className="column is-2" id='left'>
  <ul className="columns is-multiline">
  <h1>Help Needed</h1>
    {helpData.map(data => ( 
      <div className='column is-12' key={data.id}>
    <HelpNeeded helpData={data}/>
    </div>
    )
    )}
  </ul>
  </div>


  <div className="column is-10" id='right'>
 <div className="columns is-multiline" id='container'>
    {postData.map(data => ( 
      <div className='column is-12' key={data.id}>
    <Link to={`/post/${data.id}`}>
    <SmallPost postData={data}/>
    </Link>
    </div>
    )
     
      
    )}
    </div>
  </div>
  </div>
 
);
}

export default Home;