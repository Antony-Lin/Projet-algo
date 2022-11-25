# Projet-algo

Tri_bulle_normal
DEBUT tri_bulle_normal(tab)
    declarer variable changed
    FAIRE 
        changed = faux
        var i = 0
        TANT QUE i < taille(tab) ALORS i + 1 
            SI tab [i] > [i+1] 
                declare c = tab[i]
                tab [i] = tab[i+1]
                tab [i+1] = c
                changed = vrai
            FIN SI
        FIN POUR    
    TANT QUE changed 
FIN
    

Tri_inserte :
DEBUT tri_insertion(tab)
var i = 1
    TANT QUE i < taille(tab) ALORS i + 1
        x = tab[i]
        j = i
        TANT QUE j > 0 et tab[j - 1] > x
            tab[j] = tab[j - 1]
            j = j - 1         
            tab[j] = x
        FIN TANT QUE   
    FIN TANT QUE
    retourne tab 
FIN


Tri_selection :
DEBUT tri_selection(tab)
    var i = 0
        TANT QUE i < taille(tab) ALORS i + 1
            var min = i
            var j = i + 1
            TANT QUE j < taille(tab) alors j + 1
                SI tab[j] < tab[min]
                    min = j
                FIN SI
            FIN TANT QUE
            var c = tab[i]
            tab[i] = tab[min]
            tab[min] = c
        FIN TANT QUE
    retourne tab
FIN


Tri_a_bulle_opti :
DEBUT tri_a_bulle_opti(tab)
var i = 0
    TANT QUE i < taille(tab) alors i + 1
        var tabool = vrai
        var j = 0
        TANT QUE j < taille(tab) - i - 1 alors j + 1
            SI tab[j + 1] < tab[j]
                var c = tab[j]
                tab[j] = tab[j + 1]
                tab[j + 1] = c
                tabool = faux
            FIN SI
        FIN TANT QUE
        SI tabool == vrai
            retourne tab
        FIN SI
    FIN TANT QUE
FIN
