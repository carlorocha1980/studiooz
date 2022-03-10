// Função que trata a submissão do formulário de autenticação
authForm.onsubmit = function(event) {
    showItem(loading) /*esta função será apresentada sempre que for necessário apresentar o icon Loading*/
    event.preventDefault()
    if (authForm.submitAuthForm.innerHTML == 'Acessar') {
        firebase.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value)/*.then(function (user) {
            console.log('Login efetuado com sucesso')
            console.log(user)
        })*/.catch(function (error){
            console.log('Falha no acesso!')
            console.log(error)
        })
    } else {
            firebase.auth().createUserWithEmailAndPassword(authForm.email.value, authForm.password.value).then(function (user) {
                console.log('Usuário cadastrado com sucesso!')
                console.log(user)
            }).catch(function (error){
                console.log('Falha no Cadastro!')
                console.log(error)
            })
    }
  }
  
  /* teremos dois estados para usuário, auth e noauth
  Função para validar o status do usuário, utilizando um função anônima
  A aplicação desta função permite a retirada do .then do User ".then(function (user)" para efeito de estudo vira comentário */
  // função que centraliza e trata a autenticação
  firebase.auth().onAuthStateChanged(function (user) {
    hideItem(loading)
    if (user) {
        showUserContent(user)
        //console.log('Usuário Autenticado')
        //console.log(user)
    }
    else {
        showAuth()
        //console.log('Usuário não não atenticado')
    }
  })
  
  //Função que permite ao usuário deslogar do App, catch importante para captura erros
  function signOut() {
    firebase.auth().signOut().catch(function(error) {
        //console.log('Não foi possivel deslogar!')
        //console.log(error)
    })
  }
  