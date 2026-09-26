// ============================================================
// CROP DATA
// Every fertilizer figure below carries a source. Where a
// verified figure could not be found, fertilizerStatus is set
// to "unverified" and NO number is invented, per site policy.
// ============================================================

const SRC = {
  mangoCashewReview: { organization: "DBSKKV, Dapoli (as cited in a peer-reviewed review)", publication: "Nutrient Management of Mango and Cashew in Konkan Region of Maharashtra – A Review, Indian Society of Soil Science", year: "2022", url: "https://www.researchgate.net/publication/365667750_Nutrient_Management_of_Mango_and_Cashew_in_Konkan_Region_of_Maharashtra_-_A_Review" },
  dbskkvCoconutPdf: { organization: "DBSKKV, Dapoli — Regional Coconut Research Station, Bhatye, Ratnagiri", publication: "Fertilizer Management in Coconut (official FAQ note)", year: "n.d.", url: "https://www.dbskkv.org/assets/pdf/faq-qr/Fertilizer%20(2).pdf" },
  ratnagiriAdvisory2021: { organization: "DBSKKV, Dapoli — Gramin Krishi Mausam Sewa (GKMS)", publication: "Agromet Advisory Bulletin for Ratnagiri District, 15 Jan 2021", year: "2021", url: "https://old.dbskkv.org/pdf/2020-21/Farmer_Corner/advisory-15-01-2021/Adv.Rtn_E%2015.01.pdf" },
  ratnagiriAdvisory2017: { organization: "DBSKKV, Dapoli", publication: "Agromet Advisory Bulletin, 24 Oct 2017", year: "2017", url: "https://old.dbskkv.org/pdf/Farmer_Corner/advisory-24-10-2017/Adv.RaiE%2024.10.pdf" },
  dbskkvAgronomyDept: { organization: "DBSKKV, Dapoli — Department of Agronomy", publication: "Released technology recommendations (Joint Agresco)", year: "n.d.", url: "https://api.dbskkv.org/v1/file/document/Department%20of%20Agronomy.docx1703572262508.pdf/" },
  icarCpcri: { organization: "ICAR — Central Plantation Crops Research Institute (CPCRI)", publication: "Research Achievements — Crop Production (Coconut & Arecanut, all-India recommendation)", year: "n.d.", url: "https://cpcri.gov.in/page/research_achievements_crop_production/" },
};

function noFert(stageTextEn, stageTextMr) {
  return { fertilizerStatus: "none" };
}
function unverifiedFert() {
  return { fertilizerStatus: "unverified" };
}

