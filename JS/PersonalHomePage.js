var typed = new Typed(".text", {
    strings: ["Students Informatics"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const button = document.getElementById('button');
button.addEventListener('click', function() {
  alert('Terimakasih Sudah Mengirim Pesan!  ');
});


