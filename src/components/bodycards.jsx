import React from "react";
import Card from "./cards";
import products from "./products";

const BodyCards = () => {
    return (
        <section className="container py-5">
            <div className="row mb-5">
                <div className="col-12 text-center text-md-start">
                    <span className="text-muted text-uppercase small fw-bold tracking-wider">Colección Premium</span>
                    <h2 className="display-6 fw-normal mt-2 text-dark">Destacados de la Temporada</h2>
                </div>
            </div>
            <div className="row contenedor-de-cards">
                {products.map((elProducto) =>(
                    <Card
                    key= {elProducto.id}
                    title={elProducto.title} 
                    color={elProducto.color} 
                    image={elProducto.image}
                    />
                ))}
            </div>
        </section>
    );
};
export default BodyCards