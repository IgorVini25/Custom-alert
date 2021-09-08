// Create the alert Elements
const customAlertDiv = document.createElement('div')
customAlertDiv.setAttribute('id', 'custom-Alert')
document.body.prepend(customAlertDiv)

const customAlertContent = document.createElement('div')
customAlertContent.setAttribute('id', 'custom-Alert-Content')
customAlertDiv.appendChild(customAlertContent)

const customAlertText = document.createElement('p')
customAlertText.setAttribute('id', 'custom-Alert-Text')
customAlertContent.appendChild(customAlertText)

const customAlertButton = document.createElement('button')
customAlertButton.setAttribute('id', 'custom-Alert-Button')
customAlertButton.innerText = 'OK'
customAlertContent.appendChild(customAlertButton)

// Show and Hide alert

// Config Alert
// This function don't show the alert, only config him
function showAlert(message) {
  // If don't have any message
  if (message == undefined) {
    console.error('The function "showAlert" require the parameter message')
    return
  }

  customAlertText.innerText = ''
  customAlertText.innerText = message

  openAlert()
}

// Open Alert
function openAlert() {
  customAlertDiv.classList.add('open')
}

// Close Alert Function
function closeAlert() {
  customAlertDiv.classList.remove('open')
}

// Close alert Button
customAlertButton.onclick = closeAlert

// Close with 'Esc' key
document.body.onkeyup = e => {
  e.key == 'Escape' ? closeAlert() : null
}

// Configs

// This function repeat every time, if user change something, this need update
requestAnimationFrame(update)
function update() {
  // Block Page
  if (alertConfig.blockPage) {
    customAlertDiv.classList.add('block-page')
  } else {
    customAlertDiv.classList.remove('block-page')
  }
  requestAnimationFrame(update)
}

// Custom Button Text
if (alertConfig.buttonText) {
  // This function don't show the alert, only config him
  function showAlert(message, buttonText) {
    // If don't have any message
    if (message == undefined) {
      console.error('The function "showAlert" require the parameter message')
      return
    }

    customAlertText.innerText = ''
    customAlertText.innerText = message

    buttonText == undefined
      ? (customAlertButton.innerText = 'OK')
      : (customAlertButton.innerHTML = buttonText)

    openAlert()
  }
}

// Custom Colors
if (alertConfig.customColors) {
  const colors = alertConfig.colors

  colors.backgroundColor == false
    ? null
    : (customAlertContent.style.background = colors.backgroundColor)

  colors.textColor == false
    ? null
    : (customAlertText.style.color = colors.textColor)

  colors.buttonColor == false
    ? null
    : (customAlertButton.style.background = colors.buttonColor)

  colors.buttonTextColor == false
    ? null
    : (customAlertButton.style.color = colors.buttonTextColor)
}
