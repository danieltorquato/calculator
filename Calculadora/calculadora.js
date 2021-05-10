onload = ()=>{
document.querySelector('#bt0').onclick=()=>digito(0)
document.querySelector('#bt1').onclick=()=>digito(1)
document.querySelector('#bt2').onclick=()=>digito(2)
document.querySelector('#bt3').onclick=()=>digito(3)
document.querySelector('#bt4').onclick=()=>digito(4)
document.querySelector('#bt5').onclick=()=>digito(5)
document.querySelector('#bt6').onclick=()=>digito(6)
document.querySelector('#bt7').onclick=()=>digito(7)
document.querySelector('#bt8').onclick=()=>digito(8)
document.querySelector('#bt9').onclick=()=>digito(9)
document.querySelector('#btsoma').onclick=()=>digito('+')
document.querySelector('#btdivide').onclick=()=>digito('/')
document.querySelector('#btmult').onclick=()=>digito('*')
document.querySelector('#btsub').onclick=()=>digito('-')
document.querySelector('#btponto').onclick=()=>digito('.')
document.querySelector('#AC').onclick=()=>limpar()
document.querySelector('#C').onclick=()=>limpar1()
document.querySelector('#btresultado').onclick=()=>calcular()
}
const digito =(n)=>{
   this.tela = document.getElementById('tela')
 tela.innerHTML += `${n}`
}
const limpar=()=>{
    let tela = document.getElementById('tela')
    tela.innerHTML = ''
}
const limpar1=()=>{
  let tela = document.getElementById('tela').innerHTML
  document.getElementById('tela').innerHTML = tela.substring(0, tela.length -1)
}
const calcular=()=>{
  let tela = document.getElementById('tela').innerHTML
  if (tela) {
    tela = document.getElementById('tela').innerHTML = eval(tela)
  }

}