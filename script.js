//selecionar prato principal//
let prato_sel = null, bebida_sel = null, sobremesa_sel = null;

let pratos;
let valor_p, valor_b, valor_s; //valor dos pratos selecionados//
let coms, bebs, doce;
let check;

function select_p(opt_p){
   
   
   if(prato_sel !== null){
      prato_sel.classList.remove('teste');
      check_b.classList.add('hide')
      
   }
   
   
   opt_p.classList.toggle('teste');
   
   console.log(opt_p);
   prato_sel = opt_p;
   
   
   check = prato_sel.querySelector('.hide');
   check.classList.remove('hide');
   check_b = check;

   valor_p = prato_sel.querySelector('#preco').innerHTML;
   coms = prato_sel.querySelector('#nome').innerHTML;
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
     check.classList.add('hide')
     
   } 
   
   opt_b.classList.toggle('teste');
   bebida_sel = opt_b;
   valor_b = bebida_sel.querySelector('#preco').innerHTML;
   bebs = bebida_sel.querySelector('#nome').innerHTML;
   
   check = bebida_sel.querySelector('.hide');
   check.classList.remove('hide');
   check_b = check;

   valor_b = parseFloat(valor_b.replace(',' , '.'));
   console.log(valor_b);
   
   realizar_pedido();
   return bebida_sel;
 
}
//selecionar bebida//

//selecionar sobremesa//
function select_s(opt_s){
   
   

   if(sobremesa_sel !== null){
      sobremesa_sel.classList.remove('teste')
      check_b.classList.add('hide')
  
   }
   
   opt_s.classList.toggle('teste');
   sobremesa_sel = opt_s;
   
   check = sobremesa_sel.querySelector('.hide');
   check.classList.remove('hide');
   check_b = check;


   valor_s = sobremesa_sel.querySelector('#preco').innerHTML;
   doce = sobremesa_sel.querySelector('#nome').innerHTML;
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
         pratos = `Gostaria de fazer um pedido: \n- Prato: ${coms} \n- Bebida: ${bebs}\n- sobremesa: ${doce} \nTotal: R$${soma}`;
   }
}

function message(nhu){
   
   console.log(pratos);
   if((sobremesa_sel&&prato_sel&&bebida_sel)!==null){
      window.open(encodeURI("https://wa.me/?text="+pratos));
   }
}

