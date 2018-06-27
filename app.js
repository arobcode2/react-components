var App = () => (
  <div>
    Hello, world!
    <GroceryList />
  </div>
);

var GroceryList = () => (
  <ul>
    <li><Apples /></li>
    <li><Oranges /></li>
  </ul>  
);

var Apples = () => (
  <div>3 Apples $0.50</div>
);

var Oranges = () => (
  <div>2 Oranges $0.25</div>
);

ReactDOM.render(<App />, document.getElementById('app'));