import { Briefcase, Code, User, ArrowRight, Sparkles, Brain, Globe } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">

      <div className="container mx-auto max-w-7xl">
        {/* Header with Floating Badge */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">About Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Building the Future with
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Code & Creativity
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content - Takes up more space */}
          <div className="lg:col-span-7 space-y-8">
            {/* Hero Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-800 animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Mehmet Ali Bilici</h3>
                    <p className="text-purple-300 font-medium">Computer Engineer & AI Enthusiast</p>
                  </div>
                </div>

                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    I'm a passionate Computer Engineer focused on solving real-world problems through 
                    <span className="text-purple-400 font-semibold"> artificial intelligence</span>, 
                    <span className="text-blue-400 font-semibold"> natural language processing</span>, and 
                    <span className="text-purple-400 font-semibold"> innovative web solutions</span>.
                  </p>
                  <p>
                    With hands-on experience in mobile development and testing, I thrive in collaborative 
                    environments where creativity meets technology. I believe in learning by doing and 
                    building solutions that create meaningful impact.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  {['React', 'Node.js', 'Python', 'AI/ML', 'Mobile Dev'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Ready to collaborate?</h4>
                    <p className="text-slate-400">Let's build something amazing together</p>
                  </div>
                  <a href="#contact" className="group/btn relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                    Get In Touch
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Cards - Smaller column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Web Development */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                    <Globe className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="font-bold text-lg text-white">Web Development</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Building cross-platform web applications with modern frameworks to solve real-world challenges.
                </p>
                <div className="mt-4 flex items-center text-blue-400 text-sm font-medium">
                  <span>Explore Projects</span>
                  <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* AI Exploration */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                    <Brain className="h-6 w-6 text-purple-400" />
                  </div>
                  <h4 className="font-bold text-lg text-white">AI Exploration</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Continuing my journey in artificial intelligence to develop impactful solutions that matter.
                </p>
                <div className="mt-4 flex items-center text-purple-400 text-sm font-medium">
                  <span>View Research</span>
                  <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* Collaboration */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30">
                    <Briefcase className="h-6 w-6 text-green-400" />
                  </div>
                  <h4 className="font-bold text-lg text-white">Team Collaboration</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Enhancing teamwork and project management skills through active contribution to real-world projects.
                </p>
                <div className="mt-4 flex items-center text-green-400 text-sm font-medium">
                  <span>Join Forces</span>
                  <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};