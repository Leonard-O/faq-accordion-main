// Get all elements with the class faq-quiz-container
const toggleButtons = document.querySelectorAll('.faq-quiz-container');
const faqAnswers = document.querySelectorAll('.faq-ans');

// Hide all iconMinus elements initially
const iconMinusElements = document.querySelectorAll('.icon-minus');
iconMinusElements.forEach((iconMinus) => {
    iconMinus.style.display = 'none';
});

// Loop through each FAQ section
toggleButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        faqAnswers.forEach((answer, i) => {
            const iconPlus = document.querySelector(`#icon-plus${i + 1}`);
            const iconMinus = document.querySelector(`#icon-minus${i + 1}`);

            if (index !== i) {
                answer.style.display = 'none';
                iconPlus.style.display = 'block';
                iconMinus.style.display = 'none';
            }
        });

        const faqAns = document.querySelector(`#faq-ans${index + 1}`);
        const iconPlus = document.querySelector(`#icon-plus${index + 1}`);
        const iconMinus = document.querySelector(`#icon-minus${index + 1}`);

        if (faqAns.style.display === 'none' || faqAns.style.display === '') {
            iconPlus.style.display = 'none';
            iconMinus.style.display = 'block';
            faqAns.style.display = 'block';
        } else {
            iconPlus.style.display = 'block';
            iconMinus.style.display = 'none';
            faqAns.style.display = 'none';
        }
    });
});