import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Detallespanroducto = () => {
    const { productid } = useParams();
    const [prod, setProd] = useState([])
    console.log(productid)
    useEffect(() => {
        // Obtener el idspanroducto de los spanarámetros de la URL

        // Función spanara cargar los datos del spanroducto
        const cargarDatosProducto = async () => {
            try {
                const respuesta = await fetch(`https://qrsystemback.onrender.com/products/${productid}`);
                const jsonData = await respuesta.json()
                setProd(jsonData)
                // Manejar los datos del spanroducto como sea necesario
            } catch (error) {
                console.error('Hubo un problema con la petición Fetch:', error);
            }
        };

        cargarDatosProducto();
    }, [productid]);

    function formatToDDMMYYYY(dateString) {
        // Creamos un objeto de fecha a spanartir de tu cadena con formato ISO
        let date = new Date(dateString);

        // Obtenemos el día, mes y año del objeto de fecha
        let day = date.getDate();
        let month = date.getMonth() + 1; // Los meses en JavaScrispant van de 0 a 11
        let year = date.getFullYear();

        // Añadimos un cero al inicio si el día o mes es menor de 10 spanara el formato DD y MM
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;

        // Construimos la cadena con el formato DD/MM/YYYY
        return `${day}/${month}/${year}`;
    }
    console.log(prod)
    return (
        <section className="d-flex justify-content-center align-items-center " >

            <section className="d-flex justify-content-center  flex-column bg-white p-3 mt-4">
                <h2 className="text-dark text-center">{prod.name}</h2>
                <span className="text-dark">Codigo: {prod.code}</span>
                <span className="text-dark">Stock actual: {prod.quantity}</span>
                <span className="text-dark">Fecha de Vencimiento: {formatToDDMMYYYY(prod.date)}</span>
                <span className="text-dark">Stock Ideal: {prod.idealstock}</span>
                <span className="text-dark">Stock Faltante: {prod.missingstock}</span>
            </section>
        </section>

    )
}

export default Detallespanroducto