import React from "react";
import { useHistory } from "react-router-dom";

const GiftBoxes = () => {

    const history = useHistory();

    const styles = {
        width: "18rem",
    };

    const onClickOrder = () => {
        history.push("/orderform");
    };

    return(
        <React.Fragment>
            <div className="gift-boxes">
        <div className="card mb-3" style={styles}>
         <img src="https://www.mommysfabulousfinds.com/wp-content/uploads/2019/03/egg-cake-pops-1.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Cake Pops</h5>
                <p className="card-text">Holiday Themed</p>
                <button className="btn btn-primary" onClick={onClickOrder}>ORDER</button>
             </div>
        </div>
        <div className="card mb-3" style={styles}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHyiFwgTbTEAJBaCw9e5nVYnKC56iVZisOldj9MqLtPU7HqA-NJVp6l_ya6J8X8bAXXLEqCo&usqp=CAc" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Oreos</h5>
                <p className="card-text">Special Occasions</p>
                <button  className="btn btn-primary" onClick={onClickOrder}>ORDER</button>
             </div>
        </div>
        <div className="card mb-3" style={styles}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_Lg5WwZPUTgUYqaYy_qBJZzx7xWRoESqLA&usqp=CAU" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Rice Crispies</h5>
                <p className="card-text">Colorful!</p>
                <button className="btn btn-primary" onClick={onClickOrder}>ORDER</button>
             </div>
        </div>
        <div className="card mb-3" style={styles}>
         <img src="https://m.media-amazon.com/images/I/71TTETq-iEL._SL1500_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Strawberries</h5>
                <p className="card-text">Show your love with a treat!</p>
                <button className="btn btn-primary" onClick={onClickOrder}>ORDER</button>
             </div>
        </div>
        <div className="card mb-3" style={styles}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqoOIL7KTqBCRKESPd0fWNFGcL3Nc8x-HzTfHMvtrxXxBaq--0jSgNbthbIw&usqp=CAc" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Candy Apples</h5>
                <p className="card-text">Carnaval Time!</p>
                <button className="btn btn-primary apple-btn" onClick={onClickOrder}>ORDER</button>
             </div>
        </div>
        <div className="card mb-3" style={styles}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUwNiN_NCIOg-rlSpTes8htw0-nfx0vsocrB1y3eMhGXSrlqMejFGR9IYbw&usqp=CAc" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Pretzel Sticks</h5>
                <p className="card-text">Chocolate Covered pretzels</p>
                <button className="btn btn-primary" onClick={onClickOrder}>ORDER</button>
             </div>
        </div>
        </div>
</React.Fragment>
    );
};
export default GiftBoxes;