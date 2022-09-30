import React, { Component, Fragment } from "react";
class Counter extends Component {
  state = {  
    count: 0
  };
  handleIncrement = (product) => {
    console.log(product);
    this.setState({count:this.state.count +1});

  };
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1})


  };
  render() { 
    return (
      <>
      <h1>hiiii</h1>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button
      onClick={this.doHandleIncrement()}
      className="btn btn-secondary btn-sm"
      >
        Increment

      </button>
      
      
      
      
      
      </>
    );
  };

 
  formatCount() {
    const { count } = this.state;
   
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;






























// class Counter extends Component {
//   state = {
//     tags: ["tag1", "tag2", "tag3", "tag4"],
//   };
//   // renderTags() {
//   //   return <>
//   //   <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>

//   //   {/* <button onClick={() => {
//   //     const shiftTag = Array.from(this.state.tags);
//   //     shiftTag.shift();
//   //     this.setState(s => ({...this.state, tags: shiftTag }))
//   //   }}>shift!</button>
//   //       <button onClick={() => {
//   //     const reverseTag = Array.from(this.state.tags);
//   //     reverseTag.reverse();
//   //     this.setState(s => ({...this.state, tags: reverseTag }))
//   //   }}>reverse!</button> */}
//   //   </>

//   // }

//   render() {
//     return {
//       <Fragment>
//          <span {className={this.getBadgeClasses()}}>{this.formatCount()}</span>
//       </Fragment>





//     };
//   }
//   // getBadgeClasses() {
//   //   let classes = "badge m-2 badge-";
//   //   classes += this.state.count === 0 ? "warning" : "primary";
//   //   return classes;
//   // }
//   formatCount() {
//     const { count } = this.state;
   
//     return count === 0 ? <h1>Zero</h1> : count;
//   }
// }

// export default Counter;
// // export default function Counter() {
// //   const [counts, setCounts] = useState(0);

// //   return (
// //     <>
// //       <p>{counts}</p>
// //       <button onClick={() => setCounts((c) => c + 10)}>Click me!</button>
// //     </>
// //   );
// // }
