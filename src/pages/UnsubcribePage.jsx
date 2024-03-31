import { unsubcribe } from '@/apis';
import { validateEmail } from '@/utils/validates';
import { useState } from 'react';

const UnsubcribePage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = validateEmail(email);

  const handleUnSubcribe = async () => {
    setIsLoading(true);
    const { notice } = await unsubcribe(email.trim());
    setIsLoading(false);

    alert(notice);
    setEmail('');
  };
  return (
    <div className='w-full h-[400px] flex flex-col justify-center items-center gap-10'>
      <h1 className='font-bold text-[18px]'>
        Enter your email to unsubscribe from daily weather forecast
      </h1>
      <div className='relative'>
        <input
          type='text'
          className={`w-[400px] p-5 rounded-md border-solid border-[2px] border-gray-300 outline-none`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Input your email'
        />
        {email && !isValidEmail ? (
          <p className='text-red-500 absolute bottom-[-30px]'>
            Your email is invalid
          </p>
        ) : (
          ''
        )}
      </div>
      <button
        disabled={!isValidEmail}
        onClick={handleUnSubcribe}
        className='w-[400px] p-5 rounded-md bg-red-500 text-white font-bold'
      >
        {isLoading ? 'Loading ...' : 'Unsubcribe'}
      </button>
    </div>
  );
};

export default UnsubcribePage;
