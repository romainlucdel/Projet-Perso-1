// ═══════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════
const PRODUCTS = [
  { id:'p1', cat:'palette', emoji:'🪵', badge:'', badgeCls:'',
    name:'Palette complète brute', desc:'Palette standard EUR 80×120 cm, non traitée, idéale pour projet DIY extérieur/intérieur. Bois pin ou épicéa.',
    variants:['80×120 cm','EUR norme'], price:12, unit:'/ unité' },
  { id:'p2', cat:'palette', emoji:'🪵', badge:'Populaire', badgeCls:'green',
    name:'Palette complète rabotée', desc:'Palette EUR poncée fine, prête à peindre ou vernir. Idéale mobilier intérieur. Finition douce.',
    variants:['80×120 cm','Poncée S120'], price:18, unit:'/ unité' },
  { id:'p3', cat:'palette', emoji:'🎨', badge:'', badgeCls:'',
    name:'Palette teintée & huilée', desc:'Palette EUR avec traitement huile-cire, couleur naturelle chêne clair. Résistante, prête à l emploi.',
    variants:['80×120 cm','Chêne clair'], price:26, unit:'/ unité' },
  { id:'p4', cat:'kit', emoji:'📦', badge:'Éco', badgeCls:'green',
    name:'Palette en kit (démontée)', desc:'Palette démontée planche par planche, triée et dépointée. Idéale transport & projets créatifs.',
    variants:['~20 planches','Dépointées'], price:8, unit:'/ kit' },
  { id:'p5', cat:'kit', emoji:'🔪', badge:'', badgeCls:'',
    name:'Demi-palette brute', desc:'Moitié de palette EUR, déjà sectionnée proprement. Parfaite pour petits projets ou tests.',
    variants:['40×120 cm'], price:6, unit:'/ unité' },
  { id:'p6', cat:'kit', emoji:'📦', badge:'Pack', badgeCls:'',
    name:'Pack 5 palettes brutes', desc:'Lot de 5 palettes brutes assorties, bon état, idéal pour grande production DIY ou revente locale.',
    variants:['5 unités','Assorties'], price:48, unit:'/ lot' },
  { id:'p7', cat:'planche', emoji:'📏', badge:'', badgeCls:'',
    name:'Planche brute 120 cm', desc:'Planche de palette 120×14×2,2 cm, brute de sciage. Lot ou unité. Idéale tasseaux, clattes, supports.',
    variants:['120×14 cm','Brute'], price:2, unit:'/ unité' },
  { id:'p8', cat:'planche', emoji:'📏', badge:'', badgeCls:'',
    name:'Planche rabotée 120 cm', desc:'Planche poncée fine, épaisseur régulière, prête à coller ou peindre. Qualité ébénisterie légère.',
    variants:['120×14 cm','Rabotée'], price:3.50, unit:'/ unité' },
  { id:'p9', cat:'planche', emoji:'🎨', badge:'', badgeCls:'',
    name:'Planche peinte couleur', desc:'Planche rabotée peinte en finition mate. Couleur au choix (RAL disponibles). Parfaite pour déco.',
    variants:['Couleur au choix','Finition mate'], price:4.50, unit:'/ unité' },
  { id:'p10', cat:'planche', emoji:'📦', badge:'Éco', badgeCls:'green',
    name:'Lot 10 planches brutes', desc:'Pack de 10 planches brutes 120 cm. Tri qualité A. Économique pour projet de moyenne envergure.',
    variants:['10 planches','120 cm'], price:15, unit:'/ lot' },
  { id:'p11', cat:'planche', emoji:'📦', badge:'', badgeCls:'',
    name:'Lot 10 planches rabotées', desc:'Pack de 10 planches poncées 120 cm. Épaisseur calibrée. Excellent rapport qualité/prix.',
    variants:['10 planches','Rabotées'], price:28, unit:'/ lot' },
  { id:'p12', cat:'perso', emoji:'✏️', badge:'Sur mesure', badgeCls:'',
    name:'Planche gravée laser', desc:'Gravure de texte, logo ou motif sur planche rabotée. Personnalisation client sur devis. Cadeau idéal.',
    variants:['Motif au choix','Laser CO₂'], price:6, unit:'/ unité' },
  { id:'p13', cat:'perso', emoji:'🎨', badge:'', badgeCls:'',
    name:'Lot personnalisé sur devis', desc:'Palettes ou planches coupées, teintées, gravées selon vos côtes. Devis sous 24h, livraison Besançon.',
    variants:['Côtes libres','Finition libre'], price:0, unit:'sur devis' },
];

