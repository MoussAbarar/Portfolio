import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact(){

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current['name'].value.trim();
    const email = form.current['from_email'].value.trim();
    const message = form.current['message'].value.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Invalid email address!");
      return;
    }

    emailjs
      .sendForm(
        "service_4tmucho",
        "template_0g1bply",
        form.current,
        "nj-EBwv5n-PNojepC"
      )
      .then(
        (result) => {
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send the message. Try again!');
        }
      )
  }

    return(
        <section
      id="contact"
      className="py-16 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-10 text-gray-600 dark:text-gray-300">
          Have a project in mind or just want to say hi? Fill the form below or reach out via social media.
        </p>

        <form className="space-y-6 mb-10" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            rows="5"
            placeholder="Your Message"
            name="message"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            name="send"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

      <ToastContainer position="top-center" autoClose={3000} />

        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-medium">Or reach me on:</p>
          <div className="flex gap-6 text-2xl mt-2">
            <a
              href="https://github.com/MoussAbarar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sofiane-abarar-091032337"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/sofiane.abarar.7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/213676030263"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Phone: +213 676030263</p>
        </div>
      </div>
    </section>
    )
}