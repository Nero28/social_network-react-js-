import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import profilePhoto from '../../../assets/images/profile.jpeg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
 
const ProfileInfo = ({profile,status,updateStatus}) => {
 if(!profile){
   return <Preloader />
 }
 
  return <div>
   <div>
      <img src={profilePhoto}/>
   </div>
    <div  className = {s.description_block}>
      <img src={profile.photos.large}/>

      <ProfileStatusWithHooks status ={status} updateStatus={updateStatus}/>
      <div>{profile.fullName}</div>

      <div>About me: {profile.aboutMe}</div>
      <div>Contacts: {profile.contacts.facebook}</div>
      <div>Looking for  a job: {profile.lookingForAJob ? 'Yes': 'No'}</div>
      </div>
    
  </div>
}

export default ProfileInfo;