console.log("appis runingn")

 const app = {
     title: "aaa",
     subtitle: "bbb",
     options: []
 };

 const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
 }

 const Remove = () => {
     app.options = [];
     renderTemplate();
 }

 const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option);
 }


//  const template3 = (
//      <div>
//          {app.subtitle ? <h1>{app.subtitle}</h1> : <h1>{app.title}</h1>}
//          <p>{ app.options.length > 0 ? 'Here are your options' : 'No option' }</p>
//      </div>
//  )

 const appRoot = document.getElementById('app');

 const numbers = [55, 101, 1000];

 const renderTemplate = () =>  {
     const templatethree = (
        <div>
            <h1>Indecision App</h1> 
            <p>this is some info</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should I do?</button>
            <button onClick={Remove}>Remove all</button>
            {
                // numbers.map((number) => {
                //     return <p key={number}> Number: {number}</p>;
                // })
            }
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
     )
     ReactDOM.render(templatethree, appRoot)
 };

 renderTemplate();

//  const user = {
//      name: 'tomoharu',
//      age: 27,
//      location: 'Tokyo'
//  };

//  function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
//  }
//  let userName = 'Mike';
//  let userAge = 29;
//  let userLocation = 'New York'
//  const template2 = (
//      <div>
//          <h1>{user.name ? user.name : 'Anonymous'}</h1>
//          {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//          {getLocation(user.location)}
//      </div>
//  );



// ReactDOM.render(template, appRoot);