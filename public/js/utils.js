// Defindo referências para elementos da página, qualquer elemento que quiser uma ação em JS no seu APP.
var authForm = document.getElementById('authForm')
var authFormTitle = document.getElementById('authFormTitle')
var register = document.getElementById('register')
var access = document.getElementById('access')

var loading = document.getElementById('loading')

var auth = document.getElementById('auth')
var userContent = document.getElementById('userContent')

//var userEmail = document.getElementById('userEmail')

// Alterar o formulário de autenticação para o cadastro de novas contas
function toggleToRegister() {
  authForm.submitAuthForm.innerHTML = 'Criar conta'
  authFormTitle.innerHTML = 'Faça seu cadastro'
  hideItem(register)
  showItem(access)
}

// Alterar o formulário de autenticação para o acesso de contas já existentes
function toggleToAccess() {
  authForm.submitAuthForm.innerHTML = 'Acessar'
  authFormTitle.innerHTML = 'Acesse sua conta para continuar!'
  hideItem(access)
  showItem(register)
}

// Simpplifica a exibição de elementos da página
function showItem(element) {
  element.style.display = 'block'
}

function hideItem(element) {
  element.style.display = 'none'
}

//Função destinada a apresenta a tela de usuário autenticados.
function showUserContent() {
  hideItem(auth)
  showItem(userContent)
}

//Função destinada a apresenta a tela de usuário não autenticados.
function showAuth() {
  hideItem(userContent)
  showItem(auth)
}