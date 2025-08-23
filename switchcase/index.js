const color = 'light'
let colorMode;
switch (color) {
    case 'dark':
        colorMode = 'black'
        break
    case 'light':
        colorMode = 'white'
        break;
    case 'purple':
        colorMode = 'purple'
        break;
    default:
        colorMode = 'Invalid color'
}

console.log(colorMode)