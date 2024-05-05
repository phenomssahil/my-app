import React,{useState} from 'react'
import './form.css'
import { Button } from 'react-bootstrap';
import menu from './image/CMenu.png'
import order from './image/placed.png'
import { data } from './cart';
import { useCart } from 'react-use-cart'
const Modal = () => {
  
// cart
    const [startModal,setStartModal]=useState(false);
    const CloseModal=()=>setShowModal(false);
    // menu
    const [showModal,setShowModal]=useState(false);
    const closeModal=()=>setStartModal(false);
    // signUp
    const [form,setForm]=useState(false);
    const CloseForm=()=>setForm(false);
    //message
    const [message,setMessage]=useState(false);
    //show btn
    const [btn,showBtn]=useState(false);
    
    const MyModal=()=>{
      const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    }=useCart();
    const empty=()=>{
      if(isEmpty){
        return <h1 className='text-center'>Your Cart is Empty</h1> 
        
      }
     return <h5>Cart({totalUniqueItems})totalItems:({totalItems})</h5>
      
    }

        return(
          <div className='outer'>
            <div className='master-container card1'>
              <div className=''> 
             <section className='py-4 container' >
             <div className='down'>
    <div className='row justify-content-center'>
      <div style={{maxHeight:'700px',overflowY:"scroll"}}>
        <div style={{position:"sticky",top:'0'}}>{empty()}</div>
        {message && <Message/>}
        <table className='table table-light table-hover m-0'>
         
            <tbody >
            {items.map((item,index)=>{

                return(
                <tr key={index} style={{overflow:'scroll'}}>
                    <td>
                        <img src={item.img} style={{height:'6rem'}}/>
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>Quantity({item.quantity})</td>
                    <td>
                        <button className='btn btn-info ms-2'onClick={()=> updateItemQuantity(item.id,item.quantity-1)}>-</button>
                        <button className='btn btn-info ms-2'onClick={()=> updateItemQuantity(item.id,item.quantity+1)}>+</button>
                        <button className='btn btn-danger ms-2'onClick={()=>removeItem(item.id,item.quantity)}><span class="material-symbols-outlined">delete</span></button>
                    </td>
                </tr>
                )
            })}
            </tbody>
        </table>
        </div>
      </div>
      <div className='down'>

        <h2 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Total Price: $ {cartTotal}</h2> 
        <Button variant="outline-success" className='chck' onClick={()=>{setForm(true);}}onDoubleClick={()=>CloseForm()}>Checkout</Button>
      {form && <Form/>}
         <Button variant='outline-success'onClick={()=>{emptyCart();}}>Empty Cart</Button>
        <Button variant="outline-success"className='close' onClick={()=>CloseModal()}>Cancel</Button>
        {btn && <Btn/>}
      </div>
    </div>
    </section>
    </div>
            </div>
            </div>
        )
    }
    const Menu=()=>{
        return(
            <>
            <div class="card2 master-container card2" onClick={closeModal}>
            <img src={menu}></img>
          </div>
          </>
        )
    }
    const Message=()=>{
      return(
        <div>
        <h1>Your Order Is Placed</h1>
        </div>
      )
    }
    const Btn=()=>{
      return(
        <Button class="btn btn-primary" onClick={()=>{setMessage(true);CloseModal()}}>Place Order</Button>
      )
    }
  const Form=()=>{
    return(
      <>
      <form class="form">
    
    <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>first name</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input"/>
            <span>last name</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" class="input"/>
        <span>email</span>
    </label> 
        
    <label>
        <input required="" type="tel" placeholder="" class="input"/>
        <span>contact number</span>
    </label>
    <label>
        <textarea required="" rows="3" placeholder="" class="input01"></textarea>
        <span>Address</span>
    </label>
  
    <button class="fancy" onClick={()=>{CloseForm(); showBtn(true);}}>
      <span class="top-key"></span>
      <span class="text">submit</span>
      <span class="bottom-key-1"></span>
      <span class="bottom-key-2"></span>
    </button>
</form>
      </>
    )
  }
  return (
    <div >
      {message && <Message/>}
      <Button className="mx-3" variant="outline-success" onClick={()=>setStartModal(true)} >Menu</Button>
      {startModal && <Menu/>}
      <Button variant="outline-success" onClick={()=>{setShowModal(true)}}>Your Cart</Button>
      {showModal && <MyModal/>}
     
    </div>
  )
}
export default Modal;
