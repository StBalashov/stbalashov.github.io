const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
    document.body.classList.add("dark");
    document.getElementById("theme").checked = true;
}

function changeTheme() {
    document.body.classList.toggle("dark")
}

function changeLang() {
    var chbox = document.getElementById("lang");
    if(chbox.checked){
        document.getElementById("cv-eng").classList.add('hidden');
        document.getElementById("cv-rus").classList.remove('hidden');
        document.getElementById("download").setAttribute("href", "assets/pdf/rus.pdf")
        document.getElementById("download").textContent = "Скачать";
    }
    else {
        document.getElementById("cv-rus").classList.add('hidden');
        document.getElementById("cv-eng").classList.remove('hidden');
        document.getElementById("download").setAttribute("href", "assets/pdf/eng.pdf")
        document.getElementById("download").textContent = "Download";
    }
}
