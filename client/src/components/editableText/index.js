import React, { useState,useEffect} from "react";
import {RxButton, RxPencil2} from 'react-icons/rx';
import "./index.css";

function EditableText(props) {
  const [editing, setEditing] = useState(false);
  // const [text, setText] = useState();
  const [input, setInput] = useState();


const handleSave = () => {
    props.updateParentState(props.fieldName, input);
    setEditing(false);
  };



  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return editing || !props.text ?  (
    props.htmlEl === 'textarea' ?
    <textarea className="textarea" value={props.text} autoFocus  onChange={handleChange} onBlur={handleSave} />
    : (
      <div>
    <input type="text" className="input" autoFocus value={props.text} onChange={handleChange} onBlur={handleSave} />
    </div>
    )
  ) : (
    <div id="editText">
    <p>{props.text}</p>
    <RxPencil2 onClick={() => setEditing(true)} id="editBtn"/>
    </div>
  );
}

export default EditableText;