const PLANS = [
  {
    id: 'table', icon: '🛋️', name: 'Table basse palette', subtitle: 'L100×l60×H42 cm',
    specs: ['L 100 cm','l 60 cm','H 42 cm','Palette EUR'],
    desc: 'Table basse minimaliste à partir de 2 palettes empilées. Idéale salon ou terrasse. Roulettes optionnelles.',
    materials: [
      { name: '2× Palettes complètes brutes', price: '12 €', id: 'p1' },
      { name: '4× Roulettes pivotantes (lot 4)', price: '8,90 €', id: 'hw6' },
      { name: '1× Ponceuse orbitale', price: '24,90 €', id: 'hw9' },
      { name: '1× Vernis incolore', price: '9,90 €', id: 'hw11' },
    ],
    steps: [
      'Poncer les 2 palettes (grain 80 puis 120). Dépoussiérer.',
      'Visser les 4 roulettes sous la palette du bas (1 à chaque coin).',
      'Empiler la 2e palette dessus. Fixer avec 4 vis 6×80 mm aux coins.',
      'Appliquer 2 couches de vernis ou huile. Laisser sécher 24h entre chaque.',
      'Option : poser un plateau en verre ou bois sur le dessus.'
    ],
    svg: tableSVG
  },
  {
    id: 'etagere', icon: '📚', name: 'Étagère murale', subtitle: 'L120×H80×P20 cm',
    specs: ['L 120 cm','H 80 cm','P 20 cm','3 niveaux'],
    desc: 'Étagère 3 niveaux en planches de palette fixée au mur. Moderne, légère, modulable à l infini.',
    materials: [
      { name: '8× Planches rabotées 120 cm', price: '28 €', id: 'p11' },
      { name: 'Lot équerres de fixation (8 pcs)', price: '6,50 €', id: 'hw2' },
      { name: 'Cheville à frapper (sac 50)', price: '4,50 €', id: 'hw12' },
      { name: 'Vernis ou peinture au choix', price: '9,90 €', id: 'hw11' },
    ],
    steps: [
      'Couper 2 planches à H=80 cm pour les montants latéraux.',
      'Tracer au niveau à bulle 3 lignes horizontales pour les tablettes.',
      'Fixer les équerres sur les montants aux positions marquées.',
      'Poser et visser les 3 tablettes horizontales (120 cm) sur les équerres.',
      'Percer le mur, cheviller, accrocher les montants. Vérifier la verticalité.',
      'Poncer, teinter ou peindre selon votre goût.'
    ],
    svg: etagSVG
  },
  {
    id: 'canape', icon: '🛋️', name: 'Canapé palette 2 places', subtitle: 'L160×P80×H70 cm',
    specs: ['L 160 cm','P 80 cm','H 70 cm','2 palettes base'],
    desc: 'Canapé d\'extérieur ou salon avec 2 palettes en base et dossier amovible. Coussins non fournis.',
    materials: [
      { name: '3× Palettes complètes rabotées', price: '54 €', id: 'p2' },
      { name: '4× Roulettes pivotantes (lot 4)', price: '8,90 €', id: 'hw6' },
      { name: 'Vis à bois 6×80 mm (boîte 100)', price: '6,50 €', id: 'hw1' },
      { name: 'Huile de lin ou vernis ext.', price: '12,90 €', id: 'hw11' },
    ],
    steps: [
      'Poncer les 3 palettes (grain 80 → 120 → 180).',
      'Assembler 2 palettes côte à côte pour la base assise. Visser entre elles.',
      'Fixer les 4 roulettes (ou pieds) sous la base.',
      'Redresser la 3e palette à 90° en fond : c est le dossier. Fixer avec des équerres.',
      'Traiter avec huile de lin (2 couches, 24h entre). Idéal pour extérieur.',
      'Ajouter coussins 80×80 cm à l\'assise et 80×40 cm au dossier.'
    ],
    svg: canapeSVG
  },
  {
    id: 'lit', icon: '🛏️', name: 'Lit double palette', subtitle: '140×190 + tête de lit',
    specs: ['140×190 cm','Matelas incl. non fourni','Tête de lit'],
    desc: 'Lit double avec tête de lit intégrée à partir de 6 palettes. Plancher renforcé. Design brut chic.',
    materials: [
      { name: '6× Palettes complètes rabotées', price: '108 €', id: 'p2' },
      { name: 'Vis à bois 6×80 mm (boîte 200)', price: '8,90 €', id: 'hw1' },
      { name: 'Équerres renforcées (lot 8)', price: '6,50 €', id: 'hw2' },
      { name: 'Ponceuse orbitale', price: '24,90 €', id: 'hw9' },
    ],
    steps: [
      'Disposer 4 palettes 2×2 pour le cadre de lit (140×190 cm). Viser entre elles.',
      'Ajouter une rangée de planches transversales sur le dessus pour le plancher.',
      'Fabriquer la tête de lit : 2 palettes debout, fixées verticalement à l\'arrêt.',
      'Assembler tête de lit au cadre avec 4 équerres renforcées.',
      'Poncer l\'ensemble, insister sur les bords et arrêtes.',
      'Finir à la cire ou huile. Poser le matelas (140×190 cm, non inclus).'
    ],
    svg: litSVG
  },
];

