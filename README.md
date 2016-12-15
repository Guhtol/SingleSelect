# Single Select 

Estudo sobre o Paradigma Funcional sobre o elemento Select em Html5.

Este estudo visou trazer os princípios de funções puras, clousure e currying removendo o paradigima Orientado a Objetos.

**OBs**: Tenha em mente que esta implementação é um estudo podendo ferir alguns dos conceitos proposto.


~~É comum na rotina de um desenvolvedor a necessidade de disponibilizar escolhas significativas a seus clientes, uma opção é utilizar o elemento select do html para disponibilizar lista de cidades , estados e afins.

~~O **Single Select** veio para lhe auxiliar a manipular o elemento select da melhor maneira possível com o mínimo de esforço possível.

~~##Pra quem foi feito.

~~Este plugin foi desenvolvido para manter o estado do objeto, se você trabalha com javascript orientado a objetos não irá ter a necessidade de manipular seu objeto para ser inserido ao select, deixe que o **Single Select** faça isso para você.

~~**OBs**: Tenha em mente que este plugin foi desenvolvido em javascript sem auxilo de bibliotecas como jquery ou angular, portanto o mesmo ainda não foi testado em versões antigas dos Browers.

~~##Como implementar

~~Para implementar este plugin, basta baixar o arquivo Single Select na pasta js, e inserir  em seu projeto.

##Exemplo 

Parametros 

1- id do elemento Select.
2- Nome da propriedade que tera seu valor passado como value a um elemento Option.
3- Nome da propriedade que terá seu valor passado para o Select como sendo o texto do Option.
4- Objeto contendo as propriedades passadas no 2° e 3° parametro.

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




