import { useState } from "react"

export default function UserListss2(props) {

    const kullanicilar = { props };

    return (
        kullanicilar.map((kullanici, index) => (
            <div key={index}>
                {kullanici.adSoyad}
            </div>
        ))
    )
}