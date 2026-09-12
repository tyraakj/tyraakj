# GitHub Profile Scrapbook & Tech Dossier Revamp — Design Spec

**Date:** 2026-09-12  
**Author:** Tyra Kj & Antigravity  
**Status:** Approved by User (Updated with Blue & Pink Palette + Real Projects)  
**Target Repository:** `tyraakj/tyraakj`

---

## 1. Overview & Vision
Transform the `tyraakj` GitHub profile README into an analog-meets-digital scrapbook and high-signal engineering dossier. The visual theme strictly features a **dual Blue & Pink palette** over dark obsidian fluid marble, pairing retro polaroids, washi tape, and ruled index cards with hard-hitting case studies for Solana ephemeral rollups, remote AI agent harnesses, privacy gateways, and gasless protocols.

---

## 2. Visual Foundation & Design Tokens

### 2.1 Color Palette (Strictly Blue & Pink)
* **Canvas Atmosphere:** Deep Obsidian (`#050811` to `#090d16`) with fluid marble waves and glowing blue/pink stardust.
* **Blue Spectrum:**
  * Powder Blue / Ice: `#93c5fd` / `#7ea8cc` (marker tape highlights, category titles, borders)
  * Electric & Sky Blue: `#60a5fa` / `#3b82f6` (cursor bars, active links, contribution squares)
  * Deep Midnight Navy: `#0f172a` / `#0a1128` (card backgrounds, pill tags)
* **Pink Spectrum:**
  * Blush & Rose: `#f472b6` / `#e06287` (soft highlighter tape, script headers, doodle ovals)
  * Hot / Magenta Pink: `#ec4899` / `#f43f5e` (push-pin, callout arrows, emphasis words)
  * Deep Plum / Berry: `#2a0e1c` (accent borders, dark badge fills)
* **Paper & Analog Accents:**
  * Ruled Index Card: Warm archival paper (`#fbf9f4`) with subtle blue ledger lines (`#e2e8f0`)
  * Washi Tape: Translucent frosty blue tape (`rgba(147, 197, 253, 0.45)`) and blush pink tape (`rgba(244, 114, 182, 0.45)`)
  * Push-Pin: 3D berry-pink sphere (`#ec4899` gradient) with realistic shadow

### 2.2 Typography Stack
* **Script / Handwritten:** `'Caveat', 'Architects Daughter', cursive`
* **Monospace / Typewriter:** `'Space Mono', 'Courier Prime', 'Courier New', monospace`
* **Modern Clean Sans:** `'Segoe UI', Inter, -apple-system, sans-serif`

---

## 3. Component & Asset Specifications

### 3.1 Hero Banner (`assets/hero.svg` — 900×360px)
* **Background:** Obsidian fluid marble waves with blue and pink stardust particles.
* **Left — Polaroid Collage (~-4° tilt):**
  * Cream polaroid frame with authentic drop shadow.
  * Artwork: Retro grainy B&W illustration of a tech girl with headphones coding at a dual-monitor workstation.
  * Caption: `that's me!! ✿` in soft blue/pink script.
  * Stickers:
    * 🎧 Over-ear studio headphones sticker clipped on the top-right corner.
    * ⭐ Chalk star & ribbon bow stickers on the left edge.
    * 💻 Cut-out sticker of hands typing on a laptop overlapping the bottom-right corner.
* **Right — Mixed Typography & CTAs:**
  * `hello` + `(there!!)` circled in a blush-pink hand-drawn doodle oval.
  * `Tyra Kj this side, I'm a` in flowing powder-blue script.
  * Three role tags:
    * `developer` — dark navy pill with soft blue border.
    * `/`
    * `ai infra & agents` — blush pink brush italic with pink doodle underline.
    * `/`
    * `solana & web3` — crisp white/ice-blue text with powder-blue underline.
  * Location: `based in | THE TERMINAL.` with an ice-blue vertical separator bar.
  * Action line:
    * `psst... start here ↘` in mini pink script.
    * Clickable button tags: `|SEE MY WORK` (ice-blue cursor bar, linked to `#featured-projects`) and `|DROP ME A LINE` (pink cursor bar, linked to `mailto:tyra191712@gmail.com`).

### 3.2 Philosophy Narrative Banner (`assets/manifesto.svg` — 900×160px)
* Seamless dark fluid marble background matching the hero.
* Genuine, builder-first narrative tailored to Tyra's actual projects, styled with alternating **powder-blue** and **blush-pink** marker tape highlights:
  * *"Most of my time goes into figuring out how [complex systems break] (powder-blue tape) and building better alternatives."*
  * *"From [zero-gas rollups to local AI harnesses] (blush-pink tape)—if it [solves an actual friction] (powder-blue tape), I want to build it."*