// ---------------------------------------------------------------
// MANGO / आंबा
// ---------------------------------------------------------------
const mangoData = {
  id: "mango", icon: "🥭",
  name: { en: "Mango", mr: "आंबा" },
  subtitle: { en: "Alphonso (Hapus), Kesar, Ratna, Sindhu and other Konkan cultivars", mr: "हापूस (आफूस), केसर, रत्ना, सिंधू आणि इतर कोकणी जाती" },
  overview: {
    en: "Mango, especially the Alphonso (Hapus), is the signature crop of the Konkan coast and a major income source for orchards around Chiplun. DBSKKV Dapoli has developed region-specific cultivars (Konkan Ruchi, Suvarna, Raja, Samrat) alongside Alphonso, Ratna, Sindhu and Kesar. Fertilizer needs differ sharply between a newly planted graft and a full-bearing tree — never apply a mature tree's dose to a young plant.",
    mr: "आंबा, विशेषतः हापूस, हे कोकण किनारपट्टीचे आणि चिपळूण परिसरातील बागायतदारांच्या उत्पन्नाचे मुख्य पीक आहे. डॉ. बाळासाहेब सावंत कोकण कृषी विद्यापीठ, दापोली यांनी हापूस, रत्ना, सिंधू, केसर सोबतच कोकण रुची, सुवर्ण, राजा, सम्राट या स्थानिक जाती विकसित केल्या आहेत. नवीन लावलेल्या कलमाची आणि पूर्ण उत्पादन देणाऱ्या झाडाची खताची गरज खूप वेगळी असते — प्रौढ झाडाचा डोस लहान झाडाला कधीही देऊ नये."
  },
  ageGroups: [
    { id: "new", name: { en: "New Plantation", mr: "नवीन लागवड" } },
    { id: "1-3", name: { en: "1–3 years", mr: "१–३ वर्षे" } },
    { id: "4-9", name: { en: "4–9 years (young bearing)", mr: "४–९ वर्षे (सुरुवातीचे उत्पादन)" } },
    { id: "10plus", name: { en: "10+ years (full bearing)", mr: "१०+ वर्षे (पूर्ण उत्पादन)" } },
  ],
  timeline: [
    {
      stage: { en: "Planting", mr: "लागवड" }, icon: "🌱",
      time: { en: "June – July (onset of monsoon)", mr: "जून – जुलै (पावसाळा सुरुवात)" },
      ...noFert(),
      irrigation: { en: "Water immediately after planting; ensure the pit does not waterlog in heavy rain.", mr: "लागवडीनंतर लगेच पाणी द्यावे; जोरदार पावसात खड्ड्यात पाणी साचणार नाही याची काळजी घ्यावी." },
      cropCare: { en: "Use grafted saplings of recommended Konkan cultivars. Pit size and spacing should follow the cultivar's recommended density.", mr: "शिफारस केलेल्या कोकणी जातींची कलमे वापरावीत. खड्ड्याचा आकार व झाडांमधील अंतर जातीनुसार शिफारस केलेल्या घनतेनुसार ठेवावे." },
      pestDisease: { en: "Protect young grafts from termites and stem borer near the graft union.", mr: "कलम जोडाजवळ वाळवी व शेंडा-खोड कीड यांपासून नवीन कलमांचे संरक्षण करावे." },
      nextStep: { en: "Establishment care for the first 3 years.", mr: "पुढील ३ वर्षे झाड स्थिर होण्यासाठी काळजी." },
    },
    {
      stage: { en: "Establishment (Young Plant)", mr: "स्थापना (लहान झाड)" }, icon: "🌿",
      time: { en: "Years 1–3", mr: "वर्ष १–३" },
      fertilizerStatus: "unverified",
      irrigation: { en: "Regular light irrigation during dry spells in the first two summers is generally advised for young Konkan orchards.", mr: "पहिल्या दोन उन्हाळ्यांत लहान झाडांना कोरड्या काळात नियमित हलके पाणी देणे साधारणपणे उपयुक्त मानले जाते." },
      cropCare: { en: "Weed control around the basin, staking against wind, and mulching to conserve moisture.", mr: "झाडाच्या खोडाभोवती गवत काढणे, वाऱ्यापासून आधार देणे आणि ओलावा टिकवण्यासाठी आच्छादन करणे." },
      pestDisease: { en: "Watch for mealybug and leaf-eating caterpillars on new flush.", mr: "नवीन पालवीवर मिलीबग व पाने खाणारी अळी यांवर लक्ष ठेवावे." },
      nextStep: { en: "Vegetative flush emergence.", mr: "नवीन पालवी येण्याचा टप्पा." },
    },
    {
      stage: { en: "Vegetative Flush", mr: "पालवी अवस्था" }, icon: "🌳",
      time: { en: "Last week of September to first week of November (Konkan coastal condition, per DBSKKV flush-prediction model)", mr: "सप्टेंबरचा शेवटचा आठवडा ते नोव्हेंबरचा पहिला आठवडा (कोकण किनारी हवामान, DBSKKV पालवी-अंदाज प्रारूपानुसार)" },
      fertilizerStatus: "unverified",
      irrigation: { en: "Withhold excess irrigation; too much water at this stage encourages vegetative growth over flowering later.", mr: "या टप्प्यावर जास्त पाणी देऊ नये; अतिरिक्त पाण्याने पुढे फुलोऱ्याऐवजी पालवी जास्त येते." },
      cropCare: { en: "Light pruning of overcrowded, dead or diseased branches helps even flush emergence in the next flowering season.", mr: "गर्दी झालेल्या, वाळलेल्या किंवा रोगट फांद्या हलक्या छाटल्याने पुढील फुलोरा हंगामात पालवी सम प्रमाणात येते." },
      pestDisease: { en: "Monitor for mango hopper and powdery mildew on the new flush; DBSKKV advisories flag hopper risk during cloudy, humid weather.", mr: "नवीन पालवीवर तुडतुडे व भुरी रोग यांवर लक्ष ठेवावे; ढगाळ, दमट हवामानात तुडतुड्यांचा धोका DBSKKV सल्ल्यांमध्ये नोंदवला जातो." },
      nextStep: { en: "Flowering.", mr: "फुलोरा अवस्था." },
    },
    {
      stage: { en: "Flowering", mr: "फुलोरा अवस्था" }, icon: "🌸",
      time: { en: "December – January", mr: "डिसेंबर – जानेवारी" },
      ...noFert(),
      irrigation: { en: "Avoid overhead irrigation and waterlogging during flowering; excess moisture can cause flower and fruit drop.", mr: "फुलोऱ्याच्या वेळी जास्त पाणी किंवा साचलेले पाणी टाळावे; जास्त ओलाव्यामुळे फुले व फळे गळतात." },
      cropCare: { en: "Avoid disturbing panicles; avoid fresh pruning at this stage.", mr: "मोहोराला धक्का लागू देऊ नये; या टप्प्यावर नवीन छाटणी करू नये." },
      pestDisease: { en: "Mango hopper and powdery mildew are the key risks on the panicle; follow official plant-protection advisories for any spray decision rather than routine spraying.", mr: "मोहोरावर तुडतुडे व भुरी रोग हे प्रमुख धोके आहेत; फवारणीचा निर्णय नियमितपणे न घेता अधिकृत पीक-संरक्षण सल्ल्यानुसार घ्यावा." },
      nextStep: { en: "Fruit set.", mr: "फळधारणा." },
    },
    {
      stage: { en: "Fruit Set", mr: "फळधारणा" }, icon: "🥭",
      time: { en: "January – February", mr: "जानेवारी – फेब्रुवारी" },
      ...noFert(),
      irrigation: { en: "Light, regular irrigation helps reduce fruit drop once pea-sized fruit has set.", mr: "वाटाण्याच्या आकाराचे फळ लागल्यानंतर हलके, नियमित पाणी दिल्याने फळगळ कमी होते." },
      cropCare: { en: "Avoid nitrogen-heavy inputs at this stage; excess nitrogen is linked with higher fruit drop.", mr: "या टप्प्यावर जास्त नत्रयुक्त खत टाळावे; जास्त नत्रामुळे फळगळ वाढते." },
      pestDisease: { en: "Watch for fruit fly and gall midge on setting fruit.", mr: "फळधारणेच्या वेळी फळमाशी व गॉल मिजवर लक्ष ठेवावे." },
      nextStep: { en: "Fruit development.", mr: "फळ वृद्धी." },
    },
    {
      stage: { en: "Fruit Development", mr: "फळ वृद्धी" }, icon: "🥭",
      time: { en: "February – April", mr: "फेब्रुवारी – एप्रिल" },
      ...noFert(),
      irrigation: { en: "Consistent irrigation supports fruit size; sudden moisture stress followed by heavy watering can cause fruit cracking.", mr: "सातत्यपूर्ण पाण्याने फळाचा आकार चांगला होतो; अचानक पाण्याचा ताण आणि नंतर जास्त पाणी दिल्याने फळ तडकू शकते." },
      cropCare: { en: "Support heavily laden branches; remove any diseased or deformed fruit.", mr: "जास्त फळांच्या फांद्यांना आधार द्यावा; रोगट किंवा विकृत फळे काढून टाकावीत." },
      pestDisease: { en: "Fruit fly traps and field sanitation (removing fallen fruit) are the standard cultural measures during this stage.", mr: "या टप्प्यावर फळमाशी सापळे लावणे व गळलेली फळे शेतातून काढून टाकणे या सामान्य उपाययोजना आहेत." },
      nextStep: { en: "Maturity and harvest.", mr: "पक्वता व काढणी." },
    },
    {
      stage: { en: "Maturity & Harvest", mr: "पक्वता व काढणी" }, icon: "🧺",
      time: { en: "April – June (varies by cultivar and local weather)", mr: "एप्रिल – जून (जात व स्थानिक हवामानानुसार बदलते)" },
      ...noFert(),
      irrigation: { en: "Reduce irrigation as fruit nears maturity to improve fruit quality and shelf life.", mr: "फळ पक्व होत असताना पाणी कमी केल्याने फळाची गुणवत्ता व टिकवण क्षमता सुधारते." },
      cropCare: { en: "Harvest with a short stalk attached, handle fruit gently to avoid sap burn and bruising, and sort by maturity.", mr: "फळ काढताना थोडा दांडा ठेवावा, चीक लागून डाग पडू नये यासाठी काळजीपूर्वक हाताळावे आणि पक्वतेनुसार वर्गीकरण करावे." },
      pestDisease: { en: "Post-harvest, watch stored fruit for anthracnose (black spot); avoid mechanical injury which invites rot.", mr: "काढणीनंतर फळांवर देवी रोग (काळे डाग) येऊ शकतो; इजा झालेल्या फळांना कूज लागते, त्यामुळे फळे जपून हाताळावीत." },
      nextStep: { en: "Post-harvest pruning, then the fertilizer application for the next season begins the cycle again.", mr: "काढणीनंतर छाटणी करून पुढील हंगामाच्या खत मात्रेने चक्र पुन्हा सुरू होते." },
    },
  ],
  fertilizerByAge: {
    "10plus": [
      {
        fertilizer: { en: "Urea", mr: "युरिया (Urea)" },
        nutrient: { en: "Nitrogen (N)", mr: "नत्र (N)" },
        quantity: { en: "3.0 kg N per tree per year (revised DBSKKV dose; earlier recommendation was 1.5 kg N)", mr: "दर झाडास दरवर्षी ३.० किलो नत्र (सुधारित DBSKKV शिफारस; आधीची शिफारस १.५ किलो नत्र होती)" },
        basis: { en: "Per tree, full-bearing", mr: "प्रति झाड, पूर्ण उत्पादनक्षम" },
        when: { en: "June, at the onset of monsoon", mr: "जून, पावसाळा सुरू होताना" },
        method: { en: "Apply by the ring/basin method in a circular trench around the tree, along with 50–100 kg farmyard manure (FYM).", mr: "झाडाभोवती वलय/खड्डा पद्धतीने वापरावे, त्यासोबत ५०–१०० किलो शेणखत (FYM) द्यावे." },
        important: { en: "This is the revised, higher dose reported for Konkan orchards; some older orchard schedules still use the earlier 1.5 kg N dose. Confirm which schedule your orchard follows.", mr: "ही कोकणातील बागांसाठी नोंदवलेली सुधारित, अधिक मात्रा आहे; काही जुन्या बागांमध्ये अजूनही आधीची १.५ किलो नत्राची मात्रा वापरली जाते. आपल्या बागेत कोणती मात्रा वापरली जाते ते तपासून घ्यावे." },
        source: SRC.mangoCashewReview,
      },
      {
        fertilizer: { en: "Single Super Phosphate (SSP)", mr: "सिंगल सुपर फॉस्फेट (SSP)" },
        nutrient: { en: "Phosphorus (P₂O₅)", mr: "स्फुरद (P₂O₅)" },
        quantity: { en: "1.0 kg P₂O₅ per tree per year (revised dose; earlier recommendation was 0.5 kg)", mr: "दर झाडास दरवर्षी १.० किलो स्फुरद (सुधारित मात्रा; आधीची शिफारस ०.५ किलो होती)" },
        basis: { en: "Per tree, full-bearing", mr: "प्रति झाड, पूर्ण उत्पादनक्षम" },
        when: { en: "June, along with nitrogen", mr: "जून, नत्रासोबतच" },
        method: { en: "Ring/basin method with FYM.", mr: "शेणखतासोबत वलय/खड्डा पद्धतीने." },
        source: SRC.mangoCashewReview,
      },
      {
        fertilizer: { en: "Sulphate of Potash (SOP)", mr: "पोटॅशियम सल्फेट (SOP)" },
        nutrient: { en: "Potassium (K₂O)", mr: "पालाश (K₂O)" },
        quantity: { en: "1.5 kg K₂O per tree per year (revised dose; earlier recommendation was 1.0 kg)", mr: "दर झाडास दरवर्षी १.५ किलो पालाश (सुधारित मात्रा; आधीची शिफारस १.० किलो होती)" },
        basis: { en: "Per tree, full-bearing", mr: "प्रति झाड, पूर्ण उत्पादनक्षम" },
        when: { en: "June, along with nitrogen and phosphorus", mr: "जून, नत्र व स्फुरदासोबतच" },
        method: { en: "Ring/basin method with FYM.", mr: "शेणखतासोबत वलय/खड्डा पद्धतीने." },
        important: { en: "Potassium is reported to strongly influence Alphonso fruit quality in Konkan trials.", mr: "कोकणातील प्रयोगांनुसार पालाशाचा हापूस फळांच्या गुणवत्तेवर मोठा परिणाम होतो असे नोंदवले आहे." },
        source: SRC.mangoCashewReview,
      },
    ],
    "new": "unverified", "1-3": "unverified", "4-9": "unverified",
  },
  calendar: [
    { month: { en: "June", mr: "जून" }, activity: { en: "New planting; main fertilizer dose for bearing trees (FYM + N + P + K)", mr: "नवीन लागवड; उत्पादनक्षम झाडांची मुख्य खत मात्रा (शेणखत + नत्र + स्फुरद + पालाश)" } },
    { month: { en: "Sept – Nov", mr: "सप्टेंबर – नोव्हेंबर" }, activity: { en: "Vegetative flush emergence", mr: "पालवी येण्याचा टप्पा" } },
    { month: { en: "Dec – Jan", mr: "डिसेंबर – जानेवारी" }, activity: { en: "Flowering", mr: "फुलोरा" } },
    { month: { en: "Jan – Feb", mr: "जानेवारी – फेब्रुवारी" }, activity: { en: "Fruit set", mr: "फळधारणा" } },
    { month: { en: "Feb – Apr", mr: "फेब्रुवारी – एप्रिल" }, activity: { en: "Fruit development", mr: "फळ वृद्धी" } },
    { month: { en: "Apr – Jun", mr: "एप्रिल – जून" }, activity: { en: "Harvest (cultivar-dependent)", mr: "काढणी (जातीनुसार बदलते)" } },
  ],
  sources: [SRC.mangoCashewReview, SRC.ratnagiriAdvisory2017],
};

