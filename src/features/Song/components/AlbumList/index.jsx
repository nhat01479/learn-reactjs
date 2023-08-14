import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({albumList}) {
    return (
           <>
                {albumList.map(album => (
                    <Album album={album}/>
                ))}
            </> 
    );
}

export default AlbumList;