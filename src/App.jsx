import './App.css'
import TeamCard from './components/TeamCard'
import TeamList from './components/TeamList'
import Header from './components/Header'
import Footer from './components/Footer'

//JSX = javaScript mixed with Html

//component in code: a function that returns JSX(JavaScript + HTML)
// function add (a,b){
  // return a + b // returns single values: vanilla js
// }

// function multiply(a,b){
  // return a * b//returns product single value
// }

function App(){
  //being App is the parent/root component, then i will load my data
  //i.e data should be fetched on the parent component
  //data lives at the top of the tree(single source of truth i.e reduces data accessibility by restricting 
  // multiple data fetches in different components)
  //data once fetched can be shared to other components

  // const sum = add(20, 30)
  // const product = multiply(20, 30)
  const title = "Meet our Team"
  const slogan = "The Best Team in the world!"
  const teamMembers = [
    {id: 1, name: "Korir Kipsang", role: "Managing Director"},
    {id: 2, name: "Miriam Cherotich", role: "CEO "},
    {id: 3, name: "Neema Hazel", role: "Support Engineer"}
  ]

  return(
    //nest other components inside this jsx return
    //rule  nest return inside a container(react fragments, <></> or <div></> semantics)
    //html + js code
    <div className='app'>
      {/* place elements in the order of appearance */}
      {/* to call a component, use the component name inside the container <componentName/>  */}
      {/* <button>{product}</button> */}
      {/* <p>{sum}</p> */}
      {/* <button>My First component</button> */}
      {/* Sharing of information from parent to child is called  props drilling */}
      {/* a prop is an attribute for a component */}
      <Header title = {title} subtitle = {slogan}/>
      <TeamList members = {teamMembers}/>
      <Footer year = {2026}/>
    </div>
  )
}

export default App
