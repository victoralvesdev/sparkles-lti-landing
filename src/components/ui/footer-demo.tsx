"use client";

import {
  Blocks,
  CodeXml,
  CreditCard,
  Handshake,
  Scale,
  Webhook,
  Mail,
  Home,
  Info
} from "lucide-react";
import { Footer } from "@/components/blocks/footer";

const PlausibleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeWidth="2"
      d="M4 8.5V23c3 0 6-3 6-5.5h2.5c4 0 7.5-4 7.5-9 0-3-3-7.5-8-7.5S4 5.5 4 8.5Z"
    />
  </svg>
);

const MatomoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeMiterlimit="1.4"
      strokeWidth="2"
      d="m13.8 16.3.8.6v-.1l.2-.2a164.4 164.4 0 0 1 .6-.9l.9 1a4.1 4.1 0 0 0 5.3.4c1-.7 1.3-1.8 1.3-2.8 0-1-.5-2-1-2.8l-3-5A3 3 0 0 0 16 5c-.9 0-1.6.3-2 .5-.8.4-1.3 1-1.7 1.8l-1-1.1-.7.7.6-.7a5 5 0 0 0-3-1.3c-1.1 0-2.3.3-3 1.4L1.7 12a4.7 4.7 0 0 0-.7 3.1 4 4 0 0 0 1.2 2c1 .8 2.3.9 3.4.7 1-.2 2.3-.8 2.8-1.9l1 .8a3.6 3.6 0 0 0 3.5 1.2 3.8 3.8 0 0 0 1.5-.9l-.6-.7Zm0 0 .7.7v-.1l-.7-.6Z"
    />
  </svg>
);

const GoogleAnalyticsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M17 5.1v13.5c0 1.6 1 2.4 2 2.4s2-.7 2-2.4V5.2C21 4 20 3 19 3s-2 1-2 2.1Zm-7 7v6.6c0 1.5 1 2.3 2 2.3s2-.7 2-2.3v-6.5c0-1.3-1-2.2-2-2.2s-2 1-2 2.1Zm-3.6 8.3a2 2 0 1 0-2.8-2.8 2 2 0 0 0 2.8 2.8Z" />
  </svg>
);

export function FooterDemo() {
  return (
    <Footer
      className=""
      brand={{
        name: "L.T.I",
        description: "Laboratório de Tecnologias Intensivas.",
      }}
      socialLinks={[
        {
          name: "Twitter",
          href: "https://twitter.com/test",
        },
        {
          name: "Github",
          href: "https://github.com/test",
        },
        {
          name: "Instagram",
          href: "https://instagram.com/test",
        },
      ]}
      columns={[
        {
          title: "Serviços",
          links: [
            {
              name: "Features",
              Icon: Blocks,
              href: "#features",
            },
            {
              name: "Preços",
              Icon: CreditCard,
              href: "#pricing",
            },
            {
              name: "Integrações",
              Icon: Webhook,
              href: "https://example.com/integrations",
            },
            {
              name: "Documentação",
              Icon: CodeXml,
              href: "https://example.com/docs",
            },
          ],
        },
        {
          title: "Empresa",
          links: [
            {
              name: "Sobre Nós",
              Icon: Info,
              href: "https://example.com/about",
            },
            {
              name: "Contato",
              Icon: Mail,
              href: "https://example.com/contact",
            },
            {
              name: "Parceiros",
              Icon: Home,
              href: "https://example.com/partners",
            },
          ],
        },
        {
          title: "Legal",
          links: [
            {
              name: "Política de Privacidade",
              Icon: Scale,
              href: "https://example.com/privacy",
            },
            {
              name: "Termos de Serviço",
              Icon: Handshake,
              href: "https://example.com/terms",
            },
          ],
        },
      ]}
      copyright="L.T.I Inc. © 2024"
    />
  );
} 