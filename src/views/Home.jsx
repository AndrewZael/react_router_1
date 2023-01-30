import React from "react"
import cake from "../assets/img/cake.svg";

const Home = () => {
  return (
    <section title="Home" className="row container mx-auto align-items-center justify-content-center full-h">
      <div className="col-12 col-md-5 d-flex flex-column align-items-center mb-3 mb-md-0">
        <h1 className="mb-3">
          <span className="fw-light d-block display-5">Bienvenido a</span> 
          <b className="fw-bold display-4">Happy Cake</b>
        </h1>
        <h2 className="h4 fw-normal">El lugar de los pasteles felices.</h2>
      </div>
      <figure className="col-12 col-md-7">
        <img src={cake} alt="Happy Cake" width="100%" />
      </figure>
    </section>
  )
}

export default Home