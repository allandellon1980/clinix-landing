import type { Config } from "tailwindcss";

// Clinix — tokens da landing page (espelham o Design System "Clinix").
// Se o projeto Lovable já tiver um tailwind.config.ts (shadcn), mescle apenas o bloco `extend`.
export default {
  darkMode: ["class"],
  content: ["./index.html", "./*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
    extend: {
      fontFamily: {
        display: ['"Inter Tight"', "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        clx: {
          bg: "#07060b",          // bg-000 — fundo da página (preto com leve tom violeta)
          "bg-2": "#0c0a12",      // bg-100 — seções alternadas
          surface: "#121019",     // surface-100 — cards sólidos
          "surface-2": "#1a1724", // surface-200 — cards elevados / hover
          ink: "#f1eff7",         // texto principal
          muted: "#a7a3b5",       // texto secundário
          subtle: "#7f7a8f",      // legendas, placeholders
          brand: "#6e4cf5",       // violeta Clinix — fundo de CTAs (branco por cima 5.2:1)
          "brand-light": "#a992ff", // violeta claro — ícones/texto de destaque sobre o escuro
          "brand-strong": "#5f3ee8",
          "on-brand": "#ffffff",  // texto sobre o violeta
          accent: "#f5b454",      // âmbar — estrelas, badges de destaque
          success: "#34d399",
          warning: "#fbbf24",
          danger: "#f87171",
          info: "#60a5fa",
        },
      },
      borderRadius: { xl: "14px", "2xl": "20px", "3xl": "28px" },
      boxShadow: {
        glow: "0 0 0 1px rgba(124,92,255,0.35), 0 8px 32px -8px rgba(124,92,255,0.45)",
        card: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 24px 48px -24px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(12px)" }, to: { opacity: "1", transform: "none" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: {
        "fade-up": "fade-up .7s cubic-bezier(.2,.7,.2,1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
