import { contactInfo } from "./contactInfo";

const turkishKeywords = [
  "okuyor", "üniversite", "hangi bölüm", "proje", "çalışma", "alanı",
  "staj", "iş deneyimi", "teknoloji", "dil", "yazılım", "sosyal", "beceri",
  "sertifika", "kurs", "hobi", "boş zaman", "Mehmet Ali", "tanıt", "kimdir",
  "iletişim", "nasıl ulaşırım", "teşekkür", "merhaba", "selam", "hangi yazılım",
  "yaş", "kaç yaş", "doğum yılı", "2002 doğumlu", "sevgili", "evli", "ilişkisi"
];

const detectLanguage = (text) => {
  const lower = text.toLowerCase();
  const matches = turkishKeywords.filter((w) => lower.includes(w)).length;
  return matches > 0 ? "tr" : "tr";
};

export const getBotResponse = (msg) => {
  const q = msg.toLowerCase();

  if (q.includes("okuyor") || q.includes("üniversite") || q.includes("hangi bölüm")) {
    return "Mehmet Ali, Kahramanmaraş Sütçü İmam Üniversitesi Bilgisayar Mühendisliği Bölümünden mezun oldu. Yazılım geliştirme, yapay zeka ve Doğal Dil İşleme üzerine yoğunlaşıyor.";
  }

  if (q.includes("proje") || q.includes("çalışma alanı") || q.includes("hangi alan")) {
    return "Web siteleri, yapay zeka destekli sistemler ve Doğal Dil İşleme projeleri geliştiriyor. Özellikle toplumsal fayda sağlamaya yönelik fikirler üzerinde çalışıyor.";
  }

  if (q.includes("staj") || q.includes("iş deneyimi")) {
    return "Yaklaşık 8 aylık iş/staj deneyimi bulunuyor. İnfoteks Bilgi Teknolojileri A.Ş'de donanım mühendis stajyeri olarak switch ve router üzerinde ev ve işyeri lokasyonları için konfigürasyon bağlantıları gerçekleştirdi. Akınsoft Teknoloji'de web geliştirme üzerine, Hexaops Yazılım Teknolojileri A.Ş'de yapay zeka aday mühendisi oalrak UME Eğitimini gerçekleştirdiği 6 aylık bir süreçte Yapay zeka destekli bir mobil uygulamada görev aldı.";
  }

  if (q.includes("teknoloji") || q.includes("dil") || q.includes("hangi yazılım")) {
    return "JavaScript (ES6+), SQL Server,TypeScript, HTML/CSS, Python,ile projeler geliştiriyor. WandB, React ve test araçlarında da deneyim sahibi.";
  }

  if (q.includes("sosyal beceri") || q.includes("kişisel özellik") || q.includes("takım")) {
    return "Takım çalışmasına yatkın, zaman yönetimi, etkili iletişim ve sunum yapma konularında kendini geliştiriyor.";
  }

  if (q.includes("sertifika") || q.includes("kurs")) {
    return "BTK Akademiden Python Sertifikası ve Btk'dan SQL sertifikası aldı. Patika.dev'den Başlangıç seviye Front-end Eğitimi Sertifikası aldı.";
  }

  if (q.includes("hobi") || q.includes("boş zaman") || q.includes("ne yapmayı seviyor")) {
    return "Futbol Oynamayı , seyahat etmeyi ve Su sporlarını seviyor.";
  }

  if (q.includes("kimdir") || q.includes("züleyha kim") || q.includes("tanıt")) {
    return "Mehmet Ali, bilgisayar mühendisliği öğrencisi. Web siteleri, yapay zeka ve Doğal Dil İşleme alanında projeler geliştiriyor ve teknik becerilerini her geçen gün güçlendiriyor.";
  }

  if (q.includes("ingilizce") || q.includes("hangi dilleri biliyor")) {
    return "İngilizce seviyesi B1 düzeyindedir. Teknik belgeleri anlayabiliyor ve yazılım geliştirme süreçlerine adapte olabiliyor.";
  }

  if (q.includes("merhaba") || q.includes("selam")) {
    return "Merhaba! Mehmet Ali hakkında merak ettiklerini sorabilirsin. Yardımcı olmaktan mutluluk duyarım 😊";
  }

  if (q.includes("teşekkür") || q.includes("sağ ol")) {
    return "Rica ederim! Başka bir konuda yardımcı olabilirim 😊";
  }

  if (q.includes("iletişim") || q.includes("nasıl ulaşırım") || q.includes("linkedin") || q.includes("github")) {
    return contactInfo;
  }

  if (q.includes("yaş") || q.includes("kaç yaş") || q.includes("doğum yılı") || q.includes("2002 doğumlu")) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - 2002;
    return `Mehmet Ali 2002 doğumlu. Yani şu an ${age} yaşında.`;
  }

  return "Bunu şu anda bilmiyorum . Mehmet Ali'ye kendin sorman daha sağlıklı olabilir. Ben iletişim kanallarını seninle paylaşabilirim.";
};
