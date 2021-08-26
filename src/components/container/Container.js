const Container = ({ children }) => {
    return (
         <div className="container">
            <div className="row">
                <div className="col text-center">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Container