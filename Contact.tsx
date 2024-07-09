import './Contact.css'

const Contact = () => {
  return (
    <div className='con'>
      <form>
        <h5>Get a Website!</h5>
        <input type='text' id='firstName' placeholder='First Name' required />
        <input type='text' id='lastName' placeholder='Last name' required />
        <input type='email' id='email' placeholder='Email' required />
        <input type='text' id='phone' placeholder='Phone' required />
        <textarea required>Message Us...</textarea>
        <input type='submit' value='Send' id='button' />
      </form>
    </div>
  )
}

export default Contact
