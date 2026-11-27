export interface ContractItem {
  id: string;
  ref: string;
  title: string;
  entity: "City of Tshwane" | "City of Ekurhuleni" | "Pikitup Johannesburg" | "Msunduzi Municipality";
  category:
    | "Electrical Supply"
    | "Plant & Fleet Hire"
    | "Water & Sanitation"
    | "Civil, Building & Horticulture";
  period: string;
  status: "Active" | "Completed" | "Panel";
  role: "Managed" | "Inherited & Managed" | "Bid & Administered";
  summary: string;
  highlights: string[];
}

export interface CapabilityItem {
  title: string;
  description: string;
  tags: string[];
}

export interface RoleEntry {
  title: string;
  period: string;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  location: string;
  roles: RoleEntry[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  name: "Jacob Chademwiri",
  wordmark: "JACOB CHADEMWIRI",
  title: "Procurement, Tender & Contract Manager",
  location: "Centurion, Gauteng, South Africa",
  locality: "Centurion",
  region: "Gauteng",
  country: "ZA",
  phone: "+27 74 049 1433",
  phoneHref: "tel:+27740491433",
  email: "hello@jacobc.co.za",
  linkedin: "https://www.linkedin.com/in/jchademwiri",
  website: "https://www.jacobc.co.za",
  cvPath: "/Jacob_Chademwiri_Procurement_Contracts_CV_v4.docx",
  license: "Code C1 Driver's License with PrDP (P & G)",
  seo: {
    metaTitle: "Jacob Chademwiri | Procurement, Tender & Contract Manager - Centurion, SA",
    metaDescription:
      "Procurement, Tender & Contract Manager in Centurion with 5+ years of bid-to-delivery experience across 10+ municipal contracts (City of Tshwane, City of Ekurhuleni, Pikitup Johannesburg, Msunduzi), SAP/Sage/Zoho invoicing, and ISO 9001/14001/45001 governance.",
    ogTitle: "Jacob Chademwiri - Procurement, Tender & Contract Manager",
    ogDescription:
      "10+ Multi-Year Municipal Contracts • Tier-1 Technical Sourcing • SAP, Sage & Zoho • ISO / SHEQ",
  },
} as const;

export const navLinks = [
  { label: "Track Record", href: "/track-record" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Experience", href: "/#experience" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;

export const heroSection = {
  eyebrow: "CENTURION, SOUTH AFRICA  •  PROCUREMENT & CONTRACT MANAGEMENT",
  headline: "Winning municipal tenders and running the contracts that follow.",
  subheadline:
    "Procurement, Tender & Contract Manager based in Centurion. Over the past five years, I have priced, won, sourced, delivered, and invoiced 10+ multi-year municipal contracts across four South African entities.",
  primaryCta: { label: "Download CV (DOCX)", href: siteConfig.cvPath },
  secondaryCta: { label: "View Contract Portfolio", href: "#track-record" },
} as const;

export const metricsStrip = [
  { value: "10+", label: "Multi-Year Municipal Contracts" },
  { value: "4", label: "Major Municipal Entities" },
  { value: "~85%", label: "Public-Sector Bid Success Rate" },
  { value: "5+ Yrs", label: "Bid-to-Delivery Experience" },
] as const;

export const contractCategories = [
  "All",
  "Electrical Supply",
  "Plant & Fleet Hire",
  "Water & Sanitation",
  "Civil, Building & Horticulture",
] as const;

export const municipalEntities = [
  "All Entities",
  "City of Tshwane",
  "City of Ekurhuleni",
  "Pikitup Johannesburg",
  "Msunduzi Municipality",
] as const;

export const contractPortfolio: ContractItem[] = [
  // 1. Electrical Supply & Accessories
  {
    id: "eed-05-2023-24",
    ref: "EED 05-2023/24",
    title: "Low-Voltage Electrical Cables, Wire & Conductors",
    entity: "City of Tshwane",
    category: "Electrical Supply",
    period: "36 Months • Eff. Jan 2024",
    status: "Active",
    role: "Managed",
    summary:
      "Supply, delivery, and off-loading of low-voltage electrical cables, wire, and conductors across 50+ SAP-coded line items.",
    highlights: [
      "Direct tier-1 OEM/distributor sourcing (ACTOM, M-TEC)",
      "SAP item-coded municipal store delivery & invoicing",
      "Lead-time and stock allocation management",
    ],
  },
  {
    id: "as-08-2023",
    ref: "AS 08-2023",
    title: "Supply & Off-Loading of Electrical Items & Accessories",
    entity: "City of Ekurhuleni",
    category: "Electrical Supply",
    period: "Feb 2024 – Jun 2026",
    status: "Active",
    role: "Managed",
    summary:
      "As-and-when-required supply, delivery, and off-loading of electrical accessories across City of Ekurhuleni stores.",
    highlights: [
      "Annual CPI price escalation administration",
      "Monthly creditor statement & VAT reconciliation",
      "SLA and municipal clearance compliance",
    ],
  },

  // 2. Heavy Plant, Fleet & Waste Vehicles
  {
    id: "ss-01-2023-24",
    ref: "SS 01-2023/24",
    title: "Corporate Hire of General Construction & Refuse Removal Vehicles",
    entity: "City of Tshwane",
    category: "Plant & Fleet Hire",
    period: "3 Years • Eff. May 2024",
    status: "Active",
    role: "Managed",
    summary:
      "Corporate fleet hire covering 10,000L water tankers, 6m³–14m³ tipper trucks, 7/8-ton dropside trucks, and 12m³–19m³ rear-end loader waste compactors.",
    highlights: [
      "9-year VEM age limit & desktop audit compliance",
      "Pro-rata hourly & daily utilization billing",
      "Subcontractor & fleet dispatch coordination",
    ],
  },
  {
    id: "ss-02-2023-24",
    ref: "SS 02-2023/24",
    title: "Corporate Hire of General Construction Machines & Equipment",
    entity: "City of Tshwane",
    category: "Plant & Fleet Hire",
    period: "3 Years • Eff. Apr 2025",
    status: "Active",
    role: "Managed",
    summary:
      "Primary and backup corporate hire across wheel loaders, hydraulic excavators, articulated dump trucks, mobile cranes, motor graders, compactors, and mowers (STP & LME awards).",
    highlights: [
      "Multi-item primary and backup fleet allocation",
      "First-deployment VEM inspection & insurance readiness",
      "Official order & pro-rata billing administration",
    ],
  },
  {
    id: "pu102-2022",
    ref: "PU102/2022",
    title: "Wet-Rate Plant & Equipment for Illegal Dumping & Garden Sites",
    entity: "Pikitup Johannesburg",
    category: "Plant & Fleet Hire",
    period: "3 Years • Awarded Oct 2022",
    status: "Completed",
    role: "Inherited & Managed",
    summary:
      "Panel appointment for the supply and operation of wet-rate plant and equipment (front-end loaders, TLBs, tipper trucks, and skid-steer loaders) inclusive of fuel, maintenance, and operators.",
    highlights: [
      "3-year escalating hourly wet-rate schedules",
      "Operator, fuel, and preventative maintenance uptime",
      "Multi-depot dispatch across Johannesburg",
    ],
  },

  // 3. Water, Sanitation & Civil Supply
  {
    id: "hs-02-2025-26",
    ref: "HS 02-2025/26",
    title: "Hiring, Servicing, Delivery & Relocation of Chemical Toilets",
    entity: "City of Tshwane",
    category: "Water & Sanitation",
    period: "3 Years • Awarded Jan 2026",
    status: "Active",
    role: "Managed",
    summary:
      "Three-year Human Settlements appointment for the hire, sanitation servicing, waste disposal, delivery, and relocation of non-flushing and disability-accessible chemical toilets.",
    highlights: [
      "Wastewater treatment plant disposal compliance",
      "Unit-day hire, service, and relocation billing reconciliation",
      "Quarterly municipal rates & tax clearance governance",
    ],
  },
  {
    id: "hhs-10-2023-24",
    ref: "HHS 10-2023/24",
    title: "Hire of 10,000–15,000L Mobile Drinking Water Tankers (8 Trucks)",
    entity: "City of Tshwane",
    category: "Water & Sanitation",
    period: "3 Years • Eff. Feb 2025",
    status: "Active",
    role: "Managed",
    summary:
      "Supply of potable water via 8 mobile drinking water tankers (10,000–15,000L capacity) serving informal settlements across the City of Tshwane.",
    highlights: [
      "Metered water-source compliance & monthly Tracker reports",
      "Hourly fleet utilization & volume verification",
      "Local employment & community spin-off reporting",
    ],
  },
  {
    id: "hhs-01-2021-22",
    ref: "HHS 01-2021/22",
    title: "Hire of 10,000L Mobile Drinking Water Tankers (12 VEMs)",
    entity: "City of Tshwane",
    category: "Water & Sanitation",
    period: "3 Years • Eff. May 2022",
    status: "Completed",
    role: "Inherited & Managed",
    summary:
      "Three-year Human Settlements contract operating up to 12 plastic and stainless-steel 10,000L potable water tankers for informal settlement delivery.",
    highlights: [
      "12-vehicle fleet scheduling & VEM age compliance",
      "Monthly potable volume tracker reconciliation",
      "Smooth handover into successor contract HHS 10-2023/24",
    ],
  },
  {
    id: "roc-20-2023-24",
    ref: "ROC 20-2023/24",
    title: "Supply & Off-Loading of Precast Concrete Manhole Rings",
    entity: "City of Tshwane",
    category: "Water & Sanitation",
    period: "3 Years • Eff. Feb 2025",
    status: "Active",
    role: "Managed",
    summary:
      "Acquisition, supply, delivery, and off-loading of SANS 1294:2020 precast concrete manhole rings with plastic steps to municipal Water and Sanitation stores.",
    highlights: [
      "SANS 1294:2020 quality specification verification",
      "SAP item-coded delivery note & invoice matching",
      "Manufacturer-to-municipal-store logistics coordination",
    ],
  },

  // 4. Civil, Building & Municipal Horticulture
  {
    id: "a-re-04-2021",
    ref: "A-RE 04-2021",
    title: "Construction & Refurbishment of Municipal Buildings (CIDB 6GB–9GB)",
    entity: "City of Ekurhuleni",
    category: "Civil, Building & Horticulture",
    period: "May 2022 – Jun 2024",
    status: "Completed",
    role: "Inherited & Managed",
    summary:
      "Real Estate Department panel appointment (CIDB 6GB–9GB / 5GBPE–8GBPE) for construction and refurbishment of buildings and facilities across Ekurhuleni.",
    highlights: [
      "Performance guarantee & public liability insurance compliance",
      "CPI-escalated bill-of-quantities billing",
      "Multi-department site handover & payment certificates",
    ],
  },
  {
    id: "roc-05-2022-23",
    ref: "ROC 05-2022/23",
    title: "Resurfacing & Refurbishment of All-Weather Sport Surfaces",
    entity: "City of Tshwane",
    category: "Civil, Building & Horticulture",
    period: "3 Years • Eff. Sep 2023",
    status: "Active",
    role: "Inherited & Managed",
    summary:
      "Court resurfacing, acrylic coating, perimeter concrete slab repairs, galvanized fencing, and OHS compliance across Tshwane municipal sport facilities.",
    highlights: [
      "Three-quote procurement governance for miscellaneous items",
      "OHS safety plan, file, and site officer compliance",
      "Multi-region sport complex delivery tracking",
    ],
  },
  {
    id: "roc-08-2022-23",
    ref: "ROC 08-2022/23",
    title: "Construction of Concrete Berm Strips at Municipal Cemeteries",
    entity: "City of Tshwane",
    category: "Civil, Building & Horticulture",
    period: "3 Years • Eff. Aug 2023",
    status: "Active",
    role: "Inherited & Managed",
    summary:
      "Cast in-situ concrete berm strips, earthworks, trenching, site clearing, and core testing across cemeteries in all seven regions of Tshwane.",
    highlights: [
      "Class 25/19 concrete & compressive strength testing compliance",
      "7-region cemetery work-order scheduling",
      "OHS construction supervision & local labor reporting",
    ],
  },
  {
    id: "roc-07-2022-23",
    ref: "ROC 07-2022/23",
    title: "Horticultural Maintenance of Sport Facilities (7 Regions)",
    entity: "City of Tshwane",
    category: "Civil, Building & Horticulture",
    period: "3 Years • Eff. Feb 2025",
    status: "Active",
    role: "Managed",
    summary:
      "Three-year Regional Operations & Coordination contract for horticultural maintenance of municipal sport facilities across seven regions (Sections A, B, and C).",
    highlights: [
      "Multi-region SLA scheduling across Sections A–C",
      "Local economic spin-off & job-creation compliance",
      "Quarterly municipal clearance & invoice reconciliation",
    ],
  },
  {
    id: "a-ewm-07-2022",
    ref: "A-EWM 07-2022",
    title: "Arboriculture Maintenance - Tree Pruning & Removal (Vosloorus)",
    entity: "City of Ekurhuleni",
    category: "Civil, Building & Horticulture",
    period: "Apr 2023 – Jun 2025",
    status: "Completed",
    role: "Inherited & Managed",
    summary:
      "As-and-when-required arboriculture maintenance covering functional and utility pruning, branch removal, and tree felling in Vosloorus.",
    highlights: [
      "CPI-escalated per-tree & per-ton rate administration",
      "Ekurhuleni Finance expenditure & creditor reconciliation",
      "Safety & public-space operational compliance",
    ],
  },
  {
    id: "a-ewm-01-2022",
    ref: "A-EWM 01-2022",
    title: "Maintenance of Grass & Vegetation Areas (Boksburg South Central)",
    entity: "City of Ekurhuleni",
    category: "Civil, Building & Horticulture",
    period: "Nov 2022 – Jun 2023",
    status: "Completed",
    role: "Bid & Administered",
    summary:
      "Cutting and removal of grass, weeds, and vegetation across Sections 1 & 2 in Boksburg South Central on an as-and-when-required basis.",
    highlights: [
      "m² measurement verification & payment certificate submission",
      "R3M public liability insurance & SLA compliance",
      "CPI escalation & municipal account clearance tracking",
    ],
  },
  {
    id: "scm-20-22-23",
    ref: "SCM 20 OF 22/23",
    title: "Grass Cutting & Maintenance of Municipal Facilities Panel",
    entity: "Msunduzi Municipality",
    category: "Civil, Building & Horticulture",
    period: "3 Years • Awarded May 2023",
    status: "Panel",
    role: "Inherited & Managed",
    summary:
      "Top-5 SMME panel appointment providing grass cutting and facility maintenance services across Msunduzi Municipality in Pietermaritzburg.",
    highlights: [
      "Annual CPIX rate escalation management",
      "Cross-provincial (KZN) operations & order verification",
      "SCM Regulation 44 & SLA governance",
    ],
  },
];

/** Four flagship contracts featured on the home page (one per commercial category). */
export const featuredContractIds = [
  "eed-05-2023-24",
  "ss-02-2023-24",
  "hs-02-2025-26",
  "a-re-04-2021",
] as const;

export const featuredContracts: ContractItem[] = featuredContractIds
  .map((id) => contractPortfolio.find((c) => c.id === id))
  .filter((c): c is ContractItem => Boolean(c));

export const coreCapabilities: CapabilityItem[] = [
  {
    title: "Procurement & Technical Sourcing",
    description:
      "Direct sourcing from tier-1 OEMs and distributors (ACTOM, M-TEC), commercial pricing negotiation, supplier lead-time tracking, SAP item-coded municipal store deliveries, and procure-to-pay control.",
    tags: ["ACTOM & M-TEC", "OEM Negotiation", "SAP Store Deliveries", "Procure-to-Pay"],
  },
  {
    title: "Public-Sector Tender Management",
    description:
      "Full bid preparation, MFMA and SCM compliance, CIDB returnable schedules, pricing estimation, and CPI/CPIX escalation structuring. Backed by an ~85% public-sector bid success rate.",
    tags: ["MFMA / SCM", "CIDB 6GB–9GB", "CPI / CPIX Escalations", "~85% Win Rate"],
  },
  {
    title: "Contract & Commercial Delivery",
    description:
      "Day-to-day administration of live multi-year service, supply, and Joint Venture contracts. Enforcing SLAs, fleet/VEM age rules, quarterly municipal clearances, and keeping operations on schedule.",
    tags: ["SLA Governance", "JV Administration", "Fleet & VEM Audits", "10+ Contracts"],
  },
  {
    title: "ERP Invoicing & ISO / SHEQ Governance",
    description:
      "Hands-on commercial invoicing, PO reconciliation, and accounts receivable in SAP, Sage, and Zoho, alongside Management Representative responsibility for ISO 9001, ISO 14001, and ISO 45001.",
    tags: ["SAP", "Sage", "Zoho", "ISO 9001 / 14001 / 45001"],
  },
];

export const systemsAndStandards = [
  "SAP",
  "Sage",
  "Zoho",
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "MFMA / SCM",
  "CIDB",
  "SANS 1294:2020",
] as const;

export const experienceTimeline: ExperienceItem[] = [
  {
    company: "Sithembe Transportation and Projects",
    location: "Centurion, Gauteng",
    roles: [
      {
        title: "Tender, Procurement & Contract Manager",
        period: "November 2023 – Present",
        highlights: [
          "Managed commercial delivery from tender pricing through SLA execution, supplier sourcing, and invoicing across 10+ municipal contracts for the City of Tshwane, City of Ekurhuleni, Pikitup Johannesburg, and Msunduzi Municipality (~85% bid success rate).",
          "Ran the 36-month electrical cable supply contract (EED 05-2023/24) and electrical accessories contract (AS 08-2023), sourcing directly from ACTOM and M-TEC and administering CPI price escalations.",
          "Directed fleet, plant hire, water/sanitation, civil, horticultural, grass cutting, and tree pruning portfolios (SS 01/02, PU102/2022, HS 02-2025/26, HHS 01/10, ROC 05/07/08/20, A-RE 04-2021, A-EWM 01/07, SCM 20).",
          "Handled commercial invoicing, SAP item-coded delivery reconciliation, PO tracking, and accounts receivable in SAP, Sage, and Zoho.",
          "Served as Management Representative for company-wide Integrated Management System (IMS) implementation across ISO 9001, ISO 14001, and ISO 45001.",
        ],
      },
      {
        title: "Senior Tendering Administrator",
        period: "September 2022 – November 2023",
        highlights: [
          "Managed full-cycle bid preparation, commercial pricing schedules, and compliant submissions across construction, fleet/plant hire, electrical supply, and municipal maintenance. Secured multi-year awards that later moved into my direct contract management portfolio.",
          "Prepared BOQ costings, supplier quote comparisons, and CPI/CPIX escalation models, and coordinated subcontractor, OEM, and Joint Venture partner documentation for municipal tenders.",
          "Reviewed tender evaluation criteria, functionality scoring requirements, and compulsory briefing addenda to prevent administrative disqualifications and keep submissions compliant under MFMA and SCM rules.",
          "Standardised internal tender document control, compliance checklists, and Microsoft 365 workflows.",
        ],
      },
      {
        title: "Tendering Administrator",
        period: "January 2022 – August 2022",
        highlights: [
          "Coordinated concurrent municipal bid submissions under tight deadlines, maintaining MFMA/SCM compliance, CIDB requirements, and audit-ready tender registers.",
          "Compiled returnable schedules (MBD forms, municipal rates clearances, CSD reports, SARS tax pins, B-BBEE, and COIDA certificates) and verified mandatory annexures prior to tender closing.",
          "Monitored municipal tender bulletins, attended briefing sessions, requested supplier pricing, and tracked submission milestones, validity extensions, and post-submission clarification queries.",
        ],
      },
    ],
  },
  {
    company: "Babiya Geomatics and Trading",
    location: "Kempton Park, Gauteng",
    roles: [
      {
        title: "Tender & Office Administrator",
        period: "January 2021 – December 2021",
        highlights: [
          "Prepared compliant returnable tender packs and reviewed RFP requirements for civil and surveying bids.",
          "Maintained Central Supplier Database (CSD) profiles, SARS tax clearance pins, COIDA good-standing certificates, and general office administration.",
          "Tracked municipal and state-owned entity tender portals, scheduled compulsory briefing sessions, and coordinated supplier quotations and pricing schedules ahead of closing deadlines.",
          "Managed statutory company compliance files (CIPC, B-BBEE, CIDB, and bank confirmation letters), tender registers, filing systems, and day-to-day client and supplier correspondence.",
        ],
      },
    ],
  },
  {
    company: "Baum Systems (Pty) Ltd",
    location: "Cape Town, Western Cape",
    roles: [
      {
        title: "Systems & Web Developer",
        period: "August 2019 – January 2022",
        highlights: [
          "Built and maintained data-driven applications and client platforms, building practical analytical, database, and systems-documentation habits I still use in ERP and contract reporting.",
          "Structured relational databases, reporting views, and automated workflows to keep client records, operational logs, and business data accurate and easy to audit.",
          "Translated business and client requirements into working technical specifications, handled troubleshooting and routine updates, and documented processes for ongoing handover and maintenance.",
        ],
      },
    ],
  },
  {
    company: "CORPCLO CC",
    location: "Cape Town, Western Cape",
    roles: [
      {
        title: "Administrative Assistant",
        period: "November 2017 – March 2020",
        highlights: [
          "Supported workshop and office administration for a multi-branch retail clothing business, handling record keeping, dispatch paperwork, supplier and branch correspondence, and daily coordination.",
          "Visited retail branches across Cape Town to conduct physical stock checks, stock-taking counts, and inventory reconciliations between the central workshop and individual stores.",
          "Tracked garment stock movements, order records, and replenishment requests across branches, flagging stock discrepancies early to keep workshop production and store inventory aligned.",
        ],
      },
    ],
  },
];

// Set showCipsInProgress to true once registered for CIPS Level 4
export const showCipsInProgress = false;

export const credentialsList = [
  ...(showCipsInProgress
    ? [
        {
          title: "CIPS Level 4 Diploma in Procurement and Supply (In Progress)",
          issuer: "Chartered Institute of Procurement & Supply",
        },
      ]
    : []),
  {
    title: "National Certificate in Information Technology (HEXCO) & National Diploma Studies",
    issuer: "Mutare Polytechnic College",
  },
  {
    title: "Fundamentals of Agile Project Management",
    issuer: "Professional Certification",
  },
  {
    title: "Project Management Foundations: Communication",
    issuer: "Professional Certification",
  },
  {
    title: "Code C1 Driver's License with PrDP (Categories P & G)",
    issuer: "Republic of South Africa",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Who is Jacob Chademwiri?",
    answer:
      "I'm a Procurement, Tender & Contract Manager based in Centurion, Gauteng. I have over five years of hands-on experience taking public-sector contracts from initial bid pricing through supplier sourcing, delivery, and final invoicing across 10+ multi-year municipal awards.",
  },
  {
    question: "Which municipalities and public-sector contracts have you managed?",
    answer:
      "I have priced, won, inherited, and managed 10+ multi-year contracts for the City of Tshwane, City of Ekurhuleni, Pikitup Johannesburg (CoJ), and Msunduzi Municipality. They cover LV electrical cables and accessories (EED 05-2023/24, AS 08-2023), heavy plant and fleet hire (SS 01-2023/24, SS 02-2023/24, PU102/2022), water and sanitation (HS 02-2025/26, HHS 10-2023/24, HHS 01-2021/22, ROC 20-2023/24), civil and building refurbishment (A-RE 04-2021, ROC 05-2022/23, ROC 08-2022/23), and municipal horticulture and arboriculture (ROC 07-2022/23, A-EWM 07-2022, A-EWM 01-2022, SCM 20 OF 22/23).",
  },
  {
    question: "What ERP invoicing and compliance standards do you work with?",
    answer:
      "I use SAP, Sage, and Zoho for commercial invoicing, purchase order reconciliation, and accounts receivable. On the compliance side, I work daily with MFMA/SCM rules and CIDB requirements, and serve as Management Representative for ISO 9001, ISO 14001, and ISO 45001.",
  },
  {
    question: "What roles and locations are you open to?",
    answer:
      "I'm based in Centurion, Gauteng, and open to mid-to-senior Procurement, Supply Chain, Tender, and Contract Management roles across South Africa and Southern Africa.",
  },
];

export const contactSection = {
  eyebrow: "GET IN TOUCH",
  heading: "Get in touch about a role or contract scope.",
  intro:
    "Open to mid-to-senior Procurement, Supply Chain, and Contract Management roles across Southern Africa. Send a message below, download my CV, or connect on LinkedIn.",
  form: {
    namePlaceholder: "Your full name",
    organizationPlaceholder: "Company or recruiting firm",
    emailPlaceholder: "you@company.co.za",
    messagePlaceholder: "Share the role, location, or commercial scope you'd like to discuss...",
    submitLabel: "Send Message",
    successMessage: "Message sent. Thanks for reaching out - I'll get back to you within 24–48 hours.",
    errorMessage: "Something went wrong sending your message. Please email hello@jacobc.co.za directly.",
  },
} as const;

export const footerSection = {
  bio: "Procurement, Tender & Contract Manager in Centurion, South Africa. Focused on public-sector contracts, technical sourcing, SAP/Sage billing, and ISO/SHEQ compliance.",
  copyright: "© 2026 Jacob Chademwiri. All rights reserved.",
} as const;
