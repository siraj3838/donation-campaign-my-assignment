import { NavLink } from "react-router-dom";
import Banner from "./Banner/Banner";

const NavBar = () => {
    return (
        <div className="mt-10">
            <div className="flex flex-wrap space-y-5 md:space-y-0 md:justify-between items-center max-w-screen-xl mx-auto px-10 lg:px-0">
                <div>
                    <img className="ml-10 md:ml-0" src="https://i.ibb.co/PZ2TCCQ/exam-8.png" alt="" />
                </div>
                <nav>
                    <ul className="text-lg font-normal ml-8 md:ml-0 text-[#000] flex gap-8 md:gap-12 items-center">
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