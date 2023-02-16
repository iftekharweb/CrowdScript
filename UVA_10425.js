function solve(input: string) -> string {
    let lines = input.split("\n");
    let idx = 0;
    let res = "";
    for(let tc = 1; tc < lines.length(); tc += 1) {
        let a = lines[idx].split(" ");
        if(a.length() == 1) {
            break;
        }
        res += a[0]+"\n";
        let x1 = float(a[1]);
        let y1 = float(a[2]);
        let z1 = float(a[3]);
        let r1 = float(a[4]);
        
        let x2 = float(a[5]);
        let y2 = float(a[6]);
        let z2 = float(a[7]);
        let r2 = float(a[8]);
        
        let xx = float(a[9]);
        let yy = float(a[10]);
        let zz = float(a[11]);
        
        let r = r1+r2;
        let d1 = (xx-x1)*(xx-x1)+(yy-y1)*(yy-y1)+(zz-z1)*(zz-z1);
        let d2 = (xx-x2)*(xx-x2)+(yy-y2)*(yy-y2)+(zz-z2)*(zz-z2);
        if(d1 <= r1*r1) {
            res += "y\n";
        } else {
            res += "n\n";
        }
        if(d2 <= r2*r2) {
            res += "y\n";
        } else {
            res += "n\n";
        }
        if(d1 <= r1*r1 && d2 <= r2*r2) {
            res += "n\n";
        } else if(d1 <= r1*r1 || d2 <= r2*r2){
            res += "y\n";
        } else {
            res += "n\n";
        }
        idx += 1;
    }
    return res;
}
