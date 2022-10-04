import create from 'zustand'

const useNavToggle = create((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))



export default useNavToggle;