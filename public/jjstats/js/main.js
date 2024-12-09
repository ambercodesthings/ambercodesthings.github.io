
// Main Heading

let i = 0;
let txt = document.getElementById('main-heading').textContent; 
document.getElementById('main-heading').textContent = ''; 
let speed = 80; 

function typeWriter(callback) {
  if (i < txt.length) {
    document.getElementById("main-heading").innerHTML += txt.charAt(i); // Add one character at a time
    i++;
    setTimeout(function(){
        typeWriter(callback);
    }, speed);
  } else {
    callback();
  }
}

function startSubmissionCounter() {
    const query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1ZmyKp6Xqy3Wz1g1iXBaT-R2eQR89fz1nTfIPnEW1C6o/gviz/tq?sheet=Sheet1');

    query.send(function(response) {
        if (response.isError()) {
            document.getElementById('top3').innerHTML = 'Error fetching data: ' + response.getMessage();
            return;
        }

        const data = response.getDataTable();

        let submissionCounts = {};

        for (let i = 0; i < data.getNumberOfRows(); i++) {
            const submissionType = data.getValue(i, 0); 
            const submissionInstance = parseInt(data.getValue(i, 1), 10); // 'Submission Instance'

            if (submissionCounts[submissionType]) {
                submissionCounts[submissionType] += submissionInstance;
            } else {
                submissionCounts[submissionType] = submissionInstance;
            }
        }

        let aggregatedSubmissions = Object.keys(submissionCounts).map(submissionType => {
            return {
                submissionType: submissionType,
                totalInstances: submissionCounts[submissionType]
            };
        });

        aggregatedSubmissions = aggregatedSubmissions.sort((a, b) => b.totalInstances - a.totalInstances);
        const top3Submissions = aggregatedSubmissions.slice(0, 3);

        let output = '<ul>';
        top3Submissions.forEach((submission, index) => {
            output += `<li>
            <div class="submission-instance"><span id="count-${index}">0</span></div>
            <div class="submission-type"> ${submission.submissionType}s</div>
            </li>`;
        });
        output += '</ul>';
        document.getElementById('top3').innerHTML = output;

        top3Submissions.forEach((submission, index) => {
            animateCountUp(`count-${index}`, submission.totalInstances, 1000);
        });
    });
}

// Function to animate counting up
function animateCountUp(elementId, finalValue, duration) {
    const element = document.getElementById(elementId);
    let current = 0;
    const increment = finalValue / (duration / 16); 

    const counter = setInterval(() => {
        current += increment;
        if (current >= finalValue) {
            current = finalValue;
            clearInterval(counter); 
        }
        element.textContent = Math.floor(current);
    }, 16); 
}


google.charts.load('current', { packages: ['corechart', 'table'] });
google.charts.setOnLoadCallback(function() {
    //Typewriter first then submission counter
    typeWriter(startSubmissionCounter); 
});




// hamburger



  

  let hamburger = document.getElementById('hamburger');
let navMenu = document.querySelector('.main-nav');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-active');
});

