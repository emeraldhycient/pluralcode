import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ReactNotificationComponent = ({ title, body }) => {
    toast.info(<Display />);
    function Display() {
        return (
            <div>
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
        );
    }
    return (
        <ToastContainer />
    );
};


export default ReactNotificationComponent;