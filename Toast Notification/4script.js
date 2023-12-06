let toastBox = document.getElementById('toastBox');
let success = document.getElementById('success');
let error = document.getElementById('error');
let invalid = document.getElementById('invalid');
let successMsg = '<i class="fas fa-thumbs-up"></i> Successfully Submitted';
let errorMsg = '<i class="fas fa-exclamation-triangle"></i> Error, Please Try again';
let invalidMsg = '<i class="fas fa-times-circle"></i> Invalid input, Please Check your fields';

// success
function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg; 
    toastBox.appendChild(toast);

    if(msg.includes('Error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }
    setTimeout(()=> {
        toast.remove();
    },5000);
}

success.addEventListener('click', function() {
    showToast(successMsg);
});
error.addEventListener('click', function() {
    showToast(errorMsg);
});
invalid.addEventListener('click', function() {
    showToast(invalidMsg);
});



