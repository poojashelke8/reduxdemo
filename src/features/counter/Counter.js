import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment,reset,incrementBy } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    // const [initial,setinitial] = useState(0)

    // const addValue = Number(incrementBy) || 0;

    // const restAll =()=>{
    //     setinitial(0);
    //     dispatch(reset());
    // }

  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>

        {/* <input 
            type='text'
            value={initial}
            onChange={(e)   => setinitial(e.target.value)}/>

        <div>
            <button onClick={()=>dispatch(incrementBy(addValue))}>Add By</button>
            <button onClick={restAll}>RESET</button>
        </div> */}
        <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <div>
                <button onClick={() => dispatch(incrementBy(addValue))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
    </section>
    
  )
}

export default Counter