import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WA = "https://wa.me/5534999366651";
const BG = "#050A14";

const tendencias = [
  { cor: "#2C2118", nome: "Silhouette", codigo: "AF-655", marca: "Benjamin Moore", descricao: "Marrom expresso profundo com nuances de carvão. Uma alternativa sofisticada ao preto, trazendo presença, aconchego e elegância atemporal." },
  { cor: "#1B3A6B", nome: "Azul Puro", codigo: "Cor do Ano 2026", marca: "Coral", descricao: "Azul autêntico e versátil com profundidade emocional. Equilibra serenidade, criatividade e presença visual nos ambientes." },
  { cor: "#8BA832", nome: "Cipó da Amazônia", codigo: "N879", marca: "Suvinil", descricao: "Verde-amarelado orgânico inspirado na natureza brasileira. Frescor, equilíbrio e vitalidade para interiores contemporâneos." },
  { cor: "#C4A882", nome: "Cáqui Universal", codigo: "SW 6150", marca: "Sherwin-Williams", descricao: "Neutro quente, sóbrio e atemporal. Cria ambientes acolhedores, elegantes e guiados pela simplicidade essencial." },
];

const paletas = [
  { nome: "Luxo Discreto", descricao: "Contraste elegante com profundidade visual refinada.", estilo: "Pedra natural • metais suaves • sofisticação atemporal", cores: ["#2B2621","#B8955A","#E8DED1","#5C5146"] },
  { nome: "Minimalista Contemporâneo", descricao: "Equilíbrio neutro com clareza arquitetônica.", estilo: "Linhas limpas • amplitude visual", cores: ["#E8E4DF","#B8B0A4","#4A4A4A","#FFFFFF"] },
  { nome: "Terra & Natureza", descricao: "Calor orgânico com personalidade contemporânea.", estilo: "Madeira • textura • acolhimento", cores: ["#C4714A","#4A5E4A","#D4C4A8","#8B6B4A"] },
  { nome: "Azul Urbano", descricao: "Profundidade moderna com presença arquitetônica.", estilo: "Elegância urbana • contraste sofisticado", cores: ["#1B2D4F","#3D506B","#D9D7D2","#B8955A"] },
];

const galeria = [
  { src: "/Azul_profundo_Sala.jpg",          label: "Azul Profundo · Sala" },
  { src: "/Cimento_queimado_escritorio.jpg", label: "Cimento Queimado · Escritório" },
  { src: "/Mostarda_corredor.jpg",           label: "Mostarda · Corredor" },
  { src: "/Off_white_Quarto.jpg",            label: "Off White · Quarto" },
  { src: "/Terracota_Cozinha.jpg",           label: "Terracota · Cozinha" },
  { src: "/Verde_profundo_Home_office.jpg",  label: "Verde Profundo · Home Office" },
];

