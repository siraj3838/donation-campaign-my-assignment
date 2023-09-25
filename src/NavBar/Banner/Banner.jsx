
const Banner = () => {
    return (
        <div className="hero h-[600px] mt-5 mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/D5DQdvr/383314042-993914288548846-1091373714914908118-n.png)' }}>
            <div className="hero-overlay bg-opacity-90 bg-white"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="text-black">
                    <h1 className="mb-10 text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="flex justify-center items-center">
                        <input type="text" placeholder="Search here...." className="input input-bordered rounded-tr-none rounded-br-none md:w-[470px]" />
                        <button className="btn bg-[#FF444A] text-white rounded-tl-none rounded-bl-none">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;