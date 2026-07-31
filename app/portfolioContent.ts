import type { Lang } from "./SabahSite";

export type Bilingual<T> = Record<Lang, T>;

export const portfolioStats: Bilingual<string[][]> = {
  fa: [
    ["۲۰+", "سال سابقه فعالیت گروه"],
    ["۵۰۰۰+", "فرصت شغلی مستقیم"],
    ["۱۱۰۰+", "تن دریافت روزانه شیر خام"],
    ["۱۰۰+", "میلیون دلار صادرات سالانه"],
    ["۲۹", "شعبه در ۱۸ استان"],
    ["۳۰+", "بازار صادراتی"],
  ],
  en: [
    ["20+", "Years of group operations"],
    ["5,000+", "Direct employment opportunities"],
    ["1,100+", "Tons of raw milk received daily"],
    ["$100M+", "Annual exports"],
    ["29", "Branches across 18 provinces"],
    ["30+", "Export markets"],
  ],
};

export const groupStory: Bilingual<{
  kicker: string;
  title: string;
  paragraphs: string[];
  milestones: string[][];
}> = {
  fa: {
    kicker: "روایت گروه",
    title: "از یک واحد تولیدی در گلستان تا یک هلدینگ غذایی، کشاورزی و صنعتی",
    paragraphs: [
      "گروه صنعتی صباح با بیش از دو دهه فعالیت، یکی از بزرگ‌ترین و معتبرترین تولیدکنندگان محصولات لبنی ایران است. مسیر توسعه گروه بر یک اصل روشن بنا شده است: نظارت مستقیم بر همه مراحل تولید، از خوراک دام و تأمین شیر خام تا فرآوری، بسته‌بندی، لجستیک، توزیع و صادرات.",
      "این مدل یکپارچه، کیفیت و تازگی محصول را پایدار می‌کند و هم‌زمان ظرفیت توسعه کسب‌وکارهای مکمل را به وجود می‌آورد. امروز صباح علاوه بر صنایع لبنی، در کشاورزی و دامپروری، خوراک دام و طیور، بسته‌بندی، حمل‌ونقل، تجارت بین‌المللی، معدن و انرژی حضور دارد.",
      "گروه با اتکا به مدیران کارآفرین، نیروی انسانی متخصص، فناوری‌های پیشرفته و سرمایه‌گذاری مستمر، محصولات خود را در بازار ایران و ده‌ها بازار بین‌المللی عرضه می‌کند.",
    ],
    milestones: [
      ["۱۳۷۹", "راه‌اندازی صنایع شیر فجر گنبد در گنبد کاووس"],
      ["۱۳۸۳", "آغاز فعالیت فرآورده‌های لبنی گلستان صباح در آزادشهر"],
      ["۱۳۸۴", "تأسیس محصولات لبنی صباح و آغاز تولید پنیر"],
      ["۱۳۹۸", "راه‌اندازی کاویش لبن طبرستان برای پنیرهای تخصصی"],
      ["۱۴۰۴", "توسعه سایت شیر فجر صباح اصفهان و ظرفیت‌های پودر، فتا و کره"],
      ["امروز", "یک اکوسیستم چندرشته‌ای با تولید، توزیع و حضور بین‌المللی"],
    ],
  },
  en: {
    kicker: "OUR STORY",
    title: "From one production unit in Golestan to an integrated food, agriculture and industrial holding",
    paragraphs: [
      "With more than two decades of operations, Sabah Industrial Group is one of Iran’s largest and most established dairy producers. Its growth is built on one clear principle: direct oversight across the full journey, from animal feed and raw-milk supply to processing, packaging, logistics, distribution and export.",
      "This integrated model protects product quality and freshness while creating a platform for complementary businesses. Today, Sabah operates across dairy, agriculture and livestock, animal feed, packaging, transportation, international trade, mining and energy.",
      "Entrepreneurial leadership, skilled people, advanced technology and continuous investment enable the group to serve Iran and dozens of international markets.",
    ],
    milestones: [
      ["2000", "Fajr Gonbad Dairy Industries begins operations in Gonbad-e Kavus"],
      ["2004", "Golestan Sabah Dairy Products begins operations in Azadshahr"],
      ["2005", "Sabah Dairy Products is established and cheese production begins"],
      ["2019", "Kavish Laban Tabarestan launches specialist cheese production"],
      ["2025", "Sabah Shir Fajr Isfahan expands powder, feta and butter capacity"],
      ["Today", "A diversified ecosystem with national scale and international reach"],
    ],
  },
};

