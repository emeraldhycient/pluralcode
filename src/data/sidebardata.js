import { MdDashboard, MdCenterFocusStrong, MdLibraryBooks, MdQuestionAnswer } from "react-icons/md"
import { FiMonitor } from "react-icons/fi"
import { IoMdNotificationsOutline } from "react-icons/io"
import { FaUserGraduate } from "react-icons/fa"

const sidebardata = [
    {
        title: "Dashboard",
        icon: MdDashboard,
        link: "/student/dashboard"

    },
    {
        title: "Exclusive",
        icon: MdCenterFocusStrong,
        link: "/"
    },
    {
        title: "My Courses",
        icon: MdLibraryBooks,
        link: "/"
    },
    {
        title: "Student Advisors",
        icon: MdQuestionAnswer,
        link: "/"
    },
    {
        title: "Pluralcode TV",
        icon: FiMonitor,
        link: "/"
    },
    {
        title: "Notifications",
        icon: IoMdNotificationsOutline,
        link: "/"
    },
    {
        title: "Profile",
        icon: FaUserGraduate,
        link: "/"
    }
]


export default sidebardata;