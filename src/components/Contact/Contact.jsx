import './Contact.css';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <div className='mainContainer-contact'>
        <h1>CONTACT</h1>
        <form>
            <input id='nameInput' type="text" placeholder='Name' />
            <input type="email" id='emailInput' placeholder='Email' />
            <textarea id='messageInput' placeholder='Message'  rows="10" ></textarea>
            {/* <button type="submit">Send</button> */}
            <motion.button
        whileHover={{
          scale: 1.2, // Increases size on hover
          backgroundColor: "#3498db", // Changes background color
          color: "#fff", // Changes text color
        }}
        whileTap={{
          scale: 0.9, // Shrinks slightly when clicked
          backgroundColor: "#2980b9", // Darker shade on tap
        }}
        transition={{ type: "spring", stiffness: 300 }} // Spring effect
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "10px",
          backgroundColor: "#3498db", 
          color: "#fff",
        }}
      >
        Send
      </motion.button>
        </form>
    </div>
  )
}
