AOS.init();

$(document).ready(function(){

    // * Menu *
        var menu = [
            'Home',
            'Product',
            'Contact Us',
        ]
    
        function getMenu(){
            var item=''
            for(const m in menu){
                item += `<li>${menu[m]}</li>`
            }
            // alert(item)
            return item
        }
    
        $('#menu-item').html(getMenu());
    
       
    
    // Get value of media
        function getMedia(myMediaQuery){
            // let myMediaQuery = window.matchMedia('(min-width: 575.98px)');
            let mdi =myMediaQuery.media;
            let numsStr = mdi.replace(/[^0-9]\D/g, '');
                numsStr = numsStr.replace(/[)]/g, '');
            var numMedia = parseFloat(numsStr);
            return numMedia
        }
    
    // Stream value of Media
        function streamMedia(){
            const viewportWidth = window.innerWidth;
            console.log(`Window Width: ${viewportWidth}`)
            return parseFloat(viewportWidth)
        }   
    
    
        // function widthChangeCallback(callBackMedia, callBackStreamMedia) {
        //     if(callBackMedia() > callBackStreamMedia()) {
        //         $('.header-menu ul').slideUp(0)
        //         alert(callBackStreamMedia())
        //     }
        //     else{
        //         $('.header-menu ul').slideDown(0)
        //         alert(callBackStreamMedia())
        //     }
        // }
        // var medd = window.innerWidth;

        // medd.addEventListener('change',widthChangeCallback(getMedia,streamMedia))
        
        function clickIcon(){
            $('.header-logo').click(function(){
                $('#menu-item').slideToggle(500)
            }) 
        }

        let myMediaQuery = window.matchMedia('(min-width: 575.98px)');
        function widthChangeCallback() {
            
            // if(getMedia(myMediaQuery) > streamMedia()) {
            
            var stream = streamMedia()
            // stream.addEventListener('change');
            console.log('stream:'+stream)
            
            if( stream <= 575.98 ) {
                $('#menu-item').slideUp(0)
                clickIcon()
            }
            else if( stream > 575.98 ){
                $('#menu-item').slideDown(0)
                $('.header-logo').click(function(){
                    clickIcon()
                }) 

            }
        }
        // widthChangeCallback()

        function Todo(){
            // widthChangeCallback()
            myMediaQuery.addEventListener('change', widthChangeCallback);
        }

        Todo()



        // Fetch Photo Local 

        // New Product 
        var newPro = [
            {
                'Image':'/Img/pic5.jfif',
                'Description':'Ciao, Salut Hello Kitty and Friends x Sonix Scrunchie',
                'Price':'59.99'
            },
            {
                'Image':'/Img/pic6.jfif',
                'Description':'Sanrio Baby - A new collection meant for even',
                'Price':'49.99'
            },
            {
                'Image':'/Img/pic7.jfif',
                'Description':'A lovable pose with a star in hand! Kiki appears',
                'Price':'59.99'
            },
            {
                'Image':'/Img/pic8.jfif',
                'Description':'We want you to be happy with your purchase! ',
                'Price':'49.99'
            },
            {
                'Image':'/Img/pic9.jfif',
                'Description':'Sanrio Baby - A new collection meant for even the littlest Sanrio fans.',
                'Price':'54.99'
            },
            {
                'Image':'/Img/pic10.jfif',
                'Description':'Sanrio Baby Hello Kitty Washable Plush',
                'Price':'60.99'
            },
            {
                'Image':'/Img/pic2.jfif',
                'Description':'Sanrio Baby Hello Kitty Washable Plush',
                'Price':'60.99'
            },
            {
                'Image':'/Img/pic3.jfif',
                'Description':'Sanrio Baby Hello Kitty Washable Plush',
                'Price':'60.99'
            },
        ]

        // Popular Product 
        var proPupular = [
            {
                'Image':'/Img/anime1.avif',
                'Description':'Sasuke',
                'Price':'60.99',
                'Star': 5
            },
            {
                'Image':'/Img/anime2.webp',
                'Description':'Nika Luffy',
                'Price':'60.99',
                'Star': 5
            },
            {
                'Image':'/Img/anime3.avif',
                'Description':'Nika Luffy',
                'Price':'60.99',
                'Star': 4
            },
            {
                'Image':'/Img/anime4.avif',
                'Description':'Boy Anime',
                'Price':'60.99',
                'Star': 5
            },
            {
                'Image':'/Img/anime5.avif',
                'Description':'Boy Anime',
                'Price':'60.99',
                'Star': 3
            },
            {
                'Image':'/Img/anime6.jpg',
                'Description':'Naruto',
                'Price':'60.99',
                'Star': 4
            },
            {
                'Image':'/Img/anime7.avif',
                'Description':'Boy Anime',
                'Price':'60.99',
                'Star': 4
            },
            {
                'Image':'/Img/anime8.avif',
                'Description':'Boy Anime',
                'Price':'60.99',
                'Star': 4
            },
            {
                'Image':'/Img/anime9.jpg',
                'Description':'Boy Anime',
                'Price':'60.99',
                'Star': 3
            },
            {
                'Image':'/Img/anime10.avif',
                'Description':'Boy Anime',
                'Price':'60.99',
                'Star': 4
            },   
        ]

        // Shop Phlushies
        var bigAnime = [
            {
                'Image':'/Img/bigAnime1.webp',
                'Description':'Luffy Battle Style',
                'Price':'150',
                'Star': 5
            },   
            {
                'Image':'/Img/bigAnime2.jpg',
                'Description':'Kimetsu No Yaiba',
                'Price':'188',
                'Star': 5
            },   
            {
                'Image':'/Img/bigAnime3.webp',
                'Description':'Kimetsu No Yaiba',
                'Price':'133',
                'Star': 4
            }, 
            {
                'Image':'/Img/bigAnime4.webp',
                'Description':'Kyojuro Rengoku Figure',
                'Price':'189',
                'Star': 4
            }, 
              
        ]

        // Scroll Product

        var scrollProduct =[
            {
                'Image':'/Img/scAnime1 Luffy Gear.webp',
                'Description':'Luffy Gear',
                'Price':'189',
                'Star': 3
            }, 
            {
                'Image':'/Img/scAnime2 Poke Monster.webp',
                'Description':'Poke Monster',
                'Price':'189',
                'Star': 4
            }, 
            {
                'Image':'/Img/scAnime3 Munboo 8Pcs.webp',
                'Description':'Munboo 8Pcs',
                'Price':'189',
                'Star': 3
            }, 
            {
                'Image':'/Img/scAnime4 HanaKo-Kun.webp',
                'Description':'HanaKo-Kun',
                'Price':'189',
                'Star': 3
            }, 
            {
                'Image':'/Img/scAnime5 Goku figurines.webp',
                'Description':'Goku figurines',
                'Price':'189',
                'Star': 4
            }, 
            {
                'Image':'/Img/scAnime6 Roronoa Zoro Samurai Op.webp',
                'Description':'Zoro Samurai Op',
                'Price':'189',
                'Star': 4
            }, 
            {
                'Image':'/Img/scAnime7 Luffy.webp',
                'Description':'Luffy',
                'Price':'189',
                'Star': 4
            }, 
            {
                'Image':'/Img/scAnime8 Beerus.webp',
                'Description':'Beerus',
                'Price':'189',
                'Star': 4
            }, 
            {
                'Image':'/Img/scAnime9 Shanks Luffy.webp',
                'Description':'Shanks Luffy',
                'Price':'189',
                'Star': 4
            }, 
            {
                'Image':'/Img/scAnime10 Kozrlib Genshin.webp',
                'Description':'Kozrlib Genshin',
                'Price':'189',
                'Star': 4
            }, 
            {
                'Image':'/Img/scAnime11 Sasuke III.webp',
                'Description':'Sasuke III',
                'Price':'189',
                'Star': 4
            }, 
        ]





        // * New Product 
        var fetNewPro='';
        for(const key in newPro){
            fetNewPro +=`<div class="col-sm">
                            <div class="row-box">
                                <div class="pic">
                                    <img src="${newPro[key]['Image']}" alt="newProduct-pic">
                                </div>
                                <div class="des">
                                    ${newPro[key]['Description']}
                                </div>
                                <button class="btn btn-info">$${newPro[key]['Price']}</button>
                            </div>
                        </div>`;
        }
        $('#new-product').html(fetNewPro)


        // * Poppular Product 

        var fetPopular ='';
        
        for(const key in proPupular){

            var fetPopStar ='';
            for(var s=0; s<5; s++){
                if(proPupular[key]['Star']>s){
                    fetPopStar +=`<i class="fa-solid fa-star"></i>\n`;
                } else{
                    fetPopStar +=`<i class="fa-regular fa-star"></i>\n`;
                }
            }

            fetPopular +=`<div class="col-sm">
                            <div class="con-box">
                                <div class="pic">
                                    <img src="${proPupular[key]['Image']}" alt="pop">
                                </div>
                                <div class="con-des">
                                    ${proPupular[key]['Description']}
                                </div>
                                <div class="con-prop">
                                    <div class="star">
                                        ${fetPopStar}

                            
                                        
                                    </div>
                                    <div class="con-price">
                                        $${proPupular[key]['Price']}
                                    </div>
                                    <button type="button" class="btn btn-outline-info btn-sm">Buy Now</button>
                                </div>
                            </div>
                        </div>`;
        }
        console.log(fetPopular)
        console.log(fetPopStar)

        $('#mini-popular').html(fetPopular)


        // * Shop Plushies

        var fetBigAni='';
        for(const key in bigAnime){

            var fetBigStar ='';
            for(var s=0; s<5; s++){
                if(bigAnime[key]['Star']>s){
                    fetBigStar +=`<i class="fa-solid fa-star"></i>\n`;
                } else{
                    fetBigStar +=`<i class="fa-regular fa-star"></i>\n`;
                }
            }

            fetBigAni +=`<div class="col-sm" >
                        <div class="row-box panel-box">
                            <div class="pic">
                                <img src="${bigAnime[key]['Image']}" alt="bigAni">
                            </div>
                            <div class="des">
                                <div class="des-txt">
                                    <h5>${bigAnime[key]['Description']}</h5>
                                </div>
                                
                                <div class="panel-price">
                                    $${bigAnime[key]['Price']}
                                </div>
                                <div class="properties">
                                    <div class="star">
                                        ${fetBigStar}
                                    </div>
                                    <button type="button" class="btn btn-outline-info">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }

        $('#big-anime').html(fetBigAni)


        // * Shop Sale

        var fetScrollProduct ='';

        for(const key in scrollProduct){

            var fetScrollStar ='';
            for(var s=0; s<5; s++){
                if(scrollProduct[key]['Star']>s){
                    fetScrollStar +=`<i class="fa-solid fa-star"></i>\n`;
                } else{
                    fetScrollStar +=`<i class="fa-regular fa-star"></i>\n`;
                }
            }

            fetScrollProduct +=`<div class="sc-box" data-aos="flip-right" data-aos-duration="950">
                                    <div class="pic">
                                        <img src="${scrollProduct[key]['Image']}" alt="${scrollProduct[key]['Image']}">
                                    </div>
                                    <div class="sc-des">
                                        ${scrollProduct[key]['Description']}
                                    </div>
                                    <div class="sc-prop">
                                        <div class="star">
                                            ${fetScrollStar}
                                        </div>
                                        <button type="button" class="btn btn-outline-info btn-sm">Buy Now</button>
                                    </div>
                                </div>`;
        }

        $('#scroll-product').html(fetScrollProduct)



})
   
