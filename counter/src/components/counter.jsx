import React, { Component } from "react";
class Counter extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3", "sss"],
  };
  renderTags() {
    return <>
    <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    <button onClick={() => {
      const shiftTag = Array.from(this.state.tags);
      shiftTag.shift();
      this.setState(s => ({...this.state, tags: shiftTag }))
    }}>shift!</button>
        <button onClick={() => {
      const reverseTag = Array.from(this.state.tags);
      reverseTag.reverse();
      this.setState(s => ({...this.state, tags: reverseTag }))
    }}>reverse!</button>
    </>

  }

  render() {
    return <div>{this.renderTags()}</div>;
  }
  // getBadgeClasses() {
  //   let classes = "badge m-2 badge-";
  //   classes += this.state.count === 0 ? "warning" : "primary";
  //   return classes;
  // }
  // formatCount() {
  //   const { count } = this.state;
   
  //   return count === 0 ? <h1>Zero</h1> : count;
  // }
}

export default Counter;
// export default function Counter() {
//   const [counts, setCounts] = useState(0);

//   return (
//     <>
//       <p>{counts}</p>
//       <button onClick={() => setCounts((c) => c + 10)}>Click me!</button>
//     </>
//   );
// }
