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
          {language === "nl" ? "Ervaring" : "Experience"}
        </h2>
      </div>
      {language === "nl" ? (
        <>
        <ExperienceCard
          dateInit={"July 2022"}
          dateEnd={"Present"}
          position={"DevOps Infrastructure Engineer II"}
          company={"Booking.com"}
          companyUrl={"https://www.booking.com/content/about.en-gb.html"}
          description={
            "Ik ben verantwoordelijk voor SLI's, SLO's, error budgets en alerting voor honderden services met veel verkeer, verdeeld over meer dan 20 engineeringteams. Ik draai productie-Kubernetes (EKS) met autoscaling, multi-AZ-resilience en topology-aware scheduling, en schrijf de Terraform-modules en AWS CDK-stacks waaruit nieuwe omgevingen worden gebouwd. Ik leid incident response in een on-call rotatie en zit de review board voor die storingen omzet in permanente oplossingen. Daarnaast verkortte ik de deploytijd met 30% door CI/CD te herstructureren in parallelle en opeenvolgende stages."
          }
          technologies={[
            "Kubernetes (EKS)",
            "Terraform",
            "AWS",
            "SLOs & Observability",
            "Incident Response",
            "ArgoCD",
          ]}
        />
        <ExperienceCard
          dateInit={"Aug 2021"}
          dateEnd={"July 2022"}
          position={"DevOps Platform Engineer"}
          company={"aNewSpring"}
          companyUrl={"https://www.anewspring.com/"}
          description={
            "Als eenmansteam migreerde ik de volledige stack van een monolithische datacenter-opzet naar gecontaineriseerde Kubernetes (EKS, AKS) op AWS en Azure, inclusief databases. Ik schreef de AWS CDK-stacks en Terraform-modules die de IaC-standaard van de organisatie werden, bouwde CI/CD met ArgoCD naar dev, staging en productie, en trainde de ontwikkelaars in containers, Kubernetes en Helm."
          }
          technologies={[
            "AWS",
            "Azure",
            "Kubernetes",
            "AWS CDK",
            "Terraform",
            "Migration",
          ]}
        />
        <ExperienceCard
          dateInit={"Apr 2019"}
          dateEnd={"Aug 2021"}
          position={"DevOps Engineer"}
          company={"BlueJeans by Verizon"}
          companyUrl={"https://www.verizon.com/"}
          description={
            "Ik voorzag en beheerde meer dan 150 Kubernetes-clusters over on-premise bare-metal datacenterhardware en cloud (EKS, AKS), met realtime video binnen een latency-budget van ongeveer 40 milliseconden. Op die schaal moet alles geautomatiseerd zijn: provisioning, lifecycle en node- en agent-health checks die remediatie aansturen. Ik beheerde het volledige cloud-, netwerk-, security- en compute-landschap als Terraform-code, bouwde de monitoring- en loggingstacks op Datadog, New Relic, CloudWatch en Sumo Logic met dashboards-as-code, voerde een AWS-kostenoptimalisatieprogramma uit en zette Okta SSO op met least-privilege IAM."
          }
          technologies={[
            "150+ K8s Clusters",
            "Bare Metal",
            "Terraform",
            "Datadog",
            "Low Latency",
            "Cost Optimisation",
          ]}
        />
        </>
      ) : (
        <>
        <ExperienceCard
          dateInit={"July 2022"}
          dateEnd={"Present"}
          position={"DevOps Infrastructure Engineer II"}
          company={"Booking.com"}
          companyUrl={"https://www.booking.com/content/about.en-gb.html"}
          description={
            "I own SLIs, SLOs, error budgets and alert design for hundreds of high-throughput services across more than 20 engineering teams. I run production Kubernetes (EKS) with autoscaling, multi-AZ resilience and topology-aware scheduling, and author the Terraform modules and AWS CDK stacks that new environments are built from. I lead incident response on an on-call rotation and chair the corrective-action review board that turns outages into permanent fixes. I also cut deployment time by 30% by restructuring CI/CD into concurrent and downstream stages, and built AI-generated service documentation that saves around 10 engineering hours per team."
          }
          technologies={[
            "Kubernetes (EKS)",
            "Terraform",
            "AWS",
            "SLOs & Observability",
            "Incident Response",
            "ArgoCD",
          ]}
        />
        <ExperienceCard
          dateInit={"Aug 2021"}
          dateEnd={"July 2022"}
          position={"DevOps Platform Engineer"}
          company={"aNewSpring"}
          companyUrl={"https://www.anewspring.com/"}
          description={
            "As a one-person team I migrated the entire company stack from a monolithic, datacenter-hosted setup to containerised Kubernetes (EKS, AKS) across AWS and Azure, databases included. I authored the AWS CDK stacks and Terraform modules that became the organisation's IaC standard, built CI/CD delivering through ArgoCD into dev, staging and production, and trained the developers on containers, Kubernetes and Helm."
          }
          technologies={[
            "AWS",
            "Azure",
            "Kubernetes",
            "AWS CDK",
            "Terraform",
            "Migration",
          ]}
        />
        <ExperienceCard
          dateInit={"Apr 2019"}
          dateEnd={"Aug 2021"}
          position={"DevOps Engineer"}
          company={"BlueJeans by Verizon"}
          companyUrl={"https://www.verizon.com/"}
          description={
            "I provisioned and operated more than 150 Kubernetes clusters spanning on-premise bare-metal datacenter hardware and cloud (EKS, AKS), carrying real-time video inside roughly a 40ms latency budget. At that scale everything has to be automated: provisioning, lifecycle, and node and agent health checks feeding remediation. I managed the whole cloud, network, security and compute estate as Terraform code and authored the reusable module library, built the monitoring and logging stacks on Datadog, New Relic, CloudWatch and Sumo Logic with dashboards-as-code, delivered an AWS cost-optimisation programme, and set up Okta SSO with least-privilege IAM."
          }
          technologies={[
            "150+ K8s Clusters",
            "Bare Metal",
            "Terraform",
            "Datadog",
            "Low Latency",
            "Cost Optimisation",
          ]}
        />
        </>
      )}

      <div className="mt-2">
        {language === "nl" ? (
          <a
            className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base mb-12 lg:mb-32"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Bekijk volledig cv (opent in een nieuw tabblad)"
          >
            <span>
              Bekijk <span></span>
              <span className="inline-block">
                volledig cv
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
