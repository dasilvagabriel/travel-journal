import React from "react"
import Card from "./travel-j/src/components/Card.jsx"
import Navbar from "./travel-j/src/components/Navbar.jsx"
import data from "./travel-j/src/data.js"

export default function App(){
    const cards = data.map(function(item){
        return (<Card key={item.title} item={item} />)
})
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}