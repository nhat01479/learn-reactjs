import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function showNumber (event, albumId) {
    alert(albumId)
}

function Album({ album }) {
    return (


        <div className="col" key={album.id} onClick={event => showNumber(event, album.id)}>
            <div className="card shadow-sm" >
                <img className="bd-placeholder-img card-img-top" src={album.thumbnailUrl} alt={album.name} width='100%' height='225px'  />
                <div className="card-body" style={{height: '70px'}}>
                    <p className="card-text">{album.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Album;

