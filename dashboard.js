let dashboard = () => {
  const dashBody = document.getElementById('body');
  dashBody.addEventListener('arrowClick', function(){
    console.log('arrow clicked!');
  }, true);
};

document.addEventListener('DOMContentLoaded', dashboard, false);
