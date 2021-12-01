





do {
    var num = +prompt('Введите максимальное количество ступенек')
}while(isNaN(num) || num <= 0)


do {
    var sym = prompt('Введите символ отступов')
}while(sym == '')


do {
    var finalSym = prompt('Введите конечный символ')
}while(finalSym == '')

for(let i = 0; i < num; i++) {
    finalSym = i == 0 ? finalSym : sym + finalSym
    console.log(finalSym);
}