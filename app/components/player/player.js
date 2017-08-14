import {Link} from 'react-router-dom';
import Progress from '../progress/progress.js';
import PubSub from 'pubsub-js';
import './player.less';
// ==>
let playerDom = null;
let duration = null;

class Player extends React.Component{
  constructor(props){
     super(props);
     this.state= {progress: 0, volume: 0, isPlay: true, leftTime: ''};
     playerDom = $('#player');
  }
  play() {
    let playFlag = this.state.isPlay;
    playerDom.jPlayer(playFlag ? "pause" : "play");
		this.setState({isPlay: !playFlag});
	}
  next(){

  }
  prev(){

  }
  componentDidMount(){
    playerDom.jPlayer({
      ready(){
        playerDom.jPlayer('setMedia',{
          mp3: 'assets/music/Taylor Swift - Teardrops On My Guitar.mp3'
        }).jPlayer('play');
      },
      supplied:'mp3',
      wmode:'window'
    });
    playerDom.bind($.jPlayer.event.timeupdate,(e)=>{
      duration = e.jPlayer.status.duration;
      this.setState({
         progress: e.jPlayer.status.currentPercentAbsolute,
         volume: e.jPlayer.options.volume * 100,
         //leftTime: this.formatTime(duration * (1 - e.jPlayer.status.currentPercentAbsolute / 100))
      });
    });
  }
  componentWillUnMount(){
    playerDom.unbind($.jPlayer.event.timeupdate);
  }
  changeProgressHandler(progress){
    playerDom.jPlayer("play", duration * progress);
		this.setState({
			isPlay: true
		});
  }
  render(){
       return  (
         <div className="components-player">
                <h1 className="caption"><Link to="#/list">我的私人音乐坊 &gt;</Link></h1>
                <Progress
                   progress={this.state.progress}
                   onProgressChange={this.changeProgressHandler.bind(this)}>
                </Progress>
         </div>
      );
  }
};
// ==>
export default Player;
