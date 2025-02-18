var btn = document.getElementById("welcome")
var register = document.getElementById('registerform')
function hide() {
    btn.classList.toggle("hiden");
    register.classList.remove('hiden');
  };     

var registercheck = document.getElementById('register')
var logincheck = document.getElementById('login')
var formregister = document.getElementById('formregister')
var formlogin = document.getElementById('formlogin')

function registerform() {
  registercheck.classList.toggle('activate')
  logincheck.classList.remove('activate')
  registercheck.setAttribute('disabled', '')
  logincheck.removeAttribute('disabled')
  formregister.style.left = "1px"
  formlogin.style.left = "440px"
}
function loginform(){
  registercheck.classList.remove('activate')
  logincheck.classList.toggle('activate')
  logincheck.setAttribute('disabled', '')
  registercheck.removeAttribute('disabled')
  formregister.style.left = "-440px"
  formlogin.style.left = "1px"
}

function signup() {
  correctInputCheckLoginReg()
  correctInputCheckPasswordReg()
  correctInputCheckEmailReg()
  correctInputCheckEmailRegMail()

}

function signin(){
  correctInputCheckLoginLog()
  correctInputCheckPasswordLog()
}

const loginInputReg = document.getElementById('loginInputReg')
var inputErrorLoginReg = document.getElementById('inputErrorLoginReg')

function correctInputCheckLoginReg(){
  let lengthLoginReg = loginInputReg.value.length
  if (lengthLoginReg>15) inputErrorLoginReg.textContent = '*Количество символов не должно быть больше 15!'
  else if (lengthLoginReg < 5) inputErrorLoginReg.innerHTML ='*Количество символов не должно быть меньше 5!'
  else if (5>lengthLoginReg<15) inputErrorLoginReg.innerHTML = ''
}

const  passwordInputReg = document.getElementById('passwordInputReg')
var inputErrorPasswordReg = document.getElementById('inputErrorPasswordReg')

function correctInputCheckPasswordReg(){
  let lengtnPasswordReg = passwordInputReg.value.length
  if (lengtnPasswordReg>15) inputErrorPasswordReg.textContent = '*Количество символов не должно быть больше 15!'
  else if (lengtnPasswordReg < 8) inputErrorPasswordReg.innerHTML ='*Количество символов не должно быть меньше 8!'
  else if(!/[0-9]/.test(passwordInputReg.value)) inputErrorPasswordReg.innerHTML = '*Пароль должен содержать хотябы одну цыфру!'
  else if(!/[a-z]/.test(passwordInputReg.value)) inputErrorPasswordReg.innerHTML = '*Пароль должен содержать хотябы одну латинскую букву!'
  else if(!/[A-Z]/.test(passwordInputReg.value)) inputErrorPasswordReg.innerHTML = '*Пароль должен содержать хотябы одну <br>   заглавную букву!'
  else if (5>lengtnPasswordReg<15) inputErrorPasswordReg.innerHTML = ''
}

const  email = document.getElementById('email')
var inputErrorEmailReg = document.getElementById('inputErrorEmailReg')

function correctInputCheckEmailReg(){
  let lengtnEmaiReg = email.value.length
  if (lengtnEmaiReg>254) inputErrorEmailReg.textContent = '*Количество символов не должно быть больше 254!'
  else if (lengtnEmaiReg < 6) inputErrorEmailReg.innerHTML ='*Количество символов не должно быть меньше 6!'
  else if (5>lengtnEmaiReg<254) inputErrorEmailReg.innerHTML = ''
}

function correctInputCheckEmailRegMail(){
  if(!/[@]/.test(email.value)) inputErrorEmailReg.innerHTML = '*Введите корректную электронную почту'
}
const  loginInputLog = document.getElementById('loginInputLog')
var inputErrorLoginLog = document.getElementById('inputErrorLoginLog')

function correctInputCheckLoginLog(){
  let lengthLoginLog = loginInputLog.value.length
  if (lengthLoginLog>15) inputErrorLoginLog.textContent = '*Количество символов не должно быть больше 15!'
  else if (lengthLoginLog < 5) inputErrorLoginLog.innerHTML ='*Количество символов не должно быть меньше 5!'
  else if (5>lengthLoginLog<15) inputErrorLoginLog.innerHTML = ''
}

const  passwordInputLog = document.getElementById('passwordInputLog')
var inputErrorPasswordLog = document.getElementById('inputErrorPasswordLog')

function correctInputCheckPasswordLog(){
  let lengthPasswordLog = passwordInputLog.value.length
  if (lengthPasswordLog>15) inputErrorPasswordLog.textContent = '*Количество символов не должно быть больше 15!'
  else if (lengthPasswordLog < 8) inputErrorPasswordLog.innerHTML ='*Количество символов не должно быть меньше 8!'
  else if(!/[0-9]/.test(passwordInputLog.value)) inputErrorPasswordLog.innerHTML = '*Пароль должен содержать хотябы одну цыфру!'
  else if(!/[a-z]/.test(passwordInputLog.value)) inputErrorPasswordLog.innerHTML = '*Пароль должен содержать хотябы одну латинскую букву!'
  else if(!/[A-Z]/.test(passwordInputLog.value)) inputErrorPasswordLog.innerHTML = '*Пароль должен содержать хотябы одну <br>   заглавную букву!'
  else if (5>lengthPasswordLog<15) inputErrorPasswordLog.innerHTML = ''
}

let passwordVisionReg = document.getElementById('passwordVisionReg')
let passwordVisionImgReg = document.getElementById('passwordVisionImageReg')
var passwordVisibilityImg = document.querySelector('.passwordVision')
let passwordVisibility = false

function passwordVisibleReg(){
  if (passwordVisibility == false) {
    passwordVisibility = true
    passwordVisionImgReg.src = 'C:/Projects/git/Assets/img/eye.png'
    passwordInputReg.type='text'
    passwordVisibilityImg.style.bottom = ''
    console.log(passwordVisibility)
    return
  }
  else if (passwordVisibility == true) {
    passwordVisibility = false
    passwordVisionImgReg.src = 'C:/Projects/git/Assets/img/eyeclose.png'
    passwordInputReg.type='password'
    console.log(passwordVisibility)
    return
  }
}

let passwordVisionLog = document.getElementById('passwordVisionLog')
let passwordVisionImgLog = document.getElementById('passwordVisionImageLog')
let passwordVisibilityLog = false

function passwordVisibleLog(){
  if (passwordVisibilityLog == false) {
    passwordVisibilityLog = true
    passwordVisionImgLog.src = 'C:/Projects/git/Assets/img/eye.png'
    passwordInputLog.type='text'
    console.log(passwordVisibilityLog)
    return
  }
  else if (passwordVisibilityLog == true) {
    passwordVisibilityLog = false
    passwordVisionImgLog.src = 'C:/Projects/git/Assets/img/eyeclose.png'
    passwordInputLog.type='password'
    console.log(passwordVisibilityLog)
    return
  }
}