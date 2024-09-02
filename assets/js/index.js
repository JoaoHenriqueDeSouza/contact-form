const form = document.querySelector('form')
const sucess = document.querySelector('.sucess-container')

const firstName = document.querySelector('#first-name') 
const lastName = document.querySelector('#last-name') 
const email = document.querySelector('#email') 
const message = document.querySelector('#message') 
const alert = document.querySelector('.alert')

form.addEventListener('submit',(e)=>{
    const queryType = document.querySelector('.query-type-container input:checked') 
    const consent = document.querySelector('.consent-container input:checked') 

    e.preventDefault()
    isValid = true
    if(firstName.value === ''){
        isValid = false

        document.querySelector('.first-name-container>.alert').style.display = 'block'
        firstName.style.border = '1px var(--red) solid'        
    }else{
        document.querySelector('.first-name-container>.alert').style.display = 'none'
        firstName.style.border = '1.5px var(--green-600) solid'  

    };

    if(lastName.value === ''){
        isValid = false
        document.querySelector('.last-name-container>.alert').style.display = 'block'
        lastName.style.border = '1px var(--red) solid'        
    }else{
        document.querySelector('.last-name-container>.alert').style.display = 'none'
        lastName.style.border = '1.5px var(--green-600) solid'  

    };

    if(email.value === ''){
        isValid = false
        document.querySelector('.email-container>.alert').style.display = 'block'
        email.style.border = '1px var(--red) solid'        
    }else{
        document.querySelector('.email-container>.alert').style.display = 'none'
        email.style.border = '1.5px var(--green-600) solid'    
    };

    if(!queryType){
        isValid = false
        document.querySelector('.query > .alert').style.display = 'block'
              
    }else{
        document.querySelector('.query > .alert').style.display = 'none'
    };

    if(message.value === ''){
        isValid = false
        document.querySelector('.message-container>.alert').style.display = 'block'
        message.style.border = '1px var(--red) solid'        
    }else{
        document.querySelector('.message-container>.alert').style.display = 'none'
        message.style.border = '1.5px var(--green-600) solid'    
    };

    if(!consent){
        isValid = false
        document.querySelector('.consent-container>.alert').style.display = 'block'
              
    }else{
        document.querySelector('.consent-container>.alert').style.display = 'none'
    };


    if(isValid){
        sucess.classList.add('active') 
        form.reset()       
    }

})



