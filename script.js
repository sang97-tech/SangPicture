/*
  SangPicture website settings
  Replace the placeholder values below when the official addresses are ready.
*/
const SITE_CONFIG = {
  latestVersion: "v1.12",
  downloadUrl: "https://github.com/your-account/SangPicture/releases/latest",
  releaseUrl: "https://github.com/your-account/SangPicture/releases",
  hashUrl: "https://github.com/your-account/SangPicture/releases/latest",
  changesUrl: "https://github.com/your-account/SangPicture/releases/latest",
  paypalUrl: "https://www.paypal.me/your-paypal-id",
  kakaoPayUrl: "#",
  kakaoQrImage: "assets/kakaopay-qr.png",
  kakaoRecipient: "이상준",
  officialDownloadUrl: "https://github.com/your-account/SangPicture/releases/latest",
  contactEmail: "your-email@example.com",
  privacyUrl: "#",
  licenseUrl: "#",
  copyrightYear: "2026",
};

const PLACEHOLDER_PATTERNS = [
  "your-account",
  "your-paypal-id",
  "your-email@example.com",
  "example.com",
];

function isPlaceholder(value) {
  return !value || value === "#" || PLACEHOLDER_PATTERNS.some((pattern) => value.includes(pattern));
}

function setLink(id, url, placeholderTarget = "#download") {
  const link = document.getElementById(id);
  if (!link) return;

  const placeholder = isPlaceholder(url);
  link.href = placeholder ? placeholderTarget : url;

  if (!placeholder) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return;
  }

  link.classList.add("is-placeholder");
  link.setAttribute("aria-disabled", "true");
  link.title = "공식 주소를 준비 중입니다";
  link.addEventListener("click", (event) => event.preventDefault());
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

setText("download-version", `현재 표시 버전 · ${SITE_CONFIG.latestVersion}`);
setText("kakao-recipient", SITE_CONFIG.kakaoRecipient);
setText("copyright-year", SITE_CONFIG.copyrightYear);

setLink("hero-download", SITE_CONFIG.downloadUrl);
setLink("download-button", SITE_CONFIG.downloadUrl);
setLink("release-link", SITE_CONFIG.releaseUrl);
setLink("hash-link", SITE_CONFIG.hashUrl);
setLink("changes-link", SITE_CONFIG.changesUrl);
setLink("paypal-link", SITE_CONFIG.paypalUrl, "#support");
setLink("kakao-qr-link", SITE_CONFIG.kakaoPayUrl, "#support");
setLink("official-download-link", SITE_CONFIG.officialDownloadUrl);
setLink("privacy-link", SITE_CONFIG.privacyUrl, "#top");
setLink("license-link", SITE_CONFIG.licenseUrl, "#top");

const emailLink = document.getElementById("contact-email");
if (emailLink) {
  emailLink.textContent = SITE_CONFIG.contactEmail;
  emailLink.href = `mailto:${SITE_CONFIG.contactEmail}`;
  if (isPlaceholder(SITE_CONFIG.contactEmail)) {
    emailLink.classList.add("is-placeholder");
    emailLink.title = "문의 이메일을 준비 중입니다";
  }
}

const qrImage = document.getElementById("kakao-qr");
if (qrImage) {
  qrImage.src = SITE_CONFIG.kakaoQrImage;
  qrImage.alt = `${SITE_CONFIG.kakaoRecipient} 카카오페이 송금 QR`;
}

if (isPlaceholder(SITE_CONFIG.downloadUrl)) {
  const note = document.getElementById("download-placeholder-note");
  if (note) note.hidden = false;
  const heroNote = document.getElementById("hero-download-note");
  if (heroNote) heroNote.textContent = "공식 다운로드 주소를 준비 중입니다. script.js에서 교체할 수 있습니다.";
}

if (isPlaceholder(SITE_CONFIG.paypalUrl)) {
  const note = document.getElementById("support-placeholder-note");
  if (note) note.hidden = false;
}
