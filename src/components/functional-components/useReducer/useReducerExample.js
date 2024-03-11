import { useReducer } from "react";
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT_AGE_BY_10":
      return { ...state, age: state.age + 10 };
    case "DECREMENT_AGE_BY_10":
      return { ...state, age: state.age - 10 };
    case "CHANGE_THE_NAME":
      return { ...state, name: "Sadhiq" };
    case "ADD_FRUIT":
      return { ...state, fruits: [...state.fruits, "newFruit"] };
    default:
      return state;
  }
}
const initialState = {
  age: 100,
  name: "Dheeraj",
  fruits: ["apple", "banana"],
};
const UseReducerExample = () => {
  const [currentState, dispatchFunction] = useReducer(reducer, initialState);
  const incrementAge = () => {
    dispatchFunction({
      type: "INCREMENT_AGE_BY_10",
    });
  };
  const decrementAge = () => {
    dispatchFunction({
      type: "DECREMENT_AGE_BY_10",
    });
  };
  const changeName = () => {
    dispatchFunction({
      type: "CHANGE_THE_NAME",
    });
    dispatchFunction({
      type: "ADD_FRUIT",
    });
  };

  return (
    <>
      <h1>UseReducer</h1>
      <h2>{currentState.age}</h2>
      <h2>{currentState.name}</h2>
      <h3>{currentState.fruits[currentState.fruits.length - 1]}</h3>
      <button onClick={incrementAge}>Increment age by 10</button>
      <button onClick={decrementAge}>Decrement age by 10</button>
      <button onClick={changeName}>Change Name</button>
    </>
  );
};
export default UseReducerExample;
