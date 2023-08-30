import React from "react";
import {Container, Navbar, NavbarBrand} from "react-bootstrap"

const Header=()=>{
    return(
    <Navbar>
    <Container className="mb-3" style={{backgroundColor:"#17252a"}}>
      <NavbarBrand style={{color:"#feffff",marginLeft:"2rem"}}>Notes Taking App</NavbarBrand>
    </Container>
    </Navbar>
    )
}
export default Header