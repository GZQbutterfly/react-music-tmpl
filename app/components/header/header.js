import './header.less';
class Header extends React.Component{
  constructor(props){
   super(props);
  }
  render(){
       return  (
        <div className="components-header row">
          <img alt="logo.png" src="assets/images/logo.png" width="40px" className="-col-auto"/>
          <h1 className="caption">React Music Player</h1>
        </div>
      );
  }
};
// ==>
export default Header;
