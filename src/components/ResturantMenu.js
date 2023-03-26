import { useParams } from "react-router-dom";

const Menu = () => {
    const params = useParams();
    console.log('params>', params)
    return (
        <div> Here is the Resturant id: {params.id}</div>
    )
}

export default Menu;