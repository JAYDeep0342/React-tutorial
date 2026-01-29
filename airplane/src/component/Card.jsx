function card(props){
return <div className="card">
<img src={props.img} alt="airplane" />
<h2>Name:{props.user}</h2>
<h3>Age :{props.age}</h3>
<p>An airplane (informally plane) is a powered, fixed-wing aircraft </p>
</div>
}
export default card;