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
        {loading && 'Loading...'}
    </p>
    <button 
        type = 'button'
        onClick = {()=>{setCount(c => c + 1)}}>
            Try to click
    </button>
    <div >
        {chackFact.map((fact) => 
        <div key={fact.id}
        style = {{background:'black',
                   margin: '10px',
                   padding: '10px',
                   width: '300px' }}>
                       {fact.value}
        </div> 
         )}
    </div>
    </>
   )
}