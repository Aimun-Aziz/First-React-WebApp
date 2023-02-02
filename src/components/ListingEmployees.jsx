import React from 'react'
import ListingECard from './ListingECard'

export default function ListingEmployees() {

    const employees = [
        {
            name: "Awais",
            id: 1,
            color: "blue",
            tColor:"white"
        },
        {
            name: "Aimun",
            id: 2,
            color: "Red",
            tColor:"white"
        },
        {
            name: "Anam",
            id: 3,
            color: "pink",
            tColor:"red"
        },
        {
            name: "Haider",
            id: 4,
            color: "Black",
            tColor:"white"
        },
    ]

    return (
        <div style={{ display: "flex", justifyContent:"center"}}>

            {employees.map((e, i) => {
                
                return (
                    
                <ListingECard name={e.name} id={e.id} color={e.color} tColor={e.tColor}/>)
            })}
        </div>
    )
}
