// Toggle Navbar in Mobile View
function toggleNavbar() {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");
  const togglerIcon = navbarToggler.querySelector("i"); // استهدف الأيقونة داخل الزر

  // تبديل الفئات للأيقونة
  if (togglerIcon.classList.contains("fa-bars")) {
    togglerIcon.classList.remove("fa-bars");
    togglerIcon.classList.add("fa-close"); // أيقونة الإغلاق
  } else {
    togglerIcon.classList.remove("fa-close");
    togglerIcon.classList.add("fa-bars"); // أيقونة الفتح
  }

  // تبديل الفئات للقائمة
  navbarCollapse.classList.toggle("show");
}

// Change Active Link on Click
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// ----------------------------------------- certificates ----------------------------------

let imageIsEnlarged = false;

// Function to set the certificate details (title, description, and image)
function setCertificateDetails(title, description, imageUrl) {
  document.getElementById("certificateTitle").innerText = title;
  document.getElementById("certificateDescription").innerText = description;
  document.getElementById("certificateImage").src = imageUrl;
}

// Function to toggle the image size (zoom in/out)
function toggleImageSize() {
  const image = document.getElementById("certificateImage");

  if (imageIsEnlarged) {
    image.style.maxHeight = "500px";
    image.style.cursor = "zoom-in";
  } else {
    image.style.maxHeight = "80vh"; // Enlarge image
    image.style.cursor = "zoom-out";
  }
  imageIsEnlarged = !imageIsEnlarged;
}

// Function to close the image (reset to original size)
function closeImage() {
  const image = document.getElementById("certificateImage");
  image.style.maxHeight = "500px";
  image.style.cursor = "zoom-in";
  imageIsEnlarged = false;
}

AOS.init();



// -------------------contact-------------------


// استهداف جميع الحقول من نوع input
const inputs = document.querySelectorAll('input');

// إضافة حدث التركيز (focus) لكل input
inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    input.style.borderColor = '#007BFF'; // تغيير لون الحدود عند التركيز
    input.style.boxShadow = '0 0 5px rgba(0, 123, 255, 0.5)';
  });

  input.addEventListener('blur', () => {
    input.style.borderColor = ''; // إعادة اللون الافتراضي عند فقدان التركيز
    input.style.boxShadow = '';
  });
});

// استهداف كل الأزرار من نوع button
const buttons = document.querySelectorAll('button');

// إضافة حدث النقر (click) لكل زر
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.style.backgroundColor = '#28a745'; // تغيير لون الزر عند النقر
    button.style.color = '#fff';
    setTimeout(() => {
      button.style.backgroundColor = ''; // إعادة اللون الافتراضي بعد ثانية
      button.style.color = '';
    }, 1000);
  });
});




const textarea = document.getElementById('floatingTextarea2');
textarea.addEventListener('input', () => {
  const maxLength = 100;
  const currentLength = textarea.value.length;
  if (currentLength >= maxLength) {
    alert('لقد وصلت إلى الحد الأقصى من الأحرف!');
  }
});


document.querySelector('.phone-link').addEventListener('click', (e) => {
  e.preventDefault(); // منع السلوك الافتراضي مؤقتًا
  const userConfirmed = confirm('هل تريد الاتصال بهذا الرقم 960594933311+ ؟');
  if (userConfirmed) {
    window.location.href = 'tel:+9660594933311'; // فتح تطبيق الاتصال
  }
});


document.querySelector('.email-link').addEventListener('click', (e) => {
  e.preventDefault(); // منع السلوك الافتراضي مؤقتًا
  const userConfirmed = confirm('هل تريد إرسال بريد إلكتروني إلى info@masaruc.com؟');
  if (userConfirmed) {
    window.location.href = 'mailto:info@masaruc.com?subject=استفسار&body=مرحبًا، لدي استفسار بخصوص...';
  }
});



// استهداف الأيقونات
const locationIcons = document.querySelectorAll('.location-icon');

// إضافة حدث النقر لكل أيقونة موقع
locationIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    const locationUrl = icon.getAttribute('data-location');
    window.open(locationUrl, '_blank'); // فتح رابط الموقع في نافذة جديدة
  });
});





