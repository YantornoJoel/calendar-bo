
export const LoadingPage = () => {
    return (
        <div style={{

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 100px)'
        }}>
            <h3>Cargando</h3>
            <i className="fa-solid fa-circle-notch" style={{fontSize: '30px', color: 'blue'}}></i>
        </div>
    )
}