// ---------------------------------------------------------------
// CASHEW / काजू
// ---------------------------------------------------------------
const cashewData = {
  id: "cashew", icon: "🌰",
  name: { en: "Cashew", mr: "काजू" },
  subtitle: { en: "Vengurla series and other Konkan-released varieties", mr: "वेंगुर्ला मालिका व इतर कोकणात प्रसारित जाती" },
  overview: {
    en: "Cashew is a major plantation crop of the Konkan hill slopes, developed and promoted through DBSKKV's Regional Fruit Research Station, Vengurla. Fertilizer doses build up gradually as the plant ages, reaching the full dose from the fourth year onward.",
    mr: "काजू हे कोकणातील डोंगर उतारावरील एक प्रमुख फळपीक आहे, जे DBSKKV च्या प्रादेशिक फळ संशोधन केंद्र, वेंगुर्ला यांच्यामार्फत विकसित व प्रसारित केले गेले आहे. झाडाच्या वयानुसार खताची मात्रा टप्प्याटप्प्याने वाढते आणि चौथ्या वर्षापासून पूर्ण मात्रा दिली जाते."
  },
  ageGroups: [
    { id: "1", name: { en: "1st year", mr: "पहिले वर्ष" } },
    { id: "2", name: { en: "2nd year", mr: "दुसरे वर्ष" } },
    { id: "3", name: { en: "3rd year", mr: "तिसरे वर्ष" } },
    { id: "4plus", name: { en: "4th year onward (bearing)", mr: "चौथे वर्ष व त्यापुढे (उत्पादनक्षम)" } },
  ],
  timeline: [
    {
      stage: { en: "Planting", mr: "लागवड" }, icon: "🌱",
      time: { en: "June – July (monsoon onset)", mr: "जून – जुलै (पावसाळा सुरुवात)" },
      ...noFert(),
      irrigation: { en: "Water at planting; young cashew on hill slopes is normally rainfed thereafter.", mr: "लागवडीच्या वेळी पाणी द्यावे; त्यानंतर डोंगर उतारावरील लहान काजू झाडे साधारणपणे फक्त पावसावर अवलंबून असतात." },
      cropCare: { en: "Use grafts of recommended Vengurla series varieties; plant on contour on sloping land to reduce soil erosion.", mr: "शिफारस केलेल्या वेंगुर्ला मालिकेतील कलमे वापरावीत; उतारावर मातीची झीज कमी करण्यासाठी समपातळी रेषेत लागवड करावी." },
      pestDisease: { en: "Protect young plants from grazing animals and stem borer.", mr: "लहान झाडांना जनावरांपासून व शेंडा-खोड किडीपासून संरक्षण द्यावे." },
      nextStep: { en: "First-year fertilizer dose (¼ of the bearing dose).", mr: "पहिल्या वर्षाची खत मात्रा (उत्पादनक्षम मात्रेच्या ¼)." },
    },
    {
      stage: { en: "Young Plant — Building Up the Dose", mr: "लहान झाड — मात्रा टप्प्याटप्प्याने वाढवणे" }, icon: "🌿",
      time: { en: "Years 1–3, August each year", mr: "वर्ष १–३, दरवर्षी ऑगस्ट" },
      fertilizerStatus: "byAge",
      irrigation: { en: "Generally rainfed; supplemental watering in the first dry season after planting helps establishment.", mr: "साधारणपणे फक्त पावसावर अवलंबून; लागवडीनंतरच्या पहिल्या कोरड्या हंगामात अतिरिक्त पाणी दिल्यास झाड चांगले रुजते." },
      cropCare: { en: "Weeding around the basin and mulching; train the plant to a single stem in early years.", mr: "खोडाभोवती गवत काढणे व आच्छादन करणे; सुरुवातीच्या वर्षांत झाडाला एकाच खोडावर वाढवावे." },
      pestDisease: { en: "Watch for tea mosquito bug on new flush.", mr: "नवीन पालवीवर टी मॉस्किटो बग (चहा ढेकुण) या किडीवर लक्ष ठेवावे." },
      nextStep: { en: "Full bearing dose from the 4th year.", mr: "चौथ्या वर्षापासून पूर्ण उत्पादनक्षम मात्रा." },
    },
    {
      stage: { en: "Flowering", mr: "फुलोरा" }, icon: "🌸",
      time: { en: "November – January", mr: "नोव्हेंबर – जानेवारी" },
      ...noFert(),
      irrigation: { en: "No irrigation is generally recommended during flowering under rainfed Konkan cultivation.", mr: "कोकणातील पावसावर आधारित लागवडीत फुलोऱ्याच्या वेळी साधारणपणे पाणी दिले जात नाही." },
      cropCare: { en: "Avoid disturbing panicles.", mr: "मोहोराला धक्का लागू देऊ नये." },
      pestDisease: { en: "Tea mosquito bug is the single most damaging pest on the flowering panicle in Konkan; official advisories recommend need-based spraying rather than a fixed schedule.", mr: "कोकणात फुलोऱ्यावर टी मॉस्किटो बग ही सर्वाधिक नुकसान करणारी कीड आहे; अधिकृत सल्ल्यानुसार ठराविक वेळापत्रकाऐवजी गरजेनुसार फवारणी करावी." },
      nextStep: { en: "Fruit and nut set.", mr: "फळ व बी धारणा." },
    },
    {
      stage: { en: "Fruit & Nut Development", mr: "फळ व बी वृद्धी" }, icon: "🌰",
      time: { en: "February – April", mr: "फेब्रुवारी – एप्रिल" },
      ...noFert(),
      irrigation: { en: "Rainfed; no verified Konkan-specific irrigation schedule for this stage.", mr: "फक्त पावसावर अवलंबून; या टप्प्यासाठी कोकण-विशिष्ट पडताळणी केलेले पाणी वेळापत्रक उपलब्ध नाही." },
      cropCare: { en: "Collect fallen apples/nuts regularly to reduce pest carryover.", mr: "किडींचा प्रसार कमी करण्यासाठी गळलेली फळे व बी नियमितपणे गोळा करावी." },
      pestDisease: { en: "Fruit and nut borers can affect developing nuts; field sanitation is the standard cultural control.", mr: "वाढणाऱ्या बीवर फळ व बी पोखरणाऱ्या किडींचा प्रादुर्भाव होऊ शकतो; शेत स्वच्छ ठेवणे हा नेहमीचा उपाय आहे." },
      nextStep: { en: "Harvest.", mr: "काढणी." },
    },
    {
      stage: { en: "Harvest", mr: "काढणी" }, icon: "🧺",
      time: { en: "March – May", mr: "मार्च – मे" },
      ...noFert(),
      irrigation: { en: "No irrigation needed.", mr: "पाण्याची आवश्यकता नाही." },
      cropCare: { en: "Collect nuts daily from the ground after they drop naturally; sun-dry before storage.", mr: "नैसर्गिकरित्या गळलेले बी दररोज जमिनीवरून गोळा करावे; साठवण्यापूर्वी उन्हात वाळवावे." },
      pestDisease: { en: "Store dried nuts in a dry, pest-free place to avoid storage insects.", mr: "साठवणीच्या किडींपासून वाचण्यासाठी वाळवलेले बी कोरड्या, किडीविरहित जागी साठवावे." },
      nextStep: { en: "Post-harvest basin cleaning, then the next year's fertilizer dose in August.", mr: "काढणीनंतर खोडाभोवतीची जागा साफ करून पुढील वर्षी ऑगस्टमध्ये पुन्हा खत मात्रा." },
    },
  ],
  fertilizerByAge: {
    "4plus": [
      {
        fertilizer: { en: "Urea", mr: "युरिया (Urea)" },
        nutrient: { en: "Nitrogen (N)", mr: "नत्र (N)" },
        quantity: { en: "2.0 kg per plant per year", mr: "दर झाडास दरवर्षी २.० किलो" },
        basis: { en: "Per plant, from the 4th year onward", mr: "प्रति झाड, चौथ्या वर्षापासून पुढे" },
        when: { en: "August", mr: "ऑगस्ट" },
        method: { en: "Ring method, together with 20 kg farmyard manure (FYM) per plant.", mr: "वलय पद्धतीने, प्रति झाड २० किलो शेणखतासोबत." },
        source: SRC.mangoCashewReview,
      },
      {
        fertilizer: { en: "Single Super Phosphate (SSP)", mr: "सिंगल सुपर फॉस्फेट (SSP)" },
        nutrient: { en: "Phosphorus (P₂O₅)", mr: "स्फुरद (P₂O₅)" },
        quantity: { en: "1.5 kg per plant per year", mr: "दर झाडास दरवर्षी १.५ किलो" },
        basis: { en: "Per plant, from the 4th year onward", mr: "प्रति झाड, चौथ्या वर्षापासून पुढे" },
        when: { en: "August", mr: "ऑगस्ट" },
        method: { en: "Ring method with FYM.", mr: "शेणखतासोबत वलय पद्धतीने." },
        source: SRC.mangoCashewReview,
      },
      {
        fertilizer: { en: "Muriate of Potash (MOP)", mr: "म्युरिएट ऑफ पोटॅश (MOP)" },
        nutrient: { en: "Potassium (K₂O)", mr: "पालाश (K₂O)" },
        quantity: { en: "0.5 kg per plant per year", mr: "दर झाडास दरवर्षी ०.५ किलो" },
        basis: { en: "Per plant, from the 4th year onward", mr: "प्रति झाड, चौथ्या वर्षापासून पुढे" },
        when: { en: "August", mr: "ऑगस्ट" },
        method: { en: "Ring method with FYM.", mr: "शेणखतासोबत वलय पद्धतीने." },
        source: SRC.mangoCashewReview,
      },
    ],
    "1": [
      { fertilizer: { en: "Urea, SSP and MOP", mr: "युरिया, SSP व MOP" }, nutrient: { en: "N, P₂O₅ and K₂O", mr: "नत्र, स्फुरद व पालाश" },
        quantity: { en: "¼ of the 4th-year (bearing) dose — i.e. about 0.5 kg Urea + 0.375 kg SSP + 0.125 kg MOP", mr: "चौथ्या वर्षाच्या (उत्पादनक्षम) मात्रेच्या ¼ — म्हणजे अंदाजे ०.५ किलो युरिया + ०.३७५ किलो SSP + ०.१२५ किलो MOP" },
        basis: { en: "Per plant, 1st year", mr: "प्रति झाड, पहिले वर्ष" }, when: { en: "August", mr: "ऑगस्ट" },
        method: { en: "Ring method around the young plant.", mr: "लहान झाडाभोवती वलय पद्धतीने." },
        source: SRC.mangoCashewReview },
    ],
    "2": [
      { fertilizer: { en: "Urea, SSP and MOP", mr: "युरिया, SSP व MOP" }, nutrient: { en: "N, P₂O₅ and K₂O", mr: "नत्र, स्फुरद व पालाश" },
        quantity: { en: "½ of the 4th-year (bearing) dose — i.e. about 1.0 kg Urea + 0.75 kg SSP + 0.25 kg MOP", mr: "चौथ्या वर्षाच्या (उत्पादनक्षम) मात्रेच्या ½ — म्हणजे अंदाजे १.० किलो युरिया + ०.७५ किलो SSP + ०.२५ किलो MOP" },
        basis: { en: "Per plant, 2nd year", mr: "प्रति झाड, दुसरे वर्ष" }, when: { en: "August", mr: "ऑगस्ट" },
        method: { en: "Ring method around the plant.", mr: "झाडाभोवती वलय पद्धतीने." },
        source: SRC.mangoCashewReview },
    ],
    "3": "unverified",
  },
  calendar: [
    { month: { en: "June – July", mr: "जून – जुलै" }, activity: { en: "New planting", mr: "नवीन लागवड" } },
    { month: { en: "August", mr: "ऑगस्ट" }, activity: { en: "Fertilizer application (age-based dose)", mr: "खत मात्रा (वयानुसार)" } },
    { month: { en: "Nov – Jan", mr: "नोव्हेंबर – जानेवारी" }, activity: { en: "Flowering — watch for tea mosquito bug", mr: "फुलोरा — टी मॉस्किटो बगवर लक्ष ठेवा" } },
    { month: { en: "Feb – Apr", mr: "फेब्रुवारी – एप्रिल" }, activity: { en: "Fruit and nut development", mr: "फळ व बी वृद्धी" } },
    { month: { en: "Mar – May", mr: "मार्च – मे" }, activity: { en: "Harvest", mr: "काढणी" } },
  ],
  sources: [SRC.mangoCashewReview],
};

