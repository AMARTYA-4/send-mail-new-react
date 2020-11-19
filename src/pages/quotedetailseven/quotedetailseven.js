import React, {  useState } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
// import * as Types from '../../js/constants'
import { Table } from 'react-bootstrap';
// import * as emailjs from 'emailjs-com'   
import Modal from "../../components/UI/modal/modal";
import Spiner from "../../components/UI/Spiner/Spiner";
import "./quotedetailseven.css";
function QuoteDetailSeven(props) {
  const storeData = useSelector(store => store)
  
  const history = useHistory()
  const [inqStart,setInqStart]=useState(false);
  const [inqSuccess,SetInqSuccess]=useState(false);
  const [inqFail,SetInqFail]=useState(false);
  const [inqDetails,setInqDetails]=useState("");
//   const goNavigation = () => {
 
//     const templateParams = {
//       from_name:  "Anastasi",
//       to_name: "andreipedrov@yandex.com",
//       subject: "this is the first message",
//       message_html: "this is the first message",
//     };
// emailjs
//       .send("gmail", "portfoliositecontact", templateParams, "id given from your EmailJS template")
//       .then(
//         function(response) {
       
//           console.log("SUCCESS!" );
//         },
//         function(err) {
//           console.log("Your message was not able to be sent");
//         }
//       );



//     //  onlineworkkw@gmail.com  
//     // emailjs.send('andreipedrov@yandex.com', 'portfoliositecontact',templateParams, 'andreipedrov@yandex.com')
//     //   .then(function (response) {
//     //     console.log("SUCCESS!");
//     //   }, function (err) {
//     //     console.log("Your message was not able to be sent");
//     //   });
 
//     console.log("-----mail-- end-----");
//     // dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: clickedItem, selectedIssueType: clickedItem } })
//     // history.push('/quotedetailfirst')
//   }
  const sendInquary=()=>{
    setInqStart(true);
    fetch("/sendmail",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        diviceType:storeData.selectedDeviceType,
        classification:storeData.selectedClassificationType,
        model:storeData.selectedModelType,
        color:storeData.selectedColorType,
        issue:storeData.selectedIssueType,
        inquaryInput:storeData.selectedIsuueQzType.inputData,
        clientDetails:storeData.selectedDetailsType
      })
      
    }).then(res=>res.json())
    .then(result=>{
      if(result.send===true){
        SetInqSuccess(true);
        setInqStart(false);
        
        setInqDetails(result.FullDetails.clientDetails);
      }else{
        SetInqFail(true);
      }
      
    })
    .catch(err=>{
      console.log(err);
      console.log("Check your details");
    })
  }
  const OKHandler=()=>{
    console.log("OK Button click Done");
  }
  const gotoHome=()=>{
    history.push("/");
  }
  const gotoBack=()=>{
    history.push("/quotedetailsix");
  }
  let Summery=null;
  if(inqStart){
    Summery=<Spiner/>
  }
  if(inqSuccess){
    Summery=<div>
      <img src="downloadOK.png"alt="imgOK"className="okImg"></img>
        <h5>Hey {inqDetails.fullname?inqDetails.fullname:null} Successfully submitted Your Inquary .</h5>
        {(inqDetails.email&&inqDetails.phone)?<><p className="detailarea">Your Email: {inqDetails.email}</p><p className="detailarea"> Phone no:{inqDetails.phone} </p></>:null} 
        <h6>Our Experts Will Contact with you,soon</h6>
        <button onClick={()=>gotoHome()}>OK</button>
      </div>
  }
  if(inqFail){
    Summery=<div>
      <img src="error.jpeg"alt="imgerror"className="okImg"></img>
        <h5>Hey The Email address does not exist.</h5>
        
        <h6>Go to previous page and Enter Valid Email address</h6>
        <button onClick={()=>gotoBack()}>BACK</button>
      </div>
  }
  return (
    <div className='container_body'>
      <div className='body_header'>
        <Header />
      </div>
      <div className='container_custom'>
        <div className='title_container'>

          <h2><p> Welcome   </p></h2>
          <Modal show={inqStart||inqSuccess}okClick={()=>OKHandler()}>
                       {Summery}
          </Modal>
          <div className='box_container' >
            <Table className="tabletxt" striped bordered hover>
              <tbody >
                <tr>
                  <td>1</td>
                  <td>  DeviceType</td>
                  <td> {storeData.selectedDeviceType}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Classifiction</td>
                  <td>   {storeData.selectedClassificationType}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Model</td>
                  <td>    {storeData.selectedModelType}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Color</td>
                  <td>   {storeData.selectedColorType}</td>
                </tr>



                <tr>
                  <td>5</td>
                  <td>Issue   </td>
                  <td>
                    {/* {storeData.selectedIssueType} */}
                    {/* <ul>{storeData.selectedIssueType.map(name => <li key={name}> {name} </li>)}</ul> */}
                    <ul>
                      {storeData.selectedIssueType && storeData.selectedIssueType.map((condetail, i) => {
                        return <li key={i} style={{ textAlign: 'left' }}>  {condetail}</li>
                      })}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Issue   Anything</td>
                  <td>   {storeData.selectedIsuueQzType.inputData}</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>phone</td>
                  <td>   {storeData.selectedDetailsType.phone}</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Fullname</td>
                  <td>   {storeData.selectedDetailsType.fullname}</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Email</td>
                  <td>   {storeData.selectedDetailsType.email}</td>
                </tr>

              </tbody>
            </Table>  <div className="querytxt">

              <p className="btn btn-danger" onClick={sendInquary}>Send Inquiry</p>

            </div>
          </div>

        </div>
        <div className="gap"></div>
      </div>


      <Footer navigation={"seven"} value={90} />
    </div>
  );
}

export default QuoteDetailSeven;
