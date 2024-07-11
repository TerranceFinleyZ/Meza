import './Contact.css'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "/");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
    } else {
      console.log("Error", data);
      
    }
  };
  
  return (
    <div className='con'>
      <form onSubmit={onSubmit}>
        <h5>Get a Website!</h5>
        <input type='text' id='firstName' placeholder='First Name' name='name' required />
        <input type='text' id='lastName' placeholder='Last name' name='last name' required />
        <input type='email' id='email' placeholder='Email' name='email' required />
        <input type='text' id='phone' placeholder='Phone' name='phone' required />
        <textarea name='message' required>Message Us...</textarea>
        <input type='submit' value='Send' id='button' />
      </form>
    </div>
  )
}

export default Contact
