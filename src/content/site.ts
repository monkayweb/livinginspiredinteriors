export const site = {
  name: "Living Inspired Interiors",
  shortName: "Living Inspired",
  domain: "livinginspiredinteriors.com",
  url: "https://livinginspiredinteriors.com",
  established: 2020,
  tagline:
    "Boutique interior architecture and design studio, Johannesburg.",
  address: {
    line1: "273a Side Road",
    line2: "Morningside, Johannesburg",
    postal: "2196",
    country: "South Africa",
  },
  email: "hello@livinginspiredinteriors.com",
  instagram: {
    handle: "@livinginspired__",
    url: "https://www.instagram.com/livinginspired__/",
  },
  founder: {
    name: "Tanya Solomon",
    role: "Founder and Creative Director",
  },
  credit: {
    name: "Monkay",
    url: "https://monkay.co",
  },
};

export const nav = [
  { label: "Studio", href: "/studio" },
  { label: "Projects", href: "/projects" },
  { label: "Recognition", href: "/recognition" },
  { label: "Contact", href: "/contact" },
] as const;

export const manifesto =
  "Our mission is to transform everyday spaces into inspired sanctuaries that reflect the soul, style and aspirations of those who inhabit them.";

export const manifestoSupport =
  "We design with intention, blending elegance, functionality and wellness to craft environments that spark joy, nurture connection and elevate daily living. Rooted in collaboration, conscious craftsmanship and storytelling through design, we curate interiors that are both aesthetically striking and deeply personal.";

export const profile = [
  "Living Inspired Interiors is a boutique interior architecture and design studio specialising in bespoke residential and commercial interiors throughout South Africa and internationally.",
  "Founded in 2020 by Tanya Solomon, the studio was established with a vision of creating highly personalised spaces that enrich everyday living through thoughtful design, exceptional craftsmanship and intentional curation.",
  "Our work goes beyond decorating interiors. Every project begins by understanding how our clients live, work and experience their environments. We believe successful design should not only be visually beautiful but should improve wellbeing, encourage connection and stand the test of time.",
  "Within five years the studio has become recognised for refined, luxurious spaces characterised by layered textures, bespoke detailing, sculptural lighting and sophisticated material palettes. Each project reflects our philosophy that luxury lies in craftsmanship, authenticity and meticulous attention to detail.",
];

export const capabilities = [
  {
    title: "Interior architecture",
    body: "Spatial planning, structural reconfiguration and the detailing that turns a shell into a home.",
    image: "/images/sandown-dining-hero.jpg",
  },
  {
    title: "Full scale renovations and new builds",
    body: "End to end delivery from first drawing to final styling, on site and on programme.",
    image: "/images/athol-covered-patio.jpg",
  },
  {
    title: "Bespoke furniture and joinery",
    body: "Pieces drawn for one room only, made with makers we have worked with for years.",
    image: "/images/sandown-dining-detail.jpg",
  },
  {
    title: "Lighting design",
    body: "Sculptural installations and layered ambient schemes that shape a space after dark.",
    image: "/images/athol-pendant-detail.jpg",
  },
  {
    title: "Art curation",
    body: "Work selected for the room and the owner, never for the wall alone.",
    image: "/images/sandown-tv-lounge-art.jpg",
  },
  {
    title: "Project management",
    body: "One point of contact across contractors, suppliers and installers for the life of the build.",
    image: "/images/sandown-formal-lounge.jpg",
  },
];

export const approach = [
  {
    index: "01",
    title: "Understand",
    body: "We start with how you live. Routines, rituals, the rooms you actually use and the ones you never do.",
  },
  {
    index: "02",
    title: "Curate",
    body: "Material palettes, lighting, artwork and furniture are chosen as one language rather than room by room.",
  },
  {
    index: "03",
    title: "Craft",
    body: "Bespoke joinery, custom furniture and specialist finishes are drawn, prototyped and made for the space.",
  },
  {
    index: "04",
    title: "Deliver",
    body: "We manage the build, the installation and the final styling so the handover is a finished home.",
  },
];

