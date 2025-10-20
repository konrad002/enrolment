function submitForm() {
            console.log("Form submission triggered by non-semantic element.");
            const statusElement = document.getElementById('form-status');
            statusElement.textContent = "Application Submitted Successfully!";
            statusElement.classList.remove('hidden');
}
