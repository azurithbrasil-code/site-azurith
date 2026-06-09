/*
 * AZURITH Navbar
 * Referência: Aesop · Arthur Casas · JHSF · Portobello
 */
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

// ✅ AGORA USA DADOS CENTRALIZADOS
const WHATSAPP_URL = "https://wa.me/5534999366651";
const GOLD    = "#D29F59"; // Mantém a cor original do design
const WHITE   = "#EBEBEB";
const MUTED   = "rgba(154,160,168,0.75)";
const BG_DARK = "rgba(7,17,28,0.97)";

const navLinks = [
  { label: "Início",     href: "/" },
  { label: "Serviços",   href: "/servicos" },
  { label: "Inspire-se", href: "/inspire-se" },
  { label: "Método",     href: "/metodo" },
  { label: "Contato",    href: "/contato" },
];

export default function Navbar() {
  const navigate   = useNavigate();
  const location   = useLocation();
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered]   = useState<string | null>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const navRef  = useRef<HTMLDivElement>(null);

  const active = navLinks.find(l => l.href === location.pathname)?.href ?? "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const go = (href: string) => {
    navigate(href);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const line = lineRef.current;
    const nav  = navRef.current;
    if (!line || !nav) return;
    const target = hovered ?? active;
    const btn = nav.querySelector(`[data-href="${target}"]`) as HTMLElement | null;
    if (!btn) { line.style.opacity = "0"; return; }
    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    line.style.opacity   = "1";
    line.style.width     = `${btnRect.width}px`;
    line.style.transform = `translateX(${btnRect.left - navRect.left}px)`;
  }, [hovered, active, scrolled]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: scrolled
            ? BG_DARK
            : "linear-gradient(to bottom, rgba(5,11,22,0.82) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: "1px solid rgba(212,168,79,0.08)",
          transition: "background 0.5s ease, backdrop-filter 0.5s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1320, margin: "0 auto", padding: "0 2.5rem",
            display: "flex", alignItems: "center", justifyContent: "space-between", height: 72,
          }}
        >
          {/* ── LOGO ── */}
          <button
            onClick={() => go("/")}
            style={{
              display: "flex", alignItems: "center", gap: "0.7rem",
              background: "none", border: "none", cursor: "pointer", padding: 0, flexShrink: 0,
            }}
          >
            <img
              src="/logo-azurith.png"
              alt="Azurith"
              style={{
                height: 38, width: 38, objectFit: "contain",
                filter: "drop-shadow(0 0 12px rgba(210,159,89,0.3))",
                transition: "filter 0.3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "drop-shadow(0 0 20px rgba(210,159,89,0.6))"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "drop-shadow(0 0 12px rgba(210,159,89,0.3))"; }}
            />
            <div>
              <div style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "1.05rem", color: WHITE, letterSpacing: "0.18em", lineHeight: 1 }}>
                AZURITH
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.45rem", color: GOLD, letterSpacing: "0.22em", textTransform: "none", marginTop: 4, lineHeight: 1 }}>
                Seu lar, como deve ser.
              </div>
            </div>
          </button>

          {/* ── MENU DESKTOP ── */}
          <div style={{ position: "relative" }}>
            <nav ref={navRef} style={{ display: "flex", alignItems: "center", gap: 0 }} className="az-desktop-nav">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <button
                    key={link.href}
                    data-href={link.href}
                    onClick={() => go(link.href)}
                    onMouseEnter={() => setHovered(link.href)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      position: "relative", background: "none", border: "none",
                      fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 400,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      color: isActive ? WHITE : MUTED,
                      cursor: "pointer", padding: "0.6rem 1rem",
                      transition: "color 0.3s ease", whiteSpace: "nowrap",
                    }}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
            <div
              ref={lineRef}
              style={{
                position: "absolute", bottom: -1, left: 0, height: "1px",
                background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), width 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s",
                opacity: 0, pointerEvents: "none",
              }}
            />
          </div>

          {/* ── CTA + HAMBURGER ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexShrink: 0 }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="az-cta"
              style={{
                fontFamily: "'Outfit', sans-serif", fontSize: "0.62rem", fontWeight: 500,
                letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD,
                textDecoration: "none", paddingBottom: "2px",
                borderBottom: `1px solid rgba(210,159,89,0.3)`, transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = GOLD; el.style.color = WHITE; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(210,159,89,0.3)"; el.style.color = GOLD; }}
            >
              Solicitar Orçamento
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="az-hamburger"
              style={{ background: "none", border: "none", color: WHITE, cursor: "pointer", padding: 4, display: "none" }}
            >
              {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* ── MENU MOBILE ── */}
        <div
          style={{
            maxHeight: open ? "600px" : "0px", overflow: "hidden",
            transition: "max-height 0.5s cubic-bezier(0.16,1,0.3,1)",
            background: BG_DARK, borderTop: open ? "1px solid rgba(210,159,89,0.08)" : "none",
          }}
        >
          <nav style={{ padding: open ? "1.5rem 2.5rem 2rem" : "0 2.5rem" }}>
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                style={{
                  display: "block", width: "100%", background: "none", border: "none",
                  borderBottom: "1px solid rgba(235,235,235,0.06)",
                  fontFamily: "'Outfit', sans-serif", fontSize: "0.78rem", fontWeight: 400,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: active === link.href ? GOLD : MUTED,
                  cursor: "pointer", textAlign: "left", padding: "1rem 0",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(8px)",
                  transition: "color 0.2s, opacity 0.3s, transform 0.3s",
                  transitionDelay: open ? `${i * 40}ms` : "0ms",
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block", fontFamily: "'Outfit', sans-serif", fontSize: "0.68rem",
                fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD,
                textDecoration: "none", borderBottom: `1px solid rgba(210,159,89,0.4)`,
                paddingBottom: "2px", marginTop: "1.5rem",
                opacity: open ? 1 : 0, transition: "opacity 0.4s 0.3s",
              }}
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      </header>

      <style>{`
        @media (max-width: 1024px) {
          .az-desktop-nav { display: none !important; }
          .az-cta         { display: none !important; }
          .az-hamburger   { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .az-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
