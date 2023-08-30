import { useEffect, useState } from "react";
import Noteslist from "./Components/Noteslist";
import {v4 as uuid} from "uuid";
import Search from "./Components/Search";
import Header from "./Components/Header";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Addnote from "./Components/Addnote";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
  const [notelist,setlist]=useState([]) 

  const [searchnote,setsearch]=useState('');

  const addnote=(text)=>{
    const date=new Date();
      const newnotee={
        id:uuid(),
        text:text,
        time:date.toLocaleDateString()
      }
      const newlist=[...notelist,newnotee]
      setlist(newlist)
      window.location.href="/"
  }
  
  const deleting=(id)=>{
    const newNotes = notelist.filter((note) => note.id != id);  //filter works fine than splice
		setlist(newNotes);
  }
  const searching=(notee)=>{

         setsearch(notee)
         console.log("in searching "+searchnote)
  }
  useEffect(()=>{
    const getfromlocal=JSON.parse(localStorage.getItem('app-notess'))
    if(getfromlocal.length>0){
      setlist(getfromlocal)
    }
   },[])

   useEffect(()=>{
    localStorage.setItem('app-notess',JSON.stringify(notelist))
   },[notelist])
    
   

  return (
    <div className="App">
      
      <Router>
      <Header /> 
      <Routes>
      
     <Route path='/' element={<Search  handlesearch={searching}/>}/>
     <Route path='/add' element={<Addnote handleaddnote={addnote}/>} />
     {/* <Route path="/list" element={<Noteslist notes={notelist.filter((ele)=> ele.text.toLowerCase().includes(searchnote))}  handledel={deleting} />} />       */}
         
       {/* <Route path='/list' element={ <Noteslist notes={notelist.filter((ele)=> ele.text.toLowerCase().includes(searchnote))} handleaddnotee={addnote} handledel={deleting} />   }  />     */}
         </Routes>
         <Noteslist notes={notelist.filter((ele)=> ele.text.toLowerCase().includes(searchnote))}  handledel={deleting} />
         </Router>

         
      
    </div>
  );
}

export default App;
{/* <Search handlesearch={searching}/>
         <Noteslist notes={notelist.filter((ele)=> ele.text.toLowerCase().includes(searchnote))} handleaddnotee={addnote} handledel={deleting} />         
          */}
          // render={(props)=>{<Addnote {...props} handleaddnotee={addnote}/>}}