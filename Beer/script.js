function getHttp(url){
return fetch(url,{
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})
    .then(response=>{return response.json()})
}

function init() {
    let url
    url='https://api.punkapi.com/v2/beers?per_page=8&page=1';

    getHttp(url).then(data => {
        let table, elm, descriptionElm, imageElm;
        table = document.createElement('table');
        table.setAttribute('border',1)

        elm = document.createElement('tr')

        descriptionElm = document.createElement('tr')

        imageElm = document.createElement('tr')

        data.forEach((item)=>{
            console.log(item);


            elm.innerHTML+="<th>"+item['name']+"</th>";

            descriptionElm.innerHTML+="<td>"+item['description']+"</td>";

            imageElm.innerHTML+="<td><img src="+item['image_url']+" width='10px' ></td>";



    })
        table.appendChild(elm);
        table.appendChild(imageElm);
        table.appendChild(descriptionElm);
        document.body.appendChild(table);
        console.log('ok');
})
}

init();