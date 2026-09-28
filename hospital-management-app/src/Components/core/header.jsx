export default function Header() {

    return (
        <>
            <div className="row bg-danger text-warning align-items-center py-3 px-4">
                <div className="col-9">
                    <h1 className="mb-0 fw-bold">
                        VETTRI HOSPITALS.
                    </h1>
                </div>

                <div className="col-3 d-flex justify-content-end">
                    <div className="bg-warning text-danger rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "45px", height: "45px", fontSize: "22px" }}>
                        <i className="bi bi-person-circle"></i>
                    </div>
                </div>
            </div>
        </>
    )
}