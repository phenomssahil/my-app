// import { Button } from 'react-bootstrap';
// import { useState } from 'react';
// import './card.css';
// import { shopContext } from './shop';
// import Modal from './modal';
// import Img1 from './image/specials.png'
// import Img2 from './image/pasta.png'
// import Img3 from './image/Garlic.png'
// import Img4 from './image/veg momos.png'
// import Img5 from './image/BURGER.png'
// import Img6 from './image/CAKE.png"
// import Img7 from './image/WAFFLE.png'
// import Img8 from './image/PUDDING.png'
// import Img9 from './image/BROWNIE.png'
// import Img10 from './image/CUP CAKES.png'
// export default function Card({titile='--Nutritional Values--'})
// {
  
//   const[num,setNum]=useState(0);
//   const changeNum=()=>{
  
//     setNum(num+1);
//   }
//   const[num1,setNum1]=useState(0);
//   const changeNum1=()=>{
  
//     setNum1(num1+1);
//   }
//   const [buttonText, setButtonText] = useState('+');
  
//     function handleClick() {
//       setButtonText(``);
//     }
//     const [Text, setText] = useState('Add');
  
//     function handleClick() {
//       setText(`Add`);
//     }

//     return(
//       <div className='body'>
//         <div className='desert'> Best Sellers</div>
//       <div className='cards-container'>
// <div class="card">
//   <div class="content">
//     <div class="back"> 
//       <div class="back-content">
//       <img src={Img1} alt='pizza'></img>
//       </div>
//     </div>
//     <div class="front">
      
//       <div class="img">
//         <div class="circle">
//         </div>
//         <div class="circle" id="right">
//         </div>
//         <div class="circle" id="bottom">
//         </div>
//       </div>

//       <div class="front-content">
//         <img src={Img1} alt='pizza'style={{position:'relative'}}></img>
//         <small class="badge">Pizza</small>
//         <div class="description">
//           <div class="title">
//             <p class="title">
//               <strong><p className='nut'>{titile}</p>Fat- 10.4g<br></br>
// Carbs- 35.6g<br></br>
// Protein- 12.2g<br></br>
// Calories- 285
// </strong>
//             </p>
//           </div>
//           <p class="card-head">
            
//           </p>
//           <p class="card-footer">
//             30 Mins &nbsp; | &nbsp; 1 Serving
//           </p>
//           <div className='butt'>
//             <Button variant='outline-success' onClick={()=>{changeNum();handleClick();}}>+({num}){Text}</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div class="card">
//   <div class="content">
//     <div class="back">
      
//       <div class="back-content">
//       <img src={Img2} alt='pasta'></img>
//       </div>
//     </div>
//     <div class="front">
      
//       <div class="img">
//         <div class="circle">
//         </div>
//         <div class="circle" id="right">
//         </div>
//         <div class="circle" id="bottom">
//         </div>
//       </div>

//       <div class="front-content">
//       <img src={Img2} alt='pasta'></img>       
//        <small class="badge">Pasta</small>
//         <div class="description">
//           <div class="title">
//             <p class="title">
//               <strong><p>{titile}</p>Cholesterol-165mg<br></br>
// Calories-655<br></br>
// Carbs-124.7g<br></br>
// Protein-25.75g

// </strong>
//             </p>
//           </div>
//           <p class="card-head">
            
//           </p>
//           <p class="card-footer">
//             30 Mins &nbsp; | &nbsp; 1 Serving
//           </p>
//           <div className='butt'>
//           <Button variant='outline-success' onClick={()=>{changeNum1();handleClick()}}>+({num1}){Text}</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div class="card">
//   <div class="content">
//     <div class="back">
      
//       <div class="back-content">
//      <img src={Img3} alt='bread'></img>

//       </div>
//     </div>
//     <div class="front">
//       <div class="img">
//         <div class="circle">
//         </div>
//         <div class="circle" id="right">
//         </div>
//         <div class="circle" id="bottom">
//         </div>
//       </div>

