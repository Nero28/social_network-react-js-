import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }
  const onMainPhoteSelected = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = formData => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };
  //

  const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
      <div>
        <div>{isOwner && <button onClick={goToEditMode}>edit</button>}</div>
        <div>
          <b>Full name:</b>
          {profile.fullName}
        </div>

        <div>
          <b>Looking for a job:</b>
          {profile.lookingForAJob ? "Yes" : "No"}
        </div>

        <div>
          {profile.lookingForAJobDescription && (
            <div>
              <b>My professional skills:</b>
              {profile.lookingForAJobDescription}
            </div>
          )}
        </div>

        <div>
          <b>About me:</b>
          {profile.aboutMe}
        </div>

        <div>
          <b>Contacts: </b>
          {Object.keys(profile.contacts).map(key => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}
              />
            );
          })}
        </div>
      </div>
    );
  };

  const Contact = ({ contactTitle, contactValue }) => {
    return (
      <div className={s.contact}>
        <b>{contactTitle}</b>:{contactValue}
      </div>
    );
  };

  return (
    <div>
      <div className={s.description_block}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhoteSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            onSubmit={onSubmit}
            profile={profile}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={profile}
            isOwner={isOwner}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
