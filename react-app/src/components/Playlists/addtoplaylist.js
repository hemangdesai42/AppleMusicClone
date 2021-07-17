// import React, {useState} from 'react';
// import { useDispatch } from 'react-redux'
// import { addSong } from '../../store/addPlaylistsong'

// const AddButton = (playlist_id, song_id) => {
//     const dispatch = useDispatch();
//     const [playlistId, setPlaylistId] = useState(null)
//     const [songId, setSongId] = useState(null)

//     const add = () => {
//         setSongId(song_id)
//         setPlaylistId(playlist_id)
//         dispatch(addSong(playlistId, songId))
//         setSongId(null)
//         setPlaylistId(null)
//     }

//     return (
//         <svg onClick={add} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#cf6b28" className="addSong" viewBox="0 0 16 16">
//         <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
//         </svg>
//     )
// }

// export default AddButton