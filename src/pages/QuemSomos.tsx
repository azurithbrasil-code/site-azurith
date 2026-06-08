import { MessageCircle, Shield, Gem, Clock, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Diferenciais from "../components/Diferenciais";

const WA = "https://wa.me/5534999366651?text=Olá.%20Obrigado%20por%20entrar%20em%20contato.%20%0AConte%20um%20pouco%20sobre%20o%20que%20deseja%20transformar%20em%20seu%20ambiente.";
const BG   = "#040B16";
const BG2  = "#07111F";
const GOLD = "#D4A84F";
const W    = "#F5F5F3";
const M    = "#8A9CB6";

export default function QuemSomos() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .qs-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 14px 36px;
          border: 1px solid rgba(212,168,79,0.55);
          color: #D4A84F;
          text-decoration: none;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.18em;
          font-size: 0.66rem;
          text-transform: uppercase;
          transition: all 0.35s ease;
          background: rgba(255,255,255,0.01);
          backdrop-filter: blur(4px);
          cursor: pointer;
        }
        .qs-cta-btn:hover {
          background: rgba(212,168,79,0.08);
          border-color: #D4A84F;
        }
        .qs-servicos-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 16px 40px;
          background: #D4A84F;
          color: #040B16;
          border: none;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.18em;
          font-size: 0.7rem;
          text-transform: uppercase;
          transition: all 0.35s ease;
          cursor: pointer;
          font-weight: 500;
        }
        .qs-servicos-btn:hover {
          background: #c49a43;
        }

        /* HERO */
        .qs-hero {
  position: relative;
  width: 100%;
  min-height: 100svh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding-bottom: 5rem;
  padding-top: 72px;
        }
        .qs-hero img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  object-position: 70% center;

  filter:
    brightness(0.58)
    saturate(0.82)
    contrast(1.05);
        }
        .qs-hero-overlay {
  position: absolute;
  inset: 0;

  background:
  linear-gradient(
    90deg,
    rgba(4,11,22,0.90) 0%,
    rgba(4,11,22,0.82) 38%,
    rgba(4,11,22,0.55) 100%
  );
          
        }
        .qs-hero-content {
  position: relative;
  z-index: 2;

  padding: 0 7vw;

  max-width: 560px;
        }
        .qs-hero-content h1 {
  font-family: 'Cinzel', serif;
  font-size: 3.15rem;
  font-weight: 300;

  color: #F7F2ED;

  line-height: 1.04;

  letter-spacing: 0.03em;

  margin-bottom: 2rem;
        }
        .qs-hero-content p {
  font-family: 'Outfit', sans-serif;

  font-size: 1rem;

  line-height: 1.95;

  color: rgba(255,255,255,0.82);

  max-width: 500px;

  margin-bottom: 2.8rem;
        }

        /* FRASE DESTAQUE */
      
        .qs-destaque {
          background: #07111F;
          padding: 6rem 7vw;
          border-top: 1px solid rgba(212,168,79,0.1);
          border-bottom: 1px solid rgba(212,168,79,0.1);
        }
        .qs-destaque blockquote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 300;
          font-style: italic;
          color: #F5F5F3;
          line-height: 1.3;
          max-width: 620px;
          margin: 0 0 1.5rem;
          border-left: 2px solid #D4A84F;
          padding-left: 1.5rem;
        }
        .qs-destaque p {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          line-height: 1.85;
          color: #8A9CB6;
          max-width: 520px;
        }

        @media (max-width: 768px) {
  .qs-hero { min-height: 100svh; padding-bottom: 4rem; }
          .qs-hero-content h1 { font-size: 2.2rem !important; }
          .qs-hero-content { padding: 0 24px; }
          .qs-destaque { padding: 4rem 24px; }
          .qs-destaque blockquote { font-size: 1.5rem; }
          .qs-servicos-btn { width: 100%; justify-content: center; max-width: 300px; }
          .qs-cta-section { padding: 4rem 24px !important; text-align: center; }
          .qs-cta-btn { width: 100%; max-width: 280px; justify-content: center; }
        }
      `}</style>

      <Navbar />

      {/* HERO — imagem de fundo com texto sobre */}
      <div className="qs-hero">
        <img src="/quem_somos.jpg" alt="Azurith — Quem Somos" />
        <div className="qs-hero-overlay" />
        <div className="qs-hero-content">
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "0.85rem",
            color: GOLD,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1rem"
          }}>
            Quem Somos
          </p>
          <h1>Detalhes que valorizam cada ambiente.</h1>
          <p>
            A Azurith atua em Uberlândia e região oferecendo soluções completas
            em reformas, pintura e revitalização para ambientes residenciais e
            comerciais. Cada projeto é executado com precisão, criatividade e
            comprometimento com a satisfação do cliente.
          </p>
          <button
            className="qs-servicos-btn"
            onClick={() => navigate("/servicos")}
          >
            Conheça nossos serviços
          </button>
        </div>
      </div>
<Diferenciais />
      {/* FRASE DESTAQUE */}
      <section className="qs-destaque">
        <blockquote>
          "Ambientes bem executados mudam a forma como você vive a casa."
        </blockquote>
        <p>
          Não somos apenas prestadores de serviço. Somos parceiros de quem quer
          transformar o próprio espaço com segurança e sem dor de cabeça. Do
          primeiro contato à entrega final, você sabe exatamente o que esperar.
        </p>
      </section>

      {/* CTA */}
      <section
        className="qs-cta-section"
        style={{
          background: BG,
          padding: "6rem 7vw",
          borderTop: "1px solid rgba(212,168,79,0.1)"
        }}
      >
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "2.2rem",
          fontWeight: 300,
          color: W,
          lineHeight: 1.2,
          maxWidth: "480px",
          marginBottom: "2.5rem"
        }}>
          Pronto para transformar o seu espaço?
        </h2>
        <a className="qs-cta-btn" href={WA} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={13} />
          Solicitar orçamento
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: BG,
        padding: "2rem 7vw",
        borderTop: "1px solid rgba(212,168,79,0.1)"
      }}>
        <p style={{
          color: "rgba(245,245,243,0.4)",
          fontSize: "0.7rem",
          letterSpacing: "0.08em"
        }}>
          © AZURITH • Uberlândia, MG
        </p>
      </footer>
    </>
  );
}
