
import EditableText from "../editableText"
import {useEffect, useState} from "react"
import { GoCheck } from 'react-icons/go';
import HandleArray from "../../components/handleArray";
import "./index.css"

const MyProfile = ({ profileData }) => {



const [profile, setProfile] = useState({
    name:  '',   
    email: '',
    website: '',
    image: '',
    bio : '',
    skills: []
})

const [hasChanged, setHasChanged] = useState(false)

useEffect(() => {
    setProfile({
        name: profileData.name,
        email: profileData.email,
        website: profileData.website,
        image: profileData.image,
        skills: profileData.skills,
        bio: profileData.bio
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
{hasChanged && <GoCheck className="button is-info" id="save" onClick={handleSave} />}
    <div  className="columns is-multiline">
      <div className="column is-5 is-flex is-justify-content-center ">
  <div className="columns  is-multiline is-align-items-center">
    <div className="column is-12 is-flex is-justify-content-center inputfield">
    <EditableText text={profile.name} updateParentState={handleState} fieldName="name"/>
        </div>
        <div className="column is-12 is-flex is-justify-content-center inputfield">
        <EditableText text={profile.bio} updateParentState={handleState} fieldName="bio"/>
        </div>
        
  </div>
  </div>


<div className="column is-2 is-flex is-align-items-center is-justify-content-center">
  <div className="columns is-multiline">
    <div className="column is-12 is-flex is-justify-content-center">
      
     <img src={profile.image} alt="..."  width='150px' height="150px"/> 

  </div>
  <div className="column is-12 is-flex is-justify-content-center inputfield">
    <EditableText text={profile.name} updateParentState={handleState} fieldName="name"/>
        </div>
  </div>
  </div>
  <div className="column is-5 is-flex is-justify-content-center ">
  <div className="columns  is-multiline is-align-items-center">
    <div className="column is-12 is-flex is-justify-content-center inputfield">
    <EditableText text={profile.email} updateParentState={handleState} fieldName="email"/>
        </div>
        <div className="column is-12 is-flex is-justify-content-center inputfield">
        <EditableText text={profile.website} updateParentState={handleState} fieldName="website"/>

        </div>
  </div>
    </div>
    </div>
    <div className="column is-12 is-flex is-justify-content-center inputfield">
         <HandleArray dataArray={profile.skills} updateParentState={handleState} fieldName="skills" Btn="Add Skills" /> 
         </div>   
    </div>
    
)

}




export default MyProfile