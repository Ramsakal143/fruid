import React, { useEffect, useRef } from 'react'
import rides from './images/car-1.avif'
import car2 from './images/car-2.jpg'
import car3 from './images/car-3.avif'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const box = useRef()
  const box1 = useRef()
  const box2 = useRef()
  const box3 = useRef()

  function ride() {
    box.current.style.backgroundImage = `url(${car3})`
    box.current.style.backgroundSize = "100% 100%"
    box1.current.style.display = 'block'
    box2.current.style.display = 'none'
    box3.current.style.display = 'none'

  }

  function drive() {
    box.current.style.backgroundImage = `url(${rides})`
    box.current.style.backgroundSize = "100% 100%"
    box1.current.style.display = 'none'
    box2.current.style.display = 'block'
    box3.current.style.display = 'none'

  }
  function rent() {
    box.current.style.backgroundImage = `url(${car2})`
    box.current.style.backgroundSize = "100% 100%"
    box1.current.style.display = 'none'
    box2.current.style.display = 'none'
    box3.current.style.display = 'block'
  }

  useEffect(() => {
    ride()
  })

  const navigate=useNavigate()

  return (

    <div className='container-fluid mx-0 px-0'>
      <div className=''>
        <div className='' ref={box} style={{ height: "650px", width: "100%" }}>
          <div className='inner'>
            <div className='' style={{ display: "flex", textAlign: 'justify', marginLeft: "80px" }}>
              <div className='px-5 ' style={{}}><button onClick={ride} className="border-0 offset-md-3 bg-white fs-5 text-center"><i class="bi bi-car-front fs-2"></i>Ride</button></div>
              <div className='px-5 '><button onClick={drive} className="border-0 bg-white fs-5"><i class="bi bi-reception-4 fs-2"></i><br />Drive</button></div>
              <div className='px-5 '>  <button onClick={rent} className="border-0 bg-white fs-5 w-75"><i class="bi bi-key-fill fs-2"></i><br />Rent your fleet</button></div>
            </div>
            <hr />
            <div ref={box1}>
              <h1 className='px-5' style={{ fontSize: "60px", color: "black", textAlign: "justify" }} >Request a ride now</h1>
              <div className='container'>
                <div className='row'>
                  <div className='col-10 ms-5 py-4'>
                    <input type='' placeholder='Enter Pickup location' className="py-3 form-control " />
                  </div>
                  <div className='col-10 ms-5'>
                    <input type='' placeholder='Enter Pickup location' className="py-3 form-control " />
                  </div>
                  <div className='ms-5 py-4 col-12'>
                    <button onClick={()=>navigate("/request")} className='btn btn-dark py-3 px-4 fs-5'>Request now</button>
                    <button onClick={()=>navigate('/schedule')} className='btn btn-light border-dark border-2 ms-3 py-3 px-4 fs-5'>Schedule for later</button>
                  </div>
                </div>
              </div>
            </div>
            <div ref={box2}>
              <h1 className='px-5' style={{ fontSize: "60px", color: "black", textAlign: "justify" }}>Get in the driver’s seat and get paid</h1>
              <p className='px-5 py-4 fs-5'>Drive on the platform with the largest network of active riders.</p>
              <button onClick={()=>navigate('/sign')} className='ms-5 px-3 py-3 fs-5 bg-dark text-white btn'>Sign up to drive</button>
              <p className='px-5 py-4 ' style={{ textDecoration: "underline" }}>Learn more about driving and delivering</p>
            </div>
            <div ref={box3}>
              <h1 className='px-5' style={{ fontSize: "60px", color: "black", textAlign: "justify" }}>Make money by renting out your car</h1>
              <p className='px-5 py-4 fs-5'>Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.</p>
              <button onClick={()=>navigate('/start')} className='ms-5 px-3 fs-5 bg-dark text-white btn'>Get started</button>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        
      </div>
    </div>
  )
}

export default Home;
