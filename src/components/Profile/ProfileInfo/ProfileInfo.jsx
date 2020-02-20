import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
 
const ProfileInfo = (props) => {
 if(!props.profile){
   return <Preloader />
 }
 
  return <div>
    <div>
      <img src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'></img>
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