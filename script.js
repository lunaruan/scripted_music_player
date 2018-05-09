

// Mild: Add an input box with an add button under the music player. Add an next song button under the playlist

/* Medium: 

1.) Add some links in the songList
2.) Add a for loop in makePlaylist to append each element in the list songList as an li in the ul so that the HTML looks like:

    <ul>
        <li>songList[0]</li>
        <li>songList[1]</li>
    </ul>
3.) Call makePlaylist and make sure the songs are being added to the playlist
*/

var songList = [];
// function makePlayList() {
//     // clears the ul so it no longer has any elements
//     $('ul').html('');
//     // add a for loop to append each element in song list as an li in the ul
// }

//

/* Hard: An iframe is an HTML tag like an a tag or img tag. It has a src attribute. You can set the value of the src attribute to the video you want to show in your music player (ex. $('iframe').attr('src', 'https://www.youtube.com/embed/CeBirl8WxMI')) and the video will show up in the box.

    Use the function you just wrote, makePlaylist, to write two click handlers:

    1.) Write a click handler for the Add button that:
        - Gets the value in the input field
        - Adds the value into the end of the songList using array.push
        - Calls makePlaylist to add the new value to the playlist on the page
    2.) Write a click handler for the Next Song button that:
        - Removes the first element of the playlist and store it in a variable using array.shift
        - set the iframe using element that you removed
        - Call makePlaylist to show the playlist on the page with the removed song
*/





// Answer: Medium
function makePlaylist() {
    $('ul').html('');
    for (var i = 0; i < songList.length; i++) {
        var song = songList[i];
        $('ul').append('<li>' + song + '</li>');
    }
}



// Answer: Hard
$('.add').click(function() {
    var val = $('input').val();
    songList.push(val);
    makePlaylist();
});

$('.next').click(function() {
    var song = songList.shift();
    $('iframe').attr('src', song);
    makePlaylist();
});
