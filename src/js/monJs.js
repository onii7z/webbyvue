export default{

bob: function randomId(table){
    tailleTuto = table.lenght;
    monTuto = Math.floor(Math.random() * tailleTuto);
    monId = table[montuto].id;
    tempo = table[0];
    table[0] = table[monId];
    table[monId] = tempo;
}
  
}
     