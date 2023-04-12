const images = [...document.querySelectorAll('.image')]

const popup = document.querySelector('.popup')
const closeBtn = document.querySelector('.close-btn')
const imageName = document.querySelector('.image-name')
const largeImage = document.querySelector('.large-image')
const imageIndex = document.querySelector('.index')
const leftArrow = document.querySelector('.left-arrow')
const rightetArrow = document.querySelector('.right-arrow')       

const block = [...document.querySelectorAll('.carousel-inner')];
const i1 = [[...document.querySelectorAll('.i1')],[...document.querySelectorAll('.i2')],[...document.querySelectorAll('.i3')],[...document.querySelectorAll('.i4')],[...document.querySelectorAll('.i5')],[...document.querySelectorAll('.i6')]]

console.log(block)
console.log(i1)


    let j,k;
    for(let i=0;i<i1.length;i++){
            block[i].addEventListener('click',()=>{
            k=i;
            j=0;
            updateImage(i,j);
            // console.log(`i = ${i} j = ${j}`)
            popup.classList.toggle('active')
        
            })
        
    }
 
    const updateImage=(i,j)=>{
        let path = `images${i+1}/${i+1}_${j+1}.jpg`
        largeImage.src = path;
        imageIndex.innerHTML=`0${j+1}`
        console.log(path)
    }


closeBtn.addEventListener('click',()=>{
    popup.classList.toggle('active')
})

leftArrow.addEventListener('click',()=>{
    if(j>0){
        updateImage(k,--j);
    }
})
rightetArrow.addEventListener('click',()=>{
    if(j < i1[k].length-1){
        updateImage(k,++j);
    }
})
