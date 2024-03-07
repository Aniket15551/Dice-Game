import React, { useState } from 'react'
import styled from 'styled-components';
import TotalScore from './TotalScore';
import Numberselector from './Numberselector';
import RollDice from './RollDice';
import Rules from './Rules';

const GamePlay = () => {
  const[Score , setScore] = useState(0)
  const[Error , setError] = useState("")
  const[SelectedNumber , setSelectedNumber] = useState();
  const[CurrentDice , setCurrentDice] = useState(1);
  const[showRules,setshowRules] = useState(false);

  const generateRandomNumber = (min ,max) =>{
       return Math.floor(Math.random() * (max - min) + min);
  }

  const Roledice = () => {
      if( !SelectedNumber )
      {
        setError ("You have not selected any number");
        return;
      }

      const RandomNumber = generateRandomNumber(1,7);
      setCurrentDice( (prev) => RandomNumber);

      if( SelectedNumber === RandomNumber)
      setScore((prev) => prev + RandomNumber);

      else
      setScore((prev) => prev - 2);

      setSelectedNumber(undefined);
  }

    const ResetScore =()=>{
      setScore(0);
    }
  return (

    <div> 
      <MainSection className= " flex w-3/4 mx-auto mt-10" >

           <TotalScore  Score = {Score}/>
         
              <Numberselector 
               Error = {Error}
               setError = { setError}
               SelectedNumber = { SelectedNumber}
               setSelectedNumber = { setSelectedNumber}
            />
       </MainSection>

       <div className="flex flex-col justify-center align-middle gap-4">
       <RollDice 
        CurrentDice = {CurrentDice}
        Roledice = {Roledice}
       />

       <button onClick={ResetScore} className="px-3 py-2 border border-black  mx-auto font-bold rounded-sm bg-zinc-50 cursor-pointer"> Reset Score </button>
       <button className="text-white mx-auto px-3 py-2 rounded   bg-black  hover:bg-blue-700 transition duration-300 " onClick={() => setshowRules((prev) => !prev)}>  {showRules ? "Hide" : "Show"} Rules</button>
        
       {showRules && <Rules />}
     
       </div>
      
      
        
    </div>
    
  )
}

const MainSection = styled.div`
 
 @media (max-width: 839px) {
  
    flex-direction: column;
    gap:15px;
    align-items:center;
    width:100vw;
  }

`
export default GamePlay

