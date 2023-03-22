import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category = "ads page") => {
    const eventTracker = (action = "click action", label = "click label") => {
        ReactGA.event({ category, action, label });
    }
    return eventTracker;
}
export default useAnalyticsEventTracker;