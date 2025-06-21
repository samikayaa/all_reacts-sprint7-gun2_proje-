import { useState } from "react"

export default function UserListss2(props) {

    const kullanicilar = { props };

    /*
    return (
        kullanicilar.map((kullanici, index) => (
            <div key={index}>
                {kullanici.adSoyad}
            </div>
        ))
    )
    AŞŞAĞIDAKİ GİBİ YAZILDI!
    */

    return kullanicilar.map((kullanici, index) => {
        return (
            <div key={index}>
                {kullanici.adSoyad}
            </div>
        )
    });

}
