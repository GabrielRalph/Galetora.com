var list = ['AMME2500', 'COMP2123', 'MTRX3700', 'VISUALS', 'DRAW', 'INVOICE', 'EMB'];
var html = ''

for(var i in list){
  html += '<h1 onclick = "window.open(\'https://'+list[i].toLowerCase()+'.galetora.com\')">'+list[i]+'</h1>\n'
}
document.getElementById('app').innerHTML += html
