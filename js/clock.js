function showTime() {
    const clockElement = document.getElementById('myClock');
    const now = new Date();

    // Saat ve dakika bilgilerini al
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Tarih bilgilerini al
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const dayName = days[now.getDay()]; // Haftanın gününü isme çevir
    

    // Zaman ve tarih formatı
    const currentTime = `${hours}:${minutes}:${seconds} ${dayName}`;
    

    // Saat ve tarihi elemente yaz
    clockElement.innerText = currentTime;

    // Her saniyede bir güncellenmesi için
    setTimeout(showTime, 1000);
  }
showTime();

let firstName = prompt("Lütfen isminizi giriniz");

let nameDOM = document.querySelector("#myName");

nameDOM.innerHTML = `${firstName}`;

showTime();