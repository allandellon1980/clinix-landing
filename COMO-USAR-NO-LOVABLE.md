# Clinix — landing page no Lovable

1. **tailwind.config.ts** — mescle o bloco `theme.extend` (fontes, cores `clx-*`, sombras, animações) no config do projeto.
2. **index.css** — cole no topo do `src/index.css` (import das fontes Inter/Inter Tight, `.glass`, `.btn-primary`, `.btn-ghost`, `.eyebrow`, `.grain`, `.bg-grid`, `.text-gradient`).
3. **ClinixLanding.tsx** — salve em `src/pages/Index.tsx` (ou importe como componente na rota `/`). Dependência: `lucide-react` (já vem no Lovable).

Prompt sugerido para colar no Lovable junto com os arquivos:

> Substitua a página inicial pelo componente ClinixLanding abaixo, sem alterar o layout nem as classes. Mescle as cores/fontes do tailwind.config e adicione o CSS global ao index.css. Os botões "Entrar no Sistema" levam a /login e os de teste grátis a /cadastro.

## Antes de publicar

- Depoimentos (`TESTIMONIALS`), logos de parceiros (`PARTNERS`) e números do mockup são **exemplos** — troque por dados reais e autorizados.
- Preços (`PLANS`) e desconto anual (`ANNUAL_DISCOUNT = 0.2`) são sugestões.
- Link do WhatsApp: troque `https://wa.me/` pelo número do suporte.
- Logo: a marca atual é provisória (cruz + articulação); troque pelo SVG oficial no componente `Logo`.
