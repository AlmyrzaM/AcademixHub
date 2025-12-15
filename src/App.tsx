import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useTransform, useMotionValue } from 'framer-motion';

const gradientText = 'bg-clip-text text-transparent bg-gradient-to-r from-[#9c8bff] via-[#3ddcff] to-[#ff8fe3]';

const sections = {
  container: 'max-w-6xl mx-auto px-6',
};

const logos = ['Google Cloud', 'Stanford Online', 'MIT OCW', 'AWS Activate', 'NVIDIA Inception'];

const features = [
  {
    icon: '🧪',
    title: 'Research Competitions',
    desc: 'Join themed sprints judged by professors and publish-ready mentors.',
  },
  {
    icon: '🚀',
    title: 'Startup Tournaments',
    desc: 'Ship fast with product coaches, pitch decks, and investor-ready feedback.',
  },
  {
    icon: '🎓',
    title: 'Portfolio-ready projects',
    desc: 'Build evidence for applications with real traction, users, and citations.',
  },
  {
    icon: '🤝',
    title: 'Mentorship & Jury feedback',
    desc: '1:1 guidance from founders, researchers, and olympiad medalists.',
  },
  {
    icon: '🏆',
    title: 'Prizes, grants & cloud credits',
    desc: 'Win ₸ prize pools, cloud credits, and micro-grants to scale.',
  },
  {
    icon: '🌍',
    title: 'Global & local opportunities',
    desc: 'Chapters on every continent with hybrid demo days and partner showcases.',
  },
];

const steps = [
  'Apply with your idea',
  'Build with guidance',
  'Pitch to experts',
  'Win prizes & recognition',
];

const audiences = ['High school students', 'Aspiring founders', 'Future researchers', 'Olympiad & IB / A-Level students', 'Students targeting top universities'];

const testimonials = [
  {
    quote: 'Academix Hub pushed me to take my ML project from idea to a funded prototype in 6 weeks.',
    name: 'Amina K.',
    role: '17, Kazakhstan | Computer Vision founder',
  },
  {
    quote: 'The mentorship and jury feedback felt like a YC batch tailored for students.',
    name: 'Leo M.',
    role: '16, UK | Robotics researcher',
  },
  {
    quote: 'I shipped a climate dashboard, won cloud credits, and landed a summer internship.',
    name: 'Priya S.',
    role: '18, India | Data science competitor',
  },
];

const stats = [
  { icon: '💰', label: 'Prize pool', value: 500000, suffix: ' ₸' },
  { icon: '☁️', label: 'Google Cloud credits', value: 25000, prefix: '$' },
  { icon: '👥', label: 'Students from top schools', value: 120, suffix: '+' },
  { icon: '🧠', label: 'Startup & Research tracks', value: 2, suffix: ' tracks' },
];

const MotionCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.01 }}
    transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    className={`glass gradient-border ${className}`}
  >
    {children}
  </motion.div>
);

const StatCard = ({ icon, label, value, prefix = '', suffix = '' }: { icon: string; label: string; value: number; prefix?: string; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 1.4, ease: 'easeOut' });
      return controls.stop;
    }
  }, [count, isInView, value]);

  return (
    <MotionCard className="p-6 flex flex-col gap-3">
      <div className="text-2xl">{icon}</div>
      <div ref={ref} className="text-3xl font-semibold">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <p className="text-slate-300">{label}</p>
    </MotionCard>
  );
};

