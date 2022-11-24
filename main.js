function getRandom(){
    return Math.floor(Math.random() * 100 + 1);
}

function tab(size){
    let tableau = [];
    for(let i = 0; i < size; i++){
        tableau.push(getRandom(5));
    }
    tableau.length = size;
    return tableau
}

function tri_insertion(tab){
    for(let i = 1; i < tab.length; i++){
        let x = tab[i];
        let j = i;
        while(j > 0 && tab[j-1] > x){
            tab[j] = tab[j-1];
            j = [j-1];

        }
        tab[j] = x;
    }
    return tab
}

function tri_bulle_opti(tab){
    for(let i = 0; i < tab.length; i++){
        let tablebool = true;
        for(let j = 0; j < tab.length - i - 1; j++){
            if(tab[j + 1] < tab[j]){
                let c = tab[j]
                tab[j] = tab[j + 1]
                tab[j + 1] = c;
                tablebool = false;
            }
        }
        if(tablebool == true){
            return tab
        }
    }
}

console.log(tri_bulle_opti(tab(30)))


