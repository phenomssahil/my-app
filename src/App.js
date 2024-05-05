import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './slider';
import slides from './mock.json'
import './card.css';
import WebPage from './webpage';
import Card from './card';
import Modal from './modal';
import deliver from './image/Food Delivery.png';
import { CartProvider } from 'react-use-cart';
import { data } from './cart';
import AdtCart from './adtCart';
function App() {
 
  return (
    
    <div className="App">
      <CartProvider>
      <div className='cover'>
      <WebPage/>
      <Slider slides={slides}/>
      <br></br>
      <br></br>
      <div className='name' id='action4'>Best Sellers</div>
      <br></br>
      <br></br>
     <div className='container' style={{width: '1500px',paddingLeft: '0px',paddingRight: '0px'}}>
      {
        data.productsData.map((item,index)=>{
          return(
            <Card img={item.img} title={item.title} price={item.price} item={item} key={index}/>
          )
        })
      }
      </div>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      <div className='deliver'>
      <img src={deliver} alt='delivery' id='action3'></img>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <div class="container1">
            <img src='https://wpblog.zyro.com/cdn-cgi/image/w=700,q=85/wp-content/uploads/2020/12/dollar-shave-club-2.png'></img>
        </div>
      </div>
      </div>
      </CartProvider>
    </div>
   
  );
}

export default App;