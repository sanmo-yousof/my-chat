import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import useLogOut from "../../hook/useLogOut";
import useAuth from "../../hook/useAuth";

const Footer = () => {
  const { loading, logOut } = useLogOut();
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <img
          src={user?.profilePic || "/profilePlaceholder.png"}
          className="w-8 h-8 rounded-full"
          alt={user?.fullNmae || "profile"}
        />
        <div>
          <h3 className="font-medium text-sm text-gray-200">
            {" "}
            {user?.fullName.length > 18
              ? `${user.fullName.slice(0, 18)}...`
              : user.fullName}
          </h3>
          <h5 className="font-light text-xs text-gray-300">{user?.userName}</h5>
        </div>
      </div>
      <button
        disabled={loading}
        onClick={logOut}
        className="btn text-white hover:border-white/20 hover:shadow-none  rounded-full hover:bg-white/10 text-2xl p-2 btn-ghost"
      >
        {loading ? "Logouting" : <IoLogOutOutline />}
      </button>
    </div>
  );
};

export default Footer;