export const recognition = [
  {
    year: "2025",
    title: "Women in Design",
    outlet: "SA Home Owner Magazine",
    body: "Living Inspired Interiors was recognised by SA Home Owner Magazine as one of South Africa's leading Women in Design, celebrating Tanya Solomon's contribution to the industry and her growing influence as a female entrepreneur within the South African design landscape.",
    image: "/images/sandown-formal-lounge-portrait.jpg",
  },
  {
    year: "2025",
    title: "Design 100",
    outlet: "Design 100",
    body: "The studio was honoured as part of the prestigious Design 100, recognising Living Inspired Interiors among the country's most exciting and influential emerging design studios. The acknowledgement reflects a dedication to exceptional design, bespoke detailing and interiors that are both timeless and deeply personal.",
    image: "/images/sandown-dining-overhead.jpg",
  },
  {
    year: "2024",
    title: "Guest speaker and industry expert",
    outlet: "Decorex Africa",
    body: "Living Inspired Interiors was invited to participate in Decorex Africa, one of the continent's leading design exhibitions, where Tanya Solomon contributed as a guest speaker and industry expert on contemporary interior design, entrepreneurship and creating meaningful spaces.",
    image: "/images/sandown-dining-angle.jpg",
  },
  {
    year: "2023",
    title: "Cover feature and editorials",
    outlet: "SA Home Owner Magazine",
    body: "The studio has been featured in SA Home Owner Magazine on numerous occasions, culminating in a magazine cover feature. These editorials showcased the studio's design philosophy, bespoke residential projects and commitment to refined, luxurious interiors that reflect each client's lifestyle.",
    image: "/images/athol-principal-suite.jpg",
  },
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  location: string;
  shortLocation: string;
  year: string;
  timeline: string;
  type: string;
  size: string;
  style: string[];
  intro: string;
  body: string[];
  site: string[];
  cover: string;
  gallery: { src: string; caption: string; span?: "full" | "half" }[];
  teams: { role: string; name: string }[];
  suppliers: string[];
};

