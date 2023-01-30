import React from "react"
import contact from "../assets/img/contact.svg";

const Contact = () => {
  return (
    <section title="Contacto" className="row container mx-auto align-items-center justify-content-center full-h">
      <div className="col-12 col-md-7 d-flex flex-column align-items-center mb-3 mb-md-0">
        <img src={contact} alt="Contactanos" width="75%" />
      </div>
      <form className="col-12 col-md-5 pb-3 pb-md-0">
        <h1 className="fw-light display-5">Cuéntanos</h1>
        <h2 className="mb-4 h4">¿En qué podemos ayudarte?</h2>
        <label htmlFor="email" className="small">Correo electrónico</label>
        <input id="email" type="email" className="form-control" placeholder="Ej: mail@mail.com" required />
        <br />
        <label htmlFor="message" className="small">Mensaje</label>
        <textarea id="message" className="form-control" placeholder="Tu mensaje" rows="5" required></textarea>
        <div className="text-end mt-4">
          <button className="btn btn-danger">Enviar</button>
        </div>
      </form>
    </section>
  )
}

export default Contact