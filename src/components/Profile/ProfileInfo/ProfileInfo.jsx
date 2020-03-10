import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({ profile, status, updateStatus, isOwner,savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }
  const onMainPhoteSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={s.description_block}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhoteSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div>{profile.fullName}</div>

        <div>About me: {profile.aboutMe}</div>
        <div>Contacts: {profile.contacts.facebook}</div>
        <div>Looking for a job: {profile.lookingForAJob ? "Yes" : "No"}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