export const leadership: Bilingual<Array<{
  name: string;
  role: string;
  summary: string;
  details: string[];
}>> = {
  fa: [
    {
      name: "مهندس احمد ابراهیمی",
      role: "رئیس هیئت‌مدیره و مدیرعامل هلدینگ صنعتی صباح",
      summary: "بنیان‌گذار گروه و معمار توسعه یک زنجیره ارزش یکپارچه در صنایع غذایی و کشاورزی.",
      details: [
        "بیش از سه دهه فعالیت در صنعت غذا و لبنیات و تبدیل یک واحد تولیدی کوچک به یکی از بزرگ‌ترین هلدینگ‌های غذایی و کشاورزی منطقه.",
        "رهبری نوآوری‌هایی مانند نخستین پنیر خامه‌ای اولترافیلتراسیون در خاورمیانه، نخستین پنیر بسته‌بندی‌شده در شیشه و تولید صنعتی محصولات سنتی بر پایه شیر گوسفندی.",
        "توسعه صادرات، کارخانه عراق، همکاری دامپروری در اسپانیا، سرمایه‌گذاری معدنی در تانزانیا و برنامه ورود به بازارهای چین و تایلند.",
      ],
    },
    {
      name: "حاج سلطان‌علی ابراهیمی",
      role: "نایب‌رئیس هیئت‌مدیره و مدیرعامل شرکت‌های بسته‌بندی و دامپروری",
      summary: "مسئول هدایت و نظارت بر شرکت‌های کلیدی بسته‌بندی، کشاورزی و دامپروری گروه.",
      details: [
        "راهبری مجموعه‌هایی از جمله صباح کارتن، صباح یک، کشت‌وصنعت صباح و دامداری چناران.",
        "تمرکز بر توسعه زیرساخت‌های تأمین، دامپروری مدرن و بسته‌بندی بهداشتی و تخصصی.",
      ],
    },
    {
      name: "دکتر محمود ابراهیمی",
      role: "قائم‌مقام مدیرعامل و معاون بازرگانی هلدینگ صنعتی صباح",
      summary: "کارآفرین و مدیر توسعه زنجیره تولید، فروش، توزیع و صادرات گروه.",
      details: [
        "بیش از ۲۵ سال تجربه حرفه‌ای در صنعت لبنیات ایران.",
        "نقش کلیدی در توسعه بیش از ۲۵ شعبه و ستاد فروش، راهبری بیش از ۱۲ واحد تولیدی و صادرات محصولات به بیش از ۳۰ کشور.",
      ],
    },
  ],
  en: [
    {
      name: "Ahmad Ebrahimi",
      role: "Chairman and Chief Executive Officer",
      summary: "Founder of the group and architect of its integrated food and agriculture value chain.",
      details: [
        "More than three decades in food and dairy, transforming a small production unit into one of the region’s major food and agriculture holdings.",
        "Led innovations including the Middle East’s first UF cream cheese, Iran’s first cheese packed in glass, and industrial production of traditional sheep-milk products.",
        "Advanced exports, the Iraq manufacturing operation, livestock cooperation in Spain, mining investment in Tanzania, and planned entry into China and Thailand.",
      ],
    },
    {
      name: "Soltan Ali Ebrahimi",
      role: "Vice Chairman and CEO of Packaging and Livestock Companies",
      summary: "Leads key packaging, agriculture and livestock companies across the group.",
      details: [
        "Directs businesses including Sabah Carton, Sabah Yek, Sabah Agro-Industry and Chenaran Livestock.",
        "Focuses on modern livestock, secure supply and hygienic specialist packaging infrastructure.",
      ],
    },
    {
      name: "Mahmoud Ebrahimi",
      role: "Deputy CEO and Vice President of Commerce",
      summary: "Leads the expansion of production, sales, distribution and export operations.",
      details: [
        "More than 25 years of professional experience in Iran’s dairy industry.",
        "Instrumental in developing more than 25 sales branches, overseeing more than 12 production units and extending exports to more than 30 countries.",
      ],
    },
  ],
};

