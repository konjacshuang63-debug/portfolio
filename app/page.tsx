"use client"

import Image from "next/image";
import styles from "./styles/Home.module.css";
import Card from "./Card";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { useRouter } from "next/navigation";


export default function HomePage() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <WebGLShader />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="relative z-10 px-4 py-8 sm:px-8 lg:px-16">
        <nav className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <LiquidButton
            size="sm"
            className="text-white"
            onClick={() => router.push("/")}
          >
            Home
          </LiquidButton>
          <LiquidButton
            size="sm"
            className="text-white"
            onClick={() => router.push("/about")}
          >
            About
          </LiquidButton>
          <LiquidButton
            size="sm"
            className="text-white"
            onClick={() => router.push("/project")}
          >
            Project
          </LiquidButton>

           <LiquidButton
            size="sm"
            className="text-white"
            onClick={() => router.push("/special-thanks")}
          >
            Special Thanks
          </LiquidButton>
        </nav>

        <main>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Welcome to My Portfolio</h1>
          </div>
          <p className={styles.subtitle}>This is the home page of my portfolio website. Here you can find information about me and my projects.</p>
          <br />
          <Image src="/images/newhouse-removebg-preview.png" alt="Portfolio Image" width={600} height={425} className={styles.kogane} />
          <p className={styles.mystuff}>Feel free to explore my projects and learn more about me. I am always open to new opportunities and collaborations, so don't hesitate to reach out if you have any questions or would like to work together!</p>
          <br />
          <br />
          <br />
          <p className={styles.info}>Contact Information: Email: lilbro33@gmail.com, Phone Number: + 1425-560-5454</p>
          <img src={`${process.env.NODE_ENV === "production" ? "/portfolio" : ""}/images/mappuy2.png`} alt="Portfolio Image" width={600} height={425} className={styles.logo} />

          <div className={styles.gridcard}>
            <Card
              title="logo"
              imageUrl="/images/mappuy2.png"
              description="."
            />
            <Card
              title="kogane"
              imageUrl="/images/kogane.png"
              description="Kogane from JJK."
            />
            <Card
              title="jjs"
              imageUrl="/images/bignanigans.png"
              description="JJS."
            />
            <Card
              title="school"
              imageUrl="/images/school.png"
              description="My middle school."
            />
            <Card
              title="carson"
              imageUrl="/images/carson.jpeg"
              description="My elementary school."
            />
          </div>
        </main>
      </div>
    </div>
  );
}
