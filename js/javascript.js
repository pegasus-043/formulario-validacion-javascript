let botonRegistro = document.getElementById('botonRegistro')
let usuarios = []
document.getElementById('nombre').focus()

botonRegistro.addEventListener('click', function (evento) {
    evento.preventDefault()

    if(nombre.value === ''){
        Swal.fire(
            'Error',
            'El campo NOMBRE es obligatorio',
            'error'
          )
    }else{
        Swal.fire(
            'Éxito!',
            'Completo correctamente los campos',
            'success',
            nombre.focus()
          )
    }

    usuarios.push({
    nombre: nombre.value,
    apellido: apellido.value,
    correo: correo.value
    })

    console.table(usuarios)

    // Limpiamos valores de los inputs
    nombre.value = ''
    apellido.value = ''
    correo.value = ''
    /// Impiamos valores del formulario
    nombre.innerHTML = ''
    apellido.innerHTML = ''
    correo.innerHTML = ''

    
    // console.log(nombre.value)
    // console.log(apellido.value)
    // console.log(correo.value)
})