import { useParams } from "react-router-dom";

const SneakerShow = () => {
    const { id } = useParams();

    return (
        <div className="SneakerShow">
            <p>this is the sneakershow component for sneaker id number {id}</p>
        </div>
    );
}

export default SneakerShow;