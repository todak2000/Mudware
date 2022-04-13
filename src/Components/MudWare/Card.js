import './MudWare.css';
import MudSVG from '../Images/mudSVG';
const Card = (props) => {
    const {innerText, imgColor, setDisplay, num} = props

    return (
        <div className='cardd'
            onClick={()=>{
                setDisplay(num)
            }}
        > 
        <MudSVG imgColor={imgColor}/> 
            <p className={imgColor}>{innerText}</p>
        </div>
        
    )
}

export default Card;