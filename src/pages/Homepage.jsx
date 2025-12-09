import { Link } from "react-router-dom";
export default function Homepage() {
    return (
        <>
            <section>
                <h1>Benvenuti nella Homepage</h1>
                <div className="d-flex gap-3">
                    <Link to="/chi-siamo">Vai nella pagina di chi siamo</Link>
                    <Link to="/prodotti">Vai nella pagina dei prodotti</Link>
                </div>
            </section>
        </>
    );
}