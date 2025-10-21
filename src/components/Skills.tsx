import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Database, Cloud, Smartphone, Palette, Zap } from "lucide-react";

interface SkillCategory {
  icon: typeof Code2;
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: 'AI & Data Science',
    skills: ['Machine Learning', 'Neural Networks', 'Auto Encoders', 'KNN', 'Random Forest'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Database,
    title: 'Software Development',
    skills: ['Python', 'TypeScript', 'Next.js', 'React', 'Node.js', 'C#', 'Java'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Agile/Scrum', 'GitLab'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Smartphone,
    title: 'Specialized Tools',
    skills: ['Splunk', 'MATLAB', 'SQL', 'Azure ML', 'API Integration', 'Git'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Palette,
    title: 'Engineering',
    skills: ['Control Systems', 'Instrumentation', 'Arduino', 'ROS', 'OpenCV'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Zap,
    title: 'Leadership',
    skills: ['PMP®', 'Executive Reporting', 'Vendor Coordination', 'Mentoring', 'Agile'],
    color: 'from-indigo-500 to-purple-500'
  }
];

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative p-4 sm:p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:border-slate-600 transition-all">
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity`} />
        
        <div className="relative">
          <div className={`inline-flex p-2 sm:p-3 rounded-lg bg-gradient-to-br ${category.color} mb-3 sm:mb-4`}>
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          
          <h3 className="mb-3 sm:mb-4 text-slate-200 text-base sm:text-lg">{category.title}</h3>
          
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 sm:px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs sm:text-sm hover:bg-slate-700 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 relative" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-slate-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
