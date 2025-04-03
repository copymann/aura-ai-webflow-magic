
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 text-center lg:text-left lg:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">AI Automation</span> Solutions for Business Growth
            </h1>
            
            <p className="text-lg md:text-xl text-theme-light/70 mb-8 max-w-2xl mx-auto lg:mx-0">
              We deliver technical solutions that transform how your business operates. 
              Let our AI-powered systems automate complex workflows and unlock your team's full potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="text-white bg-theme-blue hover:bg-theme-blue/90 px-8 py-6 text-base animated-button">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white px-8 py-6 text-base">
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="flex items-center">
                <div className="bg-white/10 h-12 w-12 rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-theme-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-3 text-theme-light/80">99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/10 h-12 w-12 rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-theme-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="ml-3 text-theme-light/80">Enterprise Security</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/10 h-12 w-12 rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-theme-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="ml-3 text-theme-light/80">Lightning Fast</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-theme-blue/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-theme-cyan/20 rounded-full blur-3xl"></div>
              <div className="glass-card rounded-2xl p-1 relative z-10">
                <div className="rounded-xl overflow-hidden bg-theme-dark">
                  <img 
                    src="https://images.unsplash.com/photo-1655720031605-330bb10a2d73?q=80&w=2832&auto=format&fit=crop" 
                    alt="AI Visualization" 
                    className="w-full h-auto rounded-xl mix-blend-lighten opacity-90"
                  />
                </div>
              </div>
              <div className="absolute -z-10 -inset-0.5 bg-gradient-to-r from-theme-blue to-theme-cyan rounded-2xl blur opacity-30"></div>
            </div>
            
            <div className="absolute -top-10 right-20 animate-float">
              <div className="glass-card p-4 rounded-lg max-w-[180px]">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-medium text-theme-light/70">New task completed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 left-20 animate-float" style={{ animationDelay: '2s' }}>
              <div className="glass-card p-4 rounded-lg max-w-[180px]">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="h-4 w-4 text-theme-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-medium text-theme-light/70">Workflow optimized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-blue/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
