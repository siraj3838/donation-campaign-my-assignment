import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard/DetailsCard";


const Details = () => {
    const [perCard, setPerCard] = useState({})
    const {id} = useParams();
    const detailsApi = useLoaderData();
    useEffect(()=>{
        const isHaven = detailsApi.find(details => details.id == id)
        setPerCard(isHaven)
        
    },[detailsApi, id])
    return (
        <div>
            <DetailsCard perCard={perCard}></DetailsCard>
        </div>
    );
};

export default Details;