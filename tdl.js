function tambahTugas() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    // Validasi agar tidak bisa input kosong
    if (taskText === "") {
        alert("Isi tugasnya dulu ya!");
        return;
    }

    const ul = document.getElementById('taskList');
    const li = document.createElement('li');

    // Mengatur isi dari item daftar
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="hapusTugas(this)">Hapus</button>
    `;

    ul.appendChild(li);
    input.value = ""; // Kosongkan input setelah tambah
}

function hapusTugas(elemen) {
    // Menghapus elemen li induk dari tombol yang diklik
    elemen.parentElement.remove();
}
