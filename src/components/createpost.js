import React, { useState } from 'react';
import withContext from "../context/withContext"

function Createpost(props){
    var [state, setState] = useState({url:"",title:""});
    
    function changeUrl(event){
        setState({url:event.target.value,title:state.title});
    }
    function changeTitle(event){
        setState({title:event.target.value,url:state.url});
    }
    function pushPost(e){
        e.preventDefault();
        console.log("hello");
        
        props.context.addPost(state.title,state.url);
        setState({url:"",
        title:""});
    }
    return (
    <div className="column is-4 is-offset-one-quarter">
        <form style={{marginTop:"50px"}}>
        <div className="field">
            <label className="label">Title</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input" value={state.title} type="text" placeholder="Title" onChange={(event)=>changeTitle(event)} required/>
                <span className="icon is-small is-left">
                <i className="fas fa-envelope fa-xs"></i>
                </span>
                <span className="icon is-small is-right">
                <i className="fas fa-check fa-xs"></i>
                </span>
            </div>
        </div>

        <div className="field">
            <label className="label">Image Url</label>
            <div className="control has-icons-left has-icons-right">
                <input className="input" value={state.url} type="text" placeholder="Url" onChange={(event)=>changeUrl(event)} required/>
                <span className="icon is-left">
                <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-right">
                <i className="fas fa-check"></i>
                </span>
            </div>
        </div>
        
        <div className="control">
            <button type="submit" className="button is-primary" onClick={(e)=>pushPost(e)}>Submit</button>
        </div>
        </form>
    </div>
    )
    
}

export default withContext(Createpost)