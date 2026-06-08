import { useEffect, useState } from "react";
import { X, MessageCircle } from "lucide-react";

const WA = "5534999366651";

export default function PopupAtendimento() {
  const [open, setOpen]           = useState(false);
  const [animando, setAnimando]   = useState(false);
  const [servico, setServico]     = useState("");
  const [preferencia, setPreferencia] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("az_popup_fechado")) return;
    const timer = setTimeout(() => {
      setOpen(true);
      setTimeout(() => setAnimando(true), 10);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const fechar = () => {
    setAnimando(false);
    setTimeout(() => setOpen(false), 450);
    sessionStorage.setItem("az_popup_fechado", "1");
  };

  const abrirManual = () => {
    setOpen(true);
    setTimeout(() => setAnimando(true), 10);
  };

  const enviarWhatsApp = () => {
    const mensagem =
`Olá. Gostaria de atendimento da Azurith.

Serviço:
• ${servico || "Não informado"}

Preferência:
• ${preferencia || "Não informado"}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(mensagem)}`, "_blank");
    fechar();
  };

  return (
    <>
      {/* BOTÃO FLUTUANTE — só aparece quando popup está fechado */}
      {!open && (
        <button onClick={abrirManual} className="az-floating-btn">
          <MessageCircle size={15} strokeWidth={1.4} />
          Atendimento
        </button>
      )}

      {/* OVERLAY */}
      {open && (
        <div
          className={`az-popup-overlay ${animando ? "open" : ""}`}
          onClick={fechar}
        />
      )}

      {/* POPUP */}
      {open && (
        <div className={`az-popup ${animando ? "open" : ""}`}>

          {/* HEADER */}
          <div className="az-popup-header">
            <div>
              <p className="az-mini-title">AZURITH</p>
              <h2>Atendimento rápido</h2>
            </div>
            <button onClick={fechar} className="az-close">
              <X size={17} strokeWidth={1.4} />
            </button>
          </div>

          {/* BODY */}
          <div className="az-popup-body">
            <p className="az-text">
              Nos diga o que você precisa. Nossa equipe entra em contato rapidamente.
            </p>

            {/* PERGUNTA 1 */}
            <div className="az-group">
              <p className="az-label">O que você procura?</p>
              <div className="az-options">
                {["Pintura residencial","Pintura comercial","Reforma","Acabamentos","Agendar visita","Dúvidas"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setServico(item)}
                    className={`az-option ${servico === item ? "active" : ""}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* PERGUNTA 2 */}
            <div className="az-group">
              <p className="az-label">Como prefere continuar?</p>
              <div className="az-options">
                {["WhatsApp","Enviar fotos do local","Agendar visita"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setPreferencia(item)}
                    className={`az-option ${preferencia === item ? "active" : ""}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* BOTÃO */}
            <button
              onClick={enviarWhatsApp}
              className="az-submit"
              disabled={!servico || !preferencia}
            >
              Falar com a equipe
            </button>
          </div>

        </div>
      )}

      <style>{`
        /* BOTÃO FLUTUANTE */
        .az-floating-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 998;
          background: #07111F;
          color: #D4A84F;
          border: 1px solid rgba(212,168,79,0.2);
          padding: 12px 20px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.35s ease;
          backdrop-filter: blur(12px);
          box-shadow: 0 12px 36px rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .az-floating-btn:hover {
          border-color: rgba(212,168,79,0.45);
          background: rgba(7,17,31,0.98);
          transform: translateY(-2px);
        }

        /* OVERLAY */
        .az-popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(4,11,22,0.4);
          backdrop-filter: blur(3px);
          z-index: 999;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .az-popup-overlay.open { opacity: 1; }

        /* POPUP */
        .az-popup {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1000;
          width: 400px;
          max-width: calc(100vw - 2rem);
          background: rgba(6,12,22,0.97);
          border: 1px solid rgba(212,168,79,0.13);
          backdrop-filter: blur(20px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.55);
          transform: translateY(20px);
          opacity: 0;
          transition: transform 0.5s cubic-bezier(.16,1,.3,1), opacity 0.5s ease;
        }
        .az-popup::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,168,79,0.45), transparent);
        }
        .az-popup.open {
          transform: translateY(0);
          opacity: 1;
        }

        /* HEADER */
        .az-popup-header {
          padding: 1.8rem 2rem 1.4rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .az-mini-title {
          font-family: 'Outfit', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.3em;
          color: rgba(212,168,79,0.55);
          margin-bottom: 0.5rem;
        }
        .az-popup-header h2 {
          font-family: 'Cinzel', serif;
          font-size: 1.15rem;
          font-weight: 400;
          color: #F5F5F3;
          letter-spacing: 0.06em;
        }
        .az-close {
          background: transparent;
          border: none;
          color: rgba(245,245,243,0.35);
          cursor: pointer;
          transition: color 0.25s;
          padding: 2px;
        }
        .az-close:hover { color: #F5F5F3; }

        /* BODY */
        .az-popup-body { padding: 1.8rem 2rem 2rem; }
        .az-text {
          font-family: 'Outfit', sans-serif;
          font-size: 0.88rem;
          line-height: 1.8;
          color: rgba(245,245,243,0.6);
          margin-bottom: 1.8rem;
        }
        .az-group { margin-bottom: 1.6rem; }
        .az-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(212,168,79,0.65);
          margin-bottom: 0.8rem;
        }
        .az-options {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .az-option {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(245,245,243,0.6);
          padding: 10px 16px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.78rem;
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: 0.02em;
        }
        .az-option:hover {
          border-color: rgba(212,168,79,0.28);
          color: #F5F5F3;
        }
        .az-option.active {
          background: rgba(212,168,79,0.08);
          border-color: rgba(212,168,79,0.5);
          color: #D4A84F;
        }
        .az-submit {
          width: 100%;
          padding: 15px;
          border: none;
          background: #D4A84F;
          color: #040B16;
          font-family: 'Outfit', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.3s;
          margin-top: 0.4rem;
        }
        .az-submit:hover { background: #c49a43; }
        .az-submit:disabled {
          background: rgba(212,168,79,0.15);
          color: rgba(4,11,22,0.35);
          cursor: not-allowed;
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .az-popup {
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            border-left: none;
            border-right: none;
            border-bottom: none;
          }
          .az-popup-header, .az-popup-body { padding: 1.5rem; }
          .az-option { width: 100%; text-align: left; }
          .az-floating-btn { bottom: 18px; right: 18px; }
        }
      `}</style>
    </>
  );
}
