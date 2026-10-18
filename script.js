// عدّل رقم واتساب في السطر التالي: اكتب رمز الدولة ثم الرقم، دون + أو مسافات.
const WHATSAPP_NUMBER = "9677XXXXXXXX";
const message = encodeURIComponent("السلام عليكم، أريد الاستفسار عن خدمات وأسعار الهيثمي للسوشيال ميديا.");
const link = document.getElementById("whatsapp-link");
link.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + message;
document.getElementById("year").textContent = new Date().getFullYear();
