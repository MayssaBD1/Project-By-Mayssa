document.addEventListener('DOMContentLoaded', function() {
    initialiser();
});

function appliquerTheme(nomTheme) {
    localStorage.setItem('theme', nomTheme);
    document.getElementById('maPage').className = nomTheme;
}

function appliquerThemeJour() {
    appliquerTheme('jour');
}

function appliquerThemeNuit() {
    appliquerTheme('nuit');
}

function ajouterEcouteursEvenements() {
    document.getElementById('b1').addEventListener('click', appliquerThemeJour);
    document.getElementById('b2').addEventListener('click', appliquerThemeNuit);
    
    document.getElementById('ajouterParagraphe').addEventListener('click', function() {
        var nouveauParagraphe = document.getElementById('nouveauParagraphe').value;
        if (nouveauParagraphe.trim() !== '') {
            localStorage.setItem('paragraphe', nouveauParagraphe);
            document.getElementById('paragraphe').textContent = nouveauParagraphe;
        }
    });
}

function initialiser() {
    var themeChoisi = localStorage.getItem('theme');

    if (themeChoisi === null) {
        appliquerThemeJour();
    } else {
        appliquerTheme(themeChoisi);
    }

    var paragrapheStocke = localStorage.getItem('paragraphe');

    if (paragrapheStocke !== null) {
        document.getElementById('paragraphe').textContent = paragrapheStocke;
    }

    ajouterEcouteursEvenements();
}
