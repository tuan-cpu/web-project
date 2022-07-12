import React, { useEffect, useState } from "react";
import InfoProfile from "./InfoProfile";
import OrderHistory from "./OrderHistory";
import "./index.scss";
import movieApi from "../../common/api/movieApi";

const ProfilePage = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const res = await movieApi.get("user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
      });
      setUser(res.data);
    };
    fetchUser();
  }, []);
  return (
    <div className="content">
      <div className="left">
        <InfoProfile user={user} />
      </div>
      <div className="right">
        <OrderHistory user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
