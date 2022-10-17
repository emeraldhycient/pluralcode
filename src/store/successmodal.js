import create from 'zustand'

const successmodal = create((set) => ({
    modal: false,
    toggleModal: () => set((state) => ({
        modal: !state.modal
    })),


}))



export default successmodal;