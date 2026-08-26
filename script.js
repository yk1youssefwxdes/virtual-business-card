const contact = {
  firstName: "Youssef",
  lastName: "Kotari",
  organization: "",
  title: "Développeur Full-Stack · Créateur",
  phone: "+212715125245",
  email: "ko.youssef.public@gmail.com",
  website: "https://x-production-bbaa.up.railway.app/",
  linkedin: "https://linkedin.com/in/youssefkotari",
  github: "https://github.com/kotariyoussef"
};

const translations = {
  fr: {
    pageTitle: "Youssef Kotari — Carte de visite numérique",
    pageDescription: "Carte de visite numérique et portfolio de Youssef Kotari, Développeur Full-Stack.",
    status: "Disponible pour des opportunités",
    themeToggleTitle: "Changer de thème",
    greeting: "BONJOUR, JE SUIS",
    name: "Youssef Kotari",
    role: "Développeur Full-Stack · Créateur",
    intro: "Je conçois des applications web pratiques qui transforment des idées et des processus métiers en produits numériques simples, performants et intuitifs.",
    saveContact: "Ajouter aux contacts",
    qrCodeBtn: "QR Code",
    share: "Partager",
    emailLabel: "E-mail",
    phoneLabel: "Téléphone",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    featuredProject: "PROJET EN VEDETTE",
    projectTitle: "Admin Centre d'Éducation",
    liveBadge: "EN LIGNE",
    projectDescription: "Un système de gestion web intuitif et complet conçu pour les centres éducatifs de petite et moyenne taille.",
    viewProject: "Accéder à la plateforme",
    footerName: "Youssef Kotari",
    footerCard: "Carte de visite numérique",
    avatarLetter: "Y",
    qrModalTitle: "Scanner le QR Code",
    qrModalDesc: "Scannez ce code avec votre téléphone pour ajouter le contact de Youssef Kotari.",
    toastContactSaved: "Fichier VCF téléchargé — ouvrez-le pour enregistrer le contact.",
    toastLinkCopied: "Lien de la carte copié dans le presse-papiers.",
    toastCopiedText: "Copié dans le presse-papiers !",
    toastCopyFallback: "Copiez le texte manuellement.",
    shareTitle: "Youssef Kotari — Carte de visite numérique",
    shareText: "Découvrez le profil et les réalisations de Youssef Kotari, Développeur Full-Stack."
  },
  en: {
    pageTitle: "Youssef Kotari — Digital Business Card",
    pageDescription: "Digital business card and portfolio of Youssef Kotari, Full-Stack Developer.",
    status: "Available for opportunities",
    themeToggleTitle: "Toggle theme",
    greeting: "HELLO, I'M",
    name: "Youssef Kotari",
    role: "Full-Stack Developer · Builder",
    intro: "I build practical web applications that turn ideas and business processes into simple, performant, and intuitive digital products.",
    saveContact: "Add to Contacts",
    qrCodeBtn: "QR Code",
    share: "Share",
    emailLabel: "Email",
    phoneLabel: "Phone",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    featuredProject: "FEATURED PROJECT",
    projectTitle: "Admin Educational Centre",
    liveBadge: "LIVE",
    projectDescription: "An intuitive web management system designed for small to medium educational centers.",
    viewProject: "Launch live platform",
    footerName: "Youssef Kotari",
    footerCard: "Digital business card",
    avatarLetter: "Y",
    qrModalTitle: "Scan QR Code",
    qrModalDesc: "Scan this code with your phone camera to quickly add Youssef Kotari to your contacts.",
    toastContactSaved: "VCF file generated — open it to save the contact.",
    toastLinkCopied: "Card link copied to clipboard.",
    toastCopiedText: "Copied to clipboard!",
    toastCopyFallback: "Copy text manually.",
    shareTitle: "Youssef Kotari — Digital Business Card",
    shareText: "Connect with Youssef Kotari, Full-Stack Developer and Digital Creator."
  },
  ar: {
    pageTitle: "يوسف القتاري — بطاقة عمل رقمية",
    pageDescription: "بطاقة عمل رقمية ومعرض أعمال يوسف القتاري، مطور Full-Stack.",
    status: "متاح لفرص العمل والمشاريع",
    themeToggleTitle: "مظهر الصفحة",
    greeting: "مرحباً، أنا",
    name: "يوسف القتاري",
    role: "مطور Full-Stack · صانع حلول رقمية",
    intro: "أقوم ببناء وتطوير تطبيقات ويب عملية تحوّل الأفكار والعمليات التشغيلية إلى منتجات رقمية بسيطة، سريعة وسهلة الاستخدام.",
    saveContact: "إضافة إلى جهات الاتصال",
    qrCodeBtn: "رمز QR",
    share: "مشاركة",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "الهاتف",
    linkedinLabel: "لينكد إن",
    githubLabel: "غيت هاب",
    featuredProject: "مشروع مميز",
    projectTitle: "مركز إدارة التعليم",
    liveBadge: "مباشر",
    projectDescription: "نظام إدارة ويب متكامل ومصمم للمراكز التعليمية الصغيرة والمتوسطة لتسهيل وتنظيم العمليات اليومية.",
    viewProject: "الانتقال إلى المنصة",
    footerName: "يوسف القتاري",
    footerCard: "بطاقة عمل رقمية",
    avatarLetter: "ي",
    qrModalTitle: "مسح رمز QR",
    qrModalDesc: "امسح الكود بكاميرا هاتفك لإضافة بيانات الاتصال الخاصة بيوسف القتاري مباشرة.",
    toastContactSaved: "تم تحميل ملف VCF — افتحه لحفظ جهة الاتصال.",
    toastLinkCopied: "تم نسخ رابط البطاقة إلى الحافظة.",
    toastCopiedText: "تم النسخ إلى الحافظة!",
    toastCopyFallback: "انسخ النص يدوياً.",
    shareTitle: "يوسف القتاري — بطاقة عمل رقمية",
    shareText: "تواصل مع يوسف القتاري، مطور Full-Stack ومبتكر حلول رقمية."
  }
};

