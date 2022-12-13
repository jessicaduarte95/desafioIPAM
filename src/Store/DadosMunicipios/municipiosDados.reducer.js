export default function (state="undefined", action) {

    const dadosMunicípios = () => {

        var arrayDados = [];
        arrayDados.push( action.payload[0].municipio.microrregiao.nome)
        arrayDados.push( action.payload[0].municipio.microrregiao.mesorregiao.nome)
        arrayDados.push( action.payload[0].municipio.microrregiao.mesorregiao.UF.nome)
        arrayDados.push( action.payload[0].municipio.microrregiao.mesorregiao.UF.regiao.nome)

        return arrayDados
    }

    switch (action.type) {
        case 'Municipios_Dados':
            return  dadosMunicípios()
        
        default:
            return state
    }
}