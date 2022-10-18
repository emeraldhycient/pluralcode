import create from 'zustand'
import { devtools, persist } from 'zustand/middleware';


const DashboardData = create((set) => (
    {
        data: {},
        storeData: (value) =>
            set((state) => ({
                data: {
                    ...state.data,
                    ...value
                }
            })),
        emptyStore: () => set((state) => ({
            data: {}
        }))
    }
))


export default DashboardData;


