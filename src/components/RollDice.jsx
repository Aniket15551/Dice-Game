import React from 'react'
import styled from 'styled-components'
const RollDice = ({CurrentDice , Roledice}) => {
  return (
    <DiceContainor>
      <div onClick={Roledice} className="cursor-pointer"> 
      <img src={`/images/dice_${CurrentDice}.png`} alt="dice 1" />
     
      </div>
      <p className="text-black font-Poppins text-base font-medium leading-normal"> Click on Dice to Roll</p>
    </DiceContainor>
  )
}

export default RollDice

const DiceContainor = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`