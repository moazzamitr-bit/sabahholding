"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { AboutPortfolioPage, CompaniesPortfolioPage, HomePortfolioSections, NewsPortfolioPage } from "./PortfolioSections";
import { contactDetails, portfolioCompanies, portfolioStats } from "./portfolioContent";

export type Lang = "fa" | "en";
export type PageKey =
  | "home" | "about" | "structure" | "companies" | "value-chain"
  | "capabilities" | "people" | "global" | "sustainability" | "news" | "contact";

const primaryPageKeys: PageKey[] = ["home", "about", "companies", "news", "contact"];
const aboutPageKeys = new Set<PageKey>(["structure", "value-chain", "capabilities", "people", "global", "sustainability"]);

const nav = {
  en: {
    home: "Home", about: "About Sabah", structure: "Group Structure",
    companies: "Companies", "value-chain": "Value Chain", capabilities: "Capabilities",
    people: "Human Capital", global: "Global Presence", sustainability: "Sustainability",
    news: "News & Media", contact: "Contact",
  },
  fa: {
    home: "خانه", about: "درباره صباح", structure: "ساختار گروه", companies: "شرکت‌ها",
    "value-chain": "زنجیره ارزش", capabilities: "توانمندی‌ها", people: "سرمایه انسانی",
    global: "حضور جهانی", sustainability: "پایداری", news: "اخبار و رسانه", contact: "تماس",
  },
} satisfies Record<Lang, Record<PageKey, string>>;

const pageIntro = {
  en: {
    about: ["WHO WE ARE", "From dairy pioneer to diversified industrial holding.", "More than two decades of operating experience connect food, agriculture, livestock, feed, packaging, logistics, international trade, mining and energy in one integrated group."],
    structure: ["ONE GROUP. SHARED DIRECTION.", "Built to operate as one industrial system.", "A holding structure designed for operating discipline, specialist accountability and end-to-end value creation."],
    companies: ["THE SABAH PORTFOLIO", "A diversified portfolio. One shared direction.", "More than thirty companies and operating entities extend Sabah’s capabilities from raw-material supply and manufacturing to packaging, logistics, distribution, investment and global trade."],
    "value-chain": ["FROM SUPPLY TO MARKET", "A value chain designed for control.", "Nine connected stages create visibility, resilience and quality across the complete industrial journey."],
    capabilities: ["INDUSTRIAL PLATFORM", "Infrastructure that compounds advantage.", "Manufacturing depth, supply integration, packaging capability and route-to-market scale work as one coordinated platform."],
    people: ["HUMAN CAPITAL", "People power every link in the chain.", "Engineers, operators, specialists and leaders turn industrial infrastructure into consistent performance and long-term value."],
    global: ["EXPORT & PRESENCE", "Rooted in Iran. Connected to regional markets.", "A national operating footprint supports scalable distribution and the development of enduring international partnerships."],
    sustainability: ["RESPONSIBLE GROWTH", "Building the future of food industry.", "Operational efficiency, responsible resource use and applied innovation guide Sabah’s next phase of industrial growth."],
    news: ["NEWS & MEDIA", "Documented stories from across the group.", "Explore Sabah’s innovation milestones, production growth, export performance, national distribution network and international development projects."],
    contact: ["BUSINESS RELATIONS", "Start a strategic conversation.", "Connect with Sabah Industrial Group regarding investment, supply, export, technology, distribution or institutional cooperation."],
    home: ["", "", ""],
  },
  fa: {
    about: ["هویت گروه", "از پیشگامی در لبنیات تا یک هلدینگ صنعتی متنوع", "بیش از دو دهه تجربه عملیاتی، صنایع غذایی، کشاورزی و دامپروری، خوراک دام، بسته‌بندی، لجستیک، تجارت بین‌المللی، معدن و انرژی را در یک گروه یکپارچه به هم پیوند داده است."],
    structure: ["یک گروه، یک مسیر", "ساختاری برای عملکرد یکپارچه صنعتی", "ساختار هلدینگ صباح برای انضباط عملیاتی، مسئولیت‌پذیری تخصصی و خلق ارزش در تمام حلقه‌های زنجیره طراحی شده است."],
    companies: ["پرتفوی صباح", "پرتفویی متنوع؛ یک مسیر مشترک", "بیش از سی شرکت و مجموعه عملیاتی، توانمندی‌های صباح را از تأمین مواد اولیه و تولید تا بسته‌بندی، لجستیک، توزیع، سرمایه‌گذاری و تجارت جهانی امتداد می‌دهند."],
    "value-chain": ["از تأمین تا بازار", "زنجیره‌ای طراحی‌شده برای کنترل", "نه حلقه متصل، شفافیت، تاب‌آوری و کیفیت را در تمام مسیر صنعتی صباح تقویت می‌کنند."],
    capabilities: ["سکوی صنعتی", "زیرساختی که مزیت می‌سازد", "عمق تولید، یکپارچگی تأمین، توان بسته‌بندی و مقیاس دسترسی به بازار در قالب یک پلتفرم هماهنگ عمل می‌کنند."],
    people: ["سرمایه انسانی", "انسان، نیروی محرک تمام حلقه‌های زنجیره", "مهندسان، اپراتورها، متخصصان و مدیران، زیرساخت صنعتی را به عملکرد پایدار و ارزش بلندمدت تبدیل می‌کنند."],
    global: ["صادرات و حضور", "ریشه‌دار در ایران؛ متصل به بازارهای منطقه", "شبکه عملیاتی ملی، توزیع مقیاس‌پذیر و توسعه مشارکت‌های پایدار بین‌المللی را پشتیبانی می‌کند."],
    sustainability: ["رشد مسئولانه", "ساختن آینده صنعت غذا", "بهره‌وری عملیاتی، استفاده مسئولانه از منابع و نوآوری کاربردی، مسیر آینده توسعه صنعتی صباح را شکل می‌دهند."],
    news: ["اخبار و رسانه", "روایت‌های مستند از مسیر رشد صباح", "دستاوردهای نوآوری، توسعه تولید، عملکرد صادراتی، شبکه توزیع ملی و پروژه‌های بین‌المللی گروه را مرور کنید."],
    contact: ["روابط کسب‌وکار", "آغاز یک گفت‌وگوی راهبردی", "برای همکاری در حوزه سرمایه‌گذاری، تأمین، صادرات، فناوری، توزیع یا تعاملات سازمانی با گروه صنعتی صباح در ارتباط باشید."],
    home: ["", "", ""],
  },
} satisfies Record<Lang, Record<PageKey, string[]>>;

