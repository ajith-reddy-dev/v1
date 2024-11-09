"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import ExperienceCard from "../../Card/ExperienceCard";

const Experience = () => {
  const { language } = useLanguage();

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="My experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {language === "nl" ? "Experiencia" : "Experience"}
        </h2>
      </div>
      {language === "nl" ? (
        <>
        <ExperienceCard 
          dateInit={"July 2022"}
          dateEnd={"Present"}
          position={"Devops Enginner"}
          company={"booking.com"}
          companyUrl={"https://www.booking.com/content/about.en-gb.html"}
          description={
            "Als DevOps Engineer bij Booking.com beheerde ik cloudinfrastructuur op AWS, waarbij ik zowel de prestaties als de kostenefficiëntie optimaliseerde. Ik automatiseerde CI/CD-pipelines met Gitlab en Terraform, waardoor implementaties en infrastructuurvoorzieningen aanzienlijk werden gestroomlijnd. Ik leidde de migratie naar Docker en Kubernetes, waardoor de schaalbaarheid en betrouwbaarheid van verschillende systemen werden verbeterd. Daarnaast verbeterde ik de mogelijkheden voor monitoring en incidentrespons, wat bijdroeg aan een vermindering van downtime en een hoge beschikbaarheid van het systeem garandeerde."
          }
          technologies={[
            "AWS",
            "Python",
            "Migration",
            "Architecting",
          ]}
          />
          <ExperienceCard
          dateInit={"Sep 2021"}
          dateEnd={"July 2021"}
          position={"Devops platform Engineer "}
          company={"a new spring"}
          companyUrl={"https://www.anewspring.com/"}
          description={
            "Als eenmansteam was ik verantwoordelijk voor de migratie van een platform van een monolithische aanpak naar op containers gebaseerde applicaties naar de cloud (inclusief database), waarbij ik de beste DevOps-praktijken implementeerde."
          }
          technologies={[
            "AWS",
            "Azure",
            "Docker",
            "Python",
            "Migration",
            "Training"
          ]}
          />
          <ExperienceCard
          dateInit={"Apr 2019"}
          dateEnd={"Aug 2021"}
          position={"Devops Engineer"}
          company={"Bluejeans by verizon "}
          companyUrl={"https://www.verizon.com/"}
          description={
          "Bij BlueJeans beheerde ik AWS- en Azure-infrastructuren met Terraform, voorzag ik meer dan 150 Kubernetes-clusters en migreerde ik VM's en databases naar de cloud. Ik orkestreerde Kubernetes-omgevingen (AKS, EKS, Docker Swarm) en bouwde microservice-labomgevingen via Infrastructure as Code. Ik implementeerde robuuste monitoring- en loggingoplossingen met Datadog, New Relic, CloudWatch en Sumo Logic, inclusief aangepaste applicatiecontroles en dashboards. Ik stelde ook OKTA-gebaseerde SSO in voor veilig AWS-toegangsbeheer."
          }
          technologies={[
            "CI/CD platform",
            "AWS",
            "Azure",
            "Monitoring",
            "Cost optimisation"
          ]}
/>
        </>
      ) : (
        <>
        <ExperienceCard 
          dateInit={"July 2022"}
          dateEnd={"Present"}
          position={"Devops Enginner"}
          company={"booking.com"}
          companyUrl={"https://www.booking.com/content/about.en-gb.html"}
          description={
            "As a DevOps Engineer at Booking.com, I managed cloud infrastructure on AWS, optimizing both performance and cost efficiency. I automated CI/CD pipelines using Gitlab and Terraform, significantly streamlining deployments and infrastructure provisioning. I led the migration to Docker and Kubernetes, improving scalability and reliability across various systems. Additionally, I enhanced monitoring and incident response capabilities, contributing to a reduction in downtime and ensuring high system availability."
          }
          technologies={[
            "AWS",
            "Python",
            "Migration",
            "Architecting",
          ]}
        />
        <ExperienceCard
          dateInit={"Sep 2021"}
          dateEnd={"July 2021"}
          position={"Devops platform Engineer "}
          company={"a new spring"}
          companyUrl={"https://www.anewspring.com/"}
          description={
            "As a one person team i was in charge of Migrating platform from a monolithic approach to Container based application to Cloud (including database) with implementing DevOps best practices."
          }
          technologies={[
            "AWS",
            "Azure",
            "Docker",
            "Python",
            "Migration",
            "Training"
          ]}
        />
          <ExperienceCard
          dateInit={"Apr 2019"}
          dateEnd={"Aug 2021"}
          position={"Devops Engineer"}
          company={"Bluejeans by verizon "}
          companyUrl={"https://www.verizon.com/"}
          description={
            "At BlueJeans, managed AWS and Azure infrastructures using Terraform, provisioning over 150 Kubernetes clusters and migrating VMs and databases to the cloud. Orchestrated Kubernetes environments (AKS, EKS, Docker Swarm) and built microservice lab environments through Infrastructure as Code. Implemented robust monitoring and logging solutions using Datadog, New Relic, CloudWatch, and Sumo Logic, including custom application checks and dashboards. Also set up OKTA-based SSO for secure AWS access management."
          }
          technologies={[
            "CI/CD platform",
            "AWS",
            "Azure",
            "Monitoring",
            "Cost optimisation"
          ]}
        />
        </>
      )}

      <div className="mt-2">
        {language === "nl" ? (
          <a
            className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base mb-12 lg:mb-32"
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Ver CV completo (abriéndose en una nueva pestaña)"
          >
            <span>
              Ver <span></span>
              <span className="inline-block">
                detalle completo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        ) : (
          <a
            className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base mb-32"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View full resume (opens in a new tab)"
          >
            <span>
              View <span></span>
              <span className="inline-block">
                full resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        )}
      </div>
    </section>
  );
};

export default Experience;
