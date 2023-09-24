import { NavLink } from "react-router-dom";
import Banner from "./Banner/Banner";

const NavBar = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <img src="https://i.ibb.co/PZ2TCCQ/exam-8.png" alt="" />
                </div>
                <nav>
                    <ul className="text-lg font-normal text-[#000] flex gap-12 items-center">
                        <li>
                            <NavLink to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }>Donation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                }>Statistics</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default NavBar;