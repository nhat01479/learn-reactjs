import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function StudentDetail(props) {
    const { studentId } = useParams();
    const [student, setStudent] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getStudentDetail() {
            let res = await fetch(`https://js-post-api.herokuapp.com/api/students/${studentId}`)
            let studentData = await res.json();
            setStudent(studentData);
        }
        getStudentDetail();
    }, [])
    return (
        <div className="container" style={{ height: 'calc(100vh  - 205px)' }}>
            <h3 className="text-center">Student Detail</h3>

            <div className="d-flex justify-content-center">
                <div className='card col-sm-4'>
                    <h3 className='card-header'>{student.name}</h3>
                    <div className='card-body'>
                        <p><span className='fw-bolder'>ID: </span>{student.id}</p>
                        <p><span className='fw-bolder'>Age: </span>{student.age}</p>
                        <p><span className='fw-bolder'>Mark: </span>{student.mark}</p>
                        <p><span className='fw-bolder'>Gender:</span>{student.gender}</p>
                        <p><span className='fw-bolder'>City: </span>{student.city}</p>
                    </div>
                    <Link to='/student/list' className="btn btn-secondary">Back to list</Link>
                </div>
            </div>

        </div>
    );
}

export default StudentDetail;