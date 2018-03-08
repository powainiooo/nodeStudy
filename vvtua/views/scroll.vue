<style>
    #pageContain {
        overflow: hidden;
        position: relative;
    }
    .page {
        display: none;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }
    .contain {
        width: 100%;
        height: 100%;
        display: none;
        position: relative;
        z-index: 0;
    }
    .current .contain,.slide .contain {
        display: block;
    }
    .current {
        display: block;
        z-index: 1;
    }
    .slide {
        display: block;
        z-index: 2;
    }
    .swipe {
        display: block;
        z-index: 3;
        transition-duration: 0ms !important;
        -webkit-transition-duration: 0ms !important;
    }
    .page1 {
        background: #37c1e3;
    }
    .page2 {
        background: #009922;
    }
    .page3 {
        background: #992211;
    }
    .page4 {
        background: #ff00ff;
    }
    .page5 {
        background: #00ff00;
    }
    .page6 {
        background: #22ffff;
    }
    #navBar {
        z-index: 3;
        position: absolute;
        top: 10%;
        right: 3%;
    }
    #navBar .active {
        background: #ccc;
    }
    #navBar li {
        cursor: pointer;
        margin-bottom: 10px;
        transition: all .7s ease;
        border-radius: 50%;
        line-height: 40px;
        text-align: center;
        width: 40px;
        height: 40px;
    }
</style>

<template>
    <div>
        <div id="pageContain">
            <div class="page page1 current"><div class="contain"></div></div>

            <div class="page page2"><div class="contain"></div></div>

            <div class="page page3"><div class="contain"></div></div>

            <div class="page page4"><div class="contain"></div></div>

            <div class="page page5"><div class="contain"></div></div>

            <div class="page page6"><div class="contain"></div></div>
        </div>
        <ul id="navBar">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script type='es6'>
    import FullPage2 from '@/assets/fullPage.js'
    export default {
        name: 'app',
        mounted(){
            let runPage = new FullPage2({

                id : 'pageContain',                            // id of contain
                slideTime : 800,                               // time of slide
                continuous : true,                             // create an infinite feel with no endpoints
                effect : {                                     // slide effect
                    transform : {
                        translate : 'Y',				   // 'X'|'Y'|'XY'|'none'
                        scale : [1, 1],				   // [scalefrom, scaleto]
                        rotate : [0, 0]				   // [rotatefrom, rotateto]
                    },
                    opacity : [0, 1]                       // [opacityfrom, opacityto]
                },
                mode : 'wheel,touch,nav:navBar',               // mode of fullpage
                easing : 'ease'                                // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1];
                //  ,beforeChange : function(index, thisPage) {   // callback before pageChange
                //    return 'stop';
                //  }
                //  ,callback : function(index, thisPage) {       // callback when pageChange
                //    alert(index);
                //  };
            });
        },
        data(){
            return{

            }
        }
    }

</script>

