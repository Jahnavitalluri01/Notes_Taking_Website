import React, { useState } from "react";
import { Card } from "react-bootstrap";
import {AiFillDelete} from "react-icons/ai"
import "../Styles/Notes.css"
const Note=({id,text,time,handledel})=>{
    // const [idd,setid]=useState('')
    // const handledelete=(id)=>{
    //     setid(id)
    //     handledel(idd)
    

    // }
    return(
        <Card style={{width:"17rem",height:"9rem",backgroundColor:"#def2f1",margin:"auto"}}>
           <Card.Body className="bodyy" key={id}>
            <Card.Title style={{height:"5rem"}}>
                {text}
            </Card.Title>
            <Card.Subtitle className="subtitle" >{time}<AiFillDelete className="del" onClick={()=>handledel(id)}></AiFillDelete> </Card.Subtitle>
           </Card.Body>
        {/* </Card>
        <Card style={{width:"17rem",padding:"0",height:"8rem",backgroundColor:"#def2f1"}}>
        <Card.Body>
         <Card.Title>
             Some Text
         </Card.Title>
         <Card.Subtitle className="subtitle">Time<AiFillDelete className="del"></AiFillDelete> </Card.Subtitle>
         
        </Card.Body>
     </Card>
     <Card style={{width:"17rem",padding:"0",height:"8rem",backgroundColor:"#def2f1"}}>
     <Card.Body>
      <Card.Title>
          Some Text
      </Card.Title>
      <Card.Subtitle className="subtitle">Time<AiFillDelete className="del"></AiFillDelete> </Card.Subtitle>
      
     </Card.Body> */}
  </Card>
  
    )
}
export default Note
// onClick={()=>{deletehadler(id)}}
