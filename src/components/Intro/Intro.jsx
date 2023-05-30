import React,  { useContext }  from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {duration : 2, type: 'spring'}
  return (
    <div className="intro">
        <div className="i-left">
             <div className="i-name">
             <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                <span>Andrew Thomas</span>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ipsa animi laudantium voluptates consectetur asperiores qui nam! Aperiam nostrum porro veritatis adipisci nemo.</span>
             </div>
             <button className="button i-button">
                Hire me
             </button>
             <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
                 
             </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img 
            initial={{ left: '-36%' }}
            whileInView = {{ left: '-24%' }} 
            transition = {transition}
            src={glassesimoji} alt="" />
            <motion.div 
            initial={{ left: '74%', top: "-4%" }}
            whileInView = {{ left: '57%' }} 
            transition = {transition}
            className='floating-div'
            style={{ top:'-4%', left:'60%' }}>
                <FloatingDiv image={crown} text1="Web" text2="Developer"></FloatingDiv>
            </motion.div>
            <motion.div
            initial={{top: '18.9rem', left: '-9rem' }}
            whileInView = {{ left: '-2rem' }} 
            transition = {transition}
            className='floating-div'
            style={{ top:'18.9rem', left:'-2rem' }}>
                <FloatingDiv image={thumbup} text1="Best Design" text2="Award"></FloatingDiv>
            </motion.div>
            <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
            <div className="blur" style={{ 
                background: '#C1F5FF',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'
                }}></div>
        </div>
    </div>
  )
}

export default Intro