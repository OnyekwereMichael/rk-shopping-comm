import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import image from '../ASSESTS/image (1).png'
import Group from '../ASSESTS/Group 34.png';
import { NavLink } from 'react-router-dom';
import picone from "../ASSESTS/picone.png"
import pictwo from "../ASSESTS/pictwo.png"
import picthree from "../ASSESTS/picthree.png"
import picfour from "../ASSESTS/picfour.png";
import imgone from "../ASSESTS/imgone.png";
import imgfour from "../ASSESTS/imaa.png";
import imgtwo from "../ASSESTS/imgtwo.png";
import imgthree from "../ASSESTS/imgthree.png";
import imgfive from "../ASSESTS/img.png";
import imgsix from "../ASSESTS/pick.png";
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const data = [
    {
      img: picone,
      head: "CANOPIES",
      para: "from $4.50/day",
      button: "Show Now"
    },
    {
      img: pictwo,
      head: "CHAIRS",
      para: "from $1.50/day",
      button: "Show Now"
    },
    {
      img: picthree,
      head: "TABLES",
      para: "from $1.50/day",
      button: "Show Now"
    },
    {
      img: picfour,
      head: "BAR SETS",
      para: "from $11.50/day",
      button: "Show Now"
    },
  ]

  const dat = [
    {
      pic: imgfour,
      graph: "3tf Banquet Table for Kids",
      price: "$4.50/day",
      feat: "featured"
    },
    {
      pic: imgfive,
      graph: "Gold Chiavair Chairs",
      price: "$4.50/day",
      feat: "featured"
    },
    {
      pic: imgthree,
      graph: "Ev 18 inches powered sub",
      price: "$4.50/day",
      feat: "featured"
    },
    {
      pic: imgsix,
      graph: "3tf Banquet Table ",
      price: "$4.50/day",
      feat: "featured"
    },
    {
      pic: imgtwo,
      graph: "3tf Banquet Table",
      price: "$4.50/day",
      feat: "featured",
    },
    {
      pic: imgone,
      graph: "3tf Banquet Table ",
      price: "$4.50/day",
      feat: "featured",
    },
  ]
  const [Slide, setSlide] = useState(true)
  setTimeout(() => {
  setSlide(false)
  }, 4000)


  const loadout = {
    visible: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          duration: 0.2, repeat: Infinity,
        },
      }
    }
  }

  const conitaner = {
    hidden: {
      x: "-100vw", opacity: 0
    },
    visible:{
      x: "0", opacity: 1,
      transition:{
        duration: 1.6, delay: 0.7, ease: "easeInOut",
      }
    }
  }
 
  const [Menuopen, setMenuopen] = useState(false);
  const getMenuStyles = (Menuopen) => {
      if(document.documentElement.clientWidth <= 800){
          return{top: !Menuopen && "-100%"}
      }
  }
  return (
        < motion.header
        variants={conitaner}
        initial= "hidden"
        animate= "visible"
        >
          <AnimatePresence>
          { Slide && (
              <motion.p 
              initial={{y: "-100vh", opacity: 0}}
              animate={{y: "40vh", x: "20vw", opacity: 1}}
              exit={{x: "100vw"}}
              transition={{duration: 1.5, ease: 'easeInOut'}} className=' font-bold wel text-white rounded w-44'>Welcome to our mall</motion.p>
          )}
          </AnimatePresence>

          <section className="flex justify-between items-center backg fu"> 
        <div>
         <img src={image} alt="" />
        </div>

        <div className='oj flu'>
            <NavLink to="#" className="rke font-semibold  active">About us</NavLink>
            <NavLink to="#" className="rke font-semibold ">Marketplace</NavLink>
            <NavLink to="#" className="rke font-semibold ">Dashboard</NavLink>
            <NavLink to="#" className="rke font-semibold ">Map</NavLink>
        </div>

        <div className='flu'>
           <p>List an item</p>
        </div>

        <div className="rounded-full px-5 py-1 sign font-semibold flu ">
           <motion.button whileHover={{sacle: 2.1}} 
           transition={{duration: 1.5, delay: 0.7}}>Sign up</motion.button>
        </div>

       <div className='flu'>
             <img src={Group} alt="" />
       </div>

       <button className='bars block md:hidden sm:block m-3'
       onClick={()=>setMenuopen((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
        </button>
       </section>
     


      <section className='hidd relative md:hidden  sm:block' style={getMenuStyles(Menuopen)} transition={{duration: 1, delay: 0.4, ease: "easeInOut"}}>
        <div className='oj'>
            <NavLink to="#" className="rk font-semibold hover:bg-white active:bg-white">About us</NavLink>
            <NavLink to="#" className="rk font-semibold hover:bg-white">Marketplace</NavLink>
            <NavLink to="#" className="rk font-semibold hover:bg-white">Dashboard</NavLink>
            <NavLink to="#" className="rk font-semibold hover:bg-white">Map</NavLink>
        </div>

        <div className='list'>
           <p>List an item</p>
        </div>

        <div className="rounded-full px-5 py-1 sign font-semibold sig">
           <motion.button whileHover={{sacle: 2.1, color: "red"}} 
           transition={{duration: 1.5, delay: 0.7}}>Sign up</motion.button>
        </div>

       <div className='work hover:bg-white'>
             <img src={Group} alt="" />
       </div>
      </section> 
      
     
    
        <section>
            <p className='text-black-600 text-center pt-20 font-bold md:text-3xl'>Get all your events needs sorted</p>
            <p className='p-5 text-center font-semibold'>Shop and rent your event items on RKcommunity</p>
        </section>


        <section>
              <p className='pl-7 font-semibold pt-10'> Start shopping</p>
        </section>

        <section className='grid grid-cols-4 justify-center items-center ml-12 mt-12 wrap'>
       {data.map((item, index)=>(
      <motion.div 
       variants={{
      hidden: {
        x: -50, y: -50
      },
      visible: {
        x: 0, y: 0
      }
    }}
    initial= "hidden"
   whileInView="visible"
   viewport={{
    once: true,
   }}
    transition={{duration: 0.3, delay: index * 0.13}}
      >
          <div className='text-center'>
              <img src={item.img} alt="" className='cmf'/>
         </div>

          <div className='text-center font-bold '>
              <p>{item.head}</p>
         </div> 

          <div className='text-center dollar'>
              <p>{item.para}</p>
         </div>

          <div className='text-center rounded-full mt-2 butt1 w-28 p-1 ml-24 you '>
              <p className='text-white'>{item.button}</p>
         </div>

         </motion.div>
       ))}
        </section>

        <section className='font-bold mt-20 ml-9 text-lg'>
          <p>Featured Items</p>
        </section>
        
        <section className='grid grid-cols-6 justify-between items-center ml-12 wrap gap-10 mt-6 item'>
       {dat.map((one, index)=>(
      < motion.div 
       variants={{
      hidden: {
        x:-50, y: -50
      },
      visible: {
        x: 0, y: 0
      }
    }}
    initial= "hidden"
   whileInView="visible"
   viewport={{
    once: true,
   }}
    transition={{duration: 0.3, delay: index * 0.07}}
      >
          <div className='text-center'>
              <img src={one.pic} alt="" className='cmf'/>
         </div>

          <div className='text-center font-bold text-sm '>
              <p>{one.graph}</p>
         </div> 

     <section className='flex justify-around one'>
          <div className='text-center dollar font-semibold mt-3 text-sm '>
              <p>{one.price}</p>
         </div>

          <div className='mt-3 text-white feature rounded text-sm '>
              <p className=''>{one.feat}</p>
         </div>
         </section>

         </motion.div>
       ))}
        </section>


        <section className='font-bold mt-20 ml-9 text-lg'>
          <p>Categories</p>
        </section>
        
        <section className='grid grid-cols-6 justify-between items-center ml-12 wrap gap-10 mt-6 item'>
       {dat.map((one, index)=>(
      <motion.div  
       variants={{
      hidden: {
        x: -50, y: -50
      },
      visible: {
        x: 0, y: 0
      }
    }}
    initial= "hidden"
   whileInView="visible"
   viewport={{
    once: true,
   }}
    transition={{duration: 0.3, delay: index * 0.07}}
      >
          <div className='text-center'>
              <img src={one.pic} alt="" className='cmf'/>
         </div>

          <div className='text-center font-bold text-sm '>
              <p>{one.graph}</p>
         </div> 

     <section className='flex justify-around one'>
          <div className='text-center dollar font-semibold mt-3 text-sm '>
              <p>{one.price}</p>
         </div>

          <div className='mt-3 text-white feature rounded text-sm '>
              <p className=''>{one.feat}</p>
         </div>
         </section>

         </motion.div>
       ))}
        </section>
        
    
        <section className=' mt-32 grid grid-cols-6 justify-between items-center ml-12 wrap gap-10  item'>
       {dat.map((one, index)=>(
      <motion.div 
       variants={{
      hidden: {
        x: -50, y: -50
      },
      visible: {
        x: 0, y: 0
      }
    }}
    initial= "hidden"
   whileInView="visible"
   viewport={{
    once: true,
   }}
    transition={{duration: 0.3, delay: index * 0.07}}
      >
          <div className='text-center'>
              <img src={one.pic} alt="" className='cmf'/>
         </div>

          <div className='text-center font-bold text-sm '>
              <p>{one.graph}</p>
         </div> 

     <section className='flex justify-around one'>
          <div className='text-center dollar font-semibold mt-3 text-sm'>
              <p>{one.price}</p>
         </div>

          <div className='mt-3 text-white feature rounded text-sm two'>
              <p className='two'>{one.feat}</p>
         </div>
         </section>

         </motion.div>
       ))}
        </section>

        <section className='flex justify-center'>
          <button className='butt2 text-center flex pl-12 pr-12 rounded-full mt-12 py-2'>View more</button>
        </section>

        <motion.section className='loader' 
        variants={loadout}
        animate="visible"
        >

        </motion.section>


<footer className='mt-16 faded'>
   <p className='text-center font-semibold pt-4'>Get the Newest Deal and Updates delivered straight to your inbox</p>
   
   <section className='flex justify-center mt-7 '>
   <div>
       <input type="text" placeholder='Your email address' className='rounded pl-2 pr-2 p-1'/>
   </div>

   <div>
       <button className='inp rounded-full pl-2 pr-2 p-1  text-white'>Subscribe</button>
   </div>
   </section>


<section className='grid grid-cols-5 gap-10 justify-between p-24 gdg'>
   <div>
          <ul>
              <li className='font-semibold  pb-2'>About</li>
              <li>Rent on Rk</li>
              <li>Policies</li>
              <li>Help</li>
          </ul>
    </div>
 
    <div>
        <ul>
            <li className='font-semibold  pb-2'>Socail</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
        </ul>
    </div>

    <div>
          <ul>
                <li className='font-semibold  pb-2'>More</li>
                <li>Sitemap</li>
                <li>Blog</li>
                <li>Blog</li>
                <li>Blog</li>
          </ul>
    </div>

    <div>
          <ul>
              <li className='font-semibold  pb-2'>About</li>
              <li>Rent on Rk</li>
              <li>Policies</li>
              <li>Help</li>
          </ul>
    </div>

    <div>
            <ul>
                  <li className='font-semibold  pb-2'>Contact</li>
                  <li>497, Evergreen road, Roseville CA 98</li>
                  <li>+44 398 234 7863</li>
                  <li>hello@rkcommuni</li>
          </ul>
    </div>
    </section>
    <hr/>

    <section className='flex'>
            <div>
                Term of us
            </div>

            <div>
                 Policies
            </div>
    </section>
                </footer>
        </motion.header>
  )
 
}

export default Header;