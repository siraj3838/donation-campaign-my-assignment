import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import HomePageCard from "./HomePageCard/HomePageCard";


const Home = () => {
    const [data, setData] = useState([])
    const donationData = useLoaderData();

    const searchBtnHandle = e =>{
        e.preventDefault();
        const inputValue = e.target.text.value;
        const searchData = donationData.filter(data => data.category === inputValue)
        setData(searchData)
    }
    useEffect(() => {
        setData(donationData)
    }, [donationData])
    return (
        <div>
            <div className="hero h-[600px] mt-5 mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/D5DQdvr/383314042-993914288548846-1091373714914908118-n.png)' }}>
            <div className="hero-overlay bg-opacity-90 bg-white"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="text-black">
                    <h1 className="mb-10 text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <form onSubmit={searchBtnHandle} className="flex justify-center items-center">
                        <input type="text" placeholder="Search here...." name="text" className="input input-bordered rounded-tr-none rounded-br-none md:w-[470px]" />
                        <input className="btn bg-[#FF444A] text-white rounded-tl-none rounded-bl-none" type="submit" value="Search" />
                    </form>
                </div>
            </div>
        </div>
            {/* <Banner searchBtnHandle={searchBtnHandle}></Banner> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto mt-24 mb-40">
                {
                    data?.map(singleData => <HomePageCard key={singleData.id} singleData={singleData}></HomePageCard>)
                }
            </div>
        </div>
    );
};

export default Home;