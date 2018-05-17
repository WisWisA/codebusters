var $titlelateBtn = $('.titlelate-btn')
var $titleDiv = $('.title-div')
var $keywordInput = $('.keyword-input')

$titlelateBtn.on('click', (event) => {
  event.preventDefault();

  function showTitle(resp) {
    $titleDiv.text(resp.title)
  }
  
  // fetch title from api
  const options = {
    url: 'http://localhost:7777/api/random_title',
    data: { 
      keyword: $keywordInput.val() 
    }
  }

  $.ajax(options).done(showTitle)

})