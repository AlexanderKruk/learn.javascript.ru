console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))

function checkSpam(text){
    text = text.toLowerCase()
    return !!(~text.indexOf('viagra') || ~text.indexOf('xxx'))
}