# GitHub Profile Scrapbook & Tech Dossier Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the `tyraakj` GitHub profile README into an analog-meets-digital scrapbook and high-signal engineering dossier with a strict Blue & Pink aesthetic, featuring Solaxis, AirLink, Privacy Proxy, and Vaulted.

**Architecture:** We use high-fidelity, standalone SVGs with embedded styles and web fonts for the complex visual components (Hero Polaroid banner, Highlighter Narrative, Ruled Index Card, Pinned Activity Card, Postal Stamps) combined with structured GitHub markdown for technical case dossiers (ASCII dataflows, specifications tables, live stats, and automated snake contributions).

**Tech Stack:** SVG / Vector Graphics, XML, Markdown, GitHub Actions (`snake.yml`), Python (verification testing).

## Global Constraints

- **Color Discipline:** Strictly **Blue & Pink** (+ dark obsidian canvas `#050811` and white/cream paper text). No yellow, green, or harsh neon cyan.
- **Projects:** Must feature the 4 real projects: Solaxis, AirLink, Privacy & Semantic Cache Proxy, and Vaulted.
- **Narrative Quote:** Must use Angle 3: *"Most of my time goes into figuring out how complex systems break and building better alternatives. From zero-gas rollups to local AI harnesses—if it solves an actual friction, I want to build it."*
- **Git Commit Standards:** Use username `tyraakj` and email `tyra191712@gmail.com` with clear semantic commit titles.
- **Workflows:** Preserve `.github/workflows/snake.yml` without breaking its triggers or output paths.

---

### Task 1: Verification Test Harness Setup

**Files:**
- Create: `tests/verify_profile.py`

**Interfaces:**
- Produces: A Python test suite that validates XML syntax, dimensions, viewports, color constraints, and markdown file link integrity.

- [ ] **Step 1: Write the verification test harness**

```python
# tests/verify_profile.py
import os
import re
import xml.etree.ElementTree as ET

REQUIRED_ASSETS = {
    "assets/hero.svg": (900, 360),
    "assets/manifesto.svg": (900, 160),
    "assets/skills_card.svg": (540, 350),
    "assets/activity_card.svg": (320, 350),
    "assets/divider_grunge.svg": (900, 24),
    "assets/card_portfolio.svg": (265, 90),
    "assets/card_linkedin.svg": (265, 90),
    "assets/card_email.svg": (265, 90),
}

FORBIDDEN_COLOR_PATTERNS = [
    re.compile(r'#eab308', re.I), # old yellow
    re.compile(r'#facc15', re.I), # old yellow
]

def test_assets_exist_and_are_valid_xml():
    for rel_path, (expected_w, expected_h) in REQUIRED_ASSETS.items():
        assert os.path.exists(rel_path), f"Missing asset: {rel_path}"
        with open(rel_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Check XML parse
        try:
            root = ET.fromstring(content)
        except ET.ParseError as e:
            raise AssertionError(f"XML parse error in {rel_path}: {e}")
        
        # Check width/height attributes or viewBox
        viewbox = root.attrib.get("viewBox")
        if viewbox:
            parts = [float(p) for p in viewbox.split()]
            assert len(parts) == 4, f"Invalid viewBox in {rel_path}"
            assert int(parts[2]) == expected_w, f"Width mismatch in {rel_path}: expected {expected_w}, got {parts[2]}"
            assert int(parts[3]) == expected_h, f"Height mismatch in {rel_path}: expected {expected_h}, got {parts[3]}"
        
        # Check forbidden colors
        for pat in FORBIDDEN_COLOR_PATTERNS:
            assert not pat.search(content), f"Forbidden color {pat.pattern} found in {rel_path}"

def test_readme_links_and_structure():
    assert os.path.exists("README.md"), "README.md is missing"
    with open("README.md", "r", encoding="utf-8") as f:
        readme = f.read()
    
    # Must link all 4 projects
    assert "https://github.com/Team-Managed/Solaxis" in readme
    assert "https://github.com/Team-Managed/AirLink" in readme
    assert "privacy-semantic-cache-proxy" in readme
    assert "Vaulted" in readme
    
    # Must reference all required assets
    for asset in REQUIRED_ASSETS.keys():
        assert asset in readme, f"Asset {asset} not referenced in README.md"

if __name__ == "__main__":
    test_assets_exist_and_are_valid_xml()
    test_readme_links_and_structure()
    print("All profile verification tests passed!")
```

- [ ] **Step 2: Run test to verify it fails initially**

Run: `python tests/verify_profile.py`  
Expected: FAIL with `AssertionError: Missing asset: assets/hero.svg`

- [ ] **Step 3: Create assets directory and commit test harness**

```bash
mkdir -p assets
git add tests/verify_profile.py
git commit -m "test: add verification harness for profile assets and readme"
```