export const holdings: Bilingual<string[][]> = {
  fa: [
    ["01", "صنعت غذا", "شش واحد تولید لبنیات؛ پنج سایت در ایران و یک سایت در عراق، با خطوط مدرن و خودکار و سبدی متنوع از محصولات لبنی."],
    ["02", "کشاورزی و دامپروری", "مزارع و دامداری‌های مدرن در ایران و اسپانیا؛ مدیریت بیش از ۲۱ هزار رأس گوسفند لاکن فرانسوی و آساف اسپانیایی و برنامه توسعه تا دو میلیون رأس."],
    ["03", "خوراک دام و طیور", "تولید خوراک تخصصی مطابق استانداردهای بین‌المللی برای شرکت‌های گروه و بازار آزاد دامپروری."],
    ["04", "صنعت بسته‌بندی", "چهار شرکت تخصصی برای تولید کارتن، جعبه، قوطی فلزی و بسته‌بندی‌های غذایی مورد نیاز گروه و بازارهای داخلی و صادراتی."],
    ["05", "حمل‌ونقل و لجستیک", "حمل زمینی، یخچالی و کانتینری با کامیون‌های یخچالی، تانکر شیر و ناوگان تخصصی صادرات و زنجیره سرد."],
    ["06", "تجارت و سرمایه‌گذاری بین‌المللی", "شرکت‌های تجاری در دبی، ترکیه و تانزانیا، واردات نهاده و مواد شیمیایی، توسعه صادرات و سرمایه‌گذاری معدنی."],
    ["07", "پتروشیمی و انرژی", "سرمایه‌گذاری در ساخت مجتمع پتروپالایشگاهی در جنوب ایران برای تولید محصولات نفتی و پتروشیمی با ارزش افزوده بالا."],
  ],
  en: [
    ["01", "Food Industry", "Six dairy production units—five in Iran and one in Iraq—with modern automated lines and a broad dairy portfolio."],
    ["02", "Agriculture & Livestock", "Modern farms in Iran and Spain; more than 21,000 French Lacaune and Spanish Assaf sheep, with a long-term plan to reach two million head."],
    ["03", "Animal & Poultry Feed", "Specialist feed formulated to international standards for group companies and the wider livestock market."],
    ["04", "Packaging Industry", "Four specialist companies producing cartons, boxes, metal cans and food packaging for the group and domestic and export customers."],
    ["05", "Transportation & Logistics", "Ground, refrigerated and container transport through cold-chain trucks, milk tankers and export-specialist fleets."],
    ["06", "International Trade & Investment", "Trading companies in Dubai, Türkiye and Tanzania, feed-input and chemical imports, export development and mining investment."],
    ["07", "Petrochemicals & Energy", "Investment in a southern Iran petro-refinery complex designed to produce higher-value petroleum and petrochemical products."],
  ],
};

export const achievements: Bilingual<string[][]> = {
  fa: [
    ["نوآوری منطقه‌ای", "نخستین تولیدکننده پنیر خامه‌ای با فناوری اولترافیلتراسیون در خاورمیانه."],
    ["نوآوری در بسته‌بندی", "نخستین تولید پنیر بسته‌بندی‌شده در شیشه و تنها تولیدکننده پنیر خامه‌ای و پروسس چدار در شیشه در ایران."],
    ["محصولات گوسفندی", "راه‌اندازی نخستین خط صنعتی محصولات سنتی بر پایه شیر گوسفندی."],
    ["کیفیت برتر", "دریافت عنوان بهترین پنیر ایرانی در جشنواره ملی شیر."],
    ["صادرکننده نمونه", "تقدیر مکرر به‌عنوان صادرکننده نمونه ملی از سال ۲۰۰۶."],
    ["رشد فروش", "افزایش حجم فروش از ۱۸ هزار تن در سال ۱۳۹۹ به ۱۲۵ هزار تن در سال ۱۴۰۳."],
  ],
  en: [
    ["Regional innovation", "The Middle East’s first producer of cream cheese using ultrafiltration technology."],
    ["Packaging innovation", "Iran’s first cheese in glass and the country’s only producer of glass-packed cream cheese and processed cheddar."],
    ["Sheep-milk products", "The first industrial line for traditional sheep-milk products."],
    ["Quality leadership", "Winner of Best Iranian Cheese at the National Milk Festival."],
    ["National exporter", "Repeatedly recognized as a National Exemplary Exporter since 2006."],
    ["Sales growth", "Sales volume grew from 18,000 tons in 2020/21 to 125,000 tons in 2024/25."],
  ],
};

