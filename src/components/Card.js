import { CloudImg } from './constants';
import '.././App.css';


const Card = ({ card, index }) => {
    return (
        <div className="w-[200px] h-[200px] m-5 cursor-pointer shadow-md rounded-lg" key={card.data.id}>
            <img src={`${CloudImg}${card?.data?.cloudinaryImageId}`}></img>
            <div>{card?.data?.name}</div>
            <div>{card?.data?.costForTwo}</div>
        </div>
    )

}

export default Card;