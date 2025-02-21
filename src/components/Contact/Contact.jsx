import './Contact.css';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <div className='mainContainer-contact'>
        <h1>CONTACT</h1>
        <form action="https://formsubmit.co/ameeraashique6@gmail.com" method="POST">
            <input id='nameInput' name='name' type="text" placeholder='Name' />
            <input type="email" name='email' id='emailInput' placeholder='Email' />
            <textarea id='messageInput' name='message' placeholder='Message'  rows="10" ></textarea>
            <input type="hidden" name="_captcha" value="false"/>
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
          marginBottom: "15px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
          cursor: "pointer",
          background: "linear-gradient(90deg, #667EEA, #A67D8D)",
          color: "#fff",
        }}
        type='submit'
      >
        Send
      </motion.button>
        </form>
    </div>
  )
}
