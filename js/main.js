const usuario = JSON.parse(localStorage.getItem('usuario'));

if (usuario) {
    const noUsuarioMenu = document.querySelector('.no-usuario');
    const conUsuarioMenu = document.querySelector('.con-usuario');
    noUsuarioMenu.classList.add('ocultar');
    conUsuarioMenu.classList.remove('ocultar')

    document.querySelector('#usuario-nombre').innerText = usuario.nombre;

    document.querySelector('#cerrar-sesion').addEventListener('click', () => {
        localStorage.removeItem('usuario');
        window.location = './';
    })
}