const steps = {
  en: [
    ["01", "Animal Feed", "Nutrition inputs engineered for consistency and supply resilience."],
    ["02", "Raw Material Supply", "Coordinated sourcing and daily raw milk collection at industrial scale."],
    ["03", "Quality Control", "Layered inspection and process discipline from intake onward."],
    ["04", "Manufacturing", "Integrated production lines for a broad dairy portfolio."],
    ["05", "Powder Products", "Industrial conversion capability for stable, versatile ingredients."],
    ["06", "Packaging", "Dedicated packaging infrastructure supporting quality and speed."],
    ["07", "Cold Chain & Logistics", "Temperature-controlled movement across the operating network."],
    ["08", "Distribution", "A coordinated route-to-market platform across Iran."],
    ["09", "Domestic & Global Markets", "Commercial access connecting production with customer demand."],
  ],
  fa: [
    ["۰۱", "خوراک دام و طیور", "تأمین نهاده‌های تغذیه‌ای با تمرکز بر ثبات کیفیت و تاب‌آوری تأمین."],
    ["۰۲", "تأمین شیر خام", "هماهنگی تأمین و دریافت روزانه شیر خام در مقیاس صنعتی."],
    ["۰۳", "کنترل کیفیت", "کنترل چندلایه و انضباط فرایندی از نخستین نقطه دریافت."],
    ["۰۴", "تولید محصولات لبنی", "خطوط یکپارچه تولید برای سبد متنوع محصولات لبنی."],
    ["۰۵", "محصولات پودری", "توان تبدیل صنعتی برای تولید مواد اولیه پایدار و کاربردی."],
    ["۰۶", "بسته‌بندی", "زیرساخت اختصاصی بسته‌بندی برای حفظ کیفیت و افزایش سرعت."],
    ["۰۷", "سردخانه و لجستیک", "جابجایی کنترل‌شده دمایی در سراسر شبکه عملیاتی."],
    ["۰۸", "توزیع", "سکوی هماهنگ دسترسی به بازار در سراسر ایران."],
    ["۰۹", "بازارهای داخلی و صادراتی", "پیوند ظرفیت تولید با تقاضای مشتریان در بازارهای هدف."],
  ],
} satisfies Record<Lang, string[][]>;

const companies = portfolioCompanies;

const capabilityCards = {
  en: [
    ["01", "Manufacturing Excellence", "Factories, automated production lines and process technology configured for dependable output at scale."],
    ["02", "Supply Chain Integration", "Specialist sourcing operations connect critical inputs directly to manufacturing requirements."],
    ["03", "Packaging Infrastructure", "Dedicated companies align package engineering, quality assurance and production continuity."],
    ["04", "Distribution Network", "Cold-chain capacity and distribution companies extend Sabah’s operating control to market."],
  ],
  fa: [
    ["۰۱", "توان تولید", "کارخانه‌ها، خطوط تولید خودکار و فناوری فرایندی برای عملکرد قابل اتکا در مقیاس صنعتی."],
    ["۰۲", "یکپارچگی زنجیره تأمین", "عملیات تخصصی تأمین، ورودی‌های حیاتی را مستقیماً با نیازهای تولید همسو می‌کند."],
    ["۰۳", "زیرساخت بسته‌بندی", "شرکت‌های تخصصی، مهندسی بسته‌بندی، تضمین کیفیت و تداوم تولید را یکپارچه می‌سازند."],
    ["۰۴", "شبکه توزیع و فروش", "ظرفیت زنجیره سرد و شرکت‌های توزیع، کنترل عملیاتی صباح را تا بازار امتداد می‌دهند."],
  ],
} satisfies Record<Lang, string[][]>;

