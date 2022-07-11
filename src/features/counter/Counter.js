import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [byAmount, setByAmount] = useState(0);

  const addValue = Number(byAmount) || 0;

  return (
    <section>
      <p>Counter : {count}</p>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button type="button" onClick={() => dispatch(reset())}>
          reset
        </button>
        <button onClick={() => dispatch(increment())}>+</button>

        <input
          type="text"
          value={byAmount}
          onChange={(e) => setByAmount(e.target.value)}
        />
        <div>
          <button
            type="button"
            onClick={() => dispatch(incrementByAmount(addValue))}
          >
            Add Amount
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
