

    import UserProfile from "../../components/userProfile";
    import SmallPost from "../../components/smallPost";
    import React, { useState, useEffect } from 'react';
    import { Link, Navigate } from 'react-router-dom';

    import { useParams } from 'react-router-dom';


    const UserProfilePage = () => {

        const [profileData, setProfileData] = useState({});

        const [postData, setPostData] = useState([]);

        const [error, setError] = useState(null);

        const { id } = useParams();

        useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setProfileData(data))
            .catch(error => setError(error))
          }, [id])

          useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPostData(data))
          }, [])

          if (error) {
            return <Navigate to="/404" />;
          }

        return (
            <div id='parent'>
            <UserProfile profileData={profileData} />
            <div className="columns is-multiline">
            {postData.map(data => (
            <div className="column is-12" key={data.id}>
                <Link to={`/post/${data.id}`}>
            <SmallPost postData={data} />
            </Link>
            </div>
        ))}
        </div>
            </div>

        )

            }

    export default UserProfilePage;