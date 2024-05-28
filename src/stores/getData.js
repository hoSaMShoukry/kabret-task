import axios from 'axios';
import {defineStore} from 'pinia';
import productsApi from '../_utiles/productsApi';
export const data = defineStore('data',{
    state:()=>({
     data:[],
     loading:false,
     erro:'',
     dataType:'',
     filter_category:[],
     show_all_categories:true,
     filter_price:'',
     old_data:[],
     one_product:{},
     sharedValue:0,
    }),
    actions:{
    /* Get All Products */
     async getData(){
        this.loading = true;
    await productsApi.getAllProducts().then((res)=>{
        if(res.status == 200){
            this.loading = false
            this.data = res.data
            console.log(this.data);   
        }
    }).catch((err)=>{
        this.loading = false;
        console.log(err);
    })
      },
   /*Get One Product Details */   
     async getOneProduct(id){
      await productsApi.getOneProduct(id)
      .then((res)=>{
        if(res.status == 200){
          this.one_product = res.data;
        }
      }).catch((err)=> console.log(err))
     },
     /* id did this function by my front end skill because may be user prefer to filter more than category 
        and i let also function to show you that it's possible to do it by api    
     */ 

    async getProductByCatgeoryComp(e , category){ 
            if(e.target.checked  ){
              this.data = []
              this.loading = true 
              await productsApi.getProductByCategory(category)
              .then((res)=>{
                console.log(res.data)
               this.data = res.data ;
              })
   .catch(_=> console.log(Error));
   this.loading = false
            }else{
              this.data = []
              this.getData();
            } 
     },
/*Sort Products */
   sortProducts(type){
    productsApi.sortProducts(type)
    .then((res)=>{
     this.data = res.data;
    })
   },
/*Filter Products onit's price */
      filterOnPrice(){
        setTimeout(() => {
          if(!this.filter_price){
            this.data = this.old_data;
        }else{
         let new_data = this.old_data.filter((product)=>{
           return product.price <= this.filter_price
          })
          this.data = new_data;
        }
           
        }, 10);
      }
    }
})