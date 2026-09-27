/**
 * Clinix — Landing Page
 * React + Tailwind CSS + lucide-react
 *
 * Uso no Lovable: crie src/pages/Index.tsx (ou src/components/ClinixLanding.tsx) com este arquivo,
 * aplique o tailwind.config.ts e o index.css que acompanham.
 *
 * ⚠️ CONTEÚDO DE EXEMPLO: depoimentos, logos de clínicas, métricas e preços abaixo são
 * placeholders. Substitua por dados reais (com autorização dos clientes) antes de publicar.
 */
import { useState, type ReactNode } from "react";
import clinixLogo from "./clinix-logo.png";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CalendarCheck2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CreditCard,
  FileSpreadsheet,
  FileText,
  Camera,
  Briefcase,
  LayoutDashboard,
  Lock,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Stethoscope,
  TrendingUp,
  UserRound,
  Users,
  Wallet,
  X,
  XCircle,
  PlayCircle,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Dados                                                               */
/* ------------------------------------------------------------------ */

const NAV = [
  { label: "Recursos", href: "#recursos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

// Placeholder — troque pelos logos reais das clínicas parceiras (SVG monocromático)

const FEATURES = [
  {
    icon: CalendarDays,
    title: "Agenda Ortopédica Inteligente",
    text: "Encaixes rápidos, visão por especialista e por sala e lembretes automáticos que reduzem as ausências.",
    span: "lg:col-span-2",
  },
  {
    icon: FileText,
    title: "Prontuário Eletrônico Especializado",
    text: "Histórico de exames, laudos e fichas personalizadas para traumatologia e ortopedia.",
    span: "",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Métricas em Tempo Real",
    text: "Atendimentos do dia, taxa de ocupação e faturamento em um único painel.",
    span: "",
  },
  {
    icon: Wallet,
    title: "Gestão Financeira & Repasses",
    text: "Caixa, procedimentos, convênios e repasses médicos calculados sem planilha.",
    span: "",
  },
  {
    icon: Smartphone,
    title: "Acesso Multi-dispositivo",
    text: "Agenda e prontuário no computador ou no smartphone, com login seguro e dados criptografados.",
    span: "",
  },
];

// Placeholder — substitua por depoimentos reais e autorizados
const TESTIMONIALS = [
  {
    quote:
      "Saímos da agenda de papel para o Clinix em uma semana. As faltas caíram muito depois dos lembretes automáticos e a recepção parou de viver no telefone.",
    name: "Dr. Nome Sobrenome",
    role: "Ortopedista · Clínica Exemplo",
    metric: "−38% de faltas",
  },
  {
    quote:
      "O prontuário com fichas de ortopedia me economiza tempo em cada consulta. Consigo ver exames e evolução do paciente numa tela só.",
    name: "Dra. Nome Sobrenome",
    role: "Traumatologista · Consultório Exemplo",
    metric: "+2h livres por dia",
  },
  {
    quote:
      "Finalmente sei quanto a clínica faturou no dia, por convênio e por médico. Os repasses que levavam dias agora saem em minutos.",
    name: "Nome Sobrenome",
    role: "Gestora · Centro Médico Exemplo",
    metric: "+22% no faturamento",
  },
];

const PLANS = [
  {
    name: "Starter",
    desc: "Para o especialista que atende sozinho.",
    monthly: 99.9,
    features: ["1 profissional", "Agenda + lembretes por WhatsApp", "Prontuário ortopédico", "Financeiro básico", "Suporte via WhatsApp"],
    featured: false,
  },
  {
    name: "Plus",
    desc: "Para clínicas com equipe e recepção.",
    monthly: 129.9,
    features: [
      "Até 6 profissionais",
      "Agenda por sala e especialista",
      "Convênios e repasses médicos",
      "Dashboard em tempo real",
      "Migração de dados assistida",
    ],
    featured: true,
  },
  {
    name: "Pro",
    desc: "Para centros médicos e várias unidades.",
    monthly: 300,
    features: [
      "Profissionais ilimitados",
      "Múltiplas unidades",
      "Relatórios avançados e exportação",
      "Permissões por perfil",
      "Gerente de conta dedicado",
    ],
    featured: false,
  },
];

const FAQ = [
  {
    q: "O Clinix atende somente ortopedia ou outras especialidades também?",
    a: "O Clinix nasceu para ortopedia e traumatologia, com fichas e fluxos pensados para essas rotinas, mas atende qualquer especialidade. Você ativa os modelos de prontuário e procedimentos de cada área e mantém tudo na mesma agenda e no mesmo financeiro.",
  },
  {
    q: "Como funciona a migração dos meus dados atuais para o Clinix?",
    a: "Importamos pacientes, agenda futura e cadastros a partir de planilhas (Excel/CSV) ou de exportações de outros sistemas. Nos planos Plus e Pro, nossa equipe faz a migração com você, sem parar os atendimentos.",
  },
  {
    q: "O sistema é seguro e cumpre as diretrizes da LGPD?",
    a: "Sim. Os dados trafegam e ficam armazenados criptografados, o acesso é controlado por perfil de usuário e toda ação em prontuário fica registrada em log. Oferecemos termo de tratamento de dados e ferramentas para atender às solicitações dos titulares.",
  },
  {
    q: "Posso acessar a agenda e o prontuário pelo celular?",
    a: "Pode. O Clinix funciona no navegador do computador, do tablet e do smartphone, sem instalar nada. A agenda do dia, o status dos pacientes e o prontuário ficam disponíveis onde você estiver.",
  },
];

/* ------------------------------------------------------------------ */
/* Primitivos                                                          */
/* ------------------------------------------------------------------ */

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-2.5 ${className}`} aria-label="Clinix — início">
      <img src={clinixLogo} alt="" width={32} height={32} className="h-8 w-8 shrink-0" />
      <span className="font-display text-lg font-semibold tracking-[-0.02em] text-clx-ink">Clinix</span>
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  center = true,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <span className="eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-clx-brand" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold leading-[1.1] text-gradient sm:text-[44px]">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-clx-muted sm:text-lg">{text}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Header                                                           */
/* ------------------------------------------------------------------ */

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="glass mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full !bg-clx-bg/60 px-3 pl-5">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-clx-muted transition hover:text-clx-ink">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="/login" className="btn-ghost !border-transparent !bg-transparent !px-4 !py-2">
            Entrar no Sistema
          </a>
          <a href="#precos" className="btn-primary !py-2.5">
            Testar Clinix Grátis
          </a>
        </div>
        <button
          className="grid h-10 w-10 place-items-center rounded-full text-clx-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl !bg-clx-bg/90 p-4 lg:hidden">
          <nav className="flex flex-col" aria-label="Menu móvel">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-clx-muted hover:bg-white/5 hover:text-clx-ink">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 grid gap-2">
            <a href="/login" className="btn-ghost">Entrar no Sistema</a>
            <a href="#precos" className="btn-primary">Testar Clinix Grátis</a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Mockup do dashboard (usado no Hero)                                 */
/* ------------------------------------------------------------------ */

function Sparkline({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 60 20" className="h-5 w-14" aria-hidden>
      <path d={d} fill="none" stroke="#a992ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Série "consultas" e "retornos" por hora (08h–18h)
const AREA_A = [22, 30, 26, 44, 38, 52, 47, 63, 55, 70, 61, 76, 68, 58, 72, 80, 66, 74, 62, 70];
const AREA_B = [12, 16, 14, 22, 20, 26, 24, 30, 27, 34, 30, 36, 33, 28, 35, 38, 32, 36, 30, 34];
const toPath = (pts: number[], w = 400, h = 120) =>
  pts.map((v, i) => `${i ? "L" : "M"}${((i / (pts.length - 1)) * w).toFixed(1)} ${(h - (v / 100) * h).toFixed(1)}`).join(" ");

function Gauge({ value }: { value: number }) {
  // Semicírculo: comprimento do arco = π·r
  const r = 52;
  const len = Math.PI * r;
  return (
    <svg viewBox="0 0 140 84" className="mx-auto w-full max-w-[180px]" role="img" aria-label={`Ocupação ${value} de 100`}>
      <defs>
        <linearGradient id="g-gauge" x1="0" x2="1">
          <stop offset="0" stopColor="#5f3ee8" />
          <stop offset="1" stopColor="#a992ff" />
        </linearGradient>
      </defs>
      <path d="M18 74 A52 52 0 0 1 122 74" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="10" strokeLinecap="round" />
      <path
        d="M18 74 A52 52 0 0 1 122 74"
        fill="none"
        stroke="url(#g-gauge)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={`${(len * value) / 100} ${len}`}
        style={{ filter: "drop-shadow(0 0 6px rgba(124,92,255,.7))" }}
      />
      <text x="70" y="66" textAnchor="middle" className="fill-clx-ink font-display" fontSize="26" fontWeight="600">
        {value}
      </text>
      <text x="70" y="80" textAnchor="middle" className="fill-clx-subtle" fontSize="8">
        /100
      </text>
    </svg>
  );
}

const TODAY = [
  { h: "08:30", n: "Marina Costa", p: "Retorno · LCA joelho", c: "Unimed", s: "Concluído", tone: "text-clx-success bg-clx-success/10" },
  { h: "09:00", n: "Paulo Mendes", p: "Consulta · Lombar", c: "Particular", s: "Em atendimento", tone: "text-clx-brand-light bg-clx-brand/15" },
  { h: "09:30", n: "Luiza Rocha", p: "Infiltração · Ombro", c: "Bradesco", s: "Em espera", tone: "text-clx-warning bg-clx-warning/10" },
  { h: "10:00", n: "Rafael Nunes", p: "1ª consulta · Tornozelo", c: "SulAmérica", s: "Confirmado", tone: "text-clx-info bg-clx-info/10" },
  { h: "10:30", n: "Jorge Lima", p: "Pós-op · Quadril", c: "Unimed", s: "Confirmado", tone: "text-clx-info bg-clx-info/10" },
];

function DashboardMockup() {
  return (
    <div className="glass overflow-hidden rounded-3xl p-2 sm:p-2.5" style={{ boxShadow: "0 0 0 1px rgba(124,92,255,.18), 0 40px 120px -40px rgba(124,92,255,.55)" }}>
      <div className="flex overflow-hidden rounded-[22px] border border-white/[0.06] bg-clx-bg/85 text-left">
        {/* Sidebar */}
        <aside className="hidden w-52 shrink-0 flex-col border-r border-white/[0.06] p-4 md:flex">
          <Logo className="mb-6 origin-left scale-90" />
          <div className="flex flex-col gap-1">
            {[
              { i: LayoutDashboard, t: "Visão geral", a: true },
              { i: CalendarDays, t: "Agenda" },
              { i: Users, t: "Pacientes" },
              { i: FileText, t: "Prontuários" },
              { i: CreditCard, t: "Financeiro" },
              { i: FileSpreadsheet, t: "Convênios" },
              { i: BarChart3, t: "Relatórios" },
            ].map(({ i: I, t, a }) => (
              <div
                key={t}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] ${
                  a ? "border border-clx-brand/30 bg-clx-brand/15 text-clx-ink" : "border border-transparent text-clx-subtle"
                }`}
              >
                <I className={`h-4 w-4 ${a ? "text-clx-brand-light" : ""}`} />
                {t}
              </div>
            ))}
          </div>
          <div className="mt-auto flex items-center gap-2.5 border-t border-white/[0.06] pt-4">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-clx-brand/20 text-[11px] font-semibold text-clx-brand-light">RA</span>
            <div className="min-w-0">
              <p className="truncate text-[12px] text-clx-ink">Dr. R. Almeida</p>
              <p className="truncate text-[11px] text-clx-subtle">Ortopedia</p>
            </div>
          </div>
        </aside>

        {/* Conteúdo */}
        <div className="min-w-0 flex-1 p-3 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="font-display text-base font-semibold text-clx-ink">Visão geral</p>
            <div className="flex items-center gap-2">
              <span className="hidden items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-[11px] text-clx-muted sm:flex">
                Últimos 30 dias <ChevronDown className="h-3 w-3" />
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-[11px] text-clx-muted">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-clx-success" /> Ao vivo
              </span>
              <span className="hidden h-7 w-7 place-items-center rounded-lg border border-white/10 text-clx-muted sm:grid">
                <Bell className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>

          {/* KPIs */}
          <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {[
              { l: "Atendimentos", v: "1.284", d: "+14,2%", s: "M0 16 L10 13 L20 14 L30 9 L40 10 L50 5 L60 3" },
              { l: "Novos pacientes", v: "312", d: "+9,8%", s: "M0 15 L10 16 L20 11 L30 12 L40 7 L50 8 L60 4" },
              { l: "Faturamento", v: "R$ 184,2k", d: "+12,4%", s: "M0 17 L10 12 L20 13 L30 10 L40 11 L50 6 L60 5" },
              { l: "Tempo médio espera", v: "9 min", d: "−41%", s: "M0 4 L10 6 L20 5 L30 9 L40 11 L50 13 L60 16" },
            ].map((k) => (
              <div key={k.l} className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                <p className="text-[11px] text-clx-subtle">{k.l}</p>
                <p className="mt-1.5 font-display text-lg font-semibold text-clx-ink sm:text-[22px]">{k.v}</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[10px] text-clx-success">{k.d} <span className="text-clx-subtle">vs mês ant.</span></span>
                  <span className="hidden sm:block"><Sparkline d={k.s} /></span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 grid gap-2 lg:grid-cols-[1fr_200px]">
            {/* Área */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-clx-ink">Fluxo de atendimentos</span>
                <span className="flex items-center gap-3 text-[10px] text-clx-subtle">
                  <span className="flex items-center gap-1"><span className="h-0.5 w-3 rounded bg-clx-brand-light" />Consultas</span>
                  <span className="flex items-center gap-1"><span className="h-0.5 w-3 rounded bg-white/40" />Retornos</span>
                </span>
              </div>
              <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="mt-3 h-28 w-full sm:h-32" aria-hidden>
                <defs>
                  <linearGradient id="g-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#7c5cff" stopOpacity=".45" />
                    <stop offset="1" stopColor="#7c5cff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[30, 60, 90].map((y) => (
                  <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(255,255,255,.05)" />
                ))}
                <path d={`${toPath(AREA_A)} L400 120 L0 120Z`} fill="url(#g-area)" />
                <path d={toPath(AREA_A)} fill="none" stroke="#a992ff" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
                <path d={toPath(AREA_B)} fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="1.2" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
              </svg>
              <div className="mt-1 flex justify-between text-[10px] text-clx-subtle">
                {["08h", "10h", "12h", "14h", "16h", "18h"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
            {/* Gauge */}
            <div className="hidden flex-col rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 sm:flex">
              <span className="text-xs font-medium text-clx-ink">Taxa de ocupação</span>
              <div className="flex flex-1 flex-col justify-center pt-2">
                <Gauge value={87} />
                <p className="mt-1 text-center text-[11px] font-medium text-clx-brand-light">Agenda quase cheia</p>
              </div>
            </div>
          </div>

          {/* Tabela */}
          <div className="mt-2 hidden rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 sm:block">
            <span className="text-xs font-medium text-clx-ink">Atendimentos de hoje</span>
            <table className="mt-2 w-full text-left text-[11px]">
              <thead className="text-clx-subtle">
                <tr className="border-b border-white/[0.06]">
                  {["Horário", "Paciente", "Procedimento", "Convênio", "Status"].map((h) => (
                    <th key={h} className="py-2 font-medium uppercase tracking-[0.08em]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TODAY.map((r) => (
                  <tr key={r.h} className="border-b border-white/[0.04] last:border-0">
                    <td className="py-2 tabular-nums text-clx-subtle">{r.h}</td>
                    <td className="py-2 text-clx-ink">{r.n}</td>
                    <td className="py-2 text-clx-muted">{r.p}</td>
                    <td className="py-2 text-clx-muted">{r.c}</td>
                    <td className="py-2"><span className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${r.tone}`}>{r.s}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: lista compacta */}
          <ul className="mt-2 space-y-1.5 sm:hidden">
            {TODAY.slice(0, 3).map((r) => (
              <li key={r.h} className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.025] p-2.5 text-[11px]">
                <span className="w-9 tabular-nums text-clx-subtle">{r.h}</span>
                <span className="min-w-0 flex-1 truncate text-clx-ink">{r.n}</span>
                <span className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-medium ${r.tone}`}>{r.s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Hero                                                             */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 sm:pt-44">
      {/* Fundo: grade + brilho teal */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[-280px] h-[640px] w-[1100px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(124,92,255,0.42), rgba(124,92,255,0.10) 55%, transparent)" }}
        aria-hidden
      />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow animate-fade-up">
            <Zap className="h-3.5 w-3.5 text-clx-brand-light" />O SaaS definitivo para clínicas ortopédicas e de saúde
          </span>
          <h1
            className="mt-6 animate-fade-up text-[38px] font-semibold leading-[1.05] text-gradient sm:text-[56px] lg:text-[64px]"
            style={{ animationDelay: ".08s" }}
          >
            Sua clínica ortopédica organizada, com agendamento ágil e faturamento sob controle.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-base leading-7 text-clx-muted sm:text-lg sm:leading-8" style={{ animationDelay: ".16s" }}>
            Simplifique o atendimento, reduza o tempo de espera dos pacientes e tenha prontuários especializados e gestão financeira completa em uma
            única plataforma.
          </p>

          <div className="mt-9 flex animate-fade-up flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: ".24s" }}>
            <a href="#precos" className="btn-primary w-full px-7 py-3.5 text-[15px] sm:w-auto">
              Começar Teste Grátis de 14 Dias <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#demo" className="btn-ghost w-full px-7 py-3.5 text-[15px] sm:w-auto">
              Ver o sistema por dentro
            </a>
          </div>
          <p className="mt-3 text-xs text-clx-subtle">Sem cartão de crédito no cadastro</p>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-clx-muted">
            {["Configuração rápida", "Suporte via WhatsApp", "De acordo com a LGPD"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-clx-brand-light" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Mockup */}
        <div className="relative mx-auto mt-16 max-w-6xl animate-fade-up sm:mt-20" style={{ animationDelay: ".32s" }}>
          <div className="absolute -inset-x-10 -top-10 bottom-1/2 rounded-full bg-clx-brand/10 blur-3xl" aria-hidden />
          <div className="relative [mask-image:linear-gradient(to_bottom,#000_75%,transparent)]">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Prova social (logos)                                             */
/* ------------------------------------------------------------------ */


/* ------------------------------------------------------------------ */
/* 4. Problema vs Solução                                              */
/* ------------------------------------------------------------------ */

function ProblemSolution() {
  const pains = [
    "Agenda em papel ou planilhas desorganizadas",
    "Prontuários atrasados e exames espalhados",
    "Faltas de pacientes sem aviso",
    "Nenhum controle sobre repasses e faturamento",
  ];
  const gains = [
    "Fluxo de atendimento centralizado",
    "Prontuário eletrônico rápido, com fichas prontas",
    "Confirmações automáticas por WhatsApp",
    "Relatórios financeiros em tempo real",
  ];
  return (
    <section id="beneficios" className="py-24 sm:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Por que mudar?"
          title={<>A rotina da clínica não precisa ser apagar incêndio.</>}
          text="Cada falta, cada ficha perdida e cada repasse calculado à mão custa tempo e dinheiro. Veja o que muda com o Clinix."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.06] bg-clx-bg-2 p-7 sm:p-8">
            <p className="text-sm font-medium text-clx-subtle">Hoje, sem o Clinix</p>
            <ul className="mt-6 space-y-4">
              {pains.map((p) => (
                <li key={p} className="flex gap-3 text-clx-muted">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-clx-danger/80" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-7 sm:p-8" style={{ boxShadow: "0 0 0 1px rgba(124,92,255,.25), 0 30px 80px -30px rgba(124,92,255,.35)" }}>
            <p className="flex items-center gap-2 text-sm font-medium text-clx-brand-light">
              <Sparkles className="h-4 w-4" /> Com o Clinix
            </p>
            <ul className="mt-6 space-y-4">
              {gains.map((g) => (
                <li key={g} className="flex gap-3 text-clx-ink">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-clx-brand-light" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Recursos                                                         */
/* ------------------------------------------------------------------ */

/** Objeto "3D" com brilho: ícone em um bloco de vidro sobre um pedestal iluminado. */
function GlowObject({ icon: Icon, size = "md" }: { icon: typeof CalendarDays; size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-24 w-24 rounded-[26px]" : "h-20 w-20 rounded-[22px]";
  return (
    <div className="relative grid h-40 place-items-center" aria-hidden>
      {/* halo */}
      <div className="absolute h-32 w-32 rounded-full bg-clx-brand/30 blur-2xl transition duration-500 group-hover:bg-clx-brand/45" />
      {/* pedestal */}
      <div className="absolute bottom-5 h-7 w-44 rounded-[50%] border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent" />
      <div className="absolute bottom-[26px] h-3 w-28 rounded-[50%] bg-clx-brand-light/60 blur-md" />
      {/* bloco */}
      <div
        className={`relative grid ${box} -translate-y-3 place-items-center border border-white/15 bg-gradient-to-b from-[#2a2340] to-[#120f1c] transition duration-500 group-hover:-translate-y-5`}
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.18), inset 0 -10px 20px rgba(0,0,0,.4), 0 20px 40px -10px rgba(124,92,255,.55)" }}
      >
        <Icon className={size === "lg" ? "h-10 w-10 text-clx-brand-light" : "h-8 w-8 text-clx-brand-light"} strokeWidth={1.6} style={{ filter: "drop-shadow(0 0 10px rgba(169,146,255,.9))" }} />
      </div>
    </div>
  );
}

function FeatureCard({ f, wide = false }: { f: (typeof FEATURES)[number]; wide?: boolean }) {
  return (
    <article className={`glass group overflow-hidden p-6 transition duration-300 hover:border-clx-brand/35 ${wide ? "sm:grid sm:grid-cols-[1fr_1fr] sm:items-center sm:gap-4" : "flex flex-col"}`}>
      <div className={wide ? "" : "order-1"}>
        <h3 className="text-lg font-semibold text-clx-ink">{f.title}</h3>
        <p className="mt-2 text-sm leading-6 text-clx-muted">{f.text}</p>
      </div>
      <div className={wide ? "mt-4 sm:mt-0" : "order-2 mt-4"}>
        <GlowObject icon={f.icon} size={wide ? "lg" : "md"} />
      </div>
    </article>
  );
}

function Features() {
  const [a, b, c, d, e] = FEATURES;
  return (
    <section id="recursos" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="grid gap-4 lg:grid-cols-4">
          <div className="flex flex-col justify-center pb-6 lg:pb-0 lg:pr-6">
            <span className="eyebrow w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-clx-brand-light" />
              Módulos & recursos
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.1] text-gradient sm:text-4xl">Tudo o que a clínica usa. Em um só lugar.</h2>
            <p className="mt-4 leading-7 text-clx-muted">
              O que entra na agenda aparece no prontuário, no caixa e no painel — sem digitar duas vezes.
            </p>
          </div>
          <FeatureCard f={a} />
          <FeatureCard f={b} />
          <FeatureCard f={c} />
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <FeatureCard f={d} wide />
          <FeatureCard f={e} wide />
        </div>
      </div>
    </section>
  );
}

function ForSpecialties() {
  const chips = ["Clínica geral", "Ortopedia", "Cardiologia", "Dermatologia", "Pediatria", "Ginecologia", "Fisioterapia", "Psicologia", "Nutrição"];
  return (
    <section id="especialidades" className="border-y border-white/[0.06] bg-clx-bg-2 py-24 sm:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <SectionHeader
          center={false}
          eyebrow="Para Todas as Especialidades"
          title="Feito para a rotina de cada especialidade."
          text="Modelos de prontuário, evolução do paciente e pedidos de exame prontos para usar. Anexe imagens, exames e laudos direto no prontuário do paciente."
        />
        <div className="glass p-6 sm:p-8">
          <p className="text-sm font-medium text-clx-ink">Modelos de prontuário por especialidade</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-clx-muted">
                {c}
              </span>
            ))}
          </div>
          <ul className="mt-7 space-y-3 border-t border-white/[0.06] pt-6 text-sm">
            {["Campos e modelos de prontuário personalizáveis para a sua clínica", "Anexos de imagens, exames e laudos por consulta", "Atestados, receitas e pedidos de exame em 1 clique"].map((t) => (
              <li key={t} className="flex gap-2.5 text-clx-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-clx-brand-light" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Destaque do dashboard                                            */
/* ------------------------------------------------------------------ */

type Col = { title: string; tone: string; dot: string; items: { n: string; p: string; t: string }[] };

const FLOW: Col[] = [
  {
    title: "Em Espera",
    tone: "text-clx-warning",
    dot: "bg-clx-warning",
    items: [
      { n: "Luiza Rocha", p: "Infiltração · Ombro D", t: "12 min" },
      { n: "Rafael Nunes", p: "1ª consulta · Tornozelo", t: "4 min" },
    ],
  },
  {
    title: "Em Atendimento",
    tone: "text-clx-brand-light",
    dot: "bg-clx-brand",
    items: [{ n: "Paulo Mendes", p: "Consulta · Lombar", t: "Sala 2" }],
  },
  {
    title: "Concluído",
    tone: "text-clx-success",
    dot: "bg-clx-success",
    items: [
      { n: "Marina Costa", p: "Retorno · LCA", t: "08:52" },
      { n: "Jorge Lima", p: "Pós-op · Quadril", t: "08:31" },
    ],
  },
];

function Showcase() {
  const [tab, setTab] = useState<"fluxo" | "relatorios">("fluxo");
  return (
    <section id="demo" className="py-24 sm:py-32">
      <div className="container">
        <SectionHeader
          eyebrow="Por dentro do Clinix"
          title="Veja cada paciente andar pela clínica."
          text="Da recepção ao pagamento, o status de cada atendimento atualiza em tempo real para toda a equipe."
        />

        <div className="mx-auto mt-10 flex w-fit rounded-full border border-white/10 bg-white/[0.03] p-1" role="tablist">
          {[
            { id: "fluxo", label: "Fluxo do paciente" },
            { id: "relatorios", label: "Relatórios" },
          ].map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id as typeof tab)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                tab === t.id ? "bg-clx-ink text-clx-bg" : "text-clx-muted hover:text-clx-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="glass mx-auto mt-8 max-w-5xl rounded-3xl p-3 sm:p-4">
          {tab === "fluxo" ? (
            <div className="grid gap-3 md:grid-cols-3">
              {FLOW.map((c) => (
                <div key={c.title} className="rounded-2xl border border-white/[0.06] bg-clx-bg/70 p-4">
                  <div className="flex items-center justify-between">
                    <span className={`flex items-center gap-2 text-sm font-medium ${c.tone}`}>
                      <span className={`h-2 w-2 rounded-full ${c.dot}`} />
                      {c.title}
                    </span>
                    <span className="text-xs text-clx-subtle">{c.items.length}</span>
                  </div>
                  <div className="mt-4 space-y-2.5">
                    {c.items.map((i) => (
                      <div key={i.n} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3.5">
                        <div className="flex items-center gap-2.5">
                          <span className="grid h-8 w-8 place-items-center rounded-full bg-white/[0.06] text-clx-muted">
                            <UserRound className="h-4 w-4" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm text-clx-ink">{i.n}</p>
                            <p className="truncate text-xs text-clx-subtle">{i.p}</p>
                          </div>
                          <span className="flex items-center gap-1 text-[11px] text-clx-subtle">
                            <Clock3 className="h-3 w-3" />
                            {i.t}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.06] bg-clx-bg/70 p-5 md:col-span-2">
                <p className="text-sm font-medium text-clx-ink">Atendimentos por semana</p>
                <svg viewBox="0 0 400 140" className="mt-4 h-40 w-full" role="img" aria-label="Gráfico de linha com atendimentos crescendo ao longo de 8 semanas">
                  {[35, 70, 105].map((y) => (
                    <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(255,255,255,.06)" />
                  ))}
                  <path d="M0 110 L57 96 L114 100 L171 78 L228 70 L285 52 L342 44 L400 26 L400 140 L0 140Z" fill="rgba(124,92,255,.12)" />
                  <path d="M0 110 L57 96 L114 100 L171 78 L228 70 L285 52 L342 44 L400 26" fill="none" stroke="#8f74ff" strokeWidth="2.5" />
                  <circle cx="400" cy="26" r="4" fill="#8f74ff" />
                </svg>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { l: "Tempo médio de espera", v: "9 min", d: "−41%" },
                  { l: "Repasses do mês", v: "R$ 62,8k", d: "fechados" },
                  { l: "Receita por convênio", v: "58%", d: "Unimed" },
                ].map((k) => (
                  <div key={k.l} className="flex-1 rounded-2xl border border-white/[0.06] bg-clx-bg/70 p-4">
                    <p className="text-xs text-clx-subtle">{k.l}</p>
                    <p className="mt-1 font-display text-2xl font-semibold text-clx-ink">{k.v}</p>
                    <p className="text-xs text-clx-brand-light">{k.d}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Depoimentos                                                      */
/* ------------------------------------------------------------------ */

function Testimonials() {
  return (
    <section id="depoimentos" className="bg-clx-bg-2 py-24 sm:py-32">
      <div className="container">
        <SectionHeader eyebrow="Depoimentos" title="Menos papel. Mais tempo com o paciente." />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.role} className="glass flex flex-col p-7">
              <div className="flex gap-0.5 text-clx-accent" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 leading-7 text-clx-ink/90">“{t.quote}”</blockquote>
              <span className="mt-6 w-fit rounded-full bg-clx-brand/10 px-3 py-1 text-xs font-medium text-clx-brand-light">{t.metric}</span>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/[0.06] text-clx-muted">
                  <UserRound className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-clx-ink">{t.name}</p>
                  <p className="text-xs text-clx-subtle">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 8. Preços                                                           */
/* ------------------------------------------------------------------ */

const ANNUAL_DISCOUNT = 0.2;
const brl = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 2 });

function Pricing() {
  const [annual, setAnnual] = useState(false);
  return (
    <section id="precos" className="relative py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-40 mx-auto h-[420px] max-w-3xl rounded-full bg-clx-brand/10 blur-3xl"
        aria-hidden
      />
      <div className="container relative">
        <SectionHeader
          eyebrow="Planos"
          title="Preço claro. Sem taxa de implantação."
          text="Todos os planos começam com 14 dias grátis e sem cartão de crédito."
        />

        <div className="mt-10 flex items-center justify-center gap-3 text-sm">
          <span className={annual ? "text-clx-subtle" : "text-clx-ink"}>Mensal</span>
          <button
            role="switch"
            aria-checked={annual}
            aria-label="Alternar para cobrança anual"
            onClick={() => setAnnual((v) => !v)}
            className={`relative h-7 w-12 rounded-full border transition ${annual ? "border-clx-brand/40 bg-clx-brand/20" : "border-white/15 bg-white/[0.06]"}`}
          >
            <span className={`absolute top-0.5 h-[22px] w-[22px] rounded-full bg-clx-ink transition-all ${annual ? "left-[22px]" : "left-0.5"}`} />
          </button>
          <span className={annual ? "text-clx-ink" : "text-clx-subtle"}>Anual</span>
          <span className="rounded-full bg-clx-accent/15 px-2.5 py-0.5 text-xs font-semibold text-clx-accent">−20%</span>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl items-stretch gap-4 lg:grid-cols-3">
          {PLANS.map((p) => {
            const price = annual ? Math.round(p.monthly * (1 - ANNUAL_DISCOUNT) * 100) / 100 : p.monthly;
            return (
              <div
                key={p.name}
                className={`glass relative flex flex-col p-8 ${p.featured ? "lg:-my-4 lg:py-12" : ""}`}
                style={p.featured ? { boxShadow: "0 0 0 1px rgba(124,92,255,.45), 0 40px 90px -30px rgba(124,92,255,.45)" } : undefined}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-clx-brand px-3 py-1 text-xs font-semibold text-clx-on-brand">
                    Mais Escolhido
                  </span>
                )}
                <h3 className="text-lg font-semibold text-clx-ink">{p.name}</h3>
                <p className="mt-1 text-sm text-clx-muted">{p.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-semibold tracking-[-0.03em] text-clx-ink">{brl(price)}</span>
                  <span className="text-sm text-clx-subtle">/mês</span>
                </div>
                <p className="mt-1 h-5 text-xs text-clx-subtle">
                  {annual ? `${brl(price * 12)} cobrados anualmente` : "Cobrança mensal, cancele quando quiser"}
                </p>
                <a href="/cadastro" className={`${p.featured ? "btn-primary" : "btn-ghost"} mt-7 w-full`}>
                  Iniciar Teste Grátis
                </a>
                <ul className="mt-8 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-clx-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-clx-brand-light" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 9. FAQ                                                              */
/* ------------------------------------------------------------------ */

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-clx-bg-2 py-24 sm:py-32">
      <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeader center={false} eyebrow="FAQ" title="Perguntas frequentes" text="Não achou sua dúvida? Fale com a nossa equipe pelo WhatsApp." />
          <a href="https://wa.me/" className="btn-ghost mt-7">
            <MessageCircle className="h-4 w-4" /> Falar com o suporte
          </a>
        </div>
        <div className="space-y-3">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`glass !rounded-2xl transition ${isOpen ? "!border-white/15" : ""}`}>
                <button
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-medium text-clx-ink">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-clx-muted">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  id={`faq-${i}`}
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <p className="overflow-hidden px-5 leading-7 text-clx-muted sm:px-6">
                    <span className="block pb-6">{f.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 10. CTA final                                                       */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section className="pb-20 pt-8 sm:pb-28">
      <div className="container">
        <div
          className="glass relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-14"
          style={{ boxShadow: "0 0 0 1px rgba(124,92,255,.22), 0 40px 100px -40px rgba(124,92,255,.6)" }}
        >
          <div
            className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[620px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(closest-side, rgba(124,92,255,.35), transparent)" }}
            aria-hidden
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-5">
              <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl border border-clx-brand/30 bg-clx-brand/15 text-clx-brand-light shadow-glow sm:grid">
                <Stethoscope className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-3xl font-semibold leading-[1.1] text-gradient sm:text-[40px]">Pronto para transformar a gestão da sua clínica?</h2>
                <p className="mt-3 text-lg text-clx-muted">Junte-se às clínicas que automatizaram seus processos com o Clinix.</p>
              </div>
            </div>
            <div className="shrink-0">
              <a href="/cadastro" className="btn-primary w-full px-8 py-4 text-base lg:w-auto">
                Criar Minha Conta Grátis Agora <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-3 flex items-center justify-center gap-4 text-xs text-clx-subtle">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> LGPD</span>
                <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" /> Criptografado</span>
                <span className="flex items-center gap-1.5"><CreditCard className="h-3.5 w-3.5" /> Sem cartão</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 11. Footer                                                          */
/* ------------------------------------------------------------------ */

function Footer() {
  const cols = [
    { t: "Produto", l: [["Recursos", "#recursos"], ["Planos", "#precos"], ["Especialidades", "#especialidades"], ["Entrar no Sistema", "/login"]] },
    { t: "Empresa", l: [["Depoimentos", "#depoimentos"], ["FAQ", "#faq"], ["Contato de Suporte", "https://wa.me/"]] },
    { t: "Legal", l: [["Termos de Uso", "/termos"], ["Política de Privacidade", "/privacidade"], ["Segurança & LGPD", "/lgpd"]] },
  ];
  return (
    <footer className="border-t border-white/[0.06] pb-10 pt-16">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-6 text-clx-muted">
              Gestão completa para clínicas de ortopedia, traumatologia e saúde: agenda, prontuário, financeiro e indicadores.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { I: Camera, l: "Instagram" },
                { I: Briefcase, l: "LinkedIn" },
                { I: PlayCircle, l: "YouTube" },
                { I: MessageCircle, l: "WhatsApp" },
              ].map(({ I, l }) => (
                <a key={l} href="#" aria-label={l} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-clx-muted transition hover:border-white/25 hover:text-clx-ink">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <p className="text-sm font-medium text-clx-ink">{c.t}</p>
              <ul className="mt-4 space-y-3">
                {c.l.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-clx-muted transition hover:text-clx-ink">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-8 text-xs text-clx-subtle sm:flex-row">
          <p>© {new Date().getFullYear()} Clinix. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Em conformidade com a LGPD (Lei 13.709/2018)</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

export default function ClinixLanding() {
  return (
    <div className="grain min-h-screen overflow-x-hidden bg-clx-bg">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <ForSpecialties />
        <Showcase />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
