import layers from "@/assets/projects/layers.png";
import xora from "@/assets/projects/xora.png";
import zentry from "@/assets/projects/zentry.png";
import spherealAI from "@/assets/projects/spherealAI.png";
import appleIphone from "@/assets/projects/appleIphone.png";
import appleTv from "@/assets/projects/appleTv.png";
import caseCobra from "@/assets/projects/caseCobra.png";

import { FaGithub, FaLinkedinIn, FaWhatsapp, FaMeta } from "react-icons/fa6";
import { BiLogoNetlify, BiLogoTypescript } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaSass,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNextui,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiUdemy,
  SiVercel,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";

export const navbarItems = [
  "about",
  "projects",
  "certificates",
  "skills",
  "faqs",
] as const;

export const transition = {
  duration: 0.75,
  type: "tween",
  ease: [0.76, 0, 0.24, 1],
} as const;

export const projects = [
  {
    name: "Layers",
    image: layers,
    link: "https://layers-br.vercel.app/",
  },
  {
    name: "Xora",
    image: xora,
    link: "https://xora-br.vercel.app/",
  },
  {
    name: "Zentry",
    image: zentry,
    link: "https://zentry-br.vercel.app/",
  },
  {
    name: "Sphereal.AI",
    image: spherealAI,
    link: "https://sphereal-ai-br.vercel.app/",
  },
  {
    name: "Apple Iphone",
    image: appleIphone,
    link: "https://appleiphone.vercel.app/",
  },
  {
    name: "Apple TV",
    image: appleTv,
    link: "https://appletv-br.vercel.app/",
  },
  {
    name: "Case Cobra",
    image: caseCobra,
    link: "https://casecobra-br.vercel.app/",
  },
] as const;

export const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
] as const;

export const contacts = [
  {
    name: "Github",
    icon: FaGithub,
    url: "https://github.com/BR-BelalRezk",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/belalrezk/",
  },
  {
    name: "Email",
    icon: MdEmail,
    url: "mailto:belalrezk.developer@gmail.com",
  },
  {
    name: "Whatsapp",

    icon: FaWhatsapp,
    url: "https://wa.me/+201064467975",
  },
] as const;

export const skills = [
  {
    label: "HTML",
    icon: FaHtml5,
  },
  {
    label: "CSS",
    icon: FaCss3Alt,
  },
  {
    label: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    label: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    label: "Styled Components",
    icon: SiStyledcomponents,
  },
  {
    label: "Sass",
    icon: FaSass,
  },
  {
    label: "Javascript",
    icon: IoLogoJavascript,
  },
  {
    label: "Typescript",
    icon: BiLogoTypescript,
  },
  {
    label: "React.js",
    icon: FaReact,
  },
  {
    label: "React Router",
    icon: SiReactrouter,
  },
  {
    label: "Redux / RTK",
    icon: SiRedux,
  },
  {
    label: "React Query",
    icon: SiReactquery,
  },
  {
    label: "React Hook Form",
    icon: SiReacthookform,
  },
  {
    label: "Next.js",
    icon: SiNextdotjs,
  },
  {
    label: "Next / UI",
    icon: SiNextui,
  },
  {
    label: "Framer Motion",
    icon: TbBrandFramerMotion,
  },
  {
    label: "Git",
    icon: FaGitAlt,
  },
  {
    label: "Github",
    icon: FaGithub,
  },
  {
    label: "Netlify",
    icon: BiLogoNetlify,
  },
  {
    label: "Vercel",
    icon: SiVercel,
  },
] as const;

export const certificates = [
  {
    label: "Meta Front-End Developer Specialization",
    icon: FaMeta,
    link: "https://www.credly.com/badges/e057636e-0b9c-4554-9480-80ba90937751/public_url",
    // img: meta,
  },
  {
    label: "The Ultimate React Course: Jonas Schmedtmann",
    icon: SiUdemy,
    link: "https://ude.my/UC-cfa9b3b2-7683-49a0-b685-70cb2d43b1f0/",
    // img: udemy,
  },
] as const;
