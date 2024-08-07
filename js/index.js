function loadIndex() {
  const whatsapp = document.getElementById("whatsapp-button");
  whatsapp.addEventListener("click", () => {
    const phoneNumber = "+554132522450";
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${encodeURIComponent(phoneNumber)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, '_blank');
  });
  
  document.getElementById("menu-toggle").addEventListener("click", function () {
    const links = document.getElementById("links");
    if (links.classList.contains("expanded")) {
      links.classList.remove("expanded");
    } else {
      links.classList.add("expanded");
    }
  });

}

document.addEventListener("DOMContentLoaded", loadIndex);