function App() {
  return (
    <div className="relative min-h-screen bg-midnight overflow-hidden">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-20" />
      <div className="hero-bg absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-radial" />

      <main className="relative z-10 space-y-24 pb-24">
        <header className="sticky top-0 bg-midnight/60 backdrop-blur-xl border-b border-white/5 z-30">
          <div className={`${sections.container} py-4 flex items-center justify-between`}>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#9c8bff] via-[#3ddcff] to-[#ff8fe3] shadow-glow flex items-center justify-center font-semibold">
                AH
              </div>
              <div>
                <p className="font-semibold text-lg">Academix Hub</p>
                <p className="text-xs text-slate-400">Where Research Meets Startups</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 hover:bg-white/10 transition">Programs</button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 hover:bg-white/10 transition">Partners</button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 hover:bg-white/10 transition">Resources</button>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 hover:bg-white/20 transition">Join Waitlist</button>
              <button className="px-4 py-2 rounded-full text-sm font-semibold text-midnight bg-gradient-to-r from-[#9c8bff] via-[#3ddcff] to-[#ff8fe3] shadow-glow">
                Apply to Tournament
              </button>
            </div>
          </div>
        </header>

        <section className={`${sections.container} pt-6 grid lg:grid-cols-2 gap-10 items-center`}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
            <p className={`inline-block rounded-full px-4 py-2 text-sm font-medium gradient-sheen border border-white/10 shadow-glow`}>Global tournaments • Mentorship • Cloud credits</p>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight ${gradientText}`}>
              Build. Research. Compete. Win.
            </h1>
            <p className="text-lg text-slate-200 max-w-xl leading-relaxed">
              Academix Hub is the launchpad for ambitious students to ship research and startup projects, win tournaments, and unlock internships with real-world impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-full text-base font-semibold text-midnight bg-gradient-to-r from-[#9c8bff] via-[#3ddcff] to-[#ff8fe3] shadow-glow">
                Apply to Tournament
              </button>
              <button className="px-6 py-3 rounded-full text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 transition">
                Join Waitlist
              </button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-2">⚡ 6-week sprints</div>
              <div className="flex items-center gap-2">🛠️ Product & research mentors</div>
              <div className="flex items-center gap-2">🎯 Portfolio-ready outcomes</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-10 -top-10 h-32 w-32 bg-gradient-to-br from-[#9c8bff]/40 to-transparent blur-3xl" />
            <div className="absolute right-0 -bottom-12 h-40 w-40 bg-gradient-to-tl from-[#ff8fe3]/30 to-transparent blur-3xl" />
            <MotionCard className="p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Next cohort</p>
                    <p className="text-2xl font-semibold">AI + Climate Tournament</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/10">Applications open</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { title: 'Mentors', value: '28 founders' },
                    { title: 'Prize Pool', value: '₸500k + perks' },
                    { title: 'Timeline', value: '6 weeks remote' },
                  ].map((item) => (
                    <div key={item.title} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-xs text-slate-400">{item.title}</p>
                      <p className="font-semibold mt-1">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-200">
                  <div className="flex gap-3">
                    <span className="text-xl">🧠</span>
                    <div>
                      <p className="font-semibold">Research & Startup tracks</p>
                      <p className="text-slate-400">Track-specific mentors and juries.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xl">🛰️</span>
                    <div>
                      <p className="font-semibold">Global demos</p>
                      <p className="text-slate-400">Hybrid showcase with partner judges.</p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionCard>
          </motion.div>
        </section>

        <section className="relative">
          <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-[#9c8bff]/15 to-transparent blur-3xl" />
          <div className={`${sections.container} space-y-8`}>
            <div className="flex flex-col gap-3">
              <h2 className="section-heading">Momentum & credibility</h2>
              <p className="subheading">Real traction, backed by ecosystem partners and teams already shipping.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
            <MotionCard className="p-6 rounded-3xl">
              <p className="text-sm text-slate-400 mb-4">Trusted by partners</p>
              <div className="flex flex-wrap gap-4 items-center">
                {logos.map((logo) => (
                  <motion.div
                    key={logo}
                    whileHover={{ scale: 1.03 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-200"
                  >
                    {logo}
                  </motion.div>
                ))}
              </div>
            </MotionCard>
          </div>
        </section>

        <section className={`${sections.container} space-y-10`}>
          <div className="flex flex-col gap-3">
            <h2 className="section-heading">Launchpad for student builders</h2>
            <p className="subheading">Programs engineered for ambitious students to build, publish, and win.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <MotionCard key={feature.title} className="p-6 rounded-3xl space-y-3">
                <div className="text-3xl">{feature.icon}</div>
                <p className="text-xl font-semibold">{feature.title}</p>
                <p className="text-slate-300 leading-relaxed">{feature.desc}</p>
              </MotionCard>
            ))}
          </div>
        </section>

        <section className={`${sections.container} grid lg:grid-cols-2 gap-10 items-center`}>
          <div className="space-y-4">
            <h2 className="section-heading">How it works</h2>
            <p className="subheading">Clear steps from application to demo day. We remove the friction so you can build.</p>
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <MotionCard key={step} className="p-4 rounded-2xl flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#9c8bff] to-[#3ddcff] flex items-center justify-center font-semibold text-midnight">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-lg">{step}</p>
                  <p className="text-slate-300">{['Share your idea or ongoing research with focus areas.', 'Sprint with mentors, weekly standups, and builder challenges.', 'Pitch to researchers, founders, and industry partners.', 'Collect wins: prizes, credits, internships, and press.'][index]}</p>
                </div>
              </MotionCard>
            ))}
          </div>
        </section>

        <section className={`${sections.container} space-y-8`}>
          <div className="flex flex-col gap-3">
            <h2 className="section-heading">Who thrives here</h2>
            <p className="subheading">A community tuned for the most driven young builders.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {audiences.map((audience) => (
              <motion.span
                key={audience}
                whileHover={{ y: -3 }}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-200"
              >
                {audience}
              </motion.span>
            ))}
          </div>
        </section>

        <section className={`${sections.container} space-y-10`}>
          <div className="flex flex-col gap-3">
            <h2 className="section-heading">Community wins</h2>
            <p className="subheading">Proof from students who turned their ideas into traction.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <MotionCard key={item.name} className="p-6 rounded-3xl space-y-4">
                <p className="text-lg leading-relaxed">“{item.quote}”</p>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-slate-400 text-sm">{item.role}</p>
                </div>
              </MotionCard>
            ))}
          </div>
        </section>

        <section className="px-6">
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden gradient-border">
            <div className="relative p-10 sm:p-14 bg-gradient-to-r from-[#0f172a] via-[#0b1021] to-[#0f172a]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9c8bff]/20 via-transparent to-[#ff8fe3]/20 blur-3xl" />
              <div className="relative space-y-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Ready to launch?</p>
                <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                  Turn your ideas into real achievements.
                </h2>
                <p className="text-slate-200 max-w-2xl">
                  Join Academix Hub to secure mentorship, cloud credits, and a stage to pitch. Your research or startup deserves to be seen.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-3 rounded-full text-base font-semibold text-midnight bg-gradient-to-r from-[#9c8bff] via-[#3ddcff] to-[#ff8fe3] shadow-glow">
                    Apply to Academix Hub
                  </button>
                  <button className="px-6 py-3 rounded-full text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 transition">
                    Talk to a mentor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-midnight/70 backdrop-blur-xl mt-16">
        <div className={`${sections.container} py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
          <div>
            <p className="font-semibold text-lg">Academix Hub</p>
            <p className="text-slate-400 text-sm">Built for the next generation of innovators.</p>
            <a className="text-slate-300 text-sm" href="mailto:hello@academixhub.com">hello@academixhub.com</a>
          </div>
          <div className="flex gap-4 text-sm text-slate-300">
            <a href="#">LinkedIn</a>
            <a href="#">Discord</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