---

### Task 2: Build the Hero Banner SVG (`assets/hero.svg`)

**Files:**
- Create: `assets/hero.svg`

**Interfaces:**
- Dimensions: `viewBox="0 0 900 360"`, width="900", height="360".
- Content:
  - Background: Obsidian fluid marble waves with blue and pink stardust particles.
  - Left: -4° tilted cream polaroid frame with drop shadow; retro B&W illustration of tech girl with headphones coding at desk; caption `that's me!! ✿`; stickers: over-ear headphones, star, ribbon bow, typing hands on laptop.
  - Right: `hello (there!!)` with pink doodle circle; `Tyra Kj this side, I'm a` in powder-blue script; tags `developer` (dark navy pill), `ai infra & agents` (blush pink script), `solana & web3` (ice blue text); `based in | THE TERMINAL.`; buttons `|SEE MY WORK` and `|DROP ME A LINE`.

- [ ] **Step 1: Create `assets/hero.svg`**

Create `assets/hero.svg` with high-fidelity vector elements, gradient waves, star particles, polaroid illustration, stickers, and mixed typography.

- [ ] **Step 2: Run verification test on `assets/hero.svg`**

Run: `python -c "import xml.etree.ElementTree as ET; ET.parse('assets/hero.svg'); print('Valid XML')"`  
Expected: `Valid XML`

- [ ] **Step 3: Commit `assets/hero.svg`**

```bash
git add assets/hero.svg
git commit -m "feat: add scrapbook hero banner svg with polaroid and mixed typography"
```

---

### Task 3: Build the Philosophy Narrative Banner SVG (`assets/manifesto.svg`)

**Files:**
- Create: `assets/manifesto.svg`

**Interfaces:**
- Dimensions: `viewBox="0 0 900 160"`, width="900", height="160".
- Content:
  - Background: Obsidian fluid marble gradient matching `hero.svg`.
  - Narrative:
    - *"Most of my time goes into figuring out how [complex systems break] (powder blue tape) and building better alternatives."*
    - *"From [zero-gas rollups to local AI harnesses] (blush pink tape)—if it [solves an actual friction] (powder blue tape), I want to build it."*
  - Typography: Google Fonts `Caveat` / `Architects Daughter` with alternating semi-transparent powder-blue (`rgba(147, 197, 253, 0.45)`) and blush-pink (`rgba(244, 114, 182, 0.45)`) vector marker tape rectangles.

- [ ] **Step 1: Create `assets/manifesto.svg`**

Write `assets/manifesto.svg` with seamless marble styling, vector highlighter tape accents, and cursive script.

- [ ] **Step 2: Run XML validation on `assets/manifesto.svg`**

Run: `python -c "import xml.etree.ElementTree as ET; ET.parse('assets/manifesto.svg'); print('Valid XML')"`  
Expected: `Valid XML`

- [ ] **Step 3: Commit `assets/manifesto.svg`**

```bash
git add assets/manifesto.svg
git commit -m "feat: add philosophy narrative banner svg with blue and pink tape highlights"
```

---

### Task 4: Build the Skills Index Card (`assets/skills_card.svg`) & Pinned Activity Card (`assets/activity_card.svg`)

**Files:**
- Create: `assets/skills_card.svg`
- Create: `assets/activity_card.svg`

**Interfaces:**
- `skills_card.svg`: `viewBox="0 0 540 350"`, width="540", height="350".
  - Vintage lined paper background (`#fbf9f4`) with subtle blue ledger ruling lines (`#e2e8f0`).
  - Torn powder-blue washi tape at top center (`rgba(147, 197, 253, 0.5)`).
  - Header: `SKILLS & TOOLS` in monospace, folio `28` on right.
  - 4 Columns:
    - *Frontend* (Pink script): `TypeScript`, `React`, `Next.js`, `Tailwind CSS`, `React Native`
    - *Systems & Backend* (Blue script): `Rust`, `Anchor`, `FastAPI`, `Node.js`, `Redis`, `Docker`
    - *AI & Agent Infra* (Pink script): `MCP Tools`, `TrueForge`, `LiteLLM`, `Presidio`, `Qdrant`, `WebSockets`
    - *Web3 & On-Chain* (Blue script): `Solana`, `MagicBlock ER`, `Solidity`, `Base`, `ethers.js`, `ERC-3009`
- `activity_card.svg`: `viewBox="0 0 320 350"`, width="320", height="350".
  - Archival cream cardstock with 3D berry-pink push-pin (`#ec4899`) with shadow.
  - Header: `GITHUB ACTIVITY     YEAR-ROUND` in monospace.
  - Heatmap grid of contribution squares in soft blues, pinks, and slates.
  - Handwritten note: *"Small commits, shipped often."*
  - Footnote: *"Open GitHub for the live contribution graph ↗"*.
  - Holographic blue/pink sparkle sticker.

