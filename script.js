let timer; // mettre une variable timer globale pour mettre 1 timer à la fois

function startTimer(){
    clearInterval(timer); // supprimer l'ancien timer si il en existe un
    let time = document.getElementById('number').value; // récupérer les secondes pour mettre un timer
    timer = setInterval(() => {
        if(time <= 0){
            clearInterval(timer); // si les secondes sont à 0, arrêter les timer
        }
        const minutes = parseInt(time / 60); // calculer les minutes
        const seconds = time % 60; // calculer les secondes
        const format = (digit) => digit.toLocaleString('fr-FR', {
                minimumIntegerDigits: 2,
                useGrouping: false
            }); // mettre le nombre sur le format 00
        const content = `${format(minutes)}:${format(seconds)}` // définir le contenu du timer à mm:ss
        document.getElementById('timer').textContent = content; // remplacer le contenu
        time--; // décrémenter le nombre de seconde
    }, 1000); // 1000 ms = 1s donc cette fonction s'exécute chaque seconde
}


