import React, { useEffect, useState } from "react";
import axios from "axios";

interface ProfileFetchProps {
    apiUrl: string; // `apiUrl` を受け取る
  }


const ProfileFetch: React.FC<ProfileFetchProps> = ({apiUrl}) => {
  const [profile, setProfile] = useState<any>(null);
  const Url = `${apiUrl}api/user-profiles/`;
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(Url, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setProfile(response.data[0]); // 自分のプロフィール情報をセット
      } catch (error: any) {
        console.error("Failed to fetch profile:", error.response?.data || "Unknown error");
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h3>Profile Info</h3>
      {profile ? (
        <div>
          <p>Nickname: {profile.nickname}</p>
          <p>Height: {profile.height} cm</p>
          <p>Weight: {profile.weight} kg</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfileFetch;
