function obterPontos() {
    return fetch('http://localhost:3000/ocorrencias')
        .then((res) => res.json())
        .then((data) => {
            const pontos = data.map((elemento) => {
                // Verifica se localizacaoGeografica e coordinates existem antes de acessá-los
                const coordinates =
                    elemento.localizacaoGeografica &&
                    elemento.localizacaoGeografica.coordinates;

                return {
                    id: elemento.id,
                    titulo: elemento.titulo,
                    tipo: elemento.tipo,
                    data: elemento.data,
                    hora: elemento.hora,
                    localizacao: {
                        lat: coordinates ? coordinates[0] : null,
                        lng: coordinates ? coordinates[1] : null,
                    },
                };
            });
            return pontos;
        })
        .catch((error) => {
            console.error('Erro ao obter pontos:', error);
            throw error; // Rejeita a Promise com o erro para que o chamador possa capturá-lo
        });
}

// Exemplo de uso
obterPontos()
    .then((pontos) => {
        console.log('Pontos obtidos:', pontos);
    })
    .catch((error) => {
        console.error('Erro geral:', error);
    });

    function criarElementos() {
        let a;
        const ocorrenciasList = document.getElementById('ocorrenciasList');
        
        try {
            fetch('http://localhost:3000/ocorrencias')
                .then(function (res) { return res.json(); })
                .then(function (data) { return obterPontos(); })
                .then(function (pontos) {
            
                    pontos.forEach(function (element) {
                        const listItem = document.createElement('li');
                        listItem.innerHTML = `<b> Título: </b> ${element.titulo}<br>
                        <b> Tipo: </b> ${element.tipo} <br>
                        <b> Data: </b> ${element.data}`;                  
                        ocorrenciasList.appendChild(listItem);
                    });
                })
                .catch(function (error) {
                    console.error('Erro ao obter pontos:', error);
                });
        } catch (error) {
            console.error('Erro geral:', error);
        }
    }

window.addEventListener('load', async function () {
    await obterPontos();
    criarElementos();
});