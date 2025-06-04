/**
 * Maneja el envío del formulario
 * - Previene el envío normal
 * - Captura los datos
 * - Muestra los resultados
 */
document.getElementById('miFormulario').addEventListener('submit', function(evento) {
  // 1. Validar términos y condiciones primero
  const checkTerminos = document.getElementById('acepto');
  const terminosError = document.getElementById('terminos-error');
  
  if (!checkTerminos.checked) {
    // Detener el envío del formulario
    evento.preventDefault();
    
    // Mostrar mensaje de error
    terminosError.style.display = 'block';
    
    // Animación y scroll a los términos
    const terminosContainer = document.querySelector('.terminos');
    terminosContainer.classList.add('terminos-invalido');
    setTimeout(() => {
      terminosContainer.classList.remove('terminos-invalido');
    }, 500);
    
    terminosContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    checkTerminos.focus();
    
    // Salir de la función sin procesar el formulario
    return;
  }
  
  // 2. Si los términos están aceptados, continuar con el procesamiento normal
  // Prevenir el envío normal del formulario
  evento.preventDefault();
  
  // Capturar todos los datos del formulario
  const formulario = evento.target;
  const datosFormulario = new FormData(formulario);
  
  // Mostrar datos en consola para depuración
  console.log('Datos del formulario:');
  for (let [campo, valor] of datosFormulario.entries()) {
    console.log(`${campo}: ${valor}`);
  }
  
  // Convertir los datos a un formato legible en HTML
  mostrarResultados(datosFormulario);
});

/**
 * Muestra los resultados del formulario en la página
 * @param {FormData} datos - Los datos del formulario
 */
function mostrarResultados(datos) {
  let datosHTML = '';
  
  // Recorrer cada campo y crear HTML para mostrar
  for (let [campo, valor] of datos.entries()) {
    // Saltar campos vacíos
    if (!valor || valor.toString().trim() === '') continue;
    
    // Formatear nombres de campos para mostrarlos mejor
    const nombreCampo = formatearNombreCampo(campo);
    
    // Formatear valores especiales
    const valorFormateado = formatearValor(campo, valor);
    
    // Agregar al HTML
    datosHTML += `
      <div class="dato">
        <span class="etiqueta">${nombreCampo}:</span> ${valorFormateado}
      </div>
    `;
  }
  
  // Mostrar los resultados
  document.getElementById('datosEnviados').innerHTML = datosHTML;
  document.getElementById('resultado').style.display = 'block';
  
  // Scroll suave hacia los resultados
  document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });
  
  // Mostrar alerta de confirmación
  alert('¡Formulario enviado correctamente! 🎉\nRevisa los datos más abajo.');
}

/**
 * Formatea los nombres de los campos para mostrarlos mejor
 * @param {string} campo - Nombre original del campo
 * @returns {string} Nombre formateado
 */
function formatearNombreCampo(campo) {
  const nombres = {
    'nombre': 'Nombre completo',
    'email': 'Correo electrónico',
    'telefono': 'Teléfono',
    'password': 'Contraseña',
    'fecha_nacimiento': 'Fecha de nacimiento',
    'hora_entrada': 'Hora de entrada',
    'fecha_hora_local': 'Fecha y hora de reunión',
    'mes_preferido': 'Mes favorito',
    'semana_reserva': 'Semana de reserva',
    'notificaciones': 'Recibir notificaciones',
    'genero': 'Género',
    'pais': 'País',
    'color_favorito': 'Color favorito',
    'satisfaccion': 'Nivel de satisfacción',
    'foto_perfil': 'Foto de perfil',
    'busqueda': 'Búsqueda',
    'sitio_web': 'Sitio web',
    'id_sesion': 'ID de sesión',
    'acepto': 'Términos aceptados' // Añadido para los términos
  };
  
  return nombres[campo] || campo.replace(/_/g, ' ');
}

/**
 * Formatea valores especiales para mostrarlos mejor
 * @param {string} campo - Nombre del campo
 * @param {string} valor - Valor original
 * @returns {string} Valor formateado
 */
function formatearValor(campo, valor) {
  // Para checkbox
  if (campo === 'notificaciones' || campo === 'acepto') {
    return valor === 'on' ? 'Sí' : 'No';
  }
  
  // Para fechas
  if (['fecha_nacimiento', 'mes_preferido', 'semana_reserva'].includes(campo)) {
    return new Date(valor).toLocaleDateString();
  }
  
  // Para fecha y hora
  if (campo === 'fecha_hora_local') {
    return new Date(valor).toLocaleString();
  }
  
  return valor;
}

/**
 * Inicialización cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', function() {
  // Configurar el evento para el input range
  const rangoSatisfaccion = document.getElementById('satisfaccion');
  const valorRango = document.getElementById('valor_rango');
  
  if (rangoSatisfaccion && valorRango) {
    // Actualizar el valor inicial
    valorRango.textContent = rangoSatisfaccion.value;
    
    // Configurar el evento de cambio
    rangoSatisfaccion.addEventListener('input', function() {
      valorRango.textContent = this.value;
      
      // Cambiar color según el valor (opcional)
      const valor = parseInt(this.value);
      if (valor <= 3) {
        valorRango.style.color = '#e74c3c'; // Rojo
      } else if (valor <= 6) {
        valorRango.style.color = '#f39c12'; // Naranja
      } else {
        valorRango.style.color = '#2ecc71'; // Verde
      }
    });
  }
  
  // Configurar eventos para términos y condiciones
  const checkTerminos = document.getElementById('acepto');
  const terminosError = document.getElementById('terminos-error');
  
  if (checkTerminos && terminosError) {
    // Ocultar mensaje de error cuando se marque
    checkTerminos.addEventListener('change', function() {
      if (this.checked) {
        terminosError.style.display = 'none';
      }
    });
    
    // Opcional: Mostrar términos en modal
    const verTerminos = document.getElementById('ver-terminos');
    if (verTerminos) {
      verTerminos.addEventListener('click', function(e) {
        e.preventDefault();
        alert("Aquí aparecerían los términos y condiciones completos.");
      });
    }
  }
  
  console.log('Formulario cargado y listo');
});