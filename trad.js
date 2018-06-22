function drawing() {
  var count = 0;
  lineWidth(1)
  line(0,-200,0,200)
    
  while (count < 20) {
    myMove();
    if (count % 2 == 0) {
      color("black");
    } else {
      color("gray");
    }
    circle(count * 10, 0, 4);
    count = count + 1;
  }
}

function frame(count) {
  var sg ="Stefan";
    if (true) {
        console.log(sg)
    } else {
        /* code to change the element style */ 
    }
  text(100,-20*count,sg);
}


function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

// Folgende Funktionen stehen zur Verfügung:
//
//  color(string)            - setzt die Farbe
//  lineWidth(number)        - setzt die Dicke der Linie
//  box(x, y, width, height) - zeichnet einen Kasten
//  circle(x, y, radius)     - zeichnet einen Kreis
//  line(x1, y1, x2, y2)     - zeichnet eine Linie
//  text(x, y, string)       - zeichnet einen Text
//  clear()                  - leert den Bildschirm
//  path(string)             - zeichnet eine komplexe Linie (Pfad)
//    Für einen Pfad kann man folgende Anweisungen geben:
//    g x y - zum Punkt x,y bewegen, ohne zu zeichnen
//    l x y - zeichet eine Linie vom aktuellen Punkt bis zum Punkt x,y
//    c     - zeichnet eine Linie, die zurückführt zum Anfang des Pfads
//    q x y cx cy - zeichnet eine Kurve zu x,y, wobei cx,cy als
//                  „Kontrollpunkt“ zur Definition der Rundung dient
//
//  fill()                   - fülle den Pfad mit der aktuellen Farbe
//
// Alle Koordinaten (Punkte) werden so interpretiert, dass 0,0 
// im Zentrum des Bildschirms liegt. x ist die horizontale Achse, y die vertikale.
// Positive x-Werte bewegen sich nach rechts, positive y-Werte bewegen sich nach
// oben.
// Folgende Operationen können dieses Koordinatensystem verändern:
//
//  moveTo(x, y)    - bewegt den Ursprung nach x,y
//  rotate(degrees) - rotiert (dreht) alle nachfolgenden Zeichenoperationen
//                    um die angegebene Gradzahl
//  scale(factor)   - skaliert die nachfolgenden Zeichenoperationen
//                    (größer/kleiner)
//  goBack()        - macht eine Transformation rückgängig
