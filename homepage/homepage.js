console.log('hihay')

console.log('jj')






// MOBILE MENU

document.getElementById('menu-1').addEventListener('click', function(){
    document.getElementById('big-menu').classList.add('toggle-open')
    console.log('doggo');
})
document.getElementById('big-menu-close').addEventListener('click', function(){
  document.getElementById('big-menu').classList.remove('toggle-open');
})

// GOOGLE SHEETS TO HTML

google.charts.load('current', {packages: ['table']});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/16p7BI83By5RnO9_m5_yrBZ2w4FQ15t_-JdeeXOX_lKM/gviz/tq?output=html&usp=sharing');
    query.setQuery('SELECT A, B, C, D, E, F label A "Artist", B "Date", C "Facebook Event", D "Eventbrite", E "Spotify Link", F "IG Link" ');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);


// HTML TABLE TO SOCIALS LOGOS

// function createTextLinks_(text) {

//   return (text || "").replace(
//     /([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi,
//     function(match, space, url){
//       var hyperlink = url;
//       if (!hyperlink.match('^https?:\/\/')) {
//         hyperlink = 'http://' + hyperlink;
//       }
//       return space + '<a href="' + hyperlink + '">' + url + '</a>';
//     }
//   );
// };



   function matchString() { 
        var x = document.querySelector("#box").innerText;
        var yesmassive = x.match(/facebook.com/i); 
        // const yesmassive = 'da fuck is da facebook.com'; 
//         var nunu = x.replace("facebook.com", "peepee");
//         document.write("Output:" + nunu); 
        console.log('mamam')

        var a = document.createElement('a');
        a.href = yesmassive;
        a.innerText = "Facebook";
    
        // do the replacement
        x.innerHTML = ''; // clear the old contents of the reference
        x.appendChild(a); // append the new anchor tag into the element

    } matchString(); 
        



    
// $.get('https://spreadsheets.google.com/feeds/list/16p7BI83By5RnO9_m5_yrBZ2w4FQ15t_-JdeeXOX_lKM/od6/public/basic?alt=json', function(data)
// {console.log(data)})

// fetch("https://spreadsheets.google.com/feeds/list/16p7BI83By5RnO9_m5_yrBZ2w4FQ15t_-JdeeXOX_lKM/od6/public/basic?=json")
// .then(response => {
//    return response.json();
// })
// .then(data => console.log(data));

// const myIframe = document.getElementById("googleSheet");
// function changeStuff () {
//     const iframeWindow = myIframe.contentWindow;

//     console.log(iframeWindow)
// }

