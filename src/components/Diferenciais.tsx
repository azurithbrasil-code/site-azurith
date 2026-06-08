/*
 * AZURITH — Faixa de Diferenciais
 * Cards minimalistas · scroll lateral mobile · micro animações
 */

const GOLD = "#D4A84F";
const W    = "#F5F5F3";
const M    = "#8A9CB6";

const cards = [
  {
    numero: "01",
    titulo: "Padrão AZURITH",
    texto: "Cuidado, organização e acabamento em cada etapa da execução.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#D4A84F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
  <polygon points="14,2 26,10 14,26 2,10" />
  <line x1="2" y1="10" x2="26" y2="10" />
  <line x1="14" y1="2" x2="8" y2="10" />
  <line x1="14" y1="2" x2="20" y2="10" />
</svg>
    )
  },
  {
    numero: "02",
    titulo: "Processo Estruturado",
    texto: "Planejamento claro, acompanhamento contínuo e execução sem improvisos.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#D4A84F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="22" height="22" rx="2" />
        <line x1="3" y1="10" x2="25" y2="10" />
        <line x1="10" y1="10" x2="10" y2="25" />
      </svg>
    )
  },
  {
    numero: "03",
    titulo: "Obra Protegida",
    texto: "Ambientes organizados, proteção dos espaços e respeito ao seu lar durante toda a execução.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#D4A84F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3 L24 7 L24 15 C24 20 19 24 14 26 C9 24 4 20 4 15 L4 7 Z" />
        <polyline points="9,14 12.5,17.5 19,11" />
      </svg>
    )
  },
  {
    numero: "04",
    titulo: "Respeito ao Cliente",
    texto: "Pontualidade, comunicação objetiva e condução profissional do início à entrega.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#D4A84F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="10" r="5" />
        <path d="M5 24 C5 19 9 16 14 16 C19 16 23 19 23 24" />
        <line x1="19" y1="6" x2="23" y2="4" />
        <line x1="20" y1="10" x2="24" y2="10" />
        <line x1="19" y1="14" x2="23" y2="16" />
      </svg>
    )
  },
];

export default function Diferenciais() {
  return (
    <>
      <style>{`
        .df-section {
          background: #040B16;
          padding: 7rem 0 7rem 7vw;
          overflow: hidden;
          border-top: 1px solid rgba(212,168,79,0.08);
        }

        .df-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #D4A84F;
          margin-bottom: 0.8rem;
          padding-right: 7vw;
        }

        .df-titulo {
          font-family: 'Cinzel', serif;
          font-size: 1.6rem;
          font-weight: 300;
          color: #F5F5F3;
          letter-spacing: 0.06em;
          margin-bottom: 3.5rem;
          padding-right: 7vw;
        }

        .df-track {
          display: flex;
          gap: 1.2rem;
          padding-right: 7vw;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          cursor: grab;
        }
        .df-track::-webkit-scrollbar { display: none; }
        .df-track:active { cursor: grabbing; }

        .df-card {
          flex: 0 0 calc(25% - 0.9rem);
          min-width: 260px;
          scroll-snap-align: start;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(212,168,79,0.1);
          padding: 2.4rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          transition: border-color 0.4s ease, background 0.4s ease, transform 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .df-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,168,79,0.6), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .df-card:hover {
          border-color: rgba(212,168,79,0.28);
          background: rgba(212,168,79,0.04);
          transform: translateY(-4px);
        }

        .df-card:hover::before {
          opacity: 1;
        }

        .df-numero {
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          color: rgba(212,168,79,0.4);
          position: absolute;
          top: 1.8rem;
          right: 1.8rem;
        }

        .df-icon {
          opacity: 0.9;
          transition: opacity 0.3s, transform 0.4s ease;
        }
        .df-card:hover .df-icon {
          opacity: 1;
          transform: scale(1.08);
        }

        .df-card-titulo {
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          color: #F5F5F3;
          text-transform: uppercase;
          font-weight: 400;
          line-height: 1.4;
        }

        .df-card-texto {
          font-family: 'Outfit', sans-serif;
          font-size: 0.88rem;
          line-height: 1.85;
          color: #8A9CB6;
          flex: 1;
        }

        .df-linha {
          width: 24px;
          height: 1px;
          background: rgba(212,168,79,0.35);
          transition: width 0.4s ease;
        }
        .df-card:hover .df-linha {
          width: 48px;
        }

        @media (max-width: 768px) {
          .df-section {
            padding: 5rem 0 5rem 24px;
          }
          .df-label { padding-right: 24px; }
          .df-titulo {
            font-size: 1.3rem;
            padding-right: 24px;
            margin-bottom: 2.5rem;
          }
          .df-card {
            flex: 0 0 82vw;
            min-width: unset;
          }
          .df-track {
            padding-right: 24px;
          }
        }
      `}</style>

      <section className="df-section">
        <p className="df-label">Por que a Azurith</p>
        <h2 className="df-titulo">Método. Precisão. Resultado.</h2>

        <div className="df-track" id="df-track">
          {cards.map((card, i) => (
            <div key={i} className="df-card">
              <div className="df-icon">{card.icon}</div>
              <div className="df-linha" />
              <p className="df-card-titulo">{card.titulo}</p>
              <p className="df-card-texto">{card.texto}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
