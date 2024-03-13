import StudentImg from "./assets/download.jfif"

function Content(props){

    const studentList = props.students
        
    const Listitems = studentList.map(student => <div className="card">
                                                    <img className="card-image" src={StudentImg} alt="Profile Pic"></img>
                                                    <h2 className="card-title" key={student.id}>{student.name}</h2>
                                                    <p>{student.email}</p>
                                                </div>);

    return(<>{Listitems}</>)

}

export default Content