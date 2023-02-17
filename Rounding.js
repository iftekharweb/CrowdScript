function round(p: float, after_dot: int) -> string {   
    let sign = ""; 
    if (p < 0.0) { 
        sign = "-"; 
        p = -p; 
    } 
 
    let coeff = 1; 
    for (let i = 0; i < after_dot; i += 1) { 
        coeff *= 10; 
    } 
     
    p *= float(coeff); 
    let int_p = int(p + 0.5); 
   
  let after_string = string(int_p % coeff); 
    for (let i = 0; after_string.length() < after_dot; i += 1) { 
        after_string = "0" + after_string; 
    } 
     
    return sign + string(int_p / coeff) + "." + after_string; 
}