// ---------------------------------------------------------------
// COCONUT / नारळ
// ---------------------------------------------------------------
const coconutData = {
  id: "coconut", icon: "🥥",
  name: { en: "Coconut", mr: "नारळ" },
  subtitle: { en: "Local tall variety and hybrid coconut", mr: "स्थानिक उंच जात व संकरित नारळ" },
  overview: {
    en: "Coconut is grown widely in the sandy and lateritic soils along the Konkan coast. DBSKKV's Regional Coconut Research Station at Bhatye, Ratnagiri (very close to Chiplun) has published separate, verified fertilizer schedules for the local tall variety and for hybrid coconut.",
    mr: "नारळ हे कोकण किनारपट्टीवरील वाळूमय व जांभा (लॅटराइट) मातीत मोठ्या प्रमाणात घेतले जाते. DBSKKV चे प्रादेशिक नारळ संशोधन केंद्र, भाट्ये, रत्नागिरी (चिपळूणपासून अगदी जवळ) यांनी स्थानिक उंच जात व संकरित नारळासाठी वेगवेगळी, पडताळणी केलेली खत वेळापत्रके प्रकाशित केली आहेत."
  },
  ageGroups: [
    { id: "1", name: { en: "1st year", mr: "पहिले वर्ष" } },
    { id: "2", name: { en: "2nd year", mr: "दुसरे वर्ष" } },
    { id: "3", name: { en: "3rd year", mr: "तिसरे वर्ष" } },
    { id: "4", name: { en: "4th year", mr: "चौथे वर्ष" } },
    { id: "5plus", name: { en: "5th year onward (bearing)", mr: "पाचवे वर्ष व त्यापुढे (उत्पादनक्षम)" } },
  ],
  timeline: [
    {
      stage: { en: "Planting", mr: "लागवड" }, icon: "🌱",
      time: { en: "June – July (monsoon onset)", mr: "जून – जुलै (पावसाळा सुरुवात)" },
      ...noFert(),
      irrigation: { en: "Water regularly in the first dry season; young palms are sensitive to moisture stress.", mr: "पहिल्या कोरड्या हंगामात नियमित पाणी द्यावे; लहान माडांना ओलाव्याच्या ताणाची संवेदनशीलता असते." },
      cropCare: { en: "Use quality seedlings from a certified nursery; provide shade to seedlings in the first summer.", mr: "प्रमाणित रोपवाटिकेतील दर्जेदार रोपे वापरावीत; पहिल्या उन्हाळ्यात रोपांना सावली द्यावी." },
      pestDisease: { en: "Protect young seedlings from rhinoceros beetle damage to the crown.", mr: "लहान रोपांच्या शेंड्याला गेंड्या भुंग्यापासून (राइनोसिरस बीटल) संरक्षण द्यावे." },
      nextStep: { en: "Age-based fertilizer build-up begins.", mr: "वयानुसार खत मात्रा वाढवण्याची सुरुवात." },
    },
    {
      stage: { en: "Young Palm — Building Up the Dose", mr: "लहान माड — मात्रा टप्प्याटप्प्याने वाढवणे" }, icon: "🌿",
      time: { en: "Years 1–4", mr: "वर्ष १–४" },
      fertilizerStatus: "byAge",
      irrigation: { en: "Regular irrigation, more frequent in summer.", mr: "नियमित पाणी, उन्हाळ्यात जास्त वेळा." },
      cropCare: { en: "Keep the basin weed-free; intercropping with low, shade-tolerant crops is common in Konkan gardens.", mr: "खोडाभोवतीचा भाग गवतमुक्त ठेवावा; कोकणातील बागांमध्ये कमी उंचीच्या, सावली सहन करणाऱ्या आंतरपिकांची लागवड सामान्य आहे." },
      pestDisease: { en: "Continue rhinoceros beetle monitoring at the crown.", mr: "शेंड्यावर गेंड्या भुंग्याचे निरीक्षण सुरू ठेवावे." },
      nextStep: { en: "Full bearing dose from the 5th year.", mr: "पाचव्या वर्षापासून पूर्ण उत्पादनक्षम मात्रा." },
    },
    {
      stage: { en: "Flowering & Button Stage", mr: "फुलोरा व नारळ बांधणी" }, icon: "🌸",
      time: { en: "Year-round in bearing palms (coconut flowers continuously)", mr: "उत्पादनक्षम माडात वर्षभर (नारळाला सतत मोहोर येतो)" },
      ...noFert(),
      irrigation: { en: "Consistent irrigation through summer reduces button/immature nut shedding.", mr: "उन्हाळ्यात सातत्यपूर्ण पाणी दिल्याने कच्च्या नारळाची गळ कमी होते." },
      cropCare: { en: "Remove and dispose of any dried leaves and spathes hanging on the crown.", mr: "शेंड्यावरील वाळलेली पाने व मोहोराचे आवरण काढून व्यवस्थित नष्ट करावे." },
      pestDisease: { en: "Eriophyid mite can affect the perianth of the nut button; consult local extension for current management advice.", mr: "एरिओफाइड कोळी नारळाच्या देठाजवळील भागावर परिणाम करू शकतो; व्यवस्थापनासाठी स्थानिक कृषी विस्तार सेवेचा सल्ला घ्यावा." },
      nextStep: { en: "Nut development.", mr: "नारळ वृद्धी." },
    },
    {
      stage: { en: "Nut Development", mr: "नारळ वृद्धी" }, icon: "🥥",
      time: { en: "Roughly 12 months from button to maturity", mr: "बांधणीपासून पक्वतेपर्यंत अंदाजे १२ महिने" },
      ...noFert(),
      irrigation: { en: "Maintain consistent watering; the second fertilizer split (October) supports nut filling.", mr: "सातत्यपूर्ण पाणी ठेवावे; ऑक्टोबरमधील दुसरी खत मात्रा नारळ भरण्यास मदत करते." },
      cropCare: { en: "Prop up palms leaning after storms; avoid injury to roots during basin work.", mr: "वादळानंतर कलंडलेल्या माडांना आधार द्यावा; खोडाभोवती काम करताना मुळांना इजा होणार नाही याची काळजी घ्यावी." },
      pestDisease: { en: "Continue monitoring for rhinoceros beetle and red palm weevil signs on the trunk.", mr: "खोडावर गेंड्या भुंगा व सोंडे भुंगा (रेड पाम वीव्हील) यांच्या लक्षणांवर लक्ष ठेवणे सुरू ठेवावे." },
      nextStep: { en: "Harvest of mature nuts.", mr: "पक्व नारळाची काढणी." },
    },
    {
      stage: { en: "Harvest", mr: "काढणी" }, icon: "🧺",
      time: { en: "Every 45–60 days, year-round (bunches mature continuously)", mr: "दर ४५–६० दिवसांनी, वर्षभर (घड सतत पक्व होतात)" },
      ...noFert(),
      irrigation: { en: "No special irrigation change needed for harvest.", mr: "काढणीसाठी पाण्यात विशेष बदल करण्याची गरज नाही." },
      cropCare: { en: "Harvest mature bunches carefully to avoid damaging the crown and younger bunches.", mr: "शेंडा व लहान घडांना इजा होणार नाही याची काळजी घेऊन पक्व घड काढावेत." },
      pestDisease: { en: "Inspect the crown during harvest climbing for early signs of pest or disease damage.", mr: "काढणीसाठी माडावर चढताना शेंड्याची कीड किंवा रोगाच्या सुरुवातीच्या लक्षणांसाठी तपासणी करावी." },
      nextStep: { en: "The June split of the next fertilizer cycle.", mr: "पुढील खत चक्राची जूनमधील मात्रा." },
    },
  ],
  fertilizerByAge: {
    "5plus": [
      {
        fertilizer: { en: "Urea (or FYM/green manure as organic base)", mr: "युरिया (आधार म्हणून शेणखत / हरित खतासोबत)" },
        nutrient: { en: "Nitrogen (N)", mr: "नत्र (N)" },
        quantity: { en: "1000 g N per palm per year (local tall variety, sandy Konkan soils)", mr: "दर माडास दरवर्षी १०००ग्रॅम नत्र (स्थानिक उंच जात, कोकणची वाळूमय जमीन)" },
        basis: { en: "Per bearing palm", mr: "प्रति उत्पादनक्षम माड" },
        when: { en: "Applied in 3 splits: June, October, February", mr: "३ हप्त्यांत: जून, ऑक्टोबर, फेब्रुवारी" },
        method: { en: "Apply as Urea in a circular basin around the palm.", mr: "माडाभोवती वर्तुळाकार खड्ड्यात युरिया द्यावे." },
        source: SRC.dbskkvCoconutPdf,
      },
      {
        fertilizer: { en: "Single Super Phosphate (SSP)", mr: "सिंगल सुपर फॉस्फेट (SSP)" },
        nutrient: { en: "Phosphorus (P₂O₅)", mr: "स्फुरद (P₂O₅)" },
        quantity: { en: "500 g P₂O₅ per palm per year", mr: "दर माडास दरवर्षी ५०० ग्रॅम स्फुरद" },
        basis: { en: "Per bearing palm", mr: "प्रति उत्पादनक्षम माड" },
        when: { en: "3 splits: June, October, February", mr: "३ हप्त्यांत: जून, ऑक्टोबर, फेब्रुवारी" },
        method: { en: "Basin application.", mr: "खड्डा पद्धतीने द्यावे." },
        source: SRC.dbskkvCoconutPdf,
      },
      {
        fertilizer: { en: "Muriate of Potash (MOP)", mr: "म्युरिएट ऑफ पोटॅश (MOP)" },
        nutrient: { en: "Potassium (K₂O)", mr: "पालाश (K₂O)" },
        quantity: { en: "1000 g K₂O per palm per year. A field example from a Ratnagiri advisory for the same age group gives one split as roughly 850 g Urea + 1 kg SSP + 650 g MOP.", mr: "दर माडास दरवर्षी १०००ग्रॅम पालाश. रत्नागिरी सल्ल्यातील एका उदाहरणानुसार एका हप्त्यात अंदाजे ८५०ग्रॅम युरिया + १ किलो SSP + ६५०ग्रॅम MOP दिले जाते." },
        basis: { en: "Per bearing palm", mr: "प्रति उत्पादनक्षम माड" },
        when: { en: "3 splits: June, October, February", mr: "३ हप्त्यांत: जून, ऑक्टोबर, फेब्रुवारी" },
        method: { en: "Basin application with FYM.", mr: "शेणखतासोबत खड्डा पद्धतीने." },
        source: SRC.dbskkvCoconutPdf,
      },
    ],
    "hybridNote": true,
    "1": [{ fertilizer: { en: "Urea, SSP and MOP (hybrid coconut schedule)", mr: "युरिया, SSP व MOP (संकरित नारळ वेळापत्रक)" }, nutrient: { en: "N, P₂O₅, K₂O", mr: "नत्र, स्फुरद, पालाश" },
      quantity: { en: "200 g N + 100 g P₂O₅ + 400 g K₂O per palm, plus 10 kg FYM", mr: "दर माडास २०० ग्रॅम नत्र + १०० ग्रॅम स्फुरद + ४०० ग्रॅम पालाश, अधिक १० किलो शेणखत" },
      basis: { en: "Per hybrid palm, 1st year", mr: "प्रति संकरित माड, पहिले वर्ष" }, when: { en: "3 splits per year", mr: "वर्षातून ३ हप्त्यांत" },
      method: { en: "⅓ N & K₂O + full P₂O₅ + FYM in June; remaining ⅔ N & K₂O split between October and February.", mr: "जूनमध्ये ⅓ नत्र व पालाश + संपूर्ण स्फुरद + शेणखत; उर्वरित ⅔ नत्र व पालाश ऑक्टोबर व फेब्रुवारीमध्ये विभागून द्यावे." },
      source: SRC.dbskkvCoconutPdf }],
    "2": [{ fertilizer: { en: "Urea, SSP and MOP (hybrid coconut schedule)", mr: "युरिया, SSP व MOP (संकरित नारळ वेळापत्रक)" }, nutrient: { en: "N, P₂O₅, K₂O", mr: "नत्र, स्फुरद, पालाश" },
      quantity: { en: "400 g N + 200 g P₂O₅ + 800 g K₂O per palm, plus 20 kg FYM", mr: "दर माडास ४०० ग्रॅम नत्र + २०० ग्रॅम स्फुरद + ८०० ग्रॅम पालाश, अधिक २० किलो शेणखत" },
      basis: { en: "Per hybrid palm, 2nd year", mr: "प्रति संकरित माड, दुसरे वर्ष" }, when: { en: "3 splits per year", mr: "वर्षातून ३ हप्त्यांत" },
      method: { en: "Same split pattern as year 1: ⅓ in June, ⅔ split across October and February.", mr: "पहिल्या वर्षासारखेच विभाजन: जूनमध्ये ⅓, उर्वरित ऑक्टोबर व फेब्रुवारीत." },
      source: SRC.dbskkvCoconutPdf }],
    "3": [{ fertilizer: { en: "Urea, SSP and MOP (hybrid coconut schedule)", mr: "युरिया, SSP व MOP (संकरित नारळ वेळापत्रक)" }, nutrient: { en: "N, P₂O₅, K₂O", mr: "नत्र, स्फुरद, पालाश" },
      quantity: { en: "600 g N + 300 g P₂O₅ + 1200 g K₂O per palm, plus 30 kg FYM", mr: "दर माडास ६०० ग्रॅम नत्र + ३०० ग्रॅम स्फुरद + १२०० ग्रॅम पालाश, अधिक ३० किलो शेणखत" },
      basis: { en: "Per hybrid palm, 3rd year", mr: "प्रति संकरित माड, तिसरे वर्ष" }, when: { en: "3 splits per year", mr: "वर्षातून ३ हप्त्यांत" },
      method: { en: "Same split pattern: ⅓ in June, ⅔ split across October and February.", mr: "तेच विभाजन: जूनमध्ये ⅓, उर्वरित ऑक्टोबर व फेब्रुवारीत." },
      source: SRC.dbskkvCoconutPdf }],
    "4": [{ fertilizer: { en: "Urea, SSP and MOP (hybrid coconut schedule)", mr: "युरिया, SSP व MOP (संकरित नारळ वेळापत्रक)" }, nutrient: { en: "N, P₂O₅, K₂O", mr: "नत्र, स्फुरद, पालाश" },
      quantity: { en: "800 g N + 400 g P₂O₅ + 1600 g K₂O per palm, plus 40 kg FYM", mr: "दर माडास ८०० ग्रॅम नत्र + ४०० ग्रॅम स्फुरद + १६०० ग्रॅम पालाश, अधिक ४० किलो शेणखत" },
      basis: { en: "Per hybrid palm, 4th year", mr: "प्रति संकरित माड, चौथे वर्ष" }, when: { en: "3 splits per year", mr: "वर्षातून ३ हप्त्यांत" },
      method: { en: "Same split pattern: ⅓ in June, ⅔ split across October and February.", mr: "तेच विभाजन: जूनमध्ये ⅓, उर्वरित ऑक्टोबर व फेब्रुवारीत." },
      source: SRC.dbskkvCoconutPdf }],
  },
  calendar: [
    { month: { en: "June", mr: "जून" }, activity: { en: "1st fertilizer split + FYM", mr: "पहिली खत मात्रा + शेणखत" } },
    { month: { en: "October", mr: "ऑक्टोबर" }, activity: { en: "2nd fertilizer split", mr: "दुसरी खत मात्रा" } },
    { month: { en: "February", mr: "फेब्रुवारी" }, activity: { en: "3rd fertilizer split", mr: "तिसरी खत मात्रा" } },
    { month: { en: "Year-round", mr: "वर्षभर" }, activity: { en: "Continuous flowering, nut development and harvest every 45–60 days", mr: "सतत फुलोरा, नारळ वृद्धी व दर ४५–६० दिवसांनी काढणी" } },
  ],
  sources: [SRC.dbskkvCoconutPdf, SRC.ratnagiriAdvisory2017, SRC.icarCpcri],
};

