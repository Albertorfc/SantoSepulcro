function getViernesSanto(year) {
    // Algoritmo de Butcher para el Domingo de Resurrección
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;

    // El Domingo de Resurrección es 'day' del 'month'
    let resurreccion = new Date(year, month - 1, day, 21, 0, 0);
    
    // El Viernes Santo es 2 días antes
    let viernesSanto = new Date(resurreccion);
    viernesSanto.setDate(resurreccion.getDate() - 2);
    
    return viernesSanto;
}

function updateCountdown() {
    const now = new Date();
    let currentYear = now.getFullYear();
    let targetDate = getViernesSanto(currentYear);

    // Si ya pasó el Viernes Santo de este año (a las 21h), buscamos el del año que viene
    if (now > targetDate) {
        targetDate = getViernesSanto(currentYear + 1);
    }

    const diff = targetDate - now;

    // Cálculos de tiempo
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    // Inyectar en el HTML
    document.getElementById('months').innerText = months.toString().padStart(2, '0');
    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');

    // Mostrar la fecha de destino para información
    const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('target-date-text').innerText = `Próximo Viernes Santo: ${targetDate.toLocaleDateString('es-ES', opciones)}`;
}

// Actualizar cada minuto
setInterval(updateCountdown, 60000);
updateCountdown();
