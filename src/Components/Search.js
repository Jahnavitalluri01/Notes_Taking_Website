import React from "react";
import { Container,InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {BsSearch} from 'react-icons/bs'
import { Link } from "react-router-dom";


const Search=({handlesearch})=>{
    return(
        <>
        <Container>
        <InputGroup>
        <InputGroup.Text id="basic-addon1"><BsSearch /></InputGroup.Text>
        <Form.Control
          placeholder="Search Here" onChange={(e)=>handlesearch(e.target.value)}   />
      </InputGroup>
        </Container>
        {/* <Link to="/list">Noteslist</Link> */}
        
        </>
    )
}
export default Search
{/* <Link to='/add'><Button variant="primary">Add Note</Button></Link> */}