export const products: Bilingual<Array<{
  name: string;
  description: string;
  image: string;
}>> = {
  fa: [
    { name: "پنیر", description: "پنیر سفید، لاکتیکی، خامه‌ای، لبنه، بلغاری، فرآوری‌شده، موزارلا، چدار، حلومی، فتا و پنیرهای تخصصی.", image: "/media/portfolio-cheese.jpeg" },
    { name: "محصولات گوسفندی", description: "محصولات متمایز بر پایه شیر گوسفندی با تمرکز بر طعم اصیل، ارزش تغذیه‌ای و کیفیت صادراتی.", image: "/media/portfolio-sheep-dairy-premium.png" },
    { name: "شیر و خامه", description: "شیر پاستوریزه و UHT همراه با خامه تازه و استریل‌شده.", image: "/media/portfolio-dairy-basket.jpeg" },
    { name: "ماست", description: "ماست هم‌زده، سنتی، کم‌چرب، پرچرب، پروبیوتیک و طعم‌دار.", image: "/media/portfolio-family.jpeg" },
    { name: "نوشیدنی‌های لبنی", description: "دوغ ساده و کفیر با طعم‌های اصیل و سنتی برای مصرف روزانه.", image: "/media/portfolio-dairy-basket.jpeg" },
    { name: "کشک", description: "کشک پاستوریزه تهیه‌شده از مواد اولیه منتخب و سرشار از ارزش تغذیه‌ای.", image: "/media/portfolio-family.jpeg" },
    { name: "پودر و کره", description: "شیرخشک، پودرهای Fine و Instant، پودر آب‌پنیر و کره بسته‌بندی‌شده و بالک.", image: "/media/portfolio-factory-line.jpeg" },
  ],
  en: [
    { name: "Cheese", description: "White, lactic, cream, labneh, Bulgarian, processed, mozzarella, cheddar, halloumi, feta and specialist cheeses.", image: "/media/portfolio-cheese.jpeg" },
    { name: "Sheep-milk products", description: "Distinctive sheep-milk products focused on authentic taste, nutrition and export-grade quality.", image: "/media/portfolio-sheep-dairy-premium.png" },
    { name: "Milk & cream", description: "Pasteurized and UHT milk together with fresh and sterilized cream.", image: "/media/portfolio-dairy-basket.jpeg" },
    { name: "Yogurt", description: "Stirred, traditional, low-fat, full-fat, probiotic and flavored yogurts.", image: "/media/portfolio-family.jpeg" },
    { name: "Dairy beverages", description: "Traditional doogh and kefir for healthy everyday consumption.", image: "/media/portfolio-dairy-basket.jpeg" },
    { name: "Kashk", description: "Pasteurized kashk made from selected ingredients and rich in nutritional value.", image: "/media/portfolio-family.jpeg" },
    { name: "Powders & butter", description: "Milk powder, Fine and Instant powders, whey powder, and packaged and bulk butter.", image: "/media/portfolio-factory-line.jpeg" },
  ],
};

