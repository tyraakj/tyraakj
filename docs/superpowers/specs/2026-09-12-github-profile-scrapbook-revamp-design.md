# GitHub Profile Scrapbook & Tech Dossier Revamp — Design Spec

**Date:** 2026-09-12  
**Author:** Tyra Kj & Antigravity  
**Status:** Approved by User  
**Target Repository:** `tyraakj/tyraakj`

---

## 1. Overview & Vision
Transform the `tyraakj` GitHub profile README into an analog-meets-digital scrapbook and engineering dossier. Inspired by Y2K-cyber collage aesthetics, vintage ruled notebook paper, washi tape accents, and neon highlighter markers, this design pairs visual storytelling with high-signal technical case studies for a Full-Stack, AI Systems, and Web3 engineer.

---

## 2. Visual Foundation & Design Tokens

### 2.1 Color Palette
* **Deep Obsidian Canvas:** `#070a0f` to `#0d1117` (fluid marble contour gradients with subtle constellation sparkles)
* **Neon Hot Pink:** `#ff3b81` / `#f43f5e` (hand-drawn doodle circles, script headers, pill highlights)
* **Cyber Cyan / Ice Blue:** `#38bdf8` / `#60a5fa` (marker tape highlights, subtext, link indicators)
* **Warm Highlighter Yellow:** `#eab308` / `#facc15` (marker tape highlights on philosophy manifesto)
* **Archival Materials:**
  * Vintage Ruled Index Card: `#fbf9f4` background with `#e2e8f0` ledger ruling lines
  * Translucent Washi Tape: `rgba(125, 211, 252, 0.45)` with torn edge paths
  * Polaroid Frame: Warm photographic cardstock with drop shadow (`rgba(0,0,0,0.5)`)
  * Push-Pin: 3D crimson red sphere (`#ef4444` gradient) with realistic shadow

### 2.2 Typography Stack
Embedded in SVGs via Google Fonts with system fallbacks:
* **Script / Handwritten:** `'Caveat', 'Architects Daughter', cursive`
* **Monospace / Typewriter:** `'Space Mono', 'Courier Prime', 'Courier New', monospace`
* **Modern Clean Sans:** `'Segoe UI', Inter, -apple-system, sans-serif`

---

## 3. Component & Asset Specifications

### 3.1 Hero Banner (`assets/hero.svg` — 900×360px)
* **Background:** Obsidian fluid marble waves with sparkling stars.
* **Left — Polaroid Collage (~-4° tilt):**
  * Tilted photo frame with drop shadow.
  * Artwork: Retro grainy B&W illustration of a tech girl with over-ear headphones coding at a dual-monitor workstation.
  * Polaroid caption: `that's me!! ✿` in handwritten script.
  * Stickers:
    * 🎧 Over-ear studio headphones resting on top-right photo corner.
    * ⭐ Chalk distressed star sticker on far left.
    * 🎀 Ribbon bow sticker near bottom corner.
    * 💻 High-contrast cut-out sticker of hands typing on a laptop overlapping the bottom-right corner.
* **Right — Mixed Typography & CTAs:**
  * `hello` + `(there!!)` circled in hot-pink hand-drawn doodle oval.
  * `Tyra Kj this side, I'm a` in soft ice-blue cursive script.
  * Three distinct role tags:
    * `developer` — dark charcoal pill tag with subtle border.
    * `/`
    * `ai engineer` — vibrant hot-pink brush italic with pink doodle underline.
    * `/`
    * `web3 architect` — clean white uppercase with cyan underline.
  * Location line: `based in | THE TERMINAL.` with cyan vertical separator.
  * Action triggers:
    * `psst... start here ↘` in mini hot-pink script.
    * Clickable buttons: `|SEE MY WORK` (anchored to `#featured-projects`) and `|DROP ME A LINE` (anchored to `mailto:tyra191712@gmail.com`).

### 3.2 Philosophy Manifesto Banner (`assets/manifesto.svg` — 900×160px)
* Seamless dark fluid marble background matching the hero.
* Editorial script quotes with realistic vector marker tape overlays:
  * *"I care as much about the [pixel as the packet] (cyan tape). I love the [messy middle] (pink tape) where ideas turn into systems."*
  * *"[Design gives it clarity.] (yellow marker tape) Code makes it resilient."*
  * *"The goal is simple: build things that are fast, private, and [effortless to use.] (cyan tape)"*

### 3.3 Skills & Activity Row

#### A. Ruled Index Card (`assets/skills_card.svg` — 540×350px)
* Lined vintage index card with translucent icy-blue washi tape at top center.
* Monospace header `SKILLS & TOOLS` on left, folio `28` on top right.
* 4 Columns with pink script headers and rounded pill tags:
  1. *Frontend*: `TypeScript`, `React`, `Next.js`, `Tailwind CSS`, `Vite`
  2. *Backend & Systems*: `FastAPI`, `Node.js`, `PostgreSQL`, `Redis`, `Kafka`, `Docker`
  3. *AI & LLMs*: `LiteLLM`, `LangGraph`, `DSPy`, `Presidio`, `OpenAI API`, `Qdrant`
  4. *Web3 & Infra*: `Solidity`, `ethers.js`, `OpenZeppelin`, `Base`, `Hardhat`, `AWS`

#### B. Pinned Activity Card (`assets/activity_card.svg` — 320×350px)
* Archival memo card with a 3D red push-pin at top center.
* Typewriter header: `GITHUB ACTIVITY     YEAR-ROUND`.
* Contribution heatmap matrix in muted slate, sage, and ice-blue tones.
* Handwritten note: *"Small commits, shipped often."*
* Footnote: *"Open GitHub for the live contribution graph ↗"*.
* Crystal sparkle sticker accent at bottom right.

### 3.4 Scrapbook Dividers (`assets/divider_grunge.svg` — 900×24px)
* Subtle torn paper edges with star dust and translucent washi tape seams.

### 3.5 Project Dossiers (Featured Case Studies)
Presented as technical engineering case dossiers with status tags, ASCII architecture flows, specifications tables, and deep-dive links:
1. **🔒 Privacy & Semantic Cache Proxy** (`LiteLLM` · `Presidio` · `Redis` · `Qdrant` · `Python`)
2. **🔬 Evaluation Harness Pipeline** (`Python` · `LangGraph` · `OpenTelemetry` · `DSPy`)
3. **⛓️ Vaulted — Gasless Freelance Escrow** (`React` · `Solidity` · `ethers.js` · `UGF SDK` · `OpenZeppelin`)

### 3.6 Live GitHub Stats & Contribution Snake
* Custom Tokyo-Night / Obsidian themed stats (`bg_color=070a0f`, `title_color=f43f5e`, `text_color=94a3b8`, `icon_color=38bdf8`).
* Automated 12-hour Snake Contribution Graph workflow (`.github/workflows/snake.yml`) preserved and integrated.

### 3.7 Contact Stamps (`assets/card_portfolio.svg`, `card_linkedin.svg`, `card_email.svg`)
* 3 Perforated postal / holographic sticker stamps for Portfolio (`tyrakj.vercel.app`), LinkedIn (`/in/tyraakj`), and Email (`tyra191712@gmail.com`).
* Minimal Profile Views counter with `#f43f5e` neon accent.

---

## 4. Acceptance Criteria
1. All SVGs render cleanly in both GitHub Dark Mode and Light Mode.
2. The Hero Banner, Manifesto, and Skills/Activity row reproduce the aesthetic from user reference images.
3. All links (Projects, Deep-Dives, Socials, Email, Snake) are working and accurate.
4. Existing GitHub Actions (`snake.yml`) remain fully intact and operational.
