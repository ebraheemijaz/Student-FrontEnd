import React from 'react'
import BasicModal from '../Modal/BasicModal'
import './table.scss'
const Table = ({ data }) => {
    console.log(data)
    const handleClick = (id) => {
        alert(`${id} clicked`)
    }
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>University</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(i => {
                        return (
                            <tr key={i._id}>
                                <td>{i.firstname}</td>
                                <td>{i.lastname}</td>
                                <td>{i.university}</td>
                                <td>
                                    <BasicModal id={i._id} />
                                    {/* <button onClick={() => handleClick(i._id)}>Show Details</button> */}
                                </td>
                            </tr>)
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Table
