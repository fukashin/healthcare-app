import React, { useState } from "react";
import axios from "axios";

interface ProfilePatchProps {
    apiUrl: string;
  }
  
  const ProfilePatch: React.FC<ProfilePatchProps> = ({ apiUrl }) => {
    const [nickname, setNickname] = useState<string>("");
    const accessToken = localStorage.getItem("accessToken");
  
    const handlePatchProfile = async () => {
      try {
        const response = await axios.patch(
          `${apiUrl}/user-profiles/1/`,
          { nickname }, // ニックネームだけ更新
          { headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" } }
        );
        console.log("Profile Updated:", response.data);
      } catch (error: any) {
        console.error("Patch failed:", error.response?.data || "Unknown error");
      }
    };
  
    return (
      <div>
        <h3>Change Nickname</h3>
        <input type="text" placeholder="New Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <button onClick={handlePatchProfile}>Change Nickname</button>
      </div>
    );
  };
  
  export default ProfilePatch;
  
