"use client"
import { useState, useEffect } from 'react';
import "./Style.css"
const TextCarousel = () => {
    const textItems = ['lorem ddndi odfoewjf hiahduhewd idhcidshcd jawpeofiew uorhghurhvsa ipwehhfiewf sweufhurwfhc wifhcw wrhgfrwhfv', ' lorem2 222222 ddndi odf duhewd idhcidshcd jawpeofiew uorhghurhvsa ipwehhfiewf sweufhurwfhc wifhcw wrhgfrwhfv' ];
    const [currentItem, setCurrentItem] = useState(0);

    const nextItem = () => {
        setCurrentItem((prevItem) => (prevItem + 1) % textItems.length);
    };

    const prevItem = () => {
        setCurrentItem((prevItem) => (prevItem - 1 + textItems.length) % textItems.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextItem();
        }, 8000); // Change text every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="maincarousel-container">
            <button onClick={prevItem}>&lt; </button>
            <div className="carousel-container">

                <h1>{textItems[currentItem]}</h1>


            </div>
            <button onClick={nextItem}> &gt;</button>
        </div>
    );
};

export default TextCarousel;
