const files = document.querySelectorAll('.file');
const tabTitle = document.getElementById('tabTitle');
const windowTitle = document.getElementById('windowTitle');
const views = document.querySelectorAll('.editor-view');

files.forEach(file => {
    file.addEventListener('click', () => {
        files.forEach(f => f.classList.remove('active'));
        file.classList.add('active');
        
        const targetView = file.getAttribute('data-target');
        const fileName = file.getAttribute('data-name');
        
        tabTitle.innerText = fileName;
        windowTitle.innerText = `${fileName} — Visual Studio Code`;
        
        views.forEach(view => {
            if (view.id === targetView) {
                view.classList.remove('hidden');
            } else {
                view.classList.add('hidden');
            }
        });
    });
});

function updateCountdown() {
    const now = new Date();
    let currentYear = now.getFullYear();
    let targetDate = new Date(currentYear, 9, 28, 0, 0, 0);
    
    if (now > targetDate) {
        targetDate = new Date(currentYear + 1, 9, 28, 0, 0, 0);
    }
    
    const diff = targetDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    
    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

const runBtn = document.getElementById('runBtn');
const outputMsg = document.getElementById('outputMessage');

if (runBtn && outputMsg) {
    runBtn.addEventListener('click', () => {
        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
        });
        
        outputMsg.classList.toggle('hidden');
    });
}