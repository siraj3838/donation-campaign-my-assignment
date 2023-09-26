import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { setData } from "../../../LocalStorage/localStorage";

const DetailsCard = ({ perCard }) => {
    const { id, picture, title, button_bg_color, description, price } = perCard;

    const donateClick = () =>{
        setData(id);
        toast('You Successfully Donate');
    }
    return (
        <div className="max-w-screen-xl mx-auto mt-20">
            <div className="mb-14">
                <div className="relative">
                    <img className="w-full md:h-[600px] h-[300px]" src={picture} alt="" />
                </div>
                <div className="absolute bg-gray-500 mix-blend-multiply px-[209px] md:px-[383px] lg:px-[640px] py-16 -mt-[128px]">
                </div>
                <Link><button onClick={donateClick} style={{backgroundColor: button_bg_color}} className="px-6 py-4 rounded -mt-[85px] absolute ml-10 text-white">Donate ${price}</button></Link>
            </div>
            
            <ToastContainer className="mt-80"></ToastContainer>
            
            <div className="mb-28 mx-5 text-center md:text-left">
                <h2 className="text-4xl font-bold text-[#0B0B0B] mb-6">{title}</h2>
                <p className="text-base text-[#0B0B0BB2]">{description}</p>
            </div>
        </div>
    );
};

export default DetailsCard;