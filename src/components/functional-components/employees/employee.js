import { useState } from "react";

const EmployeeData = () => {
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
    { id: 5, name: "Michael Lee" },
    { id: 6, name: "Emily Wang" },
    { id: 7, name: "David Garcia" },
    { id: 8, name: "Sarah Martinez" },
    { id: 9, name: "Kevin Nguyen" },
    { id: 10, name: "Jennifer Kim" },
    { id: 11, name: "Sadhiq" },
    { id: 12, name: "Sachin" },
    { id: 13, name: "Brahma" },
    { id: 14, name: "Nithin" },
  ];

  const [currentState, updaterFunction] = useState(data);
  const submitForm = (eid) => {
    const randomIndex = Math.floor(Math.random() * currentState.length);

    // get random item
    const item = currentState[randomIndex].name;
    const obj = {
      id: eid,
      name: item,
    };
    let newState = [...currentState, obj];
    updaterFunction(newState);
  };

  const deleteEmployee = (index, eid) => {
    let newState = currentState.filter((eachPerson, ind) => {
      if (eachPerson.id !== eid || index !== ind) {
        return eachPerson;
      }
    });
    updaterFunction(newState);
  };

  return (
    <>
      <div
        style={{
          width: "fit-content",
          height: "auto",
          border: "2px solid red",
          padding: "20px",
          margin: "30px",
        }}
      >
        <ul>
          {currentState.map((eachPerson, index) => {
            return (
              <li key={eachPerson.id} style={{ margin: "4px 0px 8px 10px" }}>
                {eachPerson.name}{" "}
                <button
                  onClick={() => deleteEmployee(index, eachPerson.id)}
                  style={{
                    borderColor: "red",
                    backgroundColor: "Red",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <button
          type="submit"
          style={{
            width: "97%",
            borderColor: "blueviolet",
            backgroundColor: "blueviolet",
            borderRadius: "10px",
            color: "white",
          }}
          onClick={() => submitForm(currentState.length)}
        >
          Add an Employee
        </button>
        {/* <Form
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "20px",
          }}
        >
          <input type="text" placeholder="Enter the Employee Name"/>

          <button type="submit" style={{ width: "97%", borderColor:"blueviolet", backgroundColor:"blueviolet", borderRadius:"10px",color:"white"}} onClick={()=>submitForm(currentState.length)}>
            Submit
          </button>
        </Form> */}
      </div>
    </>
  );
};

export default EmployeeData;