// ---------------------------------------------------------------
// ARECANUT / सुपारी
// ---------------------------------------------------------------
const arecanutData = {
  id: "arecanut", icon: "🌴",
  name: { en: "Arecanut", mr: "सुपारी" },
  subtitle: { en: "Grown on Konkan hill slopes, often with banana as an intercrop", mr: "कोकणातील डोंगर उतारावर पिकवली जाते, अनेकदा केळीसोबत आंतरपीक म्हणून" },
  overview: {
    en: "Arecanut is grown on the Konkan hill slopes, often alongside banana as an intercrop in the early years. Verified DBSKKV figures cover the young-palm fertilizer build-up in detail; the exact mature-palm dose for Konkan specifically was not found, so the general ICAR plantation-crop recommendation is shown for that stage and clearly marked as a national, not Konkan-specific, figure.",
    mr: "सुपारी कोकणातील डोंगर उतारावर पिकवली जाते, अनेकदा सुरुवातीच्या वर्षांत केळीसोबत आंतरपीक म्हणून. पडताळणी केलेले DBSKKV आकडे लहान माडांच्या वयानुसार वाढणाऱ्या खत मात्रेबद्दल तपशीलवार माहिती देतात; पूर्ण उत्पादनक्षम माडासाठी कोकण-विशिष्ट नेमकी मात्रा सापडली नाही, त्यामुळे त्या टप्प्यासाठी ICAR ची सर्वसाधारण (राष्ट्रीय, कोकण-विशिष्ट नाही) शिफारस स्पष्टपणे नमूद करून दाखवली आहे."
  },
  ageGroups: [
    { id: "1", name: { en: "1st year", mr: "पहिले वर्ष" } },
    { id: "2", name: { en: "2nd year", mr: "दुसरे वर्ष" } },
    { id: "3", name: { en: "3rd year", mr: "तिसरे वर्ष" } },
    { id: "5plus", name: { en: "5th year onward (bearing)", mr: "पाचवे वर्ष व त्यापुढे (उत्पादनक्षम)" } },
  ],
  timeline: [
    {
      stage: { en: "Planting", mr: "लागवड" }, icon: "🌱",
      time: { en: "June – July (monsoon onset)", mr: "जून – जुलै (पावसाळा सुरुवात)" },
      ...noFert(),
      irrigation: { en: "Water at planting; young palms need shade and protection from strong sun and wind.", mr: "लागवडीच्या वेळी पाणी द्यावे; लहान माडांना सावली व जोरदार सूर्यप्रकाश-वाऱ्यापासून संरक्षणाची गरज असते." },
      cropCare: { en: "Banana is often planted alongside as a shade-giving intercrop in the first 2–3 years, per DBSKKV recommendation for Konkan hill-slope gardens under drip irrigation.", mr: "DBSKKV च्या शिफारशीनुसार, कोकणातील डोंगर उतारावरील बागांमध्ये पहिल्या २–३ वर्षांत ठिबक सिंचनाखाली केळीची सावली देणारे आंतरपीक म्हणून लागवड केली जाते." },
      pestDisease: { en: "Protect young palms from termites and rodents.", mr: "लहान माडांना वाळवी व उंदीर यांपासून संरक्षण द्यावे." },
      nextStep: { en: "Age-based fertilizer build-up.", mr: "वयानुसार खत मात्रा वाढवणे." },
    },
    {
      stage: { en: "Young Palm — Building Up the Dose", mr: "लहान माड — मात्रा टप्प्याटप्प्याने वाढवणे" }, icon: "🌿",
      time: { en: "Years 1–3", mr: "वर्ष १–३" },
      fertilizerStatus: "byAge",
      irrigation: { en: "If grown with banana as an intercrop, drip irrigation at 10–12 litres/day/plant (Nov–Jan) and 15–18 litres/day/plant (Feb–May) is recommended for the banana, which also benefits the young arecanut.", mr: "केळीसोबत आंतरपीक म्हणून लागवड असल्यास, केळीसाठी १०–१२ लिटर/दिवस/झाड (नोव्हेंबर–जानेवारी) व १५–१८ लिटर/दिवस/झाड (फेब्रुवारी–मे) ठिबक सिंचनाची शिफारस आहे, ज्याचा फायदा लहान सुपारी झाडालाही होतो." },
      cropCare: { en: "Mulch the basin; keep weed growth down around the young palm.", mr: "खोडाभोवती आच्छादन करावे; लहान माडाभोवती गवत वाढू देऊ नये." },
      pestDisease: { en: "Watch for termite damage on young roots.", mr: "लहान मुळांवर वाळवीच्या प्रादुर्भावावर लक्ष ठेवावे." },
      nextStep: { en: "Bearing stage from the 5th year.", mr: "पाचव्या वर्षापासून उत्पादनक्षम टप्पा." },
    },
    {
      stage: { en: "Flowering & Nut Set", mr: "फुलोरा व बी धारणा" }, icon: "🌸",
      time: { en: "Fruiting palms flower and set nut through the year", mr: "उत्पादनक्षम माडांना वर्षभर फुलोरा व बी धारणा होते" },
      ...noFert(),
      irrigation: { en: "No verified Konkan-specific irrigation schedule found for this exact stage.", mr: "या नेमक्या टप्प्यासाठी पडताळणी केलेले कोकण-विशिष्ट पाणी वेळापत्रक सापडले नाही." },
      cropCare: { en: "Standard basin upkeep and weed control.", mr: "नेहमीप्रमाणे खोडाभोवतीची जागा नीट ठेवावी व गवत काढावे." },
      pestDisease: { en: "Monitor for nut/fruit rot on developing bunches, especially in high-rainfall Konkan conditions.", mr: "विशेषतः कोकणातील जास्त पावसाच्या परिस्थितीत वाढणाऱ्या घडांवर बी/फळ कूज रोगावर लक्ष ठेवावे." },
      nextStep: { en: "Harvest.", mr: "काढणी." },
    },
    {
      stage: { en: "Harvest", mr: "काढणी" }, icon: "🧺",
      time: { en: "September/October onward from the 5th year, continuing until the palm is due for the next round", mr: "पाचव्या वर्षापासून सप्टेंबर/ऑक्टोबरपासून पुढे, पुढील फेरीपर्यंत सुरू" },
      ...noFert(),
      irrigation: { en: "No special irrigation change needed for harvest.", mr: "काढणीसाठी पाण्यात विशेष बदल करण्याची गरज नाही." },
      cropCare: { en: "Harvest bunches at the correct maturity stage for the intended product (raw, boiled, or ripe supari).", mr: "अपेक्षित उत्पादनानुसार (कच्ची, उकडलेली किंवा पक्व सुपारी) योग्य पक्वतेला घड काढावेत." },
      pestDisease: { en: "Sort out and discard nuts affected by rot before drying/processing.", mr: "वाळवण्यापूर्वी/प्रक्रिया करण्यापूर्वी कूज लागलेली बी वेगळी करून टाकून द्यावी." },
      nextStep: { en: "Next split-dose cycle begins the following year.", mr: "पुढील वर्षी नवीन खत मात्रा चक्र सुरू होते." },
    },
  ],
  fertilizerByAge: {
    "1": [{ fertilizer: { en: "Urea and Muriate of Potash (MOP)", mr: "युरिया व म्युरिएट ऑफ पोटॅश (MOP)" }, nutrient: { en: "Nitrogen (N) and Potassium (K₂O)", mr: "नत्र (N) व पालाश (K₂O)" },
      quantity: { en: "⅓ of the 3-year-old palm's split dose (the 3-year dose is 160 g urea + 125 g MOP per split)", mr: "३ वर्षांच्या माडाच्या हप्त्याच्या मात्रेच्या ⅓ (३ वर्षांची मात्रा एका हप्त्यात १६०ग्रॅम युरिया + १२५ग्रॅम MOP आहे)" },
      basis: { en: "Per palm, 1st year", mr: "प्रति माड, पहिले वर्ष" }, when: { en: "Split dose, per district agromet advisory", mr: "हप्त्यानुसार, जिल्हा हवामान-कृषी सल्ल्यानुसार" },
      method: { en: "Apply in a circular ring about 1 metre from the base of the palm and cover with soil.", mr: "माडाच्या खोडापासून सुमारे १ मीटर अंतरावर वर्तुळाकार खड्ड्यात द्यावे व मातीने झाकावे." },
      source: SRC.ratnagiriAdvisory2021 }],
    "2": [{ fertilizer: { en: "Urea and Muriate of Potash (MOP)", mr: "युरिया व म्युरिएट ऑफ पोटॅश (MOP)" }, nutrient: { en: "Nitrogen (N) and Potassium (K₂O)", mr: "नत्र (N) व पालाश (K₂O)" },
      quantity: { en: "⅔ of the 3-year-old palm's split dose (160 g urea + 125 g MOP)", mr: "३ वर्षांच्या माडाच्या हप्त्याच्या मात्रेच्या ⅔ (१६०ग्रॅम युरिया + १२५ग्रॅम MOP)" },
      basis: { en: "Per palm, 2nd year", mr: "प्रति माड, दुसरे वर्ष" }, when: { en: "Split dose, per district agromet advisory", mr: "हप्त्यानुसार, जिल्हा हवामान-कृषी सल्ल्यानुसार" },
      method: { en: "Circular ring about 1 metre from the base, covered with soil.", mr: "खोडापासून सुमारे १ मीटर अंतरावर वर्तुळाकार खड्ड्यात, मातीने झाकावे." },
      source: SRC.ratnagiriAdvisory2021 }],
    "3": [{ fertilizer: { en: "Urea and Muriate of Potash (MOP)", mr: "युरिया व म्युरिएट ऑफ पोटॅश (MOP)" }, nutrient: { en: "Nitrogen (N) and Potassium (K₂O)", mr: "नत्र (N) व पालाश (K₂O)" },
      quantity: { en: "160 g Urea + 125 g MOP (this split)", mr: "१६०ग्रॅम युरिया + १२५ग्रॅम MOP (या हप्त्यात)" },
      basis: { en: "Per palm, 3rd year", mr: "प्रति माड, तिसरे वर्ष" }, when: { en: "2nd split of the season, per Ratnagiri district advisory", mr: "हंगामातील दुसरा हप्ता, रत्नागिरी जिल्हा सल्ल्यानुसार" },
      method: { en: "Circular ring about 1 metre from the base of the palm, covered with soil after application.", mr: "माडाच्या खोडापासून सुमारे १ मीटर अंतरावर वर्तुळाकार खड्डा करून, खत दिल्यावर मातीने झाकावे." },
      important: { en: "This is documented as the 2nd split for the season; the total annual dose and the 1st split amount specifically for Konkan were not found and are not invented here.", mr: "हे हंगामातील दुसरे हप्ता म्हणून नोंदवले आहे; कोकणासाठी वर्षभराची एकूण मात्रा व पहिल्या हप्त्याचे प्रमाण सापडले नाही, त्यामुळे ते इथे अंदाजाने दाखवलेले नाही." },
      source: SRC.ratnagiriAdvisory2021 }],
    "5plus": [{ fertilizer: { en: "Not Konkan-verified — general ICAR plantation-crop recommendation shown instead", mr: "कोकण-विशिष्ट पडताळणी नाही — त्याऐवजी ICAR ची सर्वसाधारण शिफारस दाखवली आहे" },
      nutrient: { en: "Nitrogen, Phosphorus (P₂O₅), Potassium (K₂O)", mr: "नत्र, स्फुरद (P₂O₅), पालाश (K₂O)" },
      quantity: { en: "100 g N + 40 g P₂O₅ + 140 g K₂O per palm per year, plus 12 kg each of FYM/compost and green leaf — this is the ICAR-CPCRI all-India figure, not a Konkan/DBSKKV-specific one.", mr: "दर माडास दरवर्षी १०० ग्रॅम नत्र + ४० ग्रॅम स्फुरद + १४० ग्रॅम पालाश, अधिक १२ किलो शेणखत/कंपोस्ट व १२ किलो हरित पाला — हा ICAR-CPCRI चा सर्व-भारतीय आकडा आहे, कोकण/DBSKKV-विशिष्ट नाही." },
      basis: { en: "Per bearing palm (national recommendation)", mr: "प्रति उत्पादनक्षम माड (राष्ट्रीय शिफारस)" },
      when: { en: "Not specified in this source for split timing", mr: "या स्रोतात हप्त्यांच्या वेळेबद्दल नमूद नाही" },
      method: { en: "Basin application, as generally practiced for plantation palms.", mr: "बागायती माडांसाठी नेहमीप्रमाणे खड्डा पद्धतीने." },
      important: { en: "Please verify the mature-palm dose for your specific area with your local KVK before applying, since this figure is national, not Konkan-specific.", mr: "हा आकडा राष्ट्रीय आहे, कोकण-विशिष्ट नाही, त्यामुळे खत देण्यापूर्वी आपल्या भागासाठीची मात्रा स्थानिक KVK कडून पडताळून घ्यावी." },
      source: SRC.icarCpcri }],
  },
  calendar: [
    { month: { en: "June – July", mr: "जून – जुलै" }, activity: { en: "Planting / 1st split dose window (per advisory)", mr: "लागवड / पहिल्या हप्त्याचा काळ (सल्ल्यानुसार)" } },
    { month: { en: "Dec – Jan", mr: "डिसेंबर – जानेवारी" }, activity: { en: "2nd split dose, per district agromet advisory", mr: "दुसरा हप्ता, जिल्हा हवामान-कृषी सल्ल्यानुसार" } },
    { month: { en: "Sept – Oct onward", mr: "सप्टेंबर – ऑक्टोबरपासून" }, activity: { en: "Harvest begins from the 5th year", mr: "पाचव्या वर्षापासून काढणी सुरू" } },
  ],
  sources: [SRC.ratnagiriAdvisory2021, SRC.icarCpcri, SRC.dbskkvAgronomyDept],
};

