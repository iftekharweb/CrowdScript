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

function solve(input: string) -> string {
    let lines = input.split("\n");
    let idx = 0;
    let res = "";
    for(let tc=1; tc<lines.length(); tc +=1) {
        let a = lines[idx].split(" ");
        let p = int(a[0]);
        let q = int(a[1]);
        let r = int(a[2]);
        let s = int(a[3]);
        let nom:int[] = [];
        let denom:int[] = [];
        
        for(let i=q+1; i<=p ; i+=1){
            nom.push(i);
        }
        for(let i=s+1; i<=r ; i+=1){
            denom.push(i);
        }
        
        if((r-s) >= (p-q)){
            for(let i=(p-q)+1; i<=(r-s) ; i+=1) {
                nom.push(i);
            }
        } else {
            for(let i=(r-s)+1; i<=(p-q) ; i+=1) {
                denom.push(i);
            }
        }
        
        let L = float(1);
        let H = float(10000000000);
        let i = 0;
        let j = 0;
        let ans = float(1);
        
        while(i<nom.length() && j<denom.length()) {
            if(ans<H) {
                ans *= float(nom[i]);
                i += 1;
            } else {
                ans /= float(denom[j]);
                j += 1;
            }
        }
        
        while(i<nom.length()) {
            ans *= float(nom[i]);
            i += 1;
        }
        while(j<denom.length()) {
            ans /= float(denom[j]);
            j += 1;
        }
        let tmp = round(ans,5);
        res += string(tmp)+"\n";
        idx+=1;
    }
    return res;
}
