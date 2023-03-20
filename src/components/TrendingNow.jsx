import React from 'react'
import { useState, useEffect } from 'react'
import url from '../config/axios'

export default function TrendingNow() {
    const [trendingProducts, setTrendingProducts] = useState([])

    useEffect(()=>{
        getTrendingProducts()
    }, [])

    const getTrendingProducts = () => {
        url.get(`/inventory/featured/?outletChainID=${chainID} `)
            .then(async (res) => {
                setTrendingProducts(res.data.data)
            })
            .catch((e) => { console.log(e); })
    }

    return (
        <div>
            {
            trendingProducts.map((e,i)=>{
                <Card style={{ width: '18rem', margin: "15px" }}>
                <Card.Img variant="top" src={e?.image ? e?.image : leaf} />
                <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.text>{e.brandName}</Card.text>
                    <Card.text>{e.price}</Card.text>

                </Card.Body>
            </Card>
            })
        }
            
        </div>
    )
}
