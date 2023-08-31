import React from "react"
import icons48 from '../images/icons8-location-48.png';


export default function Card(props){
    return (
        <div className="card">
            <img src={props.item.imageUrl} className="card--image"/>
            <div className="card--text">
                <div className="card--location-info"> 
                    <img src={icons48} className="card--icon"/>
                    <p className="card--location">{props.item.location}</p>
                    <a className="card--url" href={props.item.googleMapsUrl} target="_blank"> View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.item.title}</h1>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>
                <p className="card--desc">{props.item.description}</p>
            </div>
        </div>
    )
}