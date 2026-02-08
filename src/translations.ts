
import { Translation } from './types';

export const translations: Record<string, any> = {
  bn: {
    appName: "স্মার্ট লাইনম্যান",
    tagline: "জীবনের জন্য বিদ্যুৎ, মৃত্যুর জন্য নয়",
    switchLang: "English",
    nav: {
      home: "হোম",
      community: "কমিউনিটি",
      emergency: "জরুরি",
      sop: "SOP",
      join: "যোগ দিন"
    },
    story: {
      title: "একটি ভুলেই সব শেষ",
      stories: [
        {
          location: "বালুরঘাট",
          incident: "রবিকান্ত বর্মন (৪২) আইসোলেটর কাটার পরেও লাইনে উঠেছিলেন। তিনি জানতেন না যে ব্যাক-ফিডিং কারেন্ট আসছে।",
          accident: "তাকে আর বাঁচানো সম্ভব হয়নি। চোখের সামনে সব শেষ।",
          family: "তার অকাল মৃত্যুতে পরিবার আজ দিশেহারা। বাড়ির একমাত্র উপার্জনকারীকে হারিয়ে তারা পথে বসেছে।",
          compensation: "কোনো সেফটি গিয়ার ব্যবহার না করায় তদন্তে গাফিলতি প্রমাণিত হয়।",
          lesson: "ব্যাক-ফিডিং মৃত্যুর ফাঁদ হতে পারে। আইসোলেটর কাটার পরেও ডিসচার্জ রড ব্যবহার করুন।"
        },
        {
          location: "ইসলামপুর",
          incident: "নাজিমুল ইসলাম (৪৬) শাটডাউন না নিয়েই তাড়াহুড়ো করে লাইনে উঠে পড়েন।",
          accident: "ভয়াবহ বিদ্যুৎস্পৃষ্ট হয়ে ঘটনাস্থলেই তার মৃত্যু হয়।",
          family: "তার স্ত্রী ও সন্তানদের ভবিষ্যৎ অন্ধকার। একটি ছোট ভুল পুরো পরিবারকে ধ্বংস করে দিল।",
          compensation: "নিয়ম না মানার কারণে কোম্পানি ক্ষতিপূরণ দিতে অস্বীকার করে।",
          lesson: "শাটডাউন ছাড়া পোলে ওঠা মানে আত্মহত্যা।"
        },
        {
          location: "মেদিনীপুর (গ্রামীন এলাকা)",
          incident: "অনুপম (২৪) ভেবেছিল লাইন 'ডেড'। তাড়াহুড়ো করে ডিসচার্জ রড না লাগিয়েই পোল-এ উঠে পড়েছিল।",
          accident: "মুহূর্তের মধ্যে ১০০০°C তাপে শরীর জ্বলে যায়।",
          family: "৩ মাস যন্ত্রণার পর প্রাণ বাঁচলেও তার দুটি হাত কেটে ফেলতে হয়। চিকিৎসার খরচ মেটাতে ভিটেমাটি বিক্রি হয়ে গেছে।",
          compensation: "কোম্পানি কোনো ক্ষতিপূরণ দেয়নি কারণ সে সেফটি গিয়ার (PPE) পরেনি।",
          lesson: "নিয়ম না মানলে কোম্পানিও দায়িত্ব নেবে না।"
        },
        {
          location: "নওগাঁ, তাপান, দক্ষিণ দিনাজপুর",
          incident: "অজয় বর্মন (১৫), একজন কিশোর যার জীবন এইমাত্র শুরু হয়েছিল। দুপুরের গরমে বিশ্রাম নিচ্ছিলেন তার পিসিমা। পাখা চলছিল কিন্তু ভেবে বয়ে যাচ্ছিল না। শুধু সাহায্য করতে চেয়েছিল অজয় - পাখাটা একটু ঘুরিয়ে দিতে।",
          accident: "পাখা চালু রেখেই সে হাত দিয়েছিল। ঘরের ভুল ওয়্যারিংয়ের জন্য হঠাৎ শর্ট সার্কিট - মুহূর্তেই ভয়াবহ বিদ্যুৎস্পৃষ্ট। তৎক্ষণাৎ সংজ্ঞা হারায় অজয়। তাপান হাসপাতালে তৎক্ষণাৎ নিয়ে যাওয়া হলেও তাকে আর বাঁচান সম্ভব হয়নি। মাত্র ১৫ বছর বয়সে একটি ছোট্ট সাহায্যের চেষ্টা কেড়ে নিল তার পুরো জীবন।",
          family: "পরিবারের স্বপ্ন ছিল অজয় পড়াশুনা শেষ করে একদিন তাদের মুখ উজ্জ্বল করবে। কিন্তু সবকিছু একমুহূর্তে শেষ হয়ে গেল। মা-বাবার চোখের সামনে তাদের একমাত্র সন্তান কেড়ে নিল একটি ছোট্ট অসচেতনতা।",
          compensation: "ঘটনাটি মিটারের পরে হওয়ায় WBSEDCL কোনো দায়িত্ব নেয়নি। ঘরের ভুল ওয়্যারিং এবং সচেতনতার অভাবে সংঘটিত এই দুর্ঘটনার জন্য কোনো ক্ষতিপূরণ মেলেনি পরিবারকে।",
          lesson: "চালু অবস্থায় কখনো ইলেকট্রিক্যাল যন্ত্রপাতি স্পর্শ করবেন না। পাখা, হিটার, বা যেকোনো যন্ত্র সরানোর আগে সুইচ অফ করুন। ঘরের ওয়্যারিং নিয়মিত পরীক্ষা করান। একটি মুহূর্তের অসচেতনতা কেড়ে নিতে পারে একটি পুরো জীবন।"
        },
        {
          location: "চান্দোহাটি, তাপান, দক্ষিণ দিনাজপুর",
          incident: "আবদুস সামাদ (৩০), একজন পরিশ্রমী কৃষক। ১১ই সেপ্টেম্বর ২০২৪-এর সেই অভিশপ্ত রাত। রাত ১১:৩০ টার দিকে তিনি তার জমিতে জল দেওয়ার জন্য স্ট্যাল (STW) পাম্প চালাতে গিয়েছিলেন। টিনের মিটারের ঘরে ছিল এক অস্থায়ী এবং ঝুঁকিপূর্ণ ইলেকট্রিক্যাল সেটআপ।",
          accident: "পাম্পটি চালানোর সময় হঠাৎ লিক হওয়া সার্ভিস ক্যাবল বা কাট-আউট বিহীন ব্যবস্থায় তিনি বিদ্যুৎস্পৃষ্ট হন। টিনের ঘরের অন্ধকারের মধ্যেই নিথর হয়ে লুটিয়ে পড়েন তিনি। বাড়িতে যখন কেউ তার ফোন পাচ্ছিল না, তখন বাড়ির লোক পাম্পের ঘরে গিয়ে তাকে অচেতন অবস্থায় খুঁজে পায়। হাসপাতালে নিয়ে গেলে ডাক্তার তাকে মৃত ঘোষণা করেন।",
          family: "একটি পরিবারের মেরুদণ্ড ভেঙে গেল। মা মাজেদা বিবি তার ছেলেকে হারিয়ে আজ শোকে পাথর। ৩০ বছর বয়সী এই তরুণের অকাল মৃত্যু তার পরিবারের অন্ধকার ভবিষ্যৎ ডেকে এনেছে।",
          compensation: "মিটারে পরে ঘটনাটি ঘটায় WBSEDCL কোনো দায় নেয়নি। অস্থায়ী সংযোগ এবং যথাযথ কাট-আউট না থাকার কারণে এই ভয়াবহ ট্র্যাজেডির কোনো আর্থিক ক্ষতিপূরণ মেলেনি।",
          lesson: "কখনোই বিদ্যুৎ সংযোগে অস্থায়ী ব্যবস্থা বা 'জুয়াড়' করবেন না। মিটারের ঘরে যথাযথ 'কাট-আউট' বা সুরক্ষা নিশ্চিত করুন। রাতে প্রতিকূল অবস্থায় একা ইলেকট্রিক্যাল কাজ করা এড়িয়ে চলুন। মনে রাখবেন, একটি ছোট অবহেলা মানেই নিশ্চিত মৃত্যু।"
        },
        {
          location: "জলিলপুর, গঙ্গারামপুর, দক্ষিণ দিনাজপুর",
          incident: "অজিত ঘোষ (৫২), একজন সাধারণ মানুষ। ২০শে মে ২০২৫-এর সকাল ১০:৪৫ মিনিট। বাড়ির কাছেই একটি ই-রিকশা (টোটো) চার্জ দেওয়া হচ্ছিল। সেই টোটোর চার্জিং ক্যাবলটি ছিল ত্রুটিপূর্ণ এবং ইনসুলেশন ক্ষতিগ্রস্ত। একটি ঝুলন্ত অস্থায়ী সুইচবোর্ড থেকে এই বিপজ্জনক সংযোগটি নেওয়া হয়েছিল।",
          accident: "অজান্তেই অজিত বাবু চার্জ হতে থাকা সেই টোটোটির সংস্পর্শে আসেন। ক্ষতিগ্রস্ত ক্যাবলের কারণে পুরো টোটোটি তখন বিদ্যুৎবাহী হয়ে ছিল। মুহূর্তের মধ্যে তিনি বিদ্যুৎস্পৃষ্ট হয়ে লুটিয়ে পড়েন। গ্রামবাসীরা তাকে উদ্ধার করে হাসপাতালে নিয়ে গেলেও ডাক্তার তাকে মৃত ঘোষণা করেন।",
          family: "৫২ বছর বয়সে এক মর্মান্তিক অবহেলায় অজিত বাবুর জীবনপ্রদীপ নিভে গেল। তার ভাই সুকোট ঘোষ এবং পরিবারের সদস্যরা আজ এক অপূরণীয় ক্ষতির সম্মুখীন। একটি ছোট অযত্ন একটি হাসিখুশি পরিবারকে চিরতরে নিঃস্ব করে দিল।",
          compensation: "নিজের এলাকায় ইলেকট্রিক্যাল সেফটি বজায় না রাখা এবং ত্রুটিপূর্ণ যন্ত্রপাতি ব্যবহারের কারণে এই দুর্ঘটনাটি ঘটে। এটি মিটারের পরে হওয়ায় WBSEDCL কোনো দায় নেয়নি এবং পরিবার কোনো ক্ষতিপূরণ পায়নি।",
          lesson: "বৈদ্যুতিক সরঞ্জামের নিয়মিত রক্ষণাবেক্ষণ করুন। ক্ষতিগ্রস্ত ক্যাবল বা অস্থায়ী সুইচবোর্ড ব্যবহার করবেন না। ই-রিকশা বা ব্যাটারি চালিত যান চার্জ দেওয়ার সময় বিশেষ সতর্কতা অবলম্বন করুন। আপনার সামান্য অবহেলাই আপনার বা অন্যের মৃত্যুর কারণ হতে পারে।"
        }
      ],
      lesson: "",
      btn: "আমি কথা দিচ্ছি, আমি সুরক্ষাবিধি মেনে চলব"
    },
    intro: {
      initiative: "স্মার্ট লাইনম্যান উদ্যোগ",
      mission: "সুরক্ষা • শিক্ষা • সম্প্রদায়",
      desc: "লাইনম্যানদের সুরক্ষা আন্দোলন",
      features: [
        { title: "সহজ SOP শিক্ষা", desc: "জটিল নিয়ম নয়, সহজ ভাষায় শিখুন।" },
        { title: "গেম খেলে শেখা", desc: "বোরিং লেকচার নয়, গেম খেলে স্কোর বাড়ান।" },
        { title: "কমিউনিটি সাপোর্ট", desc: "বিপদে একে অপরের পাশে দাঁড়ান।" }
      ],
      join: "বিস্তারিত জানতে ও সুবিধা পেতে লগইন করুন",
      btn: "মোবাইল নম্বর দিয়ে যুক্ত হোন",
      guest: "আমি পরে লগইন করব ->",
      title: "লাইনম্যান হিসেবে আপনার প্রথম দিন",
      subtitle: "আপনি সস্তা শ্রমিক নন - আপনি এক জীবন-ঝুঁকি পেশাদার",
      points: [
        "সমাজ আপনার দিকে তাকিয়ে আছে আলোর জন্য।",
        "আপনার পরিবার আপনার জন্য অপেক্ষায় আছে ঘরের আলোর জন্য।",
        "সুরক্ষা ছাড়া কাজ করা মানে নিজের পরিবারকে পথে বসানো।"
      ],
      expectations: "আপনার কাছে আমাদের প্রত্যাশা: কেবল লাইন ঠিক করা নয়, সুস্থভাবে ঘরে ফিরে আসা।",
      storyHook: "শুরু করার আগে...",
      realStoryIntro: "আসুন দেখি কিছু বাস্তব ঘটনা যা আমাদের চোখ খুলে দেবে দক্ষিণবঙ্গের কিছু লাইনম্যান পরিবারের থেকে।"
    },
    safety: {
      title: "জিরো কমপ্রোমাইজ জোন",
      loto: "LOTO: লক আউট, ট্যাগ আউট - এটা জীবন বাঁচায়।",
      ppe: "PPE: গ্লাভস, হেলমেট, জুতো - এগুলো আপনার বর্ম।",
      myth: "মিথ: 'আমি হাত দিয়ে ছুয়ে বুঝতে পারি লাইন ডেড কিনা' - এটা আপনাকে মেরে ফেলবে।"
    },
    tech: {
      title: "কারিগরি জ্ঞান",
      ht_lt: "HT বনাম LT: দুটোরই মরণ ক্ষমতা আছে।",
      backfeed: "ব্যাক-ফিডিং: জেনারেটর বা ইনভার্টার থেকে উল্টো কারেন্ট আসতে পারে। সাবধান!",
      induction: "ইন্ডাকশন: পাশে চার্জড লাইন থাকলে মৃত লাইনেও কারেন্ট থাকতে পারে।"
    },
    firstaid: {
      title: "প্রাথমিক চিকিৎসা",
      golden: "গোল্ডেন ৫ মিনিট: শকের পর প্রথম ৫ মিনিট সবচেয়ে জরুরি।",
      cpr: "CPR: বুকের মাঝখানে জোর দিয়ে চাপ দিন। থামবেন না!",
      burns: "পোড়া জায়গা: কেবল পরিষ্কার জল ব্যবহার করুন। মলম বা ঘি দেবেন না।"
    },
    blood: {
      title: "রক্তদান রিসোর্স",
      urgent: "আপনার জন্য কে রক্ত দেবে?",
      banks: "পশ্চিমবঙ্গ ও ভারতের ব্লাড ব্যাঙ্ক লিংক",
      message: "রক্তের প্রয়োজন হলে এখানে ক্লিক করুন।"
    },
    legal: {
      title: "আপনার অধিকার ও ক্ষতিপূরণ",
      rights: "ক্ষতিপূরণ পাওয়া আপনার দয়া নয়, আপনার অধিকার।",
      docs: "প্রয়োজনীয় কাগজ: আধার, নিয়োগপত্র, দুর্ঘটনা রিপোর্ট।"
    },
    game: {
      title: "নিরাপদ লাইনম্যান স্কোর",
      start: "কুইজ শুরু করুন",
      streak: "সুরক্ষা স্ট্রিক: ৫ দিন"
    },
    emergency: {
      title: "জরুরি পরিষেবা",
      ambulance: "অ্যাম্বুলেন্স (১০৮)",
      fire: "দমকল",
      supervisor: "সুপারভাইজার",
      location: "আমার লোকেশন পাঠান",
      sms: "জরুরি এসএমএস"
    }
  },
  en: {
    appName: "Smart Lineman",
    tagline: "Electricity for Life, Not Death",
    switchLang: "বাংলা",
    nav: {
      home: "Home",
      community: "Community",
      emergency: "Emergency",
      sop: "SOP",
      join: "Join"
    },
    story: {
      title: "One Mistake, Lifetime of Tears",
      stories: [
        {
          location: "Balurghat",
          incident: "Ravikant Barman (42) worked even after cutting the isolator. He didn't know back-feeding current was active.",
          accident: "He could not be saved. Everything ended in front of everyone's eyes.",
          family: "His family is devastated. Losing the sole earner, they are now destitute.",
          compensation: "Negligence was proven due to lack of safety gear usage.",
          lesson: "Back-feeding is a death trap. Always use a discharge rod."
        },
        {
          location: "Islampur",
          incident: "Nazimul Islam (46) climbed the line in a hurry without taking a shutdown.",
          accident: "He died of electrocution on the spot.",
          family: "Darkness awaits his wife and children. One small mistake destroyed the whole family.",
          compensation: "Company denied compensation due to rule violation.",
          lesson: "Climbing without shutdown is suicide."
        },
        {
          location: "Midnapore (Rural Area)",
          incident: "Anupam (24) thought the line was 'dead'. In a hurry, he climbed without a discharge rod.",
          accident: "His body burned at 1000°C instantly.",
          family: "After 3 months of suffering, he survived but lost both hands. Their land was sold to pay medical bills.",
          compensation: "The company paid ZERO compensation because he violated safety rules (No PPE).",
          lesson: "If you break rules, the company won't save you."
        },
        {
          location: "Nowgaon, Tapan, Dakshin Dinajpur",
          incident: "Ajay Barman (15), a teenager whose life had just begun. His aunt was resting in the afternoon heat. The fan was running but not facing her direction. Ajay just wanted to help - to turn the fan slightly toward her.",
          accident: "He touched it while the fan was still running. Faulty house wiring caused a sudden short circuit - instant electrocution. Ajay lost consciousness immediately. Despite being rushed to Tapan Hospital, he could not be saved. At just 15 years old, a small act of kindness took his entire life.",
          family: "The family dreamed that Ajay would complete his studies and make them proud one day. But everything ended in a moment. A small moment of unawareness snatched their only child from their eyes.",
          compensation: "Since the incident happened after the meter, WBSEDCL took no responsibility. No compensation was provided to the family for this accident caused by faulty house wiring and lack of awareness.",
          lesson: "Never touch electrical appliances while they are running. Turn off the switch before moving fans, heaters, or any device. Get house wiring checked regularly. One moment of unawareness can take away an entire life."
        },
        {
          location: "Chandohati, Tapan, Dakshin Dinajpur",
          incident: "Abdus Samad (30), a hardworking farmer. On the night of September 11, 2024, around 11:30 PM, he went to his fields to start the STW motor pump. The meter room, made of tin, housed a temporary and dangerous electrical setup without any cut-outs.",
          accident: "While connecting the motor in the dark, he came into contact with a leaking service cable. He suffered an electric shock and collapsed inside the tin meter room. When he didn't answer his phone, his family checked the pump house only to find him unconscious. He was declared dead at Harirampur Rural Hospital.",
          family: "The backbone of a family was broken. His mother, Majeda Bibi, is now paralyzed by grief. The untimely death of this 30-year-old has brought a dark future to his family.",
          compensation: "Because the incident occurred after the meter, WBSEDCL took no responsibility. No financial compensation was provided to the family for this tragedy caused by a faulty setup and lack of protection.",
          lesson: "Never use temporary or 'jugaad' electrical setups. Ensure proper cut-outs and protection in the meter room. Avoid working alone with electricity in hazardous conditions at night. Remember, a small negligence means certain death."
        },
        {
          location: "Jalalpur, Gangarampur, Dakshin Dinajpur",
          incident: "Ajit Ghosh (52), a common individual. On May 20, 2025, at 10:45 AM, an E-Rickshaw (Toto) was being charged near his house using a domestic connection. The charging cable was damaged, and the setup used a temporary hanging switchboard.",
          accident: "He unknowingly came into contact with the charging Toto. Due to the faulty cable, the entire vehicle was electrified. He suffered a fatal shock and collapsed. Nearby villagers rushed him to the hospital, but he was declared dead on arrival.",
          family: "At 52, a life was lost due to tragic negligence. His brother, Sukot Ghosh, and the rest of the family are struggling with this immense loss. A single act of carelessness devastated a happy home.",
          compensation: "The accident was caused by poor electrical maintenance and the use of faulty equipment within private premises. Since it happened after the meter, WBSEDCL was not responsible, and no compensation was received.",
          lesson: "Regularly maintain electrical equipment. Never use damaged cables or temporary hanging switchboards. Take extreme caution while charging battery-operated vehicles. A small oversight can be fatal for you or someone else."
        }
      ],
      lesson: "If you think this cannot happen to you, this app is not for you.",
      btn: "I Promise to Follow All Safety Rules"
    },
    intro: {
      initiative: "Smart Lineman Initiative",
      mission: "Safety • Education • Community",
      desc: "We are not just an app. We are a safety movement to save lineman lives.",
      features: [
        { title: "Simple SOPs", desc: "No complex rules, learn in simple language." },
        { title: "Gamified Learning", desc: "No boring lectures, learn by playing games." },
        { title: "Community Support", desc: "Stand by each other in times of need." }
      ],
      join: "Login to access full benefits & details",
      btn: "Join with Mobile Number",
      guest: "I'll login later ->",
      title: "Your First Day as a Lineman",
      subtitle: "You are not cheap labor - you are a life-risk professional",
      points: [
        "Society looks to you for light.",
        "Your family waits for you to be the light of the house.",
        "Working without safety means leaving your family on the streets."
      ],
      expectations: "Our expectation from you: Not just fixing lines, but returning home healthy.",
      storyHook: "Before We Start...",
      realStoryIntro: "Let's see some real incidents from South Bengal that will open your eyes."
    },
    safety: {
      title: "Zero Compromise Zone",
      loto: "Lock Out Tag Out - It saves lives.",
      ppe: "Gloves, Helmet, Shoes - These are your armor.",
      myth: "Myth: 'I can feel if a line is dead by touching it' - This will kill you."
    },
    tech: {
      title: "Technical Knowledge",
      ht_lt: "HT vs LT: Both have the power to kill.",
      backfeed: "Back-feeding: Current can come from generators or inverters. Beware!",
      induction: "Induction: Nearby live lines can charge a dead line."
    },
    firstaid: {
      title: "First Aid & Emergency",
      golden: "Golden 5 Minutes: The first 5 minutes after shock are critical.",
      cpr: "CPR: Push hard in the center of the chest. Do not stop!",
      burns: "Burns: Use only clean water. No ointments or ghee."
    },
    blood: {
      title: "Blood Donor Resource",
      urgent: "Who will donate blood for you?",
      banks: "Blood Bank Links for India",
      message: "Click here if you need blood urgently."
    },
    legal: {
      title: "Rights & Compensation",
      rights: "Compensation is not a favor, it is your right.",
      docs: "Required Docs: Aadhaar, Appointment Letter, Incident Report."
    },
    game: {
      title: "Safe Lineman Score",
      start: "Start Quiz",
      streak: "Safety Streak: 5 Days"
    },
    emergency: {
      title: "Emergency Services",
      ambulance: "Ambulance (108)",
      fire: "Fire Services",
      supervisor: "Supervisor",
      location: "Share My Location",
      sms: "Emergency SMS"
    }
  }
};
