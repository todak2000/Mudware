import './MudWare.css';
import IconSVG from '../Images/IconSVG';
const Result = (props) => {
    const {imgColor, answer} = props

    return (
        <div className='result'> 
            <p className="result_p">
                <span>
                    {imgColor === "blue"? "WBM PV ": "OBM PV "}
                </span>
                at HTHP conditions
            </p>
            <div className= "res_cover">
                <span className={imgColor === "blue"? "res_icon": "res_icon2"}>
                    <IconSVG />
                </span>
                <span className= {imgColor === "blue"? "res_value": "res_value2"}>{answer}</span>
                <span className={imgColor === "blue"? "res_unit": "res_unit2"}>cP</span>
            </div>
        </div>
        
    )
}

export default Result;