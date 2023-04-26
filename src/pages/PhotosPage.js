import React, { useEffect, useState } from "react";
import { Photo } from "../components/Photo";

export default function PhotosPage() {


    const [photos, setPhotos] = useState([])

    const getPhotos = async () => {
        const response = await fetch(` https://jsonplaceholder.typicode.com/photos `)
        const photos = await response.json()
        setPhotos(photos)
    }

    useEffect(() => {
        getPhotos()
    }, [])

    return (
        <>
            <h1>Photos</h1>

            {
                photos.map(photo => <Photo key={photo.id} photo={photo} />)
            }
        </>
    );
}