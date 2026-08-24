const contact = {
  firstName: "Youssef",
  lastName: "Kotari",
  organization: "",
  title: "Full-Stack Developer",
  phone: "+212715125245",
  email: "ko.youssef.public@example.com",
  website: "https://x-production-bbaa.up.railway.app/",
  linkedin: "",
  github: "https://github.com/kotariyoussef"
};

const translations = {
  fr: {
    pageTitle: "Youssef Kotari — Carte de visite numérique",
    pageDescription: "Carte de visite numérique et portfolio.",
    status: "Disponible pour des opportunités",
    themeToggleTitle: "Changer de thème",
    greeting: "BONJOUR, JE SUIS",
    name: "Youssef Kotari",
    role: "Développeur Full-Stack · Créateur",
    intro: "Je conçois des applications web pratiques qui transforment des idées et des processus métiers en produits numériques simples et intuitifs.",
    saveContact: "Enregistrer le contact",
    share: "Partager",
    emailLabel: "E-mail",
    phoneLabel: "Téléphone",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    featuredProject: "PROJET EN VEDETTE",
    projectTitle: "Admin Centre d'education",
    liveBadge: "EN LIGNE",
    projectDescription: "Une plateforme d'administration web conçue pour centraliser la gestion et faciliter le contrôle des opérations quotidiennes.",
    viewProject: "Voir le projet",
    footerName: "Youssef Kotari",
    footerCard: "Carte de visite numérique",
    avatarLetter: "Y",
    toastContactSaved: "Fichier contact créé — ouvrez-le pour enregistrer le contact.",
    toastLinkCopied: "Lien de la carte copié dans le presse-papiers.",
    toastCopyFallback: "Copiez l'URL de la page depuis votre navigateur.",
    shareTitle: "Youssef Kotari — Carte de visite numérique",
    shareText: "Découvrez le profil et les réalisations de Youssef Kotari, Développeur Full-Stack."
  },
  en: {
    pageTitle: "Youssef Kotari — Digital Business Card",
    pageDescription: "Digital business card and portfolio.",
    status: "Available for opportunities",
    themeToggleTitle: "Toggle theme",
    greeting: "HELLO, I'M",
    name: "Youssef Kotari",
    role: "Full-Stack Developer · Builder",
    intro: "I build practical web applications that turn ideas and business processes into simple, usable digital products.",
    saveContact: "Save contact",
    share: "Share",
    emailLabel: "Email",
    phoneLabel: "Phone",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    featuredProject: "FEATURED PROJECT",
    projectTitle: "Admin School Centre",
    liveBadge: "LIVE",
    projectDescription: "A web-based administration platform designed to centralize management workflows and make day-to-day operations easier to control.",
    viewProject: "View project",
    footerName: "Youssef Kotari",
    footerCard: "Digital business card",
    avatarLetter: "Y",
    toastContactSaved: "Contact file created — open it to add the contact.",
    toastLinkCopied: "Card link copied to clipboard.",
    toastCopyFallback: "Copy the page URL from your browser.",
    shareTitle: "Youssef Kotari — Digital Business Card",
    shareText: "Connect with Youssef Kotari, Full-Stack Developer."
  },
  ar: {
    pageTitle: "يوسف القتاري — بطاقة عمل رقمية",
    pageDescription: "بطاقة عمل رقمية ومعرض أعمال.",
    status: "متاح لفرص العمل والمشاريع",
    themeToggleTitle: "تبديل المظهر",
    greeting: "مرحباً، أنا",
    name: "يوسف القتاري",
    role: "مطور Full-Stack · صانع حلول رقمية",
    intro: "أقوم ببناء وتطوير تطبيقات ويب عملية تحوّل الأفكار والعمليات التشغيلية إلى منتجات رقمية بسيطة وسهلة الاستخدام.",
    saveContact: "حفظ جهة الاتصال",
    share: "مشاركة",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "الهاتف",
    linkedinLabel: "لينكد إن",
    githubLabel: "غيت هاب",
    featuredProject: "مشروع مميز",
    projectTitle: "مركز إدارة التعليم",
    liveBadge: "مباشر",
    projectDescription: "منصة إدارة ويب مصممة لمركزية سير العمل وتسهيل متابعة وإدارة العمليات اليومية بكفاءة.",
    viewProject: "عرض المشروع",
    footerName: "يوسف القتاري",
    footerCard: "بطاقة عمل رقمية",
    avatarLetter: "ي",
    toastContactSaved: "تم إنشاء ملف جهة الاتصال — افتحه لحفظه.",
    toastLinkCopied: "تم نسخ رابط البطاقة إلى الحافظة.",
    toastCopyFallback: "انسخ رابط الصفحة من شريط المتصفح.",
    shareTitle: "يوسف القتاري — بطاقة عمل رقمية",
    shareText: "تواصل مع يوسف القتاري، مطور Full-Stack ومبتكر حلول رقمية."
  }
};

let currentLang = "fr";

const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
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

  // Default is French if visitor language doesn't match en, fr or ar
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

  // Update theme toggle aria-label and title
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
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

function createVCard() {
  const fullName = [contact.firstName, contact.lastName].filter(Boolean).join(" ");
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVCard(contact.lastName)};${escapeVCard(contact.firstName)};;;`,
    `FN:${escapeVCard(fullName)}`,
    `TITLE:${escapeVCard(contact.title)}`,
    contact.organization ? `ORG:${escapeVCard(contact.organization)}` : "",
    contact.phone ? `TEL;TYPE=CELL:${escapeVCard(contact.phone)}` : "",
    contact.email ? `EMAIL;TYPE=INTERNET:${escapeVCard(contact.email)}` : "",
    contact.website ? `URL:${contact.website}` : "",
    contact.linkedin ? `URL;TYPE=LinkedIn:${contact.linkedin}` : "",
    contact.github ? `URL;TYPE=GitHub:${contact.github}` : "",
    "END:VCARD"
  ].filter(Boolean).join("\r\n");
}

document.getElementById("saveContact").addEventListener("click", () => {
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
});

document.getElementById("shareCard").addEventListener("click", async () => {
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
      // User cancelled sharing.
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

const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  document.body.classList.toggle("light", theme === "light");
  themeToggle.textContent = theme === "light" ? "☾" : "☼";
  localStorage.setItem("card-theme", theme);
}

const savedTheme = localStorage.getItem("card-theme");
setTheme(savedTheme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));

themeToggle.addEventListener("click", () => {
  setTheme(document.body.classList.contains("light") ? "dark" : "light");
});

document.getElementById("year").textContent = new Date().getFullYear();

// Initialize Language on page load
setLanguage(detectVisitorLanguage());

