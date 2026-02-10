//Utiliser un conditionnel dans un composant de fonction

function TodaysPlan() {
    let task;
    let apocalypse = true;

    if (apocalypse) {
        task = 'Learn React';
    } else {
        task = 'Relax';
    }

    return (
        <div>
            <h1>Today's Plan</h1>
            <p>{task} !</p>
        </div>
    );
}
 const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(
    <TodaysPlan />
  );


