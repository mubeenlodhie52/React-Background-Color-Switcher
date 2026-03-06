import { useState } from "react"

function App() {
  const [color,setColor] = useState("bg-white")

  function chngColor(newColor){
    setColor(newColor)
  }

  return (
    <div className= {`h-screen w-screen flex justify-center items-center ${color}`}>
      <div className="flex justify-center items-center bg-gray-100 px-5 py-2 gap-2.5 rounded-full shadow-lg border-none ">
        <button onClick={()=>chngColor("bg-yellow-500")} className="px-2.5 py-1 rounded-4xl cursor-pointer text-white bg-yellow-500 border-none shadow-lg">Yellow</button>

        <button onClick={()=>chngColor("bg-blue-500")} className=" px-2.5 py-1 rounded-4xl cursor-pointer  text-white bg-blue-500 border-none  shadow-lg">Blue</button>

        <button onClick={()=>chngColor("bg-green-500")} className=" px-2.5 py-1 rounded-4xl cursor-pointer  text-white bg-green-500 border-none shadow-lg">Green</button>

      </div>
    </div>
  )
}

export default App
