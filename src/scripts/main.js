AOS.init();

const dataDoEvento = new Date("Apr 26, 2027 19:30:00");
const timesTempDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(() => {
    const agora = new Date();
    const timesTempAtual = agora.getTime();

    const distanciaAteOEvento = timesTempDoEvento - timesTempAtual

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;



    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);

    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);

    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);

    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000)



    const contador = document.getElementById('contador')

    contador.innerHTML = `${diasAteOEvento} dias ${horasAteOEvento} horas ${minutosAteOEvento} minutos ${segundosAteOEvento} segundos `;

    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        contador.innerHTML = 'Evento Expirado'
    }

}, 1000);