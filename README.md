# Single Select 

Estudo sobre o Paradigma Funcional sobre o elemento Select em Html5.

Este estudo visou trazer os princípios de funções puras, clousure e currying removendo o paradigima Orientado a Objetos.

**OBs**: Tenha em mente que esta implementação é um estudo podendo ferir alguns dos conceitos proposto.


Parametros 

1- id do elemento Select.
2- Nome da propriedade que tera seu valor passado como value a um elemento Option.
3- Nome da propriedade que terá seu valor passado para o Select como sendo o texto do Option.
4- Objeto contendo as propriedades passadas no 2° e 3° parametro.

##Exemplo 

Para retornar a função append passe apenas os 3 primeitros parametros.

```
var append = sgSelect.init("SelectId")('id')('name')

var select = append({name:'SuperMan',id:'1'})

//ou com array

var append = sgSelect.init("SelectId")('id')('name')

var select = append([{name:'SuperMan',id:'1'},{name:'Batman',id:'2'}])

```
Inicialização rápida caso não queria inserir futuramente mais Options.

```
 var select = sgSelect.init("SelectId")('id')('name')({name:'SuperMan',id:'1'})

//ou com array

  var select = sgSelect.init("SelectId")('id')('name')([{name:'SuperMan',id:'1'},{name:'Batman',id:'2'}])
```

Pegar os valores selecionados em um Select 

```
 var select = sgSelect.init("SelectId")('id')('name')({name:'SuperMan',id:'1'})

sgSelect.getValue(select)

```

Pegar os textos selecionados em um Select 

```
 var select = sgSelect.init("SelectId")('id')('name')({name:'SuperMan',id:'1'})

sgSelect.getText(select)
```




