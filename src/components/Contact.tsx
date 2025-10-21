import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Using Formspree - sending emails to theinspiredtechlabs@gmail.com
      const response = await fetch('https://formspree.io/f/mzzjqyrw', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-4 relative" id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-slate-400">
            Let's build something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="mb-4 sm:mb-6 text-cyan-400 text-lg sm:text-xl">Let's Connect</h3>
              <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:border-cyan-500/50 transition-colors">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-slate-400">Email</p>
                  <p className="text-slate-200 text-sm sm:text-base truncate">theinspiredtechlabs@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:border-cyan-500/50 transition-colors">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-400">Location</p>
                  <p className="text-slate-200 text-sm sm:text-base">Windsor, ON / Detroit, MI</p>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8">
              <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">Available for freelance work and collaboration</p>
              <div className="flex gap-2 items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm text-green-400">Currently available</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    className="bg-slate-800/50 border-slate-700/50 focus:border-cyan-500 text-slate-200 placeholder:text-slate-500"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-slate-800/50 border-slate-700/50 focus:border-cyan-500 text-slate-200 placeholder:text-slate-500"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    className="bg-slate-800/50 border-slate-700/50 focus:border-cyan-500 text-slate-200 placeholder:text-slate-500"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    className="bg-slate-800/50 border-slate-700/50 focus:border-cyan-500 text-slate-200 placeholder:text-slate-500 resize-none"
                    required
                  />
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                  <AlertCircle className="w-4 h-4" />
                  <span>Failed to send message. Please try again or email me directly.</span>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-slate-800 text-center"
        >
          <p className="text-slate-500">
            © 2025 Tirth Shah. Built with React, Tailwind CSS, and Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
