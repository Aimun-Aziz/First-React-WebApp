import React from 'react'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import url from '../config/axios';
import leaf from './images/dummy-leaf.png'

export default function PopularToday() {
    const chainID = "265594ef-9701-45e8-9562-957a7d16fd74"
    const [popularProducts, setPopularProducts] = useState([])

    useEffect(() => {
        getPopularProducts();
    }, [chainID])

    const getPopularProducts = () => {
        url.get(`/inventory/popular/?outletChainID=${chainID}`)
            .then(async (res) => {

                setPopularProducts(res.data.data)
            })
            .catch((e) => { console.log(e); })
    }

    console.log(popularProducts);
    return (
        <div>
            <div className="container" style={{ margin: "30px", display: "flex", flexWrap: "wrap" }}>
                {
                    popularProducts.map((e, i) => {
                        return (
                            <Card style={{ width: '18rem', margin: "15px" }}>
                                <Card.Img variant="top" src={e?.image ? e?.image : leaf} />
                                <Card.Body>
                                    <Card.text>{e.price}</Card.text>
                                    <Card.Title>{e.name}</Card.Title>
                                    <Card.text>{e.brandName}</Card.text>
                                    {/* <Card.text>{e.THC}</Card.text> */}

                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>

        </div>
    )
}
