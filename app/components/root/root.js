import './root.less';
import {BrowserRouter as Router, Route, Link, hashHistory} from 'react-router-dom';
import * as rapp from 'react-router-dom';
import Header from '../header/header.js';
import Player from '../player/player.js';
// ==> Root
class Root extends React.Component{
  constructor(props){
     super(props);
  }
  render(){
      return  (
        <div className="components-root">
           <Header/>
           <Player/>
        </div>
      );
  }
};
// ==> RouterContainer
class RouterContainer extends React.Component{
    constructor(props){
       super(props);
       console.log(this.props, this.context);
    }
    updateHandle(){
      console.log('每次router变化之后都会触发', this , arguments);
    }
    render(){
        return  (
          <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
             <div>
               <Route  path="/" component={Root}/>
               <Route path="#/list" render={() => (<h1>List</h1>)} />
               <Route path="#/list1" render={() => (<h1>List111</h1>)} />
             </div>
          </Router>
        );
    }
}

window.React = React;
window.rapp = rapp;
// <Link to="/">home</Link>
// <Route path="/" render={() => (<h1>Home</h1>)} />
// <Route  path="/" component={Root}/>
// ==>  returns
export default RouterContainer;
