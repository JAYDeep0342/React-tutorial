import React from 'react'

const App = () => {
     function inputshown(val)
     {
      console.log(val);
     }

  return (
    <div>
<input onChange={function (elem){
  inputshown(elem.target.value);
  // console.log(elem.target.value);
}}
type='text ' placeholder='name '
/>
</div>
  )
}

export default App