'use client';
import { useState } from 'react';

export function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameChange = event => {
    event.preventDefault();
    setFirstName(event.target.value);
    setSubmitted(false);
  };

  const handleLastNameChange = event => {
    event.preventDefault();
    setLastName(event.target.value);
    setSubmitted(false);
  };

  const handleEmailChange = event => {
    event.preventDefault();
    setEmail(event.target.value);
    setSubmitted(false);
  };

  const handleMessageChange = event => {
    event.preventDefault();
    setMessage(event.target.value);
    setSubmitted(false);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className='pt-20 p-5 ' id='contact'>
        <div className='text-white font-bold text-4xl 2xl:text-6xl text-center mb-20'>
          Dev Contact
        </div>
        <div className='flex items-center justify-center'>
          <div className='w-full p-3 lg:max-w-[800px] xl:w-1/2 4xl:max-w-[1200px]'>
            <div className='bg-[rgb(36,41,47)] w-full rounded-t-2xl sm:rounded-2xl shadow-lg'>
              <div className='bg-[#161b22] h-[5vh] sm:h-[4vh] lg:h-[3vh] 2xl:h-[3vh] 4xl:h-[3vh] rounded-t-2xl '>
                <div className='flex justify-between w-[8vh] sm:w-[6vh] h-full items-center ml-5'>
                  <div className='bg-green-300 w-[1.5vh] h-[1.5vh] sm:w-[1vh] sm:h-[1vh] rounded-full'></div>
                  <div className='bg-orange-300 w-[1.5vh] h-[1.5vh] sm:w-[1vh] sm:h-[1vh] rounded-full'></div>
                  <div className='bg-red-500 w-[1.5vh] h-[1.5vh] sm:w-[1vh] sm:h-[1vh] rounded-full'></div>
                </div>
              </div>
              <div className='overflow-auto flex-grow h-auto text-sm text-white tracking-widest font-mono'>
                <div className='p-2'>
                  <code>
                    <pre className='text-md'>
                      <span className='comment'>
                        Please enter your information in the input boxes and
                        {'\n'}
                        click Run to reach out to me at prabinbasnet09@gmail.com
                        {'\n'}
                        {'\n'}
                      </span>
                      <span className='keyword'>public</span> class{' '}
                      <span className='className'>Contact</span> {'{'}
                      {'\n'} {'\t'}
                      <span className='keyword'>public</span> static{' '}
                      <span className='keyword'>void</span> main(String[] args){' '}
                      {'{'}
                      {'\n'} {'\t'} {'\t'}
                      <span className='variable'>String</span>{' '}
                      <span className='variableName'>firstName</span> ={' '}
                      <input
                        type='text'
                        value={firstName}
                        onChange={handleFirstNameChange}
                        className='rounded-md mt-1 p-1 text-black'
                      />
                      ;{'\n'} {'\t'} {'\t'}
                      <span className='variable'>String</span>{' '}
                      <span className='variableName'>last_name</span> ={' '}
                      <input
                        type='text'
                        value={lastName}
                        onChange={handleLastNameChange}
                        className='rounded-md mt-1 p-1 text-black'
                      />
                      ;{'\n'} {'\t'} {'\t'}
                      <span className='variable'>String</span>{' '}
                      <span className='variableName'>userEmail</span> ={' '}
                      <input
                        type='text'
                        value={email}
                        onChange={handleEmailChange}
                        className='rounded-md mt-1 p-1 text-black'
                      />
                      ;{'\n'} {'\t'} {'\t'}
                      <span className='variable'>String</span>{' '}
                      <span className='variableName'>message_1</span> ={' '}
                      <input
                        type='text'
                        value={message}
                        onChange={handleMessageChange}
                        className='rounded-md mt-1 p-1 text-black'
                      />
                      ;{'\n'} {'\t'} {'\t'}
                      <div className='mt-[0.5]'></div>
                      {'\n'} {'\t'} {'\t'}
                      <span className='text-red-500'>System</span>
                      .out.println(&quot;
                      <span className='output'>Thank you</span>&quot; +
                      firstName + &quot; &quot; + last_name + {'\n'} {'\t'}{' '}
                      {'\t'}&quot;
                      <span className='output'>
                        for contacting me. I will get back to you as soon as
                        possible.
                      </span>
                      {'\n'} {'\t'} {'\t'}&quot;
                      <span className='output'>Your message:</span> &quot; +
                      message_1);
                      {'\n'} {'\t'}
                      {'}'}
                      {'\n'}
                      {'}'}
                    </pre>
                  </code>
                  <button
                    className='bg-[#fff] text-black pl-3 pr-3 mt-5 mb-5'
                    type='submit'
                    onClick={handleSubmit}
                  >
                    Run
                  </button>
                </div>
              </div>
              <div className='bg-black min-h-[100px] rounded-b-lg'>
                <div className='p-1 text-white font-extralight text-xs shadow shadow-[#363636] '>
                  Console
                </div>
                {submitted &&
                email.length !== 0 &&
                firstName.length !== 0 &&
                lastName !== 0 &&
                message.length !== 0 ? (
                  <div className='p-2 text-white font-mono '>
                    Thank you {firstName} {lastName} for contacting me. I will
                    get back to you as soon as possible. Your message: {message}{' '}
                  </div>
                ) : submitted &&
                  (email.length === 0 ||
                    firstName.length === 0 ||
                    lastName === 0 ||
                    message.length === 0) ? (
                  <div className='p-2 text-red-500 text-sm'>
                    Error! Please enter all the inputs.
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
