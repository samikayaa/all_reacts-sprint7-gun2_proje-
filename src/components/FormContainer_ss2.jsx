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
                <Label for="adSoyad">Ad Soyad:</Label>
                <Input
                    id="adSoyad" //bu değer initialState içindeki değer ile aynı olmalı.
                    name="adSoyad"
                    type="text"
                    placeholder="adSoyad"
                    onChange={handleChange}
                    value={form.adSoyad}
                />
            </FormGroup>

            <FormGroup>
                <Label>Email:</Label>
                <Input
                    id="email" //bu değer initialState içindeki değer ile aynı olmalı.
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={handleChange}
                    value={form.email}
                />
            </FormGroup>

            <FormGroup>
                <Label for="departman">Departman</Label>
                <Input
                    id="departman"
                    name="departman"
                    placeholder="Çalıştığı departman"
                    type="text"
                    onChange={handleChange}
                    value={formData.departman}
                />
            </FormGroup>

            <FormGroup>
                <Label for="unvan">Ünvan</Label>
                <Input
                    id="unvan"
                    name="unvan"
                    placeholder="Çalışanın ünvanı"
                    type="text"
                    onChange={handleChange}
                    value={formData.unvan}
                />
            </FormGroup>

            <FormGroup>
                <Label for="gorevler">Takım İçi Görevleri</Label>
                <Input
                    id="gorevler"
                    name="gorevler"
                    type="textarea"
                    placeholder="Çalışanın takım içerisindeki görev listesi"
                    rows="8"
                    onChange={handleChange}
                    value={formData.gorevler}
                />
            </FormGroup>

            <Button>Kaydet</Button>

        </Form>
    )
}

