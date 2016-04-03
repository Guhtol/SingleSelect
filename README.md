# Single Select 

É comum na rotina de um desenvolvedor a necessidade de disponibilizar escolhas significativas a seus clientes, uma opção é utilizar o elemento select do html para disponibilizar lista de cidades , estados e afins.

O **Single Select** veio para lhe auxiliar a manipular o elemento select da melhor maneira possível com o mínimo de esforço possível.

##Pra quem foi feito.

Este plugin foi desenvolvido para manter o estado do objeto, se você trabalha com javascript orientado a objetos não irá ter a necessidade de manipular seu objeto para ser inserido ao select, deixe que o **Single Select** faça isso para você.

**OBs**: Tenha em mente que este plugin foi desenvolvido em javascript sem auxilo de bibliotecas como jquery ou angular, portanto o mesmo ainda não foi testado em versões antigas dos Browers.

##Como implementar

Para implementar este plugin, basta baixar o arquivo Single Select na pasta js, e inserir  em seu projeto.

##Exemplos



1.Inicialize o plugin passando o Id do seu Select como parametro.
```
var select = Select('SelectId');

```
2.Crie seu objeto caso não tenha um.

```
var seuObjeto = { id :"1", name:"Otavio"};

```

3. Passe seu objeto e os nomes das propriedades do seu objeto que serão respectivamente text e value do seu select.

```
select.append(seuObjeto,'name','id');

```
4. Caso queria pegar o valor ou text do seu Select já instanciado
```
select.value();

select.text();

```
5.Passar um valor Default para seu Select , **lembre-se** que este deve ser realizado antes de popular o Select com seu objeto.

```
select.defaultItem('Selecione um nome');

```

6.Para alterar o valor do seu Select já instanciado
```
select.selectItem('Valor');

ou

select.selectItem(seuObjeto.id);

```





