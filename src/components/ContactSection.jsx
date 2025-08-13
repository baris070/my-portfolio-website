import {
  Instagram,
  Linkedin,
  Mail,
  MapPin
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work <span className="text-primary">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? I'm always excited to collaborate 
            on innovative ideas and create something amazing together.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Email Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email Me</h3>
                  <p className="text-muted-foreground">Drop me a line anytime</p>
                </div>
              </div>
              <a
                href="mailto:barisbilici12@gmail.com"
                className="text-lg font-medium text-primary hover:text-primary/80 transition-colors duration-300 block"
              >
                barisbilici12@gmail.com
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="text-muted-foreground">Based in beautiful</p>
                </div>
              </div>
              <span className="text-lg font-medium">
                Antalya, Türkiye
              </span>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Connect With Me</h3>
          <div className="flex items-center justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/mehmet-ali-bilici-6b92a3168/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </a>
            <a 
              href="https://www.instagram.com/baris.biliciii" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <Instagram className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-primary/10 text-center">
          <p className="text-muted-foreground">
            © 2025 Mehmet Ali Bilici. Available for new opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};