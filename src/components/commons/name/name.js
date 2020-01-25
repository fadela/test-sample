import React, {
    Component
} from 'react';
import "./name.scss";

const Name = ({
    className
}) => {
    return ( <
        div className = {
            `name ${className}`
        } >
        <
        span > F < /span> <
        span > A < /span> <
        span > D < /span> <
        span > E < /span> <
        span > L < /span> <
        span > A < /span> <
        /div>     
    )
}

export default Name;