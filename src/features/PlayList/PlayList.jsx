import React, { useEffect, useState } from 'react';
import Song from './Song';


function PlayList() {
    let data = [];
    const [playlist, setPlaylist] = useState(() => {
        if (localStorage.getItem('playlist') === null) {
            data = [
                {
                    id: 1,
                    name: "Chiếc khăn gió ấm"
                },
                {
                    id: 2,
                    name: "Xep đạp ơi"
                },
                {
                    id: 3,
                    name: "Thà rằng như thế"
                },
            ]
            localStorage.setItem('playlist', JSON.stringify(data));
        } else {
            data = JSON.parse(localStorage.getItem('playlist'));
        }
        return data

    })

    const [songName, setSongName] = useState("");
    const [newSongName, setNewSongName] = useState("");
    const [editSong, setEditSong] = useState(null);

    const handleAddSong = (event) => {
        event.preventDefault();

        setPlaylist((prev) => {
            let newList = [...playlist];
            newList.sort((song_1, song_2) => (song_2.id - song_1.id));
            let newId;
            if (newList.length !== 0) {
                newId = newList[0].id + 1;
            } else {
                newId = newList.reduce((max, current) => {
                    return current.id > max ? current.id : max;
                }, 1);
            }
            return [
                ...prev,
                {
                    id: newId,
                    name: songName
                }
            ]

        })
       

        setSongName("");
    }

    const handleRemoveSong = (song) => {
        let cf = window.confirm(`Bạn muốn xoá ${song.name}?`);
        if (cf) {
            setPlaylist((prev) => {
                let newList = prev.filter(item => item.id !== song.id);

                return newList;
            })
        }

    }

    const handleNewSongName = (event) => {
        setNewSongName(event.target.value)
    }

    const handleUpdateSong = (song) => {
        setPlaylist((prev) => {
            let newList = prev.map((item) => {
                if (item.id === song.id) {
                    item.name = newSongName || song.name
                }
                return item;
            })
            

            return newList;
        })

        setEditSong() //set lại editSong = null để khỏi render lại
        setNewSongName()
    }
    
    useEffect(() => {
        localStorage.setItem('playlist', JSON.stringify(playlist));
    },[playlist])

    return (
        <div className='container'>
            <div className='d-flex flex-column justify-content-center align-items-center '>
                <div className='col-6 mb-2'>
                    <form >
                        <h1 className='text-center mb-2 '>Playlist</h1>
                        <div className='d-flex'>
                            <input type="text" className='form-control'
                                onInput={(e) => setSongName(e.target.value)}
                                name="songName"
                                value={songName} />
                            <button className='btn btn-primary'
                                onClick={handleAddSong}>
                                <i className='fa fa-plus'>Add</i>
                            </button>
                        </div>
                    </form>
                </div>

                <div className='col-6'>
                    <ul className='list-group'>


                        {
                            playlist.map((song) => (
                                <Song key={song.id} song={song}
                                      editSong={editSong}
                                      newSongName={newSongName}
                                      handleNewSongName={handleNewSongName}
                                      handleRemoveSong={handleRemoveSong}
                                      handleUpdateSong={handleUpdateSong}
                                      setEditSong={setEditSong}
                                />
                               
                            ))
                        }


                    </ul>

                </div>

            </div>
        </div>
    );
}

export default PlayList;