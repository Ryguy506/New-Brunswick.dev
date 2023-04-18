
import SmallPost from '../../components/smallPost';
// import HelpNeeded from '../../components/helpneeded';
import React, { useState, useEffect } from 'react';
import "./index.css"
import { Link } from 'react-router-dom';
function Home() {
    

const [postData, setPostData] = useState([]);

  // const [commentData, setCommentData] = useState([]);
  

  // const [helpData , setHelpData] = useState([]);


useEffect(() => {
  fetch('http://localhost:3003/api/projects')
  .then(response => response.json())
  .then(data => setPostData(data))
  .catch(error => console.log(error))
}, [])



useEffect(() => {
  console.log(postData);
}, [postData]);



return (
  <div className='columns mr-2 ml-2' id='parent'>
  <div className="column is-2" id='left'>
  <ul className="columns is-multiline">
    {/* {helpData.map(data => ( 
      <div className='column is-12' key={data.id}>
    <HelpNeeded helpData={data}/>
    </div>
    )
    )} */}
  </ul>
  </div>


  <div className="column is-10" id='right'>
 <div className="columns is-multiline" id='container'>
    {postData.map(data => ( 
      <div className='column is-12' key={data._id}>
    <Link to={`/post/${data._id}`}>
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