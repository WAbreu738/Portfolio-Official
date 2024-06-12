import React from 'react';

function Contact() {
  return (

    <div id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center mb-8">Contact Me</h1>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="max-w-xl mx-auto p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <input type="hidden" name="access_key" value="5466d89d-a371-43f3-b04c-d5448c96ed9d" />
          <input type="hidden" name="subject" value="New Message From User" />

          <div className="mb-4">
            <label htmlFor="formName" className="block text-lg text-primary-dark dark:text-primary-light mb-2">Enter Your Name</label>
            <input
              id="formName"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="formEmail" className="block text-lg text-primary-dark dark:text-primary-light mb-2">Email address</label>
            <input
              id="formEmail"
              name="email"
              type="email"
              placeholder="Enter email"
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="formMessage" className="block text-lg text-primary-dark dark:text-primary-light mb-2">Type Your Message</label>
            <textarea
              id="formMessage"
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            />
          </div>

          <button
            type="submit"
            className="font-general-medium w-full sm:w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

  );
}

export default Contact;

