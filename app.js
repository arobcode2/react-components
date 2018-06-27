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

var GroceryListItems = () => {
  var groceryItems = ['Bananas', 'Strawberries', 'Watermelon'];
  return (
  
  <div>
    {groceryItems.map((item, index) => <GroceryListItem key={index}item = {item}/> )}
  </div>
)};

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      done: false
    };
    
    this.onGroceryListItemHover = this.onGroceryListItemHover.bind(this);
  }
  
  onGroceryListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }  
  
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
      //textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
      <li style={style} onMouseEnter={this.onGroceryListItemHover}>
        {this.props.item}
      </li>
    );
  }
}

  //<ul>
    //{props.items.map((item, index) => <li key={index}>{item}</li>)}
  //</ul>
//);

ReactDOM.render(<App />, document.getElementById('app'));