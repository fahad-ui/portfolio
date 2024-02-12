import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils.js/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAccusoft,
} from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setIsLoading] = useState(false);


  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    let newErrors = {}
    Object.keys(form).forEach((key)=>{
      if(!form[key]){
        newErrors[key] = `Please enter ${key}`
      }
    })

    if(Object.keys(newErrors).length>0){
      setErrors(newErrors)
      return
    }

    setIsLoading(true);

    emailjs
      .send(
        "service_16m29tt",
        "template_yknt8yj",
        {
          from_name: form.name,
          to_name: "Fahad",
          from_email: form.email,
          to_email: "fahadullakhan135@gmail.com",
          message: form.message,
        },
        "PjQBAI2f2Kx6sv5Xm"
      )
      .then(() => {
        setIsLoading(false);
        alert("Thankyou. I will get back to you soon.");

        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (error) => {
            console.log(error);
            alert("Something went wrong.");
          }
        );
      });
  };

  return (
    <div className="xl:mt-10 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="flex items-center justify-start gap-2">
        <FontAwesomeIcon icon={faAccusoft} className="w-12 h-8" color="#DD0031" />
        <h5 className="text-[16px] font-semibold mt-3">+91 6360596812</h5>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text:white rounded-lg outlined-none border-none font-medium"
            />
            {errors.name && <p>{errors.name}</p>}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email id?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text:white rounded-lg outlined-none border-none font-medium"
            />
            {errors.email && <p>{errors.email}</p>}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text:white rounded-lg outlined-none border-none font-medium"
            />
            {errors.message && <p>{errors.message}</p>}
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {errors ? "send" : loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
