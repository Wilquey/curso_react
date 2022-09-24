import React from "react";
import DiretaFilho from "./DiretaFilho";

// eslint-disable-next-line
export default (props) => {
           
    return (
            <div>                
                <DiretaFilho texto="Junior" numero={20} bool={true}></DiretaFilho>
                <DiretaFilho texto="Gabriel" numero={17} bool={false}></DiretaFilho>
                <DiretaFilho texto="Jose" numero={45} bool={true}></DiretaFilho>
            </div>
    );
};