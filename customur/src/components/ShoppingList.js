import { displateList } from '../datas/displateList'
import Weight from './Weight'

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
                {displateList.map(displate => (
                    <><li key={displate.id}>
                        {displate.name}
                        {displate.isBestSales && <span> 🔥</span>}

                    </li><Weight weight={displate.weight} /></>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList