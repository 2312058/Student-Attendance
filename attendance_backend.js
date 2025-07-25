document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("attendanceForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    const studentName = form.elements["student"].value.trim();
    if (studentName) {
      console.log(`Student "${studentName}" marked as present.`);
    } else {
      alert("Please enter a student name.");
    }
    form.reset();
  });
});
