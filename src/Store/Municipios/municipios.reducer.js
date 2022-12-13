export default function (state="undefined", action) {
    
    const municipiosAssociados = () => {
        
        const arrayMunicipios = [] 
        var i = 0;

        for(i = 0; i < action.payload.length; i++) {
            
            const object = new Object();
            object.id = action.payload[i].id;
            object.nome = action.payload[i].nome;
            arrayMunicipios.push(object);
        }
        return arrayMunicipios;
    }

    switch (action.type) {
        case 'Municipios_Relacionados':
            return  municipiosAssociados();
        
        default:
            return state
    }
}