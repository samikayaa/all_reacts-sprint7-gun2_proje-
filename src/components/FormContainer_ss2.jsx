import axios from 'axios';
import { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';


const initialState = {
    adSoyad: '',
    email: '',
    departman: '',
    unvan: '',
    gorevler: '',
};



export default function FormContainerss2(props) {

    const { addUser } = props; //addUser isimli bir fonksiyon geldi. Bu fonksiyonu dışarıda ben yazacağım.

    const [form, setForm] = useState(initialState)

    const handleChange = (event) => {
        const { name, value } = event.target; //form içinden girilen name anahtarını ve value değerini alıyorum.

        setForm({ ...form, [name]: value }) //bunu "form" içerisine eski bilgileri bozmadan ekliyorum.
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('https://reqres.in/api/users', form)
            .then(response => {
                addUser(response.data);
                setForm(initialState);
            })
            .catch(error => console.log(error))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Ad Soyad:</Label>
                <Input
                    id="adSoyad"
                    name="adSoyad"
                    placeholder="adSoyad"
                    onChange={handleChange}

                />
            </FormGroup>
        </Form>
    )
}

