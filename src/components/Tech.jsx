import {BallCanvas} from "./canvas";
import { SectionWrapper } from "../hoc";
import {advTechnologies} from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils.js/motion";

const Tech = () => {
  return( 
  <>
  <motion.div variants={slideIn('right','tween',0.3,1)}>
        <p className={`${styles.sectionSubText} mt-0 text-center`}>
          Familiar with.
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tools
        </h2>
   </motion.div>

  <div className="flex flex-row flex-wrap justify-center gap-10 mb-0 p-0">
    {advTechnologies.map((technology,i)=>(
      <div className='w-32 h-32 flex items-center flex-col mb-0 p-0' key={i}>
        <BallCanvas icon={technology.icon}/>
        {technology.name}
      </div>
    ))}
  </div>
  </>
)};

export default SectionWrapper(Tech,"")
