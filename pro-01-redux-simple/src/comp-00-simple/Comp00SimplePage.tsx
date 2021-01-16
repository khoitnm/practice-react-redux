import React from 'react';

let componentCount = 0;
let returnCount = 0;

const Comp00SimplePage = () => {
    componentCount++;
    console.log(`[${componentCount}] START COMPONENT`);

    returnCount++;
    return (
        <div>
            {console.log(`[${componentCount}] Return Render: ${returnCount}`)}
            <span>
                [{componentCount}] Render: {returnCount}
            </span>
        </div>
    );
};

export default Comp00SimplePage;
