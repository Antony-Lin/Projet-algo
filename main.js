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

console.log(tri_insertion([4555,5,8,1,50,20]))