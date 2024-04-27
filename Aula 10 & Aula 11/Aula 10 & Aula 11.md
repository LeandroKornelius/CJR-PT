# Programação Assíncrona

> Vem no pagodinho! Antes do Pagode tem Async Programming!  
É inerente à um bom programador de JS (front ou back) conhecer os conceitos desta aula e saber usá-los.
Vamos entender um pouco sobre como aproveitar o tempo para realizar múltiplas tarefas simultâneas em nossos códigos. 
Sem mais delongas, vamos correr pra última aula de JS 
Aulas → Aula 10 + Aula 11
> 

## Conteúdo da Aula

### Contextualização

Existem situações em que é vantajoso fazer atividades de forma síncrona, ou seja, de forma sequencial. 

`Exemplo` → construir uma casa de dois andares. Até onde eu sei, não conseguimos realizar a construção do segundo andar antes de ter feito a base e o primeiro andar. Logo, as coisas devem ocorrer de forma contínua

Contudo, existem casos em que podemos fazer múltiplas atividades de forma independente, de forma assíncrona. 

`Exemplo` → fazer um bolo. Durante o pré-aquecimento do forno conseguimos ir fazendo outras atividades como formar a massa. Ou seja, as atividades podem acontecer de forma simultânea. 

### Definição

`Código Síncrono` → Código que é executado de forma sequencial, do topo ao final do arquivo. Nesse aspecto, a próxima linha só pode ser executada após a conclusão da anterior. 

`Código Assíncrono` → Código que permite execução em paralelo a outros códigos sendo processados. 

### No ambiente do Navegador

Em uma página que permite muitas alterações simultâneas, qual estilo de programação parece mais interessante para a experiência do usuário?

Programação assíncrona, pois permite que o tempo de espera entre as múltiplas funcionalidades seja reduzido uma vez que acontecem juntos.

### Programação Assíncrona no JS

`Promises`

No JS, promessas tem três estados: 

- pending → valor ainda não está disponível
- resolved → completou e obteve um valor
- rejected → com erros tem seu estado rejeitado

`Then & Catch`

Formato do JS para lidar com promessas indicando no código o que fazer ao resolver ou rejeitar uma promessa 

`Async & Await`

Outro formato do JS para lidar com promessas em um formato mais legível

Permite a criação de funções assíncronas que retornam promessas

### Breve Introdução ao [Axios](https://axios-http.com/ptbr/docs/intro) e HTTPS
