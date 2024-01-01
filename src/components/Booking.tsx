import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeBooking } from '../services/actions'
import { FaPlus } from 'react-icons/fa'

export interface BookingData {
    id?: number
    date: Date | null
    from: string
    guests: number
    ticketclassName: 'Economy' | 'Business'
    to: string
}

interface RootState {
    data: unknown[]
}

const Book = () => {
    const data = useSelector((state: RootState) => state.data)
    // console.log(data)
    const size = data.length
    const dispatch = useDispatch()
    const [bookingData, setBookingData] = useState<BookingData>({
        date: new Date(),
        from: '',
        guests: 0,
        ticketclassName: 'Economy',
        to: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        const newBookingData: BookingData = {
            ...bookingData,
            [e.target.name]: e.target.value,
        }
        setBookingData(newBookingData)
    }

    const handleBook = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (size >= 6) {
            alert('Pas plus de 6')
        } else {
            console.log({ ...bookingData, id: size + 1 })
            if (Object.keys(bookingData).length === 5) {
                dispatch(makeBooking({ ...bookingData, id: size + 1 }))
            } else {
                alert('no')
            }
        }
    }

    return (
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form className="flex flex-col md:flex-row">
                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p>Destination From</p>
                        <div className="flex flex-row">
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="from"
                                required
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option>New York</option>
                                <option>London</option>
                                <option>Paris</option>
                                <option>Rome</option>
                            </select>
                        </div>
                    </div>

                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p>Destination To</p>
                        <div className="flex flex-row">
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="to"
                                required
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option>New York</option>
                                <option>London</option>
                                <option>Paris</option>
                                <option>Rome</option>
                            </select>
                        </div>
                    </div>

                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p>Journey Date</p>
                        <input
                            type="date"
                            className="outline-none px-2 py-2 w-full date"
                            name="date"
                            required
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p>Guests</p>
                        <div className="flex flex-row">
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="guests"
                                required
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                            </select>
                        </div>
                    </div>

                    <div className="py-1.5 px-2.5 flex-1 border-r-2">
                        <p>className</p>
                        <div className="flex flex-row">
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="ticketclassName"
                                required
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={(e) => handleBook(e)}
                        className="inline-flex items-center bg-indigo-500 text-white px-8 py-1 space-x-2"
                        type="submit"
                    >
                        <FaPlus />
                        <span className="text-sm  ">Book</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Book
