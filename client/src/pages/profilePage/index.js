import Profile from "../../components/profile";
import SmallPost from "../../components/smallPost";
import React ,{useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    const [profileData, setProfileData] = useState({});
    const [postData, setPostData] = useState([]);

        const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then(response => response.json())
        .then(data => setProfileData(data))
      }, [])
      

      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPostData(data))
      }, [])

    return (
        <div id='parent'>
        <Profile profileData={profileData} />
        <div className="columns is-multiline">
        {postData.map(data => (
            <div className="column is-12" key={data.id}>
                <Link to={`/myprofile/edit/${data.id}`}>
            <SmallPost postData={data} />
            </Link>
            </div>
        ))}
        </div>
        </div>

    )
}

export default ProfilePage;