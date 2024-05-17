document.getElementById("cu-sgpa-cgpa").addEventListener('submit',function(e){

    e.preventDefault();
    const sem_1 = parseFloat(document.getElementById('sem1').value);
    const sem_2 = parseFloat(document.getElementById('sem2').value);
    const sem_3 = parseFloat(document.getElementById('sem3').value);
    const sem_4 = parseFloat(document.getElementById('sem4').value);
    const sem_5 = parseFloat(document.getElementById('sem5').value);
    const sem_6 = parseFloat(document.getElementById('sem6').value);

    if(sem_1 && sem_2 && sem_3 && sem_4 && sem_5 && sem_6) {

        const cgpa = (sem_1 * 20 + sem_2 * 20 + sem_3 * 26 + sem_4 * 26 + sem_5 * 24 + sem_6 * 24) / (20+20+26+26+24+24);
        const resultElement = document.getElementById('result');

        let remarks = '';
        if(cgpa >= 9.000 && cgpa <= 10.000) {
            remarks = 'A++';
        } 
        else if(cgpa >= 8.000 && cgpa <= 8.999) {
            remarks = 'A+';
        } 
        else if(cgpa >= 7.000 && cgpa <= 7.999) {
            remarks = 'A';
        } 
        else if(cgpa >= 6.000 && cgpa <= 6.999) {
            remarks = 'B+';
        } 
        else if(cgpa >= 5.000 && cgpa <= 5.999) {
            remarks = 'B';
        } 
        else if(cgpa >= 4.000 && cgpa <= 4.999) {
            remarks = 'C+';
        } 
        else if(cgpa >= 3.000 && cgpa <= 3.999) {
            remarks = 'C';
        }
        else if(cgpa <= 2.999) {
            remarks = 'F';
        }

    let resultMessage = 'Your CGPA: '+ cgpa.toFixed(3) + '<br>';
    resultMessage += 'Grade: ' + remarks;
    resultElement.innerHTML = resultMessage;

    } 
    else {
        alert("Please Enter SGPA Values For All Semesters.");
    }

});

document.getElementById("cu-sgpa-cgpa").addEventListener('reset', function(e) {
    document.getElementById('result').innerHTML = ''; 
});