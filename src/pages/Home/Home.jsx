import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import ChooseUs from "./ChooseUs";
import JoinUs from "./JoinUs";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const Home = () => {   
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
        });
      }, []);
    const cards= useLoaderData();
    return (
        <div>
            <div data-aos="fade-down"><Banner></Banner></div>
            <div data-aos="fade-up"><Cards cards={cards}></Cards></div>
            <div data-aos="fade-right"><ChooseUs></ChooseUs></div>
            <div data-aos="fade-left"><JoinUs></JoinUs></div>
            
        </div>
    );
};

export default Home;