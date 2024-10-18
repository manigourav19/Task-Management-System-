import React from "react";
import {Link} from "react-router-dom"
import "../styles/HomeScreen.css";

function HomeScreen() {
  return (
    <div classNameName="homeScreenMain">
    
    <div class="view hm-black-light">
  <div class="full-bg-img flex-center ">
    
  <div className="hero-content">
          <h1>Driving business performance made easy</h1>
          <h3> we transform clients and empowers humans through technology!</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <Link exact to ="/taskmanager" className="homebtn cta">
            Find out more
          </Link>
        </div>


  </div>
</div>
      
      <section className="product">
        <div className="product__item">
          <img
            src="https://cdn.pixabay.com/photo/2019/07/03/05/58/envelope-4313721__480.png"
            alt="Logistics icon"
            className="product__item__image"
          />
          <p className="product__item__text">SOFTWARE DEVELOPMENT</p>
          <p className="product__item__text2">
            Our team of professionals builds customized apps to solve your
            unique workflow and business challenges.
          </p>
        </div>

        <div className="product__item">
          <img
            src="https://cdn.pixabay.com/photo/2019/07/02/05/54/tool-4311573__480.png"
            alt="Logistics icon"
            className="product__item__image"
          />
          <p className="product__item__text">WORKFORCE DEVELOPMENT</p>
          <p className="product__item__text2">
            Our training programs and tailored curriculum will connect you with
            a diverse pool of talent to help your business succeed in the
            digital era.
          </p>
        </div>

        <div className="product__item">
          <img
            src="https://cdn.pixabay.com/photo/2019/07/02/05/56/rocket-4311575__480.png"
            alt="Logistics icon"
            className="product__item__image"
          />
          <p className="product__item__text">BUSINESS PROCESS OUTSOURCING</p>
          <p className="product__item__text2">
            Our team manages the entire customer support life-cycle and other
            critical business operations.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;
