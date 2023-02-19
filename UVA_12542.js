function solve(input: string) -> string {
    let array = [from a in input.split("\n") select a];
    let con = 1;
    let idx = 0;
    let dig = "0123456789";
    let cm = {"":0};
    for(let i=0; i<10; i+=1) {
        cm[dig[i]] = i;
    }
    let mark:int[] = [];
    for(let i=0; i<=10001; i+=1) {
        if(i%2 == 1) {
            mark.push(0);
        } else {
            mark.push(1);
        }
    }
    mark[2] = 0;
    let res = "";
    for(let i=3; i<=10000; i+=2) {
        if(mark[i] == 0) {
            for(let j=i*i; j<=10000; j+=i) {
                mark[j] = 1;
            }
        }
    }
    for(let t=0; t<array.length(); t+=1){
        if(array[t] == "0") {
            break;
        }
        let v:int[] = [];
        let mn = -1000000000;
        for(let i=0; i<array[t].length(); i+=1) {
            v.push(cm[array[t][i]]);
        }
        for(let i=0; i<v.length(); i+=1) {
            let num = 0;
            for(let j=i; j<v.length(); j+=1) {
                num = num*10+v[j];
                if(num > 10000) {
                    break;
                } else if(mark[num] == 0) {
                    if(num > mn) {
                        mn = num;
                    }
                }
            }
        }
        res += string(mn)+"\n";
        idx += 1;
    }
    return res;
}
