import { useReducer, useState } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "DELETE_ITEM":
      return state.filter((val, index) => index !== action.index);
    case "UPDATE_ITEM":
      return state.map((val) => {
        if (val.id === action.id) {
          return action.item;
        } else {
          return val;
        }
      });
    default:
      return state;
  }
}
const initialState = [
  {
    id: 1,
    name: "apple",
    price: 200,
  },
  {
    id: 2,
    name: "banana",
    price: 70,
  },
  {
    id: 3,
    name: "Grapes",
    price: 120,
  },
];
const UseReducerTask = () => {
  const [currentState, dispatchFunction] = useReducer(reducer, initialState);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [updateItemId, setUpdateItemId] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    let name = event.target[0].value;
    let price = event.target[1].value;
    if (updateItemId !== null) {
      dispatchFunction({
        type: "UPDATE_ITEM",
        id: updateItemId,
        item: {
          id: updateItemId,
          name: name,
          price: parseInt(price),
        },
      });
      setUpdateItemId(null);
      setItemName("");
      setItemPrice("");
    } else {
      dispatchFunction({
        type: "ADD_ITEM",
        item: { id: currentState.length + 1, name: name, price: Number(price) },
      });
    }
    event.target.reset();
  };
  const handleDelete = (id) => {
    dispatchFunction({
      type: "DELETE_ITEM",
      index: id - 1,
    });
  };
  const handleUpdate = (item) => {
    setItemName(item.name);
    setItemPrice(item.price);
    setUpdateItemId(item.id);
  };

  return (
    <>
      <div>
        <h1>CRUD Operations</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {currentState.map((item) => (
              <Item
                item={item}
                key={item.id}
                id={item.id}
                deleteItem={handleDelete}
                updateItem={handleUpdate}
              />
            ))}
          </tbody>
        </table>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add fruit name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="add  fruit price"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default UseReducerTask;
export const Item = ({ item, deleteItem, id, updateItem }) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
        <button onClick={() => deleteItem(id)} className="btn btn-danger">
          delete
        </button>
      </td>
      <td>
        <button onClick={() => updateItem(item)} className="btn btn-danger">
          Update
        </button>
      </td>
    </tr>
  );
};
