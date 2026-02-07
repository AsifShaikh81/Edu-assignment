import { motion } from "framer-motion";
import { Camera, Smile } from "lucide-react";

export default function AccountSettings() {
  return (
    <div className="min-h-screen bg-[#B8E3E9] flex justify-center items-center">
      {/* Mobile container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-110  h-200 bg-[#efebd8] rounded-2xl shadow-2xl px-6 py-6"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-semibold mb-6"
        >
            
          Account Settings
        </motion.h2>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 mb-4"
        >
          {/* Avatar */}
          <div className="relative">
            <img
              src="/women.png"
              alt="profile"
              className="w-14 h-14 rounded-full object-cover"
            />

            {/* Camera Icon */}
            <div className="absolute bottom-0 right-0 bg-purple-600 w-5 h-5 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">
                <Camera/>
              </span>
              
            </div>
          </div>

          {/* Name & Email */}
          <div>
            <p className="font-semibold text-sm">Marry Doe</p>
            <p className="text-xs text-gray-500">Marry@Gmail.com</p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4 }}
          className="border-gray-200 mb-4 origin-left"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-gray-600 leading-relaxed"
        >
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </motion.p>

        {/* Bottom Divider */}
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6 }}
          className="border-gray-200 mt-6 origin-left"
        />
      </motion.div>
    </div>
  );
}
