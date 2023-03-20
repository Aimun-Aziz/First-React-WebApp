import { useState, useEffect } from 'react'
import React from 'react'
import url from "../config/axios";
import CategoryCard from './CategoryCard'

export default function Categories() {
    const [categories, setCategories] = useState([]);
    console.log(categories);

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = () => {
        url.get(
            `category/outlet?OutletId=265594ef-9701-45e8-9562-957a7d16fd74`
        )
            .then(async (res) => {
                setCategories(res.data.data)
            })
            .catch((e) => { console.log(e) })
    }

    return (

        <div className="container" style={{ margin: "30px", display: "flex", flexWrap: "wrap" }}>
            {
                categories.map((e, i) => {

                    return (
                       
                        
                        <CategoryCard key={i}
                            name={e.name}
                            
                            image={e.image} />
                      
                        // <Card style={{ width: '18rem', margin: "15px" }}>
                        //     <Card.Img variant="top" src={e?.image? e?.image : leaf} />
                        //     <Card.Body>
                        //         <Card.Title>{e.name}</Card.Title>
                        //     </Card.Body>
                        // </Card>
                    )
                })
            }

        </div>


    )
}
