import { MdDashboard, MdCenterFocusStrong, MdLibraryBooks, MdQuestionAnswer } from "react-icons/md"
import { FiMonitor } from "react-icons/fi"
import { IoMdNotificationsOutline } from "react-icons/io"
import { FaUserGraduate } from "react-icons/fa"

import dashboard_icon from "../assets/dashboard_icon.svg"
import exclusive_icon from "../assets/exclusive_icon.svg"
import mycourses_icon from "../assets/mycourses_icon.svg"
import advsior_icon from "../assets/advsior_icon.svg"
import pluralcodetv_icon from "../assets/pluralcodetv_icon.svg"
import notification_icon from "../assets/notification_icon.svg"
import profile_icon from "../assets/profile_icon.svg"
import logout_icon from "../assets/logout_icon.svg"

const sidebardata = [
    {
        title: "Dashboard",
        icon: dashboard_icon,
        link: "/student/dashboard"

    },
    {
        title: "Exclusive",
        icon: exclusive_icon,
        link: "/"
    },
    {
        title: "My Courses",
        icon: mycourses_icon,
        link: "/"
    },
    {
        title: "Student Advisors",
        icon: advsior_icon,
        link: "/"
    },
    {
        title: "Pluralcode TV",
        icon: pluralcodetv_icon,
        link: "/"
    },
    {
        title: "Notifications",
        icon: notification_icon,
        link: "/"
    },
    {
        title: "Profile",
        icon: profile_icon,
        link: "/"
    }
]


export default sidebardata;