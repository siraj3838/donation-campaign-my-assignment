import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const HomePageCard = ({ singleData }) => {
    const { id, picture, title, category, card_bg_color, text_color, } = singleData;

    return (
        <Link to={`/details/${id}`}>
            <div style={{ backgroundColor: card_bg_color }} className="rounded-md mx-10 md:mx-0">
                <div className="rounded-md">
                    <img className="w-full" src={picture} alt="" />
                </div>
                <div className="pl-4 py-4">
                    <div className="w-24 flex justify-center">
                        <h4 style={{ color: text_color, backgroundColor: card_bg_color}} className={`font-medium text-base rounded px-[10px] py-1`}>{category}</h4>
                    </div>
                    <h2 style={{color: text_color}} className="text-xl font-semibold mt-2">{title}</h2>
                </div>
            </div>
        </Link>
    );
};
HomePageCard.propTypes ={
    singleData: PropTypes.object
}
export default HomePageCard;