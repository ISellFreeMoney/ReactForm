import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendations from './Recommendations'
function Banner() {
    const title = 'CustoMur'



    return (
        <div className="csm-banner">
            <Recommendations />
            <div className="cms-banner-row">
                <img src={logo} alt="CustoMur" className="csm-logo" />
                <h1 className="csm-title">{title}</h1>
            </div>
        </div>
    )
}
export default Banner;