import { useState, useEffect, useRef } from "react";
import { MessageCircle, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WA = "https://wa.me/5534999366651?text=Ol%C3%A1.%20Gostaria%20de%20solicitar%20um%20atendimento.";
const BG   = "#040B16";
const BG2  = "#07111F";
const GOLD = "#D4A84F";

const servicos = [
  {
    titulo: "Reformas",
    texto: "Transformação de ambientes com planejamento técnico, organização da execução e cuidado em cada etapa do processo.",
    icon: (<svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="#D4A84F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="22" height="22" rx="1.5" /><line x1="2" y1="9" x2="24" y2="9" /><line x1="13" y1="9" x2="13" y2="24" /></svg>)
  },
  {
    titulo: "Pintura",
    texto: "Acabamento refinado, preparação adequada das superfícies e atenção aos detalhes, com proteção dos ambientes durante toda a execução.",
    icon: (<svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="#D4A84F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 20 L4 24" /><rect x="6" y="14" width="6" height="8" rx="1" /><path d="M8 14 L18 4 C19.5 2.5 21.5 2.5 23 4 C24.5 5.5 24.5 7.5 23 9 L13 19" /></svg>)
  },
  {
    titulo: "Revitalização de Ambientes",
    texto: "Renovação estética e funcional pensada para elevar conforto, harmonia visual e valorização dos espaços.",
    icon: (<svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="#D4A84F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 3 C13 3 5 8 5 15 C5 19.4 8.6 23 13 23 C17.4 23 21 19.4 21 15 C21 8 13 3 13 3Z" /><path d="M13 23 L13 16" /><path d="M9 19 L13 16 L17 19" /></svg>)
  },
  {
    titulo: "Acabamentos",
    texto: "Soluções em revestimentos, iluminação e detalhes construtivos que ampliam a percepção de qualidade do ambiente.",
    icon: (<svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="#D4A84F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 24,13 13,24 2,13" /><line x1="2" y1="13" x2="24" y2="13" /><line x1="13" y1="2" x2="13" y2="24" /></svg>)
  },
  {
    titulo: "Soluções Complementares",
    texto: "Instalações, ajustes e melhorias integradas para proporcionar praticidade, funcionalidade e melhor desempenho dos espaços.",
    icon: (<svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="#D4A84F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="13" r="3" /><path d="M13 2 L13 6 M13 20 L13 24 M2 13 L6 13 M20 13 L24 13" /><path d="M5.5 5.5 L8.4 8.4 M17.6 17.6 L20.5 20.5 M20.5 5.5 L17.6 8.4 M8.4 17.6 L5.5 20.5" /></svg>)
  },
  {
    titulo: "Manutenção",
    texto: "Cuidados contínuos voltados à preservação da estética, funcionalidade e durabilidade dos ambientes.",
    icon: (<svg width="24" height="24" viewBox="0 0 26 26" fill="none" stroke="#D4A84F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 C20 6 22 8 22 11 C22 14 20 16 17 16 L8 24 C7 25 5 25 4 24 C3 23 3 21 4 20 L12 11 C12 8 14 6 17 6 C18 6 19 6 20 6Z" /><circle cx="6.5" cy="21.5" r="1" fill="#D4A84F" /></svg>)
  },
];

export default function Servicos() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // Parallax no hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.28}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── SCROLL REVEAL ── */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.08s; }
        .reveal-delay-2 { transition-delay: 0.16s; }
        .reveal-delay-3 { transition-delay: 0.24s; }
        .reveal-delay-4 { transition-delay: 0.32s; }
        .reveal-delay-5 { transition-delay: 0.40s; }
        .reveal-delay-6 { transition-delay: 0.48s; }

        /* ── HERO ── */
        .sv-hero {
          position: relative; width: 100%; height: 50vh; min-height: 680px;
          overflow: hidden; display: flex; align-items: flex-end;
          padding-bottom: 5rem; padding-top: 72px;
        }
        .sv-hero-bg-wrap {
          position: absolute; inset: 0% 0;
          will-change: transform;
        }
        .sv-hero img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center 25%;
          filter: contrast(1.06) saturate(0.9) brightness(0.72);
          display: block;
        }
        .sv-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(4,11,22,0.95) 0%,
            rgba(4,11,22,0.5) 45%,
            rgba(4,11,22,0.08) 100%
          );
        }
        .sv-hero-content {
          position: relative; z-index: 2;
          padding: 0 7vw; max-width: 680px;
        }

        /* Hero entry animations */
        .sv-hero-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem; color: #D4A84F;
          letter-spacing: 0.26em; text-transform: uppercase;
          margin-bottom: 1rem; display: block;
          animation: fadeSlideUp 0.9s ease both;
        }
        .sv-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4.2rem; font-weight: 300;
          color: #F5F5F3; line-height: 1.05;
          letter-spacing: 0.04em; margin-bottom: 1.2rem;
          animation: fadeSlideUp 0.9s ease 0.14s both;
        }
        .sv-hero p {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem; line-height: 1.9;
          color: rgba(245,245,243,0.65); max-width: 440px;
          animation: fadeSlideUp 0.9s ease 0.26s both;
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── GRID DESKTOP ── */
        .sv-grid {
          background: #040B16;
          padding: 6rem 7vw;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          border-top: 1px solid rgba(212,168,79,0.08);
        }
        .sv-grid-card {
          background: #040B16;
          padding: 2.6rem 2rem;
          display: flex; flex-direction: column; gap: 1rem;
          border: 1px solid rgba(212,168,79,0.07);
          transition: background 0.4s ease, border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
          position: relative; overflow: hidden;
        }
        /* Linha dourada topo ao hover */
        .sv-grid-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,168,79,0.6), transparent);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .sv-grid-card:hover {
          background: rgba(212,168,79,0.025);
          border-color: rgba(212,168,79,0.22);
          transform: translateY(-4px);
          box-shadow: 0 18px 42px rgba(0,0,0,0.4);
        }
        .sv-grid-card:hover::before { opacity: 1; }

        /* Ícone com brilho ao hover */
        .sv-card-icon {
          transition: filter 0.35s ease, transform 0.35s ease;
        }
        .sv-grid-card:hover .sv-card-icon {
          filter: drop-shadow(0 0 6px rgba(212,168,79,0.5));
          transform: scale(1.08);
        }

        /* Linha expansível */
        .sv-linha {
          width: 18px; height: 1px;
          background: rgba(212,168,79,0.35);
          transition: width 0.4s ease, background 0.4s ease;
        }
        .sv-grid-card:hover .sv-linha {
          width: 40px;
          background: rgba(212,168,79,0.7);
        }

        /* Título do card */
        .sv-card-titulo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem; font-weight: 400;
          letter-spacing: 0.06em; color: #F5F5F3;
          line-height: 1.2;
          transition: color 0.3s ease;
        }
        .sv-grid-card:hover .sv-card-titulo { color: #EDD99A; }

        /* Texto do card */
        .sv-card-texto {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem; line-height: 1.85; color: #8A9CB6;
        }

        /* ── ACCORDION MOBILE ── */
        .sv-accordion {
          display: none;
          background: #040B16;
          padding: 0 24px 3rem;
          flex-direction: column;
          border-top: 1px solid rgba(212,168,79,0.08);
        }
        .sv-acc-item { border-bottom: 1px solid rgba(212,168,79,0.1); }
        .sv-acc-header {
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 1.4rem 0; cursor: pointer; gap: 1rem;
          background: none; border: none; width: 100%; text-align: left;
          transition: opacity 0.2s ease;
        }
        .sv-acc-header:active { opacity: 0.7; }
        .sv-acc-left { display: flex; align-items: center; gap: 0.9rem; }

        /* Título accordion */
        .sv-acc-titulo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem; font-weight: 400;
          letter-spacing: 0.05em; color: #F5F5F3;
          line-height: 1.2;
        }
        .sv-acc-chevron { transition: transform 0.35s ease; flex-shrink: 0; color: #D4A84F; }
        .sv-acc-chevron.open { transform: rotate(180deg); }
        .sv-acc-body {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease;
          max-height: 0; opacity: 0;
        }
        .sv-acc-body.open { max-height: 220px; opacity: 1; }

        /* Texto accordion */
        .sv-acc-texto {
          font-family: 'Outfit', sans-serif;
          font-size: 0.92rem; line-height: 1.85; color: #8A9CB6;
          padding-bottom: 1.4rem;
          padding-left: calc(24px + 0.9rem);
        }

        /* ── CTA ── */
        .sv-cta {
          background: #07111F;
          padding: 6rem 7vw;
          border-top: 1px solid rgba(212,168,79,0.1);
        }
        .sv-cta h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem; font-weight: 300;
          color: #F5F5F3; line-height: 1.2;
          max-width: 480px; margin-bottom: 2.5rem;
        }
        .sv-cta-btn {
          display: inline-flex; align-items: center; gap: 0.55rem;
          padding: 14px 36px;
          border: 1px solid rgba(212,168,79,0.55);
          color: #D4A84F; text-decoration: none;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.2em; font-size: 0.7rem;
          text-transform: uppercase;
          transition: all 0.35s ease;
          background: rgba(255,255,255,0.01); backdrop-filter: blur(4px);
        }
        .sv-cta-btn:hover {
          background: rgba(212,168,79,0.08);
          border-color: #D4A84F;
          letter-spacing: 0.24em;
        }

        /* ── LINHA DOURADA TÍTULO DE SEÇÃO ── */
        .sv-title-line {
          width: 0; height: 1px; background: #D4A84F;
          margin-bottom: 0; margin-top: 0.8rem;
          transition: width 1s ease 0.2s;
        }
        .revealed .sv-title-line { width: 56px; }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .sv-hero { height: 30vh; min-height: 420px; padding-bottom: 3.5rem; }
          .sv-hero-bg-wrap { inset: 0; }
          .sv-hero img { object-position: center 70%; }
          .sv-hero h1 { font-size: 2.6rem; }
          .sv-hero p { font-size: 0.95rem; }
          .sv-hero-content { padding: 0 24px; }
          .sv-grid { display: none; }
          .sv-accordion { display: flex; }
          .sv-cta { padding: 4rem 24px; text-align: center; }
          .sv-cta h2 { font-size: 2rem; max-width: 100%; margin-left: auto; margin-right: auto; }
          .sv-cta-btn { width: 100%; max-width: 280px; justify-content: center; }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <div className="sv-hero">
        <div className="sv-hero-bg-wrap" ref={heroImgRef}>
          <img src="/servicos.png" alt="Azurith em execução" />
        </div>
        <div className="sv-hero-overlay" />
        <div className="sv-hero-content">
          <span className="sv-hero-label">O que fazemos</span>
          <h1>Serviços</h1>
          <p>Cada serviço executado com critério, organização e atenção ao detalhe.</p>
        </div>
      </div>

      {/* GRID DESKTOP */}
      <div className="sv-grid">
        {servicos.map((s, i) => (
          <div key={i} className={`sv-grid-card reveal reveal-delay-${i + 1}`}>
            <div className="sv-card-icon">{s.icon}</div>
            <div className="sv-linha" />
            <p className="sv-card-titulo">{s.titulo}</p>
            <p className="sv-card-texto">{s.texto}</p>
          </div>
        ))}
      </div>

      {/* ACCORDION MOBILE */}
      <div className="sv-accordion">
        {servicos.map((s, i) => (
          <div key={i} className="sv-acc-item">
            <button className="sv-acc-header" onClick={() => toggle(i)}>
              <div className="sv-acc-left">
                {s.icon}
                <span className="sv-acc-titulo">{s.titulo}</span>
              </div>
              <ChevronDown size={16} strokeWidth={1.5} className={`sv-acc-chevron ${openIndex === i ? "open" : ""}`} />
            </button>
            <div className={`sv-acc-body ${openIndex === i ? "open" : ""}`}>
              <p className="sv-acc-texto">{s.texto}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="sv-cta">
        <div className="reveal">
          <h2>Fale com um especialista e descubra a melhor solução para seu projeto.</h2>
          <div className="sv-title-line" />
          <br />
          <a className="sv-cta-btn" href={WA} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={13} />
            Iniciar atendimento
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
