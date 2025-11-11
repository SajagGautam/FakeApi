import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type{ RootState } from "../app/store";
import { logout } from "../features/authSlices";

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      {user ? (
        <div className="bg-white shadow-lg p-6 rounded-2xl text-center">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <button
            onClick={() => dispatch(logout())}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      ) : (
        <p className="text-gray-500">No user logged in.</p>
      )}
    </div>
  );
};

export default UserList;
