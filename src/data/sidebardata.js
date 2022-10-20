import dashboard_icon from "../assets/dashboard_icon.svg"
import courses_icon from "../assets/courses_icon.svg"
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
        title: "Courses",
        icon: courses_icon,
        children: [
            {
                title: "Data school",
                link: "/student/dashboard/data"

            },
            {
                title: "Product School",
                link: "/student/dashboard/product"

            },
            {
                title: "Programming School",
                link: "/student/dashboard/programming"

            },
            {
                title: "Cloud school",
                link: "/student/dashboard/cloud"

            },
        ]
    },
    {
        title: "Exclusive",
        icon: exclusive_icon,
        link: "/"
    },
    {
        title: "My Courses",
        icon: mycourses_icon,
        link: "/student/mycourses/"
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