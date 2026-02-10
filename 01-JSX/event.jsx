function handleClick() {
    alert("Vous avez cliqué sur le bouton !");
}
 const button = <button onClick={handleClick}>Click me</button>;
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(button);
 // deuxieme version

 function handlesubmit() {
     function handleClick(){
        alert("vous avez clique sur le boutton !");
     }
     return(
        <button> <button/>
     )
 }



//Il est important de noter que les événements React sont nommés en camelCase, 
// plutôt qu'en minuscules comme les événements HTML. 
// De plus, avec JSX vous passez une fonction comme gestionnaire d'événements, 
// plutôt que d'écrire du code directement dans l'attribut de l'événement.