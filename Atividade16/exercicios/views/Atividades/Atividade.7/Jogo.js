var escolha1, escolha2, num;

    //usuário
    escolha1 = prompt("Pedra, Papel ou Tesoura?");

     //random do pc
     num = Math.random();

     if(num >= 0 && num <= 0.33)
     {
        escolha2 = "Pedra";
     }
            

     else if(num > 0.33 && num <= 0.66)
     {
        escolha2 = "Papel";
    }

     else if(num > 0.66)
     {
        escolha2 = "Tesoura";
    }

    //VALIDAÇÃO

    //empate
        if((escolha1 == "Pedra" || escolha1 == "pedra") && escolha2 == "Pedra")
            alert("🗿 Empate 🗿");

        else if((escolha1 == "Papel" || escolha1 == "papel") && escolha2 == "Papel")
            alert("📜 Empate 📜");

        else if((escolha1 == "Tesoura" || escolha1 == "tesoura") && escolha2 == "Tesoura")
            alert("✂️ Empate ✂️");

    //pedra vence
        else if((escolha1 == "Pedra" || escolha1 == "pedra") && escolha2 == "Tesoura")
            alert("😎 Você Ganhou! 😎\n🗿 Pedra quebra Tesoura ✂️");

        else if((escolha1 == "Tesoura" || escolha1 == "tesoura") && escolha2 == "Pedra")
            alert("😞 Você Perdeu! 😞\n🗿 Pedra quebra Tesoura ✂️");


    //tesoura vence
        else if((escolha1 == "Tesoura" || escolha1 == "tesoura") && escolha2 == "Papel")
            alert("😎 Você Ganhou! 😎\n✂️ Tesoura corta Papel 📜");

        else if((escolha1 == "Papel" || escolha1 == "papel") && escolha2 == "Tesoura")
            alert("😞 Você Perdeu! 😞\n✂️ Tesoura corta Papel 📜");

    //papel vence
        else if((escolha1 == "Papel" || escolha1 == "papel") && escolha2 == "Pedra")
            alert("😎 Você Ganhou! 😎\n📜 Papel cobre a Pedra 🗿");
                
        else if((escolha1 == "Pedra" || escolha1 == "pedra") && escolha2 == "Papel")
            alert("😞 Você Perdeu! 😞\n📜 Papel cobre a Pedra 🗿");

    //nenhuma das opções
    else
        alert("❌ Você digitou uma opção inválida! ❌");