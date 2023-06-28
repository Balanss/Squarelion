import React,{useState,useEffect} from 'react'

export default function Title({sum}) {

    useEffect(() => {
        if (sum === null){
          document.getElementById('myHead').innerHTML = `Squarelion Agency`;
        } else if (sum === 0){
          document.getElementById('myHead').innerHTML = `Squarelion Agency`;
        } else if(sum === 'Nan'){
          document.getElementById('myHead').innerHTML = `Squarelion Agency`;
        }
        
        else {
          document.getElementById('myHead').innerHTML = `Squarelion Agency (${sum})`;
        }
      }, [sum]);

   

}
