import React from 'react'
import styled from 'styled-components'
const Numberselector = ({

  Error ,
  setError ,
  SelectedNumber,
  setSelectedNumber 

}) => {
    
    const arrNumber = [1,2,3,4,5,6];
     
    const numberSelectorHandler = (value) => {
      setSelectedNumber(value);
      setError("");
    };

  return (
    <Div className="flex flex-col items-end w-1/2">

     <p className="text-red-600"> {Error} </p>
      
    <BoxDiv className="flex gap-4 ">
    {arrNumber.map((value, i) => (
          <Box
            isSelected={value === SelectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
    </BoxDiv>

    <p className="text-24 font-bold  mt-2"> Select Number </p>
    </Div>
  )
}

const Div = styled.div`
  @media (max-width: 839px) {
    width:100%;
    align-items:center;
  }
`
const BoxDiv = styled.div`
  @media (max-width: 500px) {
    width:80%;
    align-items:center;
    flex-wrap:wrap;
  }
`
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor:pointer;
  background-color: ${ (props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`
export default Numberselector