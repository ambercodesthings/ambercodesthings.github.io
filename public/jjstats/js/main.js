
// Main Heading

let i = 0;
let txt = document.getElementById('main-heading').textContent; // Get the text content
document.getElementById('main-heading').textContent = ''; // Clear the content initially
var speed = 80; // The speed/duration of the effect in milliseconds

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
            const submissionType = data.getValue(i, 0); // 'Submission Type'
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
    const increment = finalValue / (duration / 16); // Estimate 60 FPS (about every 16ms)

    const counter = setInterval(() => {
        current += increment;
        if (current >= finalValue) {
            current = finalValue;
            clearInterval(counter); // Stop the counter when it reaches the final value
        }
        element.textContent = Math.floor(current);
    }, 16); // Update every 16 milliseconds (roughly 60 FPS)
}

// Make sure Google Visualization API is loaded before doing anything
google.charts.load('current', { packages: ['corechart', 'table'] });
google.charts.setOnLoadCallback(function() {
    // Trigger the typewriter effect on page load, and start submission counter after it finishes
    typeWriter(startSubmissionCounter); // Call typeWriter, and when it finishes, start the submission counter
});
