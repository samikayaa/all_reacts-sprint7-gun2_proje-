export default function SideBar(props) {

    const { kullanicilar } = props;

    return (
        <div className="side-container">
            <h2>Users</h2>
            kullanıcılar burada listelenmeli, UserList dosyasında componentını oluşturup kullanabilirsin.
        </div>
    );
}
