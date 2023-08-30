import React, { useState }  from "react";
import { Button, Container, Form,Row } from "react-bootstrap"
const Addnote=({handleaddnote})=>{
    const [newnote,setnewnote]=useState('');
    const limit=70
    const handlechange=(event)=>{
        setnewnote(event.target.value);
        console.log("The added one="+newnote)
    }
    const handlesave=()=>{
        if(newnote.length<limit && newnote.length>0){
            console.log(newnote)
            handleaddnote(newnote)
            setnewnote('')
        }
        
    }
    return(
        <Container>
            <div>
            <Row style={{width:"19rem",alignContent:"center",marginLeft:"auto",marginRight:"auto",backgroundColor:"#da7b93",marginTop:"2rem",height:"18rem",borderRadius:"1rem"}}>
        <Form>
      <Form.Group>
        <Form.Label>Enter Your Note</Form.Label>
        <Form.Control as="textarea" value={newnote} rows={5} onChange={handlechange}/>
      </Form.Group>
      <i style={{color:'white'}}>{limit-newnote.length} Remaining</i>
      <div className="text-center mt-3">
      <Button onClick={handlesave} className="mx-auto my-auto" style={{width:"100%",backgroundColor:"#17252a"}}>Save</Button>
      </div>
    </Form>
    </Row>
    </div>
    </Container>
    )
}
export default Addnote;
