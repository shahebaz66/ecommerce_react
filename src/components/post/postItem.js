import {React,Component} from 'react';
import ReactDOM from 'react-dom';
import withContext from "../../context/withContext";
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import SendIcon from '@material-ui/icons/Send';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'


class postItem extends Component{
  
    click=()=>{
      ReactDOM.findDOMNode(this.refs.inputfile).click();
    }
    addEmoji=()=>{
      console.log("hello")
    }
  render(){  return (
      <div className="postcard">
        <div className="postcardtop">
          <div className="postcardtopimg">
            <img src={this.props.data.thumbnailUrl} />
          </div>
          <div>
          <h4>shahebaz Ahamed</h4>
            <h6>may 10 th 2020</h6>
          </div>
        </div>
        <div className="postcardmiddle"><p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p></div>
        <div className="postcardimg"><img src={this.props.data.url} /></div>
        <div className="postcardbottom">
          <AddPhotoAlternateIcon fontSize="large" onClick={()=>this.click()}/>
          {/* <InsertEmoticonIcon fontSize="large" onSelect={()=>this.addEmoji()} /> */}
          <input style={{display:"none"}} type="file" ref="inputfile"/>
          <input style={{width:"70%"}}type="text" placeholder="Type text..." />
          <ThumbUpIcon />
          <ThumbDownAltIcon />
          <SendIcon fontSize="large"/>
        </div>
      </div>
    )}
}

export default withContext(postItem)