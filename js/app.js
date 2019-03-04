//light box

(function(){
    let imageList = [];
    let counter = 0;

    const images = document.querySelectorAll('.store-img')
    const container = document.querySelector('.lightbox-container');
    const item = document.querySelector('.lightbox-item');
    const closeIcon = document.querySelector('.lightbox-close');
    const btnLeft = document.querySelector('.btnLeft');
    const btnRight = document.querySelector('.btnRight');

    //add images to array
    images.forEach(function(img){
        imageList.push(img.src);    
    });

    //console.log(imageList);
    //open model

    images.forEach(function(img){
        img.addEventListener('click', function(){
            //show model
            container.classList.add('show');
            //get source of img
            let src=event.target.src;
            //console.log(src);
            counter=imageList.indexOf(src);
            //console.log(counter);
            //show model with img clicked
            item.style.backgroundImage=`url(${src})`;
        });
    });

    //close
    closeIcon.addEventListener('click', function(){
        container.classList.remove('show');
    });

    //btnleft

    btnLeft.addEventListener('click', function(){
        counter--;
        if(counter<0){
            counter=imageList.length-1;
        }
        //console.log(counter);
        item.style.backgroundImage=`url(${imageList[counter]})`;
    });

    //btnright

    btnRight.addEventListener('click', function(){
        counter++;
        if(counter>imageList.length-1){
            counter=0;
        }
        console.log(counter);
        item.style.backgroundImage=`url(${imageList[counter]})`;
    });

    
})();