// Get Open Sans font
const link = document.createElement('link')
link.setAttribute('rel', 'stylesheet')
link.setAttribute('type', 'text/css')
link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Open+Sans')
document.head.appendChild(link)

// Create and style the alert

const customAlert = document.createElement('div')
customAlert.setAttribute('id', 'customAlert')
customAlert.style.position = 'fixed'
customAlert.style.zIndex = '1000'
customAlert.style.width = '100%'
customAlert.style.margin = '-9rem auto'
customAlert.style.display = 'flex'
customAlert.style.justifyContent = 'center'
customAlert.style.alignItems = 'center'
customAlert.style.transition = '0.5s'
document.body.prepend(customAlert)

const customAlertContent = document.createElement('div')
customAlertContent.setAttribute('id', 'customAlertContent')
customAlertContent.style.background = '#fff'
customAlertContent.style.fontFamily = "'Open Sans', sans-serif"
customAlertContent.style.wordBreak = 'break-word'
customAlertContent.style.boxShadow = '0px 0px 5px 0px rgba(0,0,0,0.72)'
customAlertContent.style.width = '22rem'
customAlertContent.style.display = 'flex'
customAlertContent.style.justifyContent = 'space-between'
customAlertContent.style.alignItems = 'flex-end'
customAlertContent.style.flexDirection = 'column'
customAlertContent.style.padding = '1.3rem'
customAlertContent.style.opacity = '0'
customAlertContent.style.transition = '0.5s'
customAlert.appendChild(customAlertContent)

const customAlertText = document.createElement('p')
customAlertText.setAttribute('id', 'customAlertText')
customAlertText.style.color = '#000'
customAlertText.style.margin = '0'
customAlertText.style.height = 'max-content'
customAlertText.style.width = '100%'
customAlertContent.appendChild(customAlertText)

const customAlertButton = document.createElement('button')
customAlertButton.setAttribute('id', 'customAlertButton')
customAlertButton.style.background = '#3771fa'
customAlertButton.style.color = '#fff'
customAlertButton.style.outline = 'none'
customAlertButton.style.border = 'none'
customAlertButton.style.marginTop = '1rem'
customAlertButton.style.cursor = 'pointer'
customAlertButton.style.height = 'max-content'
customAlertButton.style.width = 'max-content'
customAlertButton.style.padding = '0.4rem 1rem'
customAlertButton.style.borderRadius = '5px'
customAlertButton.innerText = 'OK'
customAlertContent.appendChild(customAlertButton)

// Get elements
const customAlertElement = document.querySelector('#customAlert')
const customAlertContentElement = document.querySelector('#customAlertContent')
const customAlertTextElement = document.querySelector('#customAlertText')
const customAlertButtonElement = document.querySelector('#customAlertButton')

// Configs

// Custom Button Text
if (alertConfig.buttonText) {
  function customAlert(message, buttonText) {
    customAlertTextElement.innerText = ''
    customAlertElement.style.margin = '1rem auto'
    customAlertContentElement.style.opacity = '1'
    customAlertTextElement.innerText = message
    customAlertButton.innerText = buttonText
  }
} else {
  customAlertButton.innerText = 'OK'
}

// Custom Colors
if (alertConfig.customColors) {
  const colors = alertConfig.colors

  colors.backgroundColor == false
    ? (customAlertContentElement.style.background = '#fff')
    : (customAlertContentElement.style.background = colors.backgroundColor)

  colors.textColor == false
    ? (customAlertTextElement.style.color = '#000')
    : (customAlertTextElement.style.color = colors.textColor)

  colors.buttonColor == false
    ? (customAlertButtonElement.style.background = '#3771fa')
    : (customAlertButtonElement.style.background = colors.buttonColor)

  colors.buttonTextColor == false
    ? (customAlertButtonElement.style.color = '#fff')
    : (customAlertButtonElement.style.color = colors.buttonTextColor)
}

// Show Alert
function customAlert(message) {
  customAlertTextElement.innerText = ''
  customAlertElement.style.margin = '1rem auto'
  customAlertContentElement.style.opacity = '1'
  customAlertTextElement.innerText = message
}

// Close alert
customAlertButtonElement.onclick = () => {
  customAlertElement.style.margin = '-9rem auto'
  customAlertContentElement.style.opacity = '0'
}
