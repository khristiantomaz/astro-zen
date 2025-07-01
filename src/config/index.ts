import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Khristian Tomaz, Software Engineer`",
  author: "Khristian Tomaz",
  description:
    "Engenharia de Software, apaixonado por tecnologia e desenvolvimento de software. Sempre buscando aprender e evoluir.",
  lang: "pt-BR",
  siteLogo: "/foto-de-perfil.jpg",
  navLinks: [
    { text: "Diplomas", href: "#experience" },
    { text: "Projetos", href: "#projects" },
    { text: "Sobre", href: "#about" },
  ],
  socialLinks: [
    { text: "X", href: "https://x.com/ilussiumv" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/khristian-tomaz/" },
    { text: "Github", href: "https://github.com/khristiantomaz" },
    { text: "Instagram", href: "https://www.instagram.com/khris.Tomaz/" },
    
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Khristian Tomaz",
    specialty: "Software Engineer",
    summary: `Sou apaixonado por tecnologia e sempre busquei aprender cada vez mais, seja lendo, praticando ou explorando novas ferramentas. Esse interesse me levou a ingressar no curso de Engenharia de Software, no qual atualmente curso o sexto semestre.
Tenho como objetivo evoluir constantemente, tanto na qualidade do meu código quanto na resolução de problemas. Estou sempre em busca de novos desafios que me permitam desenvolver habilidades técnicas e expandir meus conhecimentos.
Compartilho meus projetos e aprendizados nas redes sociais, como Instagram e X (antigo Twitter). Sinta-se à vontade para acompanhar minha jornada por lá!`,

    email: "Khristiantomaz@icloud.com",
  },
  experience: [
    {
      company: "Estácio de Sá",
      position: "Bacharel em Engenharia de Software",
      startDate: "julho 2022",
      endDate: "julho 2026",
      summary: [
        "Hoje me encontro no sexto semestre em Bacharel de engenharia de sofware, construindo um curriculo solido e eficaz para o mercado de trabalho.",
        "Principais disciplinas: Algoritmos, Estruturas de Dados, Banco de Dados, Engenharia de Software, Desenvolvimento Web, Programação Orientada a Objetos.",
      ],
    },
    {
      company: "DIO",
      position: ".Net Developer",
      startDate: "Fevereiro 2024",
      endDate: "Maio 2024",
      summary: [
        "curso de .Net Developer, onde aprendi a desenvolver aplicações web e desktop utilizando a plataforma .NET, com foco em C# e ASP.NET.",
        "Principais tópicos abordados: Programação Orientada a Objetos, ASP.NET Core, Entity Framework, Web API, MVC, e testes unitários.",
      ],
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "",
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "",
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `Atualmente, meu foco é construir uma carreira sólida no mercado de tecnologia, unindo minha paixão por desenvolvimento de software ao desejo constante de evolução. Busco aprender continuamente por meio de cursos, livros e projetos pessoais, sempre com o objetivo de aprimorar minhas habilidades técnicas e ampliar minha visão profissional.
Estou aberto a novas oportunidades e desafios que me permitam crescer e contribuir com soluções inovadoras. Se você procura um desenvolvedor comprometido, curioso e apaixonado pelo que faz, estou pronto para somar!
    `,
    image: "/foto-de-perfil.jpg",
  },
};