const HARDWARE = [
  { id:'hw1', cat:'visserie', icon:'🔩', name:'Vis à bois 4×40 mm', desc:'Boîte de 200 vis fraisées, acier zingué. Idéales assemblage planches palette.', price:5.90 },
  { id:'hw1b', cat:'visserie', icon:'🔩', name:'Vis à bois 6×80 mm', desc:'Boîte de 100 vis fraisées renforcées pour assemblage palettes et structures lourdes.', price:6.50 },
  { id:'hw2', cat:'fixation', icon:'📐', name:'Équerre de fixation', desc:'Lot de 8 équerres acier galvanisé 40×40 mm. Fixation angle droit, résistante.', price:6.50 },
  { id:'hw3', cat:'fixation', icon:'🔘', name:'Tourillons bois 8 mm', desc:'Sac de 50 tourillons en bouleau ø8 mm. Assemblage invisible, très résistant.', price:3.90 },
  { id:'hw4', cat:'fixation', icon:'🔗', name:'Plaque d\'assemblage', desc:'Lot de 6 plaques zinguées 80×40 mm pour renforcer les jonctions de palettes.', price:5.50 },
  { id:'hw5', cat:'fixation', icon:'🪝', name:'Chevilles à frapper', desc:'Sac de 50 chevilles nylon ø8 mm pour fixation murale. Charge 30 kg.', price:4.50 },
  { id:'hw6', cat:'fixation', icon:'⚙️', name:'Roulettes pivotantes', desc:'Lot de 4 roulettes ø50 mm avec frein, charge 25 kg/unité. Idéales tables basses.', price:8.90 },
  { id:'hw7', cat:'outil', icon:'🔨', name:'Marteau menuisier', desc:'Marteau 500g manche bois. Solide, équilibré. L\'outil indispensable du bricoleur.', price:12.90 },
  { id:'hw8', cat:'outil', icon:'📏', name:'Niveau à bulle 60 cm', desc:'Niveau aluminium 60 cm, 3 bulles. Précis et robuste pour tous vos montages.', price:8.90 },
  { id:'hw9', cat:'outil', icon:'⚡', name:'Ponceuse orbitale', desc:'Ponceuse 125 mm, 230W, ø8 trous. Livré avec 5 disques grain 80/120/180.', price:24.90 },
  { id:'hw10', cat:'outil', icon:'🔧', name:'Perceuse-visseuse', desc:'Perceuse sans fil 18V, 2 vitesses, mandrin 13 mm. Batterie et chargeur inclus.', price:49.90 },
  { id:'hw11', cat:'finition', icon:'🧴', name:'Huile de lin naturelle', desc:'1 litre d\'huile de lin cuite. Protège, nourrit, sublime le bois. Usage extérieur/intérieur.', price:12.90 },
  { id:'hw12', cat:'finition', icon:'🎨', name:'Vernis incolore satiné', desc:'0,75 L vernis acrylique incolore satiné, intérieur. Séchage 2h, résistant.', price:9.90 },
  { id:'hw13', cat:'finition', icon:'🌿', name:'Papier abrasif assorti', desc:'Lot de 20 feuilles grains 60, 80, 120, 180, 240. Poncage main toutes surfaces.', price:6.90 },
];

