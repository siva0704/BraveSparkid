import Image from '../Assets/image.png';
import React, { useState } from 'react';

export const ContactUs: React.FC<{}> = () => { 
    
    const [formData, setFormData] = useState({
        name: '',
        registerFor: '',
        message: '',
        termsAccepted: false,
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          termsAccepted: e.target.checked,
        });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.termsAccepted) {
          alert('Please accept the terms and conditions');
          return;
        }
        // Submit form logic here
        console.log('Form Submitted', formData);
      };

     
    return <>
   <h1>
   Contact With Us
   </h1>
   <img src={Image} alt="" />
   
   <h1>
    +91 987654321
   </h1>
   <h1>
    sparkid@gmail.com
   </h1>
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="registerFor">
              Register For
            </label>
            <select
              id="registerFor"
              name="registerFor"
              value={formData.registerFor}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="">Select an option</option>
              <option value="Franchises">Franchises</option>
              <option value="Learner">Learner</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">
              Drop Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your message"
              rows={4}
              required
            ></textarea>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="termsAccepted" className="ml-2 block text-sm text-gray-900">
              I accept the terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  
    
    </>




}