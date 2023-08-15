import React from 'react';


function Song(props) {
    const {song, editSong, newSongName, handleNewSongName, handleUpdateSong, handleRemoveSong, setEditSong} = props;
    return (
        <>
            <li key={song.id} className='list-group-item list-group-item-secondary d-flex align-items-center justify-content-between '>

                {
                    (editSong && editSong.id === song.id) ? (
                        <>

                            <input type="text" value={newSongName || song.name} className='form-control' style={{ width: '90%' }}
                                onInput={handleNewSongName} />
                            <div>
                                <i role="button" className='fa fa-save text-warning me-2'
                                    onClick={() => handleUpdateSong(song)}></i>
                                <i role="button" className='fa fa-times text-danger'
                                    onClick={() => setEditSong()}></i>
                            </div>
                        </>
                    ) : (
                        <>
                            <span>{song.id}. {song.name}</span>
                            <div>
                                <i role="button" className='fa fa-edit text-warning me-2'
                                    onClick={() => setEditSong(song)}></i>
                                <i role="button" className='fa fa-trash text-danger'
                                    onClick={() => handleRemoveSong(song)}></i>
                            </div>
                        </>
                    )

                }


            </li>
        </>
    );
}

export default Song;