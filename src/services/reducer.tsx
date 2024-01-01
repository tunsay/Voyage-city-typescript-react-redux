import { Action } from 'redux'
import { BOOKING, DELETE } from './actionTypes'

interface BookingState {
    data: Array<string | Date | number> // Replace with the appropriate types for your data
}

interface BookingAction extends Action {
    type: typeof BOOKING | typeof DELETE
    payload: string | Date | number // Replace with the appropriate types for your data
}

const initialState: BookingState = {
    data: [],
}

export const makeBooking = (data: string | Date | number): BookingAction => {
    return {
        type: BOOKING,
        payload: data,
    }
}

export const deleteBooking = (id: number): BookingAction => {
    return {
        type: DELETE,
        payload: id,
    }
}

const bookingReducer = (
    state: BookingState = initialState,
    action: BookingAction
): BookingState => {
    switch (action.type) {
        case BOOKING: {
            const newData = [...state.data]
            newData.push(action.payload)
            return { data: newData }
        }
        case DELETE: {
            const filteredData = state.data.filter((d) => d !== action.payload)
            return { data: filteredData }
        }
        default:
            return state
    }
}

export default bookingReducer
