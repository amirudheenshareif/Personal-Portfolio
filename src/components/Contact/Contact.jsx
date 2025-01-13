import './Contact.css';

export const Contact = () => {
  return (
    <div className='mainContainer-contact'>
        <h1>CONTACT</h1>
        <form>
            <input id='nameInput' type="text" placeholder='Name' />
            <input type="email" id='emailInput' placeholder='Email' />
            <textarea id='messageInput' placeholder='Message'  rows="10" ></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}
