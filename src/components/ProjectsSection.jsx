import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Çeviri Modellerinin Test ve Analizi",
    description:
    "This project compares the performance of three open-source translation models (NLLB, Helsinki-NLP, emre/opus-mt) for Turkish-to-English translation. Models are evaluated based on accuracy (BLEU, ROUGE-L, METEOR), inference time (CPU/GPU), VRAM usage, licensing, and use-case suitability.",
    image: "/projects/ceviri_modelleri.png",
    tags: ["Python", "LLM Models", "API", "jupyter Notebook"],
    githubUrl: "https://github.com/baris070/Ceviri-Modellerinin-Performans-Testi-Analizi",
  },
  {
    id: 2,
    title: "Duygu Sınıflandırma Modeli Eğitimi WandB Entegrasyonu - FER2013",
    description:
    "A deep learning project focused on emotion classification using the FER2013 dataset. The fine-tuned MobileNetV2 model was trained with data augmentation and evaluated using metrics such as accuracy, loss curves, confusion matrix, and ROC-AUC. Weights & Biases (WandB) was integrated for real-time experiment tracking and visualization.",
    image: "/projects/fer2013.png",
    tags: ["Python", "FER2013", "WandB", "Data Augmentation", "MobileNetV2-finetuned"],
    githubUrl: "https://github.com/baris070/Duygu-Siniflandirma-Modeli-Egitimi-WandB-Entegrasyonu-FER2013-",
  },
  {
    id: 3,
    title: "Restoran Web Sitesi",
    description:
    "A responsive menu website where users can explore various food and beverage categories such as cold drinks, hot drinks, snacks, desserts, and breakfast items. Designed with a user-friendly interface for easy navigation and quick access to product details. Built using HTML, CSS, JavaScript, and jQuery.",
    image: "/projects/volvox.png",
    tags: ["HTML", "CSS", "JavaScript", "jQuery"],
    githubUrl: "https://github.com/baris070/restorant-men-web-sites-uygulamas-?tab=readme-ov-file#proje-hakk%C4%B1nda",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of my recent work showcasing different technologies and approaches. 
            Each project represents a unique challenge solved with careful attention to detail and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-2xl bg-secondary/20 border border-primary/10 p-2">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background/90 backdrop-blur-sm border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background/90 backdrop-blur-sm border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-1 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">
                      Project {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent rounded-full"></div>
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center space-x-2 px-6 py-3 rounded-full bg-secondary/80 hover:bg-secondary border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <Github className="h-4 w-4 text-muted-foreground group-hover/btn:text-primary transition-colors" />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                  
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center space-x-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <ExternalLink className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <a
              href="https://github.com/baris070"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button w-fit flex items-center gap-3 px-8 py-4 rounded-full bg-background hover:bg-secondary/50 transition-all duration-300 group"
            >
              <span className="font-medium">View All Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Explore more projects and contributions on my GitHub profile
          </p>
        </div>
      </div>
    </section>
  );
};