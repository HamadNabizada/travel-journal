import React from 'react'

export default function TravelCard(props){
    return(
        <div className="travelCard-wrapper">
            <img src={`/images/${props.imageUrl}`} alt="" />
            <div className="info">
                <div className="location-wrapper">
                    <h3>{props.location}</h3>
                    <h4><a href={props.googleMapsUrl}>View on Google Maps</a></h4>
                </div>
                <h2>{props.title}</h2>
                <span className="date">{props.startDate} - {props.endDate}</span>
                <p className="description">
                    {props.description}
                </p>
            </div>
        </div>
    )
}