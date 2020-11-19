import React from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import SelectItem from '../../components/selectitem';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import * as Types from '../../js/constants'
import "./quotedetailfirst.css";


function QuoteDetailFirst(props) {
  const storeData = useSelector(store => store);
  const dispatch = useDispatch();
  const history = useHistory();

  const goNavigation = (clickedItem) => {
    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: clickedItem, selectedDeviceType: clickedItem } })

    if (Object.keys(storeData.Classification).includes(clickedItem)){
      history.push('/quotedetailsecond')
    }else if(Object.keys(storeData.Model_type).includes(clickedItem)){
      history.push('/quotedetailthird');
    }else if(Object.keys(storeData.Color).includes(clickedItem)){
      history.push('/quotedetailfourth');
    }else{
      history.push('/quotedetailfive');
    }
  }


  return (
    <div className='container_body'>
      <div className='body_header'>
        <Header />
     </div>
      <div className='container_custom'>

        <div className='title_container'>
          <h1>What can we help with?</h1>

        </div>
        <div className='box_containerFirst'>
          <div className='boxesFirst'>

            {Object.keys(storeData.DeviceType).map((item, index) => {
              return (
               //col-6 col-sm-4 col-md-3 col-lg-2
                
                    <div key={index} 
                    //className={storeData.selectedDeviceType === item ? style.selecteditem : style.selectitem}
                    className="col-6 col-sm-4 col-md-3 col-lg-3 selectitemFirst"
                     >
                      <SelectItem item={item} setItem={goNavigation} key={index} />
                    </div>
               
               
              )
            })}


          </div>
        </div>
        <div className="gap"></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="footerarea">
        <Footer navigation={"first"} value={0} />
      </div>
      
    </div>
  );
}

export default QuoteDetailFirst;

