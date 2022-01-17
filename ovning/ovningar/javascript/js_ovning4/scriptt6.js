let slumpat_tal = Math.floor(Math.random()*(100-1+1)+1);
console.log("Fusk talet är:" + slumpat_tal)


let gissning;

whille (true)
{
    gissning = Number(prompt("Gissa på ett tal mellan 1-100"))

    if (gissning > slumpat_tal)
        alert("du har gissat för högt")
    else if (gissning < slumpat_tal)
        alert("Du har gissat för lågt")
    else
        break

}

alert("Rätt!")