import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Ajith Venugopal | Site Reliability / Infrastructure Engineer",
  description:
    "Site reliability and infrastructure engineer with 7+ years keeping high-traffic systems alive. Kubernetes (CKA, CKS), Terraform, AWS, and the observability that catches failures before users do.",
  openGraph: {
    title: "Ajith Venugopal | Site Reliability / Infrastructure Engineer",
    description:
      "Kubernetes, Terraform, AWS and observability at scale. Currently keeping hotels and flights reliable at Booking.com.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
