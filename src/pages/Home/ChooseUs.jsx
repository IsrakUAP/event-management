import Marquee from "react-fast-marquee";
const ChooseUs = () => {
   
    return (
        <div>
            <p className=" text-center mt-4 font-semibold text-[35px] my-7"> Why Choose Us</p>
            <div className="carousel w-full rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <Marquee className="text-center font-semibold text-[25px]">
                        Experienced and Caring Professionals
                    </Marquee>
                    <img src="https://i.ibb.co/F7n59XQ/istockphoto-621576732-612x612.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a></a>
                        <a href="#slide2" className="btn btn-circle btn-accent">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <Marquee className="text-center font-semibold text-[25px]">
                        Customized Wellness Plans
                    </Marquee>
                    <img src="https://i.ibb.co/VWy39c3/istockphoto-1166763961-612x612.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a></a>
                        <a href="#slide3" className="btn btn-circle btn-accent">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <Marquee className="text-center font-semibold text-[25px]">
                        Supportive Community
                    </Marquee>
                    <img src="https://i.ibb.co/KzRzrMZ/istockphoto-1134698555-612x612.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a></a>
                        <a href="#slide4" className="btn btn-circle btn-accent">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <Marquee className="text-center font-semibold text-[25px]">
                        Peaceful and Tranquil Environment
                    </Marquee>
                    <img src="https://i.ibb.co/SRsqJ5s/eceb925c5f069575cd2fcc4ce99ae49b.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a></a>
                        <a href="#slide1" className="btn btn-circle btn-accent">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;