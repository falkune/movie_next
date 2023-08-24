// la fonction getData pour juste recuperer les data elle sera utilisé dans d'autre fonctions en fonction de la requette que nous voulons executées
const getData = (url:string) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => {
            if(response.status !== 200){
                return;
            }
            response.json().then(data => {
                resolve(data)
            })
        })
        .catch(error => {
            reject(error)
        })
    })
}

export async function getMovieList(page: number){
    const url: string = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=fr&page=${page}`;
    return await getData(url);
}