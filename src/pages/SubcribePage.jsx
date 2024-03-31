import { sendMail } from '@/apis';
import { AppContext } from '@/context/AppContext';
import { validateEmail } from '@/utils/validates';
import { useContext, useState } from 'react';

const SubcribePage = () => {
  const { currentLocation } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = validateEmail(email);

  const handleSubcribe = async () => {
    setIsLoading(true);
    const { notice } = await sendMail({
      email: email.trim(),
      location: currentLocation,
      verifiedAt: null,
    });
    setIsLoading(false);

    alert(notice);
    setEmail('');
  };

  return (
    <div className='w-full h-[400px] flex flex-col justify-center items-center gap-10'>
      <h1 className='font-bold text-[18px]'>
        Enter your email to receive daily weather forecast information at 6AM
      </h1>
      <div className='relative'>
        <input
          type='text'
          className={`max-md:w-[300px] w-[400px] p-5 rounded-md border-solid border-[2px] border-gray-300 outline-none`}
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
        className='max-md:w-[300px] w-[400px] p-5 rounded-md bg-green-500 text-white font-bold'
        onClick={handleSubcribe}
      >
        {isLoading ? 'Loading ...' : 'Subcribe'}
      </button>
    </div>
  );
};

export default SubcribePage;