export default function InspireSe() {
  const heroImgRef = useRef(null);

  // Parallax no hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroImgRef.current) {
        const scrollY = window.scrollY;
        heroImgRef.current.style.transform = `translateY(${scrollY * 0.28}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll reveal com Intersection Observer
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
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── RESET / BASE ── */
        *, *::before, *::after { box-sizing: border-box; }

        /* ── SCROLL REVEAL ── */
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }

        /* ── HERO ── */
        .is-hero {
          position: relative; width: 100%; height: 95vh; min-height: 560px;
          overflow: hidden; display: flex; align-items: flex-end;
          padding-bottom: 6rem; padding-top: 72px;
        }
        .is-hero-bg-wrap {
          position: absolute; inset: -15% 0; /* espaço extra para o parallax */
          will-change: transform;
        }
        .is-hero img.is-hero-bg {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center 20%;
          filter: contrast(1.02) saturate(0.82) brightness(0.58);
          display: block;
        }
        .is-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top,
            rgba(5,10,20,0.96) 0%, rgba(5,10,20,0.72) 35%,
            rgba(5,10,20,0.22) 68%, rgba(5,10,20,0.06) 100%);
        }
        .is-hero-content {
          position: relative; z-index: 2; padding: 0 7vw; max-width: 720px;
        }

        /* Hero entry animations */
        .is-hero-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.72rem; color: #B8955A; letter-spacing: 0.26em;
          text-transform: uppercase; margin-bottom: 1rem; display: block;
          animation: fadeSlideUp 0.9s ease both;
        }
        .is-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4rem; font-weight: 300;
          color: #F5F5F3; line-height: 1.1; letter-spacing: 0.01em; margin-bottom: 1.2rem;
          animation: fadeSlideUp 0.9s ease 0.15s both;
        }
        .is-hero p {
          font-family: 'Outfit', sans-serif; font-size: 1rem; line-height: 1.85;
          color: rgba(245,245,243,0.62); max-width: 460px; margin-bottom: 2rem;
          animation: fadeSlideUp 0.9s ease 0.28s both;
        }
        .is-hero-btn {
          display: inline-flex; align-items: center; gap: 0.7rem;
          padding: 13px 32px; border: 1px solid rgba(184,149,90,0.28);
          color: #B8955A; background: rgba(255,255,255,0.01); backdrop-filter: blur(10px);
          font-family: 'Outfit', sans-serif; letter-spacing: 0.2em; font-size: 0.68rem;
          text-transform: uppercase; transition: all 0.35s ease; cursor: pointer;
          animation: fadeSlideUp 0.9s ease 0.4s both;
        }
        .is-hero-btn:hover {
          background: rgba(184,149,90,0.08); border-color: rgba(184,149,90,0.5);
          letter-spacing: 0.24em;
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── SEÇÕES ── */
        .is-section { padding: 7rem 7vw; border-top: 1px solid rgba(255,255,255,0.04); }

        .is-section-label {
          font-family: 'Outfit', sans-serif; font-size: 0.68rem;
          letter-spacing: 0.24em; text-transform: uppercase; color: #B8955A; margin-bottom: 0.6rem;
        }
        .is-title {
          font-family: 'Cormorant Garamond', serif; font-size: 3rem; font-weight: 300;
          color: #F5F5F3; letter-spacing: 0.05em; margin-bottom: 0.8rem; line-height: 1.1;
        }

        /* Linha dourada animada sob o título */
        .is-title-line {
          width: 0; height: 1px; background: #B8955A;
          margin-bottom: 1.4rem;
          transition: width 1s ease 0.2s;
        }
        .revealed .is-title-line,
        .is-title-line.revealed {
          width: 56px;
        }

        .is-sub {
          font-family: 'Outfit', sans-serif; font-size: 1rem;
          color: #8A9CB6; line-height: 1.8; margin-bottom: 3rem; max-width: 560px;
        }

        /* ── TENDÊNCIAS ── */
        .is-tend { background: #0A1322; }
        .is-tend-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.2rem; }

        .is-card {
          position: relative; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.04); padding: 2rem;
          background: linear-gradient(180deg, rgba(255,255,255,0.015) 0%, rgba(255,255,255,0.005) 100%);
          backdrop-filter: blur(14px); transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .is-card:hover {
          transform: translateY(-5px);
          border-color: rgba(184,149,90,0.22);
          box-shadow: 0 20px 48px rgba(0,0,0,0.35);
        }
        /* Linha superior dourada ao hover */
        .is-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #B8955A, transparent);
          opacity: 0; transition: opacity 0.35s ease;
        }
        .is-card:hover::before { opacity: 1; }

        /* Shimmer no swatch */
        .is-swatch {
          position: relative; width: 100%; height: 110px; border-radius: 4px;
          margin-bottom: 1.4rem; border: 1px solid rgba(255,255,255,0.05);
          overflow: hidden;
        }
        .is-swatch::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(110deg,
            transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0s;
        }
        .is-card:hover .is-swatch::after {
          transform: translateX(100%);
          transition: transform 0.65s ease;
        }

        .is-card-title {
          font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 400;
          letter-spacing: 0.04em; color: #F5F5F3; margin-bottom: 0.4rem; line-height: 1.2;
        }
        .is-card-meta {
          color: #B8955A; font-size: 0.68rem; letter-spacing: 0.14em;
          text-transform: uppercase; margin-bottom: 0.9rem;
          font-family: 'Outfit', sans-serif; opacity: .88;
        }
        .is-card-desc {
          font-family: 'Outfit', sans-serif; font-size: 0.9rem; line-height: 1.75; color: #8A9CB6;
        }

        /* ── PALETAS ── */
        .is-paletas { background: #050A14; }
        .is-paletas-track { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.4rem; }
        .is-paleta-card { padding: 0; overflow: hidden; }
        .is-paleta-banner { display: flex; height: 110px; overflow: hidden; }
        .is-paleta-cor {
          flex: 1; transition: flex 0.4s ease;
        }
        .is-paleta-card:hover .is-paleta-cor:hover { flex: 1.8; }
        .is-paleta-content { padding: 1.6rem; }
        .is-paleta-estilo {
          font-family: 'Outfit', sans-serif; font-size: 0.68rem; letter-spacing: 0.18em;
          text-transform: uppercase; color: #B8955A; margin-bottom: 0.8rem; opacity: .9;
        }

        /* ── GALERIA ── */
        .is-galeria { background: #0A1322; }
        .is-galeria-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.9rem; }
        .is-galeria-item { position: relative; overflow: hidden; aspect-ratio: 4/3; cursor: pointer; }
        .is-galeria-img {
          width: 100%; height: 100%; object-fit: cover;
          display: block; transition: transform 0.7s ease;
        }
        .is-galeria-item:hover .is-galeria-img { transform: scale(1.08); }

        /* Overlay base */
        .is-galeria-item::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(5,10,20,.82) 0%, rgba(5,10,20,.1) 55%);
          transition: background 0.4s ease;
        }
        .is-galeria-item:hover::after {
          background: linear-gradient(to top, rgba(5,10,20,.92) 0%, rgba(5,10,20,.32) 100%);
        }

        /* Label da galeria — sobe ao hover */
        .is-galeria-label {
          position: absolute; bottom: 1rem; left: 1rem; z-index: 3;
          font-family: 'Outfit', sans-serif; font-size: 0.7rem; letter-spacing: 0.16em;
          text-transform: uppercase; color: rgba(245,245,243,.82);
          transition: bottom 0.35s ease, color 0.35s ease;
        }
        .is-galeria-item:hover .is-galeria-label {
          bottom: 1.4rem; color: #F5F5F3;
        }

        /* Linha dourada que aparece sob o label ao hover */
        .is-galeria-line {
          position: absolute; bottom: 0.85rem; left: 1rem; z-index: 3;
          height: 1px; width: 0; background: #B8955A;
          transition: width 0.4s ease 0.1s;
        }
        .is-galeria-item:hover .is-galeria-line { width: 36px; }

        /* ── CTA ── */
        .is-cta { background: #050A14; text-align: center; }
        .is-cta h2 {
          font-family: 'Cormorant Garamond', serif; font-size: 3rem; font-weight: 300;
          color: #F5F5F3; line-height: 1.2; max-width: 700px; margin: 0 auto 1rem;
        }
        .is-cta p {
          font-family: 'Outfit', sans-serif; font-size: 1rem; line-height: 1.85;
          color: #8A9CB6; max-width: 460px; margin: 0 auto 2.5rem;
        }
        .is-cta-btn {
          display: inline-flex; align-items: center; gap: .6rem;
          padding: 15px 40px; background: #B8955A; color: #050A14;
          text-decoration: none; font-family: 'Outfit', sans-serif;
          letter-spacing: .2em; text-transform: uppercase; font-size: 0.7rem;
          font-weight: 500; transition: background 0.3s, letter-spacing 0.3s;
        }
        .is-cta-btn:hover { background: #c6a066; letter-spacing: 0.24em; }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .is-hero { height: 65vh; min-height: 420px; padding-bottom: 3rem; }
          .is-hero h1 { font-size: 2.4rem; }
          .is-hero p { font-size: 0.95rem; }
          .is-hero-content { padding: 0 24px; }

          .is-section { padding: 4.5rem 24px; }
          .is-title { font-size: 2.2rem; }
          .is-sub { font-size: 0.95rem; }

          .is-tend-grid { grid-template-columns: 1fr; }
          .is-card-title { font-size: 1.4rem; }

          .is-paletas-track { grid-template-columns: 1fr; }

          .is-galeria-grid { grid-template-columns: 1fr; gap: 0.8rem; }

          .is-cta h2 { font-size: 2.2rem; }
          .is-cta p { font-size: 0.95rem; }
          .is-cta-btn { width: 100%; max-width: 280px; justify-content: center; }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <div className="is-hero">
        <div className="is-hero-bg-wrap" ref={heroImgRef}>
          <img src="/inspire-se.png" alt="Inspire-se — Azurith" className="is-hero-bg" />
        </div>
        <div className="is-hero-overlay" />
        <div className="is-hero-content">
          <span className="is-hero-label">Inspire-se</span>
          <h1>Cores que transformam ambientes.</h1>
          <p>Referências, cores e acabamentos para ambientes bem planejados.</p>
          <button
            className="is-hero-btn"
            onClick={() => document.getElementById("tendencias")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explorar Tendências
          </button>
        </div>
      </div>

      {/* TENDÊNCIAS */}
      <section className="is-section is-tend" id="tendencias">
        <div className="reveal">
          <p className="is-section-label">2026</p>
          <h2 className="is-title">Tendências 2026</h2>
          <div className="is-title-line" />
          <p style={{ color:"#B8955A", fontSize:"0.68rem", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"1rem", fontFamily:"'Outfit', sans-serif" }}>
            Cores selecionadas por estúdios, marcas e projetos contemporâneos
          </p>
          <p className="is-sub">Selecionamos algumas das principais cores de 2026 para inspirar projetos atuais e cheios de personalidade.</p>
        </div>
        <div className="is-tend-grid">
          {tendencias.map((t, i) => (
            <div key={i} className={`is-card reveal reveal-delay-${i + 1}`}>
              <div className="is-swatch" style={{ background: t.cor }} />
              <p className="is-card-title">{t.nome}</p>
              <p className="is-card-meta">{t.marca} • {t.codigo}</p>
              <p className="is-card-desc">{t.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PALETAS */}
      <section className="is-section is-paletas">
        <div className="reveal">
          <p className="is-section-label">Combinações</p>
          <h2 className="is-title">Paletas Selecionadas</h2>
          <div className="is-title-line" />
          <p className="is-sub">Combinações equilibradas para diferentes estilos.</p>
        </div>
        <div className="is-paletas-track">
          {paletas.map((p, i) => (
            <div key={i} className={`is-card is-paleta-card reveal reveal-delay-${i % 2 + 1}`}>
              <div className="is-paleta-banner">
                {p.cores.map((c, j) => (
                  <div key={j} className="is-paleta-cor" style={{ background: c }} />
                ))}
              </div>
              <div className="is-paleta-content">
                <p className="is-card-title">{p.nome}</p>
                <p className="is-paleta-estilo">{p.estilo}</p>
                <p className="is-card-desc">{p.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIA */}
      <section className="is-section is-galeria">
        <div className="reveal">
          <p className="is-section-label">Referências</p>
          <h2 className="is-title">Inspire seu próximo projeto.</h2>
          <div className="is-title-line" />
          <p className="is-sub">Referências visuais para orientar escolhas de cores e acabamentos.</p>
        </div>
        <div className="is-galeria-grid">
          {galeria.map((item, i) => (
            <div key={i} className={`is-galeria-item reveal reveal-delay-${(i % 3) + 1}`}>
              <img src={item.src} alt={item.label} className="is-galeria-img" />
              <div className="is-galeria-label">{item.label}</div>
              <div className="is-galeria-line" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="is-section is-cta">
        <div className="reveal">
          <h2>Ambientes bem executados começam com escolhas bem orientadas.</h2>
          <p>Nossa equipe auxilia na definição de cores, acabamentos e soluções alinhadas ao seu espaço.</p>
          <a className="is-cta-btn" href={WA} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={14} />
            Solicitar Consultoria
          </a>
        </div>
      </section>
<Footer />
    </>
  );
}
