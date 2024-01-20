function temperature_conversion()
{
            
     var a;
     var b;
     var  degree;
     degree=degree1.degree.value;
     a=from1.from.value;
     b=to1.to.value;
            if(a=="Celsius" && b=="Fahrenheit"){
                Celsius_to_fahrenheit(degree);
            }
           
            else if(a=="Fahrenheit" && b=="Celsius"){
                Fahrenheit_to_celsius(degree);

            }
            else if(a=="Fahrenheit" && b=="Kelvin"){
                Fahrenheit_to_kelvin(degree);

            }
            else if(a=="Kelvin" && b=="Fahrenheit"){
                Kelvin_to_fahrenheit(degree);

            }
            else if(a=="Kelvin" && b=="Celsius"){
                Kelvin_to_celsius(degree);

            }
            else if(a=="Celsius" && b=="Kelvin"){
                Celsius_to_kelvin(degree);

            }
            else{
                result1.result.value=0;
            }
                    


 }
 function Celsius_to_fahrenheit(degree)
{ 
     result1.result.value=(degree*(9/5)+32)+" F";

}
function Fahrenheit_to_celsius(degree)
{
    result1.result.value=((degree-32)*5/9)+" C";
}
function Fahrenheit_to_kelvin(degree)
{
    result1.result.value=((degree-32)*(5/9)+273.15)+" K";
}
function Kelvin_to_fahrenheit(degree)
{
    result1.result.value=((degree-273.15)*(9/5)+32)+" F";
}
function Kelvin_to_celsius(degree)
{
    result1.result.value=(degree-273.15)+" C";
}
function Celsius_to_kelvin(degree)
{
    result1.result.value=(parseFloat(degree)+273.15)+" K";
}
       