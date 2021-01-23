function a(){
    <aside  className="menu">
  <p className="menu-label">
    posts
  </p>
  <ul style={{marginTop:"39px",overflowY:"scroll",height:"100vh",scrollbarWidth:"none"}} className="menu-list">
    {props.context.posts.map(i=>{

        return <SideItem key={i.id} id={i.id} title={i.title} timg={i.thumbnailUrl} img={i.url} click={clicked}/>
    })}
  </ul>
  {props.context.posts.length !=0?<PostItem key={state.obj.id} title={state.obj.title} timg={state.obj.thumbnailUrl} img={state.obj.url}/>:null}
  </aside>
}