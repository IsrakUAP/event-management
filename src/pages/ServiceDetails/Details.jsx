

const Details = ({card}) => {
    const {name,image,details} = card;
    return (
        
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6">{details}</p>
    </div>
  </div>
</div>
    );
};

export default Details;