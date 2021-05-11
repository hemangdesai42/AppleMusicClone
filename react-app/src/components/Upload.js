import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './upload.css'

const UploadMusic = () => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const [song, setSong] = useState(null);
    const [songLoading, setSongLoading] = useState(false);
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')



    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("song", song);
        formData.append("artist", artist);
        formData.append("album", album);
        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setSongLoading(true);

        const res = await fetch('/api/upload', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            await res.json();
            setSongLoading(false);
            history.push("/");
        }
        else {
            setSongLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("error");
        }
    }

    const updateSong = (e) => {
        const file = e.target.files[0];
        setSong(file);
    }

    return (
        <main>
            <div className='page'>
                <div className='upload'>
                    <form className='uploadForms' onSubmit={handleSubmit}>
                        <div>
                        <div className='title'>Upload Music!</div>
                        <input
                        className='song'
                            type="file"
                            accept="song/*"
                            onChange={updateSong}
                        /></div>
                        <br></br>
                        <div>
                        <textarea
                            className='artistArea'
                            type='text'
                            placeholder='Artist'
                            value={artist}
                            onChange={(e) => setArtist(e.target.value)}
                        /></div>
                        <br></br>
                        <div><textarea
                            className='albumArea'
                            type='text'
                            placeholder='Album'
                            value={album}
                            onChange={(e) => setAlbum(e.target.value)}
                        /></div>
                        <br></br>
                        <button className='submit' type="submit">Submit</button>
                        {(songLoading) && <p>Loading...</p>}
                    </form>
                </div>
            </div>
        </main>

    )
}

export default UploadMusic;