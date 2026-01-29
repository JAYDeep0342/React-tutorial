// function card(props){
// return <div className="card">
// <img src={props.img} alt="airplane" />
// <h2>Name:{props.user}</h2>
// <h3>Age :{props.age}</h3>
// <p>An airplane (informally plane) is a powered, fixed-wing aircraft </p>
// </div>
// }
// export default card;
import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {

    return (
        
        <div className="card">
            <div>
                <div className="top">
                    <img src="https://images.unsplash.com/photo-1649734926695-1b1664e98842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9uJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D" alt="nachioooooo" />
                    <button>Save <Bookmark size={10} /> </button>
                </div>
                <div className="center">
                    <h3>Amazon <span>14 hour ago</span></h3>
                    <h2>java devloper</h2>
                    <div className='tag'>
                        <h4>part time </h4>
                        <h4>full time</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>$123/h</h3>
                    <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    
    )
}

export default Card