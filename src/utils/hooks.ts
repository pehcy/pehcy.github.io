export function fallbackCopy(content : string) {
  const elem = document.createElement('textarea')
  elem.value = content 
  elem.select()
  document.execCommand('copy')
  document.body.removeChild(elem)
}
