//selecionar prato principal//
let prato_sel = null, bebida_sel = null, sobremesa_sel = null;

function select_p(opt_p){
   
   
   if(prato_sel !== null){
      prato_sel.classList.remove('teste');
      prato_sel = null;
      
   }
   
   
   opt_p.classList.toggle('teste');
   
   console.log(opt_p);
   prato_sel = opt_p;
   
    return prato_sel;
    realizar_pedido();
}
//selecionar prato principal//

//selecionar bebida//

function select_b(opt_b){
   
   

   if(bebida_sel !== null){
      bebida_sel.classList.remove('teste');
      bebida_sel = null;
     
   } 
   
   opt_b.classList.toggle('teste');
   console.log(opt_b);
   bebida_sel = opt_b;
   
   return bebida_sel;
   realizar_pedido();
}
//selecionar bebida//

//selecionar sobremesa//
function select_s(opt_s){
   
   

   if(sobremesa_sel !== null){
      sobremesa_sel.classList.remove('teste')
      sobremesa_sel = null;
  
   }
   
   opt_s.classList.toggle('teste');
   sobremesa_sel = opt_s;
   console.log(opt_s);
   
   return sobremesa_sel;
   realizar_pedido();
}


//selecionar sobremesa//

if((prato_sel&&bebida_sel&&sobremesa_sel)!==null){
   alert('joj')
}
