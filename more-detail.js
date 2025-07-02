function toggleMenu() {
      document.getElementById("navbar").classList.toggle("show");
    }


let isEnglish = true;

function toggleLanguage() {
  const title = document.getElementById('about-title');
  const paragraph = document.getElementById('about-paragraph');

  if (isEnglish) {
    title.innerHTML = 'ہمارا ادارہ ';
    paragraph.innerHTML = `
      خدیجہ الکبریٰ ویلفیئر فاؤنڈیشن ایک اسلامی ادارہ ہے جو یتیم اور نادار بچیوں کو تعلیم، رہائش اور مکمل کفالت فراہم کرتا ہے۔
      ہمارے ادارے میں مسجد، شعبہ حفظ، اسکول، ہاسٹل اور اخلاقی تربیت کی سہولیات موجود ہیں۔
    `;
  } else {
    title.innerHTML = 'About Our Foundation ';
    paragraph.innerHTML = `
      Khadija Al-Kubra Welfare Foundation is a dedicated Islamic institution that provides education,
      housing, and care for orphan and poor girls. Our facilities include a masjid, hifz classes,
      academic education, hostel, and full sponsorship to build confident, knowledgeable individuals.
    `;
  }

  isEnglish = !isEnglish;
}


function openLightbox(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imgElement.src;
  lightbox.classList.add('show');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('show');
}

// Optional: Close lightbox when clicking outside image
document.getElementById('lightbox').addEventListener('click', function (e) {
  if (e.target.id === 'lightbox') {
    closeLightbox();
  }
});
function openLightbox(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imgElement.src;
  lightbox.classList.add('show');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('show');
}

// Close when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function (e) {
  if (e.target.id === 'lightbox') {
    closeLightbox();
  }
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});



const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});






// 1. Display Gregorian Date
const gregDate = new Date().toLocaleDateString('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});
document.getElementById("gregorian-date").innerText = `Today: ${gregDate}`;

// 2. Display Hijri Date using Intl API with fallback
let hijriOutput = '';
try {
  const hijri = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date());

  hijriOutput = `Hijri: ${hijri}`;
} catch (error) {
  // Fallback if Intl Islamic calendar is not supported
  const hijriToday = new HijriDate();
  hijriOutput = `Hijri: ${hijriToday.getDate()} ${hijriToday.getMonthName()} ${hijriToday.getFullYear()}`;
}

document.getElementById("hijri-date").innerText = hijriOutput;




// Set Gregorian Date
const gregorian = new Date().toLocaleDateString('en-UK', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});
document.getElementById("gregorian-date").innerText = `Today: ${gregorian}`;

// Set Hijri Date (approximate)
try {
  const hijri = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
    day: 'numeric', month: 'long', year: 'numeric'
  }).format(new Date());
  document.getElementById("hijri-date").innerText = `Hijri: ${hijri}`;
} catch (err) {
  document.getElementById("hijri-date").innerText = "Hijri date not supported in this browser";
}

// Prayer Times API (AlAdhan)
fetch("https://api.aladhan.com/v1/timingsByCity?city=Haripur&country=Pakistan&method=2")
  .then(res => res.json())
  .then(data => {
    const timings = data.data.timings;

    // Manual Iqamah times (update if needed)
    const iqamahTimes = {
      Fajr: "04:40 AM",
      Dhuhr: "01:30 PM",
      Asr: "05:15 PM",
      Maghrib: "07:14 PM",
      Isha: "08:45 PM",
      Jummah: "01:30 PM"
    };

    const prayerOrder = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha', 'Jummah'];
    const tbody = document.querySelector('.prayer-body');
    tbody.innerHTML = ""; // Clear existing

    prayerOrder.forEach(prayer => {
      const azan = timings[prayer] || "-";
      const iqamah = iqamahTimes[prayer] || "-";

      const row = `
        <tr>
          <td>${prayer}</td>
          <td>${azan}</td>
          <td>${iqamah}</td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  })
  .catch(error => {
    console.error("Error fetching prayer times:", error);
    document.querySelector('.prayer-body').innerHTML = `<tr><td colspan="3">Unable to load prayer timings.</td></tr>`;
  });




document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.stat-number');

  const animateCount = (el, target) => {
    let count = 0;
    const speed = target / 100;

    const update = () => {
      if (count < target) {
        count += speed;
        el.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        el.innerText = target;
      }
    };
    update();
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.dataset.target;
        animateCount(entry.target, target);
        obs.unobserve(entry.target); // run only once
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(counter => observer.observe(counter));
});

