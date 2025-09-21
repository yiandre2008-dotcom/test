// Set tahun otomatis
document.getElementById('year').textContent = new Date().getFullYear();

// Sapaan ketika tombol diklik
document.getElementById('greetBtn').addEventListener('click', function(){
  alert('Halo! Selamat datang di SimpleSite 👋');
});

// "Kirim" form — hanya demo: tunjukkan data yang diisi
document.getElementById('sendBtn').addEventListener('click', function(){
  const name = document.getElementById('name').value.trim();
  const msg = document.getElementById('message').value.trim();
  if(!name || !msg){
    alert('Lengkapi nama dan pesan terlebih dahulu.');
    return;
  }
  alert('Terima kasih, ' + name + '! Pesanmu:\n' + msg);
  document.getElementById('contactForm').reset();
});
