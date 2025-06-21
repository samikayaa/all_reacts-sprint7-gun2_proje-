import UserListss2 from "./UserList_ss2";

export default function SideBarss2(props) {

    const { kullanicilar } = props;

    return (
        <div className="side-container">
            <h2>Users</h2>
            <UserListss2 kullanicilar={kullanicilar} />
        </div>
    );
}
