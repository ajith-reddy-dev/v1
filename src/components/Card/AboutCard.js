"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const AboutCard = () => {
  const { language } = useLanguage();

  return (
    <div>
      {language === "nl" ? (
        <>
          <p className="mb-4">
          Als gepassioneerde DevOps Engineer ben ik gespecialiseerd in het stroomlijnen van het ontwikkel- en 
          implementatieproces om de productiviteit te verbeteren en naadloze systeembetrouwbaarheid te waarborgen. 
          automatisering en samenwerking.
          </p>
          <p className="mb-4">
          Met expertise in CI/CD-pijplijnen, cloudinfrastructuur (AWS, Azure) en containerisatie (Docker, Kubernetes) 
          werk ik aan het bouwen van schaalbare, geautomatiseerde systemen die zakelijke successen aandrijven. Mijn focus 
          ligt op infrastructuur als code met Terraform en Python (CDK), waarbij alles van provisioning tot monitoring wordt 
          geoptimaliseerd.
          </p>
          <p>
          Ik word gedreven door de uitdaging om softwarekwaliteit te verbeteren door middel van automatisering en samenwerking. 
          Met dat motto werk ik momenteel bi
          <Link
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://www.booking.com/content/about.en-gb.html"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Booking.com (opens in a new tab)"
            >
              {" "}
              Booking.com
            </Link>
            {" "} als Devops Engineer
          </p>
        </>
      ) : (
        <>
          <p className="mb-4">
            As a passionate DevOps Engineer with 8 years of experience, I specialize in streamlining the development 
            and deployment process to enhance productivity and ensure seamless system reliability. 
          </p>
          <p className="mb-4">
            With expertise in CI/CD pipelines, cloud infrastructure (AWS, Azure), and containerization 
            (Docker, Kubernetes), I work to build scalable, automated systems that drive business success.
             My focus is on infrastructure as code using Terraform and Python (CDK), ensuring that everything 
             from provisioning to monitoring is optimized.
          </p>
          <p>
          I am driven by the challenge of improving 
          software quality through automation and collaboration.With that moto
          Currently i work in
            <Link
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://www.booking.com/content/about.en-gb.html"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Booking.com (opens in a new tab)"
            >
              {" "}
              Booking.com
            </Link>
            {" "} as a DevOps Engineer.
          </p>
        </>
      )}
    </div>
  );
};

export default AboutCard;
