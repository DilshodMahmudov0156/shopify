import React, { useState } from 'react';
import "./slider.css";

function HeaderSlider({images}): React.FC {
    const [count, setCount] = useState<number>(0);

    const rightImage = () => {

        if (count > (images.length - 2)){
            setCount(0);
        }else {
            setCount(count + 1);
        }
    }
    const leftImage = () => {
        if (count <= 0){
            setCount(images.length - 1);
        }else {
            setCount(count - 1);
        }
    }


    return (
        <>
            <div className="dots">
                <button className="dot"></button>
                <button className="dot"></button>
                <button className="dot"></button>
            </div>
            <div className="slider-btns">
                <button onClick={leftImage}>
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button onClick={rightImage}>
                    <i className="bi bi-chevron-right"></i>
                </button>
            </div>
            <img
                src={images[count].url}
                alt=""
                className="w-100 mt-2 slider-image"
            />
        </>
    );
}

export default HeaderSlider;