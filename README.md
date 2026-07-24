<div align="center">





















</div>




<div align="center"> <img src="https://user-images.githubusercontent.com/74038190/212280805-9bcb336b-8c55-46a8-abf8-ff286ab55472.gif" width="600" /> </div>




🛠️ Tech Stack

<div align="center">

Category
Technologies
Languages
TypeScript, JavaScript, Java, Python
Frontend
React, Vite, TailwindCSS
Backend
Spring Boot, Spring Security, Hibernate, Node.js
Data & AI
PostgreSQL, MySQL, Redis, Apache Kafka, IBM watsonx.ai, Supabase
Web3
Solidity, Base, ethers.js, OpenZeppelin, ERC-3009
Infra & DevOps
AWS S3, Docker, Resilience4j, Bucket4j, Vercel




</div> <div align="center"> <img src="https://skillicons.dev/icons?i=ts,js,java,python,react,vite,spring,nodejs&theme=dark" />


<img src="https://skillicons.dev/icons?i=postgres,redis,kafka,solidity,aws,docker,supabase,git&theme=dark" /> </div>




📦 Featured Projects

<div align="center">

Project
Description
Tech
Privacy & Semantic Cache Proxy
OpenAI-compatible proxy that masks PII, caches semantically-similar queries, and traces exchanges without exposing sensitive data
LiteLLM, Presidio, Redis, Qdrant, Python
Evaluation Harness Pipeline
Executes versioned tasks against AI targets, captures evidence, grades outcomes, and produces reproducible release decisions
Python, LangGraph, OpenTelemetry, DSPy
Vaulted
Gasless freelance escrow on Base Sepolia — payment locks on-chain, no ETH required, UGF handles all gas
React, Solidity, ethers.js, UGF SDK




</div> <details>
<summary><b>🔒 Privacy & Semantic Cache Proxy</b> — click to expand</summary>
  



An OpenAI-API-compatible proxy that masks PII before it leaves your infrastructure, caches semantically-similar queries to cut inference cost, and traces every exchange without ever exposing sensitive data to the LLM provider or observability tooling.

Layer
What It Does
Text Normalization
NFKC normalize, strip zero-width chars, decode Base64/URL-encoded payloads
Secrets Engine
Shannon entropy scan + regex for AWS keys, GitHub tokens, JWTs — deterministic pre-NLP
PII Masking
Presidio-based detection with confidence scoring; masks entities to conversation-scoped Redis map
Semantic Cache
Local embedding model → vector similarity search filtered by user_id
Streaming Unmask
Custom sliding buffer in during_call/post_call hooks for near-real-time response re-hydration





Reading the Architecture: ARCHITECTURE.md

</details> <details>
<summary><b>🔬 Evaluation Harness Pipeline</b> — click to expand</summary>
  



The harness executes versioned tasks against an AI target, captures bounded evidence, grades observable outcomes, compares candidate behavior with a baseline, and produces a reproducible release decision. It is not a model gateway — it owns the outer evaluation loop.

Concept
Description
Trial
One target execution for one case — unique ID, timeout, grades, duration, provenance
Deterministic Graders
Own computable truth; optional model judges require calibration
RAG Contract
Recall@k, Precision@k, reciprocal rank with explicit thresholds
Loop Contract
Iteration ceilings, repeated-node limits, allowed terminal reasons
Sandbox Provider
User-supplied isolation — disposable filesystems, browsers, containers





Reading the Architecture: ARCHITECTURE.md

</details> <details>
<summary><b>⛓️ Vaulted</b> — click to expand</summary>
  



A gasless freelance escrow platform built on Base Sepolia. Payment is locked on-chain the moment a job is posted, released only on approval, and neither party ever needs ETH — UGF handles all gas fees automatically.

Component
Details
Gasless Flow
login() → quote() → settle() (ERC-3009) → execute() via UGF SDK
Smart Contract
Escrow.sol on OpenZeppelin — 7-day auto-release, on-chain identity enforcement, dispute state machine
Architecture Rule
"Read with ethers, write with UGF" — prevents MetaMask from demanding native gas on write paths
Network
Base Sepolia Testnet · Mock USD (TYI_MOCK_USD)





Explore the Code: tyraakj/Vaulted

</details>




<div align="center"> <img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/0b335028-1d3d-4ee5-b5b3-a373d499be7e" width="400" /> </div>




📊 GitHub Stats

<div align="center"> <img src="https://github-readme-stats.vercel.app/api?username=tyraakj&show_icons=true&theme=transparent&hide_border=true" width="48%" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=tyraakj&layout=compact&theme=transparent&hide_border=true" width="48%" />






<img src="https://github-readme-streak-stats.herokuapp.com/?user=tyraakj&theme=transparent&hide_border=true" width="48%" /> </div>




🌐 Open Source & Certifications

Experience
Details
Winter of Code 5.0 (GDG on Campus, IIIT Kalyani )
Contributed an authentication service feature to an open-source Node.js project. Month-long collaboration with maintainers.
IBM — Machine Learning with Python
Certification
IBM — Intro to Software Engineering
Certification
Oracle — Java Foundations
Certification







<div align="center">





























</div>



