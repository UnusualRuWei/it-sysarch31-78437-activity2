import StudentImg from "./assets/download.jfif"

function Student(){
    
    const students = [
    {id:1,name:"John Doe",email:"john@doe.com"},
    {id:2,name:"Joestar Jonathan",email:"jo@jo.com"},
    {id:3,name:"Jarvan Demacia",email:"jar@dem.com"},
    {id:4,name:"Lee Sin",email:"lee@sin.com"},
    {id:5,name:"Lee Sin1",email:"lee1@sin.com"},
    {id:6,name:"Lee Sin2",email:"lee2@sin.com"},
    {id:7,name:"Lee Sin3",email:"lee3@sin.com"}]
    
    const Listitems = students.map(student => 
        <div className="card">
            <img className="card-image" src={StudentImg} alt="Profile Pic"></img>
            <h2 className="card-title" key={student.id}>{student.name}</h2>
            <p key={student.id}>{student.email}</p>
        </div>);

    
    return (<>{Listitems}</>);
}

export default Student