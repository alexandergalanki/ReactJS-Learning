import {CDN_URL} from "../Utlis/Constants";

const ResCard=(props)=>{
    const resData=props.resData;
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId}=resData.info;
    
    return(
        <div className="res-card">
            <img className="res-card-img" 
            src={CDN_URL+cloudinaryImageId}/>
            
            <h3 style={{color:"red",fontSize:"bold"}}>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
            <h4>{sla.deliveryTime+" mins"}</h4>
        </div>
    )
}

export default ResCard;