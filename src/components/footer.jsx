   import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
         
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Brandsmart</h5>
            <p>Somos una empresa dedicada a la venta de indumentaria deportiva que combina los mejor de varias marcas para asegurar productos de la mejor calidad</p>
          </div>
          
        
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Productos</h5>
            <p><a href="#" className="text-white" >Temporada 2026</a></p>
            <p><a href="#" className="text-white" >Temporada 2025</a></p>
          </div>

    
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contacto</h5>
            <p><i className="fas fa-home mr-3"></i> Canelones, Uruguay</p>
            <p><i className="fas fa-envelope mr-3"></i> brandsmart@contact.com</p>
          </div>
        </div>

        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>© 2026 Copyright: <strong>brandsmart.com.uy</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

