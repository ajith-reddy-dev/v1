"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Menu from "../Menu";
import Social from "../Social";

const Sidebar = () => {
  const { language } = useLanguage();

  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Ajith Venugopal
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            {language === "nl"
              ? "Site Reliability / Infrastructure Engineer"
              : "Site Reliability / Infrastructure Engineer"}
          </h2>
          <p className="mt-3 max-w-xs leading-normal">
            {language === "nl"
              ? "Ik houd systemen met veel verkeer betrouwbaar \u2014 Kubernetes, Terraform en observability, en steeds vaker de GPU-platforms waarop AI draait."
              : "I keep high-traffic systems reliable \u2014 Kubernetes, Terraform and observability, and increasingly the GPU platforms that AI runs on."}
          </p>
          <Menu />
        </div>
        <Social />
      </header>
    </>
  );
};

export default Sidebar;
