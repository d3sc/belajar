// Jika menggunakan ajax

// $(".search-button").on("click", function () {
//   $.ajax({
//     url: "http://www.omdbapi.com/?apikey=607a65e6&s=" + $(".input-keyword").val(),
//     success: (results) => {
//       const movies = results.Search;
//       let cards = "";
//       movies.forEach((m) => {
//         cards += showCards(m);
//       });
//       $(".movie-container").html(cards);

//       // ketika tombol details di-klik
//       $(".modal-detail-button").on("click", function () {
//         $.ajax({
//           url: "http://www.omdbapi.com/?apikey=607a65e6&i=" + $(this).data("imdbid"),
//           success: (m) => {
//             const movieDetail = showDetailsMovie(m);
//             $(".modal-body").html(movieDetail);
//           },
//           error: (e) => {
//             alert(`Code Error! = ${e.responseText}`);
//           },
//         });
//       });
//     },
//     error: (e) => {
//       alert(`Code Error! = ${e.responseText}`);
//     },
//   });
// });

// Jika menggunakan vanila Javascript

// const searchButton = document.querySelector(".search-button");

// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   fetch("http://www.omdbapi.com/?apikey=607a65e6&s=" + inputKeyword.value)
//     .then((response) => response.json()) /* ini untuk membuat tipe data promise menjadi object, dan json() itu adalah method jadi setiap method harus menggunakan () */
//     .then((response) => {
//       const movies = response.Search; /* ini untuk mengambil search dan dimasukan ke dalam variable movie */
//       let cards = ""; /* membuat variable let kosong agar dapat diisi dengan cards */
//       movies.forEach((m) => (cards += showCards(m))); /* Melakukan pengulangan pada variable movies dan setiap diulang masukan function showcards yang berparameter m ( judul film yang dicari ) */

//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards; /* memasukan isi dari variable cards kedalam html dibagian movie-container */

//       // Ketika tombol show detail diklik
//       const modalDetailButton = document.querySelectorAll(".modal-detail-button");

//       // Karena modalDetailButton bersifat array yang banyak. maka harus diberika event ditiap tiap button nya.
//       modalDetailButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const imdbid = this.dataset.imdbid;
//           fetch("http://www.omdbapi.com/?apikey=607a65e6&i=" + imdbid)
//             .then((response) => response.json())
//             .then((m) => {
//               const movieDetail = showDetailsMovie(m);
//               const modalBody = document.querySelector(".modal-body");

//               modalBody.innerHTML = movieDetail;
//             });
//         });
//       });
//     });
// });

// meringkas kode javascript dengan menambahkan lebih banyak function

// Error Handling
/* Jika Unauthorized = API keynya salah,
  NetworkError when attempting to fetch resource. = Link bagian url fetch nya salah,
  Jika Incorrect IMDb ID = Input tidak di isi,
  Jika Movie not found! = Film tidak ditemukan */

const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value);
    updateUi(movies);
  } catch (err) {
    tampilkanError(err);
    // alert(err);
  }
});

function tampilkanError(err) {
  const alertMsg = document.querySelector(".alert-msg");
  const alertPopup = document.querySelector(".alert");
  const btnClose = document.querySelector(".btn-close");
  alertMsg.innerHTML = err;
  alertPopup.style.transform = "translateY(0px)";
  btnClose.addEventListener("click", () => (alertPopup.style.transform = "translateY(-80px)"));
  setTimeout(() => {
    alertPopup.style.transform = "translateY(-80px)";
  }, 3000);
}

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=607a65e6&s=" + keyword) /* error yang ditangkap oleh fetch hanyalah error yang terdapat pada url saja. */
    .then((response) => {
      if (!response.ok) {
        // console.log(response);
        throw new Error(response.statusText); /* Bagian error ini akan dilempar dan akan ditangkap oleh catch di baris 79. */
      }
      return response.json(); /* menggunakan return untuk mengembalikan nilai respons.json(); */
    }) /* ini untuk membuat tipe data promise menjadi object, dan json() itu adalah method jadi setiap method harus menggunakan () */
    .then((response) => {
      /* Jika response berisi nilai False maka akan masuk kedalam if */
      if (response.Response === "False") {
        throw new Error(response.Error); /* lempar error baru dan diisi dengan response bagian error nya. */
      }
      return response.Search; /* Jika tidak error kembalikan nilai response.Search */
    });
}

function updateUi(movies) {
  let cards = ""; /* membuat variable let kosong agar dapat diisi dengan cards */
  movies.forEach((m) => (cards += showCards(m))); /* Melakukan pengulangan pada variable movies dan setiap diulang masukan function showcards yang berparameter m ( judul film yang dicari ) */

  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards; /* memasukan isi dari variable cards kedalam html dibagian movie-container */
}

// Event binding

// Menyeleksi seluruh yang ada di dalam document
document.addEventListener("click", async function (e) {
  // event akan jalan jika target mempunyai class name yang bernama modal-detail-button.
  if (e.target.classList.contains("modal-detail-button")) {
    try {
      const imdbid = e.target.dataset.imdbid;
      const movieDetail = await getMovieDetail(imdbid);
      updateUiDetail(movieDetail);
    } catch (err) {
      tampilkanError(err);
    }
  }
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=607a65e6&i=" + imdbid)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((m) => m);
}

function updateUiDetail(m) {
  const movieDetail = showDetailsMovie(m);
  const modalBody = document.querySelector(".modal-body");

  modalBody.innerHTML = movieDetail;
}

function showCards(m) {
  return `<div class="col-md-4 my-5">
                <div class="card">
                <img src="${m.Poster}" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-5 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary pb-2 modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                </div>
                </div>
            </div>`;
}

function showDetailsMovie(m) {
  return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid" />
                    </div>
                    <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                        <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                        <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                        <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                        <li class="list-group-item"><strong>Released : </strong> ${m.Released}</li>
                        <li class="list-group-item"><strong>Runtime : </strong> ${m.Runtime}</li>
                        <li class="list-group-item"><strong>imdbRating : </strong> ${m.imdbRating}</li>
                        <li class="list-group-item"><strong>Plot : </strong> ${m.Plot}</li>
                    </ul>
                    </div>
                </div>`;
}
