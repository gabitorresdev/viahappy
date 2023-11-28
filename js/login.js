const formulario = document.getElementById('login');
const claveLocalStorge = 'usuarios';
const usuarios = JSON.parse(localStorage.getItem(claveLocalStorge) || '[]');


const usuario = localStorage.getItem('usuario');

if (usuario !== null) {
    window.location = './';
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const formulario = new FormData(e.target);
    const datosArray = Array.from(formulario.entries());
    const datos = Object.fromEntries(datosArray);

    if (usuarios?.length) {
        for (const usuario of usuarios) {
            if (usuario.email === datos.email && usuario.contrasena === datos.contrasena) {
                localStorage.setItem('usuario', JSON.stringify(usuario))
                window.location = './'
                return;
            }
        }
    }

    window.alert('Correo o contraseña erróneos.')
});