export const portfolioCompanies: Bilingual<string[][]> = {
  fa: [
    ["صنایع لبنی", "صنایع شیر فجر گنبد", "گنبد کاووس", "پنیر UF و محصولات لبنی"],
    ["صنایع لبنی", "فرآورده‌های لبنی گلستان صباح", "آزادشهر، گلستان", "پنیر خامه‌ای UF و محصولات شیشه‌ای"],
    ["صنایع لبنی", "صنایع لبنی فجر آساک قوچان", "قوچان", "تولید منطقه‌ای محصولات لبنی"],
    ["صنایع لبنی", "گل یاس آذین", "اصفهان", "پنیر، ماست، دوغ، کشک و محصولات فراسودمند"],
    ["صنایع لبنی", "شیر فجر صباح اصفهان", "اصفهان", "شیرخشک، پودر، پنیر فتا و کره"],
    ["صنایع لبنی", "کاویش لبن طبرستان", "مازندران", "پنیرهای تخصصی و رژیمی"],
    ["صنایع لبنی", "صنایع میسان", "عراق", "تولید لبنیات برای بازار منطقه"],
    ["صنایع غذایی", "صباح پودر فجر", "گلستان", "پنیر فرآوری‌شده و پودر آب‌پنیر"],
    ["کشاورزی و دامپروری", "صباح یک", "ایران", "کشاورزی و دامپروری یکپارچه"],
    ["کشاورزی و دامپروری", "دامداری چناران", "خراسان رضوی", "دامپروری مدرن و تأمین شیر"],
    ["کشاورزی و دامپروری", "ستاره طبیعت", "ایران", "کشت‌وصنعت"],
    ["کشاورزی و دامپروری", "رویش طلایی", "ایران", "کشت‌وصنعت"],
    ["کشاورزی و دامپروری", "ناربن", "ایران", "کشاورزی و صنایع وابسته"],
    ["کشاورزی و دامپروری", "کشت و صنعت فجر خزر صباح", "شمال ایران", "کشاورزی و زنجیره تأمین"],
    ["کشاورزی و دامپروری", "کشت و صنعت فجر گلستان", "گلستان", "تولیدات کشاورزی"],
    ["کشاورزی و دامپروری", "آبزی‌پروران ارون", "ایران", "آبزی‌پروری"],
    ["خوراک دام", "خوراک دام و طیور مینو صباح", "ایران", "خوراک و نهاده‌های تخصصی"],
    ["بسته‌بندی", "صنایع بسته‌بندی فجر گلستان", "گلستان", "بسته‌بندی بهداشتی مواد غذایی"],
    ["بسته‌بندی", "صباح کارتن", "ایران", "کارتن و جعبه"],
    ["بسته‌بندی", "صباح باکس", "ایران", "محصولات متنوع جعبه"],
    ["بسته‌بندی", "پتروجام", "ایران", "تولید و تجارت محصولات بسته‌بندی"],
    ["لجستیک و توزیع", "صباح ترابر گنبد", "گنبد کاووس", "حمل یخچالی، شیر و صادرات"],
    ["لجستیک و توزیع", "پخش صباح فجر گنبد", "۱۸ استان", "فروش و توزیع زنجیره سرد"],
    ["تجارت و سرمایه‌گذاری", "توسعه بازرگانی پیشتاز", "بین‌المللی", "بازرگانی و توسعه بازار"],
    ["تجارت و سرمایه‌گذاری", "بازرگانی فجر صباح جهان", "تهران", "تجارت و توسعه صادرات"],
    ["تجارت و سرمایه‌گذاری", "ماهان تریدینگ", "بین‌المللی", "بازرگانی بین‌المللی"],
    ["تجارت و سرمایه‌گذاری", "گروه صنعتی بین‌المللی آداک", "بین‌المللی", "توسعه صنعتی"],
    ["تجارت و سرمایه‌گذاری", "توسعه سرمایه‌گذاری روشنگر", "ایران", "سرمایه‌گذاری و توسعه"],
    ["معدن و انرژی", "معدن‌کاران آکس", "بین‌المللی", "فعالیت‌های معدنی"],
    ["معدن و انرژی", "معدن‌کاران آموت", "بین‌المللی", "فعالیت‌های معدنی"],
    ["معدن و انرژی", "پروژه پتروپالایش جنوب", "جنوب ایران", "نفت و پتروشیمی با ارزش افزوده"],
    ["خدمات و مهمان‌نوازی", "میل‌بل", "ایران", "خدمات غذایی"],
    ["خدمات و مهمان‌نوازی", "مون‌آرک", "ایران", "مجموعه رستورانی"],
  ],
  en: [
    ["Dairy", "Fajr Gonbad Dairy Industries", "Gonbad-e Kavus", "UF cheese and dairy products"],
    ["Dairy", "Golestan Sabah Dairy Products", "Azadshahr, Golestan", "UF cream cheese and glass-packed products"],
    ["Dairy", "Fajr Asak Quchan Dairy Industries", "Quchan", "Regional dairy manufacturing"],
    ["Dairy", "Gol Yas Azin", "Isfahan", "Cheese, yogurt, doogh, kashk and functional products"],
    ["Dairy", "Sabah Shir Fajr Isfahan", "Isfahan", "Milk powder, feta and butter"],
    ["Dairy", "Kavish Laban Tabarestan", "Mazandaran", "Specialist and dietary cheeses"],
    ["Dairy", "Maysan Dairy Industries", "Iraq", "Dairy production for regional markets"],
    ["Food Industry", "Sabah Powder Fajr", "Golestan", "Processed cheese and whey powder"],
    ["Agriculture & Livestock", "Sabah Yek", "Iran", "Integrated agriculture and livestock"],
    ["Agriculture & Livestock", "Chenaran Livestock", "Razavi Khorasan", "Modern livestock and milk supply"],
    ["Agriculture & Livestock", "Setareh Tabiat Agro-Industry", "Iran", "Agro-industry"],
    ["Agriculture & Livestock", "Royesh Talaei Agro-Industry", "Iran", "Agro-industry"],
    ["Agriculture & Livestock", "Narbon Agriculture & Industry", "Iran", "Agriculture and related industries"],
    ["Agriculture & Livestock", "Fajr Khazar Sabah Agro-Industry", "Northern Iran", "Agriculture and supply chain"],
    ["Agriculture & Livestock", "Fajr Golestan Agro-Industry", "Golestan", "Agricultural production"],
    ["Agriculture & Livestock", "Abzi Parvaran Arvand", "Iran", "Aquaculture"],
    ["Animal Feed", "Minoo Sabah Animal & Poultry Feed", "Iran", "Specialist feed and inputs"],
    ["Packaging", "Fajr Golestan Packaging Industries", "Golestan", "Hygienic food packaging"],
    ["Packaging", "Sabah Carton", "Iran", "Cartons and boxes"],
    ["Packaging", "Sabah Box", "Iran", "Diverse box products"],
    ["Packaging", "Petrojam", "Iran", "Packaging production and trade"],
    ["Logistics & Distribution", "Sabah Tarabar Gonbad", "Gonbad-e Kavus", "Refrigerated, milk and export transport"],
    ["Logistics & Distribution", "Sabah Distribution Fajr Gonbad", "18 provinces", "Cold-chain sales and distribution"],
    ["Trade & Investment", "Pishtaz Trade Development", "International", "Commerce and market development"],
    ["Trade & Investment", "Fajr Sabah Jahan Trading", "Tehran", "Trade and export development"],
    ["Trade & Investment", "Mahan Trading", "International", "International commerce"],
    ["Trade & Investment", "Adak International Industrial Group", "International", "Industrial development"],
    ["Trade & Investment", "Roshangar Investment Development", "Iran", "Investment and development"],
    ["Mining & Energy", "Madan Karan Ax", "International", "Mining activities"],
    ["Mining & Energy", "Madan Karan Amoot", "International", "Mining activities"],
    ["Mining & Energy", "Southern Petro-Refinery Project", "Southern Iran", "Higher-value petroleum and petrochemicals"],
    ["Foodservice & Hospitality", "Meal Bell", "Iran", "Food services"],
    ["Foodservice & Hospitality", "Mon Arch", "Iran", "Restaurant complex"],
  ],
};

