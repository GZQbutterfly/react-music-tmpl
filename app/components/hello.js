import './hello.less';
class Hello extends React.Component{
  constructor(props){
   super(props);
  }
  render(){
       return  (<div className="hello-component">Hello, Webpack + React!</div>);
  }
};
// ==>
export default Hello;
