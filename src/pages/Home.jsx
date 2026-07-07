import { useEffect } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WA   = "https://wa.me/5534999366651?text=Ol%C3%A1.%20Gostaria%20de%20solicitar%20um%20atendimento.";
const BG   = "#040B16";
const GOLD = "#D4A84F";

const servicos = [
  { titulo: "Pintura", texto: "Preparação adequada, proteção dos ambientes e acabamento refinado.", img: "/pintura.png", icon: (<svg width="22" height="22" viewBox="0 0 26 26" fill="none" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 20 L4 24" /><rect x="6" y="14" width="6" height="8" rx="1" /><path d="M8 14 L18 4 C19.5 2.5 21.5 2.5 23 4 C24.5 5.5 24.5 7.5 23 9 L13 19" /></svg>) },
  { titulo: "Reformas", texto: "Reformas conduzidas com organização, planejamento e atenção à estética do ambiente.", img: "/reformas.jpg", icon: (<svg width="22" height="22" viewBox="0 0 26 26" fill="none" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="22" height="22" rx="1.5" /><line x1="2" y1="9" x2="24" y2="9" /><line x1="13" y1="9" x2="13" y2="24" /></svg>) },
  { titulo: "Revitalização", texto: "Renovação visual para atualizar e valorizar o espaço.", img: "/revitalizacao.jpg", icon: (<svg width="22" height="22" viewBox="0 0 26 26" fill="none" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 3 C13 3 5 8 5 15 C5 19.4 8.6 23 13 23 C17.4 23 21 19.4 21 15 C21 8 13 3 13 3Z" /><path d="M13 23 L13 16" /><path d="M9 19 L13 16 L17 19" /></svg>) },
];

const diferenciais = [
  { titulo: "Padrão AZURITH", texto: "Um padrão de execução baseado em organização, precisão e atenção aos detalhes.", icon: (<svg width="22" height="22" viewBox="0 0 26 26" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 24,13 13,24 2,13" /><line x1="2" y1="13" x2="24" y2="13" /><line x1="13" y1="2" x2="13" y2="24" /></svg>) },
  { titulo: "Processo Estruturado", texto: "Planejamento definido, condução organizada e acompanhamento durante toda a execução, sem improvisos.", icon: (<svg width="22" height="22" viewBox="0 0 26 26" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="20" height="20" rx="2"/><line x1="3" y1="9" x2="23" y2="9"/><line x1="9" y1="9" x2="9" y2="23"/></svg>) },
  { titulo: "Obra Protegida", texto: "Ambientes organizados, proteção dos espaços e respeito ao seu lar durante toda a execução.", icon: (<svg width="22" height="22" viewBox="0 0 26 26" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 3 L23 7 L23 15 C23 20 18 24 13 26 C8 24 3 20 3 15 L3 7 Z"/><polyline points="9,13 12,16 18,10"/></svg>) },
  { titulo: "Respeito ao Cliente", texto: "Pontualidade, comunicação objetiva e condução profissional do início à entrega.", icon: (<svg width="22" height="22" viewBox="0 0 26 26" fill="none" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="9" r="5"/><path d="M4 23 C4 18 8 15 13 15 C18 15 22 18 22 23"/></svg>) },
];

const galeria = [
  { src: "/Off_white_Quarto.jpg", label: "Off White · Quarto" },
  { src: "/Terracota_Cozinha.jpg", label: "Terracota · Cozinha" },
  { src: "/Verde_profundo_Home_office.jpg", label: "Verde Profundo · Home Office" },
];

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Home() {
  const navigate = useNavigate();

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
        @keyframes waPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212,168,79,0.35), 0 8px 32px rgba(0,0,0,0.45); }
          50% { box-shadow: 0 0 0 8px rgba(212,168,79,0), 0 8px 32px rgba(0,0,0,0.45); }
        }
        @keyframes waFadeIn {
          from { opacity: 0; transform: translateY(12px) scale(0.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.75s ease, transform 0.75s ease; }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.08s; }
        .reveal-delay-2 { transition-delay: 0.16s; }
        .reveal-delay-3 { transition-delay: 0.24s; }
        .reveal-delay-4 { transition-delay: 0.32s; }
        .gold-line { width: 0; height: 1px; background: ${GOLD}; margin-top: 0.8rem; transition: width 1s ease 0.2s; }
        .revealed .gold-line { width: 56px; }
        .gold-line-dark { background: #B8955A; }

        /* HERO */
        .hm-hero { position: relative; height: 100svh; overflow: hidden; background: ${BG}; display: flex; padding-top: 0; }
        .hm-hero-left { width: 38%; position: relative; z-index: 3; display: flex; align-items: center; justify-content: center; padding: 0 4vw; background: ${BG}; }
        .hm-hero-inner { max-width: 520px; display: flex; flex-direction: column; align-items: center; text-align: center; }
        .hm-logo { width: 260px; height: 260px; object-fit: contain; display: block; margin-bottom: -55px; filter: brightness(1.1); animation: fadeSlideUp 1s ease both; }
        .hm-hero-title { font-family: 'Cinzel', serif; font-size: 4.2rem; font-weight: 300; letter-spacing: 0.08em; color: #F5F5F3; margin-bottom: 4px; line-height: 0.95; animation: fadeSlideUp 1s ease 0.1s both; }
        .hm-hero-subtitle { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.15rem; color: ${GOLD}; margin-bottom: 1rem; letter-spacing: 0.06em; animation: fadeSlideUp 1s ease 0.2s both; }
        .hm-hero-desc { font-family: 'Outfit', sans-serif; font-size: 0.88rem; line-height: 1.95; color: #8A9CB6; max-width: 340px; margin-bottom: 2.2rem; letter-spacing: 0.02em; animation: fadeSlideUp 1s ease 0.3s both; }
        .hm-hero-btns { display: flex; flex-direction: column; gap: 0.8rem; align-items: center; width: 100%; animation: fadeSlideUp 1s ease 0.42s both; }
        .hm-hero-btn { display: inline-flex; align-items: center; gap: 0.55rem; padding: 14px 36px; border: 1px solid rgba(212,168,79,0.55); color: ${GOLD}; text-decoration: none; font-family: 'Cormorant Garamond', serif; letter-spacing: 0.18em; font-size: 0.66rem; text-transform: uppercase; transition: all 0.35s ease; background: rgba(255,255,255,0.01); backdrop-filter: blur(4px); width: 100%; max-width: 240px; justify-content: center; }
        .hm-hero-btn:hover { background: rgba(212,168,79,0.08); border-color: ${GOLD}; letter-spacing: 0.22em; }
        .hm-hero-btn2 { display: inline-flex; align-items: center; gap: 0.5rem; font-family: 'Outfit', sans-serif; font-size: 0.66rem; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(245,245,243,0.5); background: none; border: none; cursor: pointer; transition: color 0.3s; justify-content: center; }
        .hm-hero-btn2:hover { color: #F5F5F3; }
        .hm-hero-right { width: 62%; position: relative; }
        .hm-hero-right img { width: 100%; height: 100%; object-fit: cover; object-position: center; filter: contrast(1.08) saturate(1.08) brightness(1.04); }
        .hm-hero-grad { position: absolute; inset: 0; z-index: 1; pointer-events: none; background: linear-gradient(90deg, rgba(4,11,22,1) 0%, rgba(4,11,22,.96) 18%, rgba(4,11,22,.78) 38%, rgba(4,11,22,.28) 68%, rgba(4,11,22,0) 100%); }

        /* EDITORIAL */
        .hm-editorial { position: relative; overflow: hidden; border-top: 1px solid rgba(212,168,79,0.08); background: ${BG}; min-height: 620px; }
        .hm-ed-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; filter: brightness(0.85) saturate(0.85); }
        .hm-ed-overlay { position: absolute; inset: 0; pointer-events: none; background: linear-gradient(135deg, rgba(4,11,22,0.92) 0%, rgba(4,11,22,0.65) 55%, rgba(4,11,22,0.82) 100%); }
        .hm-ed-content { position: relative; z-index: 2; display: flex; align-items: stretch; min-height: 620px; }
        .hm-ed-text-block { flex: 0 0 45%; display: flex; flex-direction: column; justify-content: center; padding: 5rem 5vw 5rem 7vw; position: relative; z-index: 4; }
        .hm-ed-label { font-family: 'Outfit', sans-serif; font-style: italic; font-size: 0.6rem; letter-spacing: 0.3em; text-transform: uppercase; color: ${GOLD}; margin-bottom: 1.8rem; display: flex; align-items: center; gap: 0.8rem; }
        .hm-ed-label::before { content: ''; display: inline-block; width: 24px; height: 1px; background: ${GOLD}; opacity: 0.6; }
        .hm-ed-titulo { font-family: 'Cormorant Garamond', serif; font-size: 3.2rem; color: #F5F5F3; font-weight: 300; line-height: 1.18; letter-spacing: 0.02em; margin-bottom: 1.5rem; }
        .hm-ed-texto { font-family: 'Outfit', sans-serif; font-size: 0.82rem; line-height: 2; max-width: 480px; color: rgba(245,245,243,0.62); letter-spacing: 0.02em; }
        .hm-ed-profissional-container { flex: 1; position: relative; overflow: hidden; mask-image: linear-gradient(to right, transparent 0%, black 12%, black 100%); -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 100%); }
        .hm-ed-profissional { position: absolute; bottom: 0; left: 0; right: 0; height: 90%; display: flex; align-items: flex-end; justify-content: center; }
        .hm-ed-profissional img { height: 100%; width: auto; object-fit: contain; object-position: bottom center; opacity: 1; }

        /* INSPIRE-SE */
        .hm-inspire { background: #07111F; padding: 6rem 7vw; border-top: 1px solid rgba(212,168,79,0.08); }
        .hm-inspire-header { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: end; margin-bottom: 3rem; }
        .hm-inspire-label { font-family: 'Outfit', sans-serif; font-style: italic; font-size: 0.6rem; letter-spacing: 0.3em; text-transform: uppercase; color: ${GOLD}; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.8rem; }
        .hm-inspire-label::before { content: ''; display: inline-block; width: 24px; height: 1px; background: ${GOLD}; opacity: 0.6; }
        .hm-inspire-titulo { font-family: 'Cormorant Garamond', serif; font-size: 3.4rem; color: #F5F5F3; font-weight: 300; line-height: 1.18; letter-spacing: 0.02em; }
        .hm-inspire-texto { font-family: 'Outfit', sans-serif; font-size: 0.88rem; line-height: 2; color: rgba(245,245,243,0.55); align-self: end; letter-spacing: 0.02em; }
        .hm-inspire-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2.5rem; }
        .hm-inspire-img { position: relative; overflow: hidden; aspect-ratio: 3/4; cursor: pointer; }
        .hm-inspire-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s ease; filter: saturate(0.85) brightness(0.9); }
        .hm-inspire-img:hover img { transform: scale(1.05); }
        .hm-inspire-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(4,11,22,0.75) 0%, transparent 55%); transition: background 0.4s ease; }
        .hm-inspire-img:hover .hm-inspire-img-overlay { background: linear-gradient(to top, rgba(4,11,22,0.9) 0%, rgba(4,11,22,0.2) 100%); }
        .hm-inspire-img-label { position: absolute; bottom: 1.2rem; left: 1.2rem; font-family: 'Outfit', sans-serif; font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(245,245,243,0.75); transition: bottom 0.35s ease, color 0.35s ease; }
        .hm-inspire-img:hover .hm-inspire-img-label { bottom: 1.6rem; color: #F5F5F3; }
        .hm-inspire-img-line { position: absolute; bottom: 0.95rem; left: 1.2rem; height: 1px; width: 0; background: ${GOLD}; transition: width 0.4s ease 0.1s; }
        .hm-inspire-img:hover .hm-inspire-img-line { width: 32px; }
        .hm-inspire-btn { display: inline-flex; align-items: center; gap: 0.5rem; font-family: 'Outfit', sans-serif; font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: ${GOLD}; background: none; border-bottom: 1px solid rgba(212,168,79,0.3); border-top: none; border-left: none; border-right: none; padding-bottom: 2px; cursor: pointer; transition: all 0.3s; }
        .hm-inspire-btn:hover { color: #F5F5F3; border-color: rgba(245,245,243,0.4); }

        /* POR QUÊ AZURITH */
        .hm-porque { background: #F2F0EB; border-top: 1px solid rgba(0,0,0,0.06); border-bottom: 1px solid rgba(0,0,0,0.06); padding: 3rem 7vw; }
        .hm-porque-header { margin-bottom: 2rem; }
        .hm-porque-label { font-family: 'Outfit', sans-serif; font-style: italic; font-size: 0.6rem; letter-spacing: 0.28em; text-transform: uppercase; color: #B8955A; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.7rem; }
        .hm-porque-label::before { content: ''; display: inline-block; width: 20px; height: 1px; background: #B8955A; opacity: 0.7; }
        .hm-porque-titulo { font-family: 'Cormorant Garamond', serif; font-size: 3.4rem; color: #1A1A1A; font-weight: 300; line-height: 1.18; letter-spacing: 0.02em; }
        .hm-porque-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1px solid rgba(0,0,0,0.08); padding-top: 2rem; }
        .hm-porque-card { padding: 0 2rem 0 0; display: flex; flex-direction: row; align-items: flex-start; gap: 1rem; border-right: 1px solid rgba(0,0,0,0.08); margin-right: 2rem; transition: transform 0.35s ease; }
        .hm-porque-card:hover { transform: translateY(-5px); }
        .hm-porque-card:last-child { border-right: none; margin-right: 0; padding-right: 0; }
        .hm-porque-card-icon { flex-shrink: 0; margin-top: 2px; transition: filter 0.35s ease; }
        .hm-porque-card:hover .hm-porque-card-icon { filter: drop-shadow(0 0 5px rgba(212,168,79,0.45)); }
        .hm-porque-card-titulo { font-family: 'Cormorant Garamond', serif; font-size: 1rem; letter-spacing: 0.06em; color: #1A1A1A; margin-bottom: 0.5rem; font-weight: 500; }
        .hm-porque-card-texto { font-family: 'Outfit', sans-serif; font-size: 0.82rem; line-height: 1.85; color: #5A5A5A; letter-spacing: 0.01em; }

        /* SERVIÇOS */
        .hm-servicos { background: #07111F; padding: 6rem 7vw; border-top: 1px solid rgba(212,168,79,0.08); }
        .hm-sv-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 3rem; }
        .hm-sv-label { font-family: 'Outfit', sans-serif; font-style: italic; font-size: .6rem; letter-spacing: .3em; text-transform: uppercase; color: ${GOLD}; margin-bottom: .6rem; }
        .hm-sv-titulo { font-family: 'Cormorant Garamond', serif; font-size: 3.4rem; font-weight: 300; color: #F5F5F3; letter-spacing: 0.04em; line-height: 1.18; }
        .hm-sv-link { font-family: 'Outfit', sans-serif; font-size: .65rem; letter-spacing: .18em; text-transform: uppercase; color: rgba(212,168,79,.65); border: none; border-bottom: 1px solid rgba(212,168,79,.2); padding-bottom: 2px; cursor: pointer; background: none; transition: color .3s, border-color .3s; }
        .hm-sv-link:hover { color: ${GOLD}; border-color: rgba(212,168,79,.5); }
        .hm-sv-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .hm-sv-card { position: relative; overflow: hidden; cursor: pointer; min-height: 320px; display: flex; flex-direction: column; justify-content: flex-end; transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .hm-sv-card:hover { transform: translateY(-5px); box-shadow: 0 20px 48px rgba(0,0,0,0.5); }
        .hm-sv-card-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform .6s ease, filter .6s ease; filter: brightness(.55) saturate(.9); }
        .hm-sv-card:hover .hm-sv-card-bg { transform: scale(1.06); filter: brightness(.45) saturate(.9); }
        .hm-sv-card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(4,11,22,.92) 0%, rgba(4,11,22,.4) 60%, rgba(4,11,22,.1) 100%); }
        .hm-sv-card-content { position: relative; z-index: 2; padding: 2rem; display: flex; flex-direction: column; gap: .8rem; }
        .hm-sv-card-icon { transition: filter 0.35s ease, transform 0.35s ease; }
        .hm-sv-card:hover .hm-sv-card-icon { filter: drop-shadow(0 0 6px rgba(212,168,79,0.5)); transform: scale(1.1); }
        .hm-sv-card-titulo { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; letter-spacing: 0.06em; color: #F5F5F3; font-weight: 300; transition: color 0.3s ease; }
        .hm-sv-card:hover .hm-sv-card-titulo { color: #EDD99A; }
        .hm-sv-card-texto { font-family: 'Outfit', sans-serif; font-size: .84rem; line-height: 1.85; color: rgba(245,245,243,.65); letter-spacing: 0.01em; }
        .hm-sv-linha { width: 18px; height: 1px; background: rgba(212,168,79,.5); transition: width .4s ease, background .4s ease; }
        .hm-sv-card:hover .hm-sv-linha { width: 40px; background: rgba(212,168,79,0.9); }
        .hm-sv-arrow { color: rgba(212,168,79,.6); transition: transform .3s, color .3s; margin-top: .4rem; }
        .hm-sv-card:hover .hm-sv-arrow { transform: translateX(5px); color: ${GOLD}; }

        /* CTA */
        .hm-cta { position: relative; overflow: hidden; padding: 8rem 7vw; border-top: 1px solid rgba(212,168,79,0.08); display: flex; flex-direction: column; align-items: flex-start; gap: 1.5rem; background: ${BG}; }
        .hm-cta-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.25) saturate(0.8); }
        .hm-cta-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(4,11,22,0.88) 0%, rgba(4,11,22,0.55) 100%); }
        .hm-cta-content { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: flex-start; gap: 1.5rem; }
        .hm-cta-label { font-family: 'Outfit', sans-serif; font-style: italic; font-size: 0.6rem; letter-spacing: 0.3em; text-transform: uppercase; color: ${GOLD}; display: flex; align-items: center; gap: 0.8rem; }
        .hm-cta-label::before { content: ''; display: inline-block; width: 24px; height: 1px; background: ${GOLD}; opacity: 0.6; }
        .hm-cta h2 { font-family: 'Cormorant Garamond', serif; font-size: 3.4rem; font-weight: 300; color: #F5F5F3; line-height: 1.18; letter-spacing: 0.02em; max-width: 560px; margin: 0; }
        .hm-cta-sub { font-family: 'Outfit', sans-serif; font-size: 0.9rem; line-height: 1.95; color: rgba(245,245,243,0.6); max-width: 420px; letter-spacing: 0.02em; }
        .hm-cta-btn { display: inline-flex; align-items: center; gap: 0.6rem; background: ${GOLD}; color: #040B16; padding: 1rem 2.4rem; text-decoration: none; font-family: 'Outfit', sans-serif; font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 500; transition: background 0.3s, letter-spacing 0.3s; margin-top: 0.5rem; }
        .hm-cta-btn:hover { background: #c49a43; letter-spacing: 0.22em; }

        /* BOTÃO FLUTUANTE WHATSAPP */
        .hm-wa-float { position: fixed; bottom: 2rem; right: 2rem; z-index: 999; display: flex; align-items: center; gap: 0.6rem; background: #040B16; border: 1px solid rgba(212,168,79,0.4); color: ${GOLD}; text-decoration: none; padding: 0.75rem 1.2rem 0.75rem 1rem; font-family: 'Outfit', sans-serif; font-size: 0.62rem; letter-spacing: 0.18em; text-transform: uppercase; animation: waFadeIn 0.6s ease 1.2s both, waPulse 3s ease 2s infinite; transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease; backdrop-filter: blur(8px); }
        .hm-wa-float:hover { background: rgba(212,168,79,0.1); border-color: ${GOLD}; color: #F5F5F3; }
        .hm-wa-float-icon { flex-shrink: 0; transition: transform 0.3s ease; }
        .hm-wa-float:hover .hm-wa-float-icon { transform: scale(1.12); }

        /* RESPONSIVO */
        @media (max-width: 768px) {
          .hm-hero { flex-direction: column; height: 100svh; min-height: 100svh; padding-top: 0; }
          .hm-hero-left { width: 100%; position: absolute; inset: 0; z-index: 3; padding: 100px 24px 50px; justify-content: center; background: transparent; }
          .hm-hero-right { position: absolute; inset: 0; width: 100%; height: 100%; }
          .hm-hero-right::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(4,11,22,0.55) 0%, rgba(4,11,22,0.42) 35%, rgba(4,11,22,0.82) 100%); }
          .hm-hero-right img { object-position: 90% center; }
          .hm-logo { width: 180px; height: 180px; margin-bottom: -20px; }
          .hm-hero-title { font-size: 3rem; }
          .hm-hero-desc { font-size: 0.88rem; max-width: 100%; }
          .hm-editorial { min-height: auto; }
          .hm-ed-content { flex-direction: column; min-height: auto; }
          .hm-ed-text-block { flex: 1; padding: 3rem 24px 0.5rem; }
          .hm-ed-titulo { font-size: 2rem; }
          .hm-ed-profissional-container { flex: none; width: 100%; height: 380px; overflow: hidden; mask-image: none; -webkit-mask-image: none; position: relative; margin-top: -100px; }
          .hm-ed-profissional { position: absolute; bottom: 0; left: 0; right: 0; height: 100%; }
          .hm-ed-profissional img { height: 100%; width: 100%; object-fit: contain; object-position: bottom center; }
          .hm-inspire { padding: 4rem 24px; }
          .hm-inspire-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .hm-inspire-titulo { font-size: 2rem; }
          .hm-inspire-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .hm-inspire-img { aspect-ratio: 4/3; }
          .hm-inspire-img img { object-position: left center; }
          .hm-porque { padding: 4rem 24px; }
          .hm-porque-grid { grid-template-columns: 1fr; gap: 2rem; }
          .hm-porque-card { border-right: none; padding-right: 0; margin-right: 0; }
          .hm-servicos { padding: 4rem 24px; }
          .hm-sv-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .hm-sv-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .hm-cta { padding: 5rem 24px; align-items: center; }
          .hm-cta-content { align-items: center; text-align: center; }
          .hm-cta h2 { font-size: 2.2rem; }
          .hm-cta-btn { width: 100%; max-width: 280px; justify-content: center; }
          .hm-wa-float { bottom: 1.2rem; right: 1.2rem; padding: 0.75rem; border-radius: 0; }
          .hm-wa-float-label { display: none; }
        }
      `}</style>

      <Navbar />

      <a className="hm-wa-float" href={WA} target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp">
        <span className="hm-wa-float-icon"><WhatsAppIcon size={16} /></span>
        <span className="hm-wa-float-label">Fale conosco</span>
      </a>

      <section className="hm-hero" id="inicio">
        <div className="hm-hero-left">
          <div className="hm-hero-inner">
            <img src="/logo-azurith.png" alt="Azurith" className="hm-logo" />
            <h1 className="hm-hero-title">AZURITH</h1>
            <p className="hm-hero-subtitle">Seu lar, como deve ser.</p>
            <p className="hm-hero-desc">Pintura, revitalização e reformas conduzidas com organização, precisão e atenção aos detalhes.</p>
            <div className="hm-hero-btns">
              <a className="hm-hero-btn" href={WA} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={13} />
                Fale Conosco
              </a>
              <button className="hm-hero-btn2" onClick={() => navigate("/metodo")}>
                Conheça nosso método <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
        <div className="hm-hero-right">
          <img src="/casa_dia.jpg" alt="Fachada conceitual Azurith" />
          <div className="hm-hero-grad" />
        </div>
      </section>

      <section className="hm-editorial" id="quem-somos">
        <img src="/quem_somos.png" alt="" className="hm-ed-bg" />
        <div className="hm-ed-overlay" />
        <div className="hm-ed-content reveal">
          <div className="hm-ed-text-block">
            <p className="hm-ed-label">Quem somos</p>
            <h2 className="hm-ed-titulo">Organização, cuidado e acabamento em cada detalhe.</h2>
            <div className="gold-line" />
            <p className="hm-ed-texto">Acreditamos que a prestação de serviços deve ser conduzida com organização, atenção aos detalhes e respeito ao ambiente. Atuamos em Uberlândia e região oferecendo soluções com planejamento, acompanhamento cuidadoso e compromisso com a qualidade em cada etapa.</p>
          </div>
          <div className="hm-ed-profissional-container">
            <div className="hm-ed-profissional">
              <img src="/quem_somos_vertical.png" alt="Profissional Azurith" />
            </div>
          </div>
        </div>
      </section>

      <section className="hm-inspire" id="inspire-se">
        <div className="hm-inspire-header reveal">
          <div>
            <p className="hm-inspire-label">Inspire-se</p>
            <h2 className="hm-inspire-titulo">Referências para ambientes mais elegantes e acolhedores.</h2>
            <div className="gold-line" />
          </div>
          <p className="hm-inspire-texto">Cores, acabamentos e combinações para orientar escolhas com mais segurança.</p>
        </div>
        <div className="hm-inspire-grid">
          {galeria.map((img, i) => (
            <div key={i} className={`hm-inspire-img reveal reveal-delay-${i + 1}`} onClick={() => navigate("/inspire-se")}>
              <img src={img.src} alt={img.label} />
              <div className="hm-inspire-img-overlay" />
              <span className="hm-inspire-img-label">{img.label}</span>
              <div className="hm-inspire-img-line" />
            </div>
          ))}
        </div>
        <button className="hm-inspire-btn" onClick={() => navigate("/inspire-se")}>
          Explorar referências <ArrowRight size={12} />
        </button>
      </section>

      <section className="hm-porque" id="porque-azurith">
        <div className="hm-porque-header reveal">
          <p className="hm-porque-label">Por que a Azurith</p>
          <h2 className="hm-porque-titulo">Método. Precisão. Resultado.</h2>
          <div className="gold-line gold-line-dark" />
        </div>
        <div className="hm-porque-grid">
          {diferenciais.map((d, i) => (
            <div key={i} className={`hm-porque-card reveal reveal-delay-${i + 1}`}>
              <div className="hm-porque-card-icon">{d.icon}</div>
              <div>
                <p className="hm-porque-card-titulo">{d.titulo}</p>
                <p className="hm-porque-card-texto">{d.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hm-servicos" id="servicos">
        <div className="hm-sv-header reveal">
          <div>
            <p className="hm-sv-label">O que fazemos</p>
            <h2 className="hm-sv-titulo">Serviços executados com atenção aos detalhes.</h2>
            <div className="gold-line" />
          </div>
          <button className="hm-sv-link" onClick={() => navigate("/servicos")}>Ver todos os serviços</button>
        </div>
        <div className="hm-sv-grid">
          {servicos.map((s, i) => (
            <div key={i} className={`hm-sv-card reveal reveal-delay-${i + 1}`} onClick={() => navigate("/servicos")}>
              <img src={s.img} alt={s.titulo} className="hm-sv-card-bg" />
              <div className="hm-sv-card-overlay" />
              <div className="hm-sv-card-content">
                <div className="hm-sv-card-icon">{s.icon}</div>
                <div className="hm-sv-linha" />
                <p className="hm-sv-card-titulo">{s.titulo}</p>
                <p className="hm-sv-card-texto">{s.texto}</p>
                <ArrowRight size={16} className="hm-sv-arrow" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hm-cta" id="orcamento">
        <img src="/atendimento.jpg" alt="" className="hm-cta-bg" />
        <div className="hm-cta-overlay" />
        <div className="hm-cta-content reveal">
          <p className="hm-cta-label">Atendimento</p>
          <h2>Seu lar, como deve ser.</h2>
          <div className="gold-line" />
          <p className="hm-cta-sub">Receba orientação para transformar seu ambiente com mais segurança e clareza.</p>
          <a className="hm-cta-btn" href={WA} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={15} />
            Iniciar atendimento
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
