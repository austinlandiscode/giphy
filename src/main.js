import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#searchBarArea').click(function(event) {
    const userSearch = $('#userSearch').val();
    event.preventDefault();
    
    $('#userSearch').val("");
    
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=YY3wphClz4QHa3OOXIvyoJxLr76fJ5rz&q=${userSearch}&limit=25&offset=0&rating=g&lang=en`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    let request1 = new XMLHttpRequest();
    const trendURl = "https://api.giphy.com/v1/gifs/trending?api_key=YY3wphClz4QHa3OOXIvyoJxLr76fJ5rz&limit=25&rating=g"
    
    request1.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response1 = JSON.parse(this.responseText);
        getElements(response1);
      }
    }

    request1.open("GET", trendURl, true);
    request.send();

   function getElements(response) {
    let imgLink = `${response.data[0].images.downsized.url}`;
    let imgLink1 = `${response.data[1].images.downsized.url}`;
    let imgLink2 = `${response.data[2].images.downsized.url}`;
    let trending1 = `${response.data[0].images.downsized.url}`;
    // console.log(imgLink);
    $('#showGiphs').html("<img src=\"" + imgLink + "\">");
    $('#showGiphs1').html("<img src=\"" + imgLink1 + "\">");
    $('#showGiphs2').html("<img src=\"" + imgLink2 + "\">");
    $('#showTrending').html("<img src=\"" + trending1 + "\">");
    };
  });
});