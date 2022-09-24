import React from "react";

// eslint-disable-next-line
export default (props) => {
    // eslint-disable-next-line
    const isPar = props.numero % 2 === 0;
    
    return (
            <div>
                { isPar ? <span>Par</span> : <span>Impar</span>}
            </div>
    );
};