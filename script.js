// Paste the Google Apps Script web app link here once it is deployed
// (see "Reply form setup" in OVERVIEW.md), for example
// 'https://script.google.com/macros/s/AKfycb.../exec'.
const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzQN87tciX32bEZkG56PU-ZeuIlJUzy90AWxgCx4fAGvFWfj-Jd3vsq7YSHR-uf6VugTQ/exec';

// Translations. English is the primary language. Edit wording here.
// The names and the #GettingDiGiglioWithIt hashtag stay the same in every language.
const TRANSLATIONS = {
  en: {
    language: 'Language',
    estateAlt: 'Watercolor painting of The House Estate',
    openLabel: 'Open the envelope',
    saveTheDate: 'Save the date',
    city: 'Houston, Texas',
    formalNote: 'Invitation to follow',
    dateEmbroidered: '11.20.2027',
    dateAria: 'Saturday, November 20, 2027',
    tapHint: 'Click the envelope to open',
    scrollCue: 'Details, FAQ and RSVP below',
    faqKicker: 'Good to know',
    faqTitle: 'Questions & Answers',
    faqIntro: 'A few early details. We will update this page as plans come together.',
    inProgress: 'In progress',
    qHotelQ: 'Where should we stay?',
    qHotelA: 'For easy access to our wedding transportation, we recommend staying at one of the hotels below, or at another hotel within about one mile of them. They are all close together in northwest Houston, in the Cypress area.',
    qHotelA2: 'Staying nearby keeps you close to the pickup point for the transportation we are arranging (see the next question), so getting to and from the celebration will be simple.',
    qTransportQ: 'Will there be transportation?',
    qTransportA: 'Yes! We are arranging transportation from a central meeting point near the hotels listed above. Guests will be taken to the church for the ceremony, and then to The House Estate for the reception afterward. Pickup times and the exact location will be provided closer to the date.',
    qTransportA2: 'We are so grateful that so many of you are traveling such a long way to celebrate with us. We want every one of you there, and making the day as easy as possible, especially for our out-of-town guests, is truly the least we can do.',
    qWhenQ: 'When and where is the wedding?',
    qWhenDate: 'Saturday, November 20, 2027',
    qWhenA: 'Our day begins with a Catholic Mass at 3:00 p.m. Following the ceremony, please join us for cocktail hour and the reception at The House Estate in Hockley, Texas.',
    placeCeremony: 'Ceremony, 3:00 p.m.',
    placeReception: 'Cocktail hour and reception, after the Mass',
    qCostQ: 'Any tips for saving on travel?',
    qCostA: 'First, thank you. It means the world to us that you want to celebrate with us, and we truly want everyone there. We know travel is expensive, which is one reason we are arranging transportation for the day.',
    qCostA2: 'A few tips that may help:',
    qCostTip1: 'Track flight prices early. On Google Flights, you can turn on price tracking for your travel dates and get an email when fares drop.',
    qCostTip2: 'Compare rates at the recommended hotels above. Booking sites often have good deals on them.',
    qCostTip3: 'Look at bundles. Sites like Expedia often offer savings when you book your flight and hotel together, and a rental car too if you need one.',
    qCostA3: 'Prices change often, so it is worth checking back from time to time. We hope these tips help you find a great deal, and we cannot wait to celebrate with you!',
    qInviteQ: 'When will the invitation arrive?',
    qInviteA: 'Formal invitations will be mailed soon after the New Year. In the meantime, if you have any questions, please feel free to reach out to either of us.',
    photoSoon: 'Photo coming soon',
    coupleAlt: 'Photo of the couple',
    rsvpKicker: 'Kindly reply',
    replyIntro: 'Let us know your early plans.',
    replyTitle: 'Will we see you in November?',
    setupNotice: 'Preview only. This form is not connected yet, so replies are not being sent.',
    nameLabel: 'Your name',
    namePlaceholder: 'First and last name',
    emailLabel: 'Email address',
    addressLegend: 'Mailing address',
    addr1Label: 'Address line 1',
    addr1Placeholder: 'Street address',
    addr2Label: 'Address line 2 (optional)',
    addr2Placeholder: 'Apartment, suite or unit',
    cityLabel: 'City',
    stateLabel: 'State / Province',
    zipLabel: 'ZIP / Postal code',
    countryLabel: 'Country',
    countryPlaceholder: 'United States',
    attendLegend: 'Are you likely to attend?',
    optYes: 'Likely, yes',
    optMaybe: 'Not sure',
    optNo: 'Unlikely',
    send: 'Send reply',
    finePrint: 'An early indication only, not a formal RSVP.',
    statusNotSent: 'Not sent. This form is not connected yet, so your reply was not submitted.',
    statusSending: 'Sending your reply…',
    statusSuccess: 'Thank you. Your reply has been received.',
    statusError: 'Your reply could not be sent just now. Please try again later.',
    countdownTitle: 'Countdown to the big day',
    countdownTop: 'COUNTDOWN TO',
    countdownBottom: 'the big day',
    countdownWhen: 'Saturday, November 20, 2027, at 3:00 p.m. Central Time',
    cdDays: 'DAYS',
    cdHours: 'HOURS',
    cdMinutes: 'MINUTES',
    cdSeconds: 'SECONDS',
  },
  es: {
    language: 'Idioma',
    estateAlt: 'Acuarela de The House Estate',
    openLabel: 'Abrir el sobre',
    saveTheDate: 'Reserva la fecha',
    city: 'Houston, Texas',
    formalNote: 'La invitación llegará más adelante',
    dateEmbroidered: '20.11.2027',
    dateAria: 'Sábado, 20 de noviembre de 2027',
    tapHint: 'Haz clic en el sobre para abrirlo',
    scrollCue: 'Detalles, preguntas y confirmación más abajo',
    faqKicker: 'Para tener en cuenta',
    faqTitle: 'Preguntas frecuentes',
    faqIntro: 'Algunos detalles iniciales. Iremos actualizando esta página a medida que avancen los planes.',
    inProgress: 'En proceso',
    qHotelQ: '¿Dónde podemos hospedarnos?',
    qHotelA: 'Para llegar fácilmente al transporte de la boda, te recomendamos hospedarte en uno de los siguientes hoteles o en otro que esté a una milla (unos 1.6 km) de ellos. Todos están cerca unos de otros, en el noroeste de Houston, en la zona de Cypress.',
    qHotelA2: 'Hospedarte en esta zona te mantendrá cerca del punto de salida del transporte que estamos organizando (ver la siguiente pregunta), así que ir y volver de la celebración será muy sencillo.',
    qTransportQ: '¿Habrá transporte?',
    qTransportA: '¡Sí! Estamos organizando transporte desde un punto de encuentro céntrico, cerca de los hoteles mencionados arriba. Llevaremos a los invitados a la iglesia para la ceremonia y, después, a The House Estate para la recepción. Los horarios y el lugar exacto de salida se darán a conocer más cerca de la fecha.',
    qTransportA2: 'Agradecemos de corazón que tantos de ustedes viajen desde tan lejos para celebrar con nosotros. Queremos que todos estén ahí, y hacer este día lo más fácil posible, sobre todo para quienes vienen de fuera, es realmente lo mínimo que podemos hacer.',
    qWhenQ: '¿Cuándo y dónde es la boda?',
    qWhenDate: 'Sábado, 20 de noviembre de 2027',
    qWhenA: 'Nuestro día comenzará con una misa católica a las 3:00 p. m. Después de la ceremonia, acompáñanos al cóctel y a la recepción en The House Estate, en Hockley, Texas.',
    placeCeremony: 'Ceremonia, 3:00 p. m.',
    placeReception: 'Cóctel y recepción, después de la misa',
    qCostQ: '¿Algún consejo para ahorrar en el viaje?',
    qCostA: 'Ante todo, gracias. Significa muchísimo para nosotros que quieras celebrar con nosotros, y de verdad queremos que todos estén ahí. Sabemos que viajar es caro, y esa es una de las razones por las que estamos organizando el transporte para ese día.',
    qCostA2: 'Algunos consejos que pueden ayudar:',
    qCostTip1: 'Sigue los precios de los vuelos con tiempo. En Google Flights (Google Vuelos) puedes activar el seguimiento de precios para tus fechas y recibir un correo cuando bajen las tarifas.',
    qCostTip2: 'Compara las tarifas de los hoteles recomendados arriba. En los sitios de reservas suele haber buenas ofertas.',
    qCostTip3: 'Revisa los paquetes. Sitios como Expedia suelen ofrecer descuentos al reservar vuelo y hotel juntos, e incluso un auto de alquiler si lo necesitas.',
    qCostA3: 'Los precios cambian con frecuencia, así que vale la pena revisarlos de vez en cuando. Esperamos que estos consejos te ayuden a encontrar una gran oferta. ¡Tenemos muchas ganas de celebrar contigo!',
    qInviteQ: '¿Cuándo llegará la invitación?',
    qInviteA: 'Las invitaciones formales se enviarán por correo poco después de Año Nuevo. Mientras tanto, si tienes alguna pregunta, no dudes en escribirnos a cualquiera de los dos.',
    photoSoon: 'Foto próximamente',
    coupleAlt: 'Foto de la pareja',
    rsvpKicker: 'Responde, por favor',
    replyIntro: 'Cuéntanos tus planes.',
    replyTitle: '¿Te veremos en noviembre?',
    setupNotice: 'Solo vista previa. Este formulario aún no está conectado, así que las respuestas no se están enviando.',
    nameLabel: 'Tu nombre',
    namePlaceholder: 'Nombre y apellido',
    emailLabel: 'Correo electrónico',
    addressLegend: 'Dirección postal',
    addr1Label: 'Dirección (línea 1)',
    addr1Placeholder: 'Calle y número',
    addr2Label: 'Dirección (línea 2, opcional)',
    addr2Placeholder: 'Apartamento, piso o unidad',
    cityLabel: 'Ciudad',
    stateLabel: 'Estado / Provincia',
    zipLabel: 'Código postal',
    countryLabel: 'País',
    countryPlaceholder: 'Estados Unidos',
    attendLegend: '¿Crees que podrás asistir?',
    optYes: 'Probablemente sí',
    optMaybe: 'Aún no lo sé',
    optNo: 'Probablemente no',
    send: 'Enviar respuesta',
    finePrint: 'Es solo una respuesta preliminar, no la confirmación formal.',
    statusNotSent: 'No enviado. Este formulario aún no está conectado, así que tu respuesta no se envió.',
    statusSending: 'Enviando tu respuesta…',
    statusSuccess: 'Gracias. Hemos recibido tu respuesta.',
    statusError: 'No se pudo enviar tu respuesta. Inténtalo de nuevo más tarde.',
    countdownTitle: 'Cuenta regresiva para el gran día',
    countdownTop: 'CUENTA REGRESIVA',
    countdownBottom: 'para el gran día',
    countdownWhen: 'Sábado, 20 de noviembre de 2027, a las 3:00 p. m., hora del centro',
    cdDays: 'DÍAS',
    cdHours: 'HORAS',
    cdMinutes: 'MINUTOS',
    cdSeconds: 'SEGUNDOS',
  },
  pl: {
    language: 'Język',
    estateAlt: 'Akwarela przedstawiająca The House Estate',
    openLabel: 'Otwórz kopertę',
    saveTheDate: 'Zarezerwuj datę',
    city: 'Houston, Teksas',
    formalNote: 'Zaproszenie wkrótce',
    dateEmbroidered: '20.11.2027',
    dateAria: 'Sobota, 20 listopada 2027',
    tapHint: 'Kliknij kopertę, aby ją otworzyć',
    scrollCue: 'Szczegóły, pytania i potwierdzenie poniżej',
    faqKicker: 'Warto wiedzieć',
    faqTitle: 'Pytania i odpowiedzi',
    faqIntro: 'Kilka wstępnych informacji. Będziemy aktualizować tę stronę, gdy plany nabiorą kształtu.',
    inProgress: 'W trakcie',
    qHotelQ: 'Gdzie się zatrzymać?',
    qHotelA: 'Aby łatwo dotrzeć do transportu weselnego, polecamy nocleg w jednym z poniższych hoteli lub w innym hotelu w promieniu około mili (ok. 1,6 km) od nich. Wszystkie leżą blisko siebie w północno-zachodnim Houston, w okolicy Cypress.',
    qHotelA2: 'Nocleg w tej okolicy oznacza, że będziecie blisko miejsca odjazdu organizowanego przez nas transportu (zob. następne pytanie), więc dojazd na uroczystość i powrót będą bardzo proste.',
    qTransportQ: 'Czy będzie zapewniony transport?',
    qTransportA: 'Tak! Organizujemy transport z centralnego miejsca zbiórki w pobliżu hoteli wymienionych powyżej. Goście zostaną zawiezieni do kościoła na ceremonię, a następnie do The House Estate na przyjęcie. Godziny i dokładne miejsce odjazdu podamy bliżej terminu.',
    qTransportA2: 'Jesteśmy ogromnie wdzięczni, że tak wielu z Was pokonuje tak długą drogę, by świętować razem z nami. Chcemy, żebyście wszyscy byli z nami, a ułatwienie Wam tego dnia, zwłaszcza gościom spoza miasta, to naprawdę najmniej, co możemy zrobić.',
    qWhenQ: 'Kiedy i gdzie odbędzie się ślub?',
    qWhenDate: 'Sobota, 20 listopada 2027',
    qWhenA: 'Nasz dzień rozpocznie się mszą świętą o godz. 15:00. Po ceremonii zapraszamy na koktajl i przyjęcie weselne w The House Estate w Hockley w Teksasie.',
    placeCeremony: 'Ceremonia, godz. 15:00',
    placeReception: 'Koktajl i przyjęcie, po mszy',
    qCostQ: 'Jak zaoszczędzić na podróży?',
    qCostA: 'Przede wszystkim dziękujemy. To dla nas bardzo wiele znaczy, że chcecie świętować razem z nami, i naprawdę chcemy, żeby wszyscy mogli przyjechać. Wiemy, że podróże są drogie, i między innymi dlatego organizujemy transport na ten dzień.',
    qCostA2: 'Kilka wskazówek, które mogą pomóc:',
    qCostTip1: 'Śledźcie ceny lotów z wyprzedzeniem. W Google Flights (Loty Google) możecie włączyć śledzenie cen dla swoich dat i dostać e-mail, gdy ceny spadną.',
    qCostTip2: 'Porównajcie ceny w polecanych hotelach powyżej. Na stronach rezerwacyjnych często są dobre oferty.',
    qCostTip3: 'Sprawdźcie pakiety. Serwisy takie jak Expedia często oferują zniżki przy rezerwacji lotu i hotelu razem, a w razie potrzeby także wynajmu samochodu.',
    qCostA3: 'Ceny często się zmieniają, więc warto sprawdzać je od czasu do czasu. Mamy nadzieję, że te wskazówki pomogą Wam znaleźć świetną ofertę. Nie możemy się doczekać wspólnego świętowania!',
    qInviteQ: 'Kiedy przyjdzie zaproszenie?',
    qInviteA: 'Oficjalne zaproszenia wyślemy pocztą wkrótce po Nowym Roku. W międzyczasie, jeśli macie jakiekolwiek pytania, śmiało piszcie do któregokolwiek z nas.',
    photoSoon: 'Zdjęcie wkrótce',
    coupleAlt: 'Zdjęcie pary',
    rsvpKicker: 'Prosimy o odpowiedź',
    replyIntro: 'Daj nam znać o swoich planach.',
    replyTitle: 'Czy zobaczymy się w listopadzie?',
    setupNotice: 'Tylko podgląd. Formularz nie jest jeszcze podłączony, więc odpowiedzi nie są wysyłane.',
    nameLabel: 'Imię i nazwisko',
    namePlaceholder: 'Imię i nazwisko',
    emailLabel: 'Adres e-mail',
    addressLegend: 'Adres pocztowy',
    addr1Label: 'Adres (linia 1)',
    addr1Placeholder: 'Ulica i numer',
    addr2Label: 'Adres (linia 2, opcjonalnie)',
    addr2Placeholder: 'Numer mieszkania lub lokalu',
    cityLabel: 'Miasto',
    stateLabel: 'Stan / Województwo',
    zipLabel: 'Kod pocztowy',
    countryLabel: 'Kraj',
    countryPlaceholder: 'Stany Zjednoczone',
    attendLegend: 'Czy planujesz przybyć?',
    optYes: 'Raczej tak',
    optMaybe: 'Jeszcze nie wiem',
    optNo: 'Raczej nie',
    send: 'Wyślij odpowiedź',
    finePrint: 'To tylko wstępna deklaracja, a nie oficjalne potwierdzenie.',
    statusNotSent: 'Nie wysłano. Formularz nie jest jeszcze podłączony, więc Twoja odpowiedź nie została wysłana.',
    statusSending: 'Wysyłanie odpowiedzi…',
    statusSuccess: 'Dziękujemy. Otrzymaliśmy Twoją odpowiedź.',
    statusError: 'Nie udało się wysłać odpowiedzi. Spróbuj ponownie później.',
    countdownTitle: 'Odliczanie do wielkiego dnia',
    countdownTop: 'ODLICZANIE',
    countdownBottom: 'do wielkiego dnia',
    countdownWhen: 'Sobota, 20 listopada 2027, godz. 15:00 czasu centralnego (Teksas)',
    cdDays: 'DNI',
    cdHours: 'GODZIN',
    cdMinutes: 'MINUT',
    cdSeconds: 'SEKUND',
  },
};

