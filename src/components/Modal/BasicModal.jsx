import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import useFetch from '../../Hooks/useFetch';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ id }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { loading, error, data } = useFetch('http://localhost:5000/api/student/' + id);
    if (data)
        console.log(data.student);
    if (loading) {
        return <p>Loading....</p>
    }
    if (error) {
        return <p>Error....</p>
    }
    return (
        <div>
            <Button onClick={handleOpen}>Show Details</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Student Information
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {data && <div className="data">
                            <p>First Name : {data.student.firstname}</p>
                            <p>Last Name : {data.student.lastname}</p>
                            <p>University : {data.student.university}</p>
                            <p>GPA : {data.student.gpa}</p>
                            <p>Year : {data.student.year}</p>
                            <p>City : {data.student.city}</p>
                            <p>Country : {data.student.country}</p>
                            <p>Address : {data.student.address}</p>
                            <p>Additional Information : {data.student.addinfo}</p>
                        </div>}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
