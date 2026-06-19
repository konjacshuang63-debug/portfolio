"use client"

import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../Card";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <WebGLShader />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="relative z-10 px-4 py-8 sm:px-8 lg:px-16">
        <nav className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <LiquidButton
            size="sm"
            className="text-white"
            onClick={() => window.location.assign("/")}
          >
            Home
          </LiquidButton>
          <LiquidButton
            size="sm"
            className="text-white"
            onClick={() => window.location.assign("/about")}
          >
            About
          </LiquidButton>
          <LiquidButton
            size="sm"
            className="text-white"
            onClick={() => window.location.assign("/project")}
          >
            Project
          </LiquidButton>

          <LiquidButton
            size="sm"
            className="text-white"
            onClick={() => window.location.assign("/special-thanks")}
          >
            Special Thanks
          </LiquidButton>
        </nav>

        <main>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>About Me Page</h1>
          </div>
          <p className={styles.subtitle}>I am a software engineer with a passion for creating innovative solutions.</p>
          <br />
          <Image src="/images/ME!.jpg" alt="Portfolio Image" width={600} height={425} className={styles.me} />
          <br />
          <p className={styles.mystuff2}>As a software developer, I enjoy building websites that are both functional and visually appealing. Web development allows me to combine creativity with problem-solving, creating digital experiences that people can easily access and use. Through designing layouts, writing code, and testing features, I have learned how different parts of a website work together to provide a smooth user experience.

One of the aspects I enjoy most about web development is turning ideas into real, interactive websites. Whether creating a personal portfolio, an informational site, or a web application, I focus on making websites organized, responsive, and easy to navigate. Throughout the development process, I continuously improve my coding skills while learning new technologies and techniques.

Building websites has strengthened my ability to think logically, troubleshoot issues, and pay attention to detail. Each project presents unique challenges that encourage me to learn and grow as a developer. As I continue to expand my knowledge of web development, I look forward to creating more advanced and innovative websites that solve problems and help people connect with information online.
</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 className={styles.title}>About Me</h1>
          <div className={styles.gridcard}>
            <Card
              title="JJK"
              imageUrl="/images/jjk.png"
              description="JJK is my favorite anime, manga, piece of fiction, dark fiction, and franchise."
            />
            <Card
              title="YUTA"
              imageUrl="/images/yuta0.png"
              description="My favorite character from Jujutsu Kaisen."
            />
            <Card
              title="jjs"
              imageUrl="/images/bignanigans.png"
              description="In my free time, I enjoy playing Jujutsu Shenanigans on Roblox."
            />
            <Card
              title="My Current Middle School"
              imageUrl="/images/school.png"
              description="Stella Schola is a choice school within the Lake Washington School District, offering a unique and enriching educational experience for students in 6th, 7th, and 8th grades. Each grade level consists of 30 students, ensuring a close-knit and supportive community. Admission to Stella is conducted by the Lake Washington School District during the lottery season.  "
            />
            <Card
              title="My Elementary School"
              imageUrl="/images/carson.jpeg"
              description="Carson Elementary first opened its doors September 2008. The building features an environmentally-friendly green roof, along with other green features. We are a preschool/K-5 school. We also host an after-school Boys/Girls Club daycare. Carson Elementary is located on the Sammamish Plateau in Sammamish, WA 98074."
            />
          </div>
        </main>
      </div>
    </div>
  
  );
} 