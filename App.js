import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import data from "./data"

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