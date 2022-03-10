
import { useState } from 'react';

export default function ColorButton() {
    const [color, setColor] = useState('green');
    function ChangeState() {
        return setColor(prevColor => prevColor === 'green'? setColor('blue') : setColor('green'))
    }
    return (
        <div>
        <button
            style={{
                background : color,
                margin : '10px',
                padding : '30px'
            }}
            type = 'button'
            onClick={()=>{
                ChangeState();
            }}
            >
            TextColor
            </button>
            
        </div>
    )
}