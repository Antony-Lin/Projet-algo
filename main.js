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
};

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
};

function tri_selection(tab){
    for(let i = 0; i < tab.length; i++){
        let min = i;
        for (let j = i + 1; j < tab.length; j++){
            if(tab[j] < tab[min]){
                min = j;
            }
        }
        let c = tab[i];
        tab[i] = tab[min];
        tab[min] = c;
    }
    return tab
};

function sort(tab){
    let changed;
    do{
        changed = false;
        for(let i=0; i < tab.length-1; i++) {
            if(tab[i] > tab[i+1]) {
                let c = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = c;
                changed = true;
            }
        }
    } while(changed);
    return tab
}

tableau = tab(5)
tab_tri_bulle = sort(tableau);
console.log(tab_tri_bulle);