import React, { useState } from 'react'
import Header from './Header'
import TableUsers from './TableUsers'
import { Container } from 'react-bootstrap'
import ModalAddNew from './ModalAddNew'

const AdminPage = () => {

    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

    const handleClose = () => {
        setIsShowModalAddNew(false);
    }

  return (
    <div className='app-container'>
        <Header />
        <Container>
            <div className='my-3 add-new'>
                <span><b>Danh sach nguoi dung</b></span>
                <button className='btn btn-primary' onClick={() =>setIsShowModalAddNew(true)}>Them nguoi dung</button>
            </div>
            <TableUsers />
        </Container>
        <ModalAddNew show = {isShowModalAddNew} 
        handleClose = {handleClose} />
    </div>
  )
}

export default AdminPage