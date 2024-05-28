<template>
  <div class="main-content pb-5 bg-indigo-lighten-5">
    <v-row class="px-10 pt-16 h-screen row" align-content="center">
<v-col class="d-flex align-center content" xl="6" lg="6" md="5" sm="12" v-motion-slide-left>
    <div class="info">
  <h1 class="w-100 text-blue">E-commerce Products</h1>
  <h2 class="w-100 mt-5 text-grey">The New Year Collection</h2>
  <p class="mt-5 text-indigo font-weight-bold">
    Our latest collection is here. Discover the latest trends and styles for the new year.
  </p>
  <v-btn class="mt-5 px-7 btn" color="orange" @click="$router.push('/products/all')">See Products</v-btn>
</div>
</v-col>
<v-col xl="6" lg="6" md="7" class="h-75 img rounded-lg" sm="12" v-motion-slide-top></v-col>
    </v-row> 
 </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main-content{
    .content , .img{
        transition: 0.5s;
    }
    height: fit-content !important;
    .img{
    background: url(   https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvcmV8ZW58MHx8MHx8fDA%3D
);
object-fit: cover !important;
  background-size: 100% cover !important;
  background-repeat: no-repeat !important;
  image-rendering: crisp-edges;
 image-rendering: -moz-crisp-edges;          /* Firefox */
 image-rendering: -o-crisp-edges;            /* Opera */
 image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
 -ms-interpolation-mode: nearest-neighbor;   /* IE (non-standard property) */
}
}
@media (max-width:960px) {
    .main-content{
        height: fit-content;
       
        .row{
            display: block !important;
            height: fit-content !important;
            .img{
            background-size: 80% 90% !important;
            background-position: left;
            height: 500px !important;

        }
            .content{
                margin-top:10% ;
            }
        }
     
    }
    
}
@media (max-width:700px) {
    .main-content{
        .content{
            margin-top: 75px !important;
        }
        .row{
            .img{
            background-size: 95% 90% !important;

        }
        }
        
    }
    
}
@media (max-width:500px) {
    .main-content{
        .row{
            .img{
                height: 450px !important;
              background-size: 200% 90% !important;

        }
        }
        
    }
    
}
@media (max-width:420px) {
    .main-content{
        h1 {
            font-size: 7vw ;
        }
        h2{
            font-size: 6vw ;

        }
        .row{
            .img{
                height: 400px !important;
              background-size: 200% 90% !important;

        }
        }
        
    }
    
}
@media (max-width:420px) {
    .main-content{
       .content{
         p{
            font-size: 4vw;
         }
       }
    
}
}
</style>