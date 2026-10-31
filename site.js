// ── Data ─────────────────────────────────────────────

// From Strava, Oct 31 2026.
const CYCLING = { km: 10405, goal: 10000, since: 'May 2021', year: 2026, yearKm: 975, yearRides: 45, rides: 547, elevM: 91484, hours: 557 };

// Totals from Strava, Oct 31 2026; best pace and monthly km (last 12 months, oldest first) from Garmin.
const RUNNING = {
  year: 2026, yearKm: 514, yearRuns: 100, totalKm: 912, runs: 185, bestPace: '5:37',
  months: [['Nov', 9.8], ['Dec', 9.0], ['Jan', 21.0], ['Feb', 27.2], ['Mar', 58.2], ['Apr', 70.4], ['May', 37.6], ['Jun', 62.6], ['Jul', 61.9], ['Aug', 70.1], ['Sep', 59.2], ['Oct', 47.5]],
};

const PROJECTS = [
{
  name: 'Tarmac', year: '2026', wip: true,
  tagline: 'AirPlay receiver for Android TV. Actually works.',
  description: 'The Play Store had options. None of them worked properly. Tarmac does — 4K HEVC mirroring, HDR10 passthrough, and a real extended-display mode on Chromecast, NVIDIA Shield, and Fire TV Cube.',
  features: [
    ['4K HEVC', '1080p60 and 4K mirroring via hardware MediaCodec'],
    ['HDR10', 'Full HDR passthrough, tunneled playback'],
    ['Extended Display', '"Use As Separate Display" — real second monitor from macOS'],
    ['AirPlay Video', 'Stream from Photos, Apple TV app and more']],
  github: 'https://github.com/llmassisted/tarmac',
  download: 'https://github.com/llmassisted/tarmac/releases'
},
{
  name: 'MoDocs', year: '2026', wip: false,
  tagline: 'Lightweight Android document viewer. All formats, no ads.',
  description: 'There was no single lightweight app on the Play Store that opened PDF, DOCX, XLSX, and PPTX without showing ads. So I built one. Requires Android 8.0+.',
  features: [
    ['PDF', 'View, search, fill forms, signatures, save'],
    ['DOCX', 'Word docs with formatting, images, tables'],
    ['XLSX', 'View and edit spreadsheet cells'],
    ['PPTX', 'Presentations with text, shapes, backgrounds']],
  github: 'https://github.com/llmassisted/modocs',
  download: 'https://github.com/llmassisted/modocs/releases'
}];

const CHESS_GAMES = [
{ white: 'NotSA', black: 'maliktadjer', opening: 'Hungarian Opening', date: 'Mar 16, 2020', result: '1-0',
  note: 'A quiet Hungarian that sharpens into a tactical endgame — won by checkmate on move 43.',
  elo: '1185 vs 1211',
  pgn: 'g3 e6 Nf3 Bc5 Bg2 c6 O-O Nf6 d4 Bd6 Nc3 b6 Bg5 Bb7 Ne4 Be7 Nxf6+ gxf6 Bh6 d5 Nh4 f5 Nf3 Qc7 Ne5 Nd7 f4 Nxe5 fxe5 O-O-O Bd2 c5 e3 cxd4 exd4 h5 h4 Rdg8 Rf3 Rg6 a3 Rhg8 Bf4 Bxh4 Qe1 Qxc2 Qf2 Qc4 Rc1 Qxc1+ Bxc1 Bxg3 Qc2+ Kd7 Rc3 Rc8 Rxc8 Bxc8 Qa4+ Kc7 Qxa7+ Bb7 Qa4 Rg4 Be3 Re4 Bf2 Bxe5 Bxe4 dxe4 dxe5 e3 Bxe3 h4 Qc2+ Kb8 Bxb6 h3 Kh2 f4 Qc7+ Ka8 Qd8+ Bc8 Qxc8#' },
{ white: 'surebeatsworking', black: 'NotSA', opening: "King's Indian Defense", date: 'Feb 14, 2026', result: '0-1',
  note: "A sharp KID where black outmaneuvers white's queenside setup and wins by resignation on move 29.",
  elo: '1300 vs 1175',
  pgn: 'd4 Nf6 c4 d6 Nc3 g6 Nf3 Bg7 Bg5 O-O e3 c6 Be2 Nbd7 O-O a6 a3 b5 cxb5 cxb5 Qc2 Bb7 b4 Rc8 Rac1 Ne4 Qb2 Nxg5 Nxg5 e5 Nf3 exd4 Nxd4 Re8 Bf3 Bxf3 Nxf3 Qf6 Nd4 Ne5 Nd5 Qg5 Nf4 Nf3+ Nxf3 Bxb2 Rxc8 Qe7 Rxe8+ Qxe8 Rb1 Bxa3 Nd5 Qe6 Rd1 Bxb4 Nxb4 Qb3' }];

// Routes and elevation traced from each Strava segment page; stats as of Oct 31 2026.
const STRAVA_SEGS = [
{
  name: "Hornsby Tedford Combo", location: 'Austin, Texas',
  km: '1.15 km', elev: '41 m gain', grade: '3.5%', pr: '3:41', efforts: 55,
  url: 'https://www.strava.com/segments/34604913',
  d: 'M70.6,7.0 C69.5,8.3 65.9,12.2 64.0,14.9 C62.1,17.6 60.7,20.3 59.3,23.5 C57.9,26.7 56.8,30.7 55.4,34.0 C54.0,37.3 52.4,40.2 50.9,43.2 C49.4,46.2 48.1,50.9 46.2,51.8 C44.3,52.7 41.3,48.5 39.6,48.4 C37.9,48.3 37.5,49.0 36.2,51.0 C34.9,53.0 33.4,56.9 31.8,60.2 C30.2,63.5 28.2,67.2 26.5,70.7 C24.8,74.2 22.5,79.2 21.3,81.2 C20.1,83.2 19.7,82.7 19.4,83.0',
  start: [70.6, 7.0], end: [19.4, 83.0], viewBox: '0 0 90 90',
  elevProfile: [193, 194, 196, 198, 199, 201, 204, 207, 211, 213, 214, 215, 215, 216, 216, 217, 217, 218, 219, 221, 222, 223, 224, 224, 225, 226, 227, 229, 231, 232, 233, 234],
},
{
  name: "Mesa – Cat Mountain Stop Sign", location: 'Austin, Texas',
  km: '1.19 km', elev: '95 m gain', grade: '7.9%', pr: '7:43', efforts: 4,
  url: 'https://www.strava.com/segments/3431727',
  d: 'M52.4,83.0 C51.4,81.5 48.1,77.0 46.1,74.2 C44.1,71.4 41.7,69.3 40.4,66.4 C39.1,63.5 38.6,60.0 38.2,56.9 C37.8,53.8 38.1,50.6 38.2,47.5 C38.3,44.4 38.5,41.2 38.6,38.1 C38.7,35.0 38.7,31.9 38.9,28.7 C39.1,25.5 39.8,22.1 39.8,19.2 C39.8,16.3 39.0,13.4 38.6,11.4 C38.2,9.4 37.8,7.7 37.6,7.0',
  start: [52.4, 83.0], end: [37.6, 7.0], viewBox: '0 0 90 90',
  elevProfile: [176, 178, 181, 184, 189, 193, 196, 198, 199, 201, 203, 206, 209, 212, 216, 220, 223, 227, 231, 234, 238, 240, 242, 245, 251, 256, 260, 263, 265, 267, 269, 270],
},
{
  name: "CotA Lap at Finish Line", location: 'Austin, Texas',
  km: '5.42 km', elev: '72 m gain', grade: '-0.1%', pr: '11:50', efforts: 11,
  url: 'https://www.strava.com/segments/17427961',
  d: 'M11.4,51.0 C12.4,51.6 15.2,53.5 17.1,54.9 C19.0,56.2 21.2,57.7 23.0,59.1 C24.8,60.5 26.7,62.1 28.1,63.2 C29.5,64.3 30.5,65.3 31.3,65.9 C32.1,66.5 32.6,66.9 32.8,66.8 C33.0,66.7 32.8,66.3 32.5,65.5 C32.2,64.7 31.3,63.0 31.1,61.8 C30.9,60.6 30.9,59.3 31.3,58.1 C31.7,56.9 32.5,55.6 33.6,54.5 C34.7,53.4 36.8,52.4 38.1,51.3 C39.4,50.1 40.4,48.8 41.3,47.6 C42.2,46.5 42.9,45.5 43.6,44.4 C44.3,43.2 44.8,41.6 45.5,40.7 C46.2,39.8 46.8,39.5 47.7,39.1 C48.6,38.7 49.9,38.5 51.0,38.5 C52.1,38.5 53.4,39.4 54.6,39.4 C55.8,39.4 57.1,39.2 58.3,38.7 C59.5,38.2 60.9,36.9 61.9,36.6 C62.9,36.3 63.3,36.9 64.2,37.1 C65.1,37.3 66.0,38.1 67.4,38.0 C68.9,37.9 71.4,37.5 72.9,36.6 C74.4,35.7 75.3,34.1 76.6,32.5 C77.9,30.9 79.6,28.4 80.7,27.0 C81.8,25.6 82.8,24.4 83.0,23.8 C83.2,23.2 83.3,23.0 81.9,23.2 C80.5,23.4 77.5,24.5 74.8,25.2 C72.1,25.9 68.7,26.8 65.6,27.5 C62.5,28.2 59.4,28.7 56.4,29.3 C53.4,29.9 50.0,30.4 47.3,30.9 C44.6,31.3 42.0,31.6 40.0,32.0 C38.0,32.4 36.1,32.6 35.2,33.0 C34.3,33.4 34.4,33.5 34.5,34.3 C34.6,35.0 35.1,36.5 35.8,37.5 C36.4,38.5 38.3,40.1 38.4,40.6 C38.5,41.1 37.3,40.7 36.3,40.3 C35.3,39.9 33.7,38.7 32.6,38.0 C31.5,37.3 30.3,36.1 29.9,36.3 C29.5,36.5 29.9,38.2 30.3,39.4 C30.7,40.6 32.0,42.3 32.5,43.5 C33.0,44.7 33.4,45.7 33.1,46.7 C32.8,47.7 31.6,48.8 30.8,49.4 C30.0,50.0 29.4,50.3 28.1,50.1 C26.8,49.9 24.4,49.1 23.0,48.1 C21.6,47.1 20.5,45.4 19.4,44.4 C18.3,43.4 17.7,42.5 16.6,42.1 C15.5,41.7 14.3,41.7 13.0,42.1 C11.7,42.5 10.0,43.8 9.0,44.6 C8.0,45.4 7.2,46.3 7.0,47.0 C6.8,47.7 7.4,48.1 8.1,48.8 C8.8,49.5 10.8,50.6 11.4,51.0',
  start: [11.4, 51.0], end: [11.4, 51.0], viewBox: '0 0 90 90',
  elevProfile: [156, 155, 156, 163, 182, 177, 162, 165, 163, 163, 165, 172, 177, 172, 163, 166, 158, 162, 163, 161, 160, 159, 157, 162, 160, 158, 162, 163, 159, 157, 150, 153],
},
{
  name: "Colborne + Hot Lap", location: 'Toronto, Canada',
  km: '2.57 km', elev: '35 m gain', grade: '1%', pr: '6:24', efforts: 8,
  url: 'https://www.strava.com/segments/25643158',
  d: 'M63.8,83.0 C63.0,82.1 60.5,79.4 59.0,77.7 C57.5,76.0 55.7,74.3 54.5,72.8 C53.3,71.3 53.1,70.3 51.7,68.8 C50.4,67.3 47.9,65.3 46.4,63.6 C44.9,61.9 43.9,60.2 42.8,58.7 C41.7,57.2 40.5,55.8 39.9,54.5 C39.3,53.2 39.1,52.3 39.3,51.0 C39.5,49.7 40.5,48.1 40.9,46.5 C41.3,44.9 41.7,43.2 41.7,41.3 C41.7,39.3 41.1,37.2 40.9,34.8 C40.7,32.4 40.4,29.4 40.4,26.7 C40.4,24.0 40.5,21.4 40.7,18.6 C40.9,15.8 41.6,11.6 41.5,9.7 C41.4,7.8 40.7,7.3 39.9,7.0 C39.1,6.7 38.1,7.0 36.8,8.1 C35.5,9.2 33.8,11.8 32.3,13.5 C30.7,15.2 28.5,16.7 27.5,18.6 C26.5,20.5 26.3,22.7 26.2,25.1 C26.1,27.5 26.2,30.5 26.6,33.2 C27.0,35.9 27.5,39.1 28.3,41.3 C29.1,43.5 30.0,45.1 31.2,46.5 C32.4,47.9 34.8,49.2 35.5,49.7',
  start: [63.8, 83.0], end: [35.5, 49.7], viewBox: '0 0 90 90',
  elevProfile: [75, 75, 88, 91, 92, 93, 97, 97, 98, 99, 100, 101, 102, 102, 102, 102, 103, 105, 105, 106, 106, 107, 107, 106, 105, 105, 100, 98, 99, 99, 99, 100],
},
];

const ICONS = {
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
};

// ── Helpers ──────────────────────────────────────────
const $ = (s, el = document) => el.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

document.querySelectorAll('[data-icon]').forEach(el => {
  const n = el.dataset.size;
  el.innerHTML = `<svg width="${n}" height="${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${n > 20 ? 1.6 : 1.8}" stroke-linecap="round" stroke-linejoin="round">${ICONS[el.dataset.icon]}</svg>`;
});

// ── Router ───────────────────────────────────────────
const PAGES = ['home', 'about', 'projects', 'blog', 'contact'];
function show() {
  const route = PAGES.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'home';
  document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.dataset.page === route));
  document.querySelectorAll('.nav button').forEach(b => b.classList.toggle('active', b.dataset.go === route));
  if (route !== 'blog') activeGame = null;
  window.scrollTo(0, 0);
}
addEventListener('hashchange', show);
document.addEventListener('click', e => {
  const t = e.target.closest('[data-go]');
  if (!t) return;
  location.hash = t.dataset.go;
  closeMobNav();
});

// ── Mobile nav ───────────────────────────────────────
function setMobNav(open) {
  $('#hamburger').classList.toggle('open', open);
  $('#hamburger').setAttribute('aria-expanded', open);
  $('.sidebar').classList.toggle('mob-open', open);
  $('#mob-overlay').classList.toggle('visible', open);
}
const closeMobNav = () => setMobNav(false);
$('#hamburger').addEventListener('click', () => setMobNav(!$('#hamburger').classList.contains('open')));
$('#mob-overlay').addEventListener('click', closeMobNav);

// ── About ────────────────────────────────────────────
(function renderCycling() {
  const { km, goal, since } = CYCLING;
  const done = km >= goal;
  $('#cycling').innerHTML = `
    <div class="bar-head">
      <span class="big-num">${km.toLocaleString()} <small>km</small></span>
      <span>Goal: ${goal.toLocaleString()} km${done ? ' ✓' : ''}</span>
    </div>
    <div class="bar"><i style="width:${Math.min(km / goal * 100, 100)}%"></i></div>
    <div class="bar-foot" style="margin-bottom:24px">Started ${since} · ${done ? `goal reached, ${(km - goal).toLocaleString()} km past it` : `${(goal - km).toLocaleString()} km to ${goal.toLocaleString()}`}</div>
    <div class="stat-row">
      <div class="stat"><div class="stat-label">${CYCLING.year} so far</div><div class="stat-val">${CYCLING.yearKm} <small>km</small></div></div>
      <div class="stat"><div class="stat-label">Rides</div><div class="stat-val">${CYCLING.rides}</div></div>
      <div class="stat"><div class="stat-label">Climbed</div><div class="stat-val">${CYCLING.elevM.toLocaleString()} <small>m</small></div></div>
      <div class="stat"><div class="stat-label">In the saddle</div><div class="stat-val">${CYCLING.hours} <small>h</small></div></div>
    </div>`;
})();

(function renderRunning() {
  const r = RUNNING;
  const max = Math.max(...r.months.map(m => m[1]));
  $('#running').innerHTML = `
    <div class="stat-row">
      <div class="stat"><div class="stat-label">${r.year} so far</div><div class="stat-val">${r.yearKm} <small>km</small></div></div>
      <div class="stat"><div class="stat-label">Runs in ${r.year}</div><div class="stat-val">${r.yearRuns}</div></div>
      <div class="stat"><div class="stat-label">All-time</div><div class="stat-val">${r.totalKm} <small>km</small></div></div>
      <div class="stat"><div class="stat-label">Best pace, 5K+</div><div class="stat-val">${r.bestPace} <small>/km</small></div></div>
    </div>
    <div class="months" role="img" aria-label="Running distance per month, last 12 months">
      <div class="stat-label" style="margin-bottom:12px">Last 12 months</div>
      <div class="months-bars">${r.months.map(([m, v]) => `<div style="height:${Math.max(v / max * 100, 2)}%" title="${m}: ${v} km"></div>`).join('')}</div>
      <div class="months-axis">${r.months.map(([m]) => `<span>${m[0]}</span>`).join('')}</div>
    </div>`;
})();

$('#segments').innerHTML = STRAVA_SEGS.map(s => {
  const pts = s.elevProfile, min = Math.min(...pts), range = Math.max(...pts) - min || 1;
  const W = 80, H = 24;
  const spark = pts.map((v, j) => `${(j / (pts.length - 1)) * W},${H - ((v - min) / range) * H}`).join(' ');
  const grid = [25, 50, 75].map(t => `<line x1="${t}%" y1="0" x2="${t}%" y2="100%" stroke="var(--rule)" stroke-width="0.5"/><line x1="0" y1="${t}%" x2="100%" y2="${t}%" stroke="var(--rule)" stroke-width="0.5"/>`).join('');
  const stats = [['Distance', s.km], ['Elev gain', s.elev], ['Avg grade', s.grade], ['Efforts', s.efforts]];
  return `
    <a class="seg" href="${s.url}" target="_blank" rel="noopener noreferrer">
      <div class="seg-top">
        <div><div class="seg-name">${esc(s.name)}</div><div class="seg-loc">${esc(s.location)}</div></div>
        <div class="seg-pr"><div>PR</div><div>${s.pr}</div></div>
      </div>
      <div class="seg-inner">
        <svg viewBox="${s.viewBox}" width="90" height="90">${grid}
          <path d="${s.d}" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
          <circle cx="${s.start[0]}" cy="${s.start[1]}" r="3.5" fill="var(--accent)" opacity="0.45"/>
          <circle cx="${s.end[0]}" cy="${s.end[1]}" r="3.5" fill="var(--accent)"/>
        </svg>
        <div class="seg-stats">${stats.map(([k, v]) => `<div><div class="seg-k">${k}</div><div class="seg-v">${esc(v)}</div></div>`).join('')}</div>
      </div>
      <div class="seg-elev">
        <div class="seg-k">Elevation profile</div>
        <svg width="100%" height="24" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
          <polyline points="${spark}" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
          <polygon points="0,${H} ${spark} ${W},${H}" fill="var(--accent)" opacity="0.12"/>
        </svg>
      </div>
    </a>`;
}).join('');

// ── Projects ─────────────────────────────────────────
$('#projects').innerHTML = PROJECTS.map(p => `
  <div class="project">
    <div class="project-head"><h2>${esc(p.name)}</h2>${p.wip ? '<span class="wip">WIP</span>' : ''}<span class="year">${p.year}</span></div>
    <p class="tagline">${esc(p.tagline)}</p>
    <p class="desc">${esc(p.description)}</p>
    <div class="feat-grid">${p.features.map(([l, d]) => `<div class="feat"><div>${esc(l)}</div><div>${esc(d)}</div></div>`).join('')}</div>
    <div class="links">
      <a class="arrow-link" href="${p.github}" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
      ${p.download ? `<a class="arrow-link" href="${p.download}" target="_blank" rel="noopener noreferrer">Download APK →</a>` : ''}
    </div>
  </div>`).join('');

// ── Chess ────────────────────────────────────────────
// Minimal SAN replayer: enough for the curated games above, not a full legal-move engine.
const FILES = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };
const START = ['rnbqkbnr', 'pppppppp', '........', '........', '........', '........', 'PPPPPPPP', 'RNBQKBNR'].map(r => [...r].map(c => c === '.' ? null : c));

function reaches(b, pt, fr, fc, tr, tc) {
  const dr = tr - fr, dc = tc - fc;
  if (pt === 'N') return (Math.abs(dr) === 2 && Math.abs(dc) === 1) || (Math.abs(dr) === 1 && Math.abs(dc) === 2);
  if (pt === 'K') return Math.abs(dr) <= 1 && Math.abs(dc) <= 1;
  if (pt === 'B' && Math.abs(dr) !== Math.abs(dc)) return false;
  if (pt === 'R' && dr !== 0 && dc !== 0) return false;
  if (pt === 'Q' && dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return false;
  const sr = Math.sign(dr), sc = Math.sign(dc);
  for (let r = fr + sr, c = fc + sc; r !== tr || c !== tc; r += sr, c += sc) if (b[r]?.[c] != null) return false;
  return true;
}

function replay(pgn) {
  const moves = pgn.trim().split(/\s+/).filter(t => t && !/^\d+\./.test(t));
  let board = START.map(r => [...r]), white = true, ep = null;
  const states = [{ board, last: null }];
  for (const raw of moves) {
    const san = raw.replace(/[+#!?]/g, '');
    const b = board.map(r => [...r]);
    let from, to;
    if (san === 'O-O' || san === 'O-O-O') {
      const row = white ? 7 : 0, long = san === 'O-O-O';
      b[row][4] = null; b[row][long ? 0 : 7] = null;
      b[row][long ? 2 : 6] = white ? 'K' : 'k'; b[row][long ? 3 : 5] = white ? 'R' : 'r';
      from = [row, 4]; to = [row, long ? 2 : 6]; ep = null;
    } else {
      let [s, promo] = san.split('=');
      s = s.replace('x', '');
      let pt = 'P';
      if ('NBRQK'.includes(s[0])) { pt = s[0]; s = s.slice(1); }
      const tc = FILES[s.at(-2)], tr = 8 - +s.at(-1), dis = s.slice(0, -2);
      let dF = null, dR = null;
      if (dis.length === 1) { if (dis in FILES) dF = FILES[dis]; else dR = 8 - +dis; }
      else if (dis.length === 2) { dF = FILES[dis[0]]; dR = 8 - +dis[1]; }
      const pc = white ? pt : pt.toLowerCase();
      let fr = -1, fc = -1;
      if (pt === 'P') {
        const dir = white ? 1 : -1;
        if (dF !== null) {
          fc = dF; fr = tr + dir;
          if (b[tr][tc] === null && ep && ep[0] === tr && ep[1] === tc) b[tr + dir][tc] = null;
          ep = null;
        } else {
          fc = tc; fr = b[tr + dir]?.[fc] === pc ? tr + dir : tr + 2 * dir;
          ep = Math.abs(fr - tr) === 2 ? [(fr + tr) / 2, tc] : null;
        }
      } else {
        ep = null;
        search: for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
          if (b[r][c] !== pc || (dF !== null && c !== dF) || (dR !== null && r !== dR)) continue;
          if (reaches(b, pt, r, c, tr, tc)) { fr = r; fc = c; break search; }
        }
      }
      if (fr < 0) { console.warn('No piece for move:', raw); states.push({ board, last: null }); white = !white; continue; }
      b[tr][tc] = promo ? (white ? promo.toUpperCase() : promo.toLowerCase()) : pc;
      b[fr][fc] = null;
      from = [fr, fc]; to = [tr, tc];
    }
    board = b; white = !white;
    states.push({ board, last: { from, to } });
  }
  return { moves, states };
}

const GLYPHS = { K: '♔', Q: '♕', R: '♖', B: '♗', N: '♘', P: '♙', k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' };
const isWin = g => (g.result === '1-0' && g.white === 'NotSA') || (g.result === '0-1' && g.black === 'NotSA');
let activeGame = null; // { el, game, data, idx }

function renderBoard(st) {
  const { game, data, idx } = st;
  const { board, last } = data.states[idx];
  const flip = game.result === '0-1';
  const order = flip ? [7, 6, 5, 4, 3, 2, 1, 0] : [0, 1, 2, 3, 4, 5, 6, 7];
  let sq = '';
  order.forEach((row, ri) => {
    sq += `<div class="coord">${flip ? ri + 1 : 8 - ri}</div>`;
    for (const col of order) {
      const p = board[row][col];
      const isFrom = last?.from[0] === row && last?.from[1] === col;
      const isTo = last?.to[0] === row && last?.to[1] === col;
      const cls = ['sq', (row + col) % 2 === 0 ? 'l' : '', isFrom || isTo ? 'hl' : '', isTo ? 'to' : ''].join(' ');
      sq += `<div class="${cls}">${p ? `<span class="${p === p.toUpperCase() ? 'w' : ''}">${GLYPHS[p]}</span>` : ''}</div>`;
    }
  });
  sq += '<div></div>' + order.map(c => `<div class="coord file">${'abcdefgh'[c]}</div>`).join('');
  const end = data.states.length - 1;
  let list = '';
  for (let i = 0; i < data.moves.length; i += 2) {
    list += `<span class="n">${i / 2 + 1}.</span><button data-idx="${i + 1}" class="${idx === i + 1 ? 'on' : ''}">${data.moves[i]}</button>` +
      (data.moves[i + 1] ? `<button data-idx="${i + 2}" class="${idx === i + 2 ? 'on' : ''}">${data.moves[i + 1]}</button>` : '<span></span>');
  }
  st.el.querySelector('.chess-wrap').innerHTML = `
    <div>
      <div class="board">${sq}</div>
      <div class="chess-ctrl">
        <button data-idx="0" ${idx === 0 ? 'disabled' : ''}>⟨⟨</button>
        <button data-idx="${idx - 1}" ${idx === 0 ? 'disabled' : ''}>‹ Prev</button>
        <span>${idx} / ${data.moves.length}</span>
        <button data-idx="${idx + 1}" ${idx >= end ? 'disabled' : ''}>Next ›</button>
        <button data-idx="${end}" ${idx >= end ? 'disabled' : ''}>⟩⟩</button>
      </div>
      <div class="chess-hint">← → keys to navigate</div>
    </div>
    <div class="chess-movelist"><div class="moves">${list}</div><div class="final">${game.result}</div></div>`;
}

$('#games').innerHTML = CHESS_GAMES.map((g, i) => `
  <div class="game" data-game="${i}">
    <button class="game-head" aria-expanded="false">
      <span class="game-num">${String(i + 1).padStart(2, '0')}</span>
      <div style="flex:1">
        <div class="game-title"><span>${esc(g.white)} <b>vs</b> ${esc(g.black)}</span><span class="result ${isWin(g) ? 'win' : ''}">${isWin(g) ? 'Win' : 'Loss'}</span></div>
        <div class="game-sub">${esc(g.opening)} · ${g.date}</div>
      </div>
      <span class="plus">+</span>
    </button>
    <div class="game-body">
      <div class="game-elo">${g.elo}</div>
      <p class="game-note">${esc(g.note)}</p>
      <div class="chess-wrap"></div>
    </div>
  </div>`).join('');
$('#chess-tab').innerHTML = `Chess Games <small>(${CHESS_GAMES.length})</small>`;

$('#games').addEventListener('click', e => {
  const head = e.target.closest('.game-head');
  if (head) {
    const el = head.parentElement, wasOpen = el.classList.contains('open');
    document.querySelectorAll('.game.open').forEach(g => { g.classList.remove('open'); g.querySelector('.game-head').setAttribute('aria-expanded', 'false'); });
    activeGame = null;
    if (!wasOpen) {
      const game = CHESS_GAMES[+el.dataset.game];
      el.classList.add('open');
      head.setAttribute('aria-expanded', 'true');
      activeGame = { el, game, data: replay(game.pgn), idx: 0 };
      renderBoard(activeGame);
    }
    return;
  }
  const step = e.target.closest('[data-idx]');
  if (step && activeGame && !step.disabled) { activeGame.idx = +step.dataset.idx; renderBoard(activeGame); }
});

addEventListener('keydown', e => {
  if (!activeGame || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) return;
  const end = activeGame.data.states.length - 1;
  activeGame.idx = Math.max(0, Math.min(end, activeGame.idx + (e.key === 'ArrowLeft' ? -1 : 1)));
  renderBoard(activeGame);
});

show();

