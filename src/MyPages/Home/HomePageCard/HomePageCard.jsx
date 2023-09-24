import { Link } from "react-router-dom";


const HomePageCard = ({ singleData }) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_color, button_bg_color, description, price } = singleData;
    return (
        <Link to={`/details/${id}`}>
            <div className="rounded-md">
                <div className="rounded-md">
                    <img src={picture} alt="" />
                </div>
                <div className="pl-4">
                    <h4 className="font-medium text-base px-[10px] py-1">{category}</h4>
                    <h2 className="text-xl font-semibold">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default HomePageCard;