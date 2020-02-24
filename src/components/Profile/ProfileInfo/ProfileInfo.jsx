import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import profilePhoto from '../../../assets/images/profile.jpeg';
 
const ProfileInfo = (props) => {
 if(!props.profile){
   return <Preloader />
 }
 
  return <div>
    <div>
      <img src={profilePhoto}/>
    </div>
    <div  className = {s.description_block}>
      <img src={props.profile.photos.large}/>
      <div>{props.profile.fullName}</div>

      <div>About me: {props.profile.aboutMe}</div>
      <div>Contacts: {props.profile.contacts.facebook}</div>
      <div>Looking for  a job: {props.profile.lookingForAJob ? 'Yes': 'No'}</div>
      </div>
    
  </div>
}

export default ProfileInfo;