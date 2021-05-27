import React, {useState} from 'react';
import './App.css';

import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {UncontrollableAccordion} from "./components/UncontrollableAccordion/UncontrollableAccordion";
import {UncontrollableRating} from "./components/UncontrollableRating/UncontrollableRating";
import {OnOff} from "./components/OnOff/OnOff";



function App() {
    const [rating, setRating] = useState<1 | 2 | 3 | 4 | 5 | 0>(1)
    const [on, setOn] = useState<boolean>(false)
    const [collapsed, setCollapsed] = useState<boolean>(true)


    return (
        <div className="App">

            <OnOff on={on} onClick={setOn}/>
           {/* <Accordion collapsed={collapsed} onClick={setCollapsed}/>*/}
            <Rating value={rating} setRating={setRating}/>
            <hr />
            <UncontrollableAccordion/>
            <UncontrollableRating/>
        </div>
    );
}

export default App;


