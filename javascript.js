document.addEventListener("DOMContentLoaded", function () {
    const darkModeButton = document.getElementById("darkModeToggle");

    darkModeButton.addEventListener("click", function () {
        const body = document.body;
        const isDarkMode = body.classList.contains("dark-mode");

        if (isDarkMode) {
            // Mode clair
            body.style.backgroundColor = "";
            body.style.color = "";
            document.querySelector("header").style.backgroundColor = "";
            document.querySelector("footer").style.backgroundColor = "";
            document.querySelectorAll("nav a").forEach(link => link.style.color = "");
            document.getElementById("menuderoulant").style.backgroundColor = "";
            document.querySelectorAll(".tarifs, .infospratiques, .horaires").forEach(section => {
                section.style.backgroundColor = "";
                section.style.color = "";
            });
            // Réinitialiser le fond de la section "réserver"
            document.getElementById("reserver").style.backgroundColor = "";
            // Réinitialiser la couleur du texte de la section "réserver"
            document.getElementById("reserver").style.color = "";
            // Réinitialiser le fond de la section "fondexpos"
            document.querySelector(".fondexpos").style.backgroundColor = "";
            // Réinitialiser le fond du footerpratiques si nécessaire
            document.querySelector("#infospratiques").style.backgroundColor = "";
            body.classList.remove("dark-mode");
        } else {
            // Mode sombre
            body.style.backgroundColor = "#121212";
            body.style.color = "white";
            document.querySelector("header").style.backgroundColor = "#1e1e1e";
            document.querySelector("footer").style.backgroundColor = "#1e1e1e";
            document.querySelectorAll("nav a").forEach(link => link.style.color = "white");
            document.getElementById("menuderoulant").style.backgroundColor = "#2a2a2a";
            document.querySelectorAll(".tarifs, .infospratiques, .horaires").forEach(section => {
                section.style.backgroundColor = "#2a2a2a"; // Fond foncé pour les sections
                section.style.color = "white"; // Texte clair pour contraster
            });
            // Mettre un fond jaune très foncé pour la section "réserver"
            document.getElementById("reserver").style.backgroundColor = "#b38b00"; // Jaune très foncé
            // Mettre le texte de la section "réserver" en noir
            document.getElementById("reserver").style.color = "black";
            // Mettre un fond très très foncé pour la section "fondexpos"
            document.querySelector(".fondexpos").style.backgroundColor = "#0a0a0a"; // Très très foncé
            // Mettre un fond foncé pour le footerpratiques
            document.querySelector("#infospratiques").style.backgroundColor = "#1e1e1e";
            body.classList.add("dark-mode");
        }
    });
});

function affichermenu() {
    let menuderoulant = document.getElementById("menuderoulant");
    let fleche = document.getElementById("fleche");
    if (menuderoulant.style.opacity == "0") {
        menuderoulant.style.opacity = "1";
        menuderoulant.style.pointerEvents = "auto";
        fleche.style.transform = "scaleY(-1)";
    } else {
        menuderoulant.style.opacity = "0";
        menuderoulant.style.pointerEvents = "none";
        fleche.style.transform = "scaleY(1)";
    }
}

function cachermenu() {
    let menuderoulant = document.getElementById("menuderoulant");
    let fleche = document.getElementById("fleche");
    if (menuderoulant.style.opacity == "1") {
        menuderoulant.style.opacity = "0";
        menuderoulant.style.pointerEvents = "none";
        fleche.style.transform = "scaleY(1)";
    }
}