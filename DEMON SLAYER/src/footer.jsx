import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage('');

    const serviceId = 'service_hyb35wm';
    const templateId = 'template_j2n8jeq';
    const userId = 'C_-jt0_1dBzGfJ-v1';

    const templateParams = {
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Xabar muvaffaqiyatli yuborildi!');
        setIsSent(true);
        setTimeout(() => {
          setStatus('');
          setIsSent(false);
        }, 3000); 
      }, (err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <footer>
      {!isSent ? (
        <form onSubmit={handleSubmit}>
          <div className='w-[100%] max-w-[1440px] mx-auto bg-[#000000a9] pt-[50px]'>
  <h1 className='text-[white] text-[40px] text-center '>Habar yuborish uchun</h1>

          </div>
          <div className='pt-[50px] pb-[50px] w-[100%] max-w-[1440px] mx-auto bg-[#000000a9] text-[white] flex justify-center gap-4 '>
          <input className='w-[400px] h-[60px] text-[30px] bg-[#4a3a3a00] border border-[white] rounded-[12px] text-center'
            type="text"
            value={message}
            onChange={handleInputChange}
            placeholder="Yoz  Bera"
            required
          />
          <button type="submit" className='text-[30px] border boreder-[white] p-[5px] w-[120px] rounded-[12px]'>Yuvar</button>
          </div>
          
         
        </form>
      ) : (
        <p>{status}</p>
      )}
      {!isSent && status && <p>{status}</p>}
    </footer>
  );
};

export default Footer;
