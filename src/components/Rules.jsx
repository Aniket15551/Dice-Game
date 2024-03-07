import React from 'react'
import styled from 'styled-components'
const Rules = () => {
  return (
    <Div className=" bg-orange-300 px-5 py-4 border border-black rounded text-sm">
     <h1 className="font-bold mx-auto"> How to play dice game  ? </h1>
     <p>1. Select any Number</p>
     <p>2. Click on the Dice image</p>
     <p>3. After clicking if same number appears on the dice you will get same points</p>
     <p>4. else your score will be reduced by 2</p>
    </Div>
  )
}

export default Rules
const Div = styled.div`
font-style:italic;
 font-weight: 600;
 align-self:center;
 width: 40%;
 display: flex;
 flex-direction :column;
 align-items:start;
 gap: 5px;
 height: fit-content
`