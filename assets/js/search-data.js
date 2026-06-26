// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
  id: "nav-home",
    title: "Home",
      section: "Navigation",
        handler: () => {
          window.location.href = "/";
        },
  },{id: "nav-team",
    title: "Team",
      description: "Members of our research group",
        section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "dropdown-international-journals",
    title: "International Journals",
      description: "",
        section: "Dropdown",
          handler: () => {
            window.location.href = "/publications/international-journals/";
          },
            },{id: "dropdown-domestic-journals",
    title: "Domestic Journals",
      description: "",
        section: "Dropdown",
          handler: () => {
            window.location.href = "/publications/domestic-journals/";
          },
            },{id: "dropdown-international-conferences",
    title: "International Conferences",
      description: "",
        section: "Dropdown",
          handler: () => {
            window.location.href = "/publications/international-conferences/";
          },
            },{id: "dropdown-domestic-conferences",
    title: "Domestic Conferences",
      description: "",
        section: "Dropdown",
          handler: () => {
            window.location.href = "/publications/domestic-conferences/";
          },
            },{id: "nav-projects",
    title: "Projects",
      description: "Research projects and funding support",
        section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "dropdown-news",
    title: "News",
      description: "",
        section: "Dropdown",
          handler: () => {
            window.location.href = "/news/";
          },
            },{id: "dropdown-gallery",
    title: "Gallery",
      description: "",
        section: "Dropdown",
          handler: () => {
            window.location.href = "/gallery/";
          },
            },{id: "members-jiah-son",
    title: 'Jiah Son',
      description: "",
        section: "Members",handler: () => {
  window.location.href = "/members/Jiah-son/";
},},{id: "members-changsoo-kim",
    title: 'Changsoo Kim',
      description: "Underwater Acoustics, Diagnostic and Therapeutic Ultrasound",
        section: "Members",handler: () => {
  window.location.href = "/members/changsoo-kim/";
},},{id: "members-cheong-ah-lee",
    title: 'Cheong-Ah Lee',
      description: "Hemodynamics, Numerical simulation of RBC kinetics",
        section: "Members",handler: () => {
  window.location.href = "/members/cheongah-lee/";
},},{id: "members-cynthia-imtiaz",
    title: 'Cynthia Imtiaz',
      description: "Focused ultrasound–mediated drug delivery and neurodegenerative disease models",
        section: "Members",handler: () => {
  window.location.href = "/members/cynthia-imtiaz/";
},},{id: "members-guhnhyeok-ko",
    title: 'GuhnHyeok Ko',
      description: "Underwater Acoustics, Signal Processing",
        section: "Members",handler: () => {
  window.location.href = "/members/guhnhyeok/";
},},{id: "members-junbin-ko",
    title: 'JunBin Ko',
      description: "Therapeutic Ultrasound",
        section: "Members",handler: () => {
  window.location.href = "/members/junbin-ko/";
},},{id: "members-dong-guk-paeng",
    title: 'Dong-Guk Paeng',
      description: "Professor of the Ocean System Engineering Department",
        section: "Members",handler: () => {
  window.location.href = "/members/prof/";
},},{id: "members-sanghyeok-jang",
    title: 'Sanghyeok Jang',
      description: "",
        section: "Members",handler: () => {
  window.location.href = "/members/sanghyeok-jang/";
},},{id: "members-seungju-jeong",
    title: 'Seungju Jeong',
      description: "",
        section: "Members",handler: () => {
  window.location.href = "/members/seungju-jeong/";
},},{id: "news-homepage-launch-we-are-excited-to-announce-the-launch-of-our-new-homepage-please-take-a-look-around-to-learn-more-about-our-research-member-and-projects",
    title: 'Homepage Launch - We are excited to announce the launch of our new...',
      description: "",
        section: "News",},{id: "news-new-paper-published-in-ecological-informatics-symbolic-encoding-of-bottlenose-dolphin-signature-whistles-by-kim-amp-amp-paeng-2026-read",
    title: 'New paper published in Ecological Informatics — Symbolic encoding of bottlenose dolphin signature...',
      description: "",
        section: "News",},{id: "news-obus-lab-members-presented-at-the-2026-spring-conference-of-the-acoustical-society-of-korea-41st-underwater-acoustics-symposium-guhnhyeok-ko-oral-presentation-measurement-of-underwater-radiated-noise-and-source-level-estimation-of-a-small-unmanned-surface-vehicle-ko-kim-kim-park-park-amp-amp-paeng-photos-changsoo-kim-oral-presentation-from-whistle-to-symbol-efficient-encoding-of-indo-pacific-bottlenose-dolphin-signature-whistles-kim-amp-amp-paeng",
    title: 'OBUS Lab members presented at the 2026 Spring Conference of the Acoustical Society...',
      description: "",
        section: "News",},{id: "news-new-paper-published-in-international-journal-of-pharmaceutics-x-focused-ultrasound-mediated-blood-brain-barrier-opening-enhances-delivery-of-rg3-ginseng-nanoparticles-in-a-parkinson-s-disease-mouse-model-by-imtiaz-kim-amp-amp-paeng-2026-read",
    title: 'New paper published in International Journal of Pharmaceutics: X — Focused ultrasound-mediated blood-brain...',
      description: "",
        section: "News",},{id: "news-obus-lab-members-presented-at-the-2026-international-symposium-for-therapeutic-ultrasound-istu-trondheim-norway-junbin-ko-poster-presentation-in-vivo-pig-experiment-using-an-optical-tracking-guidance-system-for-blood-brain-barrier-opening-ko-kim-kim-lee-cheong-amp-amp-paeng-photos-cynthia-imtiaz-poster-and-oral-presentation-mitochondrial-and-motor-function-recovery-of-the-pd-mice-by-rg3-nanoparticle-delivery-through-focused-ultrasound-imtiaz-kim-amp-amp-paeng-photos",
    title: 'OBUS Lab members presented at the 2026 International Symposium for Therapeutic Ultrasound (ISTU),...',
      description: "",
        section: "News",},{id: "projects-diagnostic-ultrasound",
    title: 'Diagnostic Ultrasound',
      description: "RBC aggregation analysis for circulatory disease diagnosis",
        section: "Projects",handler: () => {
  window.location.href = "/projects/diagnostic_ultrasound/";
},},{id: "projects-therapeutic-ultrasound",
    title: 'Therapeutic Ultrasound',
      description: "Focused ultrasound-mediated stem-cell delivery for dementia therapy",
        section: "Projects",handler: () => {
  window.location.href = "/projects/therapeutic_ultrasound/";
},},{id: "projects-underwater-acoustics",
    title: 'Underwater Acoustics',
      description: "Marine bioacoustics and underwater sound source localization",
        section: "Projects",handler: () => {
  window.location.href = "/projects/underwater_acoustics/";
},},{id: "support-focused-ultrasound-foundation",
    title: 'Focused Ultrasound Foundation',
      description: "",
        section: "Support",handler: () => {
  window.location.href = "/support/fusf/";
},},{id: "support-korea-institute-of-marine-science-amp-technology-promotion",
    title: 'Korea Institute of Marine Science &amp;amp; Technology Promotion',
      description: "",
        section: "Support",handler: () => {
  window.location.href = "/support/kimst/";
},},{id: "support-national-research-foundation-of-korea-nrf",
    title: 'National Research Foundation of Korea (NRF)',
      description: "",
        section: "Support",handler: () => {
  window.location.href = "/support/nrf/";
},},{id: "support-korea-technology-and-information-promotion-agency-for-smes",
    title: 'Korea Technology and Information Promotion Agency for SMEs',
      description: "",
        section: "Support",handler: () => {
  window.location.href = "/support/tipa/";
},},{
  id: 'light-theme',
    title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
        section: 'Theme',
          handler: () => {
            setThemeSetting("light");
          },
    },
{
  id: 'dark-theme',
    title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
        section: 'Theme',
          handler: () => {
            setThemeSetting("dark");
          },
    },
{
  id: 'system-theme',
    title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
        section: 'Theme',
          handler: () => {
            setThemeSetting("system");
          },
    },];
