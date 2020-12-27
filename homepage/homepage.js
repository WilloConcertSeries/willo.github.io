console.log('hihay')


document.getElementById('menu-1').addEventListener('click', function(){
    document.getElementById('big-menu').classList.add('toggle-open')
    console.log('doggo');
})
document.getElementById('big-menu-close').addEventListener('click', function(){
  document.getElementById('big-menu').classList.remove('toggle-open');
})


    
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

