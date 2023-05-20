import { useDispatch } from "react-redux";
import {
    add
} from "../store/cartSlice";

export default function Good(props) {

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    let dispatch = useDispatch();

    function AddToCart() {
        dispatch(add(props.data));
    }

    return (
        <div className="goods-block" style={{ borderColor: randomColor }}>
            <img src={props.data.image} alt={props.data.title} />
            <p>{props.data.title}</p>
            <p>{props.data.cost}</p>
            <button className="add-to-cart" data-key={props.data.articul} onClick={AddToCart}>Add to cart</button>
        </div>
    )
}