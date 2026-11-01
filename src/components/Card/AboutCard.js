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
            Ik houd grote, latency-gevoelige systemen in de lucht &mdash; en steeds vaker ook
            de GPU- en compute-platforms waarop AI draait. Zeven jaar ervaring in
            infrastructuur en reliability engineering, van bare-metal datacenters tot
            productie-Kubernetes op schaal.
          </p>
          <p className="mb-4">
            Bij
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
            {" "} definieer ik SLI&rsquo;s, SLO&rsquo;s, error budgets en alerting voor honderden
            services verdeeld over meer dan 20 teams. Ik draai productie-Kubernetes (EKS) met
            autoscaling en topology-aware scheduling, schrijf de Terraform en CDK waaruit nieuwe
            omgevingen worden gebouwd, en zit de review board voor die na elke storing de
            vervolgacties bewaakt.
          </p>
          <p>
            Daarvoor beheerde ik meer dan 150 Kubernetes-clusters over bare-metal hardware en
            cloud, met realtime video binnen een latency-budget van ongeveer 40 milliseconden.
            Op dat aantal werkt alleen automatisering. Die gewoonte &mdash; uitzoeken waar de
            milliseconden en de capaciteit blijven &mdash; neem ik mee naar AI-infrastructuur.
          </p>
        </>
      ) : (
        <>
          <p className="mb-4">
            I keep large, latency-sensitive systems alive &mdash; and increasingly the GPU and
            compute platforms that AI runs on. Seven years in infrastructure and reliability
            engineering, from bare-metal datacenters to production Kubernetes at scale.
          </p>
          <p className="mb-4">
            At
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
            {" "} I define SLIs, SLOs, error budgets and alerting for hundreds of services across
            more than 20 engineering teams. I run production Kubernetes (EKS) with autoscaling and
            topology-aware scheduling, write the Terraform and CDK that new environments are built
            from, and chair the review board that follows up after every outage.
          </p>
          <p>
            Before that I ran more than 150 Kubernetes clusters across bare-metal hardware and
            cloud, carrying real-time video inside roughly a 40ms latency budget. At that number
            nothing works unless it is automated. That habit &mdash; finding where the
            milliseconds and the capacity actually go &mdash; is what I am bringing to AI
            infrastructure.
          </p>
        </>
      )}
    </div>
  );
};

export default AboutCard;
