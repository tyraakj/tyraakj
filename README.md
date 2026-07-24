<div align="center">

[![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=tyraakj&show_icons=true&theme=transparent&hide_border=true)](https://github.com/tyraakj)

<br>

![typing animation](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=6d28d9&width=700&lines=Building+distributed+systems;Crafting+smart+contracts;Integrating+AI+platforms;Architecting+gasless+protocols;Shipping+production-grade+APIs)

</div>

---

<div align="center">

<img src="https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/animated%20(10).webp" width="700" alt="Digital Reality hero banner" />

</div>

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Languages** | TypeScript, JavaScript, Java, Python |
| **Frontend** | React, Vite, TailwindCSS |
| **Backend** | Spring Boot, Spring Security, Hibernate, Node.js |
| **Data & AI** | PostgreSQL, MySQL, Redis, Apache Kafka, IBM watsonx.ai, Supabase |
| **Web3** | Solidity, Base, ethers.js, OpenZeppelin, ERC-3009 |
| **Infra & DevOps** | AWS S3, Docker, Resilience4j, Bucket4j, Vercel |

</div>

<div align="center">

<img src="https://skillicons.dev/icons?i=ts,js,java,python,react,vite,spring,nodejs&theme=dark" />
<br>
<img src="https://skillicons.dev/icons?i=postgres,redis,kafka,solidity,aws,docker,supabase,git&theme=dark" />

</div>

---

## 📦 Featured Projects

<div align="center">

| Project | Description | Tech |
|---------|-------------|------|
| **[Privacy & Semantic Cache Proxy](https://github.com/tyraakj/privacy-semantic-cache-proxy)** | OpenAI-compatible proxy that masks PII, caches semantically-similar queries, and traces exchanges without exposing sensitive data | LiteLLM, Presidio, Redis, Qdrant, Python |
| **[Evaluation Harness Pipeline](https://github.com/tyraakj/eval-harness-pipeline)** | Executes versioned tasks against AI targets, captures evidence, grades outcomes, and produces reproducible release decisions | Python, LangGraph, OpenTelemetry, DSPy |
| **[Vaulted](https://github.com/tyraakj/Vaulted)** | Gasless freelance escrow on Base Sepolia — payment locks on-chain, no ETH required, UGF handles all gas | React, Solidity, ethers.js, UGF SDK |

</div>

<details>
<summary><b>🔒 Privacy & Semantic Cache Proxy</b> — click to expand</summary>
<br>

An OpenAI-API-compatible proxy that masks PII before it leaves your infrastructure, caches semantically-similar queries to cut inference cost, and traces every exchange without ever exposing sensitive data to the LLM provider or observability tooling.

| Layer | What It Does |
|-------|-------------|
| **Text Normalization** | NFKC normalize, strip zero-width chars, decode Base64/URL-encoded payloads |
| **Secrets Engine** | Shannon entropy scan + regex for AWS keys, GitHub tokens, JWTs — deterministic pre-NLP |
| **PII Masking** | Presidio-based detection with confidence scoring; masks entities to conversation-scoped Redis map |
| **Semantic Cache** | Local embedding model → vector similarity search filtered by user_id |
| **Streaming Unmask** | Custom sliding buffer in during_call/post_call hooks for near-real-time response re-hydration |

> **Reading the Architecture:** [ARCHITECTURE.md](https://github.com/tyraakj/privacy-semantic-cache-proxy/blob/main/ARCHITECTURE.md)

</details>

<details>
<summary><b>🔬 Evaluation Harness Pipeline</b> — click to expand</summary>
<br>

The harness executes versioned tasks against an AI target, captures bounded evidence, grades observable outcomes, compares candidate behavior with a baseline, and produces a reproducible release decision. It is not a model gateway — it owns the outer evaluation loop.

| Concept | Description |
|---------|-------------|
| **Trial** | One target execution for one case — unique ID, timeout, grades, duration, provenance |
| **Deterministic Graders** | Own computable truth; optional model judges require calibration |
| **RAG Contract** | Recall@k, Precision@k, reciprocal rank with explicit thresholds |
| **Loop Contract** | Iteration ceilings, repeated-node limits, allowed terminal reasons |
| **Sandbox Provider** | User-supplied isolation — disposable filesystems, browsers, containers |

> **Reading the Architecture:** [ARCHITECTURE.md](https://github.com/tyraakj/eval-harness-pipeline/blob/main/docs/ARCHITECTURE.md)

</details>

<details>
<summary><b>⛓️ Vaulted</b> — click to expand</summary>
<br>

A gasless freelance escrow platform built on Base Sepolia. Payment is locked on-chain the moment a job is posted, released only on approval, and neither party ever needs ETH — UGF handles all gas fees automatically.

| Component | Details |
|-----------|---------|
| **Gasless Flow** | `login()` → `quote()` → `settle()` (ERC-3009) → `execute()` via UGF SDK |
| **Smart Contract** | `Escrow.sol` on OpenZeppelin — 7-day auto-release, on-chain identity enforcement, dispute state machine |
| **Architecture Rule** | "Read with ethers, write with UGF" — prevents MetaMask from demanding native gas on write paths |
| **Network** | Base Sepolia Testnet · Mock USD (TYI_MOCK_USD) |

> **Explore the Code:** [tyraakj/Vaulted](https://github.com/tyraakj/Vaulted)

</details>

---

<div align="center">

<img src="https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/animated%20(33).webp" width="500" alt="NexaCore Control section preview" />

</div>

---

## 📊 GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=tyraakj&show_icons=true&theme=transparent&hide_border=true" width="48%" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=tyraakj&layout=compact&theme=transparent&hide_border=true" width="48%" />

<br><br>

<img src="https://github-readme-streak-stats.herokuapp.com/?user=tyraakj&theme=transparent&hide_border=true" width="48%" />

</div>

---

## 🌐 Open Source & Certifications

| Experience | Details |
|------------|---------|
| **Winter of Code 5.0** (GDG on Campus, IIIT Kalyani) | Contributed an authentication service feature to an open-source Node.js project. Month-long collaboration with maintainers. |
| **IBM — Machine Learning with Python** | Certification |
| **IBM — Intro to Software Engineering** | Certification |
| **Oracle — Java Foundations** | Certification |

---

<div align="center">

<img src="https://motionsites.ai/assets/footer-lumina-preview-CYkr-ACN.gif" width="700" alt="Lumina footer animation" />

<br><br>

[![Portfolio](https://img.shields.io/badge/Portfolio-tyrakj.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://tyrakj.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-tyraakj-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tyraakj/)
[![Email](https://img.shields.io/badge/Email-tyra191712@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:tyra191712@gmail.com)

</div>
