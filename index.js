/* 4 parâmetros numéricos

     São eles: 
     - Grau esférico olho esquerdo
     - Grau esférico olho direito
     - Grau cilindrico olho esquerdo
     - Grau cilindrico olho direito

     Lente prime:
    
    - Paciente que tiver grau esférico olho esquerdo || olho direito
     entre -3 e -12 && só atende até grau cilíndrico -2, passando a atender até somente 
    -3 e -10 se o paciente tiver grau cilíndrico

 Lente Vision:

     De 0 a -15 de esférico  e até -5 de cilíndrico

     Se a lente prime estiver disponóvel, deverá ser a única disponível para o 
     usuário */

     const leftSpherical = document.querySelector(".left-eye-esferico");
     const rightSpherical = document.querySelector(".right-eye-esferico");
     const leftCylinder = document.querySelector(".left-eye-cilindrico");
     const rightCylinder = document.querySelector(".right-eye-cilindrico");
     const btnCalculateHere = document.querySelector(".calculate-here");
     const btnClearAll = document.querySelector(".clear-all");


     function checkEyesGrade() {
        if (leftSpherical.value && rightSpherical.value <= -3 && 
            leftSpherical.value && rightSpherical.value >= -12 ||
            rightCylinder.value && leftCylinder.value <= -2 &&
            rightCylinder.value && leftCylinder.value <= -3 &&
            rightCylinder.value && leftCylinder.value >= -10)
            {
                document.querySelector(".result-lens").innerHTML = "Temos uma lente Prime para você!"           
                
            }
        else if (
            leftSpherical.value && rightSpherical.value <= 0 && 
                leftSpherical.value && rightSpherical.value >= -15 &&
                rightCylinder.value && leftCylinder.value >= -5
        )
          {
              document.querySelector(".result-lens").innerHTML = "Temos uma lente Vision para você!"
          }  
     }


     btnCalculateHere.onclick = function(event){
         console.log(leftSpherical.value, rightSpherical.value, leftCylinder.value, rightCylinder.value)
         event.preventDefault()
         checkEyesGrade();
     }

     btnClearAll.onclick = function(event) {
        document.querySelector(".result-lens").innerHTML = "Vamos encontrar a sua lente ideal!"
     }

   
    