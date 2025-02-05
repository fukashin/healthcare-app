import React, { useState, useEffect } from "react";
import axios from "axios";

interface ProfileUpdateProps {
    apiUrl: string;
  }
  
  const ProfileUpdate: React.FC<ProfileUpdateProps> = ({ apiUrl }) => {
    const [height, setHeight] = useState<number>(170);
    const [weight, setWeight] = useState<number>(65);
    const [nickname, setNickname] = useState<string>("");
    const [goal, setGoal] = useState<string>("");
  
    const accessToken = localStorage.getItem("accessToken");
  
    const handleUpdateProfile = async () => {
      try {
        const response = await axios.put(
          `${apiUrl}/user-profiles/1/`,
          { height, weight, nickname, goal },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Profile Updated:", response.data);
      } catch (error: any) {
        console.error("Update failed:", error.response?.data || "Unknown error");
      }
    };
  
    return (
      <div>
        <h3>Update Profile</h3>
        <input type="number" placeholder="Height" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
        <input type="number" placeholder="Weight" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
        <input type="text" placeholder="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <textarea placeholder="Goal" value={goal} onChange={(e) => setGoal(e.target.value)} />
        <button onClick={handleUpdateProfile}>Update Profile</button>
      </div>
    );
  };
  
  export default ProfileUpdate;
  
