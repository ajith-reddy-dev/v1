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
              ? "Devops Ingenieur"
              : "Devops Enginner"}
          </h2>
          <p className="mt-3 max-w-xs leading-normal">
            {language === "nl"
              ? "Ik bouw microservices en help ontwikkelaars om productieklare applicaties te realiseren met CI/CD met observeerbaarheid"
              : "I build microservices and help developers to achive production ready application with CI/CD with observability "}
          </p>
          <Menu />
        </div>
        <Social />
      </header>
    </>
  );
};

export default Sidebar;
