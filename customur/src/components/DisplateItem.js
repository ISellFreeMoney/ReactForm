import '../styles/DisplateItem.css'
import Weight from "./Weight";

function handleClick(displateName){
    alert(`Vous avez selectionne 1 ${displateName}, un super choix`)
}

function DisplateItem({ id, cover, name, weight, sales }) {
    return (
        <li key={id} className='csm-displate-item' onClick={() => handleClick(name)}>
            <img className='csm-displate-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <Weight weight={weight} />
                {sales && <span> 🔥</span>}
            </div>
        </li>
    )
}
export default DisplateItem