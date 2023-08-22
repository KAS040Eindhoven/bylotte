<script>

// Controleer of de banner al is weergegeven in deze sessie
var isBannerDisplayed = sessionStorage.getItem("bannerDisplayed");

if (!isBannerDisplayed) {
  // Verkrijg de browser taalinstellingen
  var userLang = navigator.language || navigator.userLanguage;

  // Creëer de modal overlay
  var overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "1000";

  // Sluit de banner en sla op dat de banner is weergegeven en niet meer getoond moet worden
  function closeBanner() {
    document.body.removeChild(overlay);
    sessionStorage.setItem("bannerDisplayed", "true"); // Sla op dat de banner is weergegeven
  }

  // Voeg eventlistener toe om de banner te sluiten als er buiten wordt geklikt
  overlay.addEventListener("click", function(event) {
    if (event.target === overlay) {
      closeBanner();
    }
  });

  // Creëer de banner
  var banner = document.createElement("div");
  banner.style.backgroundColor = "white";
  banner.style.padding = "20px";
  banner.style.border = "1px solid black";
  banner.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
  banner.style.width = "33%"; // Ongeveer 1/3e van het scherm
  banner.style.display = "flex";
  banner.style.flexDirection = "column";
  banner.style.alignItems = "center";

  // Titel
  var title = document.createElement("h2");
  var titleText = "";

  if (userLang.includes("nl")) {
    titleText = "Kies uw taal";
  } else if (userLang.includes("de")) {
    titleText = "Wähle deine Sprache";
  } else {
    titleText = "Choose your language";
  }

  title.textContent = titleText;
  title.style.fontWeight = "bold";
  title.style.marginBottom = "10px";

  // Sluitknop
  var closeButton = document.createElement("button");
  closeButton.innerHTML = "&times;"; // Unicode code for "×" symbol
  closeButton.style.fontWeight = "bold";
  closeButton.style.fontSize = "20px";
  closeButton.style.border = "none";
  closeButton.style.backgroundColor = "transparent";
  closeButton.style.cursor = "pointer";
  closeButton.style.alignSelf = "flex-end"; // Align to the right
  closeButton.onclick = closeBanner;

  // Voeg melding toe over browser taal
  var languageInfo = document.createElement("span");
  var bannerText = "";

  if (userLang.includes("nl")) {
    bannerText = "We zien dat je browsertaal Nederlands is, wil je de website in het Nederlands, Engels of Duits bekijken? Selecteer uw voorkeurstaal uit de onderstaande opties.";
  } else if (userLang.includes("de")) {
    bannerText = "Wir haben erkannt, dass Ihre Browsersprache auf Deutsch eingestellt ist. Möchten Sie die Website in Niederländisch, Englisch oder Deutsch anzeigen lassen?";
  } else {
    bannerText = "We’ve detected that your browser language is set to English. Would you like to view the website in Dutch, English or German? Select your preferred language from the options below.";
  }

  languageInfo.textContent = bannerText;
  languageInfo.style.marginBottom = "10px";

  // Voeg knoppen toe voor verschillende talen
  var languages = [
    { lang: 'Nederlands', link: 'https://www.bylotte.nl' },
    { lang: 'Engels', link: 'https://www.bylotte.com' },
    { lang: 'Duits', link: 'https://www.bylotte.de' }
  ];

  var languageButtons = document.createElement("div");
  languageButtons.style.display = "flex";
  languageButtons.style.marginTop = "10px"; // Add spacing between text and buttons

  languages.forEach(function(language) {
    var langButton = document.createElement("button");
    langButton.textContent = language.lang;
    langButton.style.margin = "0 10px"; // Add horizontal spacing
    langButton.style.backgroundColor = "#ff007b"; // Set background color
    langButton.style.border = "none"; // Remove border
    langButton.style.color = "white"; // Set text color
    langButton.style.cursor = "pointer";
    langButton.onclick = function() {
      window.location.href = language.link;
      closeBanner();
    };

    languageButtons.appendChild(langButton);
  });

  // Voeg elementen toe aan de banner
  banner.appendChild(title);
  banner.appendChild(closeButton);
  banner.appendChild(languageInfo);
  banner.appendChild(languageButtons);

  // Voeg de banner toe aan de overlay
  overlay.appendChild(banner);

  // Voeg de overlay toe aan het lichaam van de pagina
  document.body.appendChild(overlay);
}


</script>