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
fin fonction