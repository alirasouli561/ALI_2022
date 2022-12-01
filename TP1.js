function calcul_moyenne()
{
    var note1=prompt("Donner une premiere note svp:");
    var note2=prompt("Donner une deuxieme note svp:");
    var note3=prompt("Donner une troisieme note svp:");
    var note4=prompt("Donner une quatrieme note svp:");


    var somme = Number(note1)*2 + Number(note2)*2 + Number(note3)*2+ Number(note4)*3 ;

    var moyenne = somme / 4;

    document.write("voici la somme: "+somme+ "   ");
    document.write(" voici la moyenne: "+moyenne);

    if (moyenne<10)
      document.write("  vous etes redoublant");
      else
      document.write("  vous etes admis");
}
function age_test()
{
    var note1=prompt("Donner voter age");
    
    if (note1<18)
    document.write("vous etes mineur");
    else
    document.write("vous etes majeur");
}
 
function simple_affichage()
{
    var nom=prompt("Quel est voter nom?:");
    var prenom=prompt("Quel est voter prenom?:");

    document.write("<div style='background-color:lightblue; border:2px solid blue; height:30px;'>");
    document.write("<p1 style='color:red';>Bonjour "+ prenom +" "+ nom+ "</p1>");
    document.write("</div>")

}

function test_color()
{
    var color = prompt("donner une couleur");

    if (color == "rouge" || color == 'ROUGE' || color =='R' )
    document.body.style.background="red";
        
    else if ( color == 'blue'|| color == 'BLUE' || color =='B')
    document.body.style.background="blue";

    else if ( color== 'vert' || color == 'VERT' || color=='V')

    document.body.style.background="green";

    else

     alert("couleur inconnue ! ......");

}

function somme()
{

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a)+ Number(b);

    t3.value = s;
}

function soustraction()

{

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a)- Number(b);

    t3.value = s;
}

function produit()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a)* Number(b);

    t3.value = s;
}

function division()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a) / Number(b);

    t3.value = s;
}

function parite()
{
    var a = document.getElementById("t1").value;
    
    if (Number(a)%2 == 0)
    
    alert("le nomber est pair");
    else
    alert("le nomber est impair");

}

function swap()
{
    var v3 = "";
    
    a = document.getElementById("t1").value;
    b = document.getElementById("t2").value;

    v3=a;
    a=b;
    b=v3;

    t1.value = a;
    t2.value = b;


}

function calcul_moyenne1()
{
    var note1 = document.getElementById("t1").value;
    var note2 = document.getElementById("t2").value;
    var note3 = document.getElementById("t3").value;
    var d = document.getElementById("c1").value;
    var e = document.getElementById("c2").value;
    var f = document.getElementById("c3").value;


    var somme = Number(note1)*Number(d) + Number(note2)*Number(e) + Number(note3)*Number(f);
    var coef = Number(d)+ Number(e)+ Number(f)


    var j = somme / coef;

    t6.value = j;

    if(j<10)
    t5.value = ("Redoublant");
    else if (j<15)
    t5.value = ("Admis");
    else
    t5.value = ("Admis bien");

    

}
