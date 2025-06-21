import { useState } from "react"


export default function UserListss2(props) {

    const kullanıcılar = { props };

    return (
        kullanıcılar.map((kullanıcı, index) => (
            <div key={index}>
                {kullanici.adSoyad}
            </div>
        ))
    )
}