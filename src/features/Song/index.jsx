import React from 'react';
import AlbumList from './components/AlbumList';



function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Nhạc chữa buồn",
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/4/1/3/b41377b4f7b65faa4a4884b6bb529506.jpg'
        },
        {
            id: 2,
            name: "Va vào những giai điệu thư giãn của V-Pop",
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/c/c/c/4ccc7780abb5e8e2de84218f721b7ad3.jpg'
        },
        {
            id: 3,
            name: "Ở đây có những bản hit cực chill, vừa nghe vừa feel",
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/4/e/7/14e7559ebd1dfc6684761f157746106a.jpg'
        },
        {
            id: 4,
            name: "Khi bạn cần giai điệu để xoa dịu những tổn thương đã qua",
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/f/b/4/9fb49f6e8a29dec2c1715f23fb4364d9.jpg'
        },
        {
            id: 5,
            name: "Ở đây có những lựa chọn V-Pop làm bạn vui tươi không cần tưới",
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/4/7/c/447c9134cfe4248a1cfd6a0bb170f7b8.jpg'
        },
        {
            id: 6,
            name: "Hạnh phúc trong tình yêu là được bên nhau mỗi ngày",
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/d/4/e/fd4ea3ded2ef220f877559d176ae5fe8.jpg'
        },
    ]
    return (
        <>
            <div className="">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <AlbumList albumList={albumList}/>
                </div>
            </div>
        </>
    );
}

export default AlbumFeature;