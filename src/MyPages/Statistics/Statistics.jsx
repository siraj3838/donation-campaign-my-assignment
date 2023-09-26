import { useEffect, useState } from "react";
import PieChartStyle from "./PieChart";
import { useLoaderData } from "react-router-dom";
import { getData } from "../../LocalStorage/localStorage";

const Statistics = () => {
    const [donation,setDonation] = useState(0)
    const [totalDonation,setTotalDonation] = useState(0)
   const aData = useLoaderData()

    useEffect(()=>{
        const getDaontionId = getData();
        setDonation(getDaontionId.length);
        const toTallDonation = aData.length - getDaontionId.length;
        setTotalDonation(toTallDonation)
    },[aData])

   

    return (
        <div className=" max-w-screen-xl mx-auto gap-4 px-6">
           
           <PieChartStyle donation={donation} totalDonation={totalDonation}></PieChartStyle>
        </div>
    );
};

export default Statistics;