import Card from "./Card";


const Cards = ({cards}) => {
    console.log(cards);
    return (
        <div>
            <p className=" text-center mt-4 font-semibold text-[35px]">Services We Offer</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {
                cards.map((card,idx)=> <Card key={idx} card={card}></Card>)
            }
        </div>
        </div>
    );
};

export default Cards;