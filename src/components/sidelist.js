

function item(props){
    return (
        <div className="card column is-4" style={{border:"2px solid #73AD21"}} onClick={()=>props.click(props.id,props.title,props.timg,props.img)}>
        
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={props.timg} alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">John Smith</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>
      
          <div className="content">
            {props.title}
            <br />
           
          </div>
        </div>
      </div>
    )
}

export default item