import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(" https://fakestoreapi.com/products").then((resp) => {
            console.log(resp.data);
            setProducts(resp.data);
        });
    }, []);


    return (
        <section>
            <h2>I prodotti sono:</h2>
            {products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}

        </section>
    );
}