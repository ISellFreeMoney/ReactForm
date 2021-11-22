import '../styles/Cart.css'

const disPetite = ["Taille petite", 8];
const disNormale = ["Taille normale", 10];
const disGrande = ["Taille grande", 12];


function CartTest() {
    const nbArticle = 3;
    return (
      <div className="csm-cart">
        <h2>Votre panier</h2>
        <p>Vous avez {nbArticle} article dans votre panier</p>
        <ul>
          <li>
            {disPetite[0]} : {disPetite[1]}
          </li>
          <li>
            {disNormale[0]} : {disNormale[1]}
          </li>
          <li>
            {disGrande[0]}: {disGrande[1]}
          </li>
        </ul>
        <p>
          {" "}
          Vous avez {disPetite[1] + disNormale[1] + disGrande[1]}€ dans
          votre panier
        </p>
      </div>
    );
  }

  export default CartTest;