
const Banner = () => {
    return (
        <div className="hero h-[600px] my-16" style={{ backgroundImage: 'url(https://i.ibb.co/J7D6Vd8/environment-volunteer-concept-with-persons-holding-boxes-donations.jpg)' }}>
            <div className="hero-overlay bg-opacity-90 bg-white"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-black">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;