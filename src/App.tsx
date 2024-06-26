 import { useAppDispatch, useAppSelector } from "./hockes/hockes";

import { decrement, increment } from "./redux/features/counterSlice"

function App() {

 const {count} = useAppSelector((state) => state.counter);
   const dispatch = useAppDispatch();
  
  return (
    <>
      <div>
      <h1  className="text-4xl text-yellow-600">Vite + React</h1>
      <h1  className="text-4xl text-green-600">Vite + React</h1>
      <h1  className="text-4xl text-sky-600">Vite + React</h1> 
      </div>
      <div className='h-screen w-full flex justify-center items-center '>

     <button  onClick={() => dispatch(increment(3))}  className='px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white' >Increment</button>

     <h1  className='text-3xl mx-6'>0 {count} </h1>

     <button onClick={() => dispatch(decrement(5))}  className='px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white' >Increment</button>

     </div>
      
    </>
  )
}

export default App
