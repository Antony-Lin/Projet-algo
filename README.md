# Projet-algo

tri_inserte :
fonction tri_insertion(tab)
var i = 1
       tant que i < taille(tab) alors i + 1
            x = tab[i]
            j = i
            tant que j > 0 et tab[j - 1] > x
                     tab[j] = tab[j - 1]
                     j = j - 1         
            tab[j] = x
            fin tant que   
        fin tant que
    retourne tab 
fin fonction


tri_selection :
fonction tri_selection(tab)
    var i = 0
        tant que i < taille(tab) alors i + 1
            var min = i
            var j = i + 1
            tant que j < taille(tab) alors j + 1
                si tab[j] < tab[min]
                    min = j
                fin si
            fin tant que
        var c = tab[i]
        tab[i] = tab[min]
        tab[min] = c
        fin tant que
    retourne tab
fin fonction


Algo tri_a_bulle_opti :
fonction tri_a_bulle_opti(tab)
var i = 0
    tant que i < taille(tab) alors i + 1
        var tabool = vrai
        var j = 0
        tant que j < taille(tab) - i - 1 alors j + 1
            si tab[j + 1] < tab[j]
                var c = tab[j]
                tab[j] = tab[j + 1]
                tab[j + 1] = c
                tabool = faux
            fin si
        fin tant que
    si tabool == vrai
        retourne tab
    fin si
    fin tant que
fin fonction
