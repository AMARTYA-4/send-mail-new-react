import React from "react";
import Header from '../../components/header';

import { Link} from 'react-router-dom';
import "./homepage.css"

function HomePage(props){
    // const history = useHistory();
    // const gotoBookPage=()=>{
    //     history.push("/quotedetailfirst")
    // }
    return(
        <div>
            <div className="fixTop">
                <Header/>
            </div>
        <div className="Home"style={{
            backgroundImage:'url("https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backfaceVisibility:"hidden",
            filter: 'brightness(40%)',
            backgroundBlendMode:"luminosity"
            }}>
                </div>
            
                
            <div className="myMainTitle">
                <h1 className="whatThis">Device Repair & Tech Support</h1>
                <div className="gotoBookPage">
                <Link to="/quotedetailfirst">
                <button type="button" className="btn btn-info bookBtn">BOOK/INQUARY NOW</button>
                </Link>
                </div>
            </div>
            
        
        </div>
    )
}
export default HomePage;