function Arrow() { return <span aria-hidden="true">↗</span>; }

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? "brand--compact" : ""}`}>
      <span className="brand__logo"><Image src="/sabah-logo-transparent.png" alt="Sabah" width={375} height={270} priority unoptimized /></span>
      {!compact && <span className="brand__name"><b>Sabah</b><small>INDUSTRIAL GROUP</small></span>}
    </span>
  );
}

function Header({ lang, pageKey }: { lang: Lang; pageKey: PageKey }) {
  const [open, setOpen] = useState(false);
  const otherLang: Lang = lang === "fa" ? "en" : "fa";
  const canonicalPageKey = aboutPageKeys.has(pageKey) ? "about" : pageKey;
  const currentSlug = canonicalPageKey === "home" ? "" : `/${canonicalPageKey}`;
  return (
    <header className="site-header">
      <Link href={`/${lang}`} aria-label={lang === "fa" ? "صفحه نخست صباح" : "Sabah home"}><Brand /></Link>
      <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Primary navigation">
        {primaryPageKeys.map((key) => (
          <Link key={key} className={key === canonicalPageKey ? "is-active" : ""} href={`/${lang}${key === "home" ? "" : `/${key}`}`} onClick={() => setOpen(false)}>
            {nav[lang][key]}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <Link className="language-switch" href={`/${otherLang}${currentSlug}`} hrefLang={otherLang}>{otherLang.toUpperCase()}</Link>
        <button className={`menu-button ${open ? "is-open" : ""}`} type="button" aria-expanded={open} aria-label={lang === "fa" ? "باز کردن فهرست" : "Open menu"} onClick={() => setOpen(!open)}><i /><i /></button>
      </div>
    </header>
  );
}

function SectionHeading({ kicker, title, text, invert = false }: { kicker: string; title: string; text?: string; invert?: boolean }) {
  return <div className={`section-heading ${invert ? "section-heading--invert" : ""}`}><p className="kicker">{kicker}</p><h2>{title}</h2>{text && <p className="section-heading__text">{text}</p>}</div>;
}

function ValueChain({ lang, full = false }: { lang: Lang; full?: boolean }) {
  const [active, setActive] = useState(3);
  const copy = steps[lang];
  return (
    <section className={`value-chain ${full ? "value-chain--full" : ""}`}>
      <div className="shell">
        <SectionHeading kicker={lang === "fa" ? "کنترل کامل زنجیره" : "END-TO-END CONTROL"} title={lang === "fa" ? "زنجیره ارزش یکپارچه صباح" : "Sabah’s integrated value chain"} text={lang === "fa" ? "هر حلقه، به حلقه بعدی قدرت می‌دهد." : "Every link strengthens the next."} invert />
        <div className="chain-track" role="tablist" aria-label={lang === "fa" ? "مراحل زنجیره ارزش" : "Value chain stages"}>
          {copy.map((step, index) => (
            <button type="button" role="tab" aria-selected={active === index} className={active === index ? "is-active" : ""} key={step[0]} onClick={() => setActive(index)}>
              <span>{step[0]}</span><b>{step[1]}</b>
            </button>
          ))}
        </div>
        <div className="chain-detail" role="tabpanel">
          <span className="chain-detail__number">{copy[active][0]}</span>
          <div><p>{lang === "fa" ? "نقش در اکوسیستم" : "ROLE IN THE ECOSYSTEM"}</p><h3>{copy[active][1]}</h3></div>
          <p>{copy[active][2]}</p>
        </div>
      </div>
    </section>
  );
}

function CompanyDirectory({ lang, limit }: { lang: Lang; limit?: number }) {
  const all = companies[lang];
  const categories = useMemo(() => ["all", ...Array.from(new Set(all.map((item) => item[0])))], [all]);
  const [filter, setFilter] = useState("all");
  const visible = (filter === "all" ? all : all.filter((item) => item[0] === filter)).slice(0, limit);
  return (
    <div className="company-directory">
      {!limit && <div className="company-filters" aria-label={lang === "fa" ? "فیلتر شرکت‌ها" : "Company filters"}>
        {categories.map((category) => <button type="button" key={category} className={filter === category ? "is-active" : ""} onClick={() => setFilter(category)}>{category === "all" ? (lang === "fa" ? "همه شرکت‌ها" : "All companies") : category}</button>)}
      </div>}
      <div className="company-list">
        {visible.map((company, index) => (
          <article key={company[1]} className="company-row reveal">
            <span className="company-row__index">{String(index + 1).padStart(2, "0")}</span><span className="company-mark">S</span>
            <div><small>{company[0]}</small><h3>{company[1]}</h3></div>
            <div className="company-meta"><span>{company[2]}</span><b>{company[3]}</b></div><Arrow />
          </article>
        ))}
      </div>
    </div>
  );
}

function Stats({ lang }: { lang: Lang }) {
  const stats = portfolioStats[lang];
  return (
    <section className="stats">
      <div className="shell stats__frame">
        <div className="stats__intro">
          <div className="stats__intro-top"><p className="kicker">{lang === "fa" ? "صباح در یک نگاه" : "SABAH AT A GLANCE"}</p><span>IR / 00</span></div>
          <p>{lang === "fa" ? "مقیاس، تخصص و کنترل یکپارچه." : "Scale, specialization and integrated control."}</p>
          <b>{lang === "fa" ? "مقیاس یک گروه صنعتی چندرشته‌ای" : "THE SCALE OF A DIVERSIFIED INDUSTRIAL GROUP"}</b>
        </div>
        <div className="stats__grid">
          {stats.map((item, index) => (
            <article className={`stat reveal${lang === "en" && item[0].length >= 6 ? " stat--wide-number" : ""}`} key={item[1]}>
              <span className="stat__index">0{index + 1}</span>
              <strong>{item[0]}</strong>
              <span className="stat__label">{item[1]}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSlider({ lang }: { lang: Lang }) {
  const slides = lang === "fa"
    ? [
      {
        eyebrow: "گروه صنعتی صباح",
        title: <>یک زنجیره یکپارچه صنعتی<br /><em>از تأمین تا بازار</em></>,
        summary: "بیش از دو دهه تجربه، بیش از سی شرکت و مجموعه عملیاتی را از خوراک دام و کشاورزی تا تولید، بسته‌بندی، توزیع و تجارت به یک سیستم منسجم تبدیل کرده است.",
        image: "/media/hero-industrial-executive.png",
        chapter: "اکوسیستم یکپارچه",
      },
      {
        eyebrow: "مقیاس و دقت صنعتی",
        title: <>زیرساختی که برای<br /><em>عملکرد ساخته شده است</em></>,
        summary: "شش واحد تولید لبنیات، دریافت روزانه بیش از ۱۱۰۰ تن شیر خام و خطوط پیشرفته، ظرفیت پایدار و قابل اتکای صباح را می‌سازند.",
        image: "/media/hero-manufacturing-premium.png",
        chapter: "توان تولید",
      },
      {
        eyebrow: "حضور ملی، افق منطقه‌ای",
        title: <>از قلب تولید ایران<br /><em>تا بازارهای فردا</em></>,
        summary: "۲۹ شعبه در ۱۸ استان، ناوگان تخصصی و بیش از ۱۰۰ میلیون دلار صادرات سالانه، صباح را به بازارهای داخلی و جهانی متصل می‌کند.",
        image: "/media/hero-logistics-premium.png",
        chapter: "شبکه بازار",
      },
    ]
    : [
      {
        eyebrow: "SABAH INDUSTRIAL GROUP",
        title: <>An integrated industrial ecosystem<br /><em>from supply to market</em></>,
        summary: "More than two decades of experience connect over thirty operating entities across feed, agriculture, production, packaging, distribution and trade.",
        image: "/media/hero-industrial-executive.png",
        chapter: "Integrated ecosystem",
      },
      {
        eyebrow: "INDUSTRIAL SCALE. OPERATING PRECISION.",
        title: <>Infrastructure engineered<br /><em>to perform</em></>,
        summary: "Six dairy production units, more than 1,100 tons of daily raw-milk intake and advanced lines create dependable capacity at scale.",
        image: "/media/hero-manufacturing-premium.png",
        chapter: "Manufacturing platform",
      },
      {
        eyebrow: "NATIONAL REACH. REGIONAL HORIZON.",
        title: <>From Iran’s production heartland<br /><em>to tomorrow’s markets</em></>,
        summary: "Twenty-nine branches in 18 provinces, a specialist fleet and more than $100 million in annual exports connect Sabah to domestic and global markets.",
        image: "/media/hero-logistics-premium.png",
        chapter: "Market network",
      },
    ];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  return (
    <section className="home-hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero-slides" aria-hidden="true">
        {slides.map((slide, index) => (
          <div className={`hero-slide ${active === index ? "is-active" : ""}`} key={slide.image}>
            <div className="hero-slide__image" style={{ backgroundImage: `url("${slide.image}")` }} />
          </div>
        ))}
      </div>
      <div className="home-hero__grid" />
      <div className="home-hero__content shell">
        <div className="hero-edition">
          <span>0{active + 1}</span>
          <span>{lang === "fa" ? "چشم‌انداز صنعتی ۱۴۰۵" : "INDUSTRIAL OUTLOOK 2026"}</span>
        </div>
        <div className="hero-copy" key={`${lang}-${active}`}>
          <p className="hero-kicker">{slides[active].eyebrow}</p>
          <h1>{slides[active].title}</h1>
          <p className="hero-summary">{slides[active].summary}</p>
          <div className="hero-actions">
            <Link className="button button--gold" href={`/${lang}/about`}>{lang === "fa" ? "شناخت کامل صباح" : "Discover Sabah"} <Arrow /></Link>
            <Link className="button button--ghost" href={`/${lang}/companies`}>{lang === "fa" ? "شرکت‌های گروه" : "Our companies"} <Arrow /></Link>
          </div>
        </div>
      </div>
      <div className="hero-chapters" role="tablist" aria-label={lang === "fa" ? "روایت اصلی صباح" : "Sabah hero stories"}>
        {slides.map((slide, index) => (
          <button type="button" role="tab" aria-selected={active === index} className={active === index ? "is-active" : ""} key={slide.chapter} onClick={() => setActive(index)}>
            <span>0{index + 1}</span>
            <b>{slide.chapter}</b>
            <i />
          </button>
        ))}
      </div>
      <button className="hero-next" type="button" onClick={() => setActive((active + 1) % slides.length)}>
        {lang === "fa" ? "روایت بعدی" : "NEXT STORY"}
      </button>
    </section>
  );
}

function HomePage({ lang }: { lang: Lang }) {
  return (
    <>
      <HeroSlider lang={lang} />
      <Stats lang={lang} />
      <section id="manifesto" className="manifesto manifesto--cinematic section">
        <div className="manifesto__backdrop" aria-hidden="true">
          <Image src="/media/hero-industrial-executive.png" alt="" fill sizes="100vw" unoptimized />
        </div>
        <div className="shell manifesto__stage">
          <article className="manifesto__panel">
            <p className="index-label">01 / {lang === "fa" ? "چشم‌انداز" : "PERSPECTIVE"}</p>
            <h2>{lang === "fa" ? <>صباح فقط یک تولیدکننده نیست.<br /><em>یک اکوسیستم صنعتی است.</em></> : <>Sabah is more than a producer.<br /><em>It is an industrial ecosystem.</em></>}</h2>
            <p>{lang === "fa" ? "صباح با توسعه زیرساخت‌های صنعتی و ایجاد شرکت‌های تخصصی، تمام حلقه‌های زنجیره ارزش خود را از تأمین مواد اولیه تا بازار نهایی مدیریت می‌کند." : "Sabah began with dairy manufacturing and expanded into a vertically integrated group by developing specialist companies across supply, production, packaging, logistics, distribution and export."}</p>
            <Link className="text-link" href={`/${lang}/about`}>{lang === "fa" ? "داستان تحول صباح" : "Read our transformation story"} <Arrow /></Link>
          </article>
          <div className="manifesto__chain" aria-label={lang === "fa" ? "زنجیره یکپارچه صباح" : "Sabah integrated value chain"}>
            {[
              lang === "fa" ? ["۰۱", "تأمین", "مواد اولیه و نهاده‌های مطمئن"] : ["01", "Supply", "Reliable materials and inputs"],
              lang === "fa" ? ["۰۲", "تولید", "فرآوری، کیفیت و مقیاس صنعتی"] : ["02", "Production", "Processing, quality and industrial scale"],
              lang === "fa" ? ["۰۳", "بازار", "توزیع ملی و توسعه صادرات"] : ["03", "Market", "National distribution and export growth"],
            ].map((item) => (
              <article key={item[0]}>
                <span>{item[0]}</span>
                <div><h3>{item[1]}</h3><p>{item[2]}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <HomePortfolioSections lang={lang} />
      <ValueChain lang={lang} />
      <section className="companies-preview section"><div className="shell">
        <div className="section-topline"><SectionHeading kicker={lang === "fa" ? "شرکت‌های گروه" : "GROUP COMPANIES"} title={lang === "fa" ? "تخصص‌های مستقل، قدرت مشترک" : "Independent expertise. Shared strength."} />
          <Link className="text-link" href={`/${lang}/companies`}>{lang === "fa" ? "مشاهده همه شرکت‌ها" : "View all companies"} <Arrow /></Link></div>
        <CompanyDirectory lang={lang} limit={5} />
      </div></section>
      <section className="capability-showcase">
        <div className="capability-showcase__image" />
        <div className="capability-showcase__content"><p className="kicker">{lang === "fa" ? "توانمندی‌های صنعتی" : "INDUSTRIAL CAPABILITIES"}</p><h2>{lang === "fa" ? "زیرساختی برای عملکرد در مقیاس" : "Infrastructure built to perform at scale."}</h2>
          <div className="capability-mini-grid">{capabilityCards[lang].map((card) => <article key={card[1]}><span>{card[0]}</span><div><h3>{card[1]}</h3><p>{card[2]}</p></div></article>)}</div>
          <Link className="button button--dark" href={`/${lang}/about#capabilities`}>{lang === "fa" ? "کشف توانمندی‌ها" : "Explore capabilities"} <Arrow /></Link>
        </div>
      </section>
      <section className="global-preview section"><div className="shell global-preview__grid">
        <MapVisual lang={lang} />
        <div><p className="kicker">{lang === "fa" ? "حضور ملی، نگاه جهانی" : "NATIONAL SCALE. GLOBAL AMBITION."}</p><h2>{lang === "fa" ? "شبکه‌ای که تولید را به فرصت متصل می‌کند." : "A network connecting production to opportunity."}</h2>
          <p>{lang === "fa" ? "مراکز تولید، زیرساخت‌های سردخانه‌ای و شرکت‌های توزیع، یک شبکه ملی منسجم برای بازار داخلی و توسعه صادرات می‌سازند." : "Production sites, cold-chain infrastructure and distribution companies form a coordinated national network for domestic reach and export development."}</p>
          <Link className="text-link" href={`/${lang}/about#presence`}>{lang === "fa" ? "مشاهده حضور جهانی" : "Explore global presence"} <Arrow /></Link>
        </div>
      </div></section>
    </>
  );
}

