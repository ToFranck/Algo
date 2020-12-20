
	  const name = document.getElementById('name')
    const password = document.getElementById('password')
    const form = document.getElementById('form')
    const errorElement = document.getElementById('error')
    const vpassword = document.getElementById('vpassword')
    const demande = document.getElementById('demande')


    form.addEventListener('submit', (e) => {
      let messages = []
      if (name.value === '' || name.value == null) {
        messages.push('Nom demander')
      }
      
      if (password.value.length <= 6) {
        messages.push('Le mot de passe doit est plus long que 6 caracteres ')
      }
      
      if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters')
      }
      if (demande.value === '' || demande.value == null) {
        messages.push('Remplir le champ de demande ')
      }
      
    
      if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
      }
    })

    function checkEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function validate() {
        var email = document.getElementById("email").value;
    
        if (checkEmail(email)) {
            alert('Adresse e-mail valide');
        } else {
            alert('Adresse e-mail non valide');
        }
        return false;
    }