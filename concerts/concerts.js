console.log('hihay')


document.getElementById('menu-1').addEventListener('click', function(){
    document.getElementById('big-menu').classList.add('toggle-open')
    console.log('doggo');
})
document.getElementById('big-menu-close').addEventListener('click', function(){
  document.getElementById('big-menu').classList.remove('toggle-open');
})