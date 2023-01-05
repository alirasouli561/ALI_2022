function affichagetab1(){
    document.write('<table border=2px width=30%');
    for(let i = 0; i <= 5; i++){
        document.write('<tr> <td>1</td> <td>2</td> <td>3</td> </tr>');
    }
    document.write('</table>');
}

function affichagetab2(){
    document.write('<table border=2px width=30%');
    var ligne=prompt("Combien de lignes dans le tableau?")
    for(let i = 1; i <= ligne; i++){
        document.write("<tr> <td>"+i+"</td> <td>2</td> <td>3</td> </tr>");
    }
    document.write('</table>');
}

function seconnecter1(){
    var log=prompt("Quel est votre identifiant?");
    var pwd=prompt("Entrez le mot de passe");

    if (log=='admin' & pwd=='admin')
        document.write("Bonjour, vous etes en acces administrateur")
    else
        alert("Mauvais mot de passe !")
}

function seconnecter2(){
    var i=0;
    do{
        var log=prompt("Quel est votre identifiant?");
        var pwd=prompt("Entrez le mot de passe");
        if (log=='admin' & pwd=='admin'){
        document.write("Bonjour, vous etes en acces administrateur, " + log);
        break;
        }
        else
            alert("Mauvais mot de passe !");
            i+=1;
    }
    while (i<3);
    if(i==3)
        alert(" delai depasse!")
}

function cdc(){
    var chaine=prompt("Donner un mot");
    document.write(chaine.toUpperCase()+"<br><br>");
    document.write(chaine.toLowerCase()+"<br><br>");
    document.write(" La chaine contient " + chaine.length+ " caracteres " + "<br><br>");
    document.write(" La premiere lettre de la chaine est "+ chaine.substring(0,1));
}

function switch1(){
    var color=prompt("Entrez une couleur");
    switch(color)
    {
        case "rouge": document.body.style.background="red";
        break;
        case "ROUGE": document.body.style.background="red";
        break;
        case "Rouge": document.body.style.background="red";
        break;
        case "VERT": document.body.style.background="green";
        break;
        case "Vert": document.body.style.background="green";
        break;
        case "bleu": document.body.style.background="blue";
        break;
        case "BLEU": document.body.style.background="blue";
        break;
        case "Bleu": document.body.style.background="blue";
        break;
        case "violet": document.body.style.background="violet";
        break;
        case "VIOLET": document.body.style.background="violet";
        break;
        case "Violet": document.body.style.background="violet";
        break;
        default:alert("ERROR");
    }
}

function bonus(){
    var totalf = 0
    var total = ""
    var c = ""
    do{
        var article = prompt("Article")
        var price = prompt("Prix")
        var quantity = prompt("Quantité")

        alert(`Vos ${article} couterons ${price * quantity} €`)
        total = Number(price)*Number(quantity) 
        totalf += total 
        c += ("Article : " +article+" <br> Prix : "+price +"€"+ " <br> Quantité : "+quantity+ " <br> Total : "+total+"€"+"<br><br><br>")
        alert('Vos articles additionnes couterons ' + totalf + "€")

        next = prompt("Voulez vous continuer (OUI/NON) ?")
    }
    while(next != "NON");
    document.write(c);
    document.write(" Total final: "+totalf+"€");
}


