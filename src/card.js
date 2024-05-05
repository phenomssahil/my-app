import { Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import './card.css';
import { useCart } from 'react-use-cart';

export default function Card(props)
{
  const {addItem}=useCart();
  const[num,setNum]=useState(0);
  const changeNum=()=>{
  
    setNum(num+1);
  }
  const[num1,setNum1]=useState(0);
  const changeNum1=()=>{
  
    setNum1(num1+1);
  }
  const [buttonText, setButtonText] = useState('+');
  
    function handleClick() {
      setButtonText(``);
    }
    const [Text, setText] = useState('Add');
  
    function handleClick() {
      setText(`Add`);
    }
    

    return(
      <div className='body' style={{marginRight:"30px",marginBottom:"30px"}}>
<div className="card">
  
  <div className="content">
    <div className="back"> 
      <div className="back-content">
      <img src={props.img} ></img>
      </div>
    </div>
    <div className="front">
      
      <div className="img">
        <div className="circle">
        </div>
        <div className="circle" id="right">
        </div>
        <div className="circle" id="bottom">
        </div>
      </div>

      <div className="front-content">
        <img src={props.img} alt='pizza'style={{position:'relative'}}></img>
        <small className="badge" >{props.title}</small>
        <div className="description">
          <div className="title">
            <p className="title">
              <strong><h5>Nutritional Values</h5>
                <p className='nut'></p>Fat- 10.4g<br></br>
Carbs- 35.6g<br></br>
Protein- 12.2g<br></br>
Calories- 285
</strong>
            </p>
          </div>
          <p className="card-head">
            
          </p>
          <p className="card-footer">
            30 Mins &nbsp; | &nbsp; 1 Serving
          </p>
          <div className='butt'>
            <Button variant='outline-success' onClick={()=>{changeNum();handleClick();addItem(props.item)}}>+({num}){Text}</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
}