- [ ] **Step 1: Create `assets/skills_card.svg` and `assets/activity_card.svg`**

- [ ] **Step 2: Run XML validation on both cards**

Run: `python -c "import xml.etree.ElementTree as ET; ET.parse('assets/skills_card.svg'); ET.parse('assets/activity_card.svg'); print('Both Valid XML')"`  
Expected: `Both Valid XML`

- [ ] **Step 3: Commit cards**

```bash
git add assets/skills_card.svg assets/activity_card.svg
git commit -m "feat: add washi-taped skills index card and pinned activity card"
```

---

### Task 5: Build the Scrapbook Divider & Contact Stamps

**Files:**
- Create: `assets/divider_grunge.svg`
- Create: `assets/card_portfolio.svg`
- Create: `assets/card_linkedin.svg`
- Create: `assets/card_email.svg`

**Interfaces:**
- `divider_grunge.svg`: `viewBox="0 0 900 24"`, width="900", height="24". Torn dark paper seam with blue and pink stardust trail.
- `card_portfolio.svg`: `viewBox="0 0 265 90"`. Perforated postal stamp style, obsidian/navy fill, blue border & glow, diamond icon, `tyrakj.vercel.app`.
- `card_linkedin.svg`: `viewBox="0 0 265 90"`. Cyber stamp, pink border & glow, LinkedIn icon, `in/tyraakj`.
- `card_email.svg`: `viewBox="0 0 265 90"`. Airmail stamp style, blue/pink postal marks, mail icon, `tyra191712@gmail.com`.

- [ ] **Step 1: Create `assets/divider_grunge.svg` and the 3 contact stamp SVGs**

- [ ] **Step 2: Run XML validation**

Run: `python -c "import xml.etree.ElementTree as ET; [ET.parse(f'assets/{name}.svg') for name in ['divider_grunge', 'card_portfolio', 'card_linkedin', 'card_email']]; print('All Stamps Valid XML')"`  
Expected: `All Stamps Valid XML`

- [ ] **Step 3: Commit divider and stamps**

```bash
git add assets/divider_grunge.svg assets/card_*.svg
git commit -m "feat: add scrapbook divider and blue-pink contact stamps"
```

---

### Task 6: Revamp `README.md` with Dossier Architecture & Live Stats

**Files:**
- Modify: `README.md`

**Interfaces:**
- Consumes: All assets in `assets/`, GitHub snake output branch, GitHub stats APIs.
- Sections:
  1. Hero banner (`assets/hero.svg`)
  2. Philosophy narrative (`assets/manifesto.svg`)
  3. Skills & Activity row (`assets/skills_card.svg` + `assets/activity_card.svg`)
  4. Divider (`assets/divider_grunge.svg`)
  5. The 4 Flagship Project Dossiers:
     - ⚡ **Solaxis** (`Team-Managed/Solaxis`)
     - 📱 **AirLink** (`Team-Managed/AirLink`)
     - 🔒 **Privacy & Semantic Cache Proxy** (`tyraakj/privacy-semantic-cache-proxy`)
     - ⛓️ **Vaulted** (`tyraakj/Vaulted`)
  6. Divider (`assets/divider_grunge.svg`)
  7. GitHub Live Stats & Streak in Blue & Pink (`bg_color=050811&title_color=f472b6&icon_color=60a5fa&text_color=94a3b8`)
  8. Contribution Snake Animation (`snake.yml`)
  9. Divider (`assets/divider_grunge.svg`)
  10. Let's Connect Stamps (Portfolio, LinkedIn, Email) + Views badge (`#f472b6`).

- [ ] **Step 1: Update `README.md`**

Replace old constellation content with the full scrapbook and technical case dossiers.

- [ ] **Step 2: Run full verification test harness**

Run: `python tests/verify_profile.py`  
Expected: `All profile verification tests passed!`

- [ ] **Step 3: Commit `README.md`**

```bash
git add README.md
git commit -m "feat: revamp readme with scrapbook layout, project dossiers, and blue-pink theme"
```

---

### Task 7: Visual Review & Final Verification

**Files:**
- Test: `tests/verify_profile.py`
- Visual Check: Preview the rendered SVGs and README.

- [ ] **Step 1: Run complete verification test suite**

Run: `python tests/verify_profile.py`  
Expected: Pass without errors.

- [ ] **Step 2: Verify git status and clean working tree**

Run: `git status`  
Expected: clean working directory, all changes committed.

- [ ] **Step 3: Create Walkthrough summary**

Document all rendered assets, visual screenshots/diffs, and link validations.
