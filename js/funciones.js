export function mostrarAlerta(mensaje){
    const alerta = document.querySelector('.bg.red-100');
    if(!alerta){
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100');
        alerta.innerHTML = `
        <strong class="font-bold"> Error! </strong>
        <span class="block sm:inline"> ${mensaje} </span>
        `;

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        setTimeout(()=>{
            alerta.remove();
        },1000 * 2.7)
    }

}
export function validar(obj){
    return !Object.values(obj).every(input => input !== '');
}
