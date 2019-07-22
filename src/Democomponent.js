import React, { useState, useEffect } from "react";
// import "./App.css";

// import logo from './logo.svg';

// export default class Democomponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             count:0,
//             width:150
//         }
//      }
//      componentDidMount(){
//          Document.title=this.state;


//      }
//      componentWillUpdate(){
//        const{count}=this.state;
//         Document.title=this.state
//         console.log("count",count)


//      }
    

//     render() {
//         return (
//             <section>
//                 <div>
                 
//                     <p className="App-link">  you click !!{this.state.count} times with width {this.state.width} </p>
//                     <button className='button'
//                     onClick ={()=>{
//                         const {count}=this.state
//                         this.setState({
//                             count: count+1
//                         })
//                     }}>
//                         {this.state.count}
//                     </button>
             
//                 </div>
//             </section >



//         );
//     }
// }


export default function Democomponent (props){
    const [count,setcount]= useState(0);
    const [width,setwidth]= useState(window.innerWidth);

    useEffect(()=>{
        document.title = count;
     })

     useEffect(()=> {
         const handleResize= ()=> {
           setwidth(window.innerWidth)

         }
         window.addEventListener('resize',handleResize)
         return()=>{
             window.removeEventListener('resize',handleResize)
         }



     })


 

   
   return (
       <section>
           <div>
               
               <p className="App-link"> you clicked {count } times and width {width}</p>
               <button className='button'
               onClick={()=>setcount(count+1)}>
                   {count}
               </button>

              
           </div>

       </section>
   )
   }








