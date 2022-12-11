export default function (state="undefined", action) {

    const arrayMunicipios = [] 
    
    const municipiosAssociados = () => {
        var i = 0;
        for(i = 0; i < action.payload.length; i++) {
            arrayMunicipios.push(action.payload[i].nome);
        }
        console.log("Array: ", arrayMunicipios)
        return arrayMunicipios;
    }

    switch (action.type) {
        case 'Municipios_Relacionados':
            return  municipiosAssociados();
        
        default:
            return state
    }
}