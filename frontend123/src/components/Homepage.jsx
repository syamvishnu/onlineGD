import React from 'react';
import Navbar from "./Navbar";
import Entryform from "./Entryform";
import Displayform from "./Displayform";


// const trigger = (
//   <span>
//     <Image  />
//   </span>
// )




function Homepage() {
    return (
        <div  >
        <Navbar />
        <Entryform />
        <Displayform />
        </div>
    )
}

export default Homepage
