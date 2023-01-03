import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

import BurgerMenu from "./icons/burger.svg"
import {Link} from "react-router-dom";

export default function Sidebar() {

    const dispatch = useDispatch();

    const handleCategoriesClick = (id) => () => {
        return dispatch({
            type: "SET_CATEGORIES_ID",
            payload: {
                limit:10,
                category_id: id,
                cats:[],


            }
        })
    }

    const handleBurgerClick = () => {
        document.getElementById("burgerMenu").classList.toggle("open");
        document.getElementById("burger").classList.toggle("close")

    }
    const handleCloseBurger = () => {
        document.getElementById("burgerMenu").classList.toggle("open");
        document.getElementById("burger").classList.toggle("close")

    }


    useEffect(() => {
        axios.get("https://api.thecatapi.com/v1/categories")
            .then(res => res)
            .then(data => dispatch({
                type: "SET_CATEGORIES",
                payload: {
                    categories: data.data,
                }
            }));

    }, [])

    const categoriesState = useSelector(state => state.categories);
    const categories = categoriesState.map((el) =><li key={el.id} className="sidebar-container__nav__ul__item"
                                                      onClick={handleCategoriesClick(el.id)}>
   {el.name}
    </li>
);

    return (
        <aside className="sidebar-container">
            <nav className="sidebar-container__nav">
                <ul className="sidebar-container__nav__ul">
                    {categories}
                </ul>
            <Link to="/routing-example" className="routing"> Routing Example</Link>

            </nav>

            <img src={BurgerMenu} id="burger" alt="burger" className="sidebar-container__burger" onClick={handleBurgerClick}/>

            <nav className="sidebar-container__burger-nav" id="burgerMenu">
                <button className="closeBtn" onClick={handleCloseBurger}>x</button>
                <ul className="sidebar-container__burger-nav__ul">
                    {categories}
                </ul>


            </nav>
        </aside>

    )
}