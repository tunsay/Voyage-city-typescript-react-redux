import './App.css'
import Booking from './components/Booking'
import Header from './components/Header'
import Table from './components/Table'

function App() {
    return (
        <div className="bg-red-100">
            <Header />
            <section className="h-screen">
                <Booking />
                <Table />
            </section>
        </div>
    )
}

export default App
