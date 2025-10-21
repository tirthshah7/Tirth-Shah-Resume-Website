import { motion } from "motion/react";
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col sm:inline-flex sm:flex-row items-center gap-2 sm:gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Tirth Shah
            </motion.h1>
            <motion.span
              className="text-3xl sm:text-4xl"
              animate={{ 
                rotate: [0, 14, -8, 14, -4, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
            >
              👋
            </motion.span>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-300 mb-2 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="hidden sm:inline">&lt;/&gt; Developer | 🚀 Engineer | 🧠 Thinker | 🌐 Builder | 📊 Marketeer</span>
            <span className="sm:hidden">Developer | Engineer | Thinker<br />Builder | Marketeer</span>
          </motion.p>

          <motion.p
            className="text-slate-400 mb-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Blending intelligence, design, and engineering to shape next-gen experiences.
            Turning complex tech into elegant, human-first solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-500/50 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all w-full sm:w-auto"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all w-full sm:w-auto"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/10 transition-all w-full sm:w-auto"
              onClick={() => window.open('https://www.theinspirededit.com/', '_blank', 'noopener,noreferrer')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Blog
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a href="https://github.com/tirthshah7" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/tirth-shah-pmp%C2%AE-555133166/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:theinspiredtechlabs@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
}
