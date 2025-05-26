#testando_definicoes.py

#LISTA 
compras=["páo, café, leite"]
print(compras)
#o [] é colocado para posição que vc quiser, ai coloca um numero, comeÇANDO DO 0. então o pão seria o 0

compras.remove (compras [0])
print(compras)

compras.append ("pão")
print(compras)
#append acrescenta um item no final da lista, podendo apenas um por vez.
compras.sort ()
print (compras)

compras_ordenadas = sorted (compras)
print (compras_ordenadas)

for item in compras:
    print("-", item)
    
    #tanto faz o nome usado, o "item" é apenas um identificador.
    
    
    #faça estrutura para interação com o usuário. ex: se quer incluir ou remover item, tmb pode finalizar. com while ou for,if,elif,else.
    #mostra as opções da compra, os itens e tira o break e executando o que a pessoa escolher
    #listas =[]
    #dicionraios= {chave; valor}
    #tuplas=()
    #conjunto= set ()
    teste =[1,2,3,4,5]
    print (teste)
    teste.append(4)
    print (teste)