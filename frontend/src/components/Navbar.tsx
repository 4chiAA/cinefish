import {Link} from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <section>
                <Link to={"/home"}>Home</Link>
                <Link to={"/popular"}>Popular</Link>
                <Link to={"/newcomer"}>Newcomer</Link>
                <Link to={"/favourite"}>Favourites</Link>
            </section>
        </>
    )
}