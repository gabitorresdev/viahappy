const formulario = document.getElementById('registro');
const claveLocalStorge = 'usuarios';
const usuarios = JSON.parse(localStorage.getItem(claveLocalStorge) || '[]');


const usuario = localStorage.getItem('usuario');

if (usuario !== null) {
    window.location = '/index.html';
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const formulario = new FormData(e.target);
    const datosArray = Array.from(formulario.entries());
    const datos = Object.fromEntries(datosArray);

    if (usuarios?.length) {
        for (const usuario of usuarios) {
            if (usuario.email === datos.email) {
                window.alert('Este email ya está registrado.')
                return;
            }
        }
    }

    usuarios.push(datos);
    localStorage.setItem(claveLocalStorge, JSON.stringify(usuarios));
    window.alert('Usuario registrado.')
    window.location = '/login.html';
})