import { displateList } from '../datas/displateList'
import DisplateItem from "./DisplateItem";
import '../styles/ShoppingList.css'

function ShoppingList() {
    const categories = displateList.reduce(
        (acc, displate) =>
            acc.includes(displate.category) ? acc : acc.concat(displate.category),
        []
    )

    return (
        <div>
            <ul>
                {categories.map(cat => (
                    <li key={cat}>{cat}</li>
                ))}

            </ul>
            <ul>
                {displateList.map(({id, cover, name, weight, isBestSales}) => (
                    <DisplateItem
                        id={id}
                        cover={cover}
                        name={name}
                        weight={weight}
                        sales={isBestSales}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList