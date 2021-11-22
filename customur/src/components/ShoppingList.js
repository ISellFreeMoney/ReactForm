const disPlat = [
    'petite',
    'moyenne',
    'grande'
]

function ShoppingList() {
    return (
        <ul>
            {disPlat.map((dis, index)=> <li key={`${dis}-${index}`}>{dis}</li>)}
        </ul>
    )
}

export default ShoppingList