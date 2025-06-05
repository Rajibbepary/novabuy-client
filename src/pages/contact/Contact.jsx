import { useState } from "react";
import { toast } from "react-toastify";



const Contact = () => {
     const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Simulate sending data
   console.log('Form submitted:', formData);
    toast.success('Thank you for contacting us!');
    setStatus('Thank you for contacting us!');

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

      {status && <p className="text-orange-600 mb-4">{status}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="w-full p-2 border rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600"
        >
          Send Message
        </button>
      </form>

    </div>
  );
};

export default Contact;