const root = document.documentElement;
const params = new URLSearchParams(window.location.search);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const scene = document.querySelector('#scene');
const openButton = document.querySelector('#open-envelope');
const card = document.querySelector('#card');
const cardTitle = document.querySelector('#card-names');
const doily = document.querySelector('#doily');

const form = document.querySelector('#reply-form');
const statusMessage = document.querySelector('#form-status');
const setupNotice = document.querySelector('#setup-notice');
const submitButton = form.querySelector('button[type="submit"]');
const languageField = document.querySelector('#language-field');
const langButtons = document.querySelectorAll('.lang-switch button');

let currentLang = 'en';
let currentStatus = null;

// Language

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS.en[key] || '';
}

function applyLanguage(lang) {
  currentLang = TRANSLATIONS[lang] ? lang : 'en';
  root.lang = currentLang;
  languageField.value = currentLang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    el.alt = t(el.dataset.i18nAlt);
  });
  langButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === currentLang));
  });
  if (currentStatus) {
    showStatus(currentStatus.key, currentStatus.isError);
  }
  fitText();

  try {
    localStorage.setItem('std-lang', currentLang);
  } catch (error) {
    // Storage can be unavailable (private mode); the language still applies.
  }
}

function initialLanguage() {
  const fromUrl = params.get('lang');
  if (fromUrl && TRANSLATIONS[fromUrl]) return fromUrl;
  try {
    const saved = localStorage.getItem('std-lang');
    if (saved && TRANSLATIONS[saved]) return saved;
  } catch (error) {
    // Ignore unavailable storage.
  }
  return 'en';
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

// Envelope

card.inert = true;
doily.inert = true;

function openEnvelope(instant) {
  if (scene.classList.contains('is-open')) return;
  if (instant) root.classList.add('no-motion');
  scene.classList.add('is-open');
  root.classList.add('is-open');
  openButton.setAttribute('aria-expanded', 'true');
  card.inert = false;
  doily.inert = false;
  fitText();

  setTimeout(() => {
    cardTitle.focus({ preventScroll: true });
  }, instant ? 0 : 1600);
}

openButton.addEventListener('click', () => openEnvelope(reducedMotion));

// Add ?open to the address to skip straight to the opened view (handy for previews).
// With a section too, e.g. ?open#rsvp, the page jumps to that section.
if (params.has('open')) {
  openEnvelope(true);
  const target = window.location.hash && document.querySelector(window.location.hash);
  if (target) target.scrollIntoView({ behavior: 'instant' });
}

// Photo frames: show "Photo coming soon" until assets/photos/photo-1.jpg (etc.) exist.

document.querySelectorAll('.frame-photo img').forEach((img) => {
  const markMissing = () => img.parentElement.classList.add('missing');
  if (img.complete && img.naturalWidth === 0) markMissing();
  img.addEventListener('error', markMissing);
});

// Countdown doilies: counts down to 3:00 p.m. Central Time (CST, UTC-6) on November 20, 2027.

const WEDDING_TIME = Date.UTC(2027, 10, 20, 21, 0, 0);
const countdownParts = {
  days: document.querySelector('#cd-days'),
  hours: document.querySelector('#cd-hours'),
  minutes: document.querySelector('#cd-minutes'),
  seconds: document.querySelector('#cd-seconds'),
};

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateCountdown() {
  const left = Math.max(0, Math.floor((WEDDING_TIME - Date.now()) / 1000));
  countdownParts.days.textContent = String(Math.floor(left / 86400));
  countdownParts.hours.textContent = pad(Math.floor((left % 86400) / 3600));
  countdownParts.minutes.textContent = pad(Math.floor((left % 3600) / 60));
  countdownParts.seconds.textContent = pad(left % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Embroidered words shrink (never grow) to stay inside their doily, e.g. for longer translations.
function fitText() {
  document.querySelectorAll('[data-fit]').forEach((el) => {
    const base = Number(el.dataset.size);
    const max = Number(el.dataset.fit);
    el.setAttribute('font-size', base);
    const width = el.getComputedTextLength();
    if (width > max) {
      el.setAttribute('font-size', (base / (width / max)).toFixed(2));
    }
  });
}

if (document.fonts) {
  document.fonts.ready.then(fitText);
  document.fonts.addEventListener('loadingdone', fitText);
}

// Reply form

const isConfigured = /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(FORM_ENDPOINT);

if (isConfigured) {
  setupNotice.hidden = true;
}

function showStatus(key, isError) {
  currentStatus = { key, isError };
  statusMessage.textContent = t(key);
  statusMessage.classList.toggle('error', Boolean(isError));
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!isConfigured) {
    showStatus('statusNotSent', true);
    return;
  }

  submitButton.disabled = true;
  submitButton.setAttribute('aria-busy', 'true');
  showStatus('statusSending', false);

  try {
    // URL-encoded body with no custom headers, so the browser sends it to
    // Google directly without a CORS preflight.
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: new URLSearchParams(new FormData(form)),
    });

    if (!response.ok) {
      throw new Error('Form service returned ' + response.status);
    }

    // Only a confirmed save counts as sent.
    const result = await response.json();
    if (!result || result.result !== 'success') {
      throw new Error('Form service did not confirm the reply');
    }

    form.reset();
    languageField.value = currentLang;
    showStatus('statusSuccess', false);
  } catch (error) {
    showStatus('statusError', true);
  } finally {
    submitButton.disabled = false;
    submitButton.removeAttribute('aria-busy');
  }
});

applyLanguage(initialLanguage());
