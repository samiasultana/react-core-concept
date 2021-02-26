import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    { name: "Photoshop", price: "US$50" },
    { name: "Illustrator", price: "US$60" },
    { name: "PDF Reader", price: "US$70" },
    { name: "Adobe premium", price: "US$170" }
  ]

  // const productNames=products.map(product=> product);
  // console.log(productNames);

  const birds = ['owl', 'sparrow', 'crow', 'martin', 'flamingo'];
  // const birdNames= birds.map(birds=>birds);
  // console.log(birdNames);


  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        {/* <ul>
          {
            birds.map(birds=> <li>{birds}</li> )
          }
          <li>{birds[0]}</li>
          <li>{birds[1]}</li>
          {
            products.map(products=> <li>{products.name} {products.price}</li> )
          }
        </ul> */}

        {
          products.map(pd => <Products product={pd}></Products>)
        }
        {/* <Products product={products[0]}></Products> */}
        {/* <Products product={products[1]}}></Products>
        <Products product={products[2]}}></Products> */}

      </header>
    </div>
  );
}
function Counter(props) {
  const [count, setCount] = useState(110);
  const handleIncrease = () => {
    setCount(count + 1)
    // console.log("aaa");
    // const newCount=count+1;
    // setCount(newCount);
  }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)} >Increase</button>
      <button onClick={() => setCount(count - 1)} >Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);

  // useEffect use korbo data load korte
  useEffect(()=>{
    // console.log("effect")
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data))
  },[])
  // useEffect er karone barbar array show kortei thakbe tai ota off korte empty array likhbo 2nd argument hisebe, er fole initial render er pore ar run hobena
  return (
    <div>
      <h1>Dynamic Users:{users.length}</h1>
      {/* {console.log(users)} */}
      <ul>
        {
          users.map(user=> <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Products(props) {
  const productStyle = {
    backgroundColor: 'lightgray', height: '200px', width: '400px', float: 'left', borderRadius: '5px', color: 'black', margin: '10px'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <p></p>
      <p></p>
      <button>Buy Now</button>
    </div>
  )
}


// function Person(props) {
//   const personStyle = {
//     border: ' 2px solid blue',
//     padding: '10px',
//     margin: '10px'
//   }
//   return (
//     <div style={personStyle}>
//       <h1> Name: {props.name} </h1>
//       <h1> Name: Meaw Baby Sampoon <br /> Hobby: {props.hobby} <br /> Fave Food: {props.food}</h1>
//     </div>
//   )
// }
// function Miuuu(param) {
//   return (
//     <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
//       <p>Ami cutie billu, feed me and caress all day.</p>
//       <p>Amake ghutte niye cholo</p>
//       <p>kole nao {param.kitty}</p>
//     </div>
//   )
// }

// function Product(props) {
//   return (
//     <div style={{ borderRadius: '10px', border: '3px solid gold', padding:'10px', margin:'10px', backgroundColor:'blue', float:'left' }}>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }
export default App;
