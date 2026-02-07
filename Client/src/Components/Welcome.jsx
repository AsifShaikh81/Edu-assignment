import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen  flex justify-center items-center">
      {/* Mobile container */}
      <div className="w-110 aspect-9/16 bg-[#efebd8] rounded-2xl shadow-2xl flex flex-col justify-end px-6 pb-10 ">
        <motion.h1
          className="text-2xl font-bold text-black mb-2"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Welcome to PopX
        </motion.h1>

        <motion.p
          className="text-gray-500 text-sm mb-6"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </motion.p>

        <motion.button
          className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold mb-3 hover:bg-purple-700 transition cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={()=>{navigate('/signup')}}
        >
          Create Account
        </motion.button>

        <motion.button
          className="w-full bg-purple-200 text-black py-3 rounded-md font-semibold hover:bg-purple-300 transition cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={()=>{navigate('/login')}}
        >
          Already Registered? Login
        </motion.button>
      </div>
    </div>
  );
}


