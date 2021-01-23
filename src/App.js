import React,{Component} from 'react';
import Posts from './components/post/posts';
import Createpost from './components/createpost';
import Context from './context/Context';
import axios from 'axios';
import Navbar from "./components/navbar/navbar"
import Chat from "./components/chat/chat"
import Search from './components/search/search'

class App extends Component{

  state={
    posts:[],
    showPost:true
  }
  click=(type)=>{
    if(type === "create"){
      this.setState({showPost:false})
    }else{
      this.setState({showPost:true})
    }
  }
  addPost=(title,url)=>{
    var obj={
      id:Math.floor(Math.random()*10+11),
      thumbnailUrl:url,
      url:url,
      title:title
    }
    var a=[...this.state.posts]
    a.unshift(obj)
    this.setState({posts:a});
  }
  componentDidMount(){
    document.body.style.overflow = "hidden"

    const script = document.createElement("script");

    script.src = "./script.js";
    script.async = true;

    document.body.appendChild(script);
    
    axios.get('https://jsonplaceholder.typicode.com/photos').then(response=>{
      //console.log(response.data);
      
      this.setState({posts:response.data.splice(0,11)})
    });
  }
  render(){
    return(
      <Context.Provider value={{...this.state,addPost:this.addPost}}>
         
         
         <Navbar click={this.click}/>
         <Posts/>
         <Chat />
         <Search />
      </Context.Provider>
    )
  }
}

export default App;
