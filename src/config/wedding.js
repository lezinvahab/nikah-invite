// ════════════════════════════════════════════════════════════════════
//  NIKAH INVITATION — CENTRAL CONFIGURATION
// ════════════════════════════════════════════════════════════════════
//  Everything about the wedding is edited in this ONE file.
//  Change names, dates, venue, images, music, WhatsApp and more here —
//  you never need to touch the components.
//
//  Image paths are relative to the `public/` folder, e.g.
//  put a photo in `public/images/` and write  "/images/my-photo.jpg".
//
//  To hide a section, set its `enabled: false`.
// ════════════════════════════════════════════════════════════════════

export const wedding = {
  // ── THE COUPLE ─────────────────────────────────────────────────────
  bride: {
    name: 'HANOON', // shown large in the hero — keep short & elegant
    fullName: 'Hanoon', // used inside sentences
    image: '/images/bride.svg', // portrait — replace with your own photo
  },

  groom: {
    name: 'AHLAM', // shown large in the hero
    fullName: 'Ahlam', // used inside sentences
    image: '/images/groom.svg', // portrait — replace with your own photo
  },

  // ── THE WEDDING DATE ───────────────────────────────────────────────
  date: {
    // Used by the countdown. Keep the local time of the ceremony.
    iso: '2026-09-27T17:00:00',
    // Shown in the hero — format it however you like.
    display: 'SUNDAY · 27 SEPTEMBER 2026',
    // Shown in the footer.
    long: 'Sunday, 27 September 2026',
  },

  // ── NIKAH DETAILS ──────────────────────────────────────────────────
  nikah: {
    time: '5:00 PM',
    venue: "14's Auditorium",
    address: 'Nanminda, Balussery',
    city: 'Kozhikode, Kerala, India',
    // Venue photo used in the "Venue" section. Leave empty ("") to hide it.
    venueImage: '/images/venue.svg',
    // Opens in the "View Location" & "Get Directions" buttons.
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=14%27s%20Auditorium%2C%20Nanminda%2C%20Balussery%2C%20Kozhikode',
  },

  // ── EVENT TIMELINE ─────────────────────────────────────────────────
  // Add or remove entries freely. `time` and `title` are required.
  timeline: [
    { time: '5:00 PM', title: 'Nikah Ceremony', note: 'Followed by warm greetings' },
    { time: '7:00 PM', title: 'Dinner & Celebration', note: 'A feast to share together' },
  ],

  // ── RSVP → WHATSAPP ────────────────────────────────────────────────
  whatsapp: {
    // The number that receives RSVPs. International format, digits only,
    // no "+", spaces or dashes. Example: 447911123456
    number: '447911123456',
    // Custom extra words appended after the guest's message (optional).
    // Leave empty if not needed.
    footerMessage: '',
  },

  // ── OUR STORY ──────────────────────────────────────────────────────
  // This is an arranged marriage — the story section is switched off.
  // Turn `enabled` back to true if you want to add it later.
  story: {
    enabled: false,
    heading: 'Our Story',
    // 2–3 short, tasteful paragraphs.
    paragraphs: [
      'What began as a quiet friendship grew gently, like a garden tended with patience — until one day, our hearts recognised the home they had found in one another.',
      'We believe in kindness, in prayer, in the joy of the simple moments, and in building a life where love is spoken softly and kept faithfully.',
      'With the blessings of our families, we are honoured to begin this beautiful journey — and we would be humbled to have you witness its very first chapter.',
    ],
  },

  // ── FAMILY ─────────────────────────────────────────────────────────
  // Off for now until the parents' names are added.
  // Set `enabled: true` and fill in the two `names` fields below.
  family: {
    enabled: false,
    heading: 'With the blessings of our families',
    bride: {
      title: 'Bride\'s Family',
      names: 'Daughter of Mr. & Mrs. [Father\'s Name]', // e.g. "Mr. & Mrs. Abdul Kareem"
    },
    groom: {
      title: 'Groom\'s Family',
      names: 'Son of Mr. & Mrs. [Father\'s Name]', // e.g. "Mr. & Mrs. Shihabudeen"
    },
  },

  // ── DRESS CODE ─────────────────────────────────────────────────────
  dressCode: {
    enabled: false,
    heading: 'Dress Code',
    label: 'Pastel Elegance',
    note: 'Soft, graceful colours that match the joy of the occasion.',
  },

  // ── SPECIAL NOTE ───────────────────────────────────────────────────
  specialNote: {
    enabled: true,
    text: 'Your presence is the most cherished gift.',
    // A second line shown in smaller text (optional).
    subtext: 'No gifts required — only your company and your prayers.',
  },

  // ── ALBUM / GALLERY ────────────────────────────────────────────────
  // Empty for now — photos will be added AFTER the Nikah ceremony.
  // Every entry can be either:
  //   { src: '/images/my-photo.jpg', alt: '...', span: 'wide' }        → a photo
  //   { driveLink: 'https://drive.google.com/drive/folders/...' }      → a link to
  //              driveLinkPhoto: '/images/cover.jpg'                   --   a full Album
  //              span: 'big'                                           --   on Google Drive
  // `span` is optional: "wide", "tall" or "big" create editorial layouts.
  gallery: [],

  // Shown when the gallery has no photos yet.
  galleryPendingTitle: 'The Album',
  galleryPendingText:
    'Photos from the Nikah ceremony will be available here once the ceremony is over. Check back soon, Insha\'Allah.',

  // ── BACKGROUND MUSIC ───────────────────────────────────────────────
  // Put an audio file in `public/audio/` and point to it, e.g.
  //   music: '/audio/our-song.mp3'
  // Leave as an empty string to hide the music button entirely.
  // Music will NEVER autoplay — guests tap the floating button to listen.
  music: '',

  // ── COUPLE SECTION MESSAGE ─────────────────────────────────────────
  coupleMessage:
    'With hearts full of gratitude and joy, we begin a beautiful new chapter together.',

  // ── OPENING EXPERIENCE ─────────────────────────────────────────────
  // true  → show an elegant "Open Invitation" cover first.
  // false → the hero simply fades in.
  openInvitation: true,

  // ── SHOW / HIDE SECTIONS ───────────────────────────────────────────
  show: {
    countdown: true,
    couple: true,
    story: true, // also controlled by story.enabled
    details: true,
    timeline: true,
    venue: true,
    gallery: true,
    family: true, // also controlled by family.enabled
    dressCode: false, // removed — also controlled by dressCode.enabled
    specialNote: true, // also controlled by specialNote.enabled
    rsvp: false, // removed — also controlled by whatsapp config
  },

  // ── NAVIGATION ─────────────────────────────────────────────────────
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'Details', href: '#details' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Gallery', href: '#gallery' },
  ],
}
