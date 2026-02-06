import React from 'react'

function App() {
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log("form submitted")
}
  return (
    <div>
     <form onSubmit={(e)=>
      handleSubmit(e)
     }>
      <input type="text"  placeholder="Enter your name " />
      <button>submit </button>
     </form>
    </div>
  )
}

export default App
