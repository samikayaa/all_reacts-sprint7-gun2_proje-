import FormContainer from "./FormContainer";
import FormContainerss2 from "./FormContainer_ss2";


export default function Mainss2(props) {

    const { addUser } = props;

    return (
        <div className="products-container">
            <FormContainer />
            <FormContainerss2 addUser={addUser} />
        </div>
    )
}