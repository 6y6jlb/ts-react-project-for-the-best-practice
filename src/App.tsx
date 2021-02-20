import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff/onOff";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {UncontrollableAccordion} from "./components/UncontrollableAccordion/UncontrollableAccordion";
import {UncontrollableRating} from "./components/UncontrollableRating/UncontrollableRating";
import {UncontrollableOnOff} from "./OnOff/UncontrollableOnOff";


function App() {
    const [rating, setRating] = useState<1 | 2 | 3 | 4 | 5 | 0>(1)
    const [on, setOn] = useState<boolean>(false)
    const [collapsed, setCollapsed] = useState<boolean>(true)


    return (
        <div className="App">
            <OnOff/>
            <UncontrollableOnOff on={on} onClick={setOn}/>
            <Accordion collapsed={collapsed} onClick={setCollapsed}/>
            <UncontrollableAccordion/>
            <Rating value={rating} setRating={setRating}/>
            <UncontrollableRating/>
        </div>
    );
}

export default App;