function MapVisual({ lang, large = false }: { lang: Lang; large?: boolean }) {
  const locations = lang === "fa"
    ? [
      { name: "تهران", role: "راهبری، تجارت و زنجیره سرد", x: 39, y: 28.5 },
      { name: "گلستان", role: "تولید، پودر و بسته‌بندی", x: 53.5, y: 18 },
      { name: "گنبد کاووس", role: "تولید و توزیع منطقه‌ای", x: 58.5, y: 16.5 },
      { name: "قوچان", role: "ظرفیت تولید شمال‌شرق", x: 66, y: 18.5 },
    ]
    : [
      { name: "Tehran", role: "Direction, trade & cold chain", x: 39, y: 28.5 },
      { name: "Golestan", role: "Manufacturing, powder & packaging", x: 53.5, y: 18 },
      { name: "Gonbad-e Kavus", role: "Regional manufacturing & distribution", x: 58.5, y: 16.5 },
      { name: "Quchan", role: "Northeast production capacity", x: 66, y: 18.5 },
    ];
  const [active, setActive] = useState(0);
  return (
    <figure className={`map-visual ${large ? "global-map" : ""}`} aria-label={lang === "fa" ? "نقشه شبکه عملیاتی صباح در ایران" : "Sabah operating network across Iran"}>
      <div className="map-visual__header">
        <span>IR / 01</span>
        <span>{lang === "fa" ? "شبکه عملیاتی ملی" : "NATIONAL OPERATING NETWORK"}</span>
      </div>
      <div className="map-visual__canvas">
        <div className="map-visual__map">
          <Image className="iran-map-asset" src="/media/iran-map.svg" width={1600} height={1430} alt={lang === "fa" ? "نقشه جغرافیایی ایران" : "Geographic map of Iran"} unoptimized />
          {locations.map((location, index) => (
            <button
              className={`map-pin ${active === index ? "is-active" : ""}`}
              type="button"
              key={location.name}
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
              onClick={() => setActive(index)}
              aria-label={`${location.name}: ${location.role}`}
            >
              <i />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
        <div className="map-coordinate map-coordinate--x" />
        <div className="map-coordinate map-coordinate--y" />
      </div>
      <figcaption className="map-visual__caption">
        <span>{String(active + 1).padStart(2, "0")}</span>
        <div><b>{locations[active].name}</b><small>{locations[active].role}</small></div>
        <span className="map-status">{lang === "fa" ? "فعال" : "ACTIVE"}</span>
      </figcaption>
      <a className="map-source" href="https://commons.wikimedia.org/wiki/File:IranMap.svg" target="_blank" rel="noreferrer">
        {lang === "fa" ? "مرجع جغرافیایی: نقشه ایران، CC0" : "Geographic reference: Iran map, CC0"}
      </a>
    </figure>
  );
}

function StructurePage({ lang }: { lang: Lang }) {
  const labels = lang === "fa" ? ["گروه صنعتی صباح", "کمیته راهبری", "زنجیره تأمین", "تولید", "پشتیبانی صنعتی", "بازرگانی و توزیع"] : ["Sabah Industrial Group", "Executive Committee", "Supply Chain", "Manufacturing", "Industrial Support", "Commerce & Distribution"];
  return <section className="section inner-section"><div className="shell">
    <SectionHeading kicker={lang === "fa" ? "مدل عملیاتی" : "OPERATING MODEL"} title={lang === "fa" ? "راهبری مرکزی، اجرای تخصصی" : "Central direction. Specialist execution."} text={lang === "fa" ? "هر شرکت با تمرکز تخصصی خود عمل می‌کند و در عین حال از راهبرد، استانداردها و ظرفیت مشترک گروه بهره می‌برد." : "Each company operates with specialist focus while benefiting from shared direction, standards and group-wide capability."} />
    <div className="org-chart"><div className="org-node org-node--root"><span>01</span><b>{labels[0]}</b></div><div className="org-line" /><div className="org-node org-node--executive"><span>02</span><b>{labels[1]}</b></div>
      <div className="org-branches">{labels.slice(2).map((label, index) => <div className="org-node" key={label}><span>0{index + 3}</span><b>{label}</b></div>)}</div>
    </div>
  </div></section>;
}

function AboutPage({ lang }: { lang: Lang }) {
  return <>
    <AboutPortfolioPage lang={lang} />
    <div id="value-chain" className="about-anchor"><ValueChain lang={lang} full /></div>
    <div id="capabilities" className="about-anchor"><CapabilitiesPage lang={lang} /></div>
    <div id="people" className="about-anchor"><PeoplePage lang={lang} /></div>
    <div id="presence" className="about-anchor"><GlobalPage lang={lang} /></div>
    <div id="sustainability" className="about-anchor"><SustainabilityPage lang={lang} /></div>
  </>;
}

function CapabilitiesPage({ lang }: { lang: Lang }) {
  return <section className="section inner-section"><div className="shell capability-grid">{capabilityCards[lang].map((card, index) => <article className="capability-card reveal" key={card[1]}><span>{card[0]}</span><div className={`capability-card__image capability-card__image--${index + 1}`} /><h2>{card[1]}</h2><p>{card[2]}</p><div className="capability-card__line" /></article>)}</div></section>;
}

function PeoplePage({ lang }: { lang: Lang }) {
  const roles = lang === "fa"
    ? [["مهندسان", "طراحی، بهبود و نگهداری سامانه‌های تولید"], ["تیم‌های تولید", "اجرای دقیق فرایندهای صنعتی در مقیاس"], ["متخصصان", "کنترل کیفیت، تأمین، فناوری و توسعه بازار"], ["مدیران", "راهبری عملکرد و توسعه نسل آینده"]]
    : [["Engineers", "Designing, improving and maintaining production systems"], ["Production teams", "Executing industrial processes with precision at scale"], ["Specialists", "Advancing quality, supply, technology and market development"], ["Leaders", "Guiding performance and developing the next generation"]];
  return <>
    <section className="people-hero section"><div className="shell people-hero__grid"><div className="people-photo" /><div><p className="kicker">{lang === "fa" ? "فرهنگ عملکرد" : "A CULTURE OF PERFORMANCE"}</p><h2>{lang === "fa" ? "بیش از ۵۰۰۰ فرصت شغلی مستقیم؛ یک فرهنگ مشترک." : "More than 5,000 direct jobs. One shared culture."}</h2><p>{lang === "fa" ? "سرمایه‌گذاری در مهارت، ایمنی و توسعه رهبران آینده، بخشی جدایی‌ناپذیر از رشد صنعتی صباح است." : "Investment in skills, safety and future leadership is inseparable from Sabah’s industrial growth."}</p></div></div></section>
    <section className="role-grid shell">{roles.map((role, index) => <article key={role[0]}><span>0{index + 1}</span><h3>{role[0]}</h3><p>{role[1]}</p></article>)}</section>
    <section className="join-band"><div className="shell"><p>{lang === "fa" ? "فرصت‌های شغلی در سراسر اکوسیستم صباح" : "CAREERS ACROSS THE SABAH ECOSYSTEM"}</p><h2>{lang === "fa" ? "آینده صنعت را با ما بسازید." : "Build the future of industry with us."}</h2><Link className="button button--gold" href={`/${lang}/contact`}>{lang === "fa" ? "ارتباط با منابع انسانی" : "Connect with our people team"} <Arrow /></Link></div></section>
  </>;
}

function GlobalPage({ lang }: { lang: Lang }) {
  const places = lang === "fa" ? [["گنبد کاووس", "تولید و توزیع"], ["گلستان", "تولید، پودر و بسته‌بندی"], ["قوچان", "تولید منطقه‌ای"], ["تهران", "تجارت، سردخانه و راهبری"]] : [["Gonbad-e Kavus", "Manufacturing & distribution"], ["Golestan", "Manufacturing, powder & packaging"], ["Quchan", "Regional manufacturing"], ["Tehran", "Trade, cold storage & direction"]];
  return <section className="section inner-section"><div className="shell global-layout"><MapVisual lang={lang} large /><div className="location-list">{places.map((place, index) => <article key={place[0]}><span>0{index + 1}</span><div><h3>{place[0]}</h3><p>{place[1]}</p></div></article>)}</div></div>
    <div className="shell export-statement"><p className="kicker">{lang === "fa" ? "توسعه بازار" : "MARKET DEVELOPMENT"}</p><h2>{lang === "fa" ? "ایجاد مسیرهای پایدار برای حضور در بازارهای منطقه‌ای و بین‌المللی." : "Developing durable routes into regional and international markets."}</h2><p>{lang === "fa" ? "توسعه صادرات بر انطباق محصول، قابلیت اطمینان تأمین و مشارکت‌های تجاری بلندمدت تمرکز دارد." : "Export development focuses on product fit, supply reliability and long-term commercial partnerships."}</p></div>
  </section>;
}

function SustainabilityPage({ lang }: { lang: Lang }) {
  const items = lang === "fa" ? [["تولید مسئولانه", "تصفیه‌خانه صنعتی فاضلاب در سایت گلستان صباح و کنترل فرایند بر مبنای استانداردهای ISO 14001 و ISO 22000."], ["لجستیک هوشمند", "توسعه حمل‌ونقل بزرگ‌مقیاس و هوشمند برای کاهش اتلاف، حفظ زنجیره سرد و کنترل دقیق‌تر توزیع."], ["نوآوری محصول", "سرمایه‌گذاری در تحقیق و توسعه، محصولات فراسودمند، پروبیوتیک و فرمولاسیون‌های سالم‌تر."], ["رشد فراگیر", "ایجاد بیش از ۵۰۰۰ فرصت شغلی مستقیم و توسعه مهارت در جوامع میزبان."]] : [["Responsible production", "Industrial wastewater treatment at Golestan Sabah and process control aligned with ISO 14001 and ISO 22000."], ["Smart logistics", "Large-scale intelligent transport designed to reduce loss, protect cold-chain integrity and improve distribution control."], ["Product innovation", "Investment in R&D, functional and probiotic products, and healthier formulations."], ["Inclusive growth", "More than 5,000 direct employment opportunities and skills development in host communities."]];
  return <><section className="section inner-section"><div className="shell innovation-grid">{items.map((item, index) => <article key={item[0]}><span>0{index + 1}</span><h2>{item[0]}</h2><p>{item[1]}</p></article>)}</div></section><section className="future-band"><div className="shell"><span className="future-band__line" /><div><p className="kicker">{lang === "fa" ? "افق آینده" : "THE NEXT HORIZON"}</p><h2>{lang === "fa" ? "صنعت هوشمندتر، زنجیره تاب‌آورتر، بازار گسترده‌تر." : "Smarter industry. A more resilient chain. Broader markets."}</h2></div></div></section></>;
}

function ContactPage({ lang }: { lang: Lang }) {
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }
  const contactLines = [
    [lang === "fa" ? "همکاری تجاری" : "Business cooperation", lang === "fa" ? "تأمین، توزیع و توسعه بازار" : "Supply, distribution and market development"],
    [lang === "fa" ? "روابط سازمانی" : "Institutional relations", lang === "fa" ? "سرمایه‌گذاری و مشارکت راهبردی" : "Investment and strategic partnerships"],
    [lang === "fa" ? "فرصت‌های شغلی" : "Careers", lang === "fa" ? "منابع انسانی و توسعه استعداد" : "People and talent development"],
    [lang === "fa" ? "رسانه رسمی" : "Official social channel", contactDetails[lang].social],
  ];
  return <section className="contact-suite section inner-section">
    <div className="contact-suite__backdrop" aria-hidden="true" />
    <div className="shell contact-layout">
      <div className="contact-details">
        <p className="kicker">{lang === "fa" ? "دفتر مرکزی" : "HEAD OFFICE"}</p>
        <h2>{lang === "fa" ? "تهران، ایران" : "Tehran, Iran"}</h2>
        <p>{contactDetails[lang].address}</p>
        <div className="contact-lines">
          {contactLines.map((line, index) => <span key={line[0]}><i>0{index + 1}</i><b>{line[0]}</b><small>{line[1]}</small></span>)}
        </div>
      </div>
      <form className="contact-form" onSubmit={submit}>
        <div className="form-heading"><span>01</span><h3>{lang === "fa" ? "درخواست همکاری" : "Business inquiry"}</h3></div>
    <label><span>{lang === "fa" ? "نام و نام خانوادگی" : "Full name"}</span><input required name="name" /></label><label><span>{lang === "fa" ? "سازمان" : "Organization"}</span><input required name="organization" /></label><label><span>{lang === "fa" ? "ایمیل کاری" : "Business email"}</span><input required type="email" name="email" /></label>
    <label><span>{lang === "fa" ? "موضوع همکاری" : "Area of interest"}</span><select name="interest" defaultValue=""><option value="" disabled>{lang === "fa" ? "انتخاب کنید" : "Select an area"}</option><option>{lang === "fa" ? "تأمین" : "Supply"}</option><option>{lang === "fa" ? "صادرات" : "Export"}</option><option>{lang === "fa" ? "سرمایه‌گذاری" : "Investment"}</option><option>{lang === "fa" ? "فناوری" : "Technology"}</option></select></label>
        <label><span>{lang === "fa" ? "پیام" : "Message"}</span><textarea required name="message" rows={4} /></label>
        <button className="button button--dark" type="submit">{lang === "fa" ? "آماده‌سازی درخواست" : "Prepare inquiry"} <Arrow /></button>
        {submitted && <p className="form-note">{lang === "fa" ? "اطلاعات شما آماده است. مسیر ارسال نهایی پس از اتصال سامانه ارتباط با مشتری فعال خواهد شد." : "Your details are ready. Final delivery will activate when the corporate contact service is connected."}</p>}
      </form>
    </div>
  </section>;
}

function GenericPage({ lang, pageKey }: { lang: Lang; pageKey: PageKey }) {
  if (pageKey === "about") return <AboutPage lang={lang} />;
  if (pageKey === "structure") return <StructurePage lang={lang} />;
  if (pageKey === "companies") return <CompaniesPortfolioPage lang={lang} />;
  if (pageKey === "value-chain") return <ValueChain lang={lang} full />;
  if (pageKey === "capabilities") return <CapabilitiesPage lang={lang} />;
  if (pageKey === "people") return <PeoplePage lang={lang} />;
  if (pageKey === "global") return <GlobalPage lang={lang} />;
  if (pageKey === "sustainability") return <SustainabilityPage lang={lang} />;
  if (pageKey === "news") return <NewsPortfolioPage lang={lang} />;
  if (pageKey === "contact") return <ContactPage lang={lang} />;
  return null;
}

function PageHero({ lang, pageKey }: { lang: Lang; pageKey: PageKey }) {
  const intro = pageIntro[lang][pageKey];
  const pageNumber = Math.max(1, primaryPageKeys.indexOf(pageKey) + 1);
  return <section className={`page-hero page-hero--${pageKey}`}><div className="page-hero__image" /><div className="page-hero__grid" /><div className="shell page-hero__content"><p className="hero-kicker">{intro[0]}</p><h1>{intro[1]}</h1><p>{intro[2]}</p><span className="page-number">0{pageNumber}</span></div></section>;
}

function Footer({ lang }: { lang: Lang }) {
  const footerPages = primaryPageKeys.filter((key) => key !== "home");

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-masthead">
          <div className="footer-brand">
            <Brand />
            <p>{lang === "fa" ? "گروه صنعتی صباح" : "Sabah Industrial Group"}</p>
            <span>{lang === "fa" ? "از تأمین تا بازار" : "From supply to market"}</span>
          </div>
          <div className="footer-statement">
            <span className="footer-eyebrow">SABAH / 2026</span>
            <h2>{lang === "fa" ? "صنعت یکپارچه، ارزش ماندگار." : "Integrated industry. Enduring value."}</h2>
            <p>{lang === "fa" ? "یک اکوسیستم صنعتی برای ساختن ظرفیت پایدار، از سرچشمه تا بازار." : "An industrial ecosystem built for lasting capacity, from source to market."}</p>
          </div>
          <Link className="footer-contact" href={`/${lang}/contact`}>
            <span>{lang === "fa" ? "گفت‌وگوی سازمانی" : "CORPORATE INQUIRY"}</span>
            <b>{lang === "fa" ? "شروع همکاری" : "Start a conversation"}</b>
            <Arrow />
          </Link>
        </div>

        <div className="footer-directory">
          <div className="footer-directory__intro">
            <span>{lang === "fa" ? "راهنمای گروه" : "GROUP DIRECTORY"}</span>
            <p>{lang === "fa" ? "دسترسی مستقیم به فصل‌های اصلی صباح" : "Direct access to Sabah’s principal chapters"}</p>
          </div>
          <nav className="footer-links" aria-label={lang === "fa" ? "پیوندهای پایین صفحه" : "Footer navigation"}>
            {footerPages.map((key, index) => (
              <Link key={key} href={`/${lang}/${key}`}>
                <span>0{index + 1}</span>
                <b>{nav[lang][key]}</b>
              </Link>
            ))}
          </nav>
          <div className="footer-office">
            <span>{lang === "fa" ? "دفتر مرکزی" : "HEAD OFFICE"}</span>
            <b>{lang === "fa" ? "تهران، ایران" : "Tehran, Iran"}</b>
            <p>{contactDetails[lang].address}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 SABAH INDUSTRIAL GROUP</span>
          <span>{lang === "fa" ? "تمامی حقوق محفوظ است." : "ALL RIGHTS RESERVED."}</span>
          <span>FA / EN · IR / 01</span>
        </div>
      </div>
    </footer>
  );
}

export default function SabahSite({ lang, pageKey }: { lang: Lang; pageKey: PageKey }) {
  return <div className={`site site--${lang}`} lang={lang} dir={lang === "fa" ? "rtl" : "ltr"}><Header lang={lang} pageKey={pageKey} /><main>{pageKey === "home" ? <HomePage lang={lang} /> : <><PageHero lang={lang} pageKey={pageKey} /><GenericPage lang={lang} pageKey={pageKey} /></>}</main><Footer lang={lang} /></div>;
}
