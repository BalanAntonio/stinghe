function analyzeFeedback(){
    let vocali = 0;
    let consonanti = 0;
    let lunghezza = 0;
    let classificazione = "";
    let feed = document.getElementById("feedback").value;
    let ris = document.getElementById("res");

    let aeiou = [];

    /*
        a = 65
        e = 69
        i = 73
        o = 79
        u = 85
    */

    if(feed){
        feed = feed.toUpperCase();

        for(let i = 0; i < feed.length; i++){
            if(feed.charCodeAt(i) >= 65 && feed.charCodeAt(i) <= 90){
                lunghezza += 1;
                aeiou[feed.charCodeAt(i)] += 1;
            }        //vocali += (feed[i]==='a' || feed[i]==='e' || feed[i]==='i' || feed[i]==='o' || feed[i]==='u') ? 1 : 0;
        }
        
        if(lunghezza<10) { classificazione = "Scarsa"; }
        else if(lunghezza<50) { classificazione = "Moderato"; }
        else { classificazione = "Dettagliato"; }
        

        vocali = aeiou[65] + aeiou[69] + aeiou[73] + aeiou[79] + aeiou[85];
        consonanti = lunghezza - vocali;
        
        ris.innerHTML = `Vocali: ${vocali}<br>`;
        ris.innerHTML += `Consonanti: ${consonanti}<br>`;
        ris.innerHTML += `Lunghezza: ${lunghezza}<br>`;
        ris.innerHTML += `Vocale più usata: ${Math.max(aeiou[65], aeiou[69], aeiou[73], aeiou[79], aeiou[85])}<br>`;
        
    }
}