import { FaStar, FaRegStar  } from "react-icons/fa";

function ProductRating(pramas){
    const rating = pramas.rating;
    const absRating = Math.round(rating);
    // const decimalPoints = rating - absRating;
    const ratingStar = [];
    for(let i=0; i<5; i++){
        if(i<absRating){
            ratingStar.push(<FaStar key={"filled_"+i} />);
        }else {
            ratingStar.push(<FaRegStar  key={"empty_"+i}/>)
        }
        
    }
   
    return <>
        {ratingStar}
    </>
}

export default ProductRating