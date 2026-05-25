import { useState, useEffect } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import sbrPhoto from "@/imports/sbr.jpg";
import {
  Menu,
  X,
  Flame,
  Zap,
  Car,
  Headphones,
  Shield,
  MapPin,
  Gift,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  Plane,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  Globe,
  Star,
  Users,
  Building,
} from "lucide-react";

// → connects to [REGISTRATION_URL] — developer to inject the actual registration backend URL here
const REGISTRATION_URL = "#register";

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({
  scrolled,
  menuOpen,
  setMenuOpen,
}: {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/96 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-extrabold text-base font-heading leading-none">
                S
              </span>
            </div>
            <div className="leading-none">
              <div className="font-heading font-extrabold text-foreground text-sm">
                SBR Tetci Bohol
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5">
                Technical Education Training Center
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center bg-accent text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full ml-1">
              TESDA
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Programs", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            {/* → connects to [REGISTRATION_URL] */}
            <a
              href={REGISTRATION_URL}
              title="→ connects to [REGISTRATION_URL]"
              className="hidden md:inline-flex items-center gap-1.5 bg-primary hover:bg-[#085e6d] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-3 space-y-1">
          {["Home", "Programs", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          {/* → connects to [REGISTRATION_URL] */}
          <a
            href={REGISTRATION_URL}
            title="→ connects to [REGISTRATION_URL]"
            className="block mt-2 bg-primary text-white text-center py-3 rounded-xl font-bold text-sm"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-[#0A1520]">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&h=900&fit=crop&auto=format"
          alt="Skilled welder at work — hands-on training scene"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051015]/95 via-[#0A1520]/80 to-[#0A1520]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
            <Award className="w-3.5 h-3.5 flex-shrink-0" />
            TESDA-Accredited · Tagbilaran City, Bohol
          </div>

          {/* Headline */}
          <h1 className="font-heading font-extrabold text-white leading-[1.1] text-4xl sm:text-5xl lg:text-[3.4rem]">
            Get Certified.
            <br />
            Get Hired.
            <br />
            <span className="text-accent">Build Your Future.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-xl">
            Practical TESDA-accredited skills training for Boholano job seekers,
            fresh graduates, and scholars. Real skills, real jobs — right here
            in Bohol.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            {/* → connects to [REGISTRATION_URL] */}
            <a
              href={REGISTRATION_URL}
              title="→ connects to [REGISTRATION_URL]"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-[#d4841a] text-white font-extrabold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-xl shadow-accent/25"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl text-base transition-all duration-200"
            >
              View Programs
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2.5 mt-10">
            {[
              { icon: CheckCircle, label: "TESDA Accredited" },
              { icon: Award, label: "NC I & NC II Certified" },
              { icon: Gift, label: "Free Scholarship Slots Available" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3.5 py-2 rounded-full"
              >
                <Icon className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 pointer-events-none">
        <div className="w-px h-8 bg-white animate-pulse" />
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </div>
    </section>
  );
}

// ─── Programs ─────────────────────────────────────────────────────────────────

const PROGRAMS = [
  {
    icon: Flame,
    title: "SMAW Welding",
    cert: "NC I & NC II",
    desc: "Shielded metal arc welding for construction, fabrication, and industrial work.",
    iconBg: "bg-orange-50 border-orange-100",
    iconColor: "text-orange-500",
  },
  {
    icon: Zap,
    title: "Electrical Installation & Maintenance",
    cert: "NC II",
    desc: "Wire homes and buildings safely; qualify for licensed electrician employment.",
    iconBg: "bg-yellow-50 border-yellow-100",
    iconColor: "text-yellow-500",
  },
  {
    icon: Car,
    title: "Driving — Land Transportation",
    cert: "NC II",
    desc: "Earn your professional driver's license with structured road training.",
    iconBg: "bg-sky-50 border-sky-100",
    iconColor: "text-sky-500",
  },
  {
    icon: Headphones,
    title: "Contact Center Services",
    cert: "NC II",
    desc: "Build communication and BPO skills for call center employment.",
    iconBg: "bg-violet-50 border-violet-100",
    iconColor: "text-violet-500",
  },
];

function Programs() {
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary text-primary px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            Our Courses
          </div>
          <h2 className="font-heading font-extrabold text-foreground text-3xl sm:text-4xl">
            In-Demand Skills We Teach
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-base leading-relaxed">
            All programs lead to a TESDA National Certificate — your passport to
            better employment in the Philippines and abroad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map(({ icon: Icon, title, cert, desc, iconBg, iconColor }) => (
            <div
              key={title}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/25 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center border ${iconBg} mb-4 group-hover:scale-110 transition-transform duration-200`}
              >
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              <span className="inline-block text-[10px] font-extrabold text-primary bg-secondary px-2 py-0.5 rounded-full uppercase tracking-wider">
                {cert}
              </span>
              <h3 className="font-heading font-bold text-foreground text-base mt-2 mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                Learn More
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#programs"
            className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            View All Programs
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────

const WHY_FEATURES = [
  {
    icon: Shield,
    title: "TESDA Assessment Center",
    desc: "Get assessed and certified right on-site — no need to travel to other cities. Faster certification, less cost.",
  },
  {
    icon: MapPin,
    title: "Mobile & Outreach Training",
    desc: "We go to your community. Our trainers bring skills programs to municipalities across Bohol.",
  },
  {
    icon: Gift,
    title: "Scholarship & Free Training",
    desc: "Partner-funded training slots available for qualified scholars and low-income families.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: features */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
              Why SBR Tetci
            </div>
            <h2 className="font-heading font-extrabold text-foreground text-3xl sm:text-4xl mb-8 leading-tight">
              Built for Real Results,
              <br />
              <span className="text-primary">Not Just Certificates.</span>
            </h2>
            <div className="space-y-7">
              {WHY_FEATURES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/20">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-foreground text-base mb-1">
                      {title}
                    </div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-primary/10 aspect-[4/3]">
              <ImageWithFallback
                src={sbrPhoto}
                alt="SBR Tetci Bohol graduation ceremony — graduates with faculty and officials"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1520]/30 to-transparent" />
            </div>
            {/* Floating stat — graduates */}
            <div className="absolute -bottom-5 -left-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-border">
              <div className="font-heading font-extrabold text-primary text-2xl leading-none">
                500+
              </div>
              <div className="text-muted-foreground text-xs mt-0.5 font-medium">
                Certified Graduates
              </div>
            </div>
            {/* Floating stat — programs */}
            <div className="absolute -top-5 -right-4 bg-accent rounded-xl px-4 py-3 shadow-xl">
              <div className="font-heading font-extrabold text-white text-2xl leading-none">4</div>
              <div className="text-white/80 text-xs mt-0.5 font-medium">TESDA Programs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Who We Serve ─────────────────────────────────────────────────────────────

const WHO_WE_SERVE = [
  { icon: Briefcase, label: "Job Seekers" },
  { icon: GraduationCap, label: "Fresh Graduates" },
  { icon: Award, label: "TESDA Scholars" },
  { icon: Heart, label: "Disaster-Affected Residents" },
  { icon: Plane, label: "OFW Aspirants" },
];

function WhoWeServe() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary text-primary px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            Who We Serve
          </div>
          <h2 className="font-heading font-extrabold text-foreground text-3xl sm:text-4xl">
            Built for Bohol's Workforce
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-base leading-relaxed">
            We train everyday Boholanos who are ready to level up their careers —
            whatever their starting point.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {WHO_WE_SERVE.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex items-center gap-3 bg-card border border-border hover:border-primary/30 hover:bg-secondary px-5 py-4 rounded-2xl transition-all duration-200 cursor-default"
            >
              <div className="w-10 h-10 bg-secondary group-hover:bg-primary rounded-xl flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-200" />
              </div>
              <span className="font-heading font-semibold text-foreground text-sm whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Impact (Stats + Testimonials) ───────────────────────────────────────────

const STATS = [
  { icon: Users, value: "500+", label: "Graduates" },
  { icon: Building, value: "10+", label: "Partner Agencies" },
  { icon: Award, value: "4", label: "TESDA Programs" },
  { icon: MapPin, value: "3", label: "Municipalities Served" },
];

const TESTIMONIALS = [
  {
    name: "Maria Santos",
    course: "SMAW Welding NC II",
    quote:
      "I had no job for two years. After SBR Tetci's welding program, I was hired in Cebu City within a month. Best decision I ever made.",
    avatar:
      "https://images.unsplash.com/photo-1770235622059-f544451fbe94?w=100&h=100&fit=crop&auto=format",
    rating: 5,
  },
  {
    name: "Eduardo Reyes",
    course: "Electrical Installation NC II",
    quote:
      "The trainers are hands-on and patient. The TESDA Assessment was done right here on-site. I am now a licensed electrician working in Tagbilaran.",
    avatar:
      "https://images.unsplash.com/photo-1656413089784-11a11edbf864?w=100&h=100&fit=crop&auto=format",
    rating: 5,
  },
  {
    name: "Jenny Alonzo",
    course: "Contact Center Services NC II",
    quote:
      "I was a housewife with no work experience. SBR Tetci gave me the confidence and skills to land my first BPO job. Now I'm supporting my family.",
    avatar:
      "https://images.unsplash.com/photo-1731027488418-ef5a05b2d71b?w=100&h=100&fit=crop&auto=format",
    rating: 5,
  },
];

function Impact() {
  return (
    <section className="py-20 bg-[#0A1520]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="w-12 h-12 bg-primary/20 border border-primary/25 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="font-heading font-extrabold text-white text-3xl leading-none">
                {value}
              </div>
              <div className="text-white/45 text-sm mt-1.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/60 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            Graduate Stories
          </div>
          <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl">
            Our Graduates Speak
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, course, quote, avatar, rating }) => (
            <div
              key={name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors duration-200"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-white/75 text-sm leading-relaxed mb-5">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <img
                  src={avatar}
                  alt={name}
                  className="w-10 h-10 rounded-full object-cover bg-primary/20 flex-shrink-0"
                />
                <div>
                  <div className="font-heading font-bold text-white text-sm">{name}</div>
                  <div className="text-white/40 text-xs mt-0.5">{course}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="bg-accent py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
          Limited Scholarship Slots Available
        </div>
        <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
          Ready to Start Your Training?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Register now and take the first step toward a certified, in-demand
          career — right here in Bohol.
        </p>
        {/* → connects to [REGISTRATION_URL] */}
        <a
          href={REGISTRATION_URL}
          title="→ connects to [REGISTRATION_URL]"
          className="inline-flex items-center gap-2 bg-white text-accent hover:bg-white/90 font-extrabold px-10 py-4 rounded-xl text-lg transition-all duration-200 shadow-2xl"
        >
          Get Started Today
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="text-white/50 text-xs mt-5">
          Free registration · No commitment required · Talk to a trainer first
        </p>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer id="contact" className="bg-[#06111A] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand + contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-base font-heading">S</span>
              </div>
              <div>
                <div className="font-heading font-extrabold text-white text-sm">
                  SBR Tetci Bohol
                </div>
                <div className="text-white/35 text-[10px] mt-0.5">
                  Technical Education Training Center Inc.
                </div>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-5">
              Practical Skills Training for Real-World Success in Bohol.
              TESDA-accredited institution serving Tagbilaran City and
              surrounding municipalities.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:sbrtetci.bohol@gmail.com"
                className="flex items-center gap-2.5 text-white/55 hover:text-white text-sm transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                sbrtetci.bohol@gmail.com
              </a>
              <a
                href="tel:+63384127025"
                className="flex items-center gap-2.5 text-white/55 hover:text-white text-sm transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                (038) 412 7025
              </a>
              <div className="flex items-start gap-2.5 text-white/55 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                Tagbilaran City, Bohol, Philippines
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-heading font-bold text-white text-sm mb-4">Quick Links</div>
            <div className="space-y-2.5">
              {["Home", "Programs", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white/45 hover:text-white text-sm transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social + accreditation */}
          <div>
            <div className="font-heading font-bold text-white text-sm mb-4">Connect</div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white/45 hover:text-white text-sm transition-colors duration-200 mb-6"
            >
              <Globe className="w-4 h-4 text-primary" />
              SBR Tetci Bohol
            </a>
            <div className="mt-4">
              <div className="font-heading font-bold text-white text-sm mb-3">
                Accreditation
              </div>
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/25 text-primary px-3 py-2 rounded-lg text-xs font-bold">
                <Shield className="w-4 h-4" />
                TESDA Accredited
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/25 text-xs">
            © 2025 SBR Tetci Bohol — Technical Education Training Center Inc.
          </div>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/25 hover:text-white/55 text-xs transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <a
              href="https://www.tesda.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-white/55 text-xs transition-colors duration-200"
            >
              TESDA Official Site ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} />
      <main>
        <Hero />
        <Programs />
        <WhyChooseUs />
        <WhoWeServe />
        <Impact />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
