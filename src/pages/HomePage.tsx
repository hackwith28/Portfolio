import { Helmet } from "react-helmet-async";

import { About } from "@/sections/About";
import { Achievements } from "@/sections/Achievements";
import { CompetitiveProgramming } from "@/sections/CompetitiveProgramming";
import { Contact } from "@/sections/Contact";
import { CurrentlyLearning } from "@/sections/CurrentlyLearning";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { FunFacts } from "@/sections/FunFacts";
import { GithubGraph } from "@/sections/GithubGraph";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Testimonials } from "@/sections/Testimonials";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Reetesh Sahu | Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer & Competitive Programmer. Building scalable, performance-focused web systems with React, Node.js, and modern databases."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div id="top" />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CompetitiveProgramming />
      <Achievements />
      <Education />
      <GithubGraph />
      <CurrentlyLearning />
      <Testimonials />
      <FunFacts />
      <Contact />
    </>
  );
}

