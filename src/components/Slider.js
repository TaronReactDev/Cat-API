import React from "react";
import {useSelector} from "react-redux";

export default function Slider({id,handleClose}) {

    const catsState = useSelector(state => state.cats);

    const catUrl = catsState.filter(el=>el.id === id)[0].url;

    return(
        <section className="slider-container" >
            <div className="slider-container__background" onClick={handleClose}></div>
            <div style={{backgroundImage:`url(${catUrl})`}} className="slider-container__img">
                <button className="closeBtn" onClick={handleClose}>x</button>
            </div>

        </section>
    )
}