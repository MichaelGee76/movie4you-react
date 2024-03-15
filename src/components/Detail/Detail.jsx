import "./Detail.css";
import movies from "../../Data/Data";
import { useParams } from "react-router-dom";

const Detail = () => {
    let { id } = useParams();
    console.log(id);

    return (
        <div className="detailContainer">
            <h1>{movies[id].title}</h1>
            <p>{movies[id].rate}</p>
            <p>{movies[id].duration}</p>
            <p>{movies[id].director}</p>
            <p>{movies[id].genre.join(" | ")}</p>
            <p>{movies[id].year}</p>
        </div>
    );
};

export default Detail;
