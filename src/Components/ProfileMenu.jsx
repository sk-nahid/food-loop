import { useState } from "react";
import { Link, NavLink } from "react-router";

const ProfileMenu = ({ user, handleLogOut, handleTogleBtn }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div
            className="relative flex items-center gap-4 group"

        >
            <div onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}>


                {/* Profile Image */}
                <img

                    className="w-[70px] h-[70px] object-cover object-center rounded-full cursor-pointer border-2 border-primary"
                    onClick={handleTogleBtn}
                    src={user?.photoURL}
                    alt="profile img"
                />

                {/* Hover Menu */}
                {showMenu && (
                    <div className="absolute top-18 left-0 bg-white shadow-lg rounded-lg p-3 w-48 z-50">
                        <ul className="space-y-2 text-sm text-gray-800">
                            <li><NavLink to="/add-food" className="text-gray-700 hover:text-green-600">Add Food</NavLink></li>
                            <li><NavLink to="/my-foods" className="text-gray-700 hover:text-green-600">My Foods</NavLink></li>
                            <li><NavLink to="/requested-foods" className="text-gray-700 hover:text-green-600">Requested Foods</NavLink></li>
                        </ul>
                    </div>
                )}
            </div>
            {/* Log Out Button */}
            <button onClick={handleLogOut} className="btn btn-primary">
                Log Out
            </button>
        </div>
    );
};

export default ProfileMenu;
