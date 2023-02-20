function solve(input: string) -> string {
    let lines = input.split("\n");
    let T = int(lines[0]);
    let idx = 1;
    let res = "";
    while(T!=0) {
        let a = lines[idx];
        let tmp = "";
        let fg = false;
        let rod:int[] = [];
        for(let i=0; i<a.length(); i+=1) {
            if(a[i] == " ") {
                rod.push(int(tmp));
                tmp = "";
                continue;
            }
            tmp += a[i];
        }
        if(tmp != ""){
            rod.push(int(tmp));
        }
        //
        
        //
        idx +=1;
        T-=1;
    }
    return res;
}
