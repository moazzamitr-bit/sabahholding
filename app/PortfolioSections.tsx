"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Lang } from "./SabahSite";
import {
  achievements,
  companyProfiles,
  exportMarkets,
  futureVision,
  groupStory,
  holdings,
  internationalProjects,
  leadership,
  portfolioCompanies,
  products,
} from "./portfolioContent";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionTitle({
  kicker,
  title,
  text,
  light = false,
}: {
  kicker: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <header className={`portfolio-heading ${light ? "portfolio-heading--light" : ""}`}>
      <p>{kicker}</p>
      <h2>{title}</h2>
      {text && <span>{text}</span>}
    </header>
  );
}

function LeadershipSection({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const [leadLeader, ...supportingLeaders] = leadership[lang];
  const pillars = lang === "fa"
    ? [
        ["۰۱", "توسعه پایدار", "تصمیم‌گیری بلندمدت و سرمایه‌گذاری پیوسته در ظرفیت‌های صنعتی"],
        ["۰۲", "یکپارچگی زنجیره", "مدیریت هماهنگ تأمین، تولید، توزیع و بازار نهایی"],
        ["۰۳", "نوآوری صنعتی", "بهبود مستمر فناوری، فرایند و کیفیت محصول"],
      ]
    : [
        ["01", "Enduring growth", "Long-term decisions and continuous investment in industrial capacity"],
        ["02", "Value-chain integration", "Coordinated management across supply, production, distribution and market"],
        ["03", "Industrial innovation", "Continuous improvement in technology, process and product quality"],
      ];
  return (
    <section id="leadership" className={`portfolio-leadership ${compact ? "portfolio-leadership--compact" : ""}`}>
      <div className="shell">
        <SectionTitle
          kicker={lang === "fa" ? "راهبری گروه" : "GROUP LEADERSHIP"}
          title={lang === "fa" ? "مدیریت کارآفرین؛ نگاه صنعتی و افق جهانی" : "Entrepreneurial leadership. Industrial vision. Global horizon."}
          text={lang === "fa" ? "توسعه صباح بر تصمیم‌گیری بلندمدت، یکپارچگی زنجیره و سرمایه‌گذاری پیوسته در ظرفیت‌های جدید استوار است." : "Sabah’s development is grounded in long-term decisions, value-chain integration and continuous investment in new capacity."}
        />
        <div className="portfolio-leadership__feature">
          <figure className="portfolio-leadership__image">
            <Image
              src="/media/leadership-anonymous-executive.png"
              alt={lang === "fa" ? "نمای مدیریتی بدون نمایش چهره در دفتر گروه صنعتی صباح" : "Anonymous executive view in Sabah Industrial Group office"}
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
              unoptimized
            />
            <figcaption>{lang === "fa" ? "راهبری برای ساختن ظرفیت پایدار" : "Leadership for enduring capacity"}</figcaption>
          </figure>
          <article className="portfolio-leader portfolio-leader--featured">
            <span className="portfolio-leader__index">01</span>
            <div>
              <p>{leadLeader.role}</p>
              <h3>{leadLeader.name}</h3>
              <strong>{leadLeader.summary}</strong>
              {!compact && (
                <ul>
                  {leadLeader.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              )}
            </div>
          </article>
        </div>
        <div className="portfolio-leadership__pillars">
          <p>{lang === "fa" ? "ستون‌های راهبری" : "LEADERSHIP PILLARS"}</p>
          {pillars.map((pillar) => <article key={pillar[0]}><span>{pillar[0]}</span><h3>{pillar[1]}</h3><p>{pillar[2]}</p></article>)}
        </div>
        {!compact && (
          <div className="portfolio-leadership__team">
            {supportingLeaders.map((leader, index) => (
              <article key={leader.name} className="portfolio-leader">
                <span className="portfolio-leader__index">0{index + 2}</span>
                <div>
                  <p>{leader.role}</p>
                  <h3>{leader.name}</h3>
                  <strong>{leader.summary}</strong>
                  <ul>{leader.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        )}
        {compact && (
          <Link className="portfolio-inline-link portfolio-inline-link--dark" href={`/${lang}/about#leadership`}>
            {lang === "fa" ? "آشنایی با تیم راهبری" : "Meet the leadership team"} <Arrow />
          </Link>
        )}
      </div>
    </section>
  );
}

function HoldingsSection({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const items = compact ? holdings[lang].slice(0, 4) : holdings[lang];
  return (
    <section id="holdings" className="portfolio-holdings section">
      <div className="shell">
        <SectionTitle
          kicker={lang === "fa" ? "ساختار کسب‌وکار" : "BUSINESS STRUCTURE"}
          title={lang === "fa" ? "هفت حوزه، یک زنجیره ارزش مشترک" : "Seven sectors. One shared value chain."}
          text={lang === "fa" ? "هر حوزه با مأموریت تخصصی خود، قدرت تولید، کنترل کیفیت و دسترسی صباح به بازار را افزایش می‌دهد." : "Each sector has a specialist mandate that strengthens production, quality control and market access."}
        />
        <div className="portfolio-holdings__grid">
          {items.map((item) => (
            <article key={item[1]}>
              <span>{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </article>
          ))}
        </div>
        {compact && (
          <Link className="portfolio-inline-link portfolio-inline-link--dark" href={`/${lang}/about#holdings`}>
            {lang === "fa" ? "مشاهده ساختار کامل گروه" : "Explore the complete group structure"} <Arrow />
          </Link>
        )}
      </div>
    </section>
  );
}

function ProductsSection({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const items = compact ? products[lang].slice(0, 4) : products[lang];
  return (
    <section id="products" className="portfolio-products section">
      <div className="shell">
        <SectionTitle
          kicker={lang === "fa" ? "سبد محصولات" : "PRODUCT PORTFOLIO"}
          title={lang === "fa" ? "تنوعی کامل برای بازارهای داخلی و جهانی" : "A broad portfolio for domestic and global markets"}
          text={lang === "fa" ? "صباح دانش فنی، تحلیل بازار و توان تولید صنعتی را برای پاسخ‌گویی به نیازهای متنوع مصرف‌کنندگان ترکیب می‌کند." : "Sabah combines technical knowledge, market insight and industrial capacity to serve diverse consumer needs."}
        />
        <div className="portfolio-products__grid">
          {items.map((product, index) => (
            <article key={product.name} className="portfolio-product">
              <div className="portfolio-product__image">
                <Image src={product.image} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" unoptimized />
              </div>
              <span>0{index + 1}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>
        {compact && (
          <Link className="portfolio-inline-link portfolio-inline-link--dark" href={`/${lang}/companies#products`}>
            {lang === "fa" ? "مشاهده سبد کامل محصولات" : "View the complete product portfolio"} <Arrow />
          </Link>
        )}
      </div>
    </section>
  );
}

function AchievementsSection({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const items = compact ? achievements[lang].slice(0, 3) : achievements[lang];
  return (
    <section id="achievements" className="portfolio-achievements">
      <div className="shell">
        <SectionTitle
          light
          kicker={lang === "fa" ? "دستاوردها" : "ACHIEVEMENTS"}
          title={lang === "fa" ? "نوآوری‌هایی که به استاندارد صنعت تبدیل شدند" : "Innovations that became industry benchmarks"}
        />
        <div className="portfolio-achievements__list">
          {items.map((item, index) => (
            <article key={item[0]}>
              <span>0{index + 1}</span>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </article>
          ))}
        </div>
        {compact && (
          <Link className="portfolio-inline-link" href={`/${lang}/about#achievements`}>
            {lang === "fa" ? "تمام دستاوردهای صباح" : "See all Sabah achievements"} <Arrow />
          </Link>
        )}
      </div>
    </section>
  );
}

export function HomePortfolioSections({ lang }: { lang: Lang }) {
  return (
    <>
      <LeadershipSection lang={lang} compact />
      <HoldingsSection lang={lang} compact />
      <ProductsSection lang={lang} compact />
      <AchievementsSection lang={lang} compact />
    </>
  );
}

function InternationalSection({ lang }: { lang: Lang }) {
  return (
    <section id="global-portfolio" className="portfolio-global section">
      <div className="shell">
        <SectionTitle
          kicker={lang === "fa" ? "حضور بین‌المللی" : "INTERNATIONAL PRESENCE"}
          title={lang === "fa" ? "صادرات، تولید و سرمایه‌گذاری فراتر از مرزها" : "Exports, production and investment beyond borders"}
          text={lang === "fa" ? "صباح سالانه بیش از ۱۰۰ میلیون دلار صادرات دارد و هم‌زمان زیرساخت حضور پایدار خود را در بازارهای منطقه‌ای و جهانی توسعه می‌دهد." : "Sabah exports more than $100 million annually while building lasting operating and commercial positions across regional and global markets."}
        />
        <div className="portfolio-global__projects">
          {internationalProjects[lang].map((project, index) => (
            <article key={project[0]}>
              <span>0{index + 1}</span>
              <h3>{project[0]}</h3>
              <p>{project[1]}</p>
            </article>
          ))}
        </div>
        <div className="portfolio-markets">
          <p>{lang === "fa" ? "بازارهای صادراتی فعال" : "ACTIVE EXPORT MARKETS"}</p>
          <div>{exportMarkets[lang].map((market) => <span key={market}>{market}</span>)}</div>
        </div>
      </div>
    </section>
  );
}

function VisionSection({ lang }: { lang: Lang }) {
  const vision = futureVision[lang];
  return (
    <section id="future" className="portfolio-vision">
      <div className="portfolio-vision__image" />
      <div className="shell portfolio-vision__content">
        <p>{lang === "fa" ? "چشم‌انداز آینده" : "FUTURE VISION"}</p>
        <h2>{vision.title}</h2>
        <span>{vision.text}</span>
        <ol>
          {vision.commitments.map((commitment, index) => (
            <li key={commitment}><b>0{index + 1}</b>{commitment}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function AboutPortfolioPage({ lang }: { lang: Lang }) {
  const story = groupStory[lang];
  const chapters = lang === "fa"
    ? [["روایت گروه", "story"], ["راهبری", "leadership"], ["ساختار کسب‌وکار", "holdings"], ["دستاوردها", "achievements"], ["حضور جهانی", "global-portfolio"], ["چشم‌انداز", "future"]]
    : [["Group story", "story"], ["Leadership", "leadership"], ["Business structure", "holdings"], ["Achievements", "achievements"], ["Global presence", "global-portfolio"], ["Future vision", "future"]];

  return (
    <>
      <nav className="about-subnav portfolio-subnav" aria-label={lang === "fa" ? "فصل‌های معرفی صباح" : "About Sabah chapters"}>
        <div className="shell">
          {chapters.map((chapter, index) => <a href={`#${chapter[1]}`} key={chapter[1]}><span>0{index + 1}</span>{chapter[0]}</a>)}
        </div>
      </nav>
      <section id="story" className="portfolio-story section">
        <div className="shell portfolio-story__grid">
          <div className="portfolio-story__visual">
            <Image src="/media/page-companies-hero-premium.png" alt="" fill sizes="(max-width: 800px) 100vw, 44vw" unoptimized />
            <span>EST. 2005 / IR</span>
          </div>
          <div>
            <SectionTitle kicker={story.kicker} title={story.title} />
            {story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="shell portfolio-timeline">
          {story.milestones.map((milestone) => (
            <article key={milestone[0]}><b>{milestone[0]}</b><p>{milestone[1]}</p></article>
          ))}
        </div>
      </section>
      <LeadershipSection lang={lang} />
      <HoldingsSection lang={lang} />
      <AchievementsSection lang={lang} />
      <InternationalSection lang={lang} />
      <VisionSection lang={lang} />
    </>
  );
}

function CompanyDirectory({ lang }: { lang: Lang }) {
  const all = portfolioCompanies[lang];
  const categories = useMemo(() => ["all", ...Array.from(new Set(all.map((item) => item[0])))], [all]);
  const [active, setActive] = useState("all");
  const visible = active === "all" ? all : all.filter((item) => item[0] === active);

  return (
    <div className="portfolio-directory">
      <div className="portfolio-directory__filters">
        {categories.map((category) => (
          <button key={category} type="button" className={category === active ? "is-active" : ""} onClick={() => setActive(category)}>
            {category === "all" ? (lang === "fa" ? "همه مجموعه‌ها" : "All entities") : category}
          </button>
        ))}
      </div>
      <div className="portfolio-directory__list">
        {visible.map((company, index) => (
          <article key={`${company[0]}-${company[1]}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><small>{company[0]}</small><h3>{company[1]}</h3></div>
            <div><b>{company[2]}</b><p>{company[3]}</p></div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function CompaniesPortfolioPage({ lang }: { lang: Lang }) {
  return (
    <>
      <section id="key-companies" className="portfolio-key-companies section">
        <div className="shell">
          <SectionTitle
            kicker={lang === "fa" ? "شرکت‌های محوری" : "CORE OPERATING COMPANIES"}
            title={lang === "fa" ? "ظرفیت‌های مستند در قلب اکوسیستم صباح" : "Documented operating capacity at the heart of Sabah"}
            text={lang === "fa" ? "هفت شرکت کلیدی، بخشی از مقیاس تولید، نوآوری، لجستیک و دسترسی گروه به بازار را نمایندگی می‌کنند." : "Seven key companies represent the group’s production scale, innovation, logistics and market reach."}
          />
          <div className="portfolio-key-companies__grid">
            {companyProfiles[lang].map((company, index) => (
              <article key={company.name}>
                <span>0{index + 1}</span>
                <p>{company.label}</p>
                <h3>{company.name}</h3>
                <ul>{company.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
                <strong>{company.products}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ProductsSection lang={lang} />
      <section id="directory" className="portfolio-all-companies section">
        <div className="shell">
          <SectionTitle
            kicker={lang === "fa" ? "پرتفوی کامل گروه" : "FULL GROUP PORTFOLIO"}
            title={lang === "fa" ? "شرکت‌ها و مجموعه‌های فعال در سراسر زنجیره ارزش" : "Companies and operating entities across the value chain"}
            text={lang === "fa" ? "فیلتر کنید تا شرکت‌های هر حوزه را جداگانه ببینید." : "Filter the portfolio to explore each business sector."}
          />
          <CompanyDirectory lang={lang} />
        </div>
      </section>
      <section className="portfolio-scale-band">
        <div className="shell">
          <div>
            <span>1399</span>
            <strong>{lang === "fa" ? "۱۸٬۰۰۰ تن فروش" : "18,000 tons sold"}</strong>
          </div>
          <i />
          <div>
            <span>1403</span>
            <strong>{lang === "fa" ? "۱۲۵٬۰۰۰ تن فروش" : "125,000 tons sold"}</strong>
          </div>
          <p>{lang === "fa" ? "رشد چشمگیر حجم فروش در چهار سال" : "Substantial sales-volume growth in four years"}</p>
        </div>
      </section>
    </>
  );
}

export function NewsPortfolioPage({ lang }: { lang: Lang }) {
  const stories = lang === "fa"
    ? [
      ["نوآوری", "نخستین پنیر خامه‌ای UF خاورمیانه", "روایت توسعه فناوری اولترافیلتراسیون و تبدیل صباح به مرجع نوآوری در پنیر."],
      ["صادرات", "بیش از ۱۰۰ میلیون دلار صادرات سالانه", "چگونگی توسعه بازارهای صباح از روسیه و کانادا تا خلیج فارس و آسیای مرکزی."],
      ["توسعه ظرفیت", "فاز دوم صباح پودر و عبور از ۱۰ هزار تن", "برنامه افزایش ظرفیت سالانه پنیرهای فرآوری‌شده و توسعه محصولات پودری."],
      ["بازار", "رشد فروش از ۱۸ هزار به ۱۲۵ هزار تن", "تصویری از توسعه تولید، شبکه فروش و نفوذ بازار در فاصله سال‌های ۱۳۹۹ تا ۱۴۰۳."],
      ["شبکه ملی", "۲۹ شعبه در ۱۸ استان", "پشت صحنه یکی از گسترده‌ترین شبکه‌های فروش و توزیع زنجیره سرد کشور."],
      ["حضور جهانی", "اسپانیا، عراق و تانزانیا", "مسیر توسعه صباح از تولید و دامپروری تا تجارت و سرمایه‌گذاری بین‌المللی."],
    ]
    : [
      ["Innovation", "The Middle East’s first UF cream cheese", "The development of ultrafiltration technology and Sabah’s role as a reference point for cheese innovation."],
      ["Exports", "More than $100 million in annual exports", "How Sabah has expanded from Russia and Canada to the Gulf and Central Asia."],
      ["Capacity", "Sabah Powder phase two and the 10,000-ton threshold", "Plans to expand annual processed-cheese capacity and powder products."],
      ["Market", "Sales growth from 18,000 to 125,000 tons", "A view of production, distribution and market expansion between 2020/21 and 2024/25."],
      ["National network", "29 branches across 18 provinces", "Inside one of the country’s broadest cold-chain sales and distribution platforms."],
      ["Global presence", "Spain, Iraq and Tanzania", "Sabah’s path from production and livestock to international trade and investment."],
    ];

  return (
    <section id="portfolio-dossiers" className="portfolio-news section">
      <div className="shell">
        <SectionTitle
          kicker={lang === "fa" ? "پرونده‌های صباح" : "SABAH DOSSIERS"}
          title={lang === "fa" ? "داستان‌های مستند از رشد، نوآوری و بازار" : "Documented stories of growth, innovation and market expansion"}
          text={lang === "fa" ? "این بخش بر مبنای مهم‌ترین دستاوردها و برنامه‌های رسمی معرفی‌شده در پورتفولیوی گروه تنظیم شده است." : "This section is based on the major achievements and official plans presented in the group portfolio."}
        />
        <article className="portfolio-news__feature">
          <div className="portfolio-news__feature-image">
            <Image src="/media/production.jpg" alt="" fill sizes="(max-width: 800px) 100vw, 55vw" unoptimized />
          </div>
          <div><span>01 / {stories[0][0]}</span><h2>{stories[0][1]}</h2><p>{stories[0][2]}</p></div>
        </article>
        <div className="portfolio-news__grid">
          {stories.slice(1).map((story, index) => (
            <article key={story[1]}>
              <span>0{index + 2}</span>
              <small>{story[0]}</small>
              <h3>{story[1]}</h3>
              <p>{story[2]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
