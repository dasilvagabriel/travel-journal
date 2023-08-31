import React from "react"
import Card from "./components/Card.jsx"
import Navbar from "./components/Navbar.jsx"
import data from "./data.js"

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