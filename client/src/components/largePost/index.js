 

import React , {useState , useEffect} from 'react';
import Comment from '../comment';
import "./index.css"

const LargePost = ({postData , commentData}) => {

    const {userId , title , body} = postData;
 
    // const [commentBox , setCommentBox] = useState(false);
 
return (
    <div className='container' id=''>
<div id='top'>
    <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" alt="Placeholder image"/>
    <div id='info'>
        <p className='is-size-4 has-text-weight-bold'>username</p>

        <p className='is-size-6'>Posted on april 7</p>
    </div>
</div>

<div className="container  is-fluid" id='bottom'>
<p className='is-size-2 has-text-white has-text-weight-bold'>{title}</p>
<hr className='p-0 m-1'/>
<p className='has-text-white'>{body} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ex id nulla mollis rhoncus. Nam venenatis bibendum risus nec elementum. Phasellus sodales quis erat ac cursus. In et auctor risus. Quisque varius, felis quis mollis malesuada, elit diam interdum eros, in consectetur risus nisl nec eros. Nullam bibendum porta ipsum in dapibus. Donec ut urna congue, eleifend risus id, fringilla risus. </p>
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