import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphySearch from './giphy.js';

$('#searchBarArea').click(function(event) {
  event.preventDefault();
  const userSearch = $('#userSearch').val();
  $('#userSearch').val("");
  let promise = GiphySearch.findGiph(userSearch);
  promise.then(function(response) {
    const body = JSON.parse(response);
    $('#showGiphs').html(`<img src="${body.data[0].images.downsized.url}">`);
    $('#showGiphs1').html(`<img src="${body.data[1].images.downsized.url}">`);
    $('#showGiphs2').html(`<img src="${body.data[2].images.downsized.url}">`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });
});