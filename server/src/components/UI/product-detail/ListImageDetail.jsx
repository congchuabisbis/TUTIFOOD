
const ListImageDetail = ({ listImg, setImg }) => {
    return (
        <div className="list-img">
            {
                listImg?.map(item =>
                    <div key={item}
                        style={{ marginRight: '16px', cursor: 'pointer', position: 'relative', width: '150px', height: '120px' }}
                        onClick={() => setImg(item)}
                    >
                        <img
                            className="img-item"
                            src={item}
                        />
                    </div>)
            }

        </div>
    )

}

export default ListImageDetail