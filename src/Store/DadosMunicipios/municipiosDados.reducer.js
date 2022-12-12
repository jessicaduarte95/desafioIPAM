export default function (state="undefined", action) {

    switch (action.type) {
        case 'Municipios_Dados':
            return  action.payload
        
        default:
            return state
    }
}