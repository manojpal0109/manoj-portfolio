import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CircleUserRound,
  Code2,
  Download,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Router,
  Send,
  Server,
  ShieldCheck,
  Terminal,
  Wifi,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import "./index.css";

const skills = [
  "TCP/IP",
  "IPv4 / IPv6",
  "Subnetting",
  "VLAN",
  "DHCP",
  "DNS",
  "Routing & Switching",
  "Static Routing",
  "OSPF",
  "NAT",
  "ACL",
  "LAN / WAN",
  "Network Troubleshooting",
  "Cisco IOS",
  "Cisco Packet Tracer",
  "Wireshark",
];
const skillIcons = [
  Globe2,
  Network,
  Code2,
  Network,
  Server,
  Globe2,
  Router,
  Network,
  Network,
  ShieldCheck,
  ShieldCheck,
  Wifi,
  Wrench,
  Terminal,
  Server,
  Zap,
];
const projects = [
  [
    "Two Network Connection Using Router",
    "Connected two different networks using a router and verified end-to-end connectivity.",
    Router,
    ["Routing", "IPv4", "Ping"],
  ],
  [
    "VLAN Configuration",
    "Created multiple VLANs on switches and configured access and trunk ports.",
    Network,
    ["VLAN", "Trunk", "Switch"],
  ],
  [
    "Inter-VLAN Routing",
    "Implemented router-on-a-stick for inter-VLAN routing and verified connectivity.",
    Globe2,
    ["802.1Q", "Router", "VLAN"],
  ],
  [
    "DHCP Server Configuration",
    "Configured a DHCP service for dynamic IP allocation and reservations.",
    Server,
    ["DHCP", "IP", "Server"],
  ],
  [
    "OSPF Routing",
    "Configured OSPF between routers and verified route advertisement.",
    Network,
    ["OSPF", "Routing", "Cisco"],
  ],
  [
    "Small Office Network Design",
    "Designed a complete SOHO network with secure and optimized architecture.",
    Wifi,
    ["LAN", "Wi-Fi", "Security"],
  ],
];
const nav = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Certifications",
  "Contact",
];

