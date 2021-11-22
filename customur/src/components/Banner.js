import '../styles/Banner.css'
import logo from '../assets/logo.png'
function Banner() {
    const title = 'CustoMur'
    return (
        <div className="csm-banner">
            <img src={logo} alt="CustoMur" className="csm-logo"/>
            <h1 className="csm-title">{title}</h1>
        </div>
    )
}
export default Banner;