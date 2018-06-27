var App = () => (
  <div>
    Hello, world!
    <GroceryList />
  </div>
);

var GroceryList = () => (
  <ul>
    <GroceryListItems />
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

var GroceryListItems = () => (
  <div>
    <GroceryListItem items = {['Bananas', 'Strawberries', 'Watermelon']}/>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ul>{this.props.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    );
  }
}

  //<ul>
    //{props.items.map((item, index) => <li key={index}>{item}</li>)}
  //</ul>
//);

ReactDOM.render(<App />, document.getElementById('app'));