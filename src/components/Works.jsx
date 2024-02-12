import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils.js/motion";

const ProjectCard = ({index,name,description,tags,image,source_code_link}) => {
   return(
    <motion.div
     variants={fadeIn('up','spring',index * 0.5,0.75)} 
    >
      <Tilt 
       options={{
        max:45,
        scale:1,
        speed:450
       }}
       className="bg-tertiary p-3 rounded-2xl sm:w-[340px] w-full"
      >
        <div className="relative w-full h-[250px]">
         <img
          src={image}
          alt={name}
          className="w-full h-full object-fill hover:object-scale-down rounded-2xl "
         />

        <div className="absolute inset-0 flex justify-end m-3 card-image_hover">
          <div
           onClick={()=> window.open(source_code_link,"_blank")}
           className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
           <img
             src={github}
             alt="github"
             className="w-10 h-10 object-contain"
           />
          </div>
        </div>
        </div>
        <div className="mt-5">
           <h3 className="text-white font-bold text-[24px]">
            {name}
          </h3>
           <p className="mt-2 text-secondary text-[17px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
         <h3 className="text-[13.5px]">Technologies and Frameworks:</h3>
          {tags.map((tag)=>(
            <p 
             key={tag.name}
             className={`text-[14.5px] ${tag.color}`}
            >
             #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
   )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mt-0 text-center`}>
          MY WORK
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className="mt-3 text-secondary text-[22px] mx-w-3xl leading-[30px]"
        >
        Following projects showcase my skills and experience through Real world examples of my work. Each project is briefly described with links
        to code repositories in it. It reflects my ability to solve Complex problems, work with different technologies and manage
        projects effectively.    
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project,index)=>(
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works,"projects");
