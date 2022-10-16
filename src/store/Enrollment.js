import create from 'zustand'

const enrollmentState = create((set) => ({
    enrollment: {
        selectedCourse: "",
        stage: 1
    },
    setCourse: (course) => set((state) => ({
        enrollment: {
            ...state.enrollment,
            selectedCourse: course
        }
    })),
    setEnrollmentStage: (stage) => set((state) => ({
        enrollment: {
            ...state.enrollment,
            stage: stage
        }
    })),

}))



export default enrollmentState;