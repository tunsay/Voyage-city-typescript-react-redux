import { BookingData } from '../components/Booking'
import { BOOKING, DELETE } from './actionTypes'

export const makeBooking = (data: BookingData) => {
    return {
        type: BOOKING,
        payload: data,
    }
}

export const deleteBooking = (id: number) => {
    return {
        type: DELETE,
        payload: id,
    }
}
