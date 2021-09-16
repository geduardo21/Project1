import React from "react";

const Menu = () => {
    const styles = {
       width:"540px",
    };

    return(
        <React.Fragment>
            <div className="menu">
        <h1>Menu</h1>
        <div className="card mb-3" style={styles}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://izzycooking.com/wp-content/uploads/2021/05/Starbucks-Cake-Pops-5.jpg" className="menu-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Cake Pops</h5>
        <p className="card-text">Choose from: chocolate, strawberry, vanilla</p>
      </div> 
    </div>
  </div>
</div>
<div className="card mb-3" style={styles}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://www.amysgourmetapples.com/media/catalog/product/cache/1/thumbnail/800x/17f82f742ffe127f42dca9de82fb58b1/5/4/54200-caramel-apple-prod.jpg" className="menu-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Apples</h5>
        <p className="card-text">Choose from: chocolate, mazapan, peanuts, caramel</p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={styles}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://amandascookin.com/wp-content/uploads/2021/01/VALENTINES-DAY-Chocolate-Covered-Strawberries-SQ.jpg" className="menu-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Strawberries</h5>
        <p className="card-text">Can be decorated according to your theme!</p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={styles}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStuZJaBKtlKITmZHcI941Q7ImDGetiPfyT3wShMu_3bDv_f_YNXCtqnl0eoE&usqp=CAc" className="menu-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Pretzel Sticks</h5>
        <p className="card-text">Chocolate covered with a varitey of toppings to choose from!</p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={styles}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xdrunPDxHLsvdfll_uTVopPx79l2lOm_Eg&usqp=CAU" className="menu-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Rice Crispy Treats</h5>
        <p className="card-text">Chocolate covered and decored according to your theme.</p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={styles}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://cdn.shopify.com/s/files/1/1680/0459/products/il_fullxfull.1778603701_cq6x_95d7b35f-b891-4f37-af01-ebe351e6fccc.jpg?v=1579194724" className="menu-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Oreo's</h5>
        <p className="card-text">Chocolate covered and decorated in any color.</p>
      </div>
    </div>
  </div>
</div>
</div>
        </React.Fragment>
    );
}
export default Menu;