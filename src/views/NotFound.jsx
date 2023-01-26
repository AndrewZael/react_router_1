import React from 'react'
import notFound from '../assets/img/not-found.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="text-center container mx-auto full-h d-flex flex-column align-items-center justify-content-center">
      <figure className="col-12 col-md-6 col-lg-4 mb-0">
        <img src={notFound} alt="Página no encontrada" width="100%" />
      </figure>
      <h1 className="mt-5">No existen pasteles aquí</h1>
      <p className="mb-4">Intenta volver a nuestra página de inicio</p>
      <Link to="/" className="btn btn-danger">INICIO</Link>
    </section>
  )
}

export default NotFound