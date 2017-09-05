var questions = ["Combien de planètes compte notre système solaire ?", "Dans quelle constellation se trouve l'étoile Polaire ?", "Quelle est l'étoile la plus proche ?", "Quelle constellation suivante n'est visible que dans l'hémisphère Sud ?", "A quel objet assimile-t-on souvent la forme de la constellation de la Grande Ourse ?", "Combien de constellations existe-il officiellement à ce jour ?", "Quelle est la plus grosse planète du système solaire ?", "Dans de bonnes conditions, il est possible d'observer jusqu'à ...", "Comment appelle-t-on la phase ou la Lune est totalement éclairée parle Soleil, vue depuis la Terre ?", "Quelle est la seule galaxie, hormis la Voie Lactée, à être visible à l'oeil nu ?"]

var index = 0;

/* Permet d'effacer le bouton précédent */
if (index < 1) {
    document.getElementById('previous').style.display = 'none';
} else {
    document.getElementById('previous').style.display = 'inline';
}

/* Permet d'effacer le bouton suivant */
if (index > 8) {
    document.getElementById('next').style.display = 'none';
} else {
    document.getElementById('next').style.display = 'inline';
}

/* Permet de changer de question en cliquant sur les boutons */
document.getElementById('laquestion').innerHTML = questions[index];

document.getElementById('next').onclick = function() {
    index++;
    document.getElementById('laquestion').innerHTML = questions[index];
    if (index < 1) {
        document.getElementById('previous').style.display = 'none';
    } else {
        document.getElementById('previous').style.display = 'inline';
    }
    if (index > 8) {
        document.getElementById('next').style.display = 'none';
    } else {
        document.getElementById('next').style.display = 'inline';
    }
}

document.getElementById('laquestion').innerHTML = questions[index];

document.getElementById('previous').onclick = function() {
    index--;
    document.getElementById('laquestion').innerHTML = questions[index];
    if (index < 1) {
        document.getElementById('previous').style.display = 'none';
    } else {
        document.getElementById('previous').style.display = 'inline';
    }
    if (index > 8) {
        document.getElementById('next').style.display = 'none';
    } else {
        document.getElementById('next').style.display = 'inline';
    }
}