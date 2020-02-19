
const urlCorrector = url => {
  if (url === 'nidoran-f' || url === 'nidoran-m') {
    return url.replace('-', '')
  } else {
    return url
  }
}



const upperCaseFirstChar = (string) => {
  return string.charAt(0).toUpperCase() +
     string.slice(1)
}

export { urlCorrector, upperCaseFirstChar, }
