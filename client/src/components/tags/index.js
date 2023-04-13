
import { useState, useEffect } from "react";
const Tags = (props) => {


    const [tagData, setTagData] = useState([]);
    const [newTag, setNewTag] = useState(false);


    useEffect(() => {
        setTagData(props.tagDataArr);
    }, [props.tagDataArr]);

    function addTag() {
        const newArr = [...tagData, document.getElementById("tagInput").value];
        props.updateParentState(props.fieldName, newArr);
        setNewTag(false);
    }


    function deleteTag(index) {
        const newArr = [...tagData];
        newArr.splice(index, 1);
        props.updateParentState(props.fieldName, newArr);
    }


    return (
        <div className="is-flex is-justify-content-center is-align-items-center">
            {tagData.map((tag, index) => (
                <div key={index} onClick={() => deleteTag(index)} className="m-2 button is-info is-rounded">
                    <p>{tag}</p>
                </div>
            ))}
            {newTag ? (<div>
                <input type="text" autoFocus id="tagInput"/>
                <button onClick={addTag}>+</button>
            </div>) : <button className="button is-success" onClick={() => setNewTag(true)}>Add Tag</button>}
        </div>
    );
}

export default Tags;