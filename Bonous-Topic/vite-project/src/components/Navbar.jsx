import React from 'react';

const Navbar = (props) => {
    function changetheme (){
        props.SetTheme('dark')
    }
    return (
        <div>
            <p> this  {props.theme} </p>
            <button onClick={changetheme}> change theme </button>
        </div>
    )
}

export default Navbar;
