

const Banner = () => {
    return (
        <div className="position-relative w-100 vh-75 overflow-hidden bg-dark" style={{ height: '500px' }}>
            <img 
                src="/images/banner.png"
                className="w-100 h-100 object-fit-cover opacity-50" 
                alt="Bransmart Nueva Colección" 
            />
            
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100 px-3">
                <span className="text-uppercase small fw-bold tracking-wider mb-2 d-block">Nueva Temporada 2026</span>
                <h1 className="display-2 fw-bold text-uppercase mb-3">Brandsmart Sport</h1>
                <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                    Elevá tu rendimiento con lo último en indumentaria deportiva. 
                </p>
            </div>
        </div>
    )
}
export default Banner