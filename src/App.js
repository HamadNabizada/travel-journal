import React from 'react'
import data from './data'
import Header from './Header'
import TravelCard from './TravelCard'


export default function App(){
    let TravelCardArray = data.map(item=>{
        return(
            <TravelCard
                key={item.id}
                {...item}
            />
        )
    })

    return(
        <div className="app-wrapper">
            <Header />
            {TravelCardArray}
        </div>
    )
}