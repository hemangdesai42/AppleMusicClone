import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './upload.css'

const UploadMusic = () => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const [songItself, setSongItself] = useState(null);
    const [songLoading, setSongLoading] = useState(false);
    const [name, setName] = useState('')
    const [artistName, setArtistName] = useState('')
    const [albumName, setAlbumName] = useState('')
    const [albumImage, setAlbumImage] = useState(null)
    const [artistImage, setArtistImage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("songItself", songItself);
        formData.append("name", name);
        formData.append("artistName", artistName);
        formData.append("artistImage", artistImage);
        formData.append("albumName", albumName);
        formData.append("albumImage", albumImage);
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
            history.push("/home");
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
        setSongItself(file);
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setAlbumImage(file);
    }

    const updateImage1 = (e) => {
        const file = e.target.files[0];
        setArtistImage(file);
    }

    return (
        <main>
            <div className='page'>
                <div className='upload'>
                    <form className='uploadForms' onSubmit={handleSubmit}>
                        <div className='title'>Upload a Song!</div>
                        <div className='inputs'>
                        <div><input
                            className='songfile'
                            name="songfile" 
                            id="songfile"
                            type="file"
                            accept="song/*"
                            onChange={updateSong}
                            /><label className='songFile' for="songfile">Choose a Song File  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1f1f1f" className="upload" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                            </svg></label>
                        </div>
                        <br></br>
                        <div>
                        <input
                            className='songName'
                            type='text'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        /></div>
                        <br></br>
                        <div><input
                            className='artistArea'
                            type='text'
                            placeholder='Artist Name'
                            value={artistName}
                            onChange={(e) => setArtistName(e.target.value)}
                        /></div>
                        <br></br>
                        <div><input
                            className='artistImage1'
                            name="artistImage1"
                            id="artistImage1"
                            type="file"
                            accept="image/*"
                            onChange={updateImage1}
                            /><label className='artistImageArt' for="artistImage1">Choose an Artist Image<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1f1f1f" className="upload1" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                            </svg></label>
                        </div>
                        <br></br>
                        <div><input
                            className='albumArea'
                            type='text'
                            placeholder='Album Title'
                            value={albumName}
                            onChange={(e) => setAlbumName(e.target.value)}
                        /></div>
                        <br></br>
                        <div><input
                            className='albumImageUpload'
                            name="albumImageUpload"
                            id="albumImageUpload"
                            type="file"
                            accept="image/*"
                            onChange={updateImage}
                            /><label className='albumImage' for="albumImageUpload">Choose an Album Image<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1f1f1f" className="upload1" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                            </svg></label>
                        </div>
                        <button className='submit' type="submit">Submit</button>
                        {(songLoading) && <p>Loading...</p>}
                        </div>
                    </form>
                </div>
            </div>
        </main>

    )
}

export default UploadMusic;