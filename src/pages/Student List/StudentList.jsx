import React from 'react'
import Table from '../../components/Table/Table'
import './studentlist.scss'
import PersonIcon from '@mui/icons-material/Person';
import useFetch from '../../Hooks/useFetch';
const StudentList = () => {
    const { loading, error, data } = useFetch('http://localhost:5000/api/student/all');

    if (data)
        console.log(data.student);
    if (loading) {
        return <p>Loading....</p>
    }
    if (error) {
        return <p>Error....</p>
    }
    return (
        <div className='studentlist'>
            <div className="top">

                <h1>Student List</h1>
                <PersonIcon className='icon' />
            </div>

            {data && <Table data={data.student}></Table>}
        </div>
    )
}

export default StudentList
