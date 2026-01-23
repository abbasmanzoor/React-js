import { useState } from 'react'
import {Bookmark} from 'lucide-react' 

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="parent">

      < div className="card">
      <div>
          <div className="top">
          <img src="https://static.vecteezy.com/system/resources/previews/053/407/522/large_2x/amazon-logo-amazon-icon-transparent-social-media-icons-free-png.png" alt="No image" />
          <button>Save <Bookmark/><Bookmark size={12} color="#fafafa" strokeWidth={1.25} /></button>
          </div>
        <div className="center">
          <h3>Amazon<span>5 days ago</span></h3>
          <h2>Senior UI/UXDesigner</h2>
        
        <div className='tag'>
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
        </div>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h3>$120/hr</h3>
            <p>Mumbai,india</p>
            </div>
          <button>Apply Now</button>
      </div>
    </div>  
    </div>
    )
}

export default App
