<div align="center">

# Tyra Javed
**Full-Stack Engineer**

Building distributed systems, smart contracts, and AI-integrated platforms. <br/>


[![Portfolio](https://img.shields.io/badge/Portfolio-tyrakj.vercel.app-000000?style=flat-square&logo=vercel&logoColor=white)](https://tyrakj.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-tyraakj-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tyraakj/)
[![Email](https://img.shields.io/badge/Email-tyra191712@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:tyra191712@gmail.com)

</div>

---

## 💻 Technical Arsenal

<div align="center">
  <img src="https://skillicons.dev/icons?i=ts,js,java,python,react,vite,spring,nodejs" />
  <br/>
  <img src="https://skillicons.dev/icons?i=postgres,redis,kafka,solidity,aws,docker,supabase,git" />
</div>
<br/>

*   **Languages & Frontend:** TypeScript, JavaScript, Java, Python, React, Vite
*   **Backend Frameworks:** Spring Boot, Spring Web MVC, Spring Security, Hibernate, Node.js
*   **Data & AI:** PostgreSQL, MySQL, Redis, Apache Kafka (KRaft), IBM watsonx.ai, Supabase
*   **Web3:** Solidity, Base, ethers.js, OpenZeppelin, ERC-3009
*   **Infrastructure:** AWS S3, Docker, Bucket4j, Resilience4j, Vercel

---

## 🏗️ Architecture & Featured Projects

*(Click to expand for technical details)*

<details>
<summary><b>🛡️ API Guardian</b> | <i>Production-Hardened API Gateway</i></summary>
<br/>
<blockquote>
<b>Tech Stack:</b> Spring Boot, Apache Kafka (KRaft), Redis, React, TypeScript, AWS S3, Resilience4j, Bucket4j
</blockquote>

*   Built a non-blocking reverse proxy on Spring WebClient with a bounded connection pool, hard connect/read timeouts, and token-bucket rate limiting per client IP via Bucket4j + Redis.
*   Implemented async Kafka event streaming so every proxied request is published without blocking the request thread; consumers apply UUID-based dedup (Redis `SET NX`) for replay-safe analytics counters.
*   Engineered a real-time SSE dashboard over React (zero polling); daily analytics archived to AWS S3 with Spring Retry and Kafka DLQ on failure.
*   Added Resilience4j circuit breakers on Redis and S3 with fail-open degradation; JWT auth with Redis blacklist for immediate token revocation on logout.
<br/>
</details>

<details>
<summary><b>⛓️ Vaulted</b> | <i>Gasless Freelance Escrow on Base Sepolia</i></summary>
<br/>
<blockquote>
<b>Tech Stack:</b> React, TypeScript, Solidity, OpenZeppelin, ethers.js, UGF SDK, Base
</blockquote>

*   Built a decentralized escrow platform where payment locks on-chain at job creation and releases only on client approval, eliminating platform middlemen and the 20% platform cut.
*   Integrated UGF (Universal Gas Framework) 4-step gasless flow: `wallet login` → `USD quote` → `ERC-3009 signature` → `UGF executes on-chain`; freelancers need zero ETH.
*   Authored `Escrow.sol` on OpenZeppelin with 7-day auto-release (anti-hostage), on-chain caller identity enforcement, and dispute state machine (`Open` → `Active` → `Complete/Released` or `Disputed`).
*   Architected 'read with ethers, write with UGF' separation across custom hooks (`useWallet`, `useUGF`, `useContract`) to prevent MetaMask from demanding native gas on any write path.
<br/>
</details>

<details>
<summary><b>🤖 CodeSheriff</b> | <i>AI-Powered Code Security Platform</i></summary>
<br/>
<blockquote>
<b>Tech Stack:</b> Spring Boot, React, IBM watsonx.ai (Llama 3 70B), PostgreSQL/Supabase, JavaParser, JWT
</blockquote>

*   Architected a 4-layer security pipeline: prompt injection detection (20+ patterns), credential leak scanning (13 secret types incl. AWS/GitHub/JWT), AI hallucination validation via AST diff, and an immutable audit trail.
*   Integrated IBM watsonx.ai for method-level Java analysis: cyclomatic complexity, test coverage suggestions, and confidence scoring with AST-level validation against JavaParser output to catch hallucinations.
*   Designed enterprise features: multi-tenant row-level security (RLS), JWT auth, 100 req/min token-bucket rate limiting, paginated REST API across 11 endpoints, and 8 JPA entities across 8,371 lines of production code.
<br/>
</details>

---

## 🌐 Open Source 

*  
*   🌟 **Winter of Code 5.0 (GDG on Campus, IIIT Kalyani)** - Contributed an authentication service feature to an open-source project in Node.js. Collaborated with maintainers across the month-long program, gaining hands-on OS workflow and code review experience.
*   🏆 **Certifications:** 
    *   Machine Learning with Python *(IBM)* 
    *   Intro to Software Engineering *(IBM)* 
    *   Oracle Java Foundations *(Oracle)*

---

## 📊 GitHub Analytics

<div align="center">
 
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=tyraakj&layout=compact&theme=transparent&hide_border=true" width="48%" />
</div>