function App() {
  const [open, setOpen] = useState(false);
  const go = (id) => {
    setOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="container-page flex h-[72px] items-center justify-between">
          <button
            onClick={() => go("Home")}
            className="text-2xl font-extrabold tracking-tight"
          >
            Manoj <span className="gradient-text">Pal</span>
          </button>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => (
              <button
                key={n}
                onClick={() => go(n)}
                className="text-sm font-medium text-slate-700 hover:text-indigo-600"
              >
                {n}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/Manoj_Pal_Network_Engineer_Resume.pdf"
              download
              className="hidden items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 sm:flex"
            >
              <Download size={17} />
              Download Resume
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="rounded-xl border border-slate-200 p-2 md:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-slate-200 bg-white p-4 md:hidden">
            <div className="container-page flex flex-col gap-1">
              {nav.map((n) => (
                <button
                  key={n}
                  onClick={() => go(n)}
                  className="rounded-lg px-3 py-3 text-left text-sm font-semibold hover:bg-indigo-50"
                >
                  {n}
                </button>
              ))}
              <a
                href="/Manoj_Pal_Network_Engineer_Resume.pdf"
                download
                className="mt-2 rounded-xl bg-indigo-600 px-4 py-3 text-center font-bold text-white"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero-grid overflow-hidden">
          <div className="container-page grid min-h-[610px] items-center gap-10 py-12 lg:grid-cols-[1fr_.9fr] lg:py-16">
            <div className="fade-up">
              <p className="mb-2 text-xl font-bold text-indigo-600">Hi, I’m</p>
              <h1 className="text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Manoj Pal
              </h1>
              <div className="mt-2 text-3xl font-extrabold gradient-text sm:text-4xl">
                Network Engineer
              </div>
              <div className="mt-5 h-1 w-14 rounded-full bg-indigo-600" />
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-700">
                IT Support & Network Engineer with hands-on experience in
                designing, implementing, monitoring and troubleshooting reliable
                network infrastructure. Skilled in routers, switches, LAN/WAN,
                IP addressing, routing protocols and network security.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => go("Projects")}
                  className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-indigo-200"
                >
                  <BriefcaseBusiness size={18} />
                  View Projects
                </button>
                <button
                  onClick={() => go("Contact")}
                  className="flex items-center gap-2 rounded-xl border border-indigo-500 bg-white px-6 py-3.5 font-bold text-indigo-700"
                >
                  <Mail size={18} />
                  Contact Me
                </button>
              </div>
              <p className="mt-6 text-sm font-medium">Connect with me</p>
              <div className="mt-3 flex gap-3">
                <Social href="https://www.linkedin.com/" icon={Linkedin} />
                <Social href="https://github.com/" icon={Github} />
                <Social
                  href="mailto:manojpal.official123@gmail.com"
                  icon={Mail}
                />
                <Social href="tel:+911234567890" icon={Phone} />
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute h-[440px] w-[440px] rounded-full bg-indigo-100/70 blur-2xl sm:h-[500px] sm:w-[500px]" />
              <div className="relative z-10 flex h-[500px] w-full max-w-[510px] items-end justify-center overflow-hidden rounded-[48%_48%_0_0] bg-gradient-to-b from-indigo-50 to-white">
                <img
                  src="/profile.jpeg"
                  alt="Manoj Pal"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute left-2 top-24 hidden rounded-xl border border-indigo-100 bg-white p-3 shadow-xl sm:block">
                <Network className="text-indigo-600" size={28} />
              </div>
              <div className="absolute right-3 top-36 hidden rounded-xl border border-indigo-100 bg-white p-3 shadow-xl sm:block">
                <ShieldCheck className="text-indigo-600" size={28} />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="container-page py-8">
          <div className="section-card grid gap-7 p-5 md:grid-cols-[1fr_1.25fr] md:p-7">
            <div>
              <Title icon={CircleUserRound} text="About Me" />
              <p className="mt-4 text-sm leading-6 text-slate-700">
                I am an IT Support & Network Engineer with a strong foundation
                in computer networking and infrastructure support. I have
                experience in installing, configuring and troubleshooting
                network devices including routers, switches and firewalls. I am
                passionate about ensuring seamless connectivity, minimizing
                downtime and improving network performance.
              </p>
            </div>
            <div className="grid gap-3 border-t border-slate-200 pt-5 md:border-l md:border-t-0 md:pl-7 md:pt-0">
              <Info icon={CircleUserRound} label="Name" value="Manoj Pal" />
              <Info
                icon={BriefcaseBusiness}
                label="Role"
                value="Network Engineer / IT Support Engineer"
              />
              <Info icon={BookOpen} label="Experience" value="1+ Year" />
              <Info
                icon={Mail}
                label="Email"
                value="manojpal.connect@gmail.com"
              />
              <Info icon={Phone} label="Phone" value="+91 6386033849" />
              <Info icon={MapPin} label="Location" value="Gurugram sec-12" />
            </div>
          </div>
        </section>

        <section id="skills" className="container-page py-5">
          <Title icon={Code2} text="Skills" />
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map((s, i) => {
              const I = skillIcons[i];
              return (
                <div
                  key={s}
                  className="group flex min-h-[72px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
                >
                  <I size={28} className="shrink-0 text-indigo-600" />
                  <span className="text-sm font-semibold">{s}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="container-page py-6">
          <div className="section-card p-5 md:p-6">
            <Title icon={BriefcaseBusiness} text="Projects / Practical Labs" />
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map(([name, desc, I, tags], i) => (
                <article
                  key={name}
                  className="group rounded-2xl border border-slate-200 bg-white p-4 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl"
                >
                  <div className="flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-slate-50">
                    <I
                      size={58}
                      strokeWidth={1.5}
                      className="text-indigo-600"
                    />
                  </div>
                  <p className="mt-4 text-xs font-bold text-indigo-600">
                    0{i + 1}. Practical Lab
                  </p>
                  <h3 className="mt-1 min-h-[48px] text-base font-extrabold">
                    {name}
                  </h3>
                  <p className="mt-2 min-h-[68px] text-sm leading-5 text-slate-600">
                    {desc}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 flex items-center gap-1 text-sm font-bold text-indigo-600">
                    View Details <ArrowRight size={15} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

   
        <section id="experience" className="container-page py-5">
  <div className="section-card grid gap-4 border-0 bg-transparent shadow-none md:grid-cols-3">

    {/* EXPERIENCE */}
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100">
      
      <Title icon={BriefcaseBusiness} text="Experience" />

      <div className="mt-5">
        <h3 className="font-extrabold">
          IT Support Executive / IT Support Engineer
        </h3>

        <p className="mt-1 text-sm font-semibold text-indigo-600">
          RRG Group
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Oct 2024 – Present
        </p>

        <ul className="mt-4 space-y-2 text-sm leading-5 text-slate-700">
          <li>• Providing IT & network support for operations.</li>
          <li>• Troubleshooting network, hardware and software issues.</li>
          <li>
            • Configuring and maintaining routers, switches and network devices.
          </li>
          <li>
            • Ensuring LAN, internet connectivity and VPN/remote access.
          </li>
          <li>• Monitoring network availability and performance.</li>
          <li>
            • Preparing daily reports and documenting network activities.
          </li>
        </ul>
      </div>
    </div>

    {/* EDUCATION */}
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100">

      <Title icon={GraduationCap} text="Education" />

      <div className="mt-5 space-y-7 text-sm">

        <div>
          <h3 className="font-extrabold">
            Bachelor of Computer Applications (BCA)
          </h3>

          <p className="mt-1 text-slate-600">
            Makhanlal Chaturvedi University | India
          </p>

          <p className="mt-1 text-xs text-slate-500">
            2024
          </p>
        </div>

        <div>
          <h3 className="font-extrabold">
            Higher Secondary (12th)
          </h3>

          <p className="mt-1 text-slate-600">
            Uttar Pradesh Board | India
          </p>

          <p className="mt-1 text-xs text-slate-500">
            2021
          </p>
        </div>

        <div>
          <h3 className="font-extrabold">
            Secondary (10th)
          </h3>

          <p className="mt-1 text-slate-600">
            Uttar Pradesh Board | India
          </p>

          <p className="mt-1 text-xs text-slate-500">
            2019
          </p>
        </div>

      </div>
    </div>

    {/* CERTIFICATIONS */}
    <div
      id="certifications"
      className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100"
    >

      <Title icon={Award} text="Certifications" />

      <div className="mt-5 space-y-3">

        <Cert
          icon={Network}
          text="CCNA – Networking Fundamentals"
        />

        <Cert
          icon={Globe2}
          text="Networking Fundamentals"
        />

        <Cert
          icon={Terminal}
          text="Windows & Linux Networking"
        />

      </div>
    </div>

  </div>
</section>

        <section id="contact" className="container-page py-6 pb-8">
          <div className="section-card flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-indigo-600 p-3 text-white">
                <Send size={22} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold">Let's Connect</h2>
                <p className="mt-1 text-sm text-slate-600">
                  I'm open to new opportunities and collaborations. Feel free to
                  reach out!
                </p>
              </div>
            </div>
            <div className="grid w-full gap-2 sm:grid-cols-2 lg:w-auto lg:grid-cols-4">
              <Contact
                icon={Mail}
                text="manojpal.connectgmail.com"
                href="mailto:manojpal.connect@gmail.com"
              />
              <Contact
                icon={Phone}
                text="+91 6386033849"
                href="tel:+916386033849"
              />
              <Contact
                icon={Linkedin}
                text="linkedin.com/in/manojpal"
                href="https://www.linkedin.com/"
              />
              <Contact
                icon={Github}
                text="github.com/manojpal"
                href="https://github.com/"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-950 py-5 text-center text-sm text-slate-300">
        © 2026 Manoj Pal. All Rights Reserved.
      </footer>
    </div>
  );
}
function Title({ icon: I, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-indigo-600 p-2.5 text-white shadow-lg shadow-indigo-100">
        <I size={19} />
      </div>
      <h2 className="text-xl font-extrabold">{text}</h2>
    </div>
  );
}
function Info({ icon: I, label, value }) {
  return (
    <div className="grid grid-cols-[24px_90px_1fr] items-center gap-2 text-sm">
      <I size={17} className="text-indigo-600" />
      <span className="font-bold">{label}:</span>
      <span className="truncate text-slate-700">{value}</span>
    </div>
  );
}
function Social({ href, icon: I }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white hover:-translate-y-1 hover:bg-indigo-600"
    >
      <I size={18} />
    </a>
  );
}
function Cert({ icon: I, text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-3">
      <div className="rounded-full bg-indigo-50 p-2 text-indigo-600">
        <I size={20} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold">{text}</p>
        <span className="mt-1 inline-block rounded bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-700">
          In Progress
        </span>
      </div>
    </div>
  );
}
function Contact({ icon: I, text, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex min-w-0 items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-xs font-semibold hover:border-indigo-300 hover:text-indigo-700"
    >
      <I size={17} className="shrink-0 text-indigo-600" />
      <span className="truncate">{text}</span>
      <ExternalLink size={12} className="ml-auto shrink-0 opacity-50" />
    </a>
  );
}
createRoot(document.getElementById("root")).render(<App />);
