import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import first from '../assets/1.png'
import second from '../assets/2.png'
import third from '../assets/3.png'
import fourth from '../assets/4.png'
import fivth from '../assets/5.png'
import sixth from '../assets/6.png'
import seventh from '../assets/7.png'
import eighth from '../assets/8.png'
import nineth from '../assets/9.png'
import { useNavigate } from "react-router";
import { Navigation } from 'swiper/modules';

  const screenshots = [first,second,third,fourth,fivth,sixth,seventh,eighth,nineth]

  const banner = 'https://img.agentadmin.cc/bigmumbai/banner/Banner_20250808175255jui9.png'
  
  const logo= `https://img.agentadmin.cc/bigmumbai/other/h5setting_202308141709544lm1.png`

  const link= `https://bigmumbai2.com/#/register?invitationCode=148235880383`
  const telegram= `https://telegram.me/powerhouse700` // official prediction channel
  const telegramPro= `https://telegram.me/powerhouse700/36143` //promotion channel signup button
const Home = () => {
  const [ nav,Navopen] = useState(false)
  const navigate = useNavigate()
  return (
    <div className=''>
    <div className=' pb-4 mx-auto max-w-2xl mb-20 bg-white font-stretch-110%'>
      <div className="nav-bar items-center  flex  p-4 bg-white   justify-between ">
        <div onClick={()=>Navopen(()=>!nav)} className='flex items-center px-2'>{nav?(<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#303030"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>):(<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#303030"><path d="M120-680v-80h720v80H120Zm0 480v-80h720v80H120Zm0-240v-80h720v80H120Z"/></svg>)}</div>
        <img className=' h-10 order-first' src={logo} alt="" />
      </div>
      {nav && <div className=' bg-gray-900 transition-all ease-in  border-gray-200 '>
        <ul className='list-inside p-2 text-xs text-white'>
          <li onClick={()=> navigate('/about')} className='p-2 hover:bg-gray-50  hover:text-gray-900 flex items-center gap-2'>About</li>
          <li  onClick={()=> navigate('/PrivacyPolicy')} className='p-2 hover:bg-gray-50  hover:text-gray-900 flex items-center gap-2'>Privacy Policy</li>
        <li onClick={()=> navigate('/Disclaimer')} className='p-2 hover:bg-gray-50  hover:text-gray-900 flex items-center gap-2'>Disclaimer</li>
          <li onClick={()=> navigate('/faq')} className='p-2 hover:bg-gray-50  hover:text-gray-900 flex items-center gap-2'>FAQ</li>
        </ul>
      </div>}

      <div className="text-center align-middle p-4">
        <h1>BIG MUMBAI Game : Download, Login App For ₹1000 Gift Code</h1>
      </div>
    
    <div onClick={()=> window.open(telegram)} className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 py-2 bg-white shadow-md z-50">
  <button className="w-full py-4 shimmer-btn2 rounded text-white text-center bg-blue-500 hover:bg-blue-700   transition-all duration-200 active:translate-y-1.5">
    Join Telegram
  </button>
</div>

      <div className=" p-4 flex gap-6">
        <button onClick={()=> window.open(link)} class="shimmer-btn hover:bg-red-800 w-full text-center  transition-all duration-200 active:translate-y-1.5 ">Register </button>
         <button onClick={()=> window.open(link)} class="shimmer-btn1 hover:bg-amber-600 w-full text-center  transition-all duration-200 active:translate-y-1.5">Login</button>
      </div>
      <img className="p-2 " src={banner} alt="" />
      <div className=" p-4 flex gap-6">
        <button onClick={()=> window.open(telegramPro)} class=" py-4 text-white bg-gray-950 hover:text-black hover:bg-white w-full text-center border-2 border-dashed  rounded-xl transition-all duration-200 active:translate-y-1.5 shadow-2xs hover:-translate-y-1.5">🎁 Sign Up Bonus</button>
      </div>

      <div className="p-4  bg-white table-auto">
        <table class="border-collapse border border-gray-400 ... w-full ">
  <thead>
    <tr>
      <th class=" p-3 border bg-amber-500 ...">App Name	</th>
      <th class=" p-3 border bg-amber-500 ...">Big Mumbai App</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border p-3 border-gray-300 ...">Referral Code</td>
      <td class="border p-3 border-gray-300 ...">148235880383</td>
    </tr>
    <tr>
      <td class="border p-3 border-gray-300 ...">Features</td>
      <td class="border p-3 border-gray-300 ...">Latest Game, Sprot, smd</td>
    </tr>
    <tr>
      <td class="border p-3 border-gray-300 ...">Big Mumbai Apk	</td>
      <td class="border p-3 border-gray-300 ...">2.5 [Latest Version]
</td>
    </tr>
  </tbody>
</table> 
  </div>
  <div className="bg-white">
        <Swiper navigation={true} modules={[Navigation]} spaceBetween={10}
          slidesPerView={1} >
            {
              screenshots.map((pic,idx)=>(
              <SwiperSlide>
              <div className="flex flex-col justify-center items-center"><img src={pic} alt="" />
              <span>Step-{idx+1}</span></div>
            </SwiperSlide>
              ))
            }
        </Swiper>
      </div>
      <div>
    <h3 className="p-4 text-center">Big Mumbai Invite Code: 148235880383 Get ₹1000 Signup Bonus & Earn Money Online in 2025 
</h3>
  </div>
  </div>
  </div>    
  )
}

export default Home