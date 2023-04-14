
import EditableText from "../editableText"
import {useEffect, useState} from "react"
import "./index.css"

const Profile = ({ profileData }) => {

const [profile, setProfile] = useState({
    name:  '' ,   
    company: '',
    email: '',
    website: ''
})

const [hasChanged, setHasChanged] = useState(false)

useEffect(() => {
    setProfile({
        name: profileData?.name,
        company: profileData?.company?.name,
        email: profileData?.email,
        website: profileData?.website
    })
}, [profileData])  


useEffect(() => {
    console.log(profile);
}, [profile])


function handleState(fieldName, value) {
  setProfile({
    ...profile,
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
<div  id="btnPosition">
{hasChanged && (
  <div>
    <button className="button is-info" id="save" onClick={handleSave}>Save</button> 
    <button className="button is-danger" id="cancelBtn" onClick={() => setHasChanged(false)}>Cancel</button>
  </div>
)}
    <div  className="columns">
      <div className="column is-5">
  <div className="columns  is-multiline">
    <div className="column is-12 is-flex is-justify-content-center">
    <EditableText text={profile.name} updateParentState={handleState} fieldName="name"/>
        </div>
        <div className="column is-12 is-flex is-justify-content-center">
            <EditableText text={profile.company} updateParentState={handleState} fieldName="company" />
        </div>
        
  </div>
  </div>

<div className="column is-2 is-flex is-align-items-center is-justify-content-center">
  <div className="columns is-multiline">
    <div className="column is-12 is-flex is-justify-content-center">
      
     <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" alt="..."  width='150px' height="150px"/> 

  </div>
  </div>
  </div>
  <div className="column is-5">
  <div className="columns  is-multiline">
    <div className="column is-12 is-flex is-justify-content-center">
    <EditableText text={profile.email} updateParentState={handleState} fieldName="email"/>
        </div>
        <div className="column is-12 is-flex is-justify-content-center">
        <EditableText text={profile.website} updateParentState={handleState} fieldName="website"/>

        </div>
        
  </div>
    </div>
    </div>
    </div>
)

}




export default Profile