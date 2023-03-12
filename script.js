function karşılaştır() {
    var a=prompt ("1. sayıyı giriniz:");
    var b=prompt ("2. sayıyı giriniz:");
    if(a<b) {
        alert("2. sayı , 1. sayıdan büyüktür. ")
    }else if(a>b){
        alert("1. sayı , 2. sayıdan büyüktür.")
    }else if(a=b){
        alert("1. sayı ile 2. sayı birbirine eşittir.")
    }else{
        alert("Lütfen değerlerin tamamını giriniz.")
    }
    }  
    
    karşılaştır()