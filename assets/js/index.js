function sendToWhatsapp() {
    let number = "+5511972809226";

    let name = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data_festa = document.getElementById('data_festa').value;
    let num_convidados = document.getElementById('num_convidados').value;
    let local_evento = document.getElementById('local_evento').value;
    let horario_inicio = document.getElementById('horario_inicio').value;
    let telefone = document.getElementById('telefone').value;


    //formatando data para padrao pt-br
    let data_festa_formatada = data_festa.toLocaleDateString('pt-BR');

    var url = "https://wa.me/" + number + "?text=" +
        "Nome: " + name + "%0a" +
        "E-mail: " + email + "%0a" +
        "Data da Festa: " + data_festa + "%0a" +
        "Número de Convidados: " + num_convidados + "%0a" +
        "Local do Evento: " + local_evento + "%0a" +
        "Horário de Início: " + horario_inicio + "%0a" +
        "Telefone: " + telefone + "%0a%0a";

    window.open(url, '_blank').focus();
}