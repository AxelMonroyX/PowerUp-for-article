var t = window.TrelloPowerUp.iframe();
t.render(() => {
    t.card('attachments')
        .get('attachments')
        .then((attachments) => {

        })
        .then(() => {
            return t.sizeTo('#content');
        });
});