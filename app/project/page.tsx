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
            <h1 className={styles.title}>Welcome to My Project Page</h1>
          </div>
          <p className={styles.subtitle}>This is the project page of my portfolio website. Here you can find information about my projects.</p>
          <br />
          <Image src="/images/project-removebg-preview.png" alt="Portfolio Image" width={600} height={425} className={styles.projectlogo} />
          <p className={styles.mystuff}>Feel free to explore my projects and learn more about me. I am always open to new opportunities and collaborations, so don't hesitate to reach out if you have any questions or would like to work together!</p>
          <br />
          <p className={styles.projectview}>View the cards below to see my projects</p>
          <img src="/images/arrow.png" alt="Portfolio Image" width={600} height={425} className={styles.logo} />
            <br>
            
            
            
            
            </br>
          <div className={styles.gridcard3}>
            <Card
              title="Fizz Buzz!"
              imageUrl="/images/fizzbuzz.png"
              description="IN the start of black belt, our teacher, Mr. Emani, tought us about fizz buzz. It was simple, make a java program that prints the numbers from 1 to 100, but for multiples of three print 'Fizz' instead of the number and for the multiples of five print 'Buzz'. For numbers which are multiples of both three and five print 'FizzBuzz'. I found this project to be very fun and it was a great way to learn about loops and conditionals in programming."
            />
            <Card
              title="Job Application"
              imageUrl="/images/applicationMONSTER3.png"
              description="With Liam Williams and Rudra Shandilya's help, we were able to create a comprehensive job application with advanced points and passing systems. This was our first major project that was done by all 3 of us."
            />
            <Card
              title="Individual Job Application Project."
              imageUrl="/images/applicationMONSTER.png"
              description="In this project, I worked independently to create a job application with a focus on user experience and functionality. We learned what makes a good UI and how to implement it in our project. This project allowed me to apply the skills I learned in class and further develop my programming abilities."
      
            />
          </div>
        </main>
      </div>
    </div>
  );
}
