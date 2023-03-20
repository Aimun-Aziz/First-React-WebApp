import React from 'react'
import url from '../config/axios'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import leaf from './images/dummy-leaf.png'
import CategoryCard from './CategoryCard'

export default function Brands() {
    const [brands, setBrands] = useState([])
    console.log(brands);

    useEffect(() => {
        getBrands();
    })

    const getBrands = () => {
        url.get(`/brand/outlet?OutletId=${"265594ef-9701-45e8-9562-957a7d16fd74"}`)
            .then(async (res) => {
                setBrands(res.data.data)
            })
            .catch((e) => { console.log(e); })
    }

    return (
        <div className="container" style={{ margin: "30px", display: "flex", flexWrap: "wrap" }}>
            {
                brands.map((e, i) => {
                    return (
                        <CategoryCard key={i}
                            name={e.name}
                           
                            image={e.image} />

                    )
                })
            }

        </div>
    )
}
