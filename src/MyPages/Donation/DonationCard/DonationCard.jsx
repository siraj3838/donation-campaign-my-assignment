
const DonationCard = ({ donation }) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_color, button_bg_color, description, price } = donation;
    return (
        <div className="flex gap-6 items-center rounded-lg">
            <div className="w-1/3">
                <img src={picture} alt="" />
            </div>
            <div className="w-2/3">
                <h4 className="font-medium text-base px-[10px] py-1">{category}</h4>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p>${price}</p>
                <button>View Details</button>
            </div>
        </div>
    );
};

export default DonationCard;