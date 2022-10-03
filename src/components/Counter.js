import { useSelector, useDispatch } from 'react-redux';
import  { counterActions } from '../store/index'
import classes from './Counter.module.css';  

const Counter = () => {
	const counter = useSelector(state => state.counter);
	const show = useSelector(state => state.show);
	const dispatch = useDispatch();
	
	const incrementHandler = () => {
		dispatch(counterActions.increment());
	}
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	}
	const increaseHandler = () => {
		dispatch(counterActions.increase(5));
	}
	const toggleHandler = () => {
		dispatch(counterActions.toggle())
	}
		  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
      	<button onClick={incrementHandler}>Increment</button>
      	<button onClick={increaseHandler}>Increase by 10</button>
      	<button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