// ---------------------------------------------------------------
// BANANA / केळी
// ---------------------------------------------------------------
const bananaData = {
  id: "banana", icon: "🍌",
  name: { en: "Banana", mr: "केळी" },
  subtitle: { en: "Grand Naine and other varieties, often grown as an intercrop", mr: "ग्रँड नैन व इतर जाती, अनेकदा आंतरपीक म्हणून घेतली जाते" },
  overview: {
    en: "Banana (Grand Naine) is grown in Konkan both as a standalone crop and as an intercrop in young arecanut plantations. A verified, Konkan-specific drip-irrigation schedule exists for this intercropping system. A verified DBSKKV/Maharashtra-specific fertilizer dose (kg N-P-K per plant) for Chiplun-area banana could not be found in this round of research — this is stated honestly below instead of guessing a number.",
    mr: "केळी (ग्रँड नैन) कोकणात स्वतंत्र पीक म्हणून तसेच लहान सुपारी बागेत आंतरपीक म्हणूनही घेतली जाते. या आंतरपीक पद्धतीसाठी पडताळणी केलेले, कोकण-विशिष्ट ठिबक सिंचन वेळापत्रक उपलब्ध आहे. चिपळूण भागातील केळीसाठी पडताळणी केलेली DBSKKV/महाराष्ट्र-विशिष्ट खत मात्रा (प्रति झाड किलो नत्र-स्फुरद-पालाश) या संशोधन फेरीत सापडली नाही — त्यामुळे अंदाज न बांधता ते खाली स्पष्टपणे सांगितले आहे."
  },
  ageGroups: [
    { id: "standalone", name: { en: "Standalone planting", mr: "स्वतंत्र लागवड" } },
    { id: "intercrop", name: { en: "Intercrop with young arecanut (first 3 years)", mr: "लहान सुपारी बागेत आंतरपीक (पहिली ३ वर्षे)" } },
  ],
  timeline: [
    {
      stage: { en: "Planting", mr: "लागवड" }, icon: "🌱",
      time: { en: "Monsoon onset or as guided locally for the chosen variety", mr: "पावसाळा सुरुवात किंवा निवडलेल्या जातीनुसार स्थानिक मार्गदर्शनाने" },
      fertilizerStatus: "unverified",
      irrigation: { en: "As an intercrop in young arecanut on Konkan hill slopes, drip irrigation of 10–12 litres/day/plant (November–January) and 15–18 litres/day/plant (February–May) is the verified DBSKKV recommendation.", mr: "कोकणातील डोंगर उतारावरील लहान सुपारी बागेत आंतरपीक असल्यास, १०–१२ लिटर/दिवस/झाड (नोव्हेंबर–जानेवारी) व १५–१८ लिटर/दिवस/झाड (फेब्रुवारी–मे) हे पडताळणी केलेले DBSKKV ठिबक सिंचन प्रमाण आहे." },
      cropCare: { en: "Use disease-free, quality tissue-culture or sucker planting material.", mr: "रोगमुक्त, दर्जेदार टिशू-कल्चर किंवा मुनवे लागवड साहित्य वापरावे." },
      pestDisease: { en: "Treat planting material to guard against nematodes and rhizome weevil before planting.", mr: "लागवडीपूर्वी सुत्रकृमी व खोड-भुंगा यांपासून संरक्षणासाठी लागवड साहित्यावर प्रक्रिया करावी." },
      nextStep: { en: "Vegetative growth.", mr: "वाढीचा टप्पा." },
    },
    {
      stage: { en: "Vegetative Growth", mr: "वाढीचा टप्पा" }, icon: "🌿",
      time: { en: "First 5–6 months after planting", mr: "लागवडीनंतरचे पहिले ५–६ महिने" },
      fertilizerStatus: "unverified",
      irrigation: { en: "Continue the drip schedule above if intercropped; keep soil consistently moist without waterlogging otherwise.", mr: "आंतरपीक असल्यास वरील ठिबक वेळापत्रक सुरू ठेवावे; अन्यथा माती सतत ओलसर ठेवावी, पाणी साचू देऊ नये." },
      cropCare: { en: "Remove excess suckers, keeping only one follower sucker per mat; keep the base weed-free.", mr: "अतिरिक्त मुनवे काढून टाकावेत, प्रत्येक बुंध्यास फक्त एकच मुनवा ठेवावा; बुंध्याभोवती गवत काढावे." },
      pestDisease: { en: "Watch for sigatoka leaf spot and pseudostem borer.", mr: "सिगाटोका पानावरील ठिपके व खोड पोखरणारी अळी यांवर लक्ष ठेवावे." },
      nextStep: { en: "Flowering / bunch emergence.", mr: "फुलोरा / घड निघण्याचा टप्पा." },
    },
    {
      stage: { en: "Flowering & Bunch Emergence", mr: "फुलोरा व घड निघणे" }, icon: "🌸",
      time: { en: "Roughly 6–8 months after planting (variety-dependent)", mr: "लागवडीनंतर अंदाजे ६–८ महिने (जातीनुसार बदलते)" },
      fertilizerStatus: "unverified",
      irrigation: { en: "Water requirement is generally highest around bunch emergence; maintain the intercrop drip schedule if applicable.", mr: "घड निघण्याच्या वेळी पाण्याची गरज साधारणपणे सर्वाधिक असते; आंतरपीक असल्यास ठिबक वेळापत्रक कायम ठेवावे." },
      cropCare: { en: "Prop the plant if needed once the bunch is heavy; remove the male bud (if the local practice is to remove it) after the last hand has opened.", mr: "घड जड झाल्यावर गरज असल्यास झाडाला आधार द्यावा; शेवटची फणी उघडल्यानंतर स्थानिक पद्धतीनुसार पुरुष कळी काढावी." },
      pestDisease: { en: "Bunch covering can help protect developing fruit from pests and rain scarring.", mr: "घड झाकल्याने वाढणारी फळे किडी व पावसाच्या डागांपासून सुरक्षित राहू शकतात." },
      nextStep: { en: "Bunch/fruit development.", mr: "घड/फळ वृद्धी." },
    },
    {
      stage: { en: "Bunch Development", mr: "घड वृद्धी" }, icon: "🍌",
      time: { en: "Roughly 2.5–3 months after bunch emergence", mr: "घड निघाल्यानंतर अंदाजे २.५–३ महिने" },
      fertilizerStatus: "unverified",
      irrigation: { en: "Consistent watering supports finger fill; avoid moisture stress during this stage.", mr: "सातत्यपूर्ण पाण्याने फणी चांगली भरते; या टप्प्यावर पाण्याचा ताण टाळावा." },
      cropCare: { en: "Continue removing dry/diseased leaves; support heavy bunches.", mr: "वाळलेली/रोगट पाने काढणे सुरू ठेवावे; जड घडांना आधार द्यावा." },
      pestDisease: { en: "Watch for thrips causing rind blemish on the fruit.", mr: "फळाच्या सालीवर डाग करणाऱ्या थ्रिप्स किडीवर लक्ष ठेवावे." },
      nextStep: { en: "Harvest.", mr: "काढणी." },
    },
    {
      stage: { en: "Harvest", mr: "काढणी" }, icon: "🧺",
      time: { en: "Roughly 11–13 months after planting, when fingers fill out but are still green and firm", mr: "लागवडीनंतर अंदाजे ११–१३ महिने, फणी भरलेली पण अजून हिरवी व टणक असताना" },
      fertilizerStatus: "unverified",
      irrigation: { en: "Reduce watering slightly a few days before harvest; not a verified Konkan-specific instruction, but a common general practice.", mr: "काढणीच्या काही दिवस आधी पाणी किंचित कमी करावे; हे कोकण-विशिष्ट पडताळणी केलेले नाही, पण सामान्यपणे पाळली जाणारी पद्धत आहे." },
      cropCare: { en: "Cut the bunch with care to avoid bruising; the mother plant can then be cut down to let the follower sucker take over.", mr: "घड काळजीपूर्वक कापावा जेणेकरून फळांना मार लागू नये; त्यानंतर मुख्य झाड कापून पुढील मुनव्याला वाढू द्यावे." },
      pestDisease: { en: "Handle harvested bunches carefully during transport to avoid rot-causing injuries.", mr: "वाहतुकीदरम्यान काढलेले घड काळजीपूर्वक हाताळावेत जेणेकरून इजा होऊन कूज लागणार नाही." },
      nextStep: { en: "Ratoon crop management from the follower sucker.", mr: "पुढील मुनव्यापासून खोडवा पिकाचे व्यवस्थापन." },
    },
  ],
  fertilizerByAge: { "standalone": "unverified", "intercrop": "unverified" },
  calendar: [
    { month: { en: "Nov – Jan", mr: "नोव्हेंबर – जानेवारी" }, activity: { en: "Drip irrigation 10–12 L/day/plant (if intercropped in young arecanut)", mr: "ठिबक सिंचन १०–१२ लिटर/दिवस/झाड (लहान सुपारी बागेत आंतरपीक असल्यास)" } },
    { month: { en: "Feb – May", mr: "फेब्रुवारी – मे" }, activity: { en: "Drip irrigation 15–18 L/day/plant (if intercropped)", mr: "ठिबक सिंचन १५–१८ लिटर/दिवस/झाड (आंतरपीक असल्यास)" } },
    { month: { en: "~6–8 months after planting", mr: "लागवडीनंतर ~६–८ महिने" }, activity: { en: "Flowering / bunch emergence", mr: "फुलोरा / घड निघणे" } },
    { month: { en: "~11–13 months after planting", mr: "लागवडीनंतर ~११–१३ महिने" }, activity: { en: "Harvest", mr: "काढणी" } },
  ],
  sources: [SRC.dbskkvAgronomyDept],
};

const CROPS = {
  mango: mangoData,
  cashew: cashewData,
  coconut: coconutData,
  arecanut: arecanutData,
  banana: bananaData,
};
const CROP_ORDER = ["mango", "coconut", "cashew", "banana", "arecanut"];
