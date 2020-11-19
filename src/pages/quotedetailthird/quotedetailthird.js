import React, { useEffect } from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import SelectItem from '../../components/selectitem';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import * as Types from '../../js/constants'
import  "./quotedetailthird.css";

function QuoteDetailthird(props) {
  const storeData = useSelector(store => store);
  const dispatch = useDispatch();
  const history = useHistory();

  
  var txt1 = storeData.selectedClassificationType;
  var txt2 = storeData.selectedItem;
  var txt;

  if (txt1 ==="") { txt = txt2; } else { txt = txt1; };

  useEffect(() => {
    
    
  }, []);

  const goNavigation = (clickedItem) => {

    dispatch({ type: Types.SET_SELECTED_ITEM, payload: { selectedItem: clickedItem, selectedModelType: clickedItem } })

    // console.log(clickedItem);
    if(Object.keys(storeData.Color).includes(clickedItem)){
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
        <div className='title container'>
          <h2><p>  Which device model are you using?     </p></h2>
          <h4> <p>   Not sure which model your device is?   </p></h4>
        </div>
        <div className='box_containerThird'>
          <div className='boxesThird'>

            {storeData.Model_type[txt] && Object.keys(storeData.Model_type[txt]).map((item, index) => {
              return (
                <div key={index} 
                 //className={storeData.selectedModelType === item  ? style.selecteditem : style.selectitem}
                 className="col-6 col-sm-4 col-md-3 col-lg-2 selectitemThird"
                  > 
                  <SelectItem item={item} setItem={goNavigation} key={index}   />
                </div>
              )
            })}

          </div>
        </div>
        <div className="gap"></div>
        <div className="gap"></div>
        <div></div>
        <div></div>
      </div>
      <div className="gap"></div>
        <div className="gap"></div>
      <Footer navigation={"third"} value={50} />
    </div>
  )
}

export default QuoteDetailthird;
