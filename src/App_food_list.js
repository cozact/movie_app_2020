import React from 'react';

function Food(props){
// function Food({name}){
    return(
        <div>
            <h2>
                I like {props.name}
            </h2>
            <img src={props.picture} alt={props.name}/>
        </div>
        // <h1>I like {props.image}</h1>
        // <h1>I like {name}</h1>
    )
}

const foodILike = [
    {
        id:1,
        name: "김치",
        image:"https://images.unsplash.com/photo-1583224944844-5b268c057b72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },{
        id:2,
        name: "삼겹살",
        image:"https://images.unsplash.com/photo-1579636858754-c1048da9c361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },{
        id:3,
        name: "비빔밥",
        image:"https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },{
        id:4,
        name: "돈까스",
        image:"https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    },{
        id:5,
        name: "김밥",
        image:"https://images.unsplash.com/photo-1534817557314-c781397d0b87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
    }
];

/*
function renderFood(dish) {
    return <Food name={dish.name} picture={dish.image} />
}
*/

function App() {
  return (
      <div>
          <h1>Hello!!!</h1>
          {/*{foodILike.map(renderFood)}*/}
          {foodILike.map(dish => (
              <Food key={dish.id} name={dish.name} picture={dish.image} />
          ))}
      </div>
  );
}

export default App;