//       <div class="front-content">
//       <img src={Img3} alt='bread'></img>
//         <small class="badge">Garlic Bread</small>
//         <div class="description">
//           <div class="title">
//             <p class="title">
//               <strong><p>{titile}</p>Fat- 10.4g<br></br>
// Carbs- 35.6g<br></br>
// Protein- 12.2g<br></br>
// Calories- 285
// </strong>
//             </p>
//           </div>
//           <p class="card-head">
            
//           </p>
//           <p class="card-footer">
//             30 Mins &nbsp; | &nbsp; 1 Serving
//             <div className='butt'>
//             <button onClick={changeNum}>+{num}Add</button>
//           </div>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div class="card">
//   <div class="content">
//     <div class="back">
      
//       <div class="back-content">
//       <img src={Img4} alt='momos'></img>
//       </div>
//     </div>
//     <div class="front">
      
//       <div class="img">
//         <div class="circle">
//         </div>
//         <div class="circle" id="right">
//         </div>
//         <div class="circle" id="bottom">
//         </div>
//       </div>

//       <div class="front-content">
//       <img src={Img4} alt='momos'></img>
//         <small class="badge">Momos</small>
//         <div class="description">
//           <div class="title">
//             <p class="title">
//               <strong><p>{titile}</p>Fat- 10.4g<br></br>
// Carbs- 35.6g<br></br>
// Protein- 12.2g<br></br>
// Calories- 285
// </strong>
//             </p>
//           </div>
//           <p class="card-head">
            
//           </p>
//           <p class="card-footer">
//             30 Mins &nbsp; | &nbsp; 1 Serving
//            <div className='butt'> <button><span class="material-symbols-outlined">
// shopping_cart
// </span></button></div>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div class="card">
//   <div class="content">
//     <div class="back">
      
//       <div class="back-content">
//       <img src={Img5} alt='burger'></img>
//       </div>
//     </div>
//     <div class="front">
      
//       <div class="img">
//         <div class="circle">
//         </div>
//         <div class="circle" id="right">
//         </div>
//         <div class="circle" id="bottom">
//         </div>
//       </div>

//       <div class="front-content">
//       <img src={Img5} alt='burger'></img>
//         <small class="badge"></small>
//         <div class="description">
//           <div class="title">
//             <p class="title">
//               <strong><p>{titile}</p>Fat- 10.4g<br></br>
// Carbs- 35.6g<br></br>
// Protein- 12.2g<br></br>
// Calories- 285
// </strong>
//             </p>
//           </div>
//           <p class="card-head">
            
//           </p>
//           <p class="card-footer">
//             30 Mins &nbsp; | &nbsp; 1 Serving
//            <div className='butt'> <button><span class="material-symbols-outlined">
// shopping_cart
// </span></button></div>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
// <div className='desert'> Dessert</div>
// <div className='cards-container'> 
// <div class="card">
//   <div class="content">
//     <div class="back">
      
//       <div class="back-content">
//       <img src={Img6} alt='cake'></img>
//       </div>
//     </div>
//     <div class="front">
      
//       <div class="img">
//         <div class="circle">
//         </div>
//         <div class="circle" id="right">
//         </div>
//         <div class="circle" id="bottom">
//         </div>
//       </div>

//       <div class="front-content">
//       <img src={Img6} alt='cake'></img>
//         <small class="badge">Cheese Cake</small>
//         <div class="description">
//           <div class="title">
//             <p class="title">
//               <strong><p>{titile}</p>Fat- 10.4g<br></br>
// Carbs- 35.6g<br></br>
// Protein- 12.2g<br></br>
// Calories- 285
// </strong>
//             </p>
//           </div>
//           <p class="card-head">
            
//           </p>
//           <p class="card-footer">
//             30 Mins &nbsp; | &nbsp; 1 Serving
//            <div className='butt'> <button><span class="material-symbols-outlined">
// shopping_cart
// </span></button></div>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div class="card">
//   <div class="content">
//     <div class="back">
      
//       <div class="back-content">
//       <img src={Img7} alt='waffle'></img>
//       </div>
//     </div>
//     <div class="front">
      
