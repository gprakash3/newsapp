
import React from 'react'

const Newsitem =(props) =>  {
  
    //used when we do not want to change 
    //here we do not want to make tile and description state
    //we make state when we have to change its value repeatedly whithout loading page
    //we cannot change props.   Props are read only
   let {title,description,url,imgsrc,author,date} = props;
   
    return (
      <>
       
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {/* change Date formate on screen  ========= TO DO IN FUTURE */}
            <p className='card-text'><small className='text-muted'>By {!author?"unknown":author} on {date}</small></p>
            <p className="card-text">{description}</p>
            <a href={url} target='_blank'  rel="noreferrer" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </>
    )
  
}

export default Newsitem