let currentLang = "fr";

const toast = document.getElementById("toast");
const themeToggle = document.getElementById("themeToggle");
const qrModal = document.getElementById("qrModal");
const showQRBtn = document.getElementById("showQR");
const closeQRBtn = document.getElementById("closeQR");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function detectVisitorLanguage() {
  const savedLang = localStorage.getItem("card-lang");
  if (savedLang && ["en", "fr", "ar"].includes(savedLang)) {
    return savedLang;
  }

  const browserLanguages = navigator.languages || [navigator.language || ""];
  for (const lang of browserLanguages) {
    if (!lang) continue;
    const code = lang.toLowerCase().split("-")[0];
    if (code === "ar") return "ar";
    if (code === "en") return "en";
    if (code === "fr") return "fr";
  }

  return "fr";
}

function setLanguage(lang) {
  if (!translations[lang]) lang = "fr";
  currentLang = lang;

  const t = translations[lang];
  const isRtl = lang === "ar";

  document.documentElement.lang = lang;
  document.documentElement.dir = isRtl ? "rtl" : "ltr";

  // Update Page Title and Meta Description
  document.title = t.pageTitle;
  const metaDesc = document.getElementById("metaDescription");
  if (metaDesc) metaDesc.setAttribute("content", t.pageDescription);

  // Update theme toggle title
  if (themeToggle) {
    themeToggle.title = t.themeToggleTitle;
    themeToggle.setAttribute("aria-label", t.themeToggleTitle);
  }

  // Update Avatar Letter
  const avatarLetter = document.getElementById("avatarLetter");
  if (avatarLetter) avatarLetter.textContent = t.avatarLetter;

  // Update all [data-i18n] elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update active state in language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang");
    const isActive = btnLang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  localStorage.setItem("card-lang", lang);
}

// Setup Language Switch Buttons
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    setLanguage(lang);
  });
});

function escapeVCard(value) {
  if (!value) return "";
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

function createVCard() {
  const fullName = [contact.firstName, contact.lastName].filter(Boolean).join(" ");
  const rev = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVCard(contact.lastName)};${escapeVCard(contact.firstName)};;;`,
    `FN:${escapeVCard(fullName)}`,
    `TITLE:${escapeVCard(contact.title)}`,
    contact.organization ? `ORG:${escapeVCard(contact.organization)}` : "",
    contact.phone ? `TEL;TYPE=CELL,VOICE:${escapeVCard(contact.phone)}` : "",
    contact.email ? `EMAIL;TYPE=INTERNET,PREF:${escapeVCard(contact.email)}` : "",
    contact.website ? `URL;TYPE=WORK:${contact.website}` : "",
    contact.linkedin ? `URL;TYPE=LinkedIn:${contact.linkedin}` : "",
    contact.github ? `URL;TYPE=GitHub:${contact.github}` : "",
    `REV:${rev}`,
    "END:VCARD"
  ].filter(Boolean).join("\r\n");
}

function triggerSaveContact() {
  const fullName = [contact.firstName, contact.lastName].filter(Boolean).join(" ") || "contact";
  const vcard = createVCard();
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${fullName.replace(/\s+/g, "-").toLowerCase()}-contact.vcf`;
  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast(translations[currentLang].toastContactSaved);
}

document.getElementById("saveContact")?.addEventListener("click", triggerSaveContact);
document.getElementById("modalSaveContact")?.addEventListener("click", () => {
  triggerSaveContact();
  closeQRModal();
});

// QR Modal Logic
function openQRModal() {
  if (!qrModal) return;
  qrModal.classList.add("show");
  qrModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeQRModal() {
  if (!qrModal) return;
  qrModal.classList.remove("show");
  qrModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

showQRBtn?.addEventListener("click", openQRModal);
closeQRBtn?.addEventListener("click", closeQRModal);

qrModal?.addEventListener("click", (e) => {
  if (e.target === qrModal) {
    closeQRModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && qrModal?.classList.contains("show")) {
    closeQRModal();
  }
});

// Native Share or Clipboard Fallback
document.getElementById("shareCard")?.addEventListener("click", async () => {
  const t = translations[currentLang];
  const shareData = {
    title: t.shareTitle,
    text: t.shareText,
    url: window.location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (_) {
      // User cancelled sharing
    }
  } else {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast(t.toastLinkCopied);
    } catch (_) {
      showToast(t.toastCopyFallback);
    }
  }
});

// Theme Switcher
function setTheme(theme) {
  document.body.classList.toggle("light", theme === "light");
  const iconTheme = themeToggle?.querySelector(".icon-theme");
  if (iconTheme) {
    iconTheme.textContent = theme === "light" ? "☾" : "☼";
  } else if (themeToggle) {
    themeToggle.textContent = theme === "light" ? "☾" : "☼";
  }
  localStorage.setItem("card-theme", theme);
}

const savedTheme = localStorage.getItem("card-theme");
setTheme(savedTheme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));

themeToggle?.addEventListener("click", () => {
  setTheme(document.body.classList.contains("light") ? "dark" : "light");
});

// Set Copyright Year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Initialize Language on page load
setLanguage(detectVisitorLanguage());


