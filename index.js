document.querySelector('.red').addEventListener('click', load)
async function load(){
    const url = 'https://api.thecatapi.com/v1/images/search?size=full'
    const response = await fetch(url)
    const data = await response.json()
    const ul = document.querySelector('#list')
    console.log(data)
    const html = data.map(function(photo){
        return `
        <li style="max-height: 800px; max-width: 1000px; min-height: auto; min-width: auto">
            <h5>${photo.id}</h5>
            <img src="${photo.url}">
        
        </li>
        
        `
    })
    ul.insertAdjacentHTML('afterbegin', html.join(' '))
}
