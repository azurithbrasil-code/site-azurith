import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WA = "https://wa.me/5534999366651?text=Ol%C3%A1.%20Gostaria%20de%20solicitar%20um%20atendimento.";
const BG = "#040B16";

const processo = [
  { num: "01", titulo: "Entendimento da necessidade", texto: "Compreendemos o objetivo, o espaço e o momento do projeto. Ouvimos antes de propor qualquer solução." },
  { num: "02", titulo: "Planejamento técnico",        texto: "Orientamos soluções adequadas, definimos escopo, materiais e prazos com clareza antes de iniciar." },
  { num: "03", titulo: "Execução organizada",         texto: "Critério, proteção dos ambientes, organização do canteiro e atenção ao detalhe em cada etapa." },
  { num: "04", titulo: "Entrega e revisão",           texto: "Finalização cuidadosa, revisão completa e acompanhamento do resultado até a sua satisfação." },
];

const valores = [
  { titulo: "Organização",      texto: "Cada projeto tem começo, meio e fim definidos. Sem improvisos, sem surpresas no processo." },
  { titulo: "Transparência",    texto: "Comunicação direta e objetiva em todas as etapas. Você sabe exatamente o que esperar." },
  { titulo: "Critério técnico", texto: "Materiais adequados, técnicas corretas e atenção ao detalhe que fazem diferença no resultado final." },
  { titulo: "Respeito ao lar",  texto: "Proteção dos ambientes, pontualidade e conduta profissional do início à entrega." },
];

