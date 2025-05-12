import time

def lavar(material, duracao, temperatura):
    print(f"\nIniciando lavagem de {material}...")
    print(f"Tempo: {duracao} segundos | Temperatura: {temperatura}°C\n")
    for i in range(duracao):
        print(f"{i + 1}s / {duracao}s - Temperatura: {temperatura}°C")
        time.sleep(1)
    print(f"\nLavagem de {material} finalizada!\n")

def menu():
    while True:
        print("=== Máquina de Lavar ===")
        print("1. Vidro (120s, 100°C)")
        print("2. Plástico (60s, 21°C)")
        print("3. Metal (120s, 30°C)")
        print("4. Sair")
        escolha = input("Escolha uma opção (1-4): ")

        if escolha == "1":
            lavar("vidro", 120, 100)
        elif escolha == "2":
            lavar("plástico", 60, 21)
        elif escolha == "3":
            lavar("metal", 120, 30)
        elif escolha == "4":
            print("Encerrando programa.")
            break
        else:
            print("Opção inválida. Tente novamente.\n")

menu()

