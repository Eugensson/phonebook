import { useDispatch } from 'react-redux';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteContact } from 'redux/contacts/operations';

import {       
    InfoWrapper,
    ContactInfo,
    BtnWrapper,
    DeleteBtn,
} from 'components/Contact/Contact.styled';

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();   
    return (
        <>
            <InfoWrapper>
                <ContactInfo>{name}</ContactInfo>
                <ContactInfo>{number}</ContactInfo>
            </InfoWrapper>
            <BtnWrapper>
                <DeleteBtn onClick={e => dispatch(deleteContact(id))}>
                    <DeleteForeverIcon fontSize="large"/>
                </DeleteBtn>
            </BtnWrapper>            
        </>
    )
}

export default Contact;