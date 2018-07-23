
const someoneIsThere = true;

const sendMessage = new Promise(
    function (resolve, reject) {
        console.log('sending message');
        if (someoneIsThere) {
            const message = {
                title: 'message title',
                'message': 'sweet things'
            };
            resolve(message);

        } else {
            const voiceMail = new Error("sorry i missed your call");
            reject(voiceMail);
        }
    }
)

const haveConversation = () => {
    sendMessage
        .then(function (fulfilled) {
            console.log('fulfilled:', fulfilled);
        })
        .catch(function (error) {
            console.log('error:', error);
        })
}

haveConversation();