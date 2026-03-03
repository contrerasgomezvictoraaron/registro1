const formulario = document.getElementById('formulario');

formulario.addEventListener(
    'submit',function(event){
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const age = document.getElementById('age').value.trim();
        const size = document.getElementById('size').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        // Elementos de error
        const errorName = document.getElementById('error-name');
        const errorAge = document.getElementById('error-age');
        const errorEmail = document.getElementById('error-email');
        const errorPhone = document.getElementById('error-phone');

        const mensaje = document.getElementById('message');

        //Tecnica centinela
        let valid = true;
        if(name === ''){
            errorName.textContent = 'El nombre es obligatorio';
            valid = false;
        }else{
            errorName.textContent = "";
        } 
        if(age === ''){
            errorAge.textContent = 'La edad es obligatoria';
            valid = false;
        }
        else {
            errorAge.textContent = "";
        }
        if (email === ''){
            errorEmail.textContent = 'El correo electrónico es obligatorio';
                valid = false;
        }else{
            errorEmail.textContent = "";
        }
        if (phone === ''){
            errorPhone.textContent = 'El telefono es obligatorio';
            valid = false;
        }
        
});