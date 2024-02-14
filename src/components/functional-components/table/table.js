import ImageComponent from "../image/image-component";

var Table = () => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Batch</th>
            <th>Age</th>
            <th>Country</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>2022</td>
            <td>25</td>
            <td>USA</td>
            <td><ImageComponent></ImageComponent></td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>2023</td>
            <td>28</td>
            <td>Canada</td>
            <td><ImageComponent></ImageComponent></td>
          </tr>
          <tr>
            <td>Alice Johnson</td>
            <td>2022</td>
            <td>23</td>
            <td>UK</td>
            <td><ImageComponent></ImageComponent></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
