alder = Number(prompt("Hur gammal är du? "))
kanLasa = Boolean(confirm("Kann du läsa? "))

if (alder > 6 && alder < 18) {
    if (!kanLasa)
    {
        alert("Gå i skolan")
    }
    else {
        alert("Du kan gå vidare till högre studier")
    }
    
}
else if (alder > 18 && !kanLasa) {
    alert("Läs en kurs")
}
else if (alder < 6) {
    alert("Gå på dagis")
}