export const companyProfiles: Bilingual<Array<{
  name: string;
  label: string;
  facts: string[];
  products: string;
}>> = {
  fa: [
    {
      name: "صنایع شیر فجر گنبد",
      label: "پیشرو در تولید پنیر UF در ایران",
      facts: ["تأسیس در سال ۱۳۷۹ در گنبد کاووس", "دریافت روزانه ۵۰۰ تن شیر", "تولید روزانه ۱۰۰ تن پنیر تازه", "دارای ISO 9001، ISO 14001، ISO 45001، ISO 22000 و HACCP"],
      products: "پنیر UF، پنیر کوزه‌ای، لبنه و پنیرهای ۴۰۰ گرمی با سهم عمده بازار.",
    },
    {
      name: "گل یاس آذین",
      label: "تولید متنوع و صادرات‌محور",
      facts: ["آغاز فعالیت در سال ۱۳۸۰ و نوسازی در سال ۱۳۹۳", "فرآوری ماهانه حدود ۳۵۰۰ تن شیر خام", "صادرات به کانادا، عراق، ترکمنستان و اقلیم کردستان", "دارای استانداردهای ISO و افتخارات ملی کیفیت"],
      products: "پنیر، ماست، دوغ، کشک، کفیر، ماست پروبیوتیک و پنیر غنی‌شده با ویتامین D.",
    },
    {
      name: "شیر فجر صباح اصفهان",
      label: "سایت یکپارچه پودر، فتا و کره",
      facts: ["راه‌اندازی در سال ۱۴۰۴ در زمینی به مساحت ۶۲۰۰ مترمربع", "ظرفیت تولید روزانه ۵۰ تن", "نخستین سایت تولید کره بسته‌بندی گروه با ظرفیت ۳۰ تن در روز", "سه واحد اصلی شیرخشک و پودر، پنیر فتا و کره"],
      products: "پودرهای Fine و Instant، پنیر فتا و کره در اوزان مصرفی و صنعتی.",
    },
    {
      name: "کاویش لبن طبرستان",
      label: "پنیرهای تخصصی برای بازارهای جدید",
      facts: ["آغاز فعالیت در سال ۱۳۹۸", "کارخانه مجهز و مدرن", "تمرکز بر کیفیت جهانی و بازارهای بین‌المللی", "توسعه فرمولاسیون‌های رژیمی و گوسفندی"],
      products: "پنیرهای تخصصی، پارمزان و پنیر رژیمی فتا «بله‌بانو».",
    },
    {
      name: "فرآورده‌های لبنی گلستان صباح",
      label: "مرجع نوآوری محصول و بسته‌بندی",
      facts: ["شروع فعالیت در سال ۱۳۸۳ در شهرک صنعتی آزادشهر", "نخستین تولیدکننده پنیر خامه‌ای UF در خاورمیانه", "تنها تولیدکننده پنیر خامه‌ای و پروسس چدار در شیشه در ایران", "باکتریفیوژ پیشرفته و تصفیه‌خانه صنعتی فاضلاب"],
      products: "پنیر خامه‌ای، پنیر سبزیجات، پنیر جار، دیپ چدار و شیر تغلیظ‌شده شیرین.",
    },
    {
      name: "صباح ترابر گنبد",
      label: "زیرساخت حمل‌ونقل و زنجیره سرد",
      facts: ["ایجاد اشتغال مستقیم برای ۳۰۰ نفر", "۳۳ کشنده و ۳۳ یخچال‌دار", "۱۱ تانکر حمل شیر", "۵۹ کامیونت ایسوزو و ۵۵ کامیونت زامیاد"],
      products: "حمل محصولات لبنی از آزادشهر، قوچان و اصفهان به سراسر کشور و حمل صادراتی تا مرزهای مختلف.",
    },
    {
      name: "پخش صباح فجر گنبد",
      label: "شبکه توزیع گسترده و نفوذی",
      facts: ["بیش از دو دهه تجربه", "۲۹ شعبه در ۱۸ استان", "بیش از ۴۰۰ وسیله نقلیه توزیع", "حفظ کامل زنجیره سرد تا نقطه فروش"],
      products: "فروش و توزیع سریع و کنترل‌شده محصولات گروه در بازار ایران.",
    },
  ],
  en: [
    {
      name: "Fajr Gonbad Dairy Industries",
      label: "A pioneer of UF cheese in Iran",
      facts: ["Established in 2000 in Gonbad-e Kavus", "500 tons of raw milk received daily", "100 tons of fresh cheese produced daily", "ISO 9001, ISO 14001, ISO 45001, ISO 22000 and HACCP"],
      products: "UF cheese, jar cheese, labneh and 400-gram cheeses with a major market position.",
    },
    {
      name: "Gol Yas Azin",
      label: "Diversified, export-oriented production",
      facts: ["Operations began in 2001 and were modernized in 2014", "Approximately 3,500 tons of raw milk processed monthly", "Exports to Canada, Iraq, Turkmenistan and the Kurdistan Region", "ISO standards and national quality awards"],
      products: "Cheese, yogurt, doogh, kashk, kefir, probiotic yogurt and vitamin-D-enriched cheese.",
    },
    {
      name: "Sabah Shir Fajr Isfahan",
      label: "Integrated powder, feta and butter site",
      facts: ["Opened in 2025 on a 6,200 m² site", "50 tons of daily production capacity", "The group’s first packaged-butter site with 30 tons per day", "Three core units: milk powder, feta cheese and butter"],
      products: "Fine and Instant powders, feta cheese, and consumer and industrial butter formats.",
    },
    {
      name: "Kavish Laban Tabarestan",
      label: "Specialist cheeses for new markets",
      facts: ["Operations began in 2019", "Modern specialist facility", "Focused on international quality and markets", "Dietary and sheep-milk formulations"],
      products: "Specialist cheeses, parmesan and Belle Bano dietary feta.",
    },
    {
      name: "Golestan Sabah Dairy Products",
      label: "A reference point for product and packaging innovation",
      facts: ["Operations began in 2004 in Azadshahr Industrial Estate", "The Middle East’s first UF cream cheese producer", "Iran’s only producer of glass-packed cream cheese and processed cheddar", "Advanced bactofuge and industrial wastewater treatment"],
      products: "Cream cheese, vegetable cheese, jar cheese, cheddar dip and sweetened condensed milk.",
    },
    {
      name: "Sabah Tarabar Gonbad",
      label: "Transport and cold-chain infrastructure",
      facts: ["300 direct jobs", "33 tractor units and 33 refrigerated trailers", "11 milk tankers", "59 Isuzu and 55 Zamyad distribution trucks"],
      products: "National dairy transport from Azadshahr, Quchan and Isfahan, plus export freight to multiple borders.",
    },
    {
      name: "Sabah Distribution Fajr Gonbad",
      label: "A broad, high-penetration distribution network",
      facts: ["More than two decades of experience", "29 branches in 18 provinces", "More than 400 distribution vehicles", "Full cold-chain control to the point of sale"],
      products: "Fast, controlled sales and distribution across the Iranian market.",
    },
  ],
};

