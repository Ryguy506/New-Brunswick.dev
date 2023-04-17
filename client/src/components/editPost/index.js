
import React, { useState, useEffect } from 'react';
import EditableText from '../editableText';
import HandleArray from '../handleArray';
import './index.css';
import Markdown from '../markdown';
import { GoCheck } from 'react-icons/go';
const EditPost = ({ postData }) => {

    const [post, setPost] = useState({
        title: '',
        body: '',
        tags: [],
        collaborators : []
    });

    const [hasChanged, setHasChanged] = useState(false)

    useEffect(() => {
        setPost(
            {
                title: postData.title,
                body: postData.body,
                tags : ['tag1', 'tag2' , 'tag3'],
                collaborators : ['collab1', 'collab2', 'collab3']
            }
        );
    }, [postData]);


    // useEffect(() => {
    //     console.log(post);
    // }, [post]);


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
     
        <div className='container'>
            <div>
        <div id='top'>
            <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" alt="Placeholder image"/>
            <div id='info'>
                <p className='is-size-4 has-text-weight-bold'>username</p>
        
                <p className='is-size-6'>Posted on april 7</p>
            </div>
     
         </div>
        </div>
        
        <div className="container  is-fluid" id='bottom'>
        <EditableText text={post.title} updateParentState={handleState} fieldName="title"/>
        <hr className='p-0 m-1'/>
        
        <div className='columns is-multiline'>
            <div className='column is-12' >
            <HandleArray dataArray={post.tags} updateParentState={handleState} fieldName="tags" Btn="Add Tags" />
         </div>
            <div className='column is-12' >
            <HandleArray dataArray={post.collaborators} updateParentState={handleState} fieldName="collaborators" Btn="Add Collaborators" placeholder="github" />
            </div>
            </div>
        <div id='textarea'>
        <EditableText text={post.body} updateParentState={handleState} fieldName="body" htmlEl="textarea"/>
        </div>
        <div className='box'>
        <Markdown markdown={post.body}/>
            </div>
            {hasChanged && (
                <div className='has-text-right'>
                 <button className="button is-info mt-2 is-rounded" id="post" onClick={handleSave}><GoCheck id="check"/></button>
                 </div>)}

        </div>
        </div>
       
    )


}


export default EditPost;
