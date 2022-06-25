// navbar menu toggle
var menuToggle = document.querySelector('#close-menu');
$(menuToggle).click(function () {
    if ($('.nav-tab-menu').hasClass('show-menu') && $('.strip-header-nav').hasClass('show-menu-control')) {
        $('.nav-tab-menu').addClass('hide-menu').removeClass('show-menu');
        $('.strip-header-nav').addClass('hide-menu-control').removeClass('show-menu-control');
        $('#close-menu').removeClass('fa-times');
        $('.item1').removeClass('animate__fadeInUpBig');
        $('.item2').removeClass('animate__fadeInUpBig');
        $('.item3').removeClass('animate__fadeInUpBig');
        $('.item4').removeClass('animate__fadeInUpBig');
        $('.item5').removeClass('animate__fadeInUpBig');
        $('.item6').removeClass('animate__fadeInUpBig');
    } else {
        $('.nav-tab-menu').addClass('show-menu').removeClass('hide-menu');
        $('.strip-header-nav').addClass('show-menu-control').removeClass('hide-menu-control');
        $('#close-menu').addClass('fa-times');
        $('.item1').addClass('animate__fadeInUpBig');
        $('.item2').addClass('animate__fadeInUpBig');
        $('.item3').addClass('animate__fadeInUpBig');
        $('.item4').addClass('animate__fadeInUpBig');
        $('.item5').addClass('animate__fadeInUpBig');
        $('.item6').addClass('animate__fadeInUpBig');
    }
})

for (let i = 0; i > 6; i++) {
    let category = document.querySelector('.item' + i + '>a').innerHTML
    console.log(category);
}

async function findMovie(category) {
    let data = await fetch('https://api.themoviedb.org/3/movie/' + category + '?api_key=eba8b9a7199efdcb0ca1f96879b83c44')
    let finalData = await data.json();
    // await getMovies();
    console.log(finalData);
    let movieContainer = [];
    for (let i = 0; i < finalData.results.length; i++) {
        let allMovies = `
     <div class="col-md-6 col-lg-4 my-3 myM  shadow">
                    <div class="movie shadow rounded position-relative">
                        <div class="post">
                            <img src="https://image.tmdb.org/t/p/w500${finalData.results[i].poster_path}"
                                class="img-fluid rounded">
                            <div class="layer d-flex align-items-center ">
                                <div class="info p-0">

                                    <h2>${finalData.results[i].original_title}</h2>
                                    <p>${finalData.results[i].overview}</p>
                                    <p>rate: ${finalData.results[i].vote_average}</p>
                                    <p>${finalData.results[i].release_date}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    `
        movieContainer += allMovies
    }
    document.getElementById('rowData').innerHTML += movieContainer


    // document.getElementById('allMovies').addEventListener('keyup', function () {
    //     let test = document.getElementById('allMovies').value

    //     let findTarget = finalData.results[test].title
    //     console.log(findTarget);
    // })

}



// for (var i = 0; i < categorylinks.length; i++) {
//     categorylinks[i].addEventListener("click", function (e) {
//         "Now playing" == (category = e.target.innerHTML) && (URL = NowURL, getMovies()), "Popular" == category ? (URL = popularURL, getMovies()) : "Top Rated" == category ? (URL = topratedURL, getMovies()) : "Latest" == category ? (URL = latestURL, getMovies()) : "Trending" == category ? (URL = trendingURL, getMovies()) : "Upcoming" == category && (URL = upcomingURL, getMovies())
//     })
// };

findMovie('now_playing');