export const exportMarkets: Bilingual<string[]> = {
  fa: ["روسیه", "کانادا", "عراق", "بحرین", "کویت", "افغانستان", "پاکستان", "ترکمنستان", "قزاقستان", "ارمنستان", "یمن", "قطر", "آذربایجان", "سوریه", "کشورهای حوزه خلیج فارس"],
  en: ["Russia", "Canada", "Iraq", "Bahrain", "Kuwait", "Afghanistan", "Pakistan", "Turkmenistan", "Kazakhstan", "Armenia", "Yemen", "Qatar", "Azerbaijan", "Syria", "Gulf markets"],
};

export const internationalProjects: Bilingual<string[][]> = {
  fa: [
    ["اسپانیا", "همکاری با اتحادیه دامپروری زامورا در پرورش گوسفند و تولید محصولات لبنی."],
    ["عراق", "کارخانه تولید لبنیات و توسعه ظرفیت در بصره برای پاسخ‌گویی به بازار منطقه."],
    ["تانزانیا", "مشارکت در معدن سنگ‌آهن با هدف توسعه یک پروژه فولاد و همکاری با شرکای محلی."],
    ["دبی، ترکیه و تانزانیا", "شرکت‌های تجاری برای واردات نهاده، مواد شیمیایی، محصولات پتروشیمی و توسعه بازار."],
    ["چین، تایلند و آفریقا", "بازارهای هدف مرحله بعدی توسعه صادرات محصولات غذایی صباح."],
  ],
  en: [
    ["Spain", "Cooperation with the Zamora livestock union in sheep farming and dairy production."],
    ["Iraq", "A dairy production operation and expanded capacity in Basra for regional demand."],
    ["Tanzania", "Participation in an iron-ore project intended to support a future steel facility with local partners."],
    ["Dubai, Türkiye & Tanzania", "Trading companies supporting feed inputs, chemicals, petrochemicals and market development."],
    ["China, Thailand & Africa", "Priority markets for the next stage of Sabah’s food-export expansion."],
  ],
};

