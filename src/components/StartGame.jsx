import React from 'react'

const StartGame = ({ toggle }) => {


  return (
    <div className="flex flex-col  mx-auto my-auto w-50 h-50 mt-32 gap-10">
      <img className = "h-[400px] w-[400px] mx-auto"src="/images/dices.png"></img>

      <div className="flex flex-col gap-2 justify-center mx-auto">
        <h1 className="font-poppins text-6xl font-bold"> Dice Game </h1>
        <button onClick={toggle} className ="flex flex-col items-center justify-center gap-4 w-44 p-2 bg-black text-white  self-end rounded-md mx-auto"> Play Now </button>
      </div>
    </div>
  )
}

export default StartGame