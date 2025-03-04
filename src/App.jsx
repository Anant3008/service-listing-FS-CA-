import ServiceCard from "./components/Servicecard"

function App() {

   let data=[
    {title: "Web development", des:"This is a very good field to work in if you like to build stuff and want to see immediate results."},
    {title: "DSA", des: "This course is best for people who like to think like programmers and have very good problem solving skills"}
  ]

  return (
    <div style={{textAlign: "center"}}>
      <h1>ANANT FULL STACK CA 1</h1>
      <ServiceCard props={data[0]}/>
      <ServiceCard props={data[1]}/>
    </div>
  )
}

export default App
