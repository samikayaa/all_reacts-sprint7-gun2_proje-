import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


export default function Login() {

    /* ReadMe'deki görev listesini burada yapabilirsin. */

    //useHistory kullanmak istediğinde bunu önce bir "history" değişkenine tanımlamak gerekiyor.
    let history = useHistory();

    function handleClick() {
        history.pushState("/home"); /*burada history.goBack(); hook'u da kullanılabilirdi.*/
    };

    const initialForm = {
        email: "",
        password: "",
        terms: false,
    }

    const [form, setForm] = useState(initialForm);

    function handleChange(event) {
        const { name, value } = event.target // bu kod name yerine email, value yerine değerini alıyor. Tabi bunu password için de yapıyor.
        setForm({ ...form, [name]: value }) //form içerisine de eski verileri kaybetmeden; yeni bilgileri ekliyorum.
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios
            .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
            .then((response) => {
                // burada api'deki kullanıcı bilgileri ile formdan gelen kullanıcı bilgilerini karşılaştırıyorum.
                const user = response.data.find((i) => { i.password == form.password && i.email == form.email });

                // yine then içinde 
                if (user) { //user true ise if'e giriyorum.
                    setForm(initialForm); //initialForm'u neden tekrar atamamız gerektiğini biraz anlamadım. :) 
                    history.push("/main")
                } else {
                    history.push("/error")
                }
            })
            .catch((error) => { console.log(error) })
    }



    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Enter your password "
                    type="password"
                />
            </FormGroup>
            <Button color="primary">Sign In</Button>

            <button type="button" onClick={handleClick}>Go Home</button>

        </Form>
    );
}
