import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Quote.css'
import Collapse from 'react-bootstrap/Collapse';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function Quote() {
  const [open, setOpen] = useState(false);
  const[isClicked,setIsClicked]=useState(false);
  const[likedQuotes,setLikedQuotes]=useState([])
    const[quote,setQuote]=useState('');
  const [quotes,setQuotes]=useState([]);
  //to store all the quotes



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

useEffect(()=>{
    axios.get("https://dummyjson.com/quotes").then(response=>{
    let value=response.data.quotes;    
      console.log(value);
      setQuote(value[Math.floor(Math.random()*30)].quote)
       setQuotes(value);
      
       
    })


  
},[])
const handleQuote=()=>{

    setQuote(quotes[Math.floor(Math.random()*30)].quote);
  setIsClicked(false)
}
const handleClick=()=>{
  if(!isClicked && !likedQuotes.includes(quote)){
    setLikedQuotes([...likedQuotes,quote]);
   console.log(likedQuotes); 
  }
 
  setIsClicked(!isClicked);
}
const handleDelete=(data)=>{
  setLikedQuotes(likedQuotes.filter(quotes=>quotes!==data))
}

  return (
    <>
<div style={{height:'100%',width:'100%'}}>
<div className='box d-flex justify-content-center align-items-center flex-column p-3'>
<div className=' d-flex justify-content-center align-items-center icons'>
  <button onClick={handleQuote} ><i class="fa-solid fa-rotate-right"></i></button>
<button><i class="fa-regular fa-heart" onClick={handleClick} style={{color:isClicked?'red':''}}></i></button>
<button><i class="fa-solid fa-floppy-disk"  onClick={handleShow}></i></button></div>



  
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Favourites❤️</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {likedQuotes.length>0?
            likedQuotes.map((data,index)=>(
           <div className='liked-quotes d-flex justify-content-between w-100'>
             <li key={index}>{data}</li>

             <button className='trash' onClick={()=>handleDelete(data)}><i class="fa-solid fa-trash " style={{color:' rgb(205, 87, 87)'}}></i></button>
           </div>
            ))
          :'No favorites'}    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>




















<div className='text-center'  style={{ fontFamily: "Dancing Script, cursive",fontSize:'30px'}}>

  <p>{quote}</p>
  
  
</div>

</div>



{
  likedQuotes.length>0?
  <div className="liked" >
    <Collapse in={open}>
        <div id="example-collapse-text">
          {
            likedQuotes.map((data,index)=>(
           <div className='liked-quotes d-flex justify-content-between'>
             <li key={index}>{data}</li>

             <button className='trash' onClick={()=>handleDelete(data)}><i class="fa-solid fa-trash " style={{color:' rgb(205, 87, 87)'}}></i></button>
           </div>
            ))
          }        </div>
      </Collapse>
  </div>:''
}

</div>

</>
  )
}

export default Quote