import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from 'react-icons/md'
import { deleteBooking } from '../services/actions'

interface RootState {
    data: BookingData[]
}

export interface BookingData {
    id?: number
    date: Date | null
    from: string
    guests: number
    ticketclassName: 'Economy' | 'Business'
    to: string
}

const Table = () => {
    const data = useSelector((state: RootState) => state.data)
    const dispatch = useDispatch()

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(deleteBooking(parseInt(e.currentTarget.id)))
    }

    return (
        <>
            {data.length > 0 && (
                <div className="max-w-6xl mx-auto mt-5 bg-white">
                    <div className="overflow-x-auto ">
                        <table className="table">
                            <thead className="bg-slate-300 text-black rounded-sm">
                                <tr>
                                    <th>DE</th>
                                    <th>A</th>
                                    <th>VOYAGE DATE</th>
                                    <th>PERSONNES</th>
                                    <th>CLASSE</th>
                                    <th>SUPPRIME</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((booking: BookingData, i: number) => (
                                    <tr key={i}>
                                        <td>{booking.from}</td>
                                        <td>{booking.to}</td>
                                        <td>{booking.date?.toString()}</td>
                                        <td>{booking.guests}</td>
                                        <td>{booking.ticketclassName}</td>
                                        <td>
                                            <button
                                                className="btn-xs bg-red-500 text-white"
                                                id={`${booking.id}`}
                                                onClick={(e) => handleDelete(e)}
                                            >
                                                {' '}
                                                <MdDelete />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    )
}

export default Table
