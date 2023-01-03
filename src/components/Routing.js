import React from 'react';
 //import { useHistory } from 'react-router';

const Routing = () => {

//     const history = useHistory()

    const handleGoBack=()=>{
     //    history.push("/")
    }

    return (
 <button onClick={handleGoBack}> Go back</button>


    );
}

export default Routing;