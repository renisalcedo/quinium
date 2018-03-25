/*
 *    function getRandomInt(max) 
 *    {
 *      return Math.floor(Math.random() * Math.floor(max));
 *    }
 *
 *    var qAmount = 6; //Passed variable from API component (determines the amount of questions to be generated)
 *    var qId = [["ID1"],["ID2"],["ID3"],["ID4"],["ID5"],["ID6"]]; //The ID of the flashcard
 *    var qTerm = [["Q1?"],["Q2?"],["Q3?"],["Q4?"],["Q5?"],["Q6?"]]; //The question to be asked on the flashcard
 *    var qDef = [["D1"],["D2"],["D3"],["D4"],["D5"],["D6"]]; //The answer to the question on the flashcard
 *
 *    var flashSize = [];
 *    flashSize.length = qAmount; //Size of array is determined by passed variable
 *
 *    var correct = 0;
 *    var incorrect = 0;
 *
 *    //puts all the passed values into an organized array
 *    for(var i = 0; i < qAmount; i++)
 *    {
 *        flashSize[i] = [qId[i], qTerm[i], qDef[i]];
 *    }
 *
 *    if (qAmount < 4) {
 *      //run either swipe or manual input
 *    }
 *
 *    else { 
 *      //4 questions are required for mChoices
 *      mChoices(flashSize);
 *    }
 *    
 *    //----- MULTIPLE CHOICE -----//
 *    //the following function will organize the array terms and generate multiple choice options that will be passed to question generator
 *    //question generator will then use that information and determine whether a question has been answer right or wrong
 *    function mChoices(flashSize)
 *    {
 *      
 *      //creates an exact duplicate of the original array (this is done to remove elements later)
 *      var mirrorArray = flashSize.slice();
 *      
 *      console.log("New array test value: " + mirrorArray[2][1]);
 *      
 *      for (var i = 0; i < qAmount; i++) {
 *        //console.log(flashSize[i][1]);
 *        //console.log(flashSize[i][2]);
 *        
 *        var questionAsked = mirrorArray[i][1];
 *        var correctAnswer = mirrorArray[i][2];
 *         
 *        var a = correctAnswer;
 *        var b = mirrorArray[getRandomInt(qAmount)][2];//May need to make parameter qAmount-1
 *        var c = mirrorArray[getRandomInt(qAmount)][2];//May need to make parameter qAmount-1
 *        var d = mirrorArray[getRandomInt(qAmount)][2];//May need to make parameter qAmount-1
 *      
 *        console.log(questionAsked);
 *        console.log(a, b, c, d);
 *        
 *        var userInput;
 *        if (userInput === correctAnswer) {
 *          correct++;
 *        }
 *      }
 *    }
 *    
 *
 *    //the following function will generate a full question and determine whether the answer is correct or not
 *    function mQuestionGenerator(flashSize) 
 *    {
 *        console.log("Hitlet " + flashSize[1][2]);
 *    }
 *    
 *    //----- SWIPE -----//
 *    
 *    //basic premise, left swipe = false, right swipe = true. If true correctAnswers is incremetned, if false incorrectAnswers is incremented
 *    
 *    //----- USER TERM INPUT -----//
 *
 *    //basic premise, compare a string to another (non case sensative) and see if the user got the answer correct
 *    //same concept with incrementing as the swipe and multiple choice features
 */
