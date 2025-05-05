function calcularViaje() {
    const destino = document.getElementById("destino").value;
    const dias = parseInt(document.getElementById("dias").value);

    if (!destino || isNaN(dias) || dias < 1) {
        document.getElementById("resultado").textContent = "Ingrese un destino y dias validos.";
        return;
    }

    const datos = {
        barcelona: { moneda: "euros", cambio: 1350 },
        cuzco:     { moneda: "soles", cambio: 320 },
        rio:       { moneda: "reales", cambio: 205 },
        miami:     { moneda: "dolares", cambio: 1200 },
        tokyo:     { moneda: "yenes (Ojala estuviera tan barato profe)", cambio: 8 },
        moscu:     { moneda: "rublos", cambio: 15 },
        seoul:     { moneda: "wones (Ojala estuviera tan barato profe)", cambio: 0.9 },
        oslo:    { moneda: "coronas", cambio: 120 }
    };

    const lugar = datos[destino];
    const costoPorDia = 100;
    const totalMoneda = costoPorDia * dias;
    const totalPesos = totalMoneda * lugar.cambio;

    document.getElementById("resultado").innerHTML = 
        `Necesitas 100 ${lugar.moneda} por dia para estar tranquilo.
        <br>
        Entonces junta ${totalPesos.toLocaleString("es-AR")} pesos argentinos.`;
}
