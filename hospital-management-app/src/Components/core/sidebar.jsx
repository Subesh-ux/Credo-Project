export default function Sidebar() {

    return (
        <>
            <div className="col-2 bg-danger text-warning min-vh-100 p-3">

                <div className="py-3 px-2">
                    <h5 className="mb-0">Dashboard</h5>
                </div>

                <div className="py-3 px-2">
                    <h5 className="mb-0">Doctors</h5>
                </div>

                <div className="py-3 px-2">
                    <h5 className="mb-0">Patients</h5>
                </div>

                <div className="py-3 px-2">
                    <h5 className="mb-0">Appointments</h5>
                </div>

            </div>
        </>
    )
}