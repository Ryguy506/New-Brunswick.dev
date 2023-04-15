
import React, { useState, useEffect } from 'react';
import EditableText from '../editableText';
import Tags from '../tags';
import './index.css';
const EditPost = ({ postData }) => {

    const [post, setPost] = useState({
        title: '',
        body: '',
        tags: []
    });

    const [hasChanged, setHasChanged] = useState(false)

    useEffect(() => {
        setPost(
            {
                title: postData.title,
                body: postData.body,
                tags : ['tag1', 'tag2' , 'tag3']
            }
        );
    }, [postData]);


    useEffect(() => {
        console.log(post);
    }, [post]);


    function handleState(fieldName, value) {
        setPost({
          ...post,
          [fieldName]: value
        });
        setHasChanged(true)
    }


    function handleSave() {
        // save to database
        alert("Profile updated!")
        setHasChanged(false)
      }



    return (
        <div id='btnPosition'>
                        {hasChanged && (
  <div>
    <button className="button is-info" id="save" onClick={handleSave}>Save</button> 
    <button className="button is-danger" id="cancelBtn" onClick={() => setHasChanged(false)}>Cancel</button>
  </div>
)}
        <div className='container'>
        <div id='top'>
            <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" alt="Placeholder image"/>
            <div id='info'>
                <p className='is-size-4 has-text-weight-bold'>username</p>
        
                <p className='is-size-6'>Posted on april 7</p>
            </div>
         <Tags tagDataArr={post.tags} updateParentState={handleState} fieldName="tags"/>
        </div>
        
        <div className="container  is-fluid" id='bottom'>
        <EditableText text={post.title} updateParentState={handleState} fieldName="title"/>
        <hr className='p-0 m-1'/>
        <EditableText text={post.body} updateParentState={handleState} fieldName="body" htmlEl="textarea"/>
        </div>
        </div>
        </div>
    )


}


export default EditPost;
