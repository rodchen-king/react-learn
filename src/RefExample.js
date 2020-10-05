import React from "react";
import './index.css';

//子组件（通过forwardRef方法创建）
const Child=React.forwardRef((props,ref)=>(
  <button ref={ref}>click me</button>
));

//父组件
class RefExample extends React.Component{
  constructor(props){
    super(props);
    this.myRef=React.createRef();
  }
  componentDidMount(){
    console.log(this.myRef.current);
  }
  render(){
    return <Child ref={this.myRef}/>
  }
}

export default RefExample;
