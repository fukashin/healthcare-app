import React from "react";
import ProfileUpdate from "./Profile_comp/ProfileUpdate";
import ProfileFetch from "./Profile_comp/ProfileFetch";
import ProfilePatch from "./Profile_comp/ProfilePatch";

interface ProfileProps {
    apiUrl: string; // APIのベースURLを親から受け取る
  }

const Profile: React.FC<ProfileProps> = ({apiUrl}) => {
  return (
    <div>
      <h2>My Profile</h2>
      <ProfileFetch apiUrl = {apiUrl}/>
      <ProfileUpdate apiUrl = {apiUrl}/>
      <ProfilePatch apiUrl = {apiUrl}/>
    </div>
  );
};

export default Profile;
