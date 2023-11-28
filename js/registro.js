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
            console.log(usuario.email, datos.email);
            if (usuario.email === datos.email) {
                return;
            }
        }
    }

    usuarios.push(datos);
    localStorage.setItem(claveLocalStorge, JSON.stringify(usuarios));
    console.log('Usuario registrado');
    window.location('/login');
})