import React from "react";

const Home = (props) => {
  console.log("home", props.data);
  return (
    <div className="homePage">
      <span className="count">{props.data.length}</span>
      <div className="img-shoppping">
        <img
          width={70}
          height={70}
          src="/shopping-venture-3154148_1280.jpg"
          alt="img"
        ></img>
      </div>
      <div>
        <h1>Home component</h1>
      </div>
      <div className="item">
        <div className="imag-wrap">
          <img
            width={70}
            height={70}
            src="/smartphone-1426544_1280.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <p>price:$100</p>
        </div>
        <div className="btn">
          <button
            onClick={() =>
              props.AddtoCardHandle({ price: 1000, name: "i-phone" })
            }
          >
            Add to Card
          </button>
          <button onClick={() => props.RemovetoCardHandle()}>
            Remove to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
