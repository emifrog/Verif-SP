function passWord() {
    var testV = 1;
    var pass1 = prompt('Veuillez entrer le mot de passe', ' ');
    while (testV < 3) {
        if (!pass1)
            history.go(-1);
        if (pass1.toLowerCase() == "pompier") {
            window.open('hancy.html', '_self');
            break;
        }
        testV += 1;
        var pass1 =
            prompt('Erreur', 'Mot de passe');
    }
    if (pass1.toLowerCase() != "sesame" & testV == 3)
        history.go(-1);
    return " ";
}
function passWordbv() {
    var testV = 1;
    var pass1 = prompt('Veuillez entrer le mot de passe', ' ');
    while (testV < 3) {
        if (!pass1)
            history.go(-1);
        if (pass1.toLowerCase() == "pompier") {
            window.open('bv.html', '_self');
            break;
        }
        testV += 1;
        var pass1 =
            prompt('Erreur', 'Mot de passe');
    }
    if (pass1.toLowerCase() != "sesame" & testV == 3)
        history.go(-1);
    return " ";
}