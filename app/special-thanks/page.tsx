"use client"
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../Card";
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
            <h1 className={styles.title}>Special Thanks!</h1>
          </div>
          <p className={styles.subtitle}>I would like to thank the following.</p>
          <br />
        
<div className={styles['emani1']}>
      <img src={`${process.env.NODE_ENV === "production" ? "/portfolio" : ""}/images/eshaan is LOCKED.png`} alt="Eshaan Emani" className={styles['card-image']} />
      <h2 className={styles['card-title']}>Eshaan Emani</h2>
      <p className={styles['card-description']}>
        Eshaan Emani is a young entrepreneur, technologist, and community leader from Sammamish, Washington. He has earned certifications from Google and Cisco, reached the Gold division of the USA Computing Olympiad (USACO), and won the BExSTEM Challenge by creating VaultGuard, an AI-powered cybersecurity platform. He has also earned the Gold level of the President's Volunteer Service Award for over 250 hours of STEM volunteer work and has excelled in DECA and Model United Nations competitions. Through his achievements in technology, entrepreneurship, leadership, and community service, Eshaan demonstrates strong potential as a future innovator and leader.
      </p>
    </div>
        </main>
      </div>
    </div>
  );
}