// ═══════════════════════════════════════════
// SVG SCHEMAS
// ═══════════════════════════════════════════
function tableSVG() {
  return `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="max-height:180px">
    <rect x="30" y="10" width="340" height="30" rx="3" fill="#C4956A" stroke="#7A4F27" stroke-width="2"/>
    <text x="200" y="30" text-anchor="middle" fill="white" font-size="11" font-family="DM Mono,monospace">100 cm</text>
    <rect x="30" y="45" width="340" height="30" rx="3" fill="#B8804C" stroke="#7A4F27" stroke-width="2"/>
    <text x="200" y="65" text-anchor="middle" fill="white" font-size="11" font-family="DM Mono,monospace">Palette 2</text>
    <rect x="30" y="80" width="20" height="60" rx="3" fill="#7A4F27"/>
    <rect x="350" y="80" width="20" height="60" rx="3" fill="#7A4F27"/>
    <circle cx="50" cy="142" r="7" fill="#3B6B4A" stroke="#2a4f35" stroke-width="1.5"/>
    <circle cx="350" cy="142" r="7" fill="#3B6B4A" stroke="#2a4f35" stroke-width="1.5"/>
    <text x="200" y="195" text-anchor="middle" fill="#6b5540" font-size="9" font-family="DM Mono,monospace">Table basse palette — 2 palettes EUR empilées</text>
  </svg>`;
}
function etagSVG() {
  return `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="max-height:180px">
    <rect x="20" y="10" width="15" height="170" rx="3" fill="#7A4F27" stroke="#4E2E0E" stroke-width="1.5"/>
    <rect x="365" y="10" width="15" height="170" rx="3" fill="#7A4F27" stroke="#4E2E0E" stroke-width="1.5"/>
    <rect x="20" y="20" width="360" height="14" rx="3" fill="#C4956A" stroke="#7A4F27" stroke-width="1.5"/>
    <rect x="20" y="80" width="360" height="14" rx="3" fill="#C4956A" stroke="#7A4F27" stroke-width="1.5"/>
    <rect x="20" y="140" width="360" height="14" rx="3" fill="#C4956A" stroke="#7A4F27" stroke-width="1.5"/>
    <text x="200" y="31" text-anchor="middle" fill="white" font-size="9" font-family="DM Mono,monospace">Tablette 1</text>
    <text x="200" y="91" text-anchor="middle" fill="white" font-size="9" font-family="DM Mono,monospace">Tablette 2</text>
    <text x="200" y="151" text-anchor="middle" fill="white" font-size="9" font-family="DM Mono,monospace">Tablette 3</text>
    <text x="200" y="190" text-anchor="middle" fill="#6b5540" font-size="9" font-family="DM Mono,monospace">Étagère murale 3 niveaux — 120 cm de large</text>
  </svg>`;
}
function canapeSVG() {
  return `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="max-height:180px">
    <rect x="20" y="120" width="280" height="40" rx="4" fill="#B8804C" stroke="#7A4F27" stroke-width="2"/>
    <rect x="20" y="80" width="280" height="44" rx="4" fill="#D9B48F" stroke="#B8804C" stroke-width="2"/>
    <rect x="300" y="60" width="40" height="100" rx="4" fill="#7A4F27" stroke="#4E2E0E" stroke-width="2"/>
    <circle cx="45" cy="162" r="7" fill="#4E2E0E"/>
    <circle cx="280" cy="162" r="7" fill="#4E2E0E"/>
    <text x="150" y="107" text-anchor="middle" fill="#4E2E0E" font-size="10" font-family="DM Mono,monospace">Assise (2 palettes)</text>
    <text x="326" y="115" text-anchor="middle" fill="white" font-size="9" font-family="DM Mono,monospace" transform="rotate(-90 326 115)">Dossier</text>
    <text x="200" y="190" text-anchor="middle" fill="#6b5540" font-size="9" font-family="DM Mono,monospace">Canapé palette 2 places — L 160 cm</text>
  </svg>`;
}
function litSVG() {
  return `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="max-height:180px">
    <rect x="30" y="100" width="350" height="70" rx="4" fill="#B8804C" stroke="#7A4F27" stroke-width="2"/>
    <rect x="30" y="10" width="30" height="100" rx="4" fill="#7A4F27" stroke="#4E2E0E" stroke-width="2"/>
    <rect x="30" y="55" width="350" height="12" rx="2" fill="#D9B48F" opacity=".7"/>
    <rect x="30" y="75" width="350" height="12" rx="2" fill="#D9B48F" opacity=".7"/>
    <rect x="30" y="40" width="350" height="12" rx="2" fill="#D9B48F" opacity=".7"/>
    <text x="200" y="140" text-anchor="middle" fill="white" font-size="10" font-family="DM Mono,monospace">Matelas 140×190 cm</text>
    <text x="200" y="200" text-anchor="middle" fill="#6b5540" font-size="9" font-family="DM Mono,monospace">Lit double palette — 6 palettes — tête de lit intégrée</text>
  </svg>`;
}

