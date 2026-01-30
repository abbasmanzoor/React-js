import React from 'react'
<<<<<<< HEAD


const App = () => {
  const pageScrolling = (elem) => {
  if(elem>0){
   console.log('down')
  } else {
   console.log('up')
  }
}
  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY);
    }}>
      <div className='page1'></div>
        <div className='page2'></div>
          <div className='page3'></div>

</div>
  )}
=======
import Section1 from './component/section1/section1.jsx'
import Section2 from './component/section2/section2.jsx'
const App = () => {
  return (
    <div>
    <Section1 />
    <Section2 />
    </div>
  )
}

>>>>>>> c30973601d5ead135ec99e98db20bea6bc7da16e
export default App
