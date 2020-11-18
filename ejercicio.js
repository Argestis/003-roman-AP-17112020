
function tranformToRomanNumber(number){

    let romanNumber = "";
    let hundredsValidation = false;
    let tensValidation = false;
    let decimalsValidation = false;

    if(number === 0) return false;
    if(number.toString().length === 4){
        let thousand = 999;
        while(number > thousand){
            romanNumber =  romanNumber + "M";
            thousand = thousand+1000;

        }
        hundredsValidation = true;
    } 

    if(number.toString().length === 3 || hundredsValidation){
        let temp = number.toString().slice(1)
        number = parseInt(temp);
        let hundreds = 99;
        let fhundredsValidation = true;
        while(number > hundreds){
            if(number > 499 && number < 888  && fhundredsValidation){
                romanNumber =  romanNumber + "D";
                fhundredsValidation = false
            }
            else{
                romanNumber =  romanNumber + "C";
            }

            hundreds = hundreds+100; 
        }
        tensValidation = true;
    }

    if(number.toString().length === 3 || tensValidation){
        let temp = number.toString().slice(1)
        number = parseInt(temp);

        let tens = 9;

        while(number > tens){
            romanNumber =  romanNumber + "X";
            if(romanNumber > 5)
            tens = tens+10;
        }
        decimalsValidation = true;
    }



    return romanNumber;
}
