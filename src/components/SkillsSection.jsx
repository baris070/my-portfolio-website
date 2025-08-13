import { useState } from "react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: "🎨" },
  { name: "JavaScript", level: 55, category: "frontend", icon: "⚡" },
  { name: "React", level: 10, category: "frontend", icon: "⚛️" },
  { name: "Tailwind CSS", level: 30, category: "frontend", icon: "🎯" },
  { name: "TypeScript", level: 45, category: "frontend", icon: "📘" },

  // Backend
  { name:"SQL Server", level: 90, category: "backend", icon: "🗄️" },
  { name:"Python", level: 70, category: "backend", icon: "🐍" },

  // Tools
  { name: "Git/GitHub", level: 70, category: "tools", icon: "🔧" },
  { name: "VS Code", level: 95, category: "tools", icon: "💻" }, 
  { name: "Visual Studio", level: 80, category: "tools", icon: "🔨" },
  { name: "Jupyter Notebook", level: 80, category: "tools", icon: "📊" },
  { name: "PyCharm Editor", level: 70, category: "tools", icon: "🛠️" },
];

const categories = [
  { id: "all", name: "All Skills", count: skills.length },
  { id: "frontend", name: "Frontend", count: skills.filter(s => s.category === "frontend").length },
  { id: "backend", name: "Backend", count: skills.filter(s => s.category === "backend").length },
  { id: "tools", name: "Tools", count: skills.filter(s => s.category === "tools").length }
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const getSkillLevel = (level) => {
    if (level >= 90) return { text: "Expert", color: "text-green-500", bg: "bg-green-500" };
    if (level >= 70) return { text: "Advanced", color: "text-blue-500", bg: "bg-blue-500" };
    if (level >= 50) return { text: "Intermediate", color: "text-yellow-500", bg: "bg-yellow-500" };
    return { text: "Beginner", color: "text-orange-500", bg: "bg-orange-500" };
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels. 
            Each skill represents hands-on experience and continuous learning.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-background/50 text-muted-foreground hover:bg-background/80 hover:text-foreground border border-primary/10"
              }`}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.id 
                    ? "bg-primary-foreground/20 text-primary-foreground" 
                    : "bg-primary/10 text-primary"
                }`}>
                  {category.count}
                </span>
              </span>
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary rounded-xl"></div>
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const skillLevel = getSkillLevel(skill.level);
            return (
              <div
                key={skill.name}
                className="group relative bg-background/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{skill.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                        <span className={`text-sm font-medium ${skillLevel.color}`}>
                          {skillLevel.text}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{skill.level}%</div>
                    </div>
                  </div>

                  {/* Progress Ring */}
                  <div className="relative w-full h-3 bg-secondary/50 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full"></div>
                    <div
                      className={`h-full ${skillLevel.bg} rounded-full relative overflow-hidden transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                    </div>
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i < Math.floor(skill.level / 20)
                              ? skillLevel.bg
                              : "bg-secondary/50"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {skill.category}
                    </span>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-background/30 border border-primary/10">
            <div className="text-3xl font-bold text-primary mb-2">
              {skills.filter(s => s.level >= 90).length}
            </div>
            <div className="text-sm text-muted-foreground">Expert Level</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-background/30 border border-primary/10">
            <div className="text-3xl font-bold text-primary mb-2">
              {skills.filter(s => s.level >= 70).length}
            </div>
            <div className="text-sm text-muted-foreground">Advanced+</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-background/30 border border-primary/10">
            <div className="text-3xl font-bold text-primary mb-2">
              {categories.find(c => c.id === "frontend")?.count}
            </div>
            <div className="text-sm text-muted-foreground">Frontend</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-background/30 border border-primary/10">
            <div className="text-3xl font-bold text-primary mb-2">
              {categories.find(c => c.id === "tools")?.count}
            </div>
            <div className="text-sm text-muted-foreground">Tools</div>
          </div>
        </div>
      </div>
    </section>
  );
};