// ═══════════════════════════════════════════
// CART STATE
// ═══════════════════════════════════════════
let cart = JSON.parse(localStorage.getItem('palettecraft_cart') || '[]');

function saveCart() { localStorage.setItem('palettecraft_cart', JSON.stringify(cart)); }
function getTotal() { return cart.reduce((t, i) => t + i.price * i.qty, 0); }
function formatPrice(p) { return p.toFixed(2).replace('.', ',') + ' €'; }

// ═══════════════════════════════════════════
// RENDER PRODUCTS
// ═══════════════════════════════════════════
function renderProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="product-card reveal" data-cat="${p.cat}" id="prod-${p.id}">
      <div class="product-img" style="background:linear-gradient(135deg,#E8D5B5,#D9B48F)">
        <span style="font-size:4rem;position:relative;z-index:2">${p.emoji}</span>
        ${p.badge ? `<div class="product-badge ${p.badgeCls}">${p.badge}</div>` : ''}
      </div>
      <div class="product-body">
        <div class="product-cat">${p.cat === 'palette' ? '// palette' : p.cat === 'kit' ? '// kit' : p.cat === 'planche' ? '// planche' : '// personnalisation'}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-variants">${p.variants.map(v => `<span class="variant-chip">${v}</span>`).join('')}</div>
      </div>
      <div class="product-footer">
        <div class="product-price">${p.price > 0 ? formatPrice(p.price) : 'Sur devis'}<small>${p.unit}</small></div>
        ${p.price > 0 ? `<button class="add-cart-btn" onclick="addToCart('${p.id}','product')">+ Panier</button>` : `<a href="#contact" class="add-cart-btn" style="text-decoration:none">✉️ Devis</a>`}
      </div>
    </div>
  `).join('');
  observeReveal();
}

function filterProducts(cat, btn) {
  document.querySelectorAll('#productGrid .product-card').forEach(c => {
    c.classList.toggle('hidden', cat !== 'all' && c.dataset.cat !== cat);
  });
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}

// ═══════════════════════════════════════════
// RENDER HARDWARE
// ═══════════════════════════════════════════
function renderHardware() {
  const grid = document.getElementById('hardwareGrid');
  grid.innerHTML = HARDWARE.map(h => `
    <div class="hw-card reveal" data-cat="${h.cat}" id="hw-${h.id}">
      <div class="hw-icon">${h.icon}</div>
      <div class="hw-cat">${h.cat}</div>
      <div class="hw-name">${h.name}</div>
      <div class="hw-desc">${h.desc}</div>
      <div class="hw-footer">
        <div class="hw-price">${formatPrice(h.price)}</div>
        <button class="hw-add" onclick="addToCart('${h.id}','hardware')" title="Ajouter au panier">+</button>
      </div>
    </div>
  `).join('');
  observeReveal();
}

// ═══════════════════════════════════════════
// RENDER PLANS
// ═══════════════════════════════════════════
function renderPlans() {
  const grid = document.getElementById('plansGrid');
  grid.innerHTML = PLANS.map(plan => `
    <div class="plan-card reveal" id="plan-${plan.id}">
      <div class="plan-header">
        <div class="plan-icon">${plan.icon}</div>
        <div>
          <h3>${plan.name}</h3>
          <p>${plan.subtitle}</p>
        </div>
      </div>
      <div class="plan-body">
        <div class="plan-specs">${plan.specs.map(s => `<span class="spec-chip">${s}</span>`).join('')}</div>
        <div class="plan-desc">${plan.desc}</div>
        <div class="plan-materials">
          <h4>// Matériaux nécessaires</h4>
          <ul>${plan.materials.map(m => `<li>${m.name} — <strong>${m.price}</strong></li>`).join('')}</ul>
        </div>
        <div class="plan-footer">
          <span class="plan-free">📄 Plan GRATUIT</span>
          <button class="btn-plan" onclick="openPlanModal('${plan.id}')">📐 Voir le plan complet</button>
        </div>
      </div>
    </div>
  `).join('');
  observeReveal();
}

// ═══════════════════════════════════════════
// PLAN MODAL
// ═══════════════════════════════════════════
function openPlanModal(id) {
  const plan = PLANS.find(p => p.id === id);
  if (!plan) return;
  document.getElementById('modalTitle').textContent = `📐 ${plan.name}`;
  document.getElementById('modalBody').innerHTML = `
    <div class="schema-svg-container">${plan.svg()}</div>
    <h4 style="font-family:'Playfair Display',serif;color:var(--wood-dark);margin-bottom:1rem">Étapes de montage</h4>
    <ol class="steps-list">${plan.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    <div class="modal-cart-section">
      <h4>🛒 Commander les matériaux nécessaires</h4>
      <div class="modal-materials-list">
        ${plan.materials.map(m => {
          const item = [...PRODUCTS, ...HARDWARE].find(x => x.id === m.id);
          return `<div class="modal-material-item">
            <span>${m.name}</span>
            <div style="display:flex;align-items:center;gap:.5rem">
              <span class="price">${m.price}</span>
              ${item ? `<button class="hw-add" onclick="addToCart('${m.id}','${PRODUCTS.find(x=>x.id===m.id)?'product':'hardware'}')" style="font-size:.8rem;width:auto;padding:.2rem .6rem;height:auto">+ Panier</button>` : ''}
            </div>
          </div>`;
        }).join('')}
      </div>
      <button class="add-kit-btn" onclick="addKitToCart('${plan.id}')">🛒 Ajouter tous les matériaux au panier</button>
    </div>
  `;
  document.getElementById('planModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closePlanModal() {
  document.getElementById('planModal').classList.remove('open');
  document.body.style.overflow = '';
}
function addKitToCart(planId) {
  const plan = PLANS.find(p => p.id === planId);
  plan.materials.forEach(m => {
    const isHW = HARDWARE.find(x => x.id === m.id);
    if (isHW || PRODUCTS.find(x => x.id === m.id)) {
      addToCart(m.id, isHW ? 'hardware' : 'product', true);
    }
  });
  showToast(`✅ Kit « ${plan.name} » ajouté au panier !`);
  closePlanModal();
}

// ═══════════════════════════════════════════
// CART LOGIC
// ═══════════════════════════════════════════
function addToCart(id, type, silent = false) {
  const source = type === 'hardware' ? HARDWARE : PRODUCTS;
  const item = source.find(x => x.id === id);
  if (!item || item.price <= 0) return;
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ id, name: item.name, price: item.price, qty: 1, emoji: item.emoji || item.icon }); }
  saveCart();
  renderCart();
  if (!silent) showToast(`🛒 ${item.name} ajouté !`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart(); renderCart();
}
function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(); renderCart();
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const countEl = document.getElementById('cartCount');
  const totalCount = cart.reduce((t, i) => t + i.qty, 0);
  if (totalCount > 0) { countEl.textContent = totalCount; countEl.classList.add('visible'); }
  else { countEl.classList.remove('visible'); }
  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><div class="icon">🛒</div><p>Votre panier est vide</p></div>`;
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'block';
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-icon">${item.emoji}</div>
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <small>${formatPrice(item.price)} / unité</small>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty('${item.id}',-1)">−</button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}',1)">+</button>
          <button class="remove-btn" onclick="removeFromCart('${item.id}')">🗑</button>
        </div>
      </div>
      <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
    </div>
  `).join('');
  const total = getTotal();
  document.getElementById('cartSubtotal').textContent = formatPrice(total);
  document.getElementById('cartTotal').textContent = formatPrice(total);
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = sidebar.classList.contains('open');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ═══════════════════════════════════════════
// CHECKOUT
// ═══════════════════════════════════════════
function openCheckout() {
  const token = localStorage.getItem("token");
  if (!token) {
    showToast("🔒 Connecte-toi pour accéder au paiement");
    openLogin();
    return;
  }
  if (cart.length === 0) return;
  const total = getTotal();
  document.getElementById('checkoutTotalDisplay').textContent = formatPrice(total);
  const lines = cart.map(i => `
    <div class="order-line"><span>${i.name} ×${i.qty}</span><span>${formatPrice(i.price*i.qty)}</span></div>
  `).join('');
  document.getElementById('orderSummaryLines').innerHTML = lines + `
    <div class="order-line"><span>Livraison Besançon</span><span style="color:var(--green)">Gratuite</span></div>
    <div class="order-line"><span>Total TTC</span><span>${formatPrice(total)}</span></div>
  `;
  document.getElementById('checkoutOverlay').classList.add('open');
  toggleCart();
  initPayPal(total);
}
function closeCheckout() { document.getElementById('checkoutOverlay').classList.remove('open'); }

function initPayPal(total) {
  const container = document.getElementById('paypal-button-container');
  container.innerHTML = '';
  if (typeof paypal !== 'undefined') {
    paypal.Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{ amount: { value: total.toFixed(2), currency_code: 'EUR' }, description: `Commande PaletteCraft25 — ${cart.length} article(s)` }]
        });
      },
      onApprove: function(data, actions) { return actions.order.capture().then(function() { onPaymentSuccess(); }); },
      onError: function(err) { alert('Erreur PayPal. Veuillez réessayer.'); }
    }).render('#paypal-button-container');
    document.querySelector('.paypal-fallback').style.display = 'none';
  }
}

function simulatePayment() { closeCheckout(); setTimeout(onPaymentSuccess, 300); }
function onPaymentSuccess() { cart = []; saveCart(); renderCart(); document.getElementById('successOverlay').classList.add('open'); }
function closeSuccess() { document.getElementById('successOverlay').classList.remove('open'); }

// ═══════════════════════════════════════════
// MOBILE NAV
// ═══════════════════════════════════════════
function toggleMobileNav() { document.getElementById('mobileNav').classList.toggle('open'); }

// ═══════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ═══════════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════════
function observeReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// ═══════════════════════════════════════════
// NEWSLETTER
// ═══════════════════════════════════════════
function submitNewsletter(e) {
  e.preventDefault();
  showToast('✅ Inscription confirmée ! Merci !');
  e.target.reset();
}

// ═══════════════════════════════════════════
// CLOSE MODALS ON ESC
// ═══════════════════════════════════════════
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeLogin();
    closePlanModal();
    closeCheckout();
    closeSuccess();
    if (document.getElementById('cartSidebar').classList.contains('open')) toggleCart();
  }
});

// ═══════════════════════════════════════════
// AUTH MODAL — TABS
// ═══════════════════════════════════════════
function openLogin(tab = 'login') {
  document.getElementById('authOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  switchTab(tab);
}

function closeLogin() {
  document.getElementById('authOverlay').classList.remove('open');
  document.body.style.overflow = '';
  // fermer le menu utilisateur si ouvert
  document.getElementById('userMenu')?.classList.remove('open');
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('authOverlay')) closeLogin();
}

function switchTab(tab) {
  const isLogin = tab === 'login';
  document.getElementById('tabLogin').classList.toggle('active', isLogin);
  document.getElementById('tabRegister').classList.toggle('active', !isLogin);
  document.getElementById('formLogin').classList.toggle('hidden', !isLogin);
  document.getElementById('formRegister').classList.toggle('hidden', isLogin);
  // déplacer l'indicateur
  const indicator = document.getElementById('tabIndicator');
  indicator.style.transform = isLogin ? 'translateX(0)' : 'translateX(100%)';
}

// ═══════════════════════════════════════════
// AUTHENTIFICATION
// ═══════════════════════════════════════════
async function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  if (!email || !password) { showToast("⚠️ Remplis tous les champs"); return; }

  try {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userEmail", data.email || email);
      closeLogin();
      showToast("👤 Connecté !");
      updateUserUI();
    } else {
      showToast("❌ " + (data.message || "Identifiants incorrects"));
    }
  } catch (err) {
    showToast("❌ Serveur indisponible");
  }
}

function togglePassword(inputId, eyeElement) {
  const input = document.getElementById(inputId);

  const eyeOpen = eyeElement.querySelector(".eye-open");
  const eyeClosed = eyeElement.querySelector(".eye-closed");

  const isHidden = input.type === "password";

  input.type = isHidden ? "text" : "password";

  // switch icônes
  eyeOpen.style.display = isHidden ? "none" : "block";
  eyeClosed.style.display = isHidden ? "block" : "none";

  // animation blink
  eyeElement.classList.add("blink");
  setTimeout(() => eyeElement.classList.remove("blink"), 250);
}

async function register() {
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  if (!email || !password) { showToast("⚠️ Remplis tous les champs"); return; }
  if (password.length < 6) { showToast("⚠️ Mot de passe trop court (min. 6 car.)"); return; }

  try {
    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
      showToast("✅ Compte créé ! Connecte-toi.");
      switchTab('login');
      document.getElementById("loginEmail").value = email;
    } else {
      showToast("❌ " + (data.message || "Erreur lors de l'inscription"));
    }
  } catch (err) {
    showToast("❌ Serveur indisponible");
  }
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userEmail");
  updateUserUI();
  showToast("👋 Déconnecté");
  document.getElementById('userMenu')?.classList.remove('open');
}

// ─── Menu déroulant utilisateur ───
function toggleUserMenu() {
  document.getElementById('userMenu').classList.toggle('open');
}
// Fermer le menu si on clique ailleurs
document.addEventListener('click', e => {
  const chip = document.querySelector('.user-chip');
  const menu = document.getElementById('userMenu');
  if (menu && chip && !chip.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// ─── Mise à jour de l'UI selon l'état de connexion ───
function updateUserUI() {
  const email = localStorage.getItem("userEmail");
  const guestEl = document.getElementById("authGuest");
  const userEl = document.getElementById("authUser");

  if (email) {
    // Connecté
    guestEl.style.display = "none";
    userEl.style.display = "flex";
    // Initiale de l'email pour l'avatar
    document.getElementById("userAvatar").textContent = email.charAt(0).toUpperCase();
    // Email court (avant @)
    const shortName = email.split('@')[0];
    document.getElementById("userEmailShort").textContent = shortName.length > 10 ? shortName.slice(0, 10) + '…' : shortName;
    document.getElementById("userMenuEmail").textContent = email;
  } else {
    // Non connecté
    guestEl.style.display = "flex";
    userEl.style.display = "none";
  }
}

// ═══════════════════════════════════════════
// 
// ═══════════════════════════════════════════


// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════
renderProducts();
renderHardware();
renderPlans();
renderCart();
observeReveal();
updateUserUI();
