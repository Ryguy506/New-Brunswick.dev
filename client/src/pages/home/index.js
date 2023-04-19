
import SmallPost from '../../components/smallPost';
// import HelpNeeded from '../../components/helpneeded';
import React, { useState, useEffect , useContext} from 'react';
import "./index.css"
import { Link } from 'react-router-dom';
import { NewsContext } from '../../App';
import { PageContext } from '../../App';
import News from '../../components/news';
function Home() {
    
const newsData = useContext(NewsContext);
const {pageNumber , setPageNumber}  = useContext(PageContext);

const handleClick = () => {
  setPageNumber(pageNumber + 1);
}


const [postData, setPostData] = useState([]);


useEffect(() => {
  fetch('http://localhost:3003/api/projects')
  .then(response => response.json())
  .then(data => setPostData(data))
  .catch(error => console.log(error))
}, [])






return (
  <div className='columns mr-2 ml-2' id='parent'>
  <div className="column is-8" id='left'>
    <div className="columns is-multiline">
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


  <div className="column is-2" id='right'>
    <button className='button is-primary is-fullwidth' onClick={handleClick}>Load More</button>
 <div className="columns is-multiline" id='container'>
    {newsData && newsData.map((data , index) => ( 
      <div className='column is-12' key={index}>
        
    <News newsData={data}/>
      </div>

    )
    )}
    </div>
  </div>
  </div>
 
);
}

export default Home;