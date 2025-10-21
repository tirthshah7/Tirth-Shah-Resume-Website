import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  details: string[];
}

const projects: Project[] = [
  {
    title: 'InspireNest - AI-Powered Nesting Optimization',
    description: 'Designed and built a SaaS platform combining computational geometry (No Fit Polygon, Minkowski collision) and multi-algorithm optimization (Genetic Algorithm, Simulated Annealing, Beam Search) to maximize material utilization in manufacturing.',
    image: '/InspireNest_Image.jpg',
    tags: ['FastAPI', 'Python', 'React', 'Tailwind', 'Docker', 'Computational Geometry'],
    liveUrl: 'https://inspirenest-frontend.onrender.com',
    githubUrl: 'https://github.com/tirthshah7/InspireNest',
    featured: true,
    details: [
      'No Fit Polygon & Minkowski collision detection',
      'Genetic Algorithm, Simulated Annealing, Beam Search optimization',
      'Achieved 18% faster processing with dynamic parameters',
      'Full-stack solution with FastAPI backend and React/Tailwind frontend',
      'Docker CI/CD pipeline with 2s processing on complex geometries'
    ]
  },
  {
    title: 'The Inspired Edit - Personal Blog Platform',
    description: 'Architected and deployed a statically generated, MDX-powered content platform using Next.js with TypeScript, integrating an AI Layer for typed content schema, dynamic meta tag generation with file-based SEO, and OpenAI for automated content generation.',
    image: '/TheInspiredEditBlog_Image.jpg',
    tags: ['Next.js', 'TypeScript', 'MDX', 'OpenAI', 'GitLab CI/CD', 'SEO'],
    liveUrl: 'https://www.theinspirededit.com/',
    featured: true,
    details: [
      'MDX-powered content with AI-driven generation',
      'Automated OpenGraph/Twitter card generation',
      'Advanced UI/UX with category filtering and dark mode',
      'Fuzzy search with Tailwind dark-strategy',
      'Automated GitLab CI/CD and ISR optimizations'
    ]
  },
  {
    title: 'Data Vanguard - Missing Data Imputation',
    description: 'Developed and trained neural network architectures, leveraging autoencoder and multilayer perceptron topologies to reconstruct incomplete datasets, achieving high-fidelity imputation for research applications.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    tags: ['Python', 'Neural Networks', 'Autoencoder', 'MLP', 'TensorFlow'],
    githubUrl: 'https://github.com/tirthshah7',
    details: [
      'Autoencoder and multilayer perceptron architectures',
      'High-fidelity imputation for incomplete datasets',
      'Advanced neural network topology optimization',
      'Research-focused data reconstruction'
    ]
  },
  {
    title: 'Feature Selection Algorithms',
    description: 'Enforced multiple feature-selection algorithms in conjunction with classifiers (KNN, MLP, Random Forest) and performed comparative accuracy evaluations to determine the optimal feature subset for machine learning models.',
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800',
    tags: ['Python', 'KNN', 'MLP', 'Random Forest', 'Scikit-learn'],
    githubUrl: 'https://github.com/tirthshah7',
    details: [
      'Multiple feature-selection algorithms comparison',
      'KNN, MLP, and Random Forest classifier integration',
      'Comparative accuracy evaluations',
      'Optimal feature subset determination'
    ]
  },
  {
    title: 'Adaptive Cruise Control - Arduino/MATLAB',
    description: 'Engineered an IoT enabled adaptive cruise control prototype by designing MATLAB control algorithms for distance sensing and speed regulation, interfacing them with Arduino UNO hardware, and streaming real-time performance metrics to a cloud service.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    tags: ['MATLAB', 'Arduino', 'IoT', 'Control Systems', 'Embedded'],
    githubUrl: 'https://github.com/tirthshah7',
    details: [
      'MATLAB control algorithms for distance sensing',
      'Arduino UNO hardware integration',
      'Real-time speed regulation',
      'Cloud service performance metrics streaming',
      'IoT-enabled adaptive cruise control prototype'
    ]
  },
  {
    title: 'CAD Nesting Automation',
    description: 'Engineered Python-based CAD nesting modules using OOP, Bottom-Left, and DJD heuristics, achieving 25% productivity improvement in material yield across production lines with OpenCV and ROS integration.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
    tags: ['Python', 'OpenCV', 'ROS', 'CAD', 'Computer Vision'],
    details: [
      '25% productivity improvement in material yield',
      'OOP, Bottom-Left, and DJD heuristics implementation',
      'OpenCV preprocessing automation',
      'ROS integration for robotics cutting',
      'Extraction and processing of contours from CAD/SVG files'
    ]
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={project.featured ? "sm:col-span-2" : ""}
    >
      <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/50 transition-all group overflow-hidden">
        <div className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="aspect-video overflow-hidden"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
          
          {project.featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 border-0">
                Featured
              </Badge>
            </div>
          )}
        </div>

        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-cyan-400 text-lg sm:text-xl">{project.title}</CardTitle>
          <CardDescription className="text-slate-400 text-sm sm:text-base">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="mb-4">
            <h4 className="text-xs sm:text-sm text-slate-300 mb-2">Key Features:</h4>
            <ul className="space-y-1 ml-3 sm:ml-4">
              {project.details.map((detail, i) => (
                <li key={i} className="text-xs sm:text-sm text-slate-400 list-disc">
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-slate-600 text-slate-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row gap-3 p-4 sm:p-6">
          {project.liveUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 w-full border-cyan-500/50 hover:border-cyan-500 hover:bg-cyan-500/10"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 w-full border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/10"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 relative" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-400">
            AI & Innovation projects showcasing expertise in machine learning, automation, and full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
