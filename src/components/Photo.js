import { Link } from "react-router-dom";


export function Photo({photo}) {


    return (
        <div>
            <Link to={`/photos/${photo.id}`}>{photo.title}</Link>
            <hr></hr>
        </div>
    )
}