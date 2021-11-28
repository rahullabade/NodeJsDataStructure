let randomMonth = 0;
let BirthMap = new Map([["Jan",0],["Feb",0] ,["Mar",0] ,["Apr",0] ,["May",0] ,["June",0] ,["July",0] ,["Aug",0] ,["Sep",0] ,["Oct",0] ,["Nov",0],["Dec",0] ]);
let count = 0;
for(let i =0; i<50;i++){
    randomMonth = Math.floor( (Math.random() * 12) +1 );
    switch(randomMonth){
        case 1:
            count = BirthMap.get("Jan");
            count++;
            BirthMap.set("Jan",count);
            break;
        case 2:
            count = BirthMap.get("Feb");
            count++;
            BirthMap.set("Feb",count);
            break;
        case 3:
            count = BirthMap.get("Mar");
            count++;
            BirthMap.set("Mar",count);
            break;
        case 4:
            count = BirthMap.get("Apr");
            count++;
            BirthMap.set("Apr",count);
            break;
        case 5:
            count = BirthMap.get("May");
            count++;
            BirthMap.set("May",count);
            break;
        case 6:
            count = BirthMap.get("June");
            count++;
            BirthMap.set("June",count);
            break;
        case 7:
            count = BirthMap.get("July");
            count++;
            BirthMap.set("July",count);
            break;
        case 8:
            count = BirthMap.get("Aug");
            count++;
            BirthMap.set("Aug",count);
            break;
        case 9:
            count = BirthMap.get("Sep");
            count++;
            BirthMap.set("Sep",count);
            break;
        case 10:
            count = BirthMap.get("Oct");
            count++;
            BirthMap.set("Oct",count);
            break;
        case 11:
            count = BirthMap.get("Nov");
            count++;
            BirthMap.set("Nov",count);
            break;
        case 12:
            count = BirthMap.get("Dec");
            count++;
            BirthMap.set("Dec",count);
            break;
    }
}
//Printing map record
for(let [key,value] of BirthMap){
    console.log("key : "+key+" value : "+value);
}