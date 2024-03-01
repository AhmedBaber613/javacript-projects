const gradeSelector = function() {
    const grade = 'A';

    switch(grade) {
        case 'A':
            console.log("Hooray you got a perfect score");
            break;
        case 'B':
            console.log('Their is room for improvement but overall you have a good grade');
            break;
        case 'C':
            console.log("You could have done better but you passed");  
            break;  
        case 'D':
            console.log("This is a below average score practice more!!!");
            break;
        default:
            console.log('not a valid grade');
    }
};

gradeSelector();