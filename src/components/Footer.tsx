import { Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WA   = "https://wa.me/5534999366651?text=Olá.%20Obrigado%20por%20entrar%20em%20contato.%20%0AConte%20um%20pouco%20sobre%20o%20que%20deseja%20transformar%20em%20seu%20ambiente.";
const GOLD = "#D4A84F";

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        /* ── FOOTER ── */
        .hm-footer {
          background: #040B16;
          border-top: 1px solid rgba(212,168,79,0.08);
          padding: 5rem 7vw 0;
        }
        .hm-footer-top {
          display: grid;
          grid-template-columns: 1.2fr 0.9fr 0.9fr;
          gap: 4rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid rgba(212,168,79,0.08);
        }
        .hm-footer-brand { display: flex; flex-direction: column; }
        .hm-footer-brand-identity {
          display: flex; flex-direction: column; align-items: flex-start;
          gap: 0.4rem; margin-bottom: 1rem;
        }
        .hm-footer-logo {
          width: 98px; height: 98px;
          object-fit: contain;
          opacity: 0.9;
          margin-left: 8px;
        }
        .hm-footer-brand-text { display: flex; flex-direction: column; }
        .hm-footer-brand h3 { font-family: 'Cinzel', serif; font-size: 1.4rem; font-weight: 300; letter-spacing: 0.16em; color: #F5F5F3; margin: 0; line-height: 1; }
        .hm-footer-slogan { font-family: 'Cormorant Garamond', serif; font-style: italic; color: ${GOLD}; font-size: 0.75rem; letter-spacing: 0.06em; margin-top: 0.3rem; }
        .hm-footer-line { width: 36px; height: 1px; background: rgba(212,168,79,0.45); margin-bottom: 1.2rem; }
        .hm-footer-text { font-family: 'Outfit', sans-serif; font-size: 0.82rem; line-height: 1.95; color: rgba(245,245,243,0.45); max-width: 300px; }
        .hm-footer-column { display: flex; flex-direction: column; gap: 0; padding-top: 0.4rem; }
        .hm-footer-title {
          font-family: 'Outfit', sans-serif;
          font-size: 0.58rem; letter-spacing: 0.26em; text-transform: uppercase;
          color: ${GOLD}; margin-bottom: 1.4rem;
          display: flex; align-items: center; gap: 0.6rem;
        }
        .hm-footer-title::after {
          content: ''; flex: 1; height: 1px;
          background: rgba(212,168,79,0.18);
        }
        .hm-footer-column a,
        .hm-footer-column button,
        .hm-footer-column p {
          background: none; border: none; padding: 0 0 0.85rem 0;
          text-align: left;
          font-family: 'Outfit', sans-serif; font-size: 0.8rem;
          letter-spacing: 0.03em; color: rgba(245,245,243,0.48);
          text-decoration: none; cursor: pointer;
          transition: color 0.3s ease, padding-left 0.3s ease;
          display: flex; align-items: center; gap: 0;
        }
        .hm-footer-column a:hover,
        .hm-footer-column button:hover {
          color: ${GOLD};
          padding-left: 4px;
        }
        .hm-footer-social-link {
          display: flex !important;
          align-items: center !important;
          gap: 0.6rem !important;
          padding: 0 0 0.85rem 0 !important;
          color: rgba(245,245,243,0.48) !important;
          text-decoration: none !important;
          font-family: 'Outfit', sans-serif !important;
          font-size: 0.8rem !important;
          letter-spacing: 0.03em !important;
          cursor: pointer !important;
          transition: color 0.3s ease, padding-left 0.3s ease !important;
          background: none !important;
          border: none !important;
        }
        .hm-footer-social-link:hover {
          color: ${GOLD} !important;
          padding-left: 4px !important;
        }
        .hm-footer-social-icon {
          width: 14px; height: 14px;
          opacity: 0.55;
          transition: opacity 0.3s ease, filter 0.3s ease;
          flex-shrink: 0;
        }
        .hm-footer-social-link:hover .hm-footer-social-icon {
          opacity: 1;
          filter: drop-shadow(0 0 4px rgba(212,168,79,0.5));
        }
        .hm-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.6rem 0 2rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          color: rgba(245,245,243,0.28);
        }
        .hm-footer-bottom-mark {
          display: flex; align-items: center; gap: 0.5rem;
        }
        .hm-footer-bottom-mark::before {
          content: '';
          display: inline-block;
          width: 18px; height: 1px;
          background: rgba(212,168,79,0.3);
        }
        .hm-footer-bottom-mark span {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 0.72rem;
          color: rgba(212,168,79,0.4);
          letter-spacing: 0.08em;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .hm-footer { padding: 4rem 24px 0; }
          .hm-footer-top { grid-template-columns: 1fr; gap: 0; }
          .hm-footer-brand { padding-bottom: 2.5rem; border-bottom: 1px solid rgba(212,168,79,0.06); margin-bottom: 2rem; align-items: center; text-align: center; }
          .hm-footer-brand-identity { align-items: center; }
          .hm-footer-brand-text { align-items: center; }
          .hm-footer-line { margin: 0 auto 1.2rem; }
          .hm-footer-text { max-width: 100%; text-align: center; }
          .hm-footer-column { padding-bottom: 2rem; border-bottom: 1px solid rgba(212,168,79,0.06); margin-bottom: 0.5rem; }
          .hm-footer-bottom { flex-direction: column; gap: 0.6rem; text-align: center; }
        }
      `}</style>

      <footer className="hm-footer">
        <div className="hm-footer-top">

          <div className="hm-footer-brand">
            <div className="hm-footer-brand-identity">
              <img src="/logo-azurith.png" alt="Azurith" className="hm-footer-logo" />
              <div className="hm-footer-brand-text">
                <h3>AZURITH</h3>
                <p className="hm-footer-slogan">Seu lar, como deve ser.</p>
              </div>
            </div>
            <div className="hm-footer-line" />
            <p className="hm-footer-text"></p>
          </div>

          <div className="hm-footer-column">
            <span className="hm-footer-title">Navegação</span>
            <button onClick={() => navigate("/")}>Início</button>
            <button onClick={() => navigate("/servicos")}>Serviços</button>
            <button onClick={() => navigate("/inspire-se")}>Inspire-se</button>
            <button onClick={() => navigate("/metodo")}>Método</button>
          </div>

          <div className="hm-footer-column">
            <span className="hm-footer-title">Contato</span>
            <a className="hm-footer-social-link" href={WA} target="_blank" rel="noopener noreferrer">
              <span className="hm-footer-social-icon">
                <WhatsAppIcon size={14} />
              </span>
              WhatsApp
            </a>
            <a className="hm-footer-social-link" href="https://instagram.com/azurithbrasil" target="_blank" rel="noopener noreferrer">
              <Instagram size={14} className="hm-footer-social-icon" />
              Instagram
            </a>
            <p>Uberlândia • MG</p>
          </div>

        </div>

        <div className="hm-footer-bottom">
          <span>© AZURITH • Todos os direitos reservados</span>
          <div className="hm-footer-bottom-mark" />
        </div>
      </footer>
    </>
  );
}
