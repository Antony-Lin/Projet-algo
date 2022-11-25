function getRandom(){
    return Math.floor(Math.random() * 999 + 1);
};


function tab(size){
    let tableau = [];
    for(let i = 0; i < size; i++){
        tableau.push(getRandom());
    }
    tableau.length = size;
    return tableau
};


function tri_insertion(tab){
    let compteur_insertion = 0;
    for(let i = 1; i < tab.length; i++){
        let x = tab[i];
        let j = i;
        compteur_insertion += 1
        while(j > 0 && tab[j-1] > x){
            tab[j] = tab[j-1];
            j = [j-1];
            compteur_insertion += 3;
        }
        tab[j] = x;
    }
    console.log(compteur_insertion)
    return tab
};


function tri_bulle_opti(tab){
    compteur_bulle_opti = 0;
    for(let i = 0; i < tab.length; i++){
        let tablebool = true;
        for(let j = 0; j < tab.length - i - 1; j++){
            compteur_bulle_opti += 1
            if(tab[j + 1] < tab[j]){
                let c = tab[j]
                tab[j] = tab[j + 1]
                tab[j + 1] = c;
                tablebool = false;
                compteur_bulle_opti += 3
            }
        }
        if(tablebool == true){
            return compteur_bulle_opti
        }
    }
};


function tri_selection(tab){
    let compteur_selection = 0;
    for(let i = 0; i < tab.length; i++){
        let min = i;
        for (let j = i + 1; j < tab.length; j++){
            compteur_selection += 1
            if(tab[j] < tab[min]){
                min = j;
            }
        }
        let c = tab[i];
        tab[i] = tab[min];
        tab[min] = c;
        compteur_selection += 3
    }
    console.log(compteur_selection)
    return tab
};


function tri_bulle_normal(tab){
    compteur_bulle_normal = 0;
    let changed;
    do{
        changed = false;
        for(let i=0; i < tab.length-1; i++) {
            compteur_bulle_normal += 1
            if(tab[i] > tab[i+1]) {
                let c = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = c;
                changed = true;
                compteur_bulle_normal += 3
            }
        }
    } while(changed);
    return tab
}


function stat(min, max, step, nbr){
    let a = min;
    let list = []
    while(a <= max){
        let inter = [];
        for(let i = 0; i < nbr; i++){
            inter.push(tab(a))
        }
        a += step
        list.push(inter) 
    }
    console.log(list);
    for(let listinter in list){
        let result = 0;
        let len = 0;
        for(let table in list[listinter]){
            let list1 = list[listinter][table]
            result += tri_bulle_opti(list1)
            len = list1.length
        }
        let moyen = len + " " + (result / nbr);
        console.log(moyen);
    }
}

stat(10, 20, 5, 3)
