import React from "react";
import  "../styles/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
 
class Footer extends React.Component {
 

render(){
    return(
        <footer>
        <div className="foot">
            <span >@2018 Eolas International</span>
            <span className="vl">Terms Of Service</span>
            <span className="vl">Privacy Policy</span>
        </div>
    </footer>
    
    )    

}
}
export default Footer