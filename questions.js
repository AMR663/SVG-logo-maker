module.exports = {
    questions: [
        {
            type:'list',
            name:'Shape',
            message:'What shape?',
            choices: [
                "circle",
                "square",
                "triangle"
            ]
        },
        {
            type:'input',
            name:'Shape Color',
            message:'What color for your shape?',
    
        },
        {
            type:'input',
            name:'Text',
            message:'What text? (up to three characters)',
            validate: (input) => {
                if (input.length > 3) {
                    return 'Too long';
                }
                else {
                    return true;
                }
            }
        },
        {
            type:'input',
            name:'Text Color',
            message:'What text color?',
        }
    ]
};