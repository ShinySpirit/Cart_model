import { useDispatch } from "react-redux"
import {
    increase,
    decrease,
    remove
} from "../store/cartSlice";

export default function CartGood(props) {

    let dispatch = useDispatch();

    function Increase() {
        dispatch(increase(props.data.articul));
    }

    function Decrease() {
        dispatch(decrease(props.data.articul));
    }

    function Remove() {
        dispatch(remove(props.data.articul));
    }

    return (


        <tr className="cart-row">
            <td className="cart-good-name">
                <div>
                    <img src={props.data.img} alt={props.data.title} className="cart-good-img" />
                    <p>{props.data.title}</p>
                </div>
            </td>
            <td className="cart-goods-num-panel">
                <div >
                    <button onClick={Decrease} className="goods-num-btn">-</button>
                    <p className="goods-number"> {props.data.number} </p>
                    <button onClick={Increase} className="goods-num-btn">+</button>
                    <button onClick={Remove} className="remove-btn">&#128465;</button>
                </div>
            </td>
            <td className="cart-good-summ"><div><p >{props.data.summ}</p></div></td>

        </tr >

    )
}