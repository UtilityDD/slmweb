
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
          family: "After 3 months of agony, he survived but lost both hands. They sold their land for treatment.",
          compensation: "The company paid ZERO compensation because he violated safety rules (No PPE).",
          lesson: "If you break rules, the company won't save you."
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
