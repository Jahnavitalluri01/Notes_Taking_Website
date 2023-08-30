import React, { useState } from "react";
import {Container,Row,Col, Navbar, NavbarBrand,Button} from "react-bootstrap"
import Note from "./Note.js"
import Addnote from "./Addnote.js"
import { Link } from "react-router-dom";
const Noteslist=({notes,handledel})=>{     
   
    return(
        <div>
        
        <Container className="list">
            <Row className="mx-auto ">
             {
             notes.map((i)=>(
               <Col className="mt-4">
              
                <Note id={i.id} text={i.text} time={i.time} handledel={handledel} />
               </Col>
                  ))} 
            </Row> 
              
         </Container> 
       
       <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1rem"}}>
         <Link to="/add"><Button variant="primary" >Addnote</Button></Link> 
         </div>
         {/* <Addnote handleaddnote={handleaddnotee} /> */}
     

        </div>
    )
}
export default Noteslist
