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
            <div className="d-flex gap-3">
                <Link to="/">Vai nella homepage</Link>
                <Link to="/chi-siamo">Vai nella pagina di chi siamo</Link>
            </div>
        </section>
    );
}