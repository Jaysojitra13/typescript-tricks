function handler(eventType: `on${string}`) {}

// correct inputs
handler('onClick')
handler('onkeyup')
handler('onKeydown')
handler('onEnter')


// wrong inputs
handler('clicker');
handler('escapekey');
