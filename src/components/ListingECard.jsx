import React from 'react'

export default function ListingECard(props) {
 
  return (
    <div style={{ background: props.color, color: props.tColor , width: "100px", height: "100px", display: "flex", justifyContent: "center", alignItem: "center", flexDirection: "column" }}>
                    <div>{props.name}</div>
                    <div>{props.id}</div>
                    <div>{props.color}</div>
                    
                </div>
  )
}