export default function Metodo() {
  const heroImgRef = useRef<HTMLDivElement>(null);

  // Parallax na imagem do hero
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

        /* ── LINHA DOURADA ANIMADA ── */
        .mt-title-line {
          width: 0; height: 1px; background: #D4A84F;
          margin-top: 0.88rem; margin-bottom: 0;
          transition: width 1s ease 0.2s;
        }
        .revealed .mt-title-line { width: 56px; }

        /* ── HERO — estrutura original preservada ── */
        .mt-hero {
          position: relative;
          height: 100svh;
          overflow: hidden;
          background: #040B16;
          display: flex;
        }
        .mt-hero-left {
          width: 48%;
          position: relative; z-index: 3;
          display: flex; align-items: flex-end;
          padding: 0 5vw 7rem 7vw;
        }
        .mt-hero-inner {
          display: flex; flex-direction: column; max-width: 480px;
        }
        .mt-hero-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem; letter-spacing: 0.26em;
          text-transform: uppercase; color: #D4A84F;
          margin-bottom: 1rem; display: flex;
          align-items: center; gap: 0.88rem;
          animation: fadeSlideUp 0.9s ease both;
        }
        .mt-hero-label::before {
          content: ''; display: inline-block;
          width: 24px; height: 1px;
          background: #D4A84F; opacity: 0.6;
        }

        /* H1 — padrão Serviços */
        .mt-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.4rem; font-weight: 300;
          color: #F5F5F3; line-height: 1.05;
          letter-spacing: 0.04em; margin-bottom: 1.4rem;
          animation: fadeSlideUp 0.9s ease 0.14s both;
        }
        .mt-hero-divider {
          width: 32px; height: 1px;
          background: rgba(212,168,79,0.4);
          margin-bottom: 1.6rem;
          animation: expandLine 1s ease 0.5s both;
        }
        @keyframes expandLine {
          from { width: 0; opacity: 0; }
          to   { width: 32px; opacity: 1; }
        }

        /* Parágrafo hero — padrão Serviços */
        .mt-hero p {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem; line-height: 1.9;
          color: #D4A84F;
          animation: fadeSlideUp 0.9s ease 0.28s both;
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mt-hero-right { width: 52%; position: relative; overflow: hidden; }
        .mt-hero-right-inner {
          position: absolute; inset: -5% 0;
          will-change: transform;
        }
        .mt-hero-right img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          filter: contrast(1.06) saturate(0.9) brightness(0.95);
          display: block;
        }
        .mt-hero-grad {
          position: absolute; inset: 0; z-index: 1;
          pointer-events: none;
          background: linear-gradient(90deg,
            rgba(4,11,22,1) 0%,
            rgba(4,11,22,0.92) 14%,
            rgba(4,11,22,0.65) 30%,
            rgba(4,11,22,0.2) 55%,
            rgba(4,11,22,0) 80%
          );
        }

        /* ── LABELS / TÍTULOS DE SEÇÃO — padrão Serviços ── */
        .mt-section-label {
          font-family: 'Outfit', sans-serif; font-size: 0.7rem;
          letter-spacing: 0.26em; text-transform: uppercase;
          color: #D4A84F; margin-bottom: 0.6rem; display: block;
        }
        .mt-section-titulo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem; font-weight: 300;
          color: #F5F5F3; line-height: 1.1; letter-spacing: 0.04em;
        }
          .mt-num-titulo {
  font-family: 'Outfit', sans-serif;
  font-weight: 200;
  letter-spacing: 0.04em;
  position: relative;
  top: -0.05em;
}
        .mt-section-sub {
          font-family: 'Outfit', sans-serif; font-size: 0.88rem;
          color: #8A9CB6; line-height: 1.2; margin-top: 1.2rem; max-width: 560px;
        }

        /* ── PROCESSO ── */
        .mt-processo {
          background: #07111F;
          padding: 6rem 0 6rem 7vw;
          border-top: 1px solid rgba(212,168,79,0.08);
          overflow: hidden;
        }
        .mt-processo-header { padding-right: 7vw; margin-bottom: 3rem; }

        .mt-track {
          display: flex; gap: 1.2rem; padding-right: 7vw;
          overflow-x: auto; scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch; scrollbar-width: none; cursor: grab;
        }
        .mt-track::-webkit-scrollbar { display: none; }
        .mt-track:active { cursor: grabbing; }

        /* Card — padrão sv-grid-card */
        .mt-card {
          flex: 0 0 calc(25% - 0.9rem); min-width: 240px;
          scroll-snap-align: start;
          background: #040B16;
          padding: 2.6rem 2rem;
          display: flex; flex-direction: column; gap: 0.88rem;
          border: 1px solid rgba(212,168,79,0.07);
          position: relative; overflow: hidden;
          transition: background 0.4s ease, border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
        }
        .mt-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,168,79,0.6), transparent);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .mt-card:hover {
          background: rgba(212,168,79,0.025);
          border-color: rgba(212,168,79,0.22);
          transform: translateY(-4px);
          box-shadow: 0 18px 42px rgba(0,0,0,0.4);
        }
        .mt-card:hover::before { opacity: 1; }

        .mt-num {
          font-family: 'Outfit', serif; font-size: 2.8rem; font-weight: 300;
          color: rgba(212,168,79,0.06); position: absolute;
          top: 0.6rem; right: 0.88rem; line-height: 1;
          pointer-events: none; user-select: none;
          transition: color 0.4s ease;
        }
        .mt-card:hover .mt-num { color: rgba(212,168,79,0.11); }

        .mt-linha {
          width: 48px; height: 1px; background: rgba(212,168,79,0.35);
          transition: width 0.4s ease, background 0.4s ease;
        }
        .mt-card:hover .mt-linha { width: 60px; background: rgba(212,168,79,0.7); }

        /* Título card — padrão sv-card-titulo */
        .mt-card-titulo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem; font-weight: 400;
          letter-spacing: 0.06em; color: #F5F5F3; line-height: 1.2;
          transition: color 0.3s ease;
        }
        .mt-card:hover .mt-card-titulo { color: #EDD99A; }

        /* Texto card — padrão sv-card-texto */
        .mt-card-texto {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem; line-height: 1.85; color: #8A9CB6;
        }

        /* ── VALORES ── */
        .mt-valores {
          background: #040B16; padding: 6rem 7vw;
          border-top: 1px solid rgba(212,168,79,0.08);
        }
        .mt-valores-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px;
          margin-top: 3rem;
        }

        /* Card valor — padrão sv-grid-card */
        .mt-valor-card {
          background: #040B16;
          padding: 2.6rem 2rem;
          display: flex; flex-direction: column; gap: 0.88rem;
          border: 1px solid rgba(212,168,79,0.07);
          position: relative; overflow: hidden;
          transition: background 0.4s ease, border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
        }
        .mt-valor-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,168,79,0.6), transparent);
          opacity: 0; transition: opacity 0.4s ease;
        }
        .mt-valor-card:hover {
          background: rgba(212,168,79,0.025);
          border-color: rgba(212,168,79,0.22);
          transform: translateY(-4px);
          box-shadow: 0 18px 42px rgba(0,0,0,0.4);
        }
        .mt-valor-card:hover::before { opacity: 1; }

        .mt-valor-linha {
          width: 18px; height: 1px; background: rgba(212,168,79,0.35);
          transition: width 0.4s ease, background 0.4s ease;
        }
        .mt-valor-card:hover .mt-valor-linha { width: 40px; background: rgba(212,168,79,0.7); }

        /* Título valor — padrão sv-card-titulo */
        .mt-valor-titulo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem; font-weight: 400;
          letter-spacing: 0.06em; color: #F5F5F3; line-height: 1.2;
          transition: color 0.3s ease;
        }
        .mt-valor-card:hover .mt-valor-titulo { color: #EDD99A; }

        /* Texto valor — padrão sv-card-texto */
        .mt-valor-texto {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem; line-height: 1.85; color: #8A9CB6;
        }

        /* ── CTA — padrão Serviços ── */
        .mt-cta {
          background: #07111F; padding: 6rem 7vw;
          border-top: 1px solid rgba(212,168,79,0.1); text-align: center;
        }
        .mt-cta h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem; font-weight: 300;
          color: #F5F5F3; line-height: 1.2;
          max-width: 480px; margin: 0 auto 2.5rem;
        }
        .mt-cta-btn {
          display: inline-flex; align-items: center; gap: 0.55rem;
          padding: 14px 36px;
          border: 1px solid rgba(212,168,79,0.55);
          color: #D4A84F; text-decoration: none;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.2em; font-size: 0.7rem; text-transform: uppercase;
          transition: all 0.35s ease;
          background: rgba(255,255,255,0.01); backdrop-filter: blur(4px);
        }
        .mt-cta-btn:hover {
          background: rgba(212,168,79,0.08);
          border-color: #D4A84F; letter-spacing: 0.24em;
        }

        /* ── MOBILE — padrão Serviços ── */
        @media (max-width: 768px) {
          .mt-hero { flex-direction: column; height: 65vh; min-height: 420px; }
          .mt-hero-left {
            width: 100%; position: absolute; inset: 0; z-index: 3;
            padding: 100px 24px 40px; align-items: flex-end;
          }
          .mt-hero-inner { max-width: 100%; }
          .mt-hero-right { position: absolute; inset: 0; width: 100%; }
          .mt-hero-right img { object-position: center top; }
          .mt-hero-right::after {
            content: ''; position: absolute; inset: 0;
            background: linear-gradient(to bottom, rgba(4,11,22,0.35) 0%, rgba(4,11,22,0.88) 100%);
          }
          .mt-hero h1 { font-size: 2.6rem; }
          .mt-hero p { font-size: 0.95rem; }

          .mt-processo { padding: 4rem 0 4rem 24px; }
          .mt-processo-header { padding-right: 24px; }
          .mt-section-titulo { font-size: 2rem; }
          .mt-section-sub { font-size: 0.95rem; }
        
          .mt-track { padding-right: 24px; }
          .mt-card { flex: 0 0 80vw; min-width: unset; }

          .mt-valores { padding: 4rem 24px; }
          .mt-valores-grid { grid-template-columns: 1fr; margin-top: 2rem; }

          .mt-cta { padding: 4rem 24px; }
          .mt-cta h2 { font-size: 2.4rem; }
          .mt-cta-btn { width: 100%; max-width: 280px; justify-content: center; }
        }
      `}</style>

      <Navbar />

      {/* ── HERO — estrutura original ── */}
      <section className="mt-hero">
        <div className="mt-hero-left">
          <div className="mt-hero-inner">
            <p className="mt-hero-label">Método</p>
            <h1>Como conduzimos cada projeto.</h1>
            <div className="mt-hero-divider" />
            <p>Clareza, organização e acompanhamento do início à entrega. Cada etapa planejada para que você saiba exatamente o que esperar.</p>
          </div>
        </div>
        <div className="mt-hero-right">
          <div className="mt-hero-right-inner" ref={heroImgRef}>
            <img src="/metodo.png" alt="Método Azurith" />
          </div>
          <div className="mt-hero-grad" />
        </div>
      </section>

      {/* ── PROCESSO ── */}
      <section className="mt-processo">
        <div className="mt-processo-header reveal">
          <span className="mt-section-label">Processo</span>
          <h2 className="mt-section-titulo">
  <span className="mt-num-titulo">4</span> etapas. Sem improvisos.
</h2>
          <div className="mt-title-line" />
          <p className="mt-section-sub">Do primeiro contato à entrega final, com organização e critério.</p>
        </div>
        <div className="mt-track">
          {processo.map((p, i) => (
            <div key={i} className={`mt-card reveal reveal-delay-${i + 1}`}>
              <span className="mt-num">{p.num}</span>
              <div className="mt-linha" />
              <p className="mt-card-titulo">{p.titulo}</p>
              <p className="mt-card-texto">{p.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALORES ── */}
      <section className="mt-valores">
        <div className="reveal">
          <span className="mt-section-label">Princípios</span>
          <h2 className="mt-section-titulo">O que guia nossa execução.</h2>
          <div className="mt-title-line" />
        </div>
        <div className="mt-valores-grid">
          {valores.map((v, i) => (
            <div key={i} className={`mt-valor-card reveal reveal-delay-${i % 2 + 1}`}>
              <div className="mt-valor-linha" />
              <p className="mt-valor-titulo">{v.titulo}</p>
              <p className="mt-valor-texto">{v.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mt-cta">
        <div className="reveal">
          <h2>Seu projeto merece uma transformação conduzida com mais atenção aos detalhes.</h2>
          <div className="mt-title-line" style={{ margin: "0 auto 2.5rem" }} />
          <a className="mt-cta-btn" href={WA} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={14} />
            Iniciar atendimento
          </a>
        </div>
      </section>
<Footer />
    </>
  );
}