export const projects: Project[] = [
  {
    slug: "sandown-residence",
    index: "01",
    title: "Sandown Residence",
    subtitle: "A brutalist shell turned into a warm, cohesive family home.",
    location: "33 Edward Rubenstein Drive, Sandown, Sandton, Johannesburg",
    shortLocation: "Sandown, Johannesburg",
    year: "2026",
    timeline: "13 January 2026 to 28 May 2026",
    type: "Private residential",
    size: "2 104 sqm site",
    style: ["Contemporary modern", "Textured minimalism", "Monochrome"],
    intro:
      "The Sandown Residence was conceived as a celebration of contemporary luxury, an environment where architecture, bespoke craftsmanship and carefully curated interiors come together to create a home that is both timeless and deeply personal.",
    body: [
      "Designed by Living Inspired Interiors, the project focused on transforming a newly built residence into a sophisticated sanctuary that reflects the lifestyle, aspirations and individuality of its owners.",
      "From the outset, the vision was a seamless dialogue between every space within the home. Rather than designing each room independently, we approached the residence as a complete journey, ensuring that every material, finish, texture and furnishing contributed to one cohesive design language. Warm timber tones, tactile fabrics, natural stone, layered neutrals and sculptural lighting were combined to establish a sense of understated elegance throughout.",
      "The double volume dining room serves as the architectural centrepiece of the home. A bespoke solid oak twelve seater dining table anchors the space, surrounded by custom designed upholstered dining chairs that prioritise both comfort and sculptural form. Above, an installation of oversized pendants descends dramatically through the volume, creating movement, visual rhythm and an unforgettable focal point. Textured limewash walls soften the architecture while allowing natural light to interact with the finishes through the day.",
      "Adjacent living spaces were designed to promote connection while keeping individual identities. The formal lounge embraces refined simplicity through custom furniture, layered textiles and carefully balanced proportions. The TV lounge offers a more relaxed atmosphere where luxurious comfort meets contemporary sophistication. Artwork was selected specifically for the project, introducing personality and depth while complementing the restrained palette and architectural character.",
    ],
    site: [
      "A brutalist architectural base served as the perfect canvas for the interior.",
      "The two storey home features five en suite bedrooms, a pyjama lounge, formal lounge, TV lounge, kids lounge, poolside patio and covered patio.",
      "It includes two double garages, a pool and deck, a main kitchen, walk in fridge, pantry, breakfast area and bar.",
    ],
    cover: "/images/sandown-dining-hero.jpg",
    gallery: [
      { src: "/images/sandown-dining-hero.jpg", caption: "Double volume dining room", span: "half" },
      { src: "/images/sandown-dining-angle.jpg", caption: "Oversized pendant installation", span: "half" },
      { src: "/images/sandown-dining-overhead.jpg", caption: "Bespoke solid oak twelve seater", span: "full" },
      { src: "/images/sandown-dining-detail.jpg", caption: "Oak grain and dried arrangements", span: "half" },
      { src: "/images/sandown-formal-lounge.jpg", caption: "Formal lounge", span: "half" },
      { src: "/images/sandown-formal-lounge-portrait.jpg", caption: "Formal lounge with Tanya Solomon", span: "full" },
      { src: "/images/sandown-tv-lounge.jpg", caption: "TV lounge", span: "half" },
      { src: "/images/sandown-tv-lounge-sheers.jpg", caption: "Velvet seating against sheers", span: "half" },
      { src: "/images/sandown-tv-lounge-art.jpg", caption: "Curated artwork and mirror composition", span: "half" },
      { src: "/images/sandown-guest-suite.jpg", caption: "Guest suite in monochrome", span: "half" },
    ],
    teams: [
      { role: "Hard furniture", name: "Landmarq Road" },
      { role: "Soft furniture", name: "Gracious Living Spaces" },
      { role: "Joinery", name: "Designer Projects" },
      { role: "Cushions", name: "RJL Interiors" },
    ],
    suppliers: [
      "Home Fabrics",
      "Warwick",
      "Hertex",
      "Casamance",
      "Jaipur Rugs",
      "Romo",
      "ADF Outdoor",
    ],
  },
  {
    slug: "athol-house",
    index: "02",
    title: "Athol House",
    subtitle: "Architectural clarity, material harmony and curated warmth.",
    location: "The Wahlberg Estate, Atholl, Johannesburg",
    shortLocation: "Atholl, Johannesburg",
    year: "2025",
    timeline: "January 2024 to January 2025",
    type: "Private residential",
    size: "367 to 560 sqm",
    style: ["Warm neutrals", "Material integrity", "Indoor outdoor"],
    intro:
      "A refined residential interior that celebrates architectural clarity, material harmony and curated warmth. The brief called for a luxurious, livable home, one that balances striking contemporary lines with softness, soul and individual character.",
    body: [
      "With spaces designed to be cohesive yet distinctive, each room offers its own narrative through bespoke furniture, tactile layers and a grounded, neutral palette punctuated by bold details.",
      "A strong focus was placed on material integrity, thoughtful lighting and a seamless indoor to outdoor flow, enhancing everyday living with understated elegance.",
    ],
    site: [
      "The Wahlberg Estate is situated in Atholl, behind an additional security boom, in one of the most upmarket and secure residential nodes of Johannesburg.",
      "Landmark Consortium are the developers behind this contemporary 22 home lifestyle estate, three minutes from Melrose Arch.",
      "The estate features a residential park, top tier security and high quality construction, with three, four and five bedroom layouts ranging from 367 to 560 sqm.",
    ],
    cover: "/images/athol-principal-suite.jpg",
    gallery: [
      { src: "/images/athol-principal-suite.jpg", caption: "Principal suite", span: "half" },
      { src: "/images/athol-bedroom-pendants.jpg", caption: "Shell pendants over timber panelling", span: "half" },
      { src: "/images/athol-pendant-detail.jpg", caption: "Pendant and bedside detail", span: "full" },
      { src: "/images/athol-covered-patio.jpg", caption: "Covered patio and pool", span: "half" },
      { src: "/images/athol-breakfast-nook.jpg", caption: "Breakfast area", span: "half" },
    ],
    teams: [
      { role: "Hard furniture", name: "Landmarq Road" },
      { role: "Soft furniture", name: "Gracious Living Spaces" },
      { role: "Joinery", name: "Designer Projects" },
      { role: "Curtaining", name: "RJL Interiors" },
      { role: "Wallpaper installation", name: "CP Decor" },
    ],
    suppliers: [
      "Home Fabrics",
      "Warwick",
      "Hertex",
      "Casamance",
      "Tirmah Rugs",
      "Intercarpets",
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const collaborators = [
  "Landmarq Road",
  "Gracious Living Spaces",
  "Designer Projects",
  "RJL Interiors",
  "CP Decor",
  "Home Fabrics",
  "Warwick",
  "Hertex",
  "Casamance",
  "Romo",
  "Jaipur Rugs",
  "Tirmah Rugs",
  "Intercarpets",
  "ADF Outdoor",
];

export const facts = [
  { label: "Established", value: "2020" },
  { label: "Based in", value: "Johannesburg" },
  { label: "Work", value: "Residential and commercial" },
  { label: "Reach", value: "South Africa and international" },
];
