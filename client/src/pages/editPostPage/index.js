
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditPost from '../../components/editPost';

const EditPostPage = () => {

    const { id } = useParams();


    const [postData, setPostData] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => setPostData(data))
        }, [])

 





    return (
        <div id='parent'>
            <EditPost postData={postData} />
        </div>
        )

}

export default EditPostPage;