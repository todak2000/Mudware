import './MudWare.css';
import MudSVG from '../Images/mudSVG';
import { useEffect, useState } from 'react';
import Result from './Result';
import { Bars } from  'react-loader-spinner'
import Arrow from '../Images/Arrow';
import { waterBasedAI } from '../Logic/WaterBasedAI';
import { oilBasedAI } from '../Logic/OilBasedAI';
const Form = (props) => {
    const {innerText, imgColor, setDisplay, setShowButton, showButton} = props

    const [pressure, setPressure] = useState('');
    const [temperature, setTemperature] = useState('');
    const [answer, setAnswer] = useState(35.03);
    const [pv, setPv] = useState('');
    const [mudType, setMudType] = useState('');
    const [showResult, setShowResult] = useState(false)
    const [showLoader, setShowLoader] = useState(false)

    const validateValue = (value) => {
        const reg = /^\d{0,8}(\.\d{0,2})?$/;
        if (!value.trim()) {
          return {
            isValid: true,
            error: "",
          };
        }
      
        if (!reg.test(value)) {
          return {
            isValid: false,
            error: "Please, enter a valid Number.",
          };
        }
      
        return {
          isValid: true,
          error: "",
        };
      };

    useEffect (() => {
        if (imgColor === "blue"){
            setMudType("Water")
        }
        else if (imgColor === "yellow"){
            setMudType("Oil")
        }

    }, [imgColor])

    const submitValue = () => {
        setShowButton(false)
        setShowResult(true)
        setShowLoader(true)
        
        
        if (mudType === "Water"){
            setAnswer(waterBasedAI(pressure,temperature,pv))
        }
        else if (mudType === "Oil"){
            setAnswer(oilBasedAI(pressure,temperature,pv))
        }
        setTimeout(()=>{setShowLoader(false)}, 5000)
        // const frmdetails = {
        //     'pressure' : pressure + " psi",
        //     'temperature' : temperature + " degree celcius",
        //     'pv' : pv + " cP",
        //     'mudType' : mudType
        // }
        // console.log(frmdetails);
    }
    return (
        <>
        {showResult ? 
            <>
                {showLoader ? 
                    <div className="load_div">
                        <Bars color= {imgColor === "blue"? "#4473B7":"#E5AA33"} height={80} width={80} />
                    </div>
                    :
                    <form className="mud_form">
                        { !showButton ?
                            <button className="backy" onClick={()=>{
                                setShowButton(true)
                                setShowResult(false)
                            }} 
                            > 
                            <Arrow /></button>
                        :    
                        <></>
                    }
                        <Result imgColor={imgColor} answer={answer}/>
                    </form>
                }
             </>
            :
          <form className="mud_form">
          <div className="form_header">
              <MudSVG imgColor={imgColor}/> 
              <p className={imgColor}>{innerText}</p>
          </div>

          <> 
            
              <p className="form_p">Pressure (psi)</p>
              <input 
                  type="text"
                  placeholder="e.g. 1035"
                  className= {validateValue(pressure.trim()).isValid ? "input_tag" :"input_red"}
                  value={pressure}
                  onChange={e=>{
                    setPressure(e.target.value)
                    validateValue(pressure.trim())
                  }}
              />
              <span className="error_p">{validateValue(pressure.trim()).isValid ? "" : validateValue(pressure.trim()).error}</span>
          </>
          <> 
              <p className="form_p">Temperature (Celcius)</p>
              <input 
                  type="text"
                  placeholder="e.g. 90"
                  className= {validateValue(temperature.trim()).isValid ? "input_tag" :"input_red"}
                  value={temperature}
                  onChange={e=>{
                    setTemperature(e.target.value)
                    validateValue(temperature.trim())
                  }}
              />
              <span className="error_p">{validateValue(temperature.trim()).isValid ? "" : validateValue(temperature.trim()).error}</span>
          </>
          <> 
              <p className="form_p">Initial Plastic Viscosity (cP)</p>
              <input 
                  type="text"
                  placeholder="eg 35"
                  className= {validateValue(pv.trim()).isValid ? "input_tag" :"input_red"}
                  value={pv}
                  onChange={e=>{
                    setPv(e.target.value)
                    validateValue(pv.trim())
                  }}
              />
              <span className="error_p">{validateValue(pv.trim()).isValid ? "" : validateValue(pv.trim()).error}</span>
          </>
          <div className="form_header">
              { pv === '' || temperature === '' || pressure === '' || validateValue(pv.trim()).error !== ""  || validateValue(temperature.trim()).error !== "" || validateValue(pressure.trim()).error !== "" ?
                <input 
                type="button"
                value="Calculate"
                className="grey_btn"
            />
                :
                <input 
                  type="button"
                  value="Calculate"
                  className={imgColor === "blue"? "input_tag_btn":"input_tag_btn2"}
                  onClick={submitValue}
              />  
            }
               <p className="form_p">Switch to 
                  <span className={imgColor === "blue"? "yellow": "blue"}
                      onClick={()=>{
                          if (imgColor=== "blue"){
                              setDisplay(1)
                          }
                          else{
                              setDisplay(2)
                          }
                      }}
                  >
                      {imgColor === "blue"? " Oil-based mud": " Water-based mud"}
                  </span>
               </p>
          </div>
         
      </form>

        }
    </>        
    )
}

export default Form;