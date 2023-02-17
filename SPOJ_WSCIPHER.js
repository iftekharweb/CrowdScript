function solve(input: string) -> string {
    let lines = input.split("\n");
    let idx = 0;
    let con = 1;
    let res = "";
    while(con == 1) {
        let p = lines[idx].split(" ");
        let k1 = int(p[0]);
        let k2 = int(p[1]);
        let k3 = int(p[2]);
        idx += 1;
        let a = lines[idx];
        idx += 1;
        if(k1 == 0 && k2 == 0 && k3 == 0) {
            break;
        }
        let alpha = "abcdefghi";
        let g1 = {"":0};
        for(let i = 0; i < alpha.length(); i += 1){
            g1[alpha[i]] = 1;
        }
        alpha = "jklmnopqr";
        let g2 = {"":0};
        for(let i = 0; i < alpha.length(); i += 1){
            g2[alpha[i]] = 1;
        }
        alpha = "stuvwxyz";
        let g3 = {"":0};
        for(let i = 0; i < alpha.length(); i += 1){
            g3[alpha[i]] = 1;
        }
        let b:string[] = [];
        let N = a.length();
        for(let i = 0; i < N; i += 1) {
            b.push(a[i]);
        }
        for(let i = 0; i < N; i += 1) {
            if(g1.contains(a[i]) == true) {
                let j = i;
                let cnt = 0;
                while(cnt < k1) {
                    j = (j+1)%N;
                    if(g1.contains(a[j]) == true) {
                        cnt+=1;
                    }
                }
                b[j] = a[i];
            } else if(g2.contains(a[i]) == true) {
                let j = i;
                let cnt = 0;
                while(cnt < k2) {
                    j = (j+1)%N;
                    if(g2.contains(a[j]) == true) {
                        cnt+=1;
                    }
                }
                b[j] = a[i];
            } else {
                let j = i;
                let cnt = 0;
                while(cnt < k3) {
                    j = (j+1)%N;
                    if(g3.contains(a[j]) == true || a[j] == "_") {
                        cnt+=1;
                    }
                }
                b[j] = a[i];
            }
        }
        let tmp = "";
        for(let i = 0; i < N; i += 1) {
            tmp += b[i];
        }
        res += tmp+"\n";
    }
    return res;
}
