import { Link } from "react-router-dom";
export default function About() {
    return (
        <>
            <section>
                <h1>Chi siamo</h1>
                <div className="d-flex gap-3">
                    <Link to="/">Vai nella homepage</Link>
                    <Link to="/prodotti">Vai nella pagina dei prodotti</Link>
                </div>
            </section>
        </>
    );
}