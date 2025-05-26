# Lista inicial"
compras = ["pão", "café", "leite", "Bolo", "Cenoura", "chocolate"]

print("BEM-VINDO Á SUA LISTA DE COMPRAS :)")

# Loop de interação com o usuário
while True:
    print("\nO que você deseja fazer?")
    print("1 - Adicionar item")
    print("2 - Remover item")
    print("3 - Ver lista de compras")
    print("4 - Finalizar programa")

    escolha = input("Digite o número da opção desejada: ")

    if escolha == "1":
        novo_item = input("Digite o nome do item que deseja adicionar: ")
        compras.append(novo_item)
        print(f"'{novo_item}' foi adicionado à lista.")

    elif escolha == "2":
        item_remover = input("Digite o nome do item que deseja remover: ")
        if item_remover in compras:
            compras.remove(item_remover)
            print(f"'{item_remover}' foi removido da lista.")
        else:
            print(f"'{item_remover}' não está na lista.")

    elif escolha == "3":
        print("\nItens na sua lista de compras:")
        for item in compras:
            print("-", item)
         
    
    elif escolha == "4":
        print("\nFinalizando programa... Sua lista final é:")
        for item in compras:
            print("-", item)
            
        print("Até a próxima!")
        # Sai do loop e encerra o programa
        exit()

    else:
        print ("ESCOLHA APENAS UM NUMERO ENTRE 1 E 3.")
