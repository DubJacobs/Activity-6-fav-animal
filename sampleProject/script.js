$(document).ready(function () {
    const $searchTerm = $('#searchTerm');
    const $numOfRecords = $('#numOfRecords');
    const $beginYear = $('#beginYear');
    const $endYear = $('#endYear');
    const $search = $('#search');
    const $clear = $('#clear');
    const apiKey = 'R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M';
    const baseUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json/?api-key=${apiKey}`;
    $(document).on('click', '#clear', function (event) {
      event.preventDefault();
      $('#articlesDiv').empty()
    });
    $(document).on('click', '#search', function (event) {
      event.preventDefault();
      const searchTerm = $searchTerm.val();
      const numOfRecords = $numOfRecords.val();
      const beginYear = $beginYear.val();
      const endYear = $endYear.val();
      $('#articlesDiv').empty();
      $.ajax({
        url: `${baseUrl}&q=${searchTerm}&begin_date=${beginYear}0101&end_date=${endYear}1231`,
        method: 'GET',
      }).then(function (response) {
        console.log(response);
        const {response: {docs}} = response;
        console.log(docs);
        console.log(numOfRecords);
        for (let i = 0; i < numOfRecords; i++) {
          const currentArticle = docs[i];
          const {
            abstract,
            byline: {original},
            pub_date,
            section_name,
            web_url,
          } = currentArticle;
          const $article = $('<div>').addClass('col-12 container');
          const $abstract = $('<p>').text(`${i + 1} ${abstract}`);
          const $author = $('<p>').text(`By ${original}`);
          const $section = $('<p>').text(`Section: ${section_name}`);
          const $pubDate = $('<p>').text(pub_date);
          const $webUrl = $('<a>').attr('href', web_url).text(web_url);
          $article.append($abstract, $author, $section, $pubDate, $webUrl);
          $('#articlesDiv').append($article);
        }
        $searchTerm.val('');
        $numOfRecords.val('');
        $beginYear.val('');
        $endYear.val('');
      });
    });
  });