import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from "axios";
import Navbar from "../components/Navbar";
function Detail() {
    const {id} = useParams();
    const baseURL = "https://students.trungthanhweb.com/api/single";
    const token = localStorage.getItem('token');
    const [product, setProduct]= useState({});
    const [brandProducts,setBrandProducts]= useState([]);
    const [cateProducts,setCateProducts]= useState([]);
    const [gallery,setGallery]= useState([]);
    const image = `https://students.trungthanhweb.com/images/`;

    const getData = ()=>{
        axios.get(`${baseURL}?apitoken=${token}&id=${id}`).then((res) => {
            if(res.data){
                console.log(res.data);
                setBrandProducts(res.data.brandproducts);
                setCateProducts(res.data.cateproducts);
                setProduct(res.data.products[0]);
                setGallery(res.data.gallery)
            }
          });
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <div>
            <Navbar/>
            <div className="mainProduct">
            <div className="row">
                <div className="col-md-4">
                    <img src={image+product.images} alt="" />    
                </div>
            </div>
            </div>

        </div>
    )
}

export default Detail