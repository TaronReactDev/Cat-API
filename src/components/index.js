import React from "react";

import Content from "./Content";
import Sidebar from "./Sidebar";

import "./style/style.scss"

export default function Cats() {
    return (
        <main>
            <Sidebar/>
            <Content/>
        </main>
    )
}