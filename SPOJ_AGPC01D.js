
function solve(input: string) -> string {
    let lines = input.split("\n");
    let T = int(lines[0]);
    let idx = 1;
    let res = "";
    for(let tc = 0; tc < T; tc += 1) {
        let a = lines[idx].split(" ");
        let N = int(a[0]);
        let M = int(a[1]);
        idx += 1;
        let A = lines[idx];
        idx += 1;
        let B = lines[idx];
        idx += 1;
        let cntA = {"a":0,"b":0,"c":0,"d":0,"e":0,"f":0,
                   "g":0,"h":0,"i":0,"j":0,"k":0,"l":0,"m":0,
                   "n":0,"o":0,"p":0,"q":0,"r":0,"s":0,"t":0,
                   "u":0,"v":0,"w":0,"x":0,"y":0,"z":0}
        let cntB = {"a":0,"b":0,"c":0,"d":0,"e":0,"f":0,
                   "g":0,"h":0,"i":0,"j":0,"k":0,"l":0,"m":0,
                   "n":0,"o":0,"p":0,"q":0,"r":0,"s":0,"t":0,
                   "u":0,"v":0,"w":0,"x":0,"y":0,"z":0};
        let ck = "abcdefghijklmnopqrstuvwxyz";
        for(let i = 0; i < N; i += 1) {
            cntA[A[i]] += 1;
        }
        for(let i = 0; i < M; i += 1) {
            cntB[B[i]] += 1;
        }
        let ans = 1000000000000;
        for(let i = 0; i<26; i+=1) {
            if(cntB[ck[i]] > 0) {
                if(cntA[ck[i]]/cntB[ck[i]] < ans) {
                    ans = cntA[ck[i]]/cntB[ck[i]];
                }
            }
        }
        res += string(ans)+"\n";
    }
    return res;
}
