import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";


const ServiceDetails = () => {
    const cards = useLoaderData();
    const[card,setCard]=useState([]);
    const {name} = useParams();
    useEffect(()=>
    {
        const checkCard = cards.find(card=>card.name === name)
        setCard(checkCard);
    },[name,cards])
    
    return (
        <div className="flex h-auto">
            <Details card={card}></Details>
        </div>
    );
};

export default ServiceDetails;