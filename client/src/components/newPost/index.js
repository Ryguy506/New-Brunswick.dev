import { useState, useEffect } from "react";
import "./index.css"
import {FaTimesCircle} from "react-icons/fa"
import {GoCheck} from "react-icons/go"
import Tags from "../tags";


const NewPost = (props) => {
    const [inputValue, setInputValue] = useState({
        title: "",
        body: "",
        tags: []
    });

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue]);




    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handleSubmit = () => {
        // save to database
        alert("Post created!")
        props.setFalse(false)
    };

const handleTags = (fieldName ,value) => {
    setInputValue({ ...inputValue, [fieldName]: value });
}
    
    return (
<div className="" id="newpostcontain">
    
<div className="box p-2" id="newpostBox">
    <div className="is-flex is-justify-content-space-between">
        <p>Create Post</p>
<FaTimesCircle id="cancel" onClick={() => props.setFalse(false)}/>
</div>
<input className="input" type="text" name="title" placeholder="Title" onChange={handleInput} />
<textarea className="textarea" name="body" placeholder="Body" onChange={handleInput}></textarea>
<Tags updateParentState={handleTags} tagDataArr={inputValue.tags} fieldName="tags" />
<div className="has-text-right">
<button className="button is-info mt-2 is-rounded" id="post" onClick={handleSubmit}><GoCheck id="check"/></button>
</div>
</div>
</div>

    )
    };

    export default NewPost;