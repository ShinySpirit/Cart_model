import { useSelector } from "react-redux";
import {
    selectGoods
} from "../store/goodsSlice";
import Good from "./Good";

export default function GoodsList() {

    let goods = useSelector(selectGoods);
    // console.log(goods);

    return (
        <div className="goods-list">
            {goods.map(e => <Good key={e.articul} data={e} />)}
        </div>
    )
}