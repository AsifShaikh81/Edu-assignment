import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
 
  
  const fieldAnimation = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

    const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "", 
  });

    const [error, setError] = useState("");
    const [passError,setPassError] = useState("")

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
    const { name, phone, email, password, agency } = formData;

    

    if (!name || !phone || !email || !password || !agency) {
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
        className="w-110 aspect-9/16 bg-[#efebd8] rounded-2xl shadow-2xl px-6 py-8"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold mb-6"
        >
          Create your <br /> PopX account
        </motion.h1>

        {/* Form */}
        <motion.form
          initial="hidden"
          animate="visible"
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Full Name */}
          <motion.div variants={fieldAnimation}>
            <label className="text-sm font-medium text-purple-600">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
             onChange={handleChange}
             name="name"
              type="text"
              placeholder="Marry Doe"
              className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </motion.div>

          {/* Phone Number */}
          <motion.div variants={fieldAnimation}>
            <label className="text-sm font-medium text-purple-600">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
            onChange={handleChange}
            name="phone"
              type="text"
              placeholder="9876543210"
              className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </motion.div>

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

          {/* Company Name */}
          <motion.div variants={fieldAnimation}>
            <label className="text-sm font-medium text-purple-600">
              Company name
            </label>
            <input
              type="text"
              placeholder="PopX"
              className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </motion.div>

          {/* Agency */}
          <motion.div variants={fieldAnimation}>
            <p className="text-sm font-medium mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>

            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                onChange={handleChange}
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.agency === "yes"}
                  className="accent-purple-600"
                />
                Yes
              </label>

              <label className="flex items-center gap-2">
                <input
                onChange={handleChange}
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.agency === "no"}
                  className="accent-purple-600"
                />
                No
              </label>
            </div>
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
          className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold mt-10 cursor-pointer"
        >
          Create Account
        </motion.button>
        </motion.form>

        

       

        <motion.p 
         initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-gray-500 mt-4"
        >
          Already Registered? 
          <span 
          onClick={()=>navigate('/login')}
          className="text-purple-600 font-medium cursor-pointer">
            Login
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
}
