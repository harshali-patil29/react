const RestaurantCard = (props) => {
    // console.log(props);
    const {resData} = props;
    const {
        name,
        cloudinaryImageId,
        areaName,
        cuisines,
        avgRating,
        slaString 
    } = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h5>{cuisines.join(', ')}</h5> 
            <h5>{avgRating}</h5>
            <h5>{slaString}</h5>
            <p>{areaName}</p>
        </div>
    )
}

export default RestaurantCard;