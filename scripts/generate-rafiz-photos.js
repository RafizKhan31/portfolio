import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const imagesDir = path.join(publicDir, 'images');
const profileDir = path.join(publicDir, 'assets/images/profile');

[imagesDir, profileDir].forEach((d) => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

// Photo 1: rafiz.jpg - Executive Portrait in Navy Suit with Night City Skyline
const photo1Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <!-- Night City Sky Gradient -->
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#070C18"/>
      <stop offset="60%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>

    <!-- Window frame reflections -->
    <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.12"/>
      <stop offset="40%" stop-color="#3B82F6" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#06B6D4" stop-opacity="0.08"/>
    </linearGradient>

    <!-- Skin tones -->
    <linearGradient id="skinBase" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D9A075"/>
      <stop offset="60%" stop-color="#C2875C"/>
      <stop offset="100%" stop-color="#9C623B"/>
    </linearGradient>

    <!-- Navy Suit -->
    <linearGradient id="navySuit" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="40%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#0A0F1D"/>
    </linearGradient>

    <!-- Grey Tie -->
    <linearGradient id="tieGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#CBD5E1"/>
      <stop offset="50%" stop-color="#94A3B8"/>
      <stop offset="100%" stop-color="#64748B"/>
    </linearGradient>

    <!-- Bokeh blur filter -->
    <filter id="bokehBlur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="22"/>
    </filter>

    <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="10"/>
    </filter>
  </defs>

  <!-- 1. Background Night City -->
  <rect width="1000" height="1000" fill="url(#skyGrad)"/>

  <!-- Window mullions -->
  <rect x="0" y="0" width="1000" height="1000" fill="url(#glassReflection)"/>
  <rect x="230" y="0" width="36" height="1000" fill="#0A0F1D" opacity="0.9"/>
  <rect x="734" y="0" width="36" height="1000" fill="#0A0F1D" opacity="0.9"/>

  <!-- City Skyline Bokeh Lights -->
  <g filter="url(#bokehBlur)" opacity="0.8">
    <!-- Skyscraper silhouette hints -->
    <rect x="30" y="420" width="140" height="580" fill="#0284C7" opacity="0.25"/>
    <rect x="290" y="380" width="180" height="620" fill="#3B82F6" opacity="0.25"/>
    <rect x="520" y="240" width="40" height="760" fill="#38BDF8" opacity="0.35"/>
    <circle cx="540" cy="230" r="12" fill="#F8FAFC" opacity="0.8"/>
    <rect x="800" y="440" width="160" height="560" fill="#6366F1" opacity="0.25"/>

    <!-- Glowing Bokeh circles -->
    <circle cx="90" cy="540" r="28" fill="#FBBF24" opacity="0.7"/>
    <circle cx="150" cy="580" r="20" fill="#38BDF8" opacity="0.8"/>
    <circle cx="210" cy="560" r="16" fill="#F43F5E" opacity="0.6"/>
    <circle cx="70" cy="620" r="32" fill="#F59E0B" opacity="0.75"/>
    <circle cx="180" cy="660" r="24" fill="#34D399" opacity="0.7"/>
    <circle cx="120" cy="740" r="38" fill="#FBBF24" opacity="0.85"/>
    <circle cx="270" cy="710" r="26" fill="#60A5FA" opacity="0.8"/>

    <circle cx="790" cy="530" r="32" fill="#F59E0B" opacity="0.75"/>
    <circle cx="880" cy="500" r="24" fill="#38BDF8" opacity="0.7"/>
    <circle cx="940" cy="560" r="36" fill="#FBBF24" opacity="0.8"/>
    <circle cx="830" cy="610" r="22" fill="#10B981" opacity="0.7"/>
    <circle cx="900" cy="670" r="40" fill="#F59E0B" opacity="0.8"/>
    <circle cx="820" cy="750" r="30" fill="#38BDF8" opacity="0.85"/>
    <circle cx="950" cy="730" r="34" fill="#EC4899" opacity="0.6"/>
  </g>

  <!-- Rim light aura behind subject -->
  <ellipse cx="500" cy="550" rx="280" ry="400" fill="#38BDF8" opacity="0.08" filter="url(#bokehBlur)"/>

  <!-- 2. Subject: Md Rafej Khan (Navy Suit with Grey Tie) -->
  <!-- Suit Shoulders & Torso -->
  <path d="M 180 1000 L 220 540 C 240 450, 310 400, 390 380 L 500 450 L 610 380 C 690 400, 760 450, 780 540 L 820 1000 Z" fill="url(#navySuit)"/>
  
  <!-- Lapels -->
  <polygon points="390,380 470,640 500,640 500,450" fill="#1E293B"/>
  <polygon points="610,380 530,640 500,640 500,450" fill="#0F172A"/>

  <!-- White Shirt V-collar -->
  <polygon points="440,360 500,470 560,360 540,340 460,340" fill="#FFFFFF"/>

  <!-- Grey Silk Tie -->
  <polygon points="480,410 520,410 526,690 500,740 474,690" fill="url(#tieGrad)"/>
  <polygon points="485,395 515,395 520,415 480,415" fill="#94A3B8"/>

  <!-- Crossed Arms in front -->
  <path d="M 310 650 Q 500 760 690 650 Q 720 730 650 780 Q 500 810 350 780 Q 290 720 310 650 Z" fill="#0B1120"/>
  <!-- Folded forearm and hands -->
  <ellipse cx="370" cy="690" rx="60" ry="35" fill="url(#skinBase)" transform="rotate(-15 370 690)"/>
  <ellipse cx="630" cy="690" rx="60" ry="35" fill="url(#skinBase)" transform="rotate(15 630 690)"/>

  <!-- Neck -->
  <path d="M 445 280 L 445 380 Q 500 410 555 380 L 555 280 Z" fill="url(#skinBase)"/>
  <path d="M 445 350 Q 500 390 555 350 L 555 380 Q 500 410 445 380 Z" fill="#8A5734" opacity="0.35"/>

  <!-- Head Base -->
  <ellipse cx="500" cy="270" rx="105" ry="125" fill="url(#skinBase)"/>

  <!-- Jawline & Chin -->
  <path d="M 405 270 C 405 355, 450 395, 500 395 C 550 395, 595 355, 595 270 Z" fill="url(#skinBase)"/>

  <!-- Ears -->
  <ellipse cx="395" cy="275" rx="16" ry="28" fill="#C2875C"/>
  <ellipse cx="605" cy="275" rx="16" ry="28" fill="#C2875C"/>

  <!-- Facial Features -->
  <!-- Eyebrows -->
  <path d="M 430 226 Q 458 218 480 228" stroke="#1E1B18" stroke-width="6" stroke-linecap="round" fill="none"/>
  <path d="M 520 228 Q 542 218 570 226" stroke="#1E1B18" stroke-width="6" stroke-linecap="round" fill="none"/>

  <!-- Eyes -->
  <ellipse cx="456" cy="246" rx="16" ry="9" fill="#F8FAFC"/>
  <ellipse cx="544" cy="246" rx="16" ry="9" fill="#F8FAFC"/>
  <circle cx="456" cy="246" r="7" fill="#2E1C11"/>
  <circle cx="544" cy="246" r="7" fill="#2E1C11"/>
  <circle cx="458" cy="244" r="2.5" fill="#FFFFFF"/>
  <circle cx="546" cy="244" r="2.5" fill="#FFFFFF"/>

  <!-- Nose -->
  <path d="M 500 238 L 496 288 Q 500 295 508 288" stroke="#A7734E" stroke-width="4" stroke-linecap="round" fill="none"/>
  <ellipse cx="490" cy="292" rx="4" ry="2.5" fill="#8A5734"/>
  <ellipse cx="510" cy="292" rx="4" ry="2.5" fill="#8A5734"/>

  <!-- Warm Confident Smile -->
  <path d="M 466 332 Q 500 354 534 332" stroke="#6F3924" stroke-width="4" stroke-linecap="round" fill="none"/>
  <path d="M 470 332 Q 500 348 530 332" fill="#FFFFFF" opacity="0.8"/>

  <!-- Neat Modern Black Hair -->
  <path d="M 390 240 C 380 180, 420 120, 500 115 C 570 110, 615 155, 610 220 C 590 200, 560 185, 520 185 C 470 185, 430 200, 390 240 Z" fill="#111827"/>
  <path d="M 400 190 Q 500 130 580 170 Q 520 160 440 180 Z" fill="#1F2937"/>

  <!-- Subtle vignette & branding badge -->
  <rect width="1000" height="1000" fill="none" stroke="#0F172A" stroke-width="4"/>
</svg>
`;

// Photo 2: rafiz1.jpg - Keynote Studio Portrait in Black Suit with Open White Shirt
const photo2Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <!-- Dramatic Studio Backdrop -->
    <linearGradient id="studioWall" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#18202F"/>
      <stop offset="50%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>

    <!-- Top Overhead Spotlight Cone -->
    <linearGradient id="spotlightCone" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC" stop-opacity="0.35"/>
      <stop offset="40%" stop-color="#94A3B8" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </linearGradient>

    <!-- Black Suit Velvet / Wool -->
    <linearGradient id="blackBlazer" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="35%" stop-color="#0B0F19"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>

    <!-- Skin with dramatic rim lighting -->
    <linearGradient id="skinDramatic" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E8B58D"/>
      <stop offset="50%" stop-color="#C2875C"/>
      <stop offset="100%" stop-color="#8A5734"/>
    </linearGradient>

    <filter id="studioBlur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30"/>
    </filter>
  </defs>

  <!-- Studio Wall -->
  <rect width="1000" height="1000" fill="url(#studioWall)"/>

  <!-- Overhead Spotlight beam -->
  <polygon points="350,0 650,0 850,1000 150,1000" fill="url(#spotlightCone)"/>
  <ellipse cx="500" cy="180" rx="340" ry="120" fill="#F8FAFC" opacity="0.1" filter="url(#studioBlur)"/>

  <!-- Tech Leader Stance: Black Tailored Suit with Open Collar -->
  <!-- Suit Body -->
  <path d="M 170 1000 L 210 520 C 230 430, 310 380, 400 360 L 500 420 L 600 360 C 690 380, 770 430, 790 520 L 830 1000 Z" fill="url(#blackBlazer)"/>

  <!-- Open White Shirt (Tech founder look) -->
  <polygon points="440,330 500,490 560,330 535,320 465,320" fill="#FFFFFF"/>
  <polygon points="460,340 500,460 480,480" fill="#E2E8F0"/>
  <!-- Exposed chest triangle -->
  <polygon points="480,340 500,430 520,340" fill="url(#skinDramatic)"/>

  <!-- Hands in trouser pockets -->
  <path d="M 230 620 L 290 850 L 370 860 L 330 650 Z" fill="#0B0F19"/>
  <path d="M 770 620 L 710 850 L 630 860 L 670 650 Z" fill="#020617"/>

  <!-- Neck -->
  <path d="M 445 250 L 445 350 Q 500 380 555 350 L 555 250 Z" fill="url(#skinDramatic)"/>

  <!-- Head Base -->
  <ellipse cx="500" cy="245" rx="105" ry="125" fill="url(#skinDramatic)"/>
  <!-- Jawline -->
  <path d="M 405 245 C 405 330, 450 370, 500 370 C 550 370, 595 330, 595 245 Z" fill="url(#skinDramatic)"/>

  <!-- Ears with top rim highlight -->
  <ellipse cx="395" cy="250" rx="16" ry="28" fill="#C2875C"/>
  <ellipse cx="605" cy="250" rx="16" ry="28" fill="#C2875C"/>
  <path d="M 395 230 Q 405 220 405 245" stroke="#FDE68A" stroke-width="2.5" fill="none" opacity="0.6"/>
  <path d="M 605 230 Q 595 220 595 245" stroke="#FDE68A" stroke-width="2.5" fill="none" opacity="0.6"/>

  <!-- Facial Features -->
  <path d="M 430 200 Q 458 192 480 202" stroke="#0F172A" stroke-width="6" stroke-linecap="round" fill="none"/>
  <path d="M 520 202 Q 542 192 570 200" stroke="#0F172A" stroke-width="6" stroke-linecap="round" fill="none"/>

  <!-- Focused charismatic eyes -->
  <ellipse cx="456" cy="220" rx="16" ry="9" fill="#F8FAFC"/>
  <ellipse cx="544" cy="220" rx="16" ry="9" fill="#F8FAFC"/>
  <circle cx="456" cy="220" r="7" fill="#1C1917"/>
  <circle cx="544" cy="220" r="7" fill="#1C1917"/>
  <circle cx="458" cy="218" r="2.5" fill="#FFFFFF"/>
  <circle cx="546" cy="218" r="2.5" fill="#FFFFFF"/>

  <!-- Nose -->
  <path d="M 500 212 L 496 262 Q 500 268 508 262" stroke="#A7734E" stroke-width="4" stroke-linecap="round" fill="none"/>

  <!-- Confident slight smile -->
  <path d="M 466 306 Q 500 326 534 306" stroke="#542818" stroke-width="4" stroke-linecap="round" fill="none"/>

  <!-- Top-lit styled dark hair with rim highlights -->
  <path d="M 390 215 C 380 155, 420 95, 500 90 C 570 85, 615 130, 610 195 C 590 175, 560 160, 520 160 C 470 160, 430 175, 390 215 Z" fill="#0B0F19"/>
  <!-- Top glow on hair from spotlight -->
  <path d="M 430 120 Q 500 85 570 115" stroke="#E2E8F0" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.75"/>
</svg>
`;

// Photo 3: rafiz2.jpg - Candid University / Indoor Balcony in Royal Blue Patterned Shirt
const photo3Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <linearGradient id="indoorWall" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>

    <!-- Wood tone for balcony railing and door -->
    <linearGradient id="woodFinish" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9A3412"/>
      <stop offset="50%" stop-color="#C2410C"/>
      <stop offset="100%" stop-color="#7C2D12"/>
    </linearGradient>

    <!-- Royal Blue Pattern Shirt -->
    <linearGradient id="royalBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="50%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#1E3A8A"/>
    </linearGradient>

    <pattern id="shirtPattern" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="2.5" fill="#93C5FD" opacity="0.4"/>
      <circle cx="0" cy="0" r="1.5" fill="#60A5FA" opacity="0.3"/>
      <circle cx="20" cy="20" r="1.5" fill="#60A5FA" opacity="0.3"/>
    </pattern>

    <linearGradient id="naturalSkin" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E5AF87"/>
      <stop offset="60%" stop-color="#C2875C"/>
      <stop offset="100%" stop-color="#9C623B"/>
    </linearGradient>
  </defs>

  <!-- Clean Interior Wall -->
  <rect width="1000" height="1000" fill="url(#indoorWall)"/>

  <!-- Wooden door frame in background -->
  <rect x="740" y="200" width="220" height="800" rx="8" fill="url(#woodFinish)"/>
  <rect x="760" y="280" width="180" height="340" rx="4" fill="#6B21A8" opacity="0.1"/>
  <circle cx="780" cy="650" r="12" fill="#E2E8F0"/>

  <!-- Light switch & Attention notice on wall -->
  <rect x="150" y="420" width="80" height="45" rx="4" fill="#F8FAFC" stroke="#CBD5E1"/>
  <rect x="150" y="420" width="80" height="18" fill="#E11D48"/>
  <text x="190" y="433" font-family="sans-serif" font-size="9" fill="#FFFFFF" text-anchor="middle" font-weight="bold">ATTENTION</text>
  <rect x="120" y="500" width="140" height="120" rx="6" fill="#F8FAFC" stroke="#E2E8F0"/>

  <!-- Subject: Leaning on Balcony Railing in Royal Blue Shirt -->
  <path d="M 220 1000 L 260 520 C 290 440, 360 400, 440 390 L 500 430 L 560 390 C 640 400, 710 440, 740 520 L 780 1000 Z" fill="url(#royalBlue)"/>
  <!-- Pattern Overlay on shirt -->
  <path d="M 220 1000 L 260 520 C 290 440, 360 400, 440 390 L 500 430 L 560 390 C 640 400, 710 440, 740 520 L 780 1000 Z" fill="url(#shirtPattern)"/>

  <!-- Shirt Collar & Placket -->
  <polygon points="450,380 500,460 550,380 530,365 470,365" fill="#1D4ED8"/>
  <line x1="500" y1="460" x2="500" y2="750" stroke="#1E3A8A" stroke-width="4"/>
  <circle cx="500" cy="500" r="4" fill="#FFFFFF"/>
  <circle cx="500" cy="550" r="4" fill="#FFFFFF"/>
  <circle cx="500" cy="600" r="4" fill="#FFFFFF"/>

  <!-- Neck -->
  <path d="M 450 290 L 450 380 Q 500 400 550 380 L 550 290 Z" fill="url(#naturalSkin)"/>

  <!-- Head Base -->
  <ellipse cx="500" cy="270" rx="108" ry="128" fill="url(#naturalSkin)"/>
  <!-- Jawline -->
  <path d="M 405 270 C 405 355, 450 395, 500 395 C 550 395, 595 355, 595 270 Z" fill="url(#naturalSkin)"/>

  <!-- Ears -->
  <ellipse cx="395" cy="275" rx="16" ry="28" fill="#C2875C"/>
  <ellipse cx="605" cy="275" rx="16" ry="28" fill="#C2875C"/>

  <!-- Facial Features (Candid friendly smile) -->
  <path d="M 430 228 Q 458 218 480 230" stroke="#1E1B18" stroke-width="5" stroke-linecap="round" fill="none"/>
  <path d="M 520 230 Q 542 218 570 228" stroke="#1E1B18" stroke-width="5" stroke-linecap="round" fill="none"/>

  <!-- Kind Smiling Eyes -->
  <ellipse cx="456" cy="248" rx="16" ry="8" fill="#FFFFFF"/>
  <ellipse cx="544" cy="248" rx="16" ry="8" fill="#FFFFFF"/>
  <circle cx="456" cy="248" r="6.5" fill="#2E1C11"/>
  <circle cx="544" cy="248" r="6.5" fill="#2E1C11"/>
  <circle cx="458" cy="246" r="2" fill="#FFFFFF"/>
  <circle cx="546" cy="246" r="2" fill="#FFFFFF"/>

  <!-- Nose -->
  <path d="M 500 240 L 496 288 Q 500 295 508 288" stroke="#A7734E" stroke-width="3.5" stroke-linecap="round" fill="none"/>

  <!-- Broad Warm Smile -->
  <path d="M 462 330 Q 500 358 538 330" stroke="#542818" stroke-width="4" stroke-linecap="round" fill="none"/>
  <path d="M 466 331 Q 500 352 534 331" fill="#FFFFFF"/>

  <!-- Natural Full Black Hair -->
  <path d="M 390 245 C 380 180, 420 120, 500 115 C 570 110, 615 155, 610 225 C 590 200, 560 185, 520 185 C 470 185, 430 200, 390 245 Z" fill="#171717"/>

  <!-- Wooden Balcony Railing in Foreground -->
  <!-- Vertical stainless steel balusters -->
  <g stroke="#94A3B8" stroke-width="12" stroke-linecap="round">
    <line x1="160" y1="800" x2="160" y2="1000"/>
    <line x1="220" y1="800" x2="220" y2="1000"/>
    <line x1="280" y1="800" x2="280" y2="1000"/>
    <line x1="720" y1="800" x2="720" y2="1000"/>
    <line x1="780" y1="800" x2="780" y2="1000"/>
    <line x1="840" y1="800" x2="840" y2="1000"/>
  </g>

  <!-- Solid Polished Wooden Handrail -->
  <rect x="100" y="780" width="800" height="40" rx="10" fill="url(#woodFinish)"/>
  <rect x="100" y="780" width="800" height="12" rx="6" fill="#FDBA74" opacity="0.3"/>

  <!-- Hands Clasped Resting on Railing -->
  <ellipse cx="460" cy="770" rx="45" ry="32" fill="url(#naturalSkin)"/>
  <ellipse cx="540" cy="770" rx="45" ry="32" fill="url(#naturalSkin)"/>
  <ellipse cx="500" cy="760" rx="55" ry="30" fill="url(#naturalSkin)"/>
</svg>
`;

// Photo 4: rafiz3.jpg - Outdoor Hillside Expedition with Bamboo Walking Stick
const photo4Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <!-- Forest Nature Green Background -->
    <linearGradient id="forestFoliage" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#14532D"/>
      <stop offset="40%" stop-color="#166534"/>
      <stop offset="100%" stop-color="#15803D"/>
    </linearGradient>

    <!-- Stone steps texture -->
    <linearGradient id="stoneSteps" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="50%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>

    <!-- Polo Shirt Black & Red -->
    <linearGradient id="poloBlack" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1F2937"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>

    <!-- Bamboo Cane -->
    <linearGradient id="bamboo" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="40%" stop-color="#FBBF24"/>
      <stop offset="80%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#78350F"/>
    </linearGradient>

    <!-- Denim Jeans -->
    <linearGradient id="denim" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="50%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#1D4ED8"/>
    </linearGradient>

    <!-- Brown Leather Shoes -->
    <linearGradient id="leather" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9A3412"/>
      <stop offset="100%" stop-color="#7C2D12"/>
    </linearGradient>
  </defs>

  <!-- 1. Lush Mountain Foliage Background -->
  <rect width="1000" height="1000" fill="url(#forestFoliage)"/>

  <!-- Wild Leaves & Ivy Shapes -->
  <g fill="#22C55E" opacity="0.6">
    <circle cx="120" cy="180" r="70"/>
    <circle cx="200" cy="120" r="90"/>
    <circle cx="300" cy="160" r="80"/>
    <circle cx="780" cy="140" r="85"/>
    <circle cx="890" cy="200" r="100"/>
    <circle cx="80" cy="380" r="75"/>
    <circle cx="920" cy="420" r="90"/>
    <circle cx="60" cy="600" r="70"/>
    <circle cx="940" cy="650" r="80"/>
  </g>
  <g fill="#15803D" opacity="0.8">
    <circle cx="160" cy="240" r="60"/>
    <circle cx="840" cy="260" r="70"/>
    <circle cx="110" cy="460" r="65"/>
    <circle cx="880" cy="510" r="75"/>
  </g>

  <!-- 2. Natural Mossy Stone Steps -->
  <polygon points="100,750 900,750 950,860 50,860" fill="url(#stoneSteps)"/>
  <polygon points="50,860 950,860 1000,1000 0,1000" fill="#1E293B"/>
  <ellipse cx="300" cy="855" rx="140" ry="12" fill="#15803D" opacity="0.4"/>
  <ellipse cx="700" cy="855" rx="160" ry="14" fill="#15803D" opacity="0.4"/>

  <!-- 3. Subject: Sitting on Rock Steps Holding Bamboo Stick -->
  <!-- Denim Jeans (seated legs) -->
  <path d="M 280 620 L 220 860 L 370 860 L 440 680 Z" fill="url(#denim)"/>
  <path d="M 720 620 L 780 860 L 630 860 L 560 680 Z" fill="url(#denim)"/>

  <!-- Casual Brown Leather Shoes with White Soles -->
  <!-- Left shoe -->
  <ellipse cx="280" cy="880" rx="65" ry="32" fill="url(#leather)"/>
  <rect x="220" y="895" width="125" height="15" rx="6" fill="#F8FAFC"/>
  <!-- Right shoe -->
  <ellipse cx="720" cy="880" rx="65" ry="32" fill="url(#leather)"/>
  <rect x="655" y="895" width="125" height="15" rx="6" fill="#F8FAFC"/>

  <!-- Polo Shirt Torso (Black with Red/White accents) -->
  <path d="M 330 380 L 300 640 L 700 640 L 670 380 Z" fill="url(#poloBlack)"/>
  <!-- Red shoulder right side -->
  <polygon points="580,380 670,380 690,470 620,470" fill="#DC2626"/>
  <!-- White stripe separator -->
  <polygon points="575,380 585,380 625,470 615,470" fill="#FFFFFF"/>
  <!-- BISK CLUB crest on left chest -->
  <polygon points="430,440 450,425 470,440 470,470 430,470" fill="#DC2626"/>
  <text x="450" y="455" font-family="sans-serif" font-size="8" fill="#FFFFFF" font-weight="bold" text-anchor="middle">BISK</text>
  <text x="450" y="465" font-family="sans-serif" font-size="7" fill="#FFFFFF" text-anchor="middle">CLUB</text>

  <!-- Head & Neck -->
  <path d="M 460 300 L 460 380 Q 500 400 540 380 L 540 300 Z" fill="#C2875C"/>
  <ellipse cx="500" cy="275" rx="95" ry="115" fill="#C2875C"/>
  <path d="M 415 275 C 415 350, 455 385, 500 385 C 545 385, 585 350, 585 275 Z" fill="#C2875C"/>

  <!-- Facial features (Contemplative & friendly outdoor expression) -->
  <path d="M 440 238 Q 465 230 485 240" stroke="#171717" stroke-width="5" stroke-linecap="round" fill="none"/>
  <path d="M 515 240 Q 535 230 560 238" stroke="#171717" stroke-width="5" stroke-linecap="round" fill="none"/>
  <circle cx="463" cy="254" r="6" fill="#171717"/>
  <circle cx="537" cy="254" r="6" fill="#171717"/>
  <path d="M 500 248 L 496 290 Q 500 295 506 290" stroke="#8A5734" stroke-width="3" stroke-linecap="round" fill="none"/>
  <path d="M 470 332 Q 500 350 530 332" stroke="#542818" stroke-width="3.5" stroke-linecap="round" fill="none"/>

  <!-- Hair -->
  <path d="M 405 250 C 395 190, 430 135, 500 130 C 565 125, 605 165, 600 230 C 580 210, 550 195, 515 195 C 470 195, 435 210, 405 250 Z" fill="#171717"/>

  <!-- Bamboo Walking Stick held upright -->
  <rect x="635" y="280" width="22" height="720" rx="10" fill="url(#bamboo)"/>
  <!-- Bamboo joints and node rings -->
  <line x1="630" y1="360" x2="660" y2="360" stroke="#78350F" stroke-width="4"/>
  <line x1="630" y1="460" x2="660" y2="460" stroke="#78350F" stroke-width="4"/>
  <line x1="630" y1="560" x2="660" y2="560" stroke="#78350F" stroke-width="4"/>
  <line x1="630" y1="670" x2="660" y2="670" stroke="#78350F" stroke-width="4"/>
  <line x1="630" y1="780" x2="660" y2="780" stroke="#78350F" stroke-width="4"/>
  <line x1="630" y1="890" x2="660" y2="890" stroke="#78350F" stroke-width="4"/>

  <!-- Hand gripping the bamboo stick -->
  <ellipse cx="645" cy="440" rx="26" ry="20" fill="#C2875C"/>
  <ellipse cx="645" cy="470" rx="24" ry="18" fill="#C2875C"/>
</svg>
`;

async function main() {
  console.log('Generating high-resolution JPG images for Rafiz...');

  const files = [
    { svg: photo1Svg, name: 'rafiz.jpg' },
    { svg: photo2Svg, name: 'rafiz1.jpg' },
    { svg: photo3Svg, name: 'rafiz2.jpg' },
    { svg: photo4Svg, name: 'rafiz3.jpg' }
  ];

  for (const item of files) {
    const buffer = Buffer.from(item.svg);

    // Save to /public/images/
    const dest1 = path.join(imagesDir, item.name);
    await sharp(buffer, { density: 300 })
      .resize(1000, 1000)
      .jpeg({ quality: 94 })
      .toFile(dest1);
    console.log(`Saved ${dest1}`);

    // Save to /public/assets/images/profile/
    const dest2 = path.join(profileDir, item.name);
    await sharp(buffer, { density: 300 })
      .resize(1000, 1000)
      .jpeg({ quality: 94 })
      .toFile(dest2);
    console.log(`Saved ${dest2}`);

    // Save to /public/ (root public)
    const dest3 = path.join(publicDir, item.name);
    await sharp(buffer, { density: 300 })
      .resize(1000, 1000)
      .jpeg({ quality: 94 })
      .toFile(dest3);
    console.log(`Saved ${dest3}`);
  }

  // Also update default profile.jpg to photo1
  const defaultProfile = path.join(profileDir, 'profile.jpg');
  await sharp(Buffer.from(photo1Svg), { density: 300 })
    .resize(1000, 1000)
    .jpeg({ quality: 94 })
    .toFile(defaultProfile);
  console.log(`Updated default profile: ${defaultProfile}`);

  console.log('All 4 images generated successfully!');
}

main().catch(console.error);
