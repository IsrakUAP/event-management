

const Banner = () => {
    return (
        <div>
            <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/TvKyYRJ/pngtree-simple-technology-style-medical-safety-banner-picture-image-1618337.png)' }}>
                <div className="hero-overlay bg-opacity-25"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-black">
                        <p className=" text-[40px] font-semibold">Discover Your Path to Wellness and Balance</p>
                          <br />
                            <p className=" text-[20px]">At Wellness Center, we believe in nurturing the mind, body, and soul. Our dedicated team of experts is committed to guiding you on your journey to holistic well-being.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;