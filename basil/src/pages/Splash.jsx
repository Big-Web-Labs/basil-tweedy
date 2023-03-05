import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import splash_image from '../assets/splash_image.png'
import { motion } from 'framer-motion'

const Splash = () => {

    const [flash, setFlash] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (flash) {
            setTimeout(() => {
                navigate('/home')
            }, 800)
        }
    }, [flash])

    return (
        <motion.div animate={flash && { backgroundColor: ["#000", "#fff", "#000", "#fff", "#000", "#fff"] }} transition={{ duration: 0.4 }} className="bg-black h-[100vh] text-white flex justify-center items-center p-10 sm:p-24">
            <motion.img src={splash_image} animate={flash && { opacity: [1, 0] }} transition={{ duration: 0.8 }} onClick={() => setFlash(!flash)} />
        </motion.div>
    )
}

export default Splash