import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {UncontrollableAccordion} from "./components/UncontrollableAccordion/UncontrollableAccordion";
import {UncontrollableRating} from "./components/UncontrollableRating/UncontrollableRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UsersMongoRequest} from './components/UsersMongoRequest/UsersMongoRequest';


function App() {
    const [rating, setRating] = useState<1 | 2 | 3 | 4 | 5 | 0> ( 1 )
    const [on, setOn] = useState<boolean> ( false )



    return (
        <div className="App">
            <UsersMongoRequest/>
            <OnOff on={ on } onClick={ setOn }/>
            <Rating value={ rating } setRating={ setRating }/>
            <hr/>
            <UncontrollableAccordion/>
            <UncontrollableRating/>
        </div>
    );
}

export default App;


