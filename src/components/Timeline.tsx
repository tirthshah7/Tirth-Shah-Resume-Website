import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Briefcase, GraduationCap, Code, Calendar, MapPin, Award } from "lucide-react";
import { Badge } from "./ui/badge";

interface TimelineItem {
  type: 'work' | 'education' | 'project';
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  achievements: string[];
  color: string;
}

const timelineData: TimelineItem[] = [
  {
    type: 'work',
    title: 'Systems Operations Engineer (ADAS)',
    organization: 'Stellantis',
    period: 'Feb 2023 - Present',
    location: 'Detroit, MI',
    description: 'Leading ADAS operations across multiple vehicle programs, implementing ML-based diagnostics and real-time monitoring systems for 25,000+ customers.',
    skills: ['Python', 'Splunk', 'ML', 'Agile', 'SCRUM', 'KPI Dashboards'],
    achievements: [
      'Owned delivery roadmap across 3 concurrent vehicle programs',
      'Led team of 5 implementing issue/outage tracking workflows',
      'Designed 50+ KPI dashboards showing real-time feature performance',
      'Delivered diagnostics support for 25,000+ customers',
      'Collaborated with Data Science on validation metrics using ML regression'
    ],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    type: 'work',
    title: 'Personal Blog | The Inspired Edit',
    organization: 'Personal Project',
    period: 'Dec 2024 - Present',
    location: 'Windsor, ON',
    description: 'Architected and deployed a statically generated, MDX-powered content platform with AI-driven content generation and advanced SEO optimization.',
    skills: ['Next.js', 'TypeScript', 'MDX', 'OpenGraph', 'GitLab CI/CD', 'Tailwind'],
    achievements: [
      'Built MDX-powered content platform with TypeScript',
      'Integrated AI Layer for typed content schema with OpenAI',
      'Automated OpenGraph/Twitter card generation for SEO',
      'Implemented advanced UI/UX with dark mode and fuzzy search',
      'Automated GitLab CI/CD and ISR optimizations'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    type: 'work',
    title: 'Software Development Engineer 1',
    organization: 'Amazon',
    period: 'Sept 2022 - Dec 2023',
    location: 'Vancouver, BC',
    description: 'Developed end-to-end SLA monitoring pipeline and automated alerting systems, partnering with global SRE teams to improve operational stability.',
    skills: ['TypeScript', 'CloudWatch', 'Python', 'Microservices', 'AWS'],
    achievements: [
      'Built SLA monitoring pipeline with telemetry ingestion framework',
      'Created automated alerting system with DSL and real-time evaluators',
      'Partnered with global SRE teams on high-priority production issues',
      'Deployed scalable Python scripts using object-oriented principles',
      'Developed TypeScript microservices with real-time model feedback loops'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    type: 'work',
    title: 'IT Client Support',
    organization: 'University of Windsor',
    period: 'Aug 2021 - Aug 2022',
    location: 'Windsor, ON',
    description: 'Primary liaison between faculty, students, and IT teams to streamline hybrid learning adoption and classroom tech support.',
    skills: ['IT Support', 'Team Leadership', 'AV Systems', 'Troubleshooting'],
    achievements: [
      'Led team of 21 to install 40+ workstations in Data Analytics Lab',
      'Supported onboarding across 35+ Hy-Flex rooms',
      'Provided on-site diagnostics for AV systems',
      'Reduced daily support inquiries by 60% through efficient troubleshooting'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    type: 'work',
    title: 'Project Engineer',
    organization: 'Keepsake Automation LLP',
    period: 'April 2019 - Feb 2021',
    location: 'Ahmedabad, India',
    description: 'Engineered Python-based CAD nesting modules and built preprocessing automation using OpenCV and ROS integration.',
    skills: ['Python', 'OpenCV', 'ROS', 'CAD', 'OOP', 'DJD Heuristics'],
    achievements: [
      'Achieved 25% productivity improvement in material yield',
      'Built preprocessing automation extracting contours from CAD/SVG files',
      'Applied algorithms for nesting with cutting time optimization'
    ],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    type: 'education',
    title: 'Master of Electrical and Computer Engineering',
    organization: 'University of Windsor',
    period: '2021 - 2023',
    location: 'Windsor, CA',
    description: 'Advanced studies in AI, Machine Learning, and Systems Engineering with focus on practical applications and research.',
    skills: ['Machine Learning', 'Neural Networks', 'System Design', 'Research'],
    achievements: [
      'Specialized in AI & Machine Learning applications',
      'Completed multiple research projects in data science',
      'PMP Certification earned during studies'
    ],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    type: 'education',
    title: 'Bachelor of Technology - Instrumentation and Control',
    organization: 'L.J Institute of Engineering and Technology',
    period: '2015 - 2019',
    location: 'Ahmedabad, IN',
    description: 'Graduated with expertise in control systems, instrumentation, and industrial automation technologies.',
    skills: ['Control Systems', 'Instrumentation', 'MATLAB', 'Arduino', 'IoT'],
    achievements: [
      'Built IoT-enabled adaptive cruise control prototype',
      'Developed MATLAB control algorithms',
      'Strong foundation in industrial automation'
    ],
    color: 'from-teal-500 to-cyan-500'
  }
];

function TimelineItemComponent({ 
  item, 
  index, 
  isActive 
}: { 
  item: TimelineItem; 
  index: number; 
  isActive: boolean;
}) {
  const icons = {
    work: Briefcase,
    education: GraduationCap,
    project: Code
  };

  const Icon = icons[item.type];

  return (
    <div className="relative mb-12 sm:mb-16">
      {/* Connection line */}
      {index < timelineData.length - 1 && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-slate-600 to-transparent hidden sm:block" />
      )}

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative"
      >
        <div className="flex gap-3 sm:gap-4">
          {/* Icon */}
          <motion.div
            className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg z-10`}
            animate={{
              scale: isActive ? 1.2 : 1,
              boxShadow: isActive 
                ? '0 0 30px rgba(6, 182, 212, 0.6)' 
                : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </motion.div>

          {/* Content */}
          <motion.div
            className={`flex-1 p-4 sm:p-5 bg-slate-800/50 backdrop-blur-sm border rounded-lg transition-all ${
              isActive ? 'border-cyan-500/70 shadow-lg shadow-cyan-500/20' : 'border-slate-700/50'
            }`}
            animate={{
              scale: isActive ? 1.02 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-3">
              <div>
                <h3 className="text-cyan-400 mb-1 text-base sm:text-lg">{item.title}</h3>
                <p className="text-slate-300 mb-2 text-sm sm:text-base">{item.organization}</p>
                <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    {item.location}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-slate-400 mb-4 text-sm sm:text-base">{item.description}</p>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm text-slate-300">Key Achievements</span>
              </div>
              <ul className="space-y-1 ml-4 sm:ml-6">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-400 list-disc">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="border-cyan-500/30 text-cyan-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function AnimatedVisual({ item, isActive }: { item: TimelineItem; isActive: boolean }) {
  const icons = {
    work: Briefcase,
    education: GraduationCap,
    project: Code
  };

  const Icon = icons[item.type];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isActive ? 1 : 0.3, 
        scale: isActive ? 1 : 0.8,
        filter: isActive ? 'blur(0px)' : 'blur(10px)'
      }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Animated background circles */}
        <motion.div
          className={`absolute w-96 h-96 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-3xl`}
          animate={{
            scale: isActive ? [1, 1.2, 1] : 1,
            rotate: isActive ? 360 : 0
          }}
          transition={{
            scale: { duration: 4, repeat: Infinity },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        />

        <div className="relative z-10 max-w-2xl px-4">
          {/* Large Icon */}
          <motion.div
            className={`w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-2xl`}
            animate={{
              y: isActive ? [0, -20, 0] : 0,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-16 h-16 text-white" />
          </motion.div>

          {/* Title and Organization */}
          <motion.div
            className="text-center mb-8"
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 20
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {item.title}
            </h2>
            <p className="text-xl text-slate-300">{item.organization}</p>
            <p className="text-slate-400 mt-2">{item.period}</p>
          </motion.div>

          {/* Floating Skills */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            animate={{
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {item.skills.slice(0, 5).map((skill, i) => (
              <motion.div
                key={skill}
                className={`px-6 py-3 bg-gradient-to-r ${item.color} rounded-full shadow-lg`}
                animate={{
                  y: isActive ? [0, -10, 0] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              >
                <span className="text-white">{skill}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Counter */}
          <motion.div
            className="grid grid-cols-3 gap-4 mt-12"
            animate={{
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {item.achievements.slice(0, 3).map((achievement, i) => (
              <motion.div
                key={i}
                className="text-center p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg"
                animate={{
                  scale: isActive ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              >
                <div className={`text-2xl mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {i + 1}
                </div>
                <p className="text-xs text-slate-400 line-clamp-2">{achievement}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const items = containerRef.current.querySelectorAll('[data-timeline-item]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemTop = rect.top + window.scrollY;
        const itemBottom = itemTop + rect.height;

        if (scrollPosition >= itemTop && scrollPosition <= itemBottom) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 px-4 relative" id="timeline">
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <p className="text-slate-400">
            My journey through technology and innovation
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden">
          <div ref={containerRef} className="relative">
            {timelineData.map((item, index) => (
              <div key={index} data-timeline-item>
                <TimelineItemComponent
                  item={item}
                  index={index}
                  isActive={activeIndex === index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-[70%_30%] gap-8 relative">
          {/* Left side - Animated Visual (70%) */}
          <div className="relative lg:sticky lg:top-24 h-[600px] overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
            {timelineData.map((item, index) => (
              <AnimatedVisual
                key={index}
                item={item}
                isActive={activeIndex === index}
              />
            ))}
          </div>

          {/* Right side - Timeline (30%) */}
          <div ref={containerRef} className="relative">
            {timelineData.map((item, index) => (
              <div key={index} data-timeline-item>
                <TimelineItemComponent
                  item={item}
                  index={index}
                  isActive={activeIndex === index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
