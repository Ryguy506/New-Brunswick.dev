
import {useState , useEffect} from 'react';
import './index.css';

const UserProfile = ({profileData}) => {

    const [profile, setProfile] = useState({
        name:  '' ,   
        company: '',
        email: '',
        website: ''
    })

    useEffect(() => {
        setProfile({
            name: profileData?.name,
            company: profileData?.company?.name,
            email: profileData?.email,
            website: profileData?.website
        })
    }, [profileData])  
    

console.log(profileData)



    return (
        <div className='columns'>
          <div className='column is-5 is-flex is-justify-content-center'>
          <div className='columns is-multiline is-align-items-center'>
          <div className='column is-12 is-flex is-justify-content-center text'>
                        <p>{profile.name}</p>
                    </div>
                    <div className='column is-12 is-flex is-justify-content-center text'>
                        <p>{profile.name}</p>
                    </div>
                    <div className='column is-12 is-flex is-justify-content-center text'>
                        <p>{profile.name}</p>
                    </div>
            </div>
          </div>
            <div className='column is-2  is-flex is-justify-content-center'>
                <div className='columns is-multiline is-align-items-center'>
                    <div className='column is-12 is-flex is-justify-content-center'>
                       <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" width='150px' height='150px' alt="profile" />
                    </div>
                    <div className='column is-12 is-flex is-justify-content-center text'>
                        <p>{profile.name}</p>
                    </div>
            </div>
            </div>

          <div className='column is-5 is-flex is-justify-content-center'>
          <div className='columns is-multiline is-align-items-center'>
          <div className='column is-12 is-flex is-justify-content-center text'>
                        <p>{profile.name}</p>
                    </div>
                    <div className='column is-12 is-flex is-justify-content-center text'>
                        <p>{profile.name}</p>
                    </div>
                    <div className='column is-12 is-flex is-justify-content-center text'>
                        <p>{profile.name}</p>
                    </div>
            </div>

          </div>
        

        </div>


    );
}

export default UserProfile;