import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
  return (
    <main className="container mx-auto px-5 lg:px-10 pt-30 pb-20 min-h-screen">
      <div className="mb-10">
        <h1 className="font-bebas text-7xl sm:text-9xl font-bold tracking-tight text-foreground mb-4 uppercase">
          Contact
        </h1>
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          We'll get back within 24 hours
        </p>
      </div>

      <div className="border-t border-black/20 dark:border-white/20 pt-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0">
          
          {/* Left Side - Form */}
          <div className="flex-1 lg:pr-20">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col gap-3 flex-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Ahmed"
                    className="w-full bg-muted border border-transparent focus:border-primary rounded-xl px-5 py-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Hassan"
                    className="w-full bg-muted border border-transparent focus:border-primary rounded-xl px-5 py-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                <input 
                  type="email" 
                  placeholder="ahmed@email.com"
                  className="w-full bg-muted border border-transparent focus:border-primary rounded-xl px-5 py-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                <input 
                  type="text" 
                  placeholder="Order issue, return, general..."
                  className="w-full bg-muted border border-transparent focus:border-primary rounded-xl px-5 py-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Tell us what's up..."
                  className="w-full bg-muted border border-transparent focus:border-primary rounded-xl px-5 py-4 text-foreground outline-none transition-colors resize-none placeholder:text-muted-foreground/50"
                />
              </div>

              <button 
                type="button"
                className="mt-6 w-full bg-primary text-primary-foreground font-bold uppercase tracking-widest py-5 rounded-xl transition hover:opacity-90 active:scale-[0.99]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Info */}
          <div className="lg:w-[350px] xl:w-[450px] lg:pl-20 lg:border-l border-black/20 dark:border-white/20 flex flex-col gap-10">
            
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</h3>
              <a href="mailto:hello@frmd.co" className="text-lg font-medium text-foreground hover:underline underline-offset-4">
                hello@frmd.co
              </a>
            </div>

            <div className="h-px w-full bg-black/20 dark:bg-white/20" />

            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Hours</h3>
              <p className="text-lg font-medium text-foreground leading-relaxed">Sun &ndash; Thu<br/>10am &ndash; 6pm EGY</p>
            </div>

            <div className="h-px w-full bg-black/20 dark:bg-white/20" />

            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Location</h3>
              <p className="text-lg font-medium text-foreground">Cairo, Egypt</p>
            </div>

            <div className="h-px w-full bg-black/20 dark:bg-white/20" />

            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Follow</h3>
              <div className="flex items-center gap-4">
                <a href="#" className="w-14 h-14 rounded-2xl border border-black/20 dark:border-white/20 flex items-center justify-center text-foreground hover:bg-muted transition-colors hover:scale-105 active:scale-95">
                  <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                </a>
                <a href="#" className="w-14 h-14 rounded-2xl border border-black/20 dark:border-white/20 flex items-center justify-center text-foreground hover:bg-muted transition-colors hover:scale-105 active:scale-95">
                  <FontAwesomeIcon icon={faTiktok} className="w-6 h-6" />
                </a>
                <a href="#" className="w-14 h-14 rounded-2xl border border-black/20 dark:border-white/20 flex items-center justify-center text-foreground hover:bg-muted transition-colors hover:scale-105 active:scale-95">
                  <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
