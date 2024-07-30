import React from 'react'
import banner1 from '../images/banner AirPods Pro 2 T6_PC.jpg';
import banner2 from '../images/banner iPad Air 5 T6_PC.jpg';
import banner3 from '../images/banner iPad_PC.png';
import banner4 from '../images/banner iPhone 15 Pro_PC.png';
import banner5 from '../images/banner mac_PC.png';
import banner6 from '../images/banner MacBook Air M1 T6_PC.jpg';

function Carousel() {
    
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide mb-3" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 3"></button>

                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={banner1} className="d-block w-100" alt="Banner 1" />
                    </div>
                    <div className="carousel-item">
                    <img src={banner2} className="d-block w-100" alt="Banner 2" />
                    </div>
                    <div className="carousel-item">
                    <img src={banner3} className="d-block w-100" alt="Banner 3" />
                    </div>
                    <div className="carousel-item">
                    <img src={banner4} className="d-block w-100" alt="Banner 4" />
                    </div>
                    <div className="carousel-item">
                    <img src={banner5} className="d-block w-100" alt="Banner 5" />
                    </div>
                    <div className="carousel-item">
                    <img src={banner3} className="d-block w-100" alt="Banner 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel