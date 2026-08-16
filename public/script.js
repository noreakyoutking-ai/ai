// ============================================
// ANGKOR AI — i18n (landing page)
// ============================================
const I18N = {
  km: {
    signIn: 'ចូលគណនី', signUp: 'បង្កើតគណនី',
    eyebrow: 'សម្រាប់និស្សិត Grade 12 កម្ពុជា',
    headline: 'ផ្លូវទៅសាកលវិទ្យាល័យ<br/>ចាប់ផ្តើមនៅទីនេះ',
    subhead: 'ស្វែងរកសាលារៀន, អាហារូបករណ៍, ដោះស្រាយលំហាត់ និងត្រៀមប្រឡង — ជាមួយ AI ដែលយល់ពីនិស្សិតកម្ពុជា។',
    pillar1: 'ស្វែងរកសាលា + អាហារូបករណ៍',
    pillar2: 'ជួយលំហាត់ជាភាសាខ្មែរ',
    pillar3: 'ត្រៀមប្រឡងតាមឆ្នាំមុនៗ',
    namePlaceholder: 'ឈ្មោះរបស់អ្នក',
    confirmPlaceholder: 'បញ្ជាក់ Password',
    pwLen: 'យ៉ាងតិច ៨ តួអក្សរ', pwUpper: 'អក្សរធំ (A-Z)', pwLower: 'អក្សរតូច (a-z)', pwNumber: 'លេខ (0-9)',
    pwMismatch: 'Password ទាំង ២មិនដូចគ្នាទេ',
    orDivider: 'ឬ', googleBtn: 'បន្តជាមួយ Google',
    googleComingSoon: 'Google Sign In កំពុងរៀបចំ — ត្រូវការ setup Google Cloud ជាមុន',
    gradeLabel: 'កម្រិតថ្នាក់',
    grade12: 'ថ្នាក់ទី ១២', grade11: 'ថ្នាក់ទី ១១', grade10: 'ថ្នាក់ទី ១០', gradeOther: 'ផ្សេងទៀត',
    authNote: 'ឥតគិតថ្លៃសម្រាប់និស្សិត — ត្រូវការតែ email ប៉ុណ្ណោះ',
    footTag: 'Angkor AI — សាងសង់ឡើងសម្រាប់និស្សិតកម្ពុជា',
    comingSoon: 'Backend Sign In កំពុងសាងសង់ — ជំហានបន្ទាប់!',
    toolsLabel: 'ជំនួយសិក្សា', toolSchool: 'ស្វែងរកសាលារៀន', toolScholar: 'ស្វែងរក Scholarship',
    toolHomework: 'ជំនួយលំហាត់', toolExam: 'Past Exam Papers', toolUpload: 'ភ្ជាប់ File',
    memoryLabel: 'អ្វីដែល Angkor AI ចាំ', memoryEmpty: 'មិនទាន់មានអ្វីទេ',
    filesLabel: 'File ដែលបានបង្កើត', filesEmpty: 'មិនទាន់មាន file ទេ',
    clearBtn: '🗑 សម្អាតការសន្ទនា', connecting: 'កំពុងភ្ជាប់...', ready: 'ត្រៀមរួចរាល់',
    chatWelcome: 'សួស្តី! ខ្ញុំអាចជួយស្វែងរកសាលារៀន, scholarship, ដោះស្រាយលំហាត់ និងច្រើនទៀត។ សួរបានហើយ!',
    inputPlaceholder: 'សួរ Angkor AI អ្វីមួយ...', sendBtn: 'ផ្ញើ',
    thinking: 'កំពុងគិត...', searched: '🔍 បានស្វែងរកលើ Internet', download: '⬇ ទាញយក File',
    remembered: '🧠 ចាំរួច៖', clearConfirm: 'សម្អាតការសន្ទនាទាំងអស់?', clearedMsg: 'សម្អាតរួចរាល់!',
    connError: '❌ មិនអាចភ្ជាប់ទៅ server បានទេ។',
  },
  en: {
    signIn: 'Sign In', signUp: 'Sign Up',
    eyebrow: 'For Cambodian Grade 12 Students',
    headline: 'The road to university<br/>starts here',
    subhead: 'Find schools, scholarships, work through homework, and prepare for exams — with an AI that understands Cambodian students.',
    pillar1: 'Find schools + scholarships',
    pillar2: 'Homework help in Khmer',
    pillar3: 'Practice with past exam papers',
    namePlaceholder: 'Your name',
    confirmPlaceholder: 'Confirm password',
    pwLen: 'At least 8 characters', pwUpper: 'Uppercase (A-Z)', pwLower: 'Lowercase (a-z)', pwNumber: 'Number (0-9)',
    pwMismatch: 'Passwords do not match',
    orDivider: 'or', googleBtn: 'Continue with Google',
    googleComingSoon: 'Google Sign In is being set up — needs Google Cloud config first',
    gradeLabel: 'Grade level',
    grade12: 'Grade 12', grade11: 'Grade 11', grade10: 'Grade 10', gradeOther: 'Other',
    authNote: 'Free for students — just an email to get started',
    footTag: 'Angkor AI — built for Cambodian students',
    comingSoon: 'Backend sign-in is being built — coming next!',
    toolsLabel: 'Study Help', toolSchool: 'Find Schools', toolScholar: 'Find Scholarships',
    toolHomework: 'Homework Help', toolExam: 'Past Exam Papers', toolUpload: 'Upload File',
    memoryLabel: 'What Angkor AI Remembers', memoryEmpty: 'Nothing yet',
    filesLabel: 'Generated Files', filesEmpty: 'No files yet',
    clearBtn: '🗑 Clear Conversation', connecting: 'Connecting...', ready: 'Ready',
    chatWelcome: `Hey! I can help you find schools, scholarships, work through homework, and more. Ask away!`,
    inputPlaceholder: 'Ask Angkor AI anything...', sendBtn: 'Send',
    thinking: 'Thinking...', searched: '🔍 Searched the web', download: '⬇ Download File',
    remembered: '🧠 Remembered:', clearConfirm: 'Clear the entire conversation?', clearedMsg: 'Cleared!',
    connError: '❌ Could not connect to the server.',
  },
};

let lang = localStorage.getItem('angkor_lang') || 'km';
function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.km[key]; }

function applyLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll('.lang-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === lang));
  authSubmit.textContent = t(isSignupMode ? 'signUp' : 'signIn');
}

// ============================================
// AUTH TAB UI (frontend only for now — backend wiring is next step)
// ============================================
const tabLogin = document.getElementById('tabLogin');
const tabSignup = document.getElementById('tabSignup');
const authName = document.getElementById('authName');
const authPassword = document.getElementById('authPassword');
const authConfirm = document.getElementById('authConfirm');
const pwRequirements = document.getElementById('pwRequirements');
const gradeWrap = document.getElementById('gradeWrap');
const authForm = document.getElementById('authForm');
const authSubmit = document.getElementById('authSubmit');
const authError = document.getElementById('authError');
const googleBtn = document.getElementById('googleBtn');
let isSignupMode = false;

tabLogin.addEventListener('click', () => switchMode(false));
tabSignup.addEventListener('click', () => switchMode(true));

function switchMode(signup) {
  isSignupMode = signup;
  tabLogin.classList.toggle('active', !signup);
  tabSignup.classList.toggle('active', signup);
  authName.style.display = signup ? 'block' : 'none';
  gradeWrap.style.display = signup ? 'flex' : 'none';
  authConfirm.style.display = signup ? 'block' : 'none';
  pwRequirements.style.display = signup ? 'grid' : 'none';
  authPassword.setAttribute('minlength', signup ? '8' : '1'); // sign-in just needs whatever they already set
  authError.textContent = '';
  authError.classList.remove('show');
  applyLanguage();
}

// ============================================
// PASSWORD STRENGTH — live checklist (8+ chars, upper, lower, number)
// ============================================
function checkPasswordStrength(pw) {
  return {
    length: pw.length >= 8,
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    number: /[0-9]/.test(pw),
  };
}

authPassword.addEventListener('input', () => {
  if (!isSignupMode) return;
  const results = checkPasswordStrength(authPassword.value);
  pwRequirements.querySelectorAll('.pw-req').forEach((el) => {
    el.classList.toggle('met', results[el.dataset.req]);
  });
});

// ============================================
// GOOGLE SIGN IN — real Google Identity Services flow
// ============================================
const GOOGLE_CLIENT_ID = document.querySelector('meta[name="google-client-id"]')?.content || '';

function initGoogleSignIn() {
  if (!window.google || !GOOGLE_CLIENT_ID) return;
  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleCredential,
  });
}

async function handleGoogleCredential(response) {
  try {
    const res = await fetch('/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ credential: response.credential }),
    });
    const data = await res.json();
    if (!res.ok) {
      authError.textContent = data.error || 'Google Sign In failed';
      authError.style.color = '#e07a5f';
      authError.classList.add('show');
      return;
    }
    localStorage.setItem('angkor_token', data.token);
    localStorage.setItem('angkor_user_email', data.user.email);
    window.location.href = '/';
  } catch (err) {
    authError.textContent = lang === 'km' ? 'Google Sign In មិនជោគជ័យ' : 'Google Sign In failed';
    authError.style.color = '#e07a5f';
    authError.classList.add('show');
  }
}

googleBtn.addEventListener('click', () => {
  if (!window.google || !GOOGLE_CLIENT_ID) {
    authError.textContent = t('googleComingSoon');
    authError.style.color = 'var(--gold)';
    authError.classList.add('show');
    return;
  }
  google.accounts.id.prompt();
});

window.addEventListener('load', initGoogleSignIn);

authForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  authError.classList.remove('show');

  if (isSignupMode) {
    const results = checkPasswordStrength(authPassword.value);
    const allMet = Object.values(results).every(Boolean);
    if (!allMet) {
      authError.textContent = lang === 'km' ? 'សូមបំពេញលក្ខខណ្ឌ password ខាងលើឲ្យបានគ្រប់' : 'Please meet all password requirements above';
      authError.style.color = '#e07a5f';
      authError.classList.add('show');
      return;
    }
    if (authPassword.value !== authConfirm.value) {
      authError.textContent = t('pwMismatch');
      authError.style.color = '#e07a5f';
      authError.classList.add('show');
      return;
    }
  }

  authSubmit.disabled = true;
  const originalLabel = authSubmit.textContent;
  authSubmit.textContent = '...';

  const endpoint = isSignupMode ? '/api/auth/signup' : '/api/auth/login';
  const body = { email: authEmail.value.trim(), password: authPassword.value };
  if (isSignupMode) {
    body.name = authName.value.trim();
    body.grade = document.getElementById('authGrade').value;
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();

    if (!res.ok) {
      authError.textContent = data.error || 'Something went wrong';
      authError.style.color = '#e07a5f';
      authError.classList.add('show');
      return;
    }

    localStorage.setItem('angkor_token', data.token);
    localStorage.setItem('angkor_user_email', data.user.email);
    window.location.href = '/'; // TODO: once chat UI exists, this reloads straight into it
  } catch (err) {
    authError.textContent = lang === 'km' ? 'មិនអាចភ្ជាប់ទៅ server បានទេ' : 'Could not connect to the server';
    authError.style.color = '#e07a5f';
    authError.classList.add('show');
  } finally {
    authSubmit.disabled = false;
    authSubmit.textContent = originalLabel;
  }
});

document.getElementById('langToggle').addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (!btn) return;
  lang = btn.dataset.lang;
  localStorage.setItem('angkor_lang', lang);
  applyLanguage();
});

applyLanguage();

// ============================================
// 3D SCENE — glowing tiered spire (original abstract shape) + ember particles
// ============================================
(function initScene() {
  const canvas = document.getElementById('scene');
  if (!window.THREE || !canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 1.2, 9);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // ---- Lighting ----
  scene.add(new THREE.AmbientLight(0x2a3230, 1.4));
  const goldLight = new THREE.PointLight(0xd9a441, 3.2, 30);
  goldLight.position.set(3, 5, 6);
  scene.add(goldLight);
  const jadeLight = new THREE.PointLight(0x4c8267, 1.6, 30);
  jadeLight.position.set(-5, -2, 4);
  scene.add(jadeLight);

  // ---- Tiered spire group (original abstract form — stacked tapering tiers) ----
  const spire = new THREE.Group();
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xd9a441, emissive: 0x7a4f16, emissiveIntensity: 0.55, metalness: 0.35, roughness: 0.4 });
  const laterMat = new THREE.MeshStandardMaterial({ color: 0xb5502f, emissive: 0x3d1a0f, emissiveIntensity: 0.35, metalness: 0.2, roughness: 0.6 });

  const tierCount = 5;
  let y = -2.4;
  for (let i = 0; i < tierCount; i++) {
    const size = 1.9 - i * 0.32;
    const height = 0.62;
    const mat = i % 2 === 0 ? goldMat : laterMat;
    const tier = new THREE.Mesh(new THREE.BoxGeometry(size, height, size), mat);
    tier.position.y = y;
    tier.rotation.y = i * 0.18;
    spire.add(tier);

    // thin ring accent between tiers
    if (i < tierCount - 1) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(size * 0.72, 0.03, 8, 24),
        goldMat
      );
      ring.position.y = y + height / 2 + 0.03;
      ring.rotation.x = Math.PI / 2;
      spire.add(ring);
    }
    y += height + 0.08;
  }

  // finial on top
  const finial = new THREE.Mesh(new THREE.OctahedronGeometry(0.34, 0), goldMat);
  finial.position.y = y + 0.3;
  spire.add(finial);

  spire.position.set(2.6, -0.6, 0);
  scene.add(spire);

  // ---- Ember / firefly particles ----
  const particleCount = 220;
  const positions = new Float32Array(particleCount * 3);
  const speeds = new Float32Array(particleCount);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 16;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    speeds[i] = 0.002 + Math.random() * 0.006;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0xd9a441, size: 0.045, transparent: true, opacity: 0.75,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // ---- Resize handling — keep spire biased toward right column on wide screens ----
  function layoutForWidth() {
    const isNarrow = window.innerWidth < 900;
    spire.position.x = isNarrow ? 0 : 2.6;
    spire.scale.setScalar(isNarrow ? 0.72 : 1);
  }
  layoutForWidth();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    layoutForWidth();
  });

  // ---- Animation loop ----
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    spire.rotation.y = elapsed * 0.18;
    spire.position.y = -0.6 + Math.sin(elapsed * 0.6) * 0.08;

    const pos = particleGeo.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3 + 1] += speeds[i];
      if (pos[i * 3 + 1] > 5) pos[i * 3 + 1] = -5;
    }
    particleGeo.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }
  animate();
})();

// ============================================
// APP SHELL — chat interface (shown after sign in)
// ============================================
const appShell = document.getElementById('appShell');
const pageDiv = document.querySelector('.page');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const attachChipApp = document.getElementById('attachChipApp');
const userEmailEl = document.getElementById('userEmail');
const logoutBtn = document.getElementById('logoutBtn');
const chatStatus = document.getElementById('chatStatus');
const statusDot = document.getElementById('statusDot');
const chat = document.getElementById('chat');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const fileInput = document.getElementById('fileInput');
const filePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');
const previewLabel = document.getElementById('previewLabel');
const removeFileBtn = document.getElementById('removeImage');
const memoryList = document.getElementById('memoryList');
const memCount = document.getElementById('memCount');
const filesList = document.getElementById('filesList');
const fileCount = document.getElementById('fileCount');
const clearBtn = document.getElementById('clearBtn');
const appSunMark = document.querySelector('#appShell .sun-mark');

let pendingAttachment = null;

function authHeaders() {
  const token = localStorage.getItem('angkor_token');
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
}

// ============================================
// AUTO SIGN-IN CHECK — runs once on page load
// ============================================
(async function checkExistingSession() {
  const token = localStorage.getItem('angkor_token');
  if (!token) return; // stay on auth screen (default)

  try {
    const res = await fetch('/api/auth/me', { headers: authHeaders() });
    if (!res.ok) throw new Error('invalid session');
    const data = await res.json();
    enterApp(data.user.email);
  } catch (e) {
    localStorage.removeItem('angkor_token');
    localStorage.removeItem('angkor_user_email');
  }
})();

function enterApp(email) {
  pageDiv.style.display = 'none';
  appShell.style.display = 'flex';
  userEmailEl.textContent = email;
  chatStatus.textContent = t('ready');
  loadHistory();
  loadMemory();
  loadFiles();
}

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('angkor_token');
  localStorage.removeItem('angkor_user_email');
  appShell.style.display = 'none';
  pageDiv.style.display = 'flex';
  chat.innerHTML = '';
});

// second language toggle (inside app shell) mirrors the landing one
document.getElementById('langToggleApp')?.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (!btn) return;
  lang = btn.dataset.lang;
  localStorage.setItem('angkor_lang', lang);
  applyLanguage();
});

menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));

// ============================================
// LOAD HISTORY / MEMORY / FILES
// ============================================
async function loadHistory() {
  try {
    const res = await fetch('/api/history/me', { headers: authHeaders() });
    const data = await res.json();
    if (data.history && data.history.length) {
      chat.innerHTML = '';
      data.history.forEach((m) => addMessage(m.role, m.content, m.download_url));
    }
  } catch (e) { console.error('history load failed', e); }
}

async function loadMemory() {
  try {
    const res = await fetch('/api/memory/me', { headers: authHeaders() });
    const data = await res.json();
    renderMemory(data.facts || []);
  } catch (e) { console.error(e); }
}

function renderMemory(facts) {
  memCount.textContent = facts.length;
  if (!facts.length) {
    memoryList.innerHTML = `<div class="empty-hint">${t('memoryEmpty')}</div>`;
    return;
  }
  memoryList.innerHTML = '';
  facts.forEach((f) => {
    const item = document.createElement('div');
    item.className = 'memory-item';
    item.innerHTML = `<span title="${escapeHtml(f.fact)}">${escapeHtml(f.fact)}</span><button class="fact-delete" data-id="${f.id}">✕</button>`;
    memoryList.appendChild(item);
  });
  memoryList.querySelectorAll('.fact-delete').forEach((btn) => {
    btn.addEventListener('click', async () => {
      await fetch(`/api/memory/${btn.dataset.id}`, { method: 'DELETE', headers: authHeaders() });
      loadMemory();
    });
  });
}

async function loadFiles() {
  try {
    const res = await fetch('/api/files', { headers: authHeaders() });
    const data = await res.json();
    renderFiles(data.files || []);
  } catch (e) { console.error(e); }
}

function renderFiles(files) {
  fileCount.textContent = files.length;
  if (!files.length) {
    filesList.innerHTML = `<div class="empty-hint">${t('filesEmpty')}</div>`;
    return;
  }
  filesList.innerHTML = '';
  files.forEach((f) => {
    const item = document.createElement('div');
    item.className = 'file-item';
    item.innerHTML = `<a href="${f.url}" download>${escapeHtml(f.name)}</a>`;
    filesList.appendChild(item);
  });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ============================================
// CHAT MESSAGE RENDERING
// ============================================
function addMessage(role, text, downloadUrl = null, usedWebSearch = false, newFacts = []) {
  const msg = document.createElement('div');
  msg.className = `msg ${role === 'user' ? 'user' : 'bot'}`;

  if (role !== 'user') {
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = '☀';
    msg.appendChild(avatar);
  }

  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  if (usedWebSearch) {
    const badge = document.createElement('div');
    badge.className = 'search-badge';
    badge.textContent = t('searched');
    bubble.appendChild(badge);
  }

  const textNode = document.createElement('div');
  textNode.textContent = text;
  bubble.appendChild(textNode);

  if (downloadUrl) {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.className = 'chat-download-link';
    link.textContent = t('download');
    bubble.appendChild(link);
  }

  if (newFacts && newFacts.length) {
    newFacts.forEach((f) => {
      const badge = document.createElement('div');
      badge.className = 'fact-badge';
      badge.textContent = `${t('remembered')} ${f}`;
      bubble.appendChild(badge);
    });
  }

  msg.appendChild(bubble);
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function addTyping() {
  const msg = document.createElement('div');
  msg.className = 'msg bot';
  msg.id = 'typing-indicator';
  msg.innerHTML = `<div class="avatar">☀</div><div class="bubble typing">${t('thinking')}</div>`;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
  appSunMark?.classList.add('thinking');
}

function removeTyping() {
  document.getElementById('typing-indicator')?.remove();
  appSunMark?.classList.remove('thinking');
}

// ============================================
// SIDEBAR QUICK-ACTION CHIPS
// ============================================
document.querySelectorAll('.tool-chip[data-prompt-km]').forEach((chip) => {
  chip.addEventListener('click', () => {
    chatInput.value = lang === 'km' ? chip.dataset.promptKm : chip.dataset.promptEn;
    chatInput.focus();
    chatInput.dispatchEvent(new Event('input'));
    if (window.innerWidth <= 820) sidebar.classList.remove('open');
  });
});

attachChipApp.addEventListener('click', () => {
  fileInput.click();
  if (window.innerWidth <= 820) sidebar.classList.remove('open');
});

// ============================================
// FILE UPLOAD (image / pdf / text)
// ============================================
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (!file) return;

  if (file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = () => {
      pendingAttachment = { kind: 'image', base64: reader.result.split(',')[1], mediaType: file.type, name: file.name };
      previewImg.style.display = 'block';
      previewImg.src = reader.result;
      previewLabel.textContent = file.name;
      filePreview.style.display = 'flex';
    };
    reader.readAsDataURL(file);
  } else if (file.type === 'application/pdf') {
    const reader = new FileReader();
    reader.onload = () => {
      pendingAttachment = { kind: 'pdf', base64: reader.result.split(',')[1], name: file.name };
      previewImg.style.display = 'none';
      previewLabel.textContent = `📄 ${file.name}`;
      filePreview.style.display = 'flex';
    };
    reader.readAsDataURL(file);
  } else {
    const reader = new FileReader();
    reader.onload = () => {
      pendingAttachment = { kind: 'text', textContent: reader.result, name: file.name };
      previewImg.style.display = 'none';
      previewLabel.textContent = `📝 ${file.name}`;
      filePreview.style.display = 'flex';
    };
    reader.readAsText(file);
  }
});

removeFileBtn.addEventListener('click', () => {
  pendingAttachment = null;
  fileInput.value = '';
  filePreview.style.display = 'none';
});

// ============================================
// SEND CHAT MESSAGE
// ============================================
chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text && !pendingAttachment) return;

  addMessage('user', text || `[${pendingAttachment?.name || 'attachment'}]`);
  const attachmentToSend = pendingAttachment;
  chatInput.value = '';
  chatInput.style.height = 'auto';
  pendingAttachment = null;
  fileInput.value = '';
  filePreview.style.display = 'none';
  sendBtn.disabled = true;
  addTyping();

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify({ message: text, attachment: attachmentToSend }),
    });
    const data = await res.json();
    removeTyping();

    if (data.error) {
      addMessage('bot', `❌ ${data.error}`);
    } else {
      addMessage('bot', data.reply, data.downloadUrl, data.usedWebSearch, data.newFacts);
      if (data.newFacts && data.newFacts.length) loadMemory();
      if (data.downloadUrl) loadFiles();
    }
  } catch (err) {
    removeTyping();
    addMessage('bot', t('connError'));
  } finally {
    sendBtn.disabled = false;
  }
});

clearBtn.addEventListener('click', async () => {
  if (!confirm(t('clearConfirm'))) return;
  await fetch('/api/history/me', { method: 'DELETE', headers: authHeaders() });
  chat.innerHTML = '';
  addMessage('bot', t('clearedMsg'));
});

chatInput.addEventListener('input', () => {
  chatInput.style.height = 'auto';
  chatInput.style.height = chatInput.scrollHeight + 'px';
});

chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    chatForm.requestSubmit();
  }
});
