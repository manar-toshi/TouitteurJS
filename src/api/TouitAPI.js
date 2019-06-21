 const url='http://touiteur.cefim-formation.org/'
//  function List(callback){
//        fetch(url+'list',{
//         method: 'GET',
//         })  
//         .then(response => response.text())
//         .then((responseText) => {

//           callback(responseText.message);

//         })
//         .catch((error) => {
//             console.error(error);
//         });
//     }

function Send(name, message) {
    fetch(url+'send', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded', 
        }),

        body: `name=${name}&message=${message}` 
    })
        .then((response) => response.text())
        .then((responseText) => {
            alert("votre message a été envoyé");
        })
        .catch((error) => {
            console.error(error);
        });
}
export { Send };
