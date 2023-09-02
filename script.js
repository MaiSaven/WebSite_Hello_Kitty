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
})
   
    