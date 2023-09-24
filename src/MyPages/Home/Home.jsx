import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import HomePageCard from "./HomePageCard/HomePageCard";
import Banner from "../../NavBar/Banner/Banner";

const Home = () => {
    const [data, setData] = useState([])
    const donationData = useLoaderData();
    useEffect(() => {
        setData(donationData)
    }, [donationData])
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto mt-24 mb-40">
                {
                    data?.map(singleData => <HomePageCard key={singleData.id} singleData={singleData}></HomePageCard>)
                }
            </div>
        </div>
    );
};

export default Home;