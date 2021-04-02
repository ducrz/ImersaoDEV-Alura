//Array das capas dos filmes
var capaFilmes= ["https://m.media-amazon.com/images/M/MV5BZGJhNWRiOWQtMjI4OS00ZjcxLTgwMTAtMzQ2ODkxY2JkOTVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOTYwNWNmM2UtNDhlOC00ZGQzLWI1MTMtMmZlMTFjM2Y1N2ZhXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZTllMjI0ZGYtM2FmZC00ZmY4LTlkNTYtZThlOWQ1OGQyZTA3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNWEzOTNjNDgtZDhhYS00ODAxLWIzNGMtYjU3OGZhYmI3ZDU4XkEyXkFqcGdeQXVyMTAzNjk5MDI4._V1_UY268_CR1,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMDRiZWUxNmItNDU5Yy00ODNmLTk0M2ItZjQzZTA5OTJkZjkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZDViMzBiNGMtZTIyNS00NzI4LWE3NDMtNmM1NDk0NzBlMWRlXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNjcyYjg0M2ItMzMyZS00NmM1LTlhZDMtN2MxN2RhNWY4YTkwXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BYjYzOGE1MjUtODgyMy00ZDAxLTljYTgtNzk0Njg2YWQwMTZhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"];

//Arrays dos nomes dos filmes com o link para IMDB
var nomeFilmesBR=["<a href='https://www.imdb.com/title/tt10272386/' target='_blank'>Meu Pai</a>", "<a href='https://www.imdb.com/title/tt9784798/?ref_=fn_al_tt_1' target='_blank'>Judas e o Messias Negro</a>", "<a href='https://www.imdb.com/title/tt9784798/?ref_=fn_al_tt_1' target='_blank'>Mank</a>", "<a href='https://www.imdb.com/title/tt10633456/?ref_=fn_al_tt_1' target='_blank'>Minari</a>", "<a href='https://www.imdb.com/title/tt9770150/?ref_=fn_al_tt_1' target='_blank'>Nomadland</a>", "<a href='https://www.imdb.com/title/tt9620292/?ref_=fn_al_tt_1' target='_blank'>Bela vingança</a>", "<a href='https://www.imdb.com/title/tt5363618/?ref_=fn_al_tt_1' target='_blank'>O som do silêncio</a>", "<a href='https://www.imdb.com/title/tt1070874/?ref_=fn_al_tt_1' target='_blank'>Os 7 de Chicago</a>"];
var nomeFilmesEN=["The Father", "Judas and the Black Messiah ", "Mank", "Minari", "Nomadland", "Promising Young Woman", "Sound of Metal", "The Trial of the Chicago 7"];

//Array de informações sobre onde assistir
var ondeAssistir=["Cinema","Cinema","<a href='https://www.netflix.com/br/title/81117189' target='_blank'>Netflix</a>","<a href='https://www.amazon.com/Minari-4K-UHD-Steven-Yeun/dp/B08WLYDH11' target='_blank'>Amazon Prime Video</a>","Cinemas","Cinemas","<a href='https://www.amazon.com/Sound-Metal-Riz-Ahmed/dp/B08KZCFW1C' target='_blank'>Amazon Prime Video</a>","<a href='https://www.netflix.com/br/title/81043755?source=35' target='_blank'>Netflix</a>"];

//Array Trailers
var trailers=["https://www.youtube.com/embed/yJW4szoZX1U?controls=0","https://www.youtube.com/embed/hX3o0kKJeZk?controls=0","https://www.youtube.com/embed/vuKEg9qgDOc?controls=0","https://www.youtube.com/embed/KQ0gFidlro8?controls=0","https://www.youtube.com/embed/_nOeh677C8U?controls=0","https://www.youtube.com/embed/51RIAEha23s?controls=0","https://www.youtube.com/embed/VFOrGkAvjAE?controls=0","https://www.youtube.com/embed/hunYgcovmjQ?controls=0"];

//Inicio For
for(var i=0; i < capaFilmes.length; i++){
  document.write("<figure><img src='"+capaFilmes[i]+"'><figcaption>EN: "+nomeFilmesEN[i]+"</figcaption><figcaption> PT-BR: "+nomeFilmesBR[i]+"</figcaption>Disponível em: "+ondeAssistir[i]+"</figure>");
    document.write("<iframe width='560' height='315' src='"+trailers[i]+"' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br>");
 
}
//Fim For