export const futureVision: Bilingual<{
  title: string;
  text: string;
  commitments: string[];
}> = {
  fa: {
    title: "رشد پایدار، نوآوری مستمر و بازارهای گسترده‌تر",
    text: "چشم‌انداز صباح فراتر از تولید روزانه است. گروه با یک برنامه مدون، تکمیل ظرفیت‌های جدید، توسعه تحقیق و توسعه و ورود به بازارهای تازه را دنبال می‌کند.",
    commitments: [
      "افزایش ظرفیت پنیرهای فرآوری‌شده صباح پودر به بیش از ۱۰ هزار تن در سال پس از تکمیل فاز دوم.",
      "سرمایه‌گذاری در تحقیق و توسعه و استفاده از فناوری‌های نوین تولید و بسته‌بندی.",
      "گسترش محصولات سالم، فراسودمند و متناسب با سبک زندگی پایدار.",
      "هوشمندسازی لجستیک، کنترل دقیق‌تر کیفیت و افزایش بهره‌وری منابع.",
    ],
  },
  en: {
    title: "Sustainable growth, continuous innovation and broader markets",
    text: "Sabah’s outlook extends beyond daily production. The group is pursuing new capacity, stronger research and development and entry into new markets through a structured long-term plan.",
    commitments: [
      "Increase Sabah Powder’s processed-cheese capacity beyond 10,000 tons per year after phase two.",
      "Invest in R&D and advanced production and packaging technologies.",
      "Expand healthy, functional products that support more sustainable lifestyles.",
      "Digitize logistics, strengthen quality control and improve resource efficiency.",
    ],
  },
};

export const contactDetails: Bilingual<{
  address: string;
  social: string;
}> = {
  fa: {
    address: "تهران، خیابان ولیعصر، برج سرو ساعی، واحد ۱۸۰۵",
    social: "@sabahdairy",
  },
  en: {
    address: "Unit 1805, Sarv Saei Tower, Valiasr Street, Tehran, Iran",
    social: "@sabahdairy",
  },
};
