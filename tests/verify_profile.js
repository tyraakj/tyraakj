const fs = require('fs');
const path = require('path');

const REQUIRED_ASSETS = {
  'assets/hero.svg': [900, 360],
  'assets/manifesto.svg': [900, 160],
  'assets/skills_card.svg': [540, 350],
  'assets/activity_card.svg': [320, 350],
  'assets/divider_grunge.svg': [900, 24],
  'assets/card_portfolio.svg': [265, 90],
  'assets/card_linkedin.svg': [265, 90],
  'assets/card_email.svg': [265, 90],
};

const FORBIDDEN_COLORS = [/#eab308/i, /#facc15/i];

function testAssetsExistAndValid() {
  for (const [relPath, [expectedW, expectedH]] of Object.entries(REQUIRED_ASSETS)) {
    if (!fs.existsSync(relPath)) {
      throw new Error(`Missing asset: ${relPath}`);
    }
    const content = fs.readFileSync(relPath, 'utf8');

    // Basic XML check
    if (!content.trim().startsWith('<svg') || !content.trim().endsWith('</svg>')) {
      throw new Error(`Invalid SVG root in ${relPath}`);
    }

    // Check viewBox
    const vbMatch = content.match(/viewBox\s*=\s*["']([^"']+)["']/i);
    if (!vbMatch) {
      throw new Error(`Missing viewBox in ${relPath}`);
    }
    const parts = vbMatch[1].trim().split(/\s+/).map(Number);
    if (parts.length !== 4) {
      throw new Error(`Malformed viewBox in ${relPath}: ${vbMatch[1]}`);
    }
    if (parts[2] !== expectedW || parts[3] !== expectedH) {
      throw new Error(`Dimension mismatch in ${relPath}: expected ${expectedW}x${expectedH}, got ${parts[2]}x${parts[3]}`);
    }

    // Check forbidden colors
    for (const pat of FORBIDDEN_COLORS) {
      if (pat.test(content)) {
        throw new Error(`Forbidden color ${pat} found in ${relPath}`);
      }
    }
  }
}

function testReadmeStructure() {
  if (!fs.existsSync('README.md')) {
    throw new Error('README.md is missing');
  }
  const readme = fs.readFileSync('README.md', 'utf8');

  // Must link all 4 projects
  if (!readme.includes('https://github.com/Team-Managed/Solaxis')) {
    throw new Error('Solaxis link missing in README.md');
  }
  if (!readme.includes('https://github.com/Team-Managed/AirLink')) {
    throw new Error('AirLink link missing in README.md');
  }
  if (!readme.includes('privacy-semantic-cache-proxy')) {
    throw new Error('Privacy Proxy link missing in README.md');
  }
  if (!readme.includes('Vaulted')) {
    throw new Error('Vaulted link missing in README.md');
  }

  // Must reference all required assets
  for (const asset of Object.keys(REQUIRED_ASSETS)) {
    if (!readme.includes(asset)) {
      throw new Error(`Asset ${asset} not referenced in README.md`);
    }
  }
}

try {
  testAssetsExistAndValid();
  testReadmeStructure();
  console.log('All profile verification tests passed!');
} catch (err) {
  console.error('VERIFICATION FAILED:', err.message);
  process.exit(1);
}
