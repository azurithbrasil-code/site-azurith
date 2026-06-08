import { useState } from "react";
import Navbar from "../components/Navbar";
import { CONTACT, COMPANY } from "../data/contact";
import Footer from "../components/Footer";

const GOLD = "#D4A84F";
const WA   = `https://wa.me/5534999366651`;

const diferenciais = [
  { texto: "Processo estruturado do início ao acabamento" },
  { texto: "Orientação profissional para cada etapa do projeto" },
  { texto: "Condução organizada com atenção a cada detalhe" },
];

const steps = [
  {
    id: "servico",
    title: "Qual tipo de projeto deseja realizar?",
    sub: "Selecione a opção que melhor representa sua necessidade.",
    cols: 3,
    opts: [
      { icon: "🖌️", label: "Pintura" },
      { icon: "🔨", label: "Reforma" },
      { icon: "✨", label: "Revitalização" },
      { icon: "🪟", label: "Acabamentos" },
      { icon: "🔧", label: "Manutenção" },
      { icon: "💬", label: "Outro" },
    ],
  },
  {
    id: "ambiente",
    title: "Onde será realizado o projeto?",
    sub: "Informe o tipo de ambiente para melhor orientação.",
    cols: 3,
    opts: [
      { icon: "🏠", label: "Casa" },
      { icon: "🏢", label: "Apartamento" },
      { icon: "🏪", label: "Comércio" },
      { icon: "🪑", label: "Escritório" },
      { icon: "🌿", label: "Área externa" },
      { icon: "❓", label: "Outro" },
    ],
  },
  {
    id: "objetivo",
    title: "Qual é o seu principal objetivo?",
    sub: "Isso nos ajuda a entender melhor o que você deseja transformar.",
    cols: 2,
    opts: [
      { icon: "🎨", label: "Renovar o visual" },
      { icon: "🛡️", label: "Resolver desgaste" },
      { icon: "📈", label: "Valorizar o imóvel" },
      { icon: "💡", label: "Modernizar" },
      { icon: "🏗️", label: "Finalizar obra" },
      { icon: "🤔", label: "Ainda avaliando" },
    ],
  },
  {
    id: "prazo",
    title: "Quando pretende dar início?",
    sub: "Selecione a opção mais próxima do seu planejamento.",
    cols: 2,
    opts: [
      { icon: "⚡", label: "O quanto antes" },
      { icon: "📅", label: "Próximas semanas" },
      { icon: "🗓️", label: "Próximos meses" },
      { icon: "🔍", label: "Ainda pesquisando" },
    ],
  },
  {
    id: "contato",
    title: "Como podemos entrar em contato?",
    sub: "Seus dados são utilizados exclusivamente para o atendimento.",
    cols: 0,
    opts: [],
  },
];

const TOTAL = steps.length;

