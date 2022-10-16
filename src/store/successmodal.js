import create from 'zustand'

const successmodal = create((set) => ({
    modal: true,
    toggleModal: () => set((state) => ({
        modal: !state.modal
    })),


}))



export default successmodal;