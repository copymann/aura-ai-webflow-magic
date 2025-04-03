
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & AI Architect',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    bio: '10+ years experience in AI systems and automation technologies.',
  },
  {
    name: 'David Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    bio: 'Backend specialist with expertise in scalable cloud architectures.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'ML Engineer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
    bio: 'Specialized in natural language processing and computer vision.',
  },
  {
    name: 'Marcus Kim',
    role: 'Data Scientist',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    bio: 'Expert in data visualization and predictive analytics.',
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-blue/20 to-transparent"></div>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About</span> Our Team
          </h2>
          <p className="text-theme-light/70">
            We are a team of experienced AI engineers, data scientists, and business strategists 
            dedicated to solving complex problems with intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-8px]"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-theme-blue text-sm mb-3">{member.role}</p>
                <p className="text-theme-light/70 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-white/5 rounded-2xl p-10 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Our Approach to AI Innovation</h3>
              <p className="text-theme-light/70 mb-6">
                We blend cutting-edge technology with practical business sense to create solutions 
                that deliver real results. Our process is collaborative, transparent, and focused 
                on creating sustainable value for your organization.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-theme-blue/20 rounded-full p-1 mt-1">
                    <svg className="h-4 w-4 text-theme-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Understand</h4>
                    <p className="text-sm text-theme-light/70">We dive deep into your business processes to identify automation opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-theme-blue/20 rounded-full p-1 mt-1">
                    <svg className="h-4 w-4 text-theme-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Design</h4>
                    <p className="text-sm text-theme-light/70">We architect AI solutions tailored to your specific challenges and goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-theme-blue/20 rounded-full p-1 mt-1">
                    <svg className="h-4 w-4 text-theme-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Implement</h4>
                    <p className="text-sm text-theme-light/70">We build and deploy solutions with minimal disruption to your operations.</p>
                  </div>
                </div>
              </div>
              
              <Button className="text-white bg-theme-blue hover:bg-theme-blue/90 px-8 py-6 text-base animated-button">
                Learn Our Process
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-theme-blue/20 to-theme-cyan/20 rounded-xl blur-2xl"></div>
              <div className="glass-card rounded-xl overflow-hidden p-1 relative">
                <div className="grid grid-cols-2 gap-1">
                  <div className="aspect-square overflow-hidden rounded-tl-lg bg-white/5">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Team collaboration" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-tr-lg bg-white/5">
                    <img 
                      src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
                      alt="AI technology" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-bl-lg bg-white/5">
                    <img 
                      src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Data analysis" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-br-lg bg-white/5">
                    <img 
                      src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" 
                      alt="Client meeting" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pattern-dots absolute inset-0 opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default AboutSection;
