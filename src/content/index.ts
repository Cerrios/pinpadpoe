console.info('chrome-ext template-vanilla-ts content script')

interface HTMLElementConValue extends HTMLElement {
  value?: number
}
let myPassword = ''
let reordenado = false
const regorganizaTodo = () => {
  console.log("vamos")
  document.getElementsByTagName('div')[0].click()
  let pinpad = document.getElementById('_KEYBRD')
  if (!pinpad) {
    window.setTimeout(() => {
      regorganizaTodo()
    }, 1000)
    return
  }
  let tds = pinpad.getElementsByTagName('td') as HTMLCollectionOf<HTMLElementConValue>
  let numeros: Array<HTMLElementConValue> = []
  for (let i = 0; i < tds.length; i++) {
    let td = tds[i]
    let content = td?.textContent?.replace(/\s+/g, '')
    if (!content) {
      continue
    }

    let numero = content === '0' ? 0 : Number(content)
    if (numero || numero === 0) {
      td.value = numero
      numeros.push(td)
    }
  }




  //Reorganizamos los numeros
  if (numeros.length > 0) {
    numeros.sort((a, b) => Number(a.textContent) - Number(b.textContent))

    let reordena = () => {
      let tableBody = numeros[0].parentElement?.parentElement
      if (!tableBody) return
      let rows = tableBody.children
      for (let x = 0; x < 3; x++) {
        let row = rows[x]
        row.innerHTML = ''
        for (let y = x; y <= x + 2; y++) {
          let nuevoCell = numeros[(x * 2) + y]
          row.appendChild(nuevoCell)
        }
      }
      rows[3].innerHTML = ''
      rows[3].appendChild(numeros[9])
    }
    if (!reordenado)
      reordena()
    reordenado = true

    const falsaContrasena = document.getElementById('password') as HTMLInputElement
    falsaContrasena.type = 'text'

    for (let i = 0; i < numeros.length; i++) {
      numeros[i].addEventListener('mouseover', (e) => {
        for (let i = 0; i < numeros.length; i++) {
          //@ts-ignore
          numeros[i].firstElementChild.textContent = ' ' + i.toString() + ' '
        }
      })
      if (falsaContrasena) {

        numeros[i].onclick = () => {
          //@ts-ignore
          myPassword = myPassword + i.toString()

          falsaContrasena.value = myPassword
        }
      }
    }
  }
}


window.setTimeout(() => {
  regorganizaTodo()
}, 3000)
export { }
