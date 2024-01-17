const data = ['홍길동', 173, 48, '임꺽정', 180, 78,
              '전우치', 165, 92, '부채도사', 145, 68];

const fig0 = "----+----+----+----+----+----+----+----+----+----+";
const fig1 = "####+####+####+####+####+####+####+####+####+####+";
const fig2 = "    5   10   15   20   25   30   35   40   45   50";
        
// 학생 정보
console.log();
console.log('<실습5. 비만도 판정>  학번: 202104473  이름: 고서영');
console.log();

// 이곳에 프로그램을 작성하시오.
function calculateBMI(height, weight) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

function determineBMIStatus(bmi) {
    if (bmi < 18.5) {
        judgement = '저체중';
    } else if (bmi < 25.0) {
        judgement = '정상';
    } else if (bmi < 30.0) {
        judgement = '과체중';
    } else {
        judgement = '비만';
    }
    return judgement;
}

/*
<bad case> : bmi 지수 범위 측정
1. bmi >= 18.5 & bmi <25.0 //논리회로 연산지가 틀림
2. 18.5 <= bmi < 25.0 //파이썬은 가능, 자바는 이게 안됨.. 비교범위를 두 개로 나눠야함
3. bmi >= 18.5 && bmi < 24.9 //내가 한것 미만임을 기억해야함
4. 18.5 <= bmi && bmi <= 25.0 //미만
*/

for (let i = 0; i < data.length; i += 3) {
    const name = data[i];
    const height = data[i + 1];
    const weight = data[i + 2];

    const bmi = calculateBMI(height, weight);
    const bmiRounded = bmi.toFixed(2);

    console.log(`이름: ${name}`);
    console.log(`신장: ${height} cm`);
    console.log(`체중: ${weight} kg`);
    const bmiStatus = determineBMIStatus(bmi);
    console.log(`판정: ${bmiStatus} (bmi = ${bmi})`);

    const bmiBar = fig1.substring(0, Math.floor(bmiRounded)) + fig0.substring(Math.floor(bmiRounded));
    const adjustedFig2 = "     " + fig2

    console.log(`도표: ${bmiBar}`);
    console.log(adjustedFig2);
    console.log()
}

console.log();

/*
<도표 출력>

let fig = '';
let i;
for(i=0;i<=bmi-1;i++)
    fig += fig1[i];
for(;i<fig0.length; i++)
    fig += fig0[i];

let fig = '';
for (let i = 0; i < fig0.length; i++)
    fig += (i <= bmi - 1) ? fig1[i] : fig0[i];

let fig = fig1.slice(0,bmi) + fig0.slice(bmi)
*/