export const turnoToProd = (diaFinal, mesFinal, anioFinal, produccion) => {
    const buscarValor = (diasDelMes, produccion, db) => {
        const resto = (diasDelMes - produccion) % 108;
        const ajustadoResto = resto < 0 ? resto + 108 : resto;
        for (let i = 0; i < db.length; i++) {
            if (i === ajustadoResto) {
                return db[i];
            }
        }
        return undefined;
    };

    const datos = [1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 0, 0, 2, 2, 2, 2, 2, 0, 0, 1,
        1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 0, 0, 2, 2, 2, 2, 2, 0, 0, 1,
        1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 2, 2, 2, 2, 2, 0, 0, 1,
        1, 1, 1, 1, 1, 0, 3, 3, 3, 3, 3, 3, 0, 2, 2, 2, 2, 2, 2, 0, 1, 1,
        1, 1, 1, 1, 0, 3, 3, 3, 3, 3, 3, 0, 2, 2, 2, 2, 2, 2, 0, 0
    ];

    const diaInicial = 1;
    const mesInicial = 1;
    const anioInicial = 1900;
    
    switch (produccion) {
        case "1":
            produccion = 19;
            break;
        case "2":
            produccion = 46;
            break;
        case "3":
            produccion = 73;
            break;
        case "4":
            produccion = 100;
            break;
        default:
            produccion = 100;
            break;
    }

    const fechaInicial = new Date(anioInicial, mesInicial - 1, diaInicial);
    const fechaFinal = new Date(anioFinal, mesFinal - 1, diaFinal);
    fechaFinal.setDate(fechaFinal.getDate() + 1);
    let diferencia = fechaFinal - fechaInicial;
    let cantidadDias = Math.floor(diferencia / (1000 * 60 * 60 * 24)) + 2;

    return buscarValor(cantidadDias, produccion, datos);

}

export const caluloCalendar = (year, month, produccion) => {
    month = month - 1;

    const agregarFecha = (obj, fecha, propiedades) => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
            throw new Error("La fecha debe estar en formato YYYY-MM-DD");
        }
        obj[fecha] = { ...obj[fecha], ...propiedades };
    }

    let fechas = {};
    const date = new Date(year, month, 1);

    while (date.getMonth() === month) {
        const day = date.getDate();
        let params = {}
        switch (turnoToProd(day - 1, month + 1, year, produccion)) {
            case 1:
                params = { selected: true, marked: false, selectedTextColor: "red", selectedColor: 'white' };
                break;
            case 2:
                params = { selected: true, marked: false, selectedTextColor: "green", selectedColor: 'white' };
                break;
            case 3:
                params = { selected: true, marked: false, selectedTextColor: "blue", selectedColor: 'white' };
                break;
            default:
                params = { selected: true, marked: false, selectedTextColor: "black", selectedColor: 'white' };
                break;
        }

        const formattedDate = date.toISOString().split("T")[0];
        agregarFecha(fechas, formattedDate, params);
        date.setDate(day + 1);
    }

    return fechas;
}