import React, { useEffect, useState } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useHistory } from 'react-router-dom';
import {  useDispatch } from 'react-redux' 
import * as Types from '../../js/constants';
import {Alert} from "@material-ui/lab";
 
function QuoteDetailSix(props) {
  const [error,setError]=useState(false);
  const [emailError,setEmailError]=useState(false);
  const dispatch = useDispatch()
  const history = useHistory()

  

  const [inputField , setInputField] = useState({
      phone: '',
      fullname: '',
      email: ''
    })

    const inputsHandler = (e) =>{
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }
    
    const reset=()=>{
      setEmailError(false);
      setError(false)
    }
    const submitButton = () =>{
      
      dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: "details", selectedDetailsType: inputField } })
      if(inputField.email!==""){
        if(!inputField.email.includes("@")){
          console.log("error email address");
          setEmailError(true)
        }else{
          history.push('/quotedetailseven')
        }
        
      }else{
        setError(true)
      }
      
 
    }

  

  useEffect(() => {
    
  }, [])

  
 
  return (
    <div className='container_body'>
      <div className='body_header'>
        <Header />
      </div>
      
      <div className='container_custom'>
        <div className='title_container'>

          <h2><p> We got your back   </p></h2>
          <h4> <p>  just need a few details of yours</p></h4>
        </div>
        {error?<Alert severity="error"className="alertBox">Please Add Your email Address</Alert>:null}
        {emailError?<Alert severity="error"className="alertBox">Enter your Valid email Address</Alert>:null}
      <div className="querytxt">

        <input type="text" name="phone" className="form-control" placeholder="phone(e.g : 1234567890)" onChange={inputsHandler} value={inputField.phone} />
       <div style={{height:10}}></div>
        <input type="text" name="fullname" className="form-control" placeholder="Full Name" onChange={inputsHandler} value={inputField.fullname}  />
        <div style={{height:10}}></div>
        <input onClick={()=>reset()}type="text" name="email" className="form-control" placeholder="Enter email" onChange={inputsHandler} value={inputField.email}  />
        <div style={{height:10}}></div>
        <p className="btn btn-danger" onClick={submitButton}>Send Inquiry</p>

      </div> 
      <div className="gap"></div>
      </div>
      <Footer navigation={"six"} value={80} />
    </div>
  );
}

export default QuoteDetailSix;
