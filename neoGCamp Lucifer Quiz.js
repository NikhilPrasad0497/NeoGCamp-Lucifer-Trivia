var readlineSync = require('readline-sync')
var chalk = require('chalk')
var score = 0
var username = readlineSync.question('May I know your name ? ')
console.log(chalk.red("************Welcome "+username+" to the Quiz on Lucifer*************"))
console.log("\n##############################")
console.log(chalk.blue("\n*******RULES******"))
console.log(chalk.blue(' 1. There will be 14 Questions \n 2. Each Question will give you 5 points \n 3. Each wrong answer will give you -2 points'))
console.log("\n##############################")

var questionOne = {
  question : '1. Lucifer is actually not vulnerable to earthly. What else has hurt him ridiculous? \n a. An Expensive Vase \n b. A Marbel Staircase \n c. A Sex Toy \n d. A Piano \n',
  answer : 'b'
}

var questionTwo = {
  question : '2. When Lucifer first properly ignites Azrael\'s sword and flames it for a few seconds, has he most likely used what emotion to set it on fire? \n a. sadness \n b. despair \n c. joy \n d. fury \n',
  answer : 'a'
}

var questionThree = {
  question : '3. How is Uriel killed? \n a. Azrael\'s sword \n b. A Pistol \n c. Lucifer\'s silver sword \n d. Mazekeen\'s demon dagger \n',
  answer : 'a'
}

var questionFour = {
  question : '4. Where is Uriel killed? \n a. in a mosque \n b. in a cathedral \n c. in a church \n d. in a chapel \n',
  answer : 'c'
}

var questionFive = {
  question : '5. What\'s the name of the chemical substance Ella and Dan have to get from Ella\'s brother because it\'s an ingredient of the antidote? \n a. ZX3 \n b. XZ3 \n c. YZ3 \n d. YX3 \n',
  answer : 'a'
}

var questionSix = {
  question : '6. In which episode of the second season shows Lucifer Linda his true face? \n a. S2E8 \n b. S2E4 \n c. S2E6 \n d. S2E7 \n',
  answer : 'c'
}

var questionSeven = {
  question : '7. What is the residential building of Lucifer? \n a. A pet show \n b. A nightclub \n c. A post office \n d. A law firm \n',
  answer : 'b'
}

var questionEight = {
  question : '8. When did Lucifer first come to earth? \n a. 2015 \n b. 2011 \n c. 2012 \n d. 2010 \n',
  answer : 'a'
}

var questionNine = {
  question : '9. What material is the dagger / knife that Maze throws at Lucifer, but misses him because he bends down? \n a. Iron \n b. Damascus Steel \n c. Copper \n d. Gold \n',
  answer : 'c'
}

var questionTen = {
  question : '10. Which parts of the blazing sword throws Lucifer through the hole in the world? \n a. Sword + Belt Buckle \n b. Sword + Amenadiel\'s Necklace \n c. Amenadiel\'s Necklace + Belt Buckle \n',
  answer : 'a'
}

var questionEleven = {
  question : '11. When the priest dies in Lucifer\'s arms, what does Lucifer say to the priest\'s assassin when Lucifer charges angrily at him? \n a. \"I\'ll kill you with my bare hands, so you can finally feel real pain.\" \n b. \"Your time on earth is over now, mortal!\" \n c. \"Oh, I would just be in hell, I would do so much to you.\" \n d. \"Will spider\'s time tearing out its legs?\" \n',
  answer : 'd'
}

var questionTwelve = {
  question : '12. In how many parts was the flaming sword divided? \n a. 3 \n b. 6 \n c. 8 \n d. 2 \n',
  answer : 'a'
}

var questionThirteen = {
  question : '13. What did Lucifer play on the piano shortly after his brother Uriel died? \n a. Unforgiven \n b. All along the Watchtower \n c. Hotel California \n d. Mad World \n',
  answer : 'a'
}

var questionFourteen = {
  question : '14. Which brand does Lucifer\'s car belong to? \n a. Corvett \n b. Mercedes \n c. Dodge \n d. Rolce Royce \n',
  answer : 'a'
}

var questionArr = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen, questionEleven, questionTwelve, questionThirteen, questionFourteen]

function checkAns(question,answer){
  var userAns = readlineSync.question(question).toLowerCase()
  if(userAns === answer){
    console.log(chalk.green('Correct Answer!!!'))
    score += 5
  }else{
    console.log('Incorrect Answer!!!')
    score -= 2
  }
  console.log(chalk.cyan(score))
}

for(i = 0; i<questionArr.length;i++){
  checkAns(questionArr[i].question,questionArr[i].answer)
}

var highscore = 60
if(score>highscore){
  console.log(chalk.green('Congratulations! you have set a new High Score '+score))
}else{
  console.log(chalk.red('Sorry you missed it by '+(highscore-score)+' Points'))
}