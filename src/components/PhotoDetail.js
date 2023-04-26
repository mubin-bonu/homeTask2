import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function PhotoDetail() {


    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const {id} = useParams()
    const [photo, setPhoto] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(response => response.json())
            .then(data => setPhoto(data))
    }, [])


    return (
        <>
            <h2>Photo</h2>
            <img src={photo.url}/>
            <button onClick={goBack}>go back</button>
        </>
    )
}