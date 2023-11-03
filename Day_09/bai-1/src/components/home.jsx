import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
    const data = useLocation().state;
    return(
     <div>
        <p>Email: {data.name}</p>
        <p>Password: {data.pass}</p>

     </div>
    );
}

export default Home;