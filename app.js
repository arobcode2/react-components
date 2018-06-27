// TODO
var App = () => (
  <div>
    Hello, world!
    <GroceryList />
  </div>
);

var GroceryList = () => (
  <ul>
    <li>Apples</li>
    <li>Oranges</li>
  </ul>  
);

ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<, document.getElementById('app'));