var GRAY_ICON = './images/spaceship.png';

window.TrelloPowerUp.initialize({
    'attachment-sections': function (t, options) {
        const entries = options.entries;
        return [{
            id: 'Attachments',
            icon: GRAY_ICON,
            title: 'Ejemplo de Attachments',
            claimed: entries,
            content: {
                type: 'iframe',
                url: t.signUrl('./section'),
                height: 500
            }
        }];
    }
});