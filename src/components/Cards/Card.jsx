import { NavLink } from "react-router-dom";


const Card = ({card}) => {
    const{name,image,price,short_description} = card;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} className="rounded-xl md:h-[10vw] w-[100%]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{price}</p>
    <p>{short_description}</p>
    <div className="card-actions">
        <NavLink to={`/servicedetails/${name}`}>
      <button className="btn btn-accent">Join</button>
      </NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;