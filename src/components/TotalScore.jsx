import React from 'react'
import styled from 'styled-components'

const TotalScore = ({Score}) => {
  return (
    <Div className= " flex flex-col w-1/2 ">
      <h1 className= "font-bold text-7xl">{Score}</h1>
      <p className="font-bold">Total Score</p>
    </Div>
  )
}

export default TotalScore

const Div = styled.div`
  @media (max-width: 839px) {
    width:100%;
    align-items:center;
  }
`