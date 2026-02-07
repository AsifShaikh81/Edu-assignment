import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();

  const fieldAnimation = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setError("");

    if (name === "password") {
      if (value.length < 6) {
        setPassError("Password must be at least 6 characters");
      } else {
        setPassError("");
      }
    }
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill all required fields");
      return;
    }
     if (password.length < 6) {
      setPassError("Password must be at least 6 characters");
      return;
    }
    navigate("/accountsetting");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* Mobile container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-110 h-200 bg-[#efebd8] rounded-2xl shadow-2xl px-6 py-8"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold mb-2"
        >
          Login to <br /> PopX
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-sm mb-6"
        >
          Welcome back! Please enter your details.
        </motion.p>

        {/* Form */}
        <motion.form 
        initial="hidden" 
        animate="visible" 
        className="space-y-4"
        onSubmit={handleSubmit}
        >
          {/* Email */}
          <motion.div variants={fieldAnimation}>
            <label className="text-sm font-medium text-purple-600">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
            onChange={handleChange}
            name="email"
              type="email"
              placeholder="example@email.com"
              className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </motion.div>

          {/* Password */}
          <motion.div variants={fieldAnimation}>
            {passError &&(
              <p className="text-red-500 text-sm mt-1">{passError}</p>
            )}
            <label className="text-sm font-medium text-purple-600">
              Password<span className="text-red-500">*</span>
            </label>
            <input
            onChange={handleChange}
            name="password"
              type="password"
              placeholder="********"
              className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </motion.div>
          
        {
          error && (
            <motion.div
            initial={{opacity:0,y:5}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.3}}
            className="text-center text-red-600 "
            >
              {error}
            </motion.div>
          )
        }
         {/* Button */}
        <motion.button
          type="submit"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold mt-10"
        >
          Login
        </motion.button>
        </motion.form>

       

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-gray-500 mt-4"
        >
          Don't have an account?
          <span
            onClick={() => navigate("/signup")}
            className="text-purple-600 font-medium cursor-pointer"
          >
            Create one
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
}
