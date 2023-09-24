import { Link } from "react-router-dom";

const DetailsCard = ({ perCard }) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_color, button_bg_color, description, price } = perCard;
    return (
        <div className="max-w-screen-xl mx-auto mt-20">
            <div className="mb-14">
                <div className="relative">
                    <img className="w-full h-[700px]" src={picture} alt="" />
                </div>
                <div className="absolute bg-gray-500 mix-blend-multiply px-[640px] py-16 -mt-[128px]">
                </div>
                <Link to={'/'}><button className="btn btn-secondary -mt-[85px] absolute ml-10 text-white">Donate ${price}</button></Link>
            </div>
            <div className="mb-28">
                <h2 className="text-4xl font-bold text-[#0B0B0B] mb-6">{title}</h2>
                <p className="text-base text-[#0B0B0BB2]">{description}</p>
            </div>
        </div>
    );
};

export default DetailsCard;