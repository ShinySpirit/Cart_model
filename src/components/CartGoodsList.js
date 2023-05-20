import { useSelector } from "react-redux"
import {
    selectCart
} from "../store/cartSlice";
import CartGood from "./CartGood";

export default function CartGoodsList() {

    let cart = useSelector(selectCart);
    let cartGoods = cart.goods;
    let cartTotal = cart.total > 0 ? "Total :" + cart.total : "";

    return (
        <div className="cart">
            <hr />
            <table className="cart-table">
                <tbody>
                    {cartGoods.map(e => <CartGood key={e.articul} data={e} />)}
                </tbody>
            </table>
            <p className="cart-total"> {cartTotal}</p>
        </div>
    )
}