### 3.3 Skills & Activity Row

#### A. Ruled Index Card (`assets/skills_card.svg` — 540×350px)
* Vintage lined index card with torn-edge powder-blue washi tape at top center.
* Monospace header `SKILLS & TOOLS` on left, folio `28` on top right.
* 4 Columns with alternating Pink and Blue script headers:
  1. *Frontend* (Pink script) — `TypeScript`, `React`, `Next.js`, `Tailwind CSS`, `React Native`
  2. *Systems & Backend* (Blue script) — `Rust`, `Anchor`, `FastAPI`, `Node.js`, `Redis`, `Docker`
  3. *AI & Agent Infra* (Pink script) — `MCP Tools`, `TrueForge`, `LiteLLM`, `Presidio`, `Qdrant`, `WebSockets`
  4. *Web3 & On-Chain* (Blue script) — `Solana`, `MagicBlock ER`, `Solidity`, `Base`, `ethers.js`, `ERC-3009`

#### B. Pinned Activity Card (`assets/activity_card.svg` — 320×350px)
* Archival memo card with a 3D hot-pink push-pin at top center.
* Typewriter header: `GITHUB ACTIVITY     YEAR-ROUND`.
* Contribution heatmap matrix in muted blue, pink, and slate squares.
* Handwritten note: *"Small commits, shipped often."*
* Footnote: *"Open GitHub for the live contribution graph ↗"*.
* Holographic blue/pink sparkle sticker at bottom right.

### 3.4 Scrapbook Dividers (`assets/divider_grunge.svg` — 900×24px)
* Torn dark paper seam with blue and pink stardust trails.

### 3.5 Project Dossiers (The 4 Flagship Projects)
Formatted as engineering case dossiers with status tags, ASCII architecture flows, specifications tables, and deep-dive links:
1. ⚡ **Solaxis** (`Team-Managed/Solaxis`) — Sovereign Serverless Micro-Instance Engine for Solana  
   *Stack:* `Anchor` · `Rust` · `MagicBlock ER` · `Intel TDX TEE` · `Next.js 15`  
   *Highlight:* Sub-10ms compute, zero gas, Ephemeral Rollups (ER) & Private Ephemeral Rollups (PER).
2. 📱 **AirLink** (`Team-Managed/AirLink`) — Remote AI Agent Harness  
   *Stack:* `React Native` · `Expo` · `MCP Tools` · `TrueForge SDK` · `WebSockets`  
   *Highlight:* Remotely prompt, stream, and approve local coding agents from mobile with human-in-the-loop safety.
3. 🔒 **Privacy & Semantic Cache Proxy** (`tyraakj/privacy-semantic-cache-proxy`) — Zero-Leak LLM Gateway  
   *Stack:* `LiteLLM` · `Presidio` · `Redis` · `Qdrant` · `Python`  
   *Highlight:* PII masking before third-party egress, streaming unmasking buffer, semantic cache.
4. ⛓️ **Vaulted** (`tyraakj/Vaulted`) — Gasless Freelance Escrow Protocol  
   *Stack:* `Solidity` · `Base Sepolia` · `ERC-3009` · `UGF SDK` · `ethers.js`  
   *Highlight:* Non-custodial 7-day auto-release escrow where neither party needs native ETH for gas.

### 3.6 Live GitHub Stats & Contribution Snake
* GitHub stats styled in matching obsidian, pink, and blue (`bg_color=050811`, `title_color=f472b6`, `text_color=94a3b8`, `icon_color=60a5fa`, `border_color=1e293b`).
* Automated Snake Contribution Graph workflow (`.github/workflows/snake.yml`) preserved and integrated.

### 3.7 Contact Stamps (`assets/card_portfolio.svg`, `card_linkedin.svg`, `card_email.svg`)
* 3 Perforated postal stamps with blue & pink glow:
  * 🌐 **Portfolio Stamp** (`tyrakj.vercel.app`)
  * 💼 **LinkedIn Stamp** (`/in/tyraakj`)
  * ✉️ **Airmail Stamp** (`tyra191712@gmail.com`)
* Minimal Profile Views badge in pink (`#f472b6`).

---

## 4. Acceptance Criteria
1. Strict color discipline: All graphics, cards, highlights, and stats use the Blue & Pink aesthetic.
2. The 4 real projects (Solaxis, AirLink, Privacy Proxy, Vaulted) are showcased with accurate technical architecture flows and links.
3. The Manifesto quote reflects real infrastructure & agent engineering without buzzwords.
4. All SVGs render crisply across both GitHub dark and light modes.
5. All links, workflows (`snake.yml`), and badges are operational.
