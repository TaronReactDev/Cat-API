import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import Slider from "./Slider";

export default function Content() {
    const dispatch = useDispatch();
    const catsState = useSelector(state => state.cats);
    const limit = useSelector(state => state.limit);
    const category_id = useSelector(state => state.category_id);

    const [id, setId] = useState("");

    const handleOneCat =(id)=>()=>{
        setId( id );
    }
    const handleClose = () =>{
        setId( "" );
    }
    const handleMoreBtn = () => {
        return dispatch({
            type: "SET_LIMIT",
            payload: {
                limit: limit + 10,
            }
        })
    }

    const handleLoadMix= () =>{
        return dispatch({
            type: "SET_MIXED",
            payload: {
                category_id: "",
            }
        })
    }

    useEffect(() => {
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${category_id}`)
            .then(res => res)
            .then(data => dispatch({
                type: "SET_CATS",
                payload: {
                    cats: data.data,
                }
            }));

    }, [])

    useEffect(() => {
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${category_id}`)
            .then(res => res)
            .then(data => dispatch({
                type: "SET_CATS",
                payload: {
                    cats: data.data,
                }
            }));

    }, [limit,category_id])

    console.log(limit,"limit")
    console.log(catsState,"catsState")
    console.log(category_id,"category_id")

    const cats = catsState.map((el) => <li key={el.id} className="content-container__ul__item" onClick={handleOneCat(el.id)}>
        <div style={{backgroundImage: `url(${el.url})`}} className="content-container__ul__item__img"/>

        <span className="content-container__ul__item__text">click me</span>
    </li>);
    return (

    !id ? <section className="content-container">
            <ul className="content-container__ul">
                {cats}
            </ul>

            { catsState.length   ? <button className="content-container__btn" onClick={handleMoreBtn}>SEE MORE</button>
                :
               category_id==="none" ?   <div className="content-container__text" id="content-container__text" onClick={handleLoadMix}>
                    Choose your favorite category or click here to see mixed
                </div> :""}


        </section> :
        <Slider id={id} handleClose={handleClose}/>
    )
}