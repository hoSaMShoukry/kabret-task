<template>
<div class="addProduct py-16 bg-indigo-lighten-5 mt-n6">
  <hr class="mt-6">
  <h1 class="text-capitalize text-center text-indigo-lighten-1 mt-5 pt-5" v-motion-slide-visible-left>add your custom product</h1>
  <v-row justify="center" class="px-10 mt-10 h-75 row">
    <v-col xl="6" lg="6" md="7" sm="12" cols="12" class="image-section rounded-lg" v-motion-slide-visible-top></v-col>
    <v-col xl="5" lg="5" md="5" sm="12" cols="12" class="mt-2">
      <div class="content-section">
            <div class="form d-flex justify-end mt-2 w-100" v-motion-slide-visible-bottom>
              
                <v-form ref="form" class="px-10 w-75 py-10 rounded-xl  bg-indigo-lighten-1 my-form">
                  <h2 class="text-center mt-n5 mb-3">Product Form</h2>
                  <v-text-field :rules="add_new_order.textValidate" class="text-white" type="text" v-model.lazy.trim="add_new_order.title" prepend-icon="mdi-text" label="Title">  </v-text-field>
                    <v-text-field :rules="add_new_order.priceValidate" v-model="add_new_order.price" prepend-icon="mdi-cash-100" label="Price" type="number"></v-text-field>
                    <v-text-field :rules="add_new_order.textValidate" v-model.lazy.trim="add_new_order.description" prepend-icon="mdi-text" label="Describtion"></v-text-field>
                    <v-text-field :rules="add_new_order.fileValidate" accept="image/*" @change="add_new_order.getFirstImage($event)" prepend-icon="mdi-image" type="file"></v-text-field>
                    <v-select :rules="add_new_order.categoryValidate" v-model="add_new_order.category" prepend-icon="mdi-shape-outline" label="category"  :items="['jewelery',`men's clothing` , `women's clothing` , 'electronics']"></v-select>
                    <div class="loading text-center" v-if="add_new_order.loading == true">
                    <span class="d-inline-block mt-2">
                    <semipolar-spinner
                    :animation-duration="2000"
                    :size="50"
                    color="#ff1d5e"
                      />
                      </span>
                      </div>
                    <div class="text-center submit" v-if="add_new_order.loading == false">
                    <v-btn type="submit"  @click.prevent="add_new_order.add_the_new_product($refs)" variant="flat" color="indigo-darken-2">Submit</v-btn>
                    </div>    
                </v-form>
            </div>
        </div>
    </v-col>
   
      </v-row>
  

    </div>
</template>

<script setup>
import {sumbitNewOrder} from '../stores/submitOrder';
import { SemipolarSpinner  } from 'epic-spinners';
import { onMounted, onUnmounted } from 'vue';
const add_new_order = sumbitNewOrder();
onMounted(()=>{
            add_new_order.loading = false;
            add_new_order.title=null
            add_new_order.price=null
           add_new_order.description=null
           add_new_order.image=null
           add_new_order.category=null;
});
onUnmounted(()=>{
            add_new_order.loading = false;
            add_new_order.title=null
            add_new_order.price=null
           add_new_order.description=null
           add_new_order.image=null
           add_new_order.category=null;
})
</script>

<style lang="scss" scoped>
.addProduct{
  .image-section , h1 , .form{
    transition:0.5s
  }
  height: fit-content !important;
  .image-section{
    background: url(
      https://plus.unsplash.com/premium_photo-1661964205360-b0621b5a9366?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    );
    object-fit: cover !important;
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
  image-rendering: crisp-edges;
 image-rendering: -moz-crisp-edges;          /* Firefox */
 image-rendering: -o-crisp-edges;            /* Opera */
 image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
 -ms-interpolation-mode: nearest-neighbor;   /* IE (non-standard property) */
  }
}

@media (max-width:1600px) {
  .addProduct{
    .row{
      .my-form{
        justify-content: start !important;
        width: 75% !important;
    }
      .image-section{
        background-size: 100% 100% !important;
            background-position: left;
            height: 500px !important;
            margin-top: 20px ;
      }
    }

  }
  
}
@media (max-width:1200px) {
  .addProduct{
    .row{
      .image-section{
        margin-top: 30px;
      }
     .form{
      .my-form{
        width: 90% !important;
      }
     }
     
      
    }
    
  }
  
}
@media (max-width:960px) {
  .addProduct{
    .row{
      .image-section{
        background-size: 90% 100% !important;
            background-position: left;
            height: 500px !important;
                }
      .form{
        justify-content: left !important;
      .my-form{
        width: 400px !important;
      }
      }
               
     
      
    }
    
  }
  
}
@media (max-width:650px) {
  .addProduct{
    .row{
      .image-section{
        background-size: 100% 100% !important;
            background-position: left;
            height: 500px !important;
                }
   }
  }
  
}
  

@media (max-width:530px) {
    .addProduct{
      h1{
        font-size: 25px;
      }
    }
    
}
@media (max-width:420px) {

      .addProduct{
    .row{
      .image-section{
        background-size: 100% 100% !important;
            background-position: left;
            height: 400px !important;
                }
   }

  
      h1{
        font-size: 20px;
      }
    }
    
}

@media (max-width:350px) {

.addProduct{
.row{
.image-section{
      height: 350px !important;
          }

          .form{
            width: 90vw !important;
            position: relative;
            right: 20px;
          }
}


h1{
  font-size: 20px;
}
}

}
</style>