export default function Contato() {
  const [current, setCurrent] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [nome, setNome]       = useState<string>("");
  const [fone, setFone]       = useState<string>("");
  const [enviado, setEnviado] = useState<boolean>(false);
  const [animating, setAnimating] = useState<boolean>(false);

  const step    = steps[current];
  const isField = step.id === "contato";
  const canNext = isField
    ? nome.trim().length > 1 && fone.trim().length > 7
    : answers[step.id] !== undefined;

  const navigateStep = (next: number) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent(next);
      setAnimating(false);
    }, 280);
  };

  const selectOpt = (idx: number) => {
    setAnswers((prev) => ({ ...prev, [step.id]: idx }));
    if (current < TOTAL - 1) {
      setTimeout(() => navigateStep(current + 1), 300);
    }
  };

  const goNext = () => {
    if (!canNext) return;
    if (isField) { enviar(); return; }
    navigateStep(Math.min(current + 1, TOTAL - 1));
  };

  const goBack = () => navigateStep(Math.max(current - 1, 0));

  const enviar = () => {
    const labels = steps
      .filter((s) => s.opts.length > 0 && answers[s.id] !== undefined)
      .map((s) => `• ${s.opts[answers[s.id]].label}`)
      .join("\n");

    const msg =
      `Olá, meu nome é ${nome}.\n\n` +
      `Gostaria de solicitar uma orientação sobre meu projeto.\n\n` +
      `Detalhes:\n${labels}\n\n` +
      `Meu WhatsApp para contato: ${fone}\n\n` +
      `Aguardo o retorno da equipe Azurith.`;

    window.open(`${WA}?text=${encodeURIComponent(msg)}`, "_blank");
    setEnviado(true);
  };

  return (
    <>
      <style>{`
        @keyframes ctFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ctFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── HERO ── */
        .ct-hero {
          position: relative;
          width: 100%;
          height: 95vh;
          min-height: 560px;
          padding-top: 72px;
          display: flex;
          align-items: flex-end;
          padding-bottom: 6rem;
          overflow: hidden;
        }
        .ct-hero-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 40%;
          filter: contrast(1.02) saturate(0.72) brightness(0.55);
          z-index: 0;
        }
        .ct-hero-overlay {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: linear-gradient(
            to top,
            rgba(4,11,22,0.96) 0%,
            rgba(4,11,22,0.72) 35%,
            rgba(4,11,22,0.22) 68%,
            rgba(4,11,22,0.06) 100%
          );
        }
        .ct-hero-content {
          position: relative; z-index: 2;
          padding: 0 7vw;
          max-width: 720px;
        }

        /* Eyebrow — padrão InspireSe */
        .ct-hero-eyebrow {
          font-family: 'Outfit', sans-serif;
          font-size: 0.72rem; letter-spacing: 0.26em;
          text-transform: uppercase; color: ${GOLD};
          margin-bottom: 1rem; display: block;
          animation: ctFadeUp 0.9s ease both;
        }

        /* H1 — padrão InspireSe 4rem */
        .ct-hero-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4rem; font-weight: 300;
          color: #F5F5F3; line-height: 1.1;
          letter-spacing: 0.01em; margin-bottom: 1.2rem;
          animation: ctFadeUp 0.9s ease 0.15s both;
        }
        .ct-hero-h1 em { font-style: italic; color: ${GOLD}; font-weight: 300; }

        /* Desc — padrão InspireSe 1rem / 1.85 */
        .ct-hero-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem; color: rgba(245,245,243,0.62);
          line-height: 1.85; max-width: 460px;
          margin-bottom: 2rem;
          animation: ctFadeUp 0.9s ease 0.28s both;
        }

        /* Diferenciais */
        .ct-hero-diffs {
          display: flex; flex-direction: column; gap: 1rem;
          animation: ctFadeUp 0.9s ease 0.38s both;
        }
        .ct-hero-diff {
          display: flex; align-items: center; gap: 1rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem; color: rgba(245,245,243,0.55);
          line-height: 1.75;
        }
        .ct-hero-diff-mark {
          width: 16px; height: 16px; flex-shrink: 0;
          border: 1px solid rgba(212,168,79,0.35);
          display: flex; align-items: center; justify-content: center;
        }
        .ct-hero-diff-mark::after {
          content: ''; width: 5px; height: 5px;
          background: ${GOLD};
        }

        /* ── FORMULÁRIO — padrão is-section ── */
        .ct-form-section {
          background: #0A1322;
          border-top: 1px solid rgba(255,255,255,0.04);
          padding: 7rem 7vw;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ct-form-header {
          text-align: center;
          margin-bottom: 3.5rem;
          max-width: 560px;
        }
        /* Eyebrow da seção — padrão is-section-label */
        .ct-form-eyebrow {
          font-family: 'Outfit', sans-serif;
          font-size: 0.68rem; letter-spacing: 0.24em;
          text-transform: uppercase; color: ${GOLD};
          margin-bottom: 0.6rem; display: block;
          text-align: center;
        }
        /* Título da seção — padrão is-title 3rem */
        .ct-form-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem; font-weight: 300;
          color: #F5F5F3; line-height: 1.1;
          letter-spacing: 0.05em; margin-bottom: 0.8rem;
        }
        /* Linha dourada — padrão is-title-line */
        .ct-form-line {
          width: 56px; height: 1px;
          background: ${GOLD};
          margin: 0 auto 1.4rem;
          opacity: 0.7;
        }
        /* Sub — padrão is-sub 1rem */
        .ct-form-sub {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem; color: #8A9CB6;
          line-height: 1.8;
        }

        /* ── CARD ── */
        .ct-card {
          width: 100%;
          max-width: 580px;
          background: linear-gradient(158deg, rgba(13,30,50,0.98) 0%, rgba(6,15,28,0.99) 55%, rgba(4,11,22,1) 100%);
          border: 1px solid rgba(212,168,79,0.1);
          box-shadow: 0 40px 80px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(212,168,79,0.06);
          position: relative; overflow: hidden;
        }
        .ct-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(212,168,79,0.4) 30%, ${GOLD} 50%, rgba(212,168,79,0.4) 70%, transparent 100%);
        }
        .ct-card::after {
          content: ''; position: absolute; top: 0; right: 0;
          width: 160px; height: 160px;
          background: radial-gradient(ellipse at top right, rgba(212,168,79,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── PROGRESSO ── */
        .ct-prog-wrap { padding: 1.8rem 2rem 0; }
        .ct-prog-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: .65rem; }
        .ct-prog-label { font-family: 'Outfit', sans-serif; font-size: .5rem; letter-spacing: .26em; text-transform: uppercase; color: rgba(138,156,182,0.35); }
        .ct-prog-label span { color: ${GOLD}; }
        .ct-prog-pct { font-family: 'Cormorant Garamond', serif; font-size: .72rem; color: rgba(212,168,79,0.35); letter-spacing: .06em; }
        .ct-prog-track { height: 1px; background: rgba(212,168,79,0.08); margin-bottom: 1.6rem; position: relative; }
        .ct-prog-fill { position: absolute; top: 0; left: 0; bottom: 0; background: linear-gradient(90deg, rgba(212,168,79,0.5), ${GOLD}); transition: width .6s cubic-bezier(0.16,1,0.3,1); }

        /* ── CABEÇALHO DA ETAPA ── */
        .ct-step-head { padding: 0 2rem 1.4rem; }
        .ct-step-num { font-family: 'Outfit', sans-serif; font-size: .48rem; letter-spacing: .28em; text-transform: uppercase; color: rgba(212,168,79,0.3); margin-bottom: .6rem; }
        .ct-step-title { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 300; color: #F5F5F3; line-height: 1.22; margin-bottom: .5rem; letter-spacing: .01em; }
        .ct-step-sub { font-family: 'Outfit', sans-serif; font-size: .68rem; color: rgba(138,156,182,0.42); line-height: 1.5; }

        /* ── CORPO ANIMADO ── */
        .ct-step-body { transition: opacity .25s ease, transform .25s ease; }
        .ct-step-body.out { opacity: 0; transform: translateY(-6px); }
        .ct-step-body.in { animation: ctFadeIn .3s ease both; }

        /* ── OPÇÕES ── */
        .ct-opts { padding: 0 2rem; margin-bottom: .6rem; }
        .ct-opts-grid { display: grid; gap: .45rem; }
        .ct-opts-grid-2 { grid-template-columns: repeat(2,1fr); }
        .ct-opts-grid-3 { grid-template-columns: repeat(3,1fr); }

        .ct-opt {
          border: 1px solid rgba(212,168,79,0.07);
          background: rgba(4,11,22,0.4);
          padding: .9rem .55rem .8rem;
          display: flex; flex-direction: column; align-items: center; gap: .45rem;
          cursor: pointer; text-align: center; position: relative;
          transition: border-color .22s ease, background .22s ease, transform .2s ease, box-shadow .22s ease;
          user-select: none; overflow: hidden;
        }
        .ct-opt::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(212,168,79,0.03) 0%, transparent 60%); opacity: 0; transition: opacity .22s; }
        .ct-opt:hover { border-color: rgba(212,168,79,0.22); background: rgba(212,168,79,0.03); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.25); }
        .ct-opt:hover::before { opacity: 1; }
        .ct-opt:active { transform: translateY(0); }
        .ct-opt.sel { border-color: rgba(212,168,79,0.55); background: rgba(212,168,79,0.06); box-shadow: 0 0 0 1px rgba(212,168,79,0.12) inset; }
        .ct-opt.sel::before { opacity: 1; }
        .ct-opt-check { position: absolute; top: 5px; right: 7px; width: 12px; height: 12px; border: 1px solid rgba(212,168,79,0.25); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity .2s; }
        .ct-opt.sel .ct-opt-check { opacity: 1; }
        .ct-opt-check::after { content: ''; width: 5px; height: 5px; background: ${GOLD}; }
        .ct-opt-icon { font-size: 1.15rem; transition: transform .2s ease; }
        .ct-opt:hover .ct-opt-icon { transform: scale(1.1); }
        .ct-opt-label { font-family: 'Outfit', sans-serif; font-size: .68rem; color: rgba(138,156,182,0.7); line-height: 1.3; transition: color .22s; letter-spacing: .01em; }
        .ct-opt.sel .ct-opt-label { color: #EDD99A; }
        .ct-opt:hover .ct-opt-label { color: rgba(245,245,243,0.8); }

        .ct-hint { font-family: 'Outfit', sans-serif; font-size: .6rem; color: rgba(138,156,182,0.2); padding: .3rem 2rem .1rem; letter-spacing: .04em; }

        /* ── CAMPOS ── */
        .ct-fields { padding: 0 2rem; }
        .ct-field { margin-bottom: 1.2rem; }
        .ct-field-label { font-family: 'Outfit', sans-serif; font-size: .5rem; letter-spacing: .22em; text-transform: uppercase; color: rgba(212,168,79,0.45); display: block; margin-bottom: .5rem; }
        .ct-input { width: 100%; background: rgba(4,11,22,0.65); border: 1px solid rgba(212,168,79,0.1); border-bottom: 1px solid rgba(212,168,79,0.18); color: #F5F5F3; font-family: 'Outfit', sans-serif; font-size: .88rem; padding: .85rem .9rem; outline: none; transition: border-color .3s, background .3s; box-sizing: border-box; appearance: none; border-radius: 0; caret-color: ${GOLD}; letter-spacing: .01em; }
        .ct-input::placeholder { color: rgba(138,156,182,0.18); font-size: .82rem; }
        .ct-input:focus { border-color: rgba(212,168,79,0.35); background: rgba(4,11,22,0.8); }
        .ct-input-note { font-family: 'Outfit', sans-serif; font-size: .52rem; color: rgba(138,156,182,0.28); margin-top: .4rem; letter-spacing: .02em; }

        /* ── NAVEGAÇÃO ── */
        .ct-nav { display: flex; gap: .5rem; padding: 1.3rem 2rem 1.9rem; border-top: 1px solid rgba(212,168,79,0.06); margin-top: .8rem; }
        .ct-btn-back { flex: 0 0 auto; padding: .85rem 1.2rem; background: transparent; border: 1px solid rgba(212,168,79,0.1); color: rgba(212,168,79,0.35); font-family: 'Outfit', sans-serif; font-size: .55rem; letter-spacing: .18em; text-transform: uppercase; cursor: pointer; transition: all .3s; }
        .ct-btn-back:hover { border-color: rgba(212,168,79,0.25); color: ${GOLD}; }
        .ct-btn-next { flex: 1; padding: .85rem; background: ${GOLD}; color: #040B16; border: none; font-family: 'Outfit', sans-serif; font-size: .68rem; letter-spacing: .2em; text-transform: uppercase; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: .5rem; transition: background .3s, letter-spacing .3s, opacity .3s; position: relative; overflow: hidden; }
        .ct-btn-next::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%); }
        .ct-btn-next:hover { background: #c49a43; letter-spacing: .24em; }
        .ct-btn-next:disabled { opacity: .25; cursor: not-allowed; }
        .ct-btn-next:disabled:hover { background: ${GOLD}; letter-spacing: .2em; }

        /* ── SUCESSO ── */
        .ct-success { padding: 3.5rem 2rem; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 1.2rem; animation: ctFadeIn .5s ease both; }
        .ct-success-emblem { width: 56px; height: 56px; border: 1px solid rgba(212,168,79,0.3); display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: .4rem; }
        .ct-success-emblem::before { content: ''; position: absolute; inset: -4px; border: 1px solid rgba(212,168,79,0.1); }
        .ct-success-emblem-inner { width: 32px; height: 32px; border: 1px solid rgba(212,168,79,0.2); display: flex; align-items: center; justify-content: center; }
        .ct-success-check { font-size: .9rem; color: ${GOLD}; }
        .ct-success-label { font-family: 'Outfit', sans-serif; font-size: .5rem; letter-spacing: .28em; text-transform: uppercase; color: ${GOLD}; display: flex; align-items: center; gap: .6rem; }
        .ct-success-label::before, .ct-success-label::after { content: ''; flex: 1; height: 1px; background: rgba(212,168,79,0.2); width: 20px; }
        .ct-success-title { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 300; color: #F5F5F3; line-height: 1.2; letter-spacing: .02em; }
        .ct-success-sub { font-family: 'Outfit', sans-serif; font-size: .9rem; color: #8A9CB6; line-height: 1.8; max-width: 310px; }
        .ct-success-divider { width: 28px; height: 1px; background: rgba(212,168,79,0.3); }
        .ct-success-btn { display: inline-flex; align-items: center; gap: .55rem; padding: .9rem 2rem; background: transparent; border: 1px solid rgba(212,168,79,0.35); color: ${GOLD}; font-family: 'Outfit', sans-serif; font-size: .68rem; letter-spacing: .2em; text-transform: uppercase; cursor: pointer; margin-top: .2rem; transition: background .3s, border-color .3s, color .3s; }
        .ct-success-btn:hover { background: rgba(212,168,79,0.08); border-color: ${GOLD}; color: #F5F5F3; }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .ct-hero { height: 65vh; min-height: 420px; padding-bottom: 3rem; }
          .ct-hero-content { padding: 0 24px; }
          .ct-hero-h1 { font-size: 2.4rem; }
          .ct-hero-desc { font-size: 0.95rem; max-width: 100%; }
          .ct-hero-diffs { display: none; }
          .ct-form-section { padding: 4.5rem 24px; }
          .ct-form-title { font-size: 2.2rem; }
          .ct-card { max-width: 100%; }
          .ct-opts-grid-3 { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 480px) {
          .ct-hero-h1 { font-size: 2rem; }
          .ct-prog-wrap { padding: 1.3rem 1.4rem 0; }
          .ct-step-head { padding: 0 1.4rem 1.1rem; }
          .ct-opts { padding: 0 1.4rem; }
          .ct-fields { padding: 0 1.4rem; }
          .ct-nav { padding: 1rem 1.4rem 1.5rem; }
          .ct-hint { padding: .3rem 1.4rem .1rem; }
          .ct-success { padding: 2.5rem 1.4rem; }
          .ct-step-title { font-size: 1.1rem; }
        }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section className="ct-hero">
        <img src="/contato.png" alt="" className="ct-hero-img" />
        <div className="ct-hero-overlay" />
        <div className="ct-hero-content">
          <span className="ct-hero-eyebrow">Orçamento</span>
          <h1 className="ct-hero-h1">
            Solicite uma análise do seu<br />projeto.
          </h1>
          <p className="ct-hero-desc">
            Conte o essencial sobre seu ambiente. Nossa equipe analisa com cuidado e orienta os próximos passos de forma clara e organizada.
          </p>
          <div className="ct-hero-diffs">
            {diferenciais.map((d, i) => (
              <div key={i} className="ct-hero-diff">
                <span className="ct-hero-diff-mark" />
                {d.texto}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULÁRIO ── */}
      <section className="ct-form-section">
        <div className="ct-form-header">
          <p className="ct-form-eyebrow">Formulário de contato</p>
          <div className="ct-form-line" />
          <p className="ct-form-sub">Responda as perguntas abaixo e nossa equipe entrará em contato com orientações personalizadas.</p>
        </div>

        <div className="ct-card">
          {enviado ? (
            <div className="ct-success">
              <div className="ct-success-emblem">
                <div className="ct-success-emblem-inner">
                  <span className="ct-success-check">✓</span>
                </div>
              </div>
              <p className="ct-success-label">Recebido</p>
              <h2 className="ct-success-title">
                Seu projeto foi<br />registrado com cuidado.
              </h2>
              <div className="ct-success-divider" />
              <p className="ct-success-sub">
                Nossa equipe analisará as informações e entrará em contato para orientar cada etapa com clareza e organização.
              </p>
              <button className="ct-success-btn" onClick={enviar}>
                Continuar no WhatsApp →
              </button>
            </div>
          ) : (
            <>
              <div className="ct-prog-wrap">
                <div className="ct-prog-meta">
                  <p className="ct-prog-label">
                    Etapa <span>{current + 1}</span> de {TOTAL}
                  </p>
                  <span className="ct-prog-pct">
                    {Math.round((current / TOTAL) * 100)}%
                  </span>
                </div>
                <div className="ct-prog-track">
                  <div className="ct-prog-fill" style={{ width: `${(current / TOTAL) * 100}%` }} />
                </div>
              </div>

              <div className="ct-step-head">
                <p className="ct-step-num">
                  {String(current + 1).padStart(2, "0")} — {String(TOTAL).padStart(2, "0")}
                </p>
                <h2 className="ct-step-title">{step.title}</h2>
                <p className="ct-step-sub">{step.sub}</p>
              </div>

              <div className={`ct-step-body${animating ? " out" : " in"}`}>
                {!isField && (
                  <>
                    <div className="ct-opts">
                      <div className={`ct-opts-grid ct-opts-grid-${step.cols}`}>
                        {step.opts.map((o, i) => (
                          <div
                            key={i}
                            className={`ct-opt${answers[step.id] === i ? " sel" : ""}`}
                            onClick={() => selectOpt(i)}
                          >
                            <div className="ct-opt-check" />
                            <span className="ct-opt-icon">{o.icon}</span>
                            <span className="ct-opt-label">{o.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="ct-hint">Selecione para avançar automaticamente</p>
                  </>
                )}

                {isField && (
                  <div className="ct-fields">
                    <div className="ct-field">
                      <label className="ct-field-label">Nome completo</label>
                      <input
                        className="ct-input"
                        type="text"
                        placeholder="Como prefere ser chamado"
                        autoComplete="name"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                      />
                    </div>
                    <div className="ct-field">
                      <label className="ct-field-label">WhatsApp</label>
                      <input
                        className="ct-input"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        autoComplete="tel"
                        value={fone}
                        onChange={(e) => setFone(e.target.value)}
                      />
                      <p className="ct-input-note">
                        Utilizado exclusivamente para retorno do atendimento.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="ct-nav">
                {current > 0 && (
                  <button className="ct-btn-back" onClick={goBack}>←</button>
                )}
                <button
                  className="ct-btn-next"
                  onClick={goNext}
                  disabled={!canNext}
                >
                  {isField ? "Confirmar e enviar" : "Continuar"} →
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
