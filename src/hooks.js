// import React, { useState, useEffect } from "react";
// // import "./App.css";

// // import logo from './logo.svg';

// export default class hooks extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//             width: window.innerWidth,
//         };
//     }
    

//     render() {
//         return (
//             <section>
//                 <div>
//                     {/* <img src={logo} className="App-logo" alt="logo" /> */}

//                     <p className="App-link">  you click {this.state.count} times width{this.state.width}!!</p>
//                     {/* <button
//                         ClassName="button"

//                         onClick={() => {
//                             const { count } = this.state;

//                             this.setState({
//                                 count: count + 1
//                             });
//                         }
//                         }
//                     >
//                         {this.state.count}
//                     </button> */}
//                     <button ClassName='button'
//                         onClick={() => {
//                             const { count } = this.state;
//                             this.setState({
//                                 count: count + 1
//                             });
//                         }
//                         }
//                     >
//                         {this.state.count}
//                     </button>
//                 </div>
//             </section >



//         );
//     }
// }


// // export default function hooks(props) { /// for subcribe exampke
// //     const [count, setCount] = useState(0);
// //     const [width, setWidth] = useState(window.innerWidth);
   
// //     return (
// //         <section>
// //             <div>
         
// //                 <p className="App-link"> you clicked {count} times width{width}!!</p>
// //                 <button ClassName="button"
// //                     onClick={() => setCount(count + 1)}>{count}


// //                 </button>
// //                 {/* <button onClick={() => setCount(count + 1)}>
// //                 </button> */}
// //             </div>

// //         </section >
// //     )
// // }









// import React, { useState, useEffect } from "react";
// // import "./App.css";

// // import logo from './logo.svg';

// export default class Democomponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//             width: window.innerWidth,
//         };
//     }
//     handleResize = () => {
//         this.setState({/// it set width
//             width: window.innerWidth
//         })
//     }
//     componentDidMount() {
//         window.addEventListener('resize', this.handleResize)


//     }
//     componentDidUpdate() {
//         window.removeEventListener('resize', this.handleResize)
//     }


//     render() {
//         return (
//             <section>
//                 <div>
//                     {/* <img src={logo} className="App-logo" alt="logo" /> */}

//                     <p className="App-link">  you click {this.state.count} times width{this.state.width}!!</p>
//                     {/* <button
//                         ClassName="button"

//                         onClick={() => {
//                             const { count } = this.state;

//                             this.setState({
//                                 count: count + 1
//                             });
//                         }
//                         }
//                     >
//                         {this.state.count}
//                     </button> */}
//                     <button ClassName='button'
//                         onClick={() => {
//                             const { count } = this.state;
//                             this.setState({
//                                 count: count + 1
//                             });
//                         }
//                         }
//                     >
//                         {this.state.count}
//                     </button>
//                 </div>
//             </section >



//         );
//     }
// }


// // export default function Democomponent(props) { /// for subcribe exampke
// //     const [count, setCount] = useState(0);
// //     const [width, setWidth] = useState(window.innerWidth);
// //     useEffect(() => {
// //         document.title = count;
// //     })

// //     useEffect(() => { //// for window width subscribe 
// //         const handleResize = () => {
// //             setWidth(window.innerWidth);

// //         }

// //         window.addEventListener('resize', handleResize)
// //         return () => {
// //             window.removeEventListener('resize', handleResize)
// //         }

// //     })
// //     return (
// //         <section>
// //             <div>
// //                 <img src={logo} className="App-logo" alt="logo" />
// //                 <p className="App-link"> you clicked {count} times width{width}!!</p>
// //                 <button ClassName="button"
// //                     onClick={() => setCount(count + 1)}>{count}


// //                 </button>
// //                 {/* <button onClick={() => setCount(count + 1)}>
// //                 </button> */}
// //             </div>

// //         </section >
// //     )
// // }



// // export default function Democomponent(props) { /// for loop example
// //     const [count, setCount] = useState(0);

// //     if(condition){
// //         const [width, setWidth] = useState(150);
// //     }

// //     // useEffect(() => {
// //     //     document.title = count;
// //     // })

// //     // useEffect(() => { //// for window width subscribe 
// //     //     const handleResize = () => {
// //     //         setWidth(window.innerWidth);

// //     //     }

// //     //     window.addEventListener('resize', handleResize)
// //     //     return () => {
// //     //         window.removeEventListener('resize', handleResize)
// //     //     }

// //     // })
// //     return (
// //         <section>
// //             <div>
// //                 <img src={logo} className="App-logo" alt="logo" />
// //                 <p className="App-link"> you clicked {count} times width{width}!!</p>
// //                 <button ClassName="button"
// //                     onClick={() => setCount(count + 1)}>{count}


// //                 </button>
// //                 {/* <button onClick={() => setCount(count + 1)}>
// //                 </button> */}
// //             </div>

// //         </section >
// //     )
// // }





	
	
	




	
	
	
