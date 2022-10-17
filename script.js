//selecionar prato principal//
let prato_sel = null, bebida_sel = null, sobremesa_sel = null;
const preco_sapato = 35.99, preco_gato = 24.95, preco_suco=6.99, preco_abacate=4.99; //valor dos pratos disponíveis
let pratos;
let valor_p, valor_b, valor_s; //valor dos pratos selecionados//
let preco_b_f;

function select_p(opt_p){
   
   
   if(prato_sel !== null){
      prato_sel.classList.remove('teste');
      
      
   }
   
   
   opt_p.classList.toggle('teste');
   
   console.log(opt_p);
   prato_sel = opt_p;
   
   valor_p = prato_sel.querySelector('#preco').innerHTML;
   
   valor_p = parseFloat(valor_p.replace(',' , '.'))
   console.log(valor_p);
   realizar_pedido();
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
   valor_b = bebida_sel.querySelector('#preco').innerHTML;
   
   valor_b = parseFloat(valor_b.replace(',' , '.'))
   console.log(valor_b);
   console.log(preco_b_f)
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
   valor_s = sobremesa_sel.querySelector('#preco').innerHTML;
   
   valor_s = parseFloat(valor_s.replace(',' , '.'))
   console.log(valor_s);
   realizar_pedido();
   return sobremesa_sel;
   
}


//selecionar sobremesa//
function realizar_pedido(){
   console.log('pedido atualizado')
   if((sobremesa_sel&&prato_sel&&bebida_sel)!==null){
      element = document.querySelector('.order');
      element.classList.add('confirm');
      element.innerHTML = "Fechar pedido";
      soma = valor_b+valor_p+valor_s
      soma = soma.toFixed(2)
      pratos = `Gostaria de fazer um pedido: \n- Prato: R$${valor_p} \n- Bebida: R$${valor_b}\n- sobremesa: R$${valor_s} \nTotal: R$${soma}`;
   }
}

function message(nhu){
   
   console.log(pratos);
   if((sobremesa_sel&&prato_sel&&bebida_sel)!==null){
   window.open(encodeURI("https://wa.me/?text="+pratos));
   }
}

