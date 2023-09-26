import PropTypes from 'prop-types';
const DonationCard = ({ donation }) => {
    const { picture, title, category, card_bg_color, text_color, button_bg_color, price } = donation;
    return (
        <div style={{ backgroundColor: card_bg_color }} className="flex lg:gap-6 items-center rounded-lg h-[200px] md:h-[180px] lg:[200px]">
            <div className="w-[220px] md:h-[180px] lg:[200px]">
                <img className="h-[200px] md:max-h-[180px] rounded-bl-lg max-w-[200px]
                md:max-w-[180px] lg:max-w-[220px]" src={picture} alt="" />
            </div>
            <div className="flex items-center">
                <div className=" py-5 lg:space-y-3 space-y-1 ">
                    <h4 style={{ color: text_color, backgroundColor: card_bg_color }} className="font-medium text-base px-[10px] py-1 w-24 flex justify-center items-center">{category}</h4>
                    <h2 className="text-xl md:text-base lg:text-2xl font-semibold">{title}</h2>
                    <p style={{ color: text_color }} className="font-semibold">${price}.00</p>
                    <button style={{ backgroundColor: button_bg_color, color: "white" }} className="px-4 py-2 rounded-md">View Details</button>
                </div>
            </div>
        </div>
    );
};
DonationCard.propTypes = {
    donation: PropTypes.object
}
export default DonationCard;