import './MudWare.css';
import Card from './Card';
import Form from './Form';
import Arrow from '../Images/Arrow';
import { useState } from 'react';
const Right= () => {
    const [display, setDisplay] = useState(0)
    const [showButton, setShowButton] = useState(true)

    return (
        <div className='bg_right'>  
            <div className={display === 0 ? "show": "hide" }>
                <p className="select_one">Select One</p>
                <div className="divider">
                <Card innerText="Water-based Mud" imgColor="blue" setDisplay={setDisplay} num={2}/>
                <Card innerText="Oil-based Mud" imgColor="yellow" setDisplay={setDisplay} num={1}/>
                </div>
            </div>
            <div className={display === 1 ? "show2": "hide" }>
                
                { showButton ?
                    <button className="back" onClick={()=>{setDisplay(0)}} > <Arrow /></button>
                    :    
                    <></>
                }
                <Form innerText="Oil-based Mud"imgColor="yellow" setDisplay={setDisplay} setShowButton={setShowButton} showButton={showButton}/>
            </div>
            <div className={display === 2 ? "show2": "hide" }>
                { showButton ?
                    <button className="back" onClick={()=>{setDisplay(0)}} > <Arrow /></button>
                    :    
                    <></>
                }

                <Form innerText="Water-based Mud" imgColor="blue" setDisplay={setDisplay} setShowButton={setShowButton} showButton={showButton}/>
            </div>
        </div>
        
    )
}

export default Right;