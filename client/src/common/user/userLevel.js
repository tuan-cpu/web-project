let levelMap = [];
for(let i=0;i<1000;i=i+100){
    levelMap[i] = 'Rookies';
}
for(let i=1000;i<5000;i=i+100){
    levelMap[i] = 'Expert';
}
for(let i=5000;i<10000;i=i+100){
    levelMap[i] = 'Master';
}
export default levelMap;