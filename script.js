//selecionar prato principal//
let prato_sel = null, bebida_sel = null, sobremesa_sel = null;

function select_p(opt_p){
   
   
   if(prato_sel !== null){
      prato_sel.classList.remove('teste');
      
      
   }
   
   
   opt_p.classList.toggle('teste');
   
   console.log(opt_p);
   prato_sel = opt_p;
   
   realizar_pedido()
    return prato_sel;

}
//selecionar prato principal//

//selecionar bebida//

function select_b(opt_b){
   
   

   if(bebida_sel !== null){
      bebida_sel.classList.remove('teste');
     
     
   } 
   
   opt_b.classList.toggle('teste');
   console.log(opt_b);
   bebida_sel = opt_b;
   realizar_pedido();
   return bebida_sel;
 
}
//selecionar bebida//

//selecionar sobremesa//
function select_s(opt_s){
   
   

   if(sobremesa_sel !== null){
      sobremesa_sel.classList.remove('teste')
      
  
   }
   
   opt_s.classList.toggle('teste');
   sobremesa_sel = opt_s;
   console.log(opt_s);
   realizar_pedido();
   return sobremesa_sel;
   
}


//selecionar sobremesa//
function realizar_pedido(){
   console.log('pedido atualizado')
   if((sobremesa_sel&&prato_sel&&bebida_sel)!==null){
      element = document.querySelector('.order')
      element.classList.add('confirm')
      element.innerHTML = "Fechar pedido"
   }
}
