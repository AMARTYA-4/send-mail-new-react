import React from 'react';



const SelectItem = ({ item, setItem }) => {
  var result = `./img/${item}.png`;


  return (
    <div
     className="perfectImgContainer"
      onClick={() => setItem(item)} 
    >
      
        <img src={result} alt="images"className="showImg" />
      
      <div>
        {item}
      </div>
    </div>
  )

};

export default SelectItem;