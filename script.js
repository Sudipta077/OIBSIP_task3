const calculate=(e)=>{
    const temp1=document.getElementById('temp1');
    const temp2=document.getElementById('temp2');
    const unitSelected1 = document.getElementById('unit1').value;
    const unitSelected2 = document.getElementById('unit2').value;
    const celTofah=(i)=>{
       return  (i * 9/5) + 32;
    }

    const fahTocel=(i)=>{
        return (i-32)*(5/9);
    }
    
    const celToKel=(i)=>{
        return i -(-273.15);
    }

    const fahToKel=(i)=>{
       return fahTocel(i)+273.15; 
    }
    const kelTocel=(i)=>{
        return i - 273.15;
    }

    const kelToFah=(i)=>{
        return kelTocel(i)*(9/5)+32;
    }
    if(unitSelected1 == 'celcius' && unitSelected2 == 'Farenhiet'){
        let calculated = celTofah(temp1.value);
        temp2.value = calculated;
        unit2.value = "Farenhiet";       
        
    }        
    else if(unitSelected1=='Farenhiet' && unitSelected2 == 'celcius' ) {
        calculated = fahTocel(temp1.value);
        temp2.value=calculated;
        unit2.value='celcius'    
    }
    else if(unitSelected1 == 'Kelvin' && unitSelected2 == 'celcius'){
        calculated = kelTocel(temp1.value);
        temp2.value=calculated;
        unit2.value='celcius';
    }
    else if(unitSelected1 == 'Kelvin' && unitSelected2=='Farenhiet'){
        calculated = kelToFah(temp1.value);
        temp2.value=calculated;
        unit2.value='Farenhiet';
    }
    else if(unitSelected2 == 'Kelvin' && unitSelected1=='Farenhiet'){
        calculated = fahToKel(temp1.value);
        temp2.value=calculated;
        unit2.value='Kelvin';
    }
    else if(unitSelected2 == 'Kelvin' && unitSelected1=='celcius'){
        calculated = celToKel(temp1.value);
        temp2.value=calculated;
        unit2.value='Kelvin';
    }
    else if(unitSelected1 == unitSelected2)
    temp2.value=temp1.value;
}