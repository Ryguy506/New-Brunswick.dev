import React, { useState,useEffect} from "react";
import {RxPencil2} from 'react-icons/rx';
import "./index.css";

function EditableText(props) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState();


  useEffect(() => {
    setText(props.text);

  }, [props.text]);


  const handleChange = (event) => {
    setText(event.target.value);
    props.updateParentState(props.fieldName, event.target.value);
  };

  return editing ? (
    <input type="text" autoFocus value={text} onBlur={() => setEditing(false)} onChange={handleChange}  id="textInput"/>
  ) : (
    <div id="editText">
    <div>{text}</div>
    <RxPencil2 onClick={() => setEditing(true)} id="editBtn"/>
    </div>
  );
}

export default EditableText;