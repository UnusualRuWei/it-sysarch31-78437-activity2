import Content from "./Content.jsx"

function Student(){
    
    const studentListing = [
        {id:1,name:"John Doe",email:"john@doe.com"},
        {id:2,name:"Joestar Jonathan",email:"jo@jo.com"},
        {id:3,name:"Jarvan Demacia",email:"jar@dem.com"},
        {id:4,name:"Lee Sin",email:"lee@sin.com"},
        {id:5,name:"Lee Sin1",email:"lee1@sin.com"},
        {id:6,name:"Lee Sin2",email:"lee2@sin.com"},
        {id:7,name:"Lee Sin3",email:"lee3@sin.com"},
        {id:8,name:"Comlab USer",email:"Comuser@Lab.com"},
        {id:9,name:"Anita Max Wynn",email:"Drake@pisot.com"},
        {id:10,name:"Trio",email:"Comuser2@Lab.com"}]

    return (<Content students={studentListing}/>)
}

export default Student