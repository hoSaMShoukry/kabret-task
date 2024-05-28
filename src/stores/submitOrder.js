import { defineStore } from "pinia"; 
import productsApi from "../_utiles/productsApi";

export const sumbitNewOrder = defineStore('order' , {
    state:()=>({
        loading : false,
       title:null,
       price:null,
       description:null,
       image:null,
       category:null ,
       textValidate: [
        value => {
          if (value?.length > 3) return true

          return 'field must be at least 3 characters.'
        },
      ],
      priceValidate: [
        value => {
          if (value?.length > 1) return true
          return 'field must be at least 1 number.'
        },
      ],
      fileValidate: [
        value => {
          if (value?.length > 1) return true
          return 'no  file seen.'
        },
      ],
      categoryValidate: [
        value => {
          if (value?.length > 1) return true
          return 'select at least 1 category.'
        },
      ],
      
    }),
    actions:{
        getFirstImage(e){
            this.image = e.target.files[0]
            console.log(this.image);
        },
       async  add_the_new_product(param){
        const data = {
            title:this.title,
            price:this.price,
            description:this.description,
            image:this.image,
            category:this.category
        }
        if ((await param.form.validate()).errors.length == 0) {
            this.loading = true;
            await productsApi.sumbitNewOrder(data)
            .then((res)=>{
                if(res.status == 200){
                    console.log(res);
                    this.title = null;
                    this.price = null;
                    this.image = null;
                    this.description = null;
                    this.category = null;
                    this.loading = false;
                }
            }).catch(_=>console.log(Error));
        }
        
        }
    
    }
})