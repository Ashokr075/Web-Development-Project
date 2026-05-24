// songs data API fetching
let songsDataTableBody=document.querySelector("#songs_data_table_body");
let serialNumber=0;
async function fetchSongsDataAPI(){
    let songsPromiseResponse=await fetch("SongsDataAPI.json");
    let songsData =await songsPromiseResponse.json();
    Object.values(songsData)[0].map((song)=>{
        songsDataTableBody.innerHTML+=
        `
            <tr>
                <td>${++serialNumber}</td>
                <td>${song.songName}</td>
                <td>${song.singerName}</td>
                <td>${song.composerName}</td>
                <td>${song.lyricist}</td>
                <td>${song.movieName}</td>
                <td><img style="width:100px;height:100px;" src="${song.moviePoster}"></td>
            </tr>
        `;
    });
}
fetchSongsDataAPI();