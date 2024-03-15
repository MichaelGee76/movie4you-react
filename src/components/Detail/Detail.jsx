import "./Detail.css";
import movies from "../../Data/Data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Detail = () => {
    let { id } = useParams();

    const movie = movies.find((movie) => movie.id === id);

    // fixed the "not scroll to top problem"
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="detailContainer">
            <div className="innerContainer">
                <h1 className="detailHeading">{movie.title}</h1>

                <div className="box">
                    <div className="detailBox">
                        <p>Rating: </p>
                        <p className="stats">{movie.rate} Stars</p>
                    </div>
                    <div className="detailBox">
                        <p>Duration: </p>
                        <p className="stats">{movie.duration}</p>
                    </div>
                    <div className="detailBox">
                        <p>Director: </p>
                        <p className="stats">{movie.director}</p>
                    </div>
                    <div className="detailBox">
                        <p>Genre: </p>
                        <p className="stats">{movie.genre.join(" | ")}</p>
                    </div>

                    <div className="detailBox">
                        <p>Year: </p>
                        <p className="stats">{movie.year}</p>
                    </div>
                </div>
                {/* <img src="https://picsum.photos/500/300" alt="random image" /> */}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod natus corrupti. Magni quaerat, ipsam quibusdam quis provident nobis! Libero nesciunt ipsum totam neque officia nihil repellat. Dolores inventore vero voluptatibus doloremque ullam dolor, nesciunt sapiente officia
                    ipsam minima quo saepe! Ipsam quas iusto accusantium magnam natus quis, optio minus nulla earum reiciendis, quam ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                    Animi voluptates cupiditate in officiis incidunt rerum iste ex voluptas obcaecati molestias sed provident velit, enim explicabo harum consequuntur, minima totam. Delectus sapiente quibusdam amet incidunt sint expedita odio nemo voluptatibus placeat numquam magnam saepe itaque{" "}
                    <br />
                    laboriosam mollitia aperiam deleniti consequatur pariatur, veritatis, quod debitis autem, molestiae at. Qui animi nostrum iusto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus aspernatur voluptas, dolorum, cumque commodi expedita natus reprehenderit dolorem{" "}
                    <br />
                    incidunt nostrum culpa praesentium dicta enim quis unde error a atque? Explicabo iste incidunt omnis facilis quod, totam, excepturi dicta ratione nihil officia est nulla saepe sunt porro fuga minima deserunt?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod natus corrupti. Magni quaerat, ipsam quibusdam quis provident nobis! Libero nesciunt ipsum totam neque officia nihil repellat. Dolores inventore vero voluptatibus doloremque ullam dolor, nesciunt sapiente officia
                    ipsam minima quo saepe! Ipsam quas iusto accusantium magnam natus quis, optio minus nulla earum reiciendis, quam ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                    Animi voluptates cupiditate in officiis incidunt rerum iste ex voluptas obcaecati molestias sed provident velit, enim explicabo harum consequuntur, minima totam. Delectus sapiente quibusdam amet incidunt sint expedita odio nemo voluptatibus placeat numquam magnam saepe itaque{" "}
                    <br />
                    laboriosam mollitia aperiam deleniti consequatur pariatur, veritatis, quod debitis autem, molestiae at. Qui animi nostrum iusto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus aspernatur voluptas, dolorum, cumque commodi expedita natus reprehenderit dolorem{" "}
                    <br />
                    incidunt nostrum culpa praesentium dicta enim quis unde error a atque? Explicabo iste incidunt omnis facilis quod, totam, excepturi dicta ratione nihil officia est nulla saepe sunt porro fuga minima deserunt?
                </p>
            </div>
            <Link to="/" className="backButton">
                &#8592; Back
            </Link>
        </div>
    );
};

export default Detail;
