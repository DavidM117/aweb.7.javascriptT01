
        function genera_tabla(){

            var f11 = document.getElementById("f1").value;
            var c11 = document.getElementById("c1").value;

            var body = document.getElementsByTagName("body")[0];

            var tabla   = document.createElement("table");
            var tblBody = document.createElement("tbody");

            for (var i = 0; i < f11; i++) {
                var hilera = document.createElement("tr");

                for (var j = 0; j < c11; j++) {
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(i+" - "+j);
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
                }

                tblBody.appendChild(hilera);
            }

            tabla.appendChild(tblBody);
            body.appendChild(tabla);
            tabla.setAttribute("border", "2");

        }
