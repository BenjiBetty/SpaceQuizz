/* Tableau des questions */
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

/* Affichage de la première question et ses réponses à l'ouverture de la page */
document.getElementById('laquestion').innerHTML = questions[index];
document.getElementById('reponse1').innerHTML = "7";
document.getElementById('reponse2').innerHTML = "8";
document.getElementById('reponse3').innerHTML = "9";
document.getElementById('reponse4').innerHTML = "10";

/* Permet de changer de question en cliquant sur le bouton SUIVANT */
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
    /* Réponses aux questions */
    if (index == 0) {
        document.getElementById('reponse1').innerHTML = "7";
        document.getElementById('reponse2').innerHTML = "8";
        document.getElementById('reponse3').innerHTML = "9";
        document.getElementById('reponse4').innerHTML = "10";
    }
    if (index == 1) {
        document.getElementById('reponse1').innerHTML = "La grande ourse";
        document.getElementById('reponse2').innerHTML = "La petite ourse";
        document.getElementById('reponse3').innerHTML = "la lyre";
        document.getElementById('reponse4').innerHTML = "la harpe";
    }
    if (index == 2) {
        document.getElementById('reponse1').innerHTML = "Alpha du centaure";
        document.getElementById('reponse2').innerHTML = "Le soleil";
        document.getElementById('reponse3').innerHTML = "Proxima Centauri";
        document.getElementById('reponse4').innerHTML = "Star academy";
    }
    if (index == 3) {
        document.getElementById('reponse1').innerHTML = "Le grand chien";
        document.getElementById('reponse2').innerHTML = "La croix du sud";
        document.getElementById('reponse3').innerHTML = "Pégase";
        document.getElementById('reponse4').innerHTML = "Le serpent";
    }
    if (index == 4) {
        document.getElementById('reponse1').innerHTML = "Un casque";
        document.getElementById('reponse2').innerHTML = "Une voiture";
        document.getElementById('reponse3').innerHTML = "Une casserole";
        document.getElementById('reponse4').innerHTML = "Un ours";
    }
    if (index == 5) {
        document.getElementById('reponse1').innerHTML = "28";
        document.getElementById('reponse2').innerHTML = "67";
        document.getElementById('reponse3').innerHTML = "88";
        document.getElementById('reponse4').innerHTML = "104";
    }
    if (index == 6) {
        document.getElementById('reponse1').innerHTML = "Jupiter";
        document.getElementById('reponse2').innerHTML = "Saturne";
        document.getElementById('reponse3').innerHTML = "Terre";
        document.getElementById('reponse4').innerHTML = "Venus";
    }
    if (index == 7) {
        document.getElementById('reponse1').innerHTML = "100 étoiles";
        document.getElementById('reponse2').innerHTML = "800 étoiles";
        document.getElementById('reponse3').innerHTML = "1500 étoiles";
        document.getElementById('reponse4').innerHTML = "3000 étoiles";
    }
    if (index == 8) {
        document.getElementById('reponse1').innerHTML = "La nouvelle lune";
        document.getElementById('reponse2').innerHTML = "La pleine lune";
        document.getElementById('reponse3').innerHTML = "La lune rousse";
        document.getElementById('reponse4').innerHTML = "La claire lune";
    }
    if (index == 9) {
        document.getElementById('reponse1').innerHTML = "La galaxie d'Andromède";
        document.getElementById('reponse2').innerHTML = "La galaxie du tourbilon";
        document.getElementById('reponse3').innerHTML = "La galaxie du triangle";
        document.getElementById('reponse4').innerHTML = "La galaxie du cerf";
    }
}

/* Permet de changer de question en cliquant sur le bouton PRECEDENT */
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
    /* Réponses aux questions */
    if (index == 0) {
        document.getElementById('reponse1').innerHTML = "7";
        document.getElementById('reponse2').innerHTML = "8";
        document.getElementById('reponse3').innerHTML = "9";
        document.getElementById('reponse4').innerHTML = "10";
    }
    if (index == 1) {
        document.getElementById('reponse1').innerHTML = "La grande ourse";
        document.getElementById('reponse2').innerHTML = "La petite ourse";
        document.getElementById('reponse3').innerHTML = "la lyre";
        document.getElementById('reponse4').innerHTML = "la harpe";
    }
    if (index == 2) {
        document.getElementById('reponse1').innerHTML = "Alpha du centaure";
        document.getElementById('reponse2').innerHTML = "Le soleil";
        document.getElementById('reponse3').innerHTML = "Proxima Centauri";
        document.getElementById('reponse4').innerHTML = "Star academy";
    }
    if (index == 3) {
        document.getElementById('reponse1').innerHTML = "Le grand chien";
        document.getElementById('reponse2').innerHTML = "La croix du sud";
        document.getElementById('reponse3').innerHTML = "Pégase";
        document.getElementById('reponse4').innerHTML = "Le serpent";
    }
    if (index == 4) {
        document.getElementById('reponse1').innerHTML = "Un casque";
        document.getElementById('reponse2').innerHTML = "Une voiture";
        document.getElementById('reponse3').innerHTML = "Une casserole";
        document.getElementById('reponse4').innerHTML = "Un ours";
    }
    if (index == 5) {
        document.getElementById('reponse1').innerHTML = "28";
        document.getElementById('reponse2').innerHTML = "67";
        document.getElementById('reponse3').innerHTML = "88";
        document.getElementById('reponse4').innerHTML = "104";
    }
    if (index == 6) {
        document.getElementById('reponse1').innerHTML = "Jupiter";
        document.getElementById('reponse2').innerHTML = "Saturne";
        document.getElementById('reponse3').innerHTML = "Terre";
        document.getElementById('reponse4').innerHTML = "Venus";
    }
    if (index == 7) {
        document.getElementById('reponse1').innerHTML = "100 étoiles";
        document.getElementById('reponse2').innerHTML = "800 étoiles";
        document.getElementById('reponse3').innerHTML = "1500 étoiles";
        document.getElementById('reponse4').innerHTML = "3000 étoiles";
    }
    if (index == 8) {
        document.getElementById('reponse1').innerHTML = "La nouvelle lune";
        document.getElementById('reponse2').innerHTML = "La pleine lune";
        document.getElementById('reponse3').innerHTML = "La lune rousse";
        document.getElementById('reponse4').innerHTML = "La claire lune";
    }
    if (index == 9) {
        document.getElementById('reponse1').innerHTML = "La galaxie d'Andromède";
        document.getElementById('reponse2').innerHTML = "La galaxie du tourbilon";
        document.getElementById('reponse3').innerHTML = "La galaxie du triangle";
        document.getElementById('reponse4').innerHTML = "La galaxie du cerf";
    }
}