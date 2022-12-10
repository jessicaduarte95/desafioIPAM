export default function (state = 0, action) {
    switch (action.type) {
        case 'DataEstados':
            return action.payload
    }
}