//       <div class="img">
//         <div class="circle">
//         </div>
//         <div class="circle" id="right">
//         </div>
//         <div class="circle" id="bottom">
//         </div>
//       </div>

//       <div class="front-content">
//       <img src={Img7} alt='waffle'></img>
//         <small class="badge">Waffle</small>
//         <div class="description">
//           <div class="title">
//             <p class="title">
//               <strong><p>{titile}</p>Fat- 10.4g<br></br>
// Carbs- 35.6g<br></br>
// Protein- 12.2g<br></br>
// Calories- 285
// </strong>
//             </p>
//           </div>
//           <p class="card-head">
            
//           </p>
//           <p class="card-footer">
//             30 Mins &nbsp; | &nbsp; 1 Serving
//            <div className='butt'> <button><span class="material-symbols-outlined">
// shopping_cart
// </span></button></div>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div class="card">
//   <div class="content">
//     <div class="back">
      
//       <div class="back-content">
//       <img src={Img8} alt='pudding'></img>
//       </div>
//     </div>
//     <div class="front">
      
//       <div class="img">
//         <div class="circle">
//         </div>
//         <div class="circle" id="right">
//         </div>
//         <div class="circle" id="bottom">
//         </div>
//       </div>

//       <div class="front-content">
//       <img src={Img8} alt='pudding'></img>
//         <small class="badge">Pudding</small>
//         <div class="description">
//           <div class="title">
//             <p class="title">
//               <strong><p>{titile}</p>Fat- 10.4g<br></br>
// Carbs- 35.6g<br></br>
// Protein- 12.2g<br></br>
// Calories- 285
// </strong>
//             </p>
//           </div>
//           <p class="card-head">
            
//           </p>
//           <p class="card-footer">
//             30 Mins &nbsp; | &nbsp; 1 Serving
//            <div className='butt'> <button><span class="material-symbols-outlined">
// shopping_cart
// </span></button></div>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div class="card">
//   <div class="content">
//     <div class="back">
      
//       <div class="back-content">
//       <img src={Img9} alt='brownie'></img>
//       </div>
//     </div>
//     <div class="front">
      
//       <div class="img">
//         <div class="circle">
//         </div>
//         <div class="circle" id="right">
//         </div>
//         <div class="circle" id="bottom">
//         </div>
//       </div>

//       <div class="front-content">
//       <img src={Img9} alt='brownie'></img>
//         <small class="badge">Dalgona Coffee</small>
//         <div class="description">
//           <div class="title">
//             <p class="title">
//               <strong><p>{titile}</p>Fat- 10.4g<br></br>
// Carbs- 35.6g<br></br>
// Protein- 12.2g<br></br>
// Calories- 285
// </strong>
//             </p>
//           </div>
//           <p class="card-head">
            
//           </p>
//           <p class="card-footer">
//             30 Mins &nbsp; | &nbsp; 1 Serving
//            <div className='butt'> <Button variant='outline-success'><span class="material-symbols-outlined">
// shopping_cart
// </span></Button></div>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div class="card">
//   <div class="content">
//     <div class="back">
      
//       <div class="back-content">
//       <img src={Img10} alt='cupCAke'></img>
//       </div>
//     </div>
//     <div class="front">
      
//       <div class="img">
//         <div class="circle">
//         </div>
//         <div class="circle" id="right">
//         </div>
//         <div class="circle" id="bottom">
//         </div>
//       </div>

//       <div class="front-content">
//       <img src={Img10} alt='cupCAke'></img>
//         <small class="badge">Sundae</small>
//         <div class="description">
//           <div class="title">
//             <p class="title">
//               <strong><p>{titile}</p>Fat- 10.4g<br></br>
// Carbs- 35.6g<br></br>
// Protein- 12.2g<br></br>
// Calories- 285
// </strong>
//             </p>
//           </div>
//           <p class="card-head">
            
//           </p>
//           <p class="card-footer">
//             30 Mins &nbsp; | &nbsp; 1 Serving
//            <div className='butt'> <button><span class="material-symbols-outlined">
// shopping_cart
// </span></button></div>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// </div>
// </div>
//     );
// }
