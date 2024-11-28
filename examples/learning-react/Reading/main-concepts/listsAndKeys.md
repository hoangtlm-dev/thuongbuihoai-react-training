### Rendering Multiple Components
- We can build collections of elements and include them in JSX using curly braces `{}`.
```
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((numbers) => 
    <li>{numbers}</li>
  );

  ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
  );
```
### Basic List Component
```
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
  );
```
### Keys
- Keys help React `identify` which items have `changed`, are `added`, or are `removed`. Keys should be given to the elements inside the array to give the elements a stable identity:
- Key of each item must be unique, we normally use `ID` of item for keys
```
  // EmployeeList Component
  class EmployeeList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        employees: [
          { 
            empId: 1,
            fullName: "Thuong",
            gender: "Female" 
          },
          { 
            empId: 2,
            fullName: "Yuki",
            gender: "Female" 
          },
          { empId: 3,
            fullName: "Nhan",
            gender: "Male" 
          }
        ]
      };
    }

    render() {
      // Array of <Employee>
      const listItems = this.state.employees.map(e => (
        <Employee key={e.empId} fullName={e.fullName} gender={e.gender} />
      ));
      return (
          <ul className="employee-list">
            {listItems}
          </ul>
        );
    }
  }
```
### Extracting Components with Keys
```
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
### Embedding map() in JSX
```
  function ListItem(props) {
    return <li>{props.value}</li>;
  }

  function NumberList(props) {
    const numbers = props.numbers;
    return (
      <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
                    value={number} />
        )}
      </ul>
    );
  }

  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
  );
```