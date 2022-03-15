import { useState, useEffect } from "react";

export default function GetStat(){
   const [chackFact,setChackFact] = useState([]);
   const [loading,setLoading] = useState(true);
   const [count,setCount] = useState(0);

   useEffect(() => {
    setLoading(true)
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => {
        setChackFact(arr => [...arr,data]);
        setLoading(false);
    })
    .catch(error => console.error(error))
   } ,[count])
   return (
    <>
    <p>
        {loading && 'Loading, wait ...'}
    </p>
    <button 
        type = 'button'
        onClick = {()=>{setCount(c => c + 1)}}>
            Try to click
    </button>
    <div >
        {chackFact.map((fact) => 
        <div key={fact.id}
        style = {{
                background:'rgba(255, 88, 42, 0.5)',
                color: 'white',
                fontWeight: '180',
                margin: '10px',
                padding: '10px',
                width: '300px',
                borderRadius : '3px'}}>
                       {fact.value}
        </div> 
         )}
    </div>
    </>
   )
}