 

import Comment from '../comment';
import "./index.css"
import { Link } from 'react-router-dom';
import Markdown from '../markdown';
const LargePost = ({postData , commentData}) => {

    const {userId , title , body , id} = postData;

    console.log(postData);
 
return (
    <div className='container' id=''>
<div id='top'>
  <Link to={`/profile/${id}`}>
    <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" alt="Placeholder image"/>
  </Link>
    <div id='info'>
        <p className='is-size-4 has-text-weight-bold'>username</p>

        <p className='is-size-6'>Posted on april 7</p>
    </div>
</div>

<div className="" id='bottom'>
<p className='is-size-2 has-text-white has-text-weight-bold'>{title}</p>
<hr className='p-0 m-1'/>
<div className='box p-6'>
<Markdown markdown={body}/>
</div>
</div>



<div id='inputContainer'>
    <textarea placeholder="Add a comment" className='textarea is-rounded' rows="3" id='commentInput'/>
    <button className='button is-rounded is-primary' id='commentButton'>Post</button>
    </div>


<div className='columns is-multiline is-justify-content-center mt-5' >
{commentData.length > 0 ? (
  commentData.map((comment) => (
    <div className='column is-10' key={comment.id}>
      <Comment commentData={comment}/>
    </div>
  ))
) : <p className='mt-5'>No comments</p>}
{/* need to fix */}

</div>
        </div>
)




}


export default LargePost;