import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphySearch from './giphy.js';

$(document).ready(function() {
  $('#searchBarArea').click(function(event) {
    const userSearch = $('#userSearch').val();
    event.preventDefault();

    $('#userSearch').val("");

    function getElements(response) {
      let imgLink = `${response.data[0].images.downsized.url}`;
      let imgLink1 = `${response.data[1].images.downsized.url}`;
      let imgLink2 = `${response.data[2].images.downsized.url}`;
      let trending1 = `${response.data[0].images.downsized.url}`;
      
      $('#showGiphs').html("<img src=\"" + imgLink + "\">");
      $('#showGiphs1').html("<img src=\"" + imgLink1 + "\">");
      $('#showGiphs2').html("<img src=\"" + imgLink2 + "\">");
      $('#showTrending').html("<img src=\"" + trending1 + "\">");
    }
  });
});
I