import {technologies} from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils.js/motion";
import Tech from "./Tech";


const Skills = () => {
  return (
    <>
        <motion.div variants={slideIn('right','tween',0.3,1)}>
        <p className={`${styles.sectionSubText} mt-0 text-center`}>
          Technologies I have worked on.
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills
        </h2>
        
        </motion.div>
  
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white mt-8">

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:p-0">

                {technologies.map(technologie => {
                    return(
                        <div key={technologie.name} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${technologie.style}`}>
                        <img src={technologie.icon} alt="" className="w-20 mx-auto"/>
                         <p className="mt-3">{technologie.name}</p>
                         </div>
                
                    )
                })}

            </div>
        </div>
        <Tech />
    </